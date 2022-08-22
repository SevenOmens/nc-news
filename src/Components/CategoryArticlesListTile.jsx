export default function CategoryArticleList({ articleByTopicData }) {
  return (
    <>
      <header className="category-articles-header">Results</header>
      <div className="article-list-tiles"></div>
      {articleByTopicData.map(
        ({ title, author, article_id, comment_count }) => {
          return (
            <div key={article_id} className="article-list-tile">
              <img
                className="article-list-photo"
                src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="stock news photo"
              />
              <p className="article-list-title">{title}</p>
              <p className="article-list-author">Author: {author}</p>
              <div>
                <img
                  className="comment-icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfXV8YZxKvoZugOyLnNjeiRM7WpMy1phveOWCFF4&s"
                  alt="commentcount"
                />
                <div className="comment-number-text">{comment_count}</div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
