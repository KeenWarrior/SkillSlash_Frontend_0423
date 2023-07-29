import axios from "axios";

export default function GitHubPageUser({ data, username, count }) {
  return (
    <div>
      <h1>Username: {username}</h1>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <h1>Nextjs got Stars: {count}</h1>
    </div>
  );
}

// export async function getServerSideProps({ query }) {
//   const { username } = query;
//   // Fetch data from external API
//   const res = await axios.get("https://api.github.com/users/" + username);
//   const { data } = res;

//   // Pass data to the page via props
//   return { props: { data, username } };
// }

export async function getStaticProps() {
  const res = await axios.get("https://api.github.com/repos/vercel/next.js");
  const { data } = res;
  const count = data.stargazers_count;
  return { props: { count } };
}
