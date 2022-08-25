import { getArticleComments } from "../Api";
import { useState, useEffect, useContext } from "react";
import AddComment from "./AddComment";
import { UserContext } from "../Contexts/LoggedInUser";
import DeleteComment from "./DeleteComment";

export default function ArticleComments({ article_id }) {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { value } = useContext(UserContext);

  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      const sortedComments = data.sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );
      setCommentData(sortedComments);
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
            {value.username === author ? (
              <DeleteComment
                comment_id={comment_id}
                commentData={commentData}
                setCommentData={setCommentData}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
}
