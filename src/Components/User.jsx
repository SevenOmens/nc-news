import { useContext, useState } from "react";
import { UserContext } from "../Contexts/LoggedInUser";

export default function User() {
  const { value, setValue } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  function userLogin() {
    setValue({
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    });
    setLoggedIn(true);
  }

  return loggedIn ? (
    <>
      <h3 className="logged-in-text">You are logged in as {value.username}</h3>
      <img className="user-avatar" src={value.avatar_url}></img>
    </>
  ) : (
    <>
      <div>
        <img
          className="login-btn-img"
          src="https://static.vecteezy.com/system/resources/thumbnails/006/017/592/small/ui-profile-icon-vector.jpg"
          onClick={userLogin}
        ></img>
      </div>
    </>
  );
}
