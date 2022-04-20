import React, {useEffect} from 'react'
import { useMoralis } from 'react-moralis'
import CryptLogo from './CryptLogo'
import Footer from './Footer'
import NewUserHeader from './NewUserHeader'
import Plans from './Plans'
import { useRouter } from 'next/router'

const NewUser = () => {

  const { user, Moralis } = useMoralis();
  const router = useRouter();
  
  useEffect(() => {
    async function redirect () {
      const u = user.attributes.ethAddress
    
      const query = new Moralis.Query('SubscribedUsers');
      query.equalTo('isSubscribed', true);
      query.equalTo('ethAddress', u);

      const runQuery = await query.find();
      const isT = runQuery[0].attributes.isSubscribed;
      if (isT = true) {
        router.push('/browse');
      } else {
        router.push('/');
      }
    }
    redirect();
  }, []);

  return (
    <div>
      <NewUserHeader></NewUserHeader>
      <CryptLogo></CryptLogo>
      <Plans></Plans>
      <Footer></Footer>
    </div>
  )
}

export default NewUser