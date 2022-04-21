import React, {useState, useEffect} from 'react'
import { useMoralis } from 'react-moralis'
import { ShortenAddress } from '../../utils/ShortenAddress'

const Address = () => {

    const [userName, setUserName] = useState('0x0000000000000000000000');

    const { user } = useMoralis();

    //The user object imports after a delay
    const getUser = () => {
      if(!user) return null;
      setUserName(user.get('ethAddress'))
    }

    useEffect(() => {
      getUser();
    });
    
  return (
    <div style={{ color: '#fff', marginRight: '5px' }} >{ShortenAddress(userName)}</div>
  )
}

export default Address