const axios = require("axios");

export function GetAllArticles(sort_by, order) {
  // console.log(order);
  return axios
    .get("https://adam-news.herokuapp.com/api/articles", {
      params: {
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}

export function GetArticlesByTopic(topic_slug) {
  return axios
    .get(`https://adam-news.herokuapp.com/api/articles`, {
      params: {
        topic: topic_slug,
      },
    })
    .then(({ data }) => {
      return data;
    });
}

export function getTopics() {
  return axios
    .get("https://adam-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
}

export function getArticleById(article_id) {
  return axios
    .get(`https://adam-news.herokuapp.com/api/articles/${article_id}`, {
      params: {
        id: article_id,
      },
    })
    .then(({ data }) => {
      return data.result;
    });
}

export function upvoteArticle(article_id) {
  const voteUpdate = { inc_votes: 1 };
  return axios
    .patch(
      `https://adam-news.herokuapp.com/api/articles/${article_id}`,
      voteUpdate
    )
    .then(({ data }) => {
      return data.results;
    });
}

export function getArticleComments(article_id) {
  return axios
    .get(
      `https://adam-news.herokuapp.com/api/articles/${article_id}/comments`,
      {
        params: {
          id: article_id,
        },
      }
    )
    .then(({ data }) => {
      return data;
    });
}

export function PostComment(article_id, newComment, username) {
  const comment = { username: username, body: newComment };
  return axios
    .post(
      `https://adam-news.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data;
    });
}
