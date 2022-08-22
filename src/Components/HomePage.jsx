import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function HomePage() {
  //   const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1>Welcome to NC News</h1>
      <Link to="/articles">
        <button>Click to see all articles</button>
      </Link>
    </>
  );
}

//Title [DONE]
//User
//Topics Nav Bar
//All articles button
//Selection of most recent articles
