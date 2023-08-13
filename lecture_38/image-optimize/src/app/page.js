import Image from "next/image";
import styles from "./page.module.css";
import thor from "./thor.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={thor} />
      <h1>Welcome to my page</h1>
    </main>
  );
}
