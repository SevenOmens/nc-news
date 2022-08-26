import { useState, useEffect } from "react";
import { GetAllArticles } from "../Api";
import RecentArticleList from "./RecentArticleList";

export default function RecentArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    GetAllArticles().then((data) => {
      const recentArts = data.sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );
      setRecentArticles(recentArts.slice(0, 10));
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          <>
            <div>
              <RecentArticleList recentArticles={recentArticles} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
