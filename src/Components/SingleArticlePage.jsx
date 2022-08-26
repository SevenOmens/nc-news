import { useState } from "react";
import { upvoteArticle } from "../Api";
import ArticleComments from "./ArticleComments";

export default function SingleArticlePage({ singlearticledata }) {
  const date = new Date(singlearticledata.created_at)
    .toUTCString()
    .substring(0, 17);
  const [localVotes, setLocalVotes] = useState(0);
  const [minimiseComments, setMinimiseComments] = useState(true);

  function handleClick(event) {
    event.currentTarget.disabled = true;
    setLocalVotes(1);
    upvoteArticle(singlearticledata.article_id);
  }

  return (
    <>
      <h1>{singlearticledata.title}</h1>
      <h4>Author - {singlearticledata.author}</h4>
      <div>{date}</div>
      <div>Topic: {singlearticledata.topic}</div>
      <p className="article-body">{singlearticledata.body}</p>
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
