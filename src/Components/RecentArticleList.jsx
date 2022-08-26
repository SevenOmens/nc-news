import { Link } from "react-router-dom";

export default function RecentArticleList({ recentArticles }) {
  console.log(recentArticles);

  return (
    <>
      <header className="recent-articles-header"> Recent Articles</header>
      <div className="article-list-tiles">
        {recentArticles.map(
          ({ title, author, article_id, comment_count, created_at, body }) => {
            const date = new Date(created_at).toUTCString().substring(0, 17);
            const bodyIntro = body.split(".")[0];
            return (
              <Link to={`/articles/${article_id}`}>
                <div key={article_id} className="article-list-tile">
                  <img
                    className="article-list-photo"
                    src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="stock news"
                  />
                  <p className="article-list-title">{title}</p>
                  <p className="article-list-preview">{bodyIntro}</p>
                  <div className="recent-articles-timestamp"> {date}</div>
                  {/* <img
                  className="timestamp-icon"
                  src="https://toppng.com/uploads/preview/open-clock-svg-ico-11568922660kdcxssexhs.png"
                ></img> */}

                  <div className="comment-number-text">
                    Comments:{comment_count}
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </>
  );
}
