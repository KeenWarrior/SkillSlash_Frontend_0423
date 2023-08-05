import Image from "next/image";
import styles from "./page.module.css";
import FetchUser from "@/components/FetchUser";
import { Suspense } from "react";
import dynamic from "next/dynamic";

export default function Home({ user, username, query }) {
  const FetchUser = dynamic(() => import("@/components/FetchUser"));

  return (
    <main className={styles.main}>
      <h1>{JSON.stringify(query)}</h1>
      <FetchUser user={user} username={username} />
    </main>
  );
}

export async function getServersideProps({ query, params, req }) {
  const username = query.username;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  return {
    props: {
      user: data,
      username: username,
      query: JSON.stringify(req),
    },
  };
}
