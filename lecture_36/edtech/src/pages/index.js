import Head from "next/head";
import axios from "@/utils/axios";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingPageHero from "@/components/landing/LandingPageHero";
import TopAppBar from "@/components/landing/TopAppBar";
import CourseSelections from "@/components/landing/CourseSelections";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ heroSlides }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TopAppBar />
        <LandingPageHero heroSlides={heroSlides} />
        <CourseSelections />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get("/landing/hero");
  const heroSlides = response.data;
  return {
    props: {
      heroSlides,
    },
  };
};