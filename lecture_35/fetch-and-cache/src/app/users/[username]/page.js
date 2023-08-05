import dynamic from "next/dynamic";

export default function Home({ user }) {
  // const FetchUser = dynamic(() => import("@/components/FetchUser"));

  return (
    <main>
      <h1>{user.name}</h1>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const username = params.username;

  const res = await fetch("https://api.github.com/users/keenwarrior");
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}
