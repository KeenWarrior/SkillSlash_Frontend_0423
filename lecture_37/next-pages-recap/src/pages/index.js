import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <h1>{props.time}</h1>
    </>
  )
}

export const getStaticProps = async () => {
  console.log('getStaticProps')
  const date = new Date().getTime()
  return {
    props: {
      time: date.toLocaleString(),
    },
    revalidate: 1800
  }
}
