import React, {useEffect} from 'react'
import { useMoralis } from 'react-moralis'
import styles from '../styles/Player.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'

const vid = 'netflix.mp4'

const Player = () => {
    const { isAuthenticated } = useMoralis();
    const router  = useRouter();

    useEffect(() => {
        if(!isAuthenticated) router.push('/');
    }, [isAuthenticated] )
  return (
    <div className={styles.player}>
      <Head>
        <title>Welcome to Web3 Netflix - Stream of favorite Shows</title>
        <meta name="description" content="A decentralized streaming service that offers wide varienty of award-winning TV shows, movies, anime, documentaries, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <video autoPlay controls className={styles.videoPlayer}>
            <source src={vid} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Player