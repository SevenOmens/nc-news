import { getArticleComments } from "../Api";
import { useState, useEffect } from "react";
import AddComment from "./AddComment";

export default function ArticleComments({ article_id }) {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(commentData);

  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      setCommentData(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      <h4>These are comments</h4>
      <AddComment commentData={commentData} setCommentData={setCommentData} />
      {commentData.map(({ body, author, votes, comment_id }) => {
        return (
          <div key={comment_id} className="comment-tile">
            <div>{body}</div>
            <div>{author}</div>
            <div>Votes:{votes}</div>
          </div>
        );
      })}
    </>
  );
}
