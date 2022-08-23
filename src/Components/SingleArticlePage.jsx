import { useState } from "react";
import { upvoteArticle } from "../Api";
import ArticleComments from "./ArticleComments";

export default function SingleArticlePage({ singlearticledata }) {
  const date = new Date(singlearticledata.created_at).toUTCString();
  const [localVotes, setLocalVotes] = useState(0);
  const [minimiseComments, setMinimiseComments] = useState(true);
  console.log(singlearticledata.article_id);

  function handleClick(event) {
    event.currentTarget.disabled = true;
    setLocalVotes(1);
    upvoteArticle(singlearticledata.article_id);
  }

  return (
    <>
      <h1>{singlearticledata.title}</h1>
      <h4>{singlearticledata.author}</h4>
      <div>{date}</div>
      <div>{singlearticledata.topic}</div>
      <p>{singlearticledata.body}</p>
      <div>Votes:{singlearticledata.votes + localVotes}</div>
      <button className="article-vote-btn" onClick={handleClick}>
        Upvote this article
      </button>
      {minimiseComments ? (
        <div>
          <button onClick={() => setMinimiseComments(false)}>
            Click to see all the comments and engage in the discussion
          </button>
        </div>
      ) : (
        <>
          <button onClick={() => setMinimiseComments(true)}>
            Click to minimise the comments{" "}
          </button>
          <ArticleComments article_id={singlearticledata.article_id} />
        </>
      )}
    </>
  );
}
