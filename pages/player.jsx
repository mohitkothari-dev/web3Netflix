import React from 'react'
import { useMoralis } from 'react-moralis'
import styles from '../styles/Player.module.css'
import { useRouter } from 'next/router'

const vid = 'netflix.mp4'

const Player = () => {
    const { isAuthenticated } = useMoralis();
    const router  = useRouter();

    useEffect(() => {
        if(!isAuthenticated) router.push('/');
    }, [isAuthenticated] )
  return (
    <div className={styles.player}>
        <video autoPlay controls className={styles.videoPlayer}>
            <source src={vid} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Player