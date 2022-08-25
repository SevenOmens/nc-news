import { GetAllArticles } from "../Api";
import { useState, useEffect } from "react";
import ArticleListTile from "./ArticleListTile";
import { Link, useSearchParams } from "react-router-dom";
import TopicsNavBar from "./TopicsNavBar";

const AllArticlesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articledata, setArticleData] = useState([]);
  const ascBtn = document.getElementById("ASC");
  const descBtn = document.getElementById("DESC");

  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");
  useEffect(() => {
    GetAllArticles(sortBy, orderBy).then((data) => {
      setArticleData(data);
      setIsLoading(false);
    });
  }, [sortBy, orderBy]);

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

  return (
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
              <ArticleListTile articledata={articledata} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllArticlesList;
