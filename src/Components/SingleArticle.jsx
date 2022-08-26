import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../Api";
import SingleArticlePage from "./SingleArticlePage";
import PageNotFound from "./PageNotFound";

export default function SingleArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [singlearticledata, setSingleArticleData] = useState([]);
  const { article_id } = useParams();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setSingleArticleData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.msg);
        setError(true);
      });
  }, [article_id]);

  return error ? (
    <PageNotFound errorMsg={errorMsg} />
  ) : (
    <>
      <div>
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>
      </div>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <SingleArticlePage singlearticledata={singlearticledata} />
      )}
    </>
  );
}
