const axios = require("axios");

export function GetAllArticles() {
  return axios
    .get("https://adam-news.herokuapp.com/api/articles")
    .then(({ data }) => {
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
      console.log(data.result);
      return data.result;
    });
}
