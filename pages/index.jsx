import Head from 'next/head'
import Welcome from '../myComponents/Welcome'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import NewUser from '../myComponents/NewUserComponents/NewUser';

export default function Home() {

  const { isAuthenticated } = useMoralis();

  return (
    <div>
      <Head>
        <title>Web3 Netflix </title>
        <meta name="description" content="A decentralized streaming service that offers wide varienty of award-winning TV shows, movies, anime, documentaries, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isAuthenticated
        ?
        <>
        <NewUser></NewUser>
        </>
        :
        <Welcome></Welcome>
      }
    </div>
  )
}
