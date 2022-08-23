export default function SingleArticlePage({ singlearticledata }) {
  const date = new Date(singlearticledata.created_at).toUTCString();
  console.log(singlearticledata);
  return (
    <>
      <h1>{singlearticledata.title}</h1>
      <h4>{singlearticledata.author}</h4>
      <div>{date}</div>
      <div>{singlearticledata.topic}</div>
      <p>{singlearticledata.body}</p>
    </>
  );
}
