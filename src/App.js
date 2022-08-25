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
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [value, setValue] = useState("Not Logged In");
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ value, setValue }}>
          <User />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<AllArticlesList />} />
            <Route
              path="/topics/:topic_slug"
              element={<ArticlesByCategory />}
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/topics/*" element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
