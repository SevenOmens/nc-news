import { useState } from "react";
import { upvoteArticle } from "../Api";

export default function SingleArticlePage({ singlearticledata }) {
  const date = new Date(singlearticledata.created_at).toUTCString();
  const [localVotes, setLocalVotes] = useState(0);

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
    </>
  );
}
