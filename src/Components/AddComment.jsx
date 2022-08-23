import { useState, useContext } from "react";
import { UserContext } from "../Contexts/LoggedInUser";
import { useParams } from "react-router-dom";
import { PostComment } from "../Api";

export default function AddComment() {
  const { value } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const successMessage = () =>
    window.alert(
      "Your comment has been posted. Refresh the page to see all comments"
    );

  function handleClick(event) {
    event.preventDefault();
    PostComment(article_id, newComment, value.username);
    successMessage();
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
