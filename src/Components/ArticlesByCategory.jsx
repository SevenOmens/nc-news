import { GetArticlesByTopic } from "../Api";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import CategoryArticleList from "./CategoryArticlesListTile";

export default function ArticlesByCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [articleByTopicData, setArticleByTopicData] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    GetArticlesByTopic(topic_slug).then((data) => {
      setArticleByTopicData(data);
      setIsLoading(false);
    });
  }, [topic_slug]);

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
              <CategoryArticleList articleByTopicData={articleByTopicData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
