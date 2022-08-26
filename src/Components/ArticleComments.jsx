import { useState, useEffect, useContext } from "react";
import { getArticleComments } from "../Api";
import { UserContext } from "../Contexts/LoggedInUser";
import DeleteComment from "./DeleteComment";
import AddComment from "./AddComment";

export default function ArticleComments({ article_id }) {
  const [commentData, setCommentData] = useState([]);
  const { value } = useContext(UserContext);

  useEffect(() => {
    getArticleComments(article_id).then((data) => {
      const sortedComments = data.sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );
      setCommentData(sortedComments);
    });
  }, [article_id]);

  return (
    <>
      <h4>Comments Section</h4>
      <AddComment commentData={commentData} setCommentData={setCommentData} />
      {commentData.map(({ body, author, votes, comment_id }) => {
        return (
          <div className="comments-section" key={comment_id}>
            <div className="comment-tile">
              <div className="comment-body">{body}</div>
              <div className="comment-author">{author}</div>
              <div className="comment-votes">Votes:{votes}</div>
              {value.username === author ? (
                <DeleteComment
                  comment_id={comment_id}
                  commentData={commentData}
                  setCommentData={setCommentData}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
}
