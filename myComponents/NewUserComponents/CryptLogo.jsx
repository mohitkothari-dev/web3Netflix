import React from 'react'
import { CryptoLogos } from 'web3uikit'
import styles from '../../styles/CryptLogo.module.css'

const CryptLogo = () => {
  return (
    <div className={styles.cryptoLogos}>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="ethereum" size="48px" />
      <span>Pay using ethers</span>
    </div>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="binance" size="48px" />
      <span>Coming Soon...</span>
    </div>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="polygon" size="48px" />
      <span>Coming Soon...</span>
    </div>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="avalanche" size="48px" />
      <span>Coming Soon...</span>
    </div>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="fantom" size="48px" />
      <span>Coming Soon...</span>
    </div>
    <div className={styles.cryptoLogos__logo}>
      <CryptoLogos chain="arbitrum" size="48px" />
      <span>Coming Soon...</span>
    </div>
  </div>
  )
}

export default CryptLogo