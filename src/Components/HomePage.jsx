import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TopicsNavBar from "./TopicsNavBar";
import User from "./User";

export default function HomePage() {
  //   const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1>Welcome to NC News</h1>

      <Link to="/articles">
        <button>Click to see all articles</button>
      </Link>
      <TopicsNavBar />
    </>
  );
}

//Title [DONE]
//User
//Topics Nav Bar[DONE]
//All articles button [DONE]
//Selection of most recent articles
