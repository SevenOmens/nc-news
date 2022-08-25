import { deleteArticleComment } from "../Api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DeleteComment({
  comment_id,
  commentData,
  setCommentData,
}) {
  const successMsg = () => window.alert("Comment Deleted");
  function handleClick() {
    setCommentData((currComments) => {
      return currComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    deleteArticleComment(comment_id)
      .then(() => {
        successMsg();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <button className="delete-btn" onClick={handleClick}>
      Delete this comment
    </button>
  );
}
