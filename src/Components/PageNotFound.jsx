import { Link } from "react-router-dom";

export default function PageNotFound({ errorMsg }) {
  return (
    <>
      <div>
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>
      </div>
      <h2>Oops! {errorMsg}</h2>
    </>
  );
}
