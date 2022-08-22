export function GetAllArticles() {
  return fetch("https://adam-news.herokuapp.com/api/articles")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
