import { getArticleById } from "../Api";
import SingleArticlePage from "./SingleArticlePage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [singlearticledata, setSingleArticleData] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setSingleArticleData(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <h3>Loading</h3>
  ) : (
    <SingleArticlePage singlearticledata={singlearticledata} />
  );
}
