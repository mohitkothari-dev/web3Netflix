import React from 'react'
import { useMoralis } from 'react-moralis'
import { ShortenAddress } from '../../utils/ShortenAddress'

const Address = () => {

    const { user } = useMoralis();
    const currentUser = user.get('ethAddress');
  return (
    <div style={{ color: '#fff', marginRight: '5px' }} >{ShortenAddress(currentUser)}</div>
  )
}

export default Address