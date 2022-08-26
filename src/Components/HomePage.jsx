import { Link } from "react-router-dom";
import RecentArticles from "./MostRecentArticles";
import TopicsNavBar from "./TopicsNavBar";

export default function HomePage() {
  //   const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1>Welcome to NC News</h1>
      <Link to="/articles">
        <button className="all-articles-btn">Click to see all articles</button>
      </Link>
      <TopicsNavBar />
      <RecentArticles />
    </>
  );
}
