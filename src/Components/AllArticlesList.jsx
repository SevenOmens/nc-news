import { GetAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleListTile from "./ArticleListTile";
import { Link } from "react-router-dom";

const AllArticlesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articledata, setArticleData] = useState([]);

  useEffect(() => {
    GetAllArticles().then((data) => {
      setArticleData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
      <div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <>
            <div>
              <ArticleListTile articledata={articledata} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllArticlesList;
