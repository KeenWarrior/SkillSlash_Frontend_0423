import Image from "next/image";
import styles from "./page.module.css";
import Click from "../components/Click";
import GithhubProfile from "@/components/GithhubProfile";

// export const generateMetadata = () => {
//   return {
//     title: new Date().toISOString(),
//     description: "Generated by create next app",
//   };
// };

export default function Home() {
  return (
    <div>
      <GithhubProfile/>
    </div>
  );
}
