import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "./App.css";
import AllArticlesList from "./Components/AllArticlesList";
import ArticlesByCategory from "./Components/ArticlesByCategory";
import SingleArticle from "./Components/SingleArticle";
import { UserContext } from "./Contexts/LoggedInUser";
import { useState } from "react";
import User from "./Components/User";
import TopicsNavBar from "./Components/TopicsNavBar";

function App() {
  const [value, setValue] = useState("Not Logged In");
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ value, setValue }}>
          <User />
          <Link to="/articles">
            <button className="all-articles-btn">
              Click to see all articles
            </button>
          </Link>
          <TopicsNavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<AllArticlesList />} />
            <Route
              path="/topics/:topic_slug"
              element={<ArticlesByCategory />}
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
