import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "./App.css";
import AllArticlesList from "./Components/AllArticlesList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<AllArticlesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
