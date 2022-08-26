import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { GetArticlesByTopic } from "../Api";
import CategoryArticleList from "./CategoryArticlesListTile";
import PageNotFound from "./PageNotFound";
import TopicsNavBar from "./TopicsNavBar";

export default function ArticlesByCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articleByTopicData, setArticleByTopicData] = useState([]);
  const { topic_slug } = useParams();
  const ascBtn = document.getElementById("ASC");
  const descBtn = document.getElementById("DESC");
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    GetArticlesByTopic(topic_slug, sortBy, orderBy)
      .then((data) => {
        setArticleByTopicData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.response.data.msg);
        setError(true);
      });
  }, [topic_slug, sortBy, orderBy]);

  function onChangeSortBy(event) {
    const sortObj = { sort_by: event.target.value };
    setSearchParams(sortObj);
    if ((ascBtn.checked = true)) {
      ascBtn.checked = false;
    }
    if ((descBtn.checked = true)) {
      descBtn.checked = false;
    }
  }

  function onChangeOrder(event) {
    searchParams.set("order", event.target.value);
    setSearchParams(searchParams);
  }

  return error ? (
    <PageNotFound errorMsg={errorMsg} />
  ) : (
    <>
      <div>
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>
      </div>
      <Link to="/articles">
        <button className="all-articles-btn">Click to see all articles</button>
      </Link>
      <TopicsNavBar />

      <div onChange={onChangeSortBy}>
        <p>Sort articles by:</p>
        <input type="radio" value="created_at" name="sortby" /> Date
        <input type="radio" value="comment_count" name="sortby" /> Comment Count
        <input type="radio" value="votes" name="sortby" /> Votes
      </div>

      <div onChange={onChangeOrder}>
        <p>Order</p>
        <input type="radio" value="ASC" name="order" id="ASC" /> Ascending
        <input type="radio" value="DESC" name="order" id="DESC" /> Descending
      </div>

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
