import React from 'react'
import Image from 'next/image'
import styles from '../styles/Welcome.module.css'
import { useMoralis } from 'react-moralis'

const logo = '/images/logo.png'
const back = './background.jpg'

const Welcome = () => {

  const { authenticate, isAuthenticating, authError } = useMoralis();

  const waveHello = () => {
    authenticate({ signingMessage: "Welcome to the Web3 Netflix Dapp" });
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', background: `url(${back}) no-repeat center center/cover` }}>
      <div className={styles.WelcomeScreen__logo}>
        <Image src={logo} alt='Netflix logo' layout='fill'></Image>
      </div>
      <div className={styles.welcomeScreen__button}>
        <button style={{ background: 'var(--primary-color)', padding: '7px 17px', fontSize: '1rem', fontWeight: 500, color: '#fff', borderRadius: '3px', border: 'none', outline: 'none', cursor: 'pointer', textAlign: 'center' }}
        onClick={() => waveHello()}>Sign In</button>
      </div>
      <div className={styles.welcomeScreen__text}>
        <h1 className={styles.h1}>Unlimited movies, TV shows and more.</h1>
        <h2 className={styles.h2}>Watch anywhere. Cancel anytime.</h2>
        {authError
        ?
        <h3 className={styles.h3}>{authError.message}</h3>
        :
        <h3 className={styles.h3}>{isAuthenticating ? 'Authenticating...' : ''}</h3>
        }
      </div>
    </div>
  )
}

export default Welcome