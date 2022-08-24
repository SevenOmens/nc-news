import { useState, useContext, useEffect } from "react";
import { UserContext } from "../Contexts/LoggedInUser";
import { useParams } from "react-router-dom";
import { PostComment } from "../Api";

export default function AddComment({ commentData, setCommentData }) {
  const { value } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const successMessage = () => window.alert("Your comment has been posted");

  function handleClick(event) {
    if (value === "Not Logged In") {
      event.preventDefault();
      window.alert("You must be logged in to post a comment");
    } else {
      event.preventDefault();
      PostComment(article_id, newComment, value.username).then(() => {
        setCommentData((currComments) => {
          const commentObj = {
            author: value.username,
            body: newComment,
            votes: 0,
          };
          const updatedComments = [...currComments];
          updatedComments.unshift(commentObj);
          return updatedComments;
        });
      });
      successMessage();
    }
  }

  return (
    <>
      <form id="textBox" className="inputform">
        <label htmlFor="textBox" className="lightfont">
          <input
            className="comment-input-box"
            type="text"
            placeholder="Write a comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            required
          />
        </label>

        <button type="submit" className="submitButton" onClick={handleClick}>
          Submit Comment
        </button>
      </form>
    </>
  );
}
