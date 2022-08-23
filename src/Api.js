const axios = require("axios");

export function GetAllArticles() {
  return axios
    .get("https://adam-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
}

export function GetArticlesByTopic(topic_slug) {
  return fetch(
    `https://adam-news.herokuapp.com/api/articles?topic=${topic_slug}`
  )
    .then((res) => res.json())
    .then((data) => {
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
