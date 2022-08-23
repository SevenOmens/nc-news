import { UserContext } from "../Contexts/LoggedInUser";
import { useContext, useState } from "react";

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
    <h3>You are logged in as {value.username}</h3>
  ) : (
    <>
      <div>
        <button onClick={userLogin}> Login</button>
      </div>
    </>
  );
}