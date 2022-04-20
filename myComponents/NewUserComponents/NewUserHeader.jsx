import React from 'react'
import Image from 'next/image'
import styles from '../../styles/NewUserHeader.module.css'
import { useMoralis } from 'react-moralis'

const logo = '/images/logo.png'

const NewUserHeader = () => {

    const { logout } = useMoralis();

  return (
    <div style={{ width: '100%', height:'85px', borderBottom: '1px solid #e6e6e6' }}>
    <div className={styles.NewUserHeader__logo}>
        <Image src={logo} alt='Netflix logo' layout='fill' ></Image>
    </div>
    <div className={styles.NewUserHeader__text} >
        <a onClick={() => logout()} className={styles.NewUserHeader__a}>Sign Out</a>
    </div>
    </div>
  )
}

export default NewUserHeader