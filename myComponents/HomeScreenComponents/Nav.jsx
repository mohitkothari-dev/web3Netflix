import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import { Avatar } from 'web3uikit'
import styles from '../../styles/Nav.module.css'
import { useMoralis } from 'react-moralis'

const logo = '/images/logo.png'

const Nav = () => {

  const { logout } = useMoralis();
  const [show, handleShow] = useState();

  const transitionNavBar = () => {
    if(window.scrollY > 150){
      handleShow(true);
    }else {
      handleShow(false);
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  },[]);

  return (
    <div className={`Nav ${show && 'Nav__black'}`}>
      <div className={styles.Nav__contents}>
        <div className={styles.Nav__logo} >
          <Image src={logo} alt='Netflix logo' layout='fill'></Image>
        </div>
        <div className={styles.Nav__profile} onClick={() => logout()} >
          <Avatar theme="image" size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Nav