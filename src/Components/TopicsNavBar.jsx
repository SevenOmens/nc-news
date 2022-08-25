import { useEffect, useState } from "react";
import { getTopics } from "../Api";
import { Link } from "react-router-dom";

export default function TopicsNavBar() {
  const [topicsNav, setTopicsNav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((data) => {
      setTopicsNav(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <nav>
        <h3>Articles by topic</h3>
        {topicsNav.map((topic) => {
          return (
            <>
              <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                <button className="topic-btn">{topic.slug}</button>
              </Link>
            </>
          );
        })}
      </nav>
    </>
  );
}
