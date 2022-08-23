import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "./App.css";
import AllArticlesList from "./Components/AllArticlesList";
import ArticlesByCategory from "./Components/ArticlesByCategory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<AllArticlesList />} />
          <Route path="/topics/:topic_slug" element={<ArticlesByCategory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
