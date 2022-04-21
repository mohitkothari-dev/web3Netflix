import { Button } from '@mohitkothari/buttons'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { Icon, Card } from 'web3uikit'
import styles from '../../styles/Plans.module.css'
import { useRouter } from 'next/router'

const Plans = () => {

  const { Moralis, user } = useMoralis();

  const recAddress = process.env.NEXT_PUBLIC_RECEIVER_ADDRESS
  
  //Global variables for users who subscribed
  const Users = Moralis.Object.extend('SubscribedUsers');
  const users = new Users();

  const router = useRouter();
  const redirect = async () => {
    const u = user.attributes.ethAddress        //current user / loggedin user
    console.log(u)

    const query = new Moralis.Query('SubscribedUsers');
    query.equalTo('isSubscribed', true);
    query.equalTo('ethAddress', u);

    const findAll = await query.find();         //find all the users with isSubscribed true  //query.first
    const isT = findAll[0].attributes.isSubscribed     //console.log(findAll.attributes.ethAddress)
    console.log(isT);
    router.push('/browse');
  }

  const transfer0001Eth = async () => {
    await Moralis.enableWeb3();
    await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.0001"), receiver: recAddress})
    //storing the data to the database
    users.save({
      isSubscribed: true,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress'),
      planType: 'Mobile'
    }).then((isSubscribed) => {
      console.log(isSubscribed);
    }, (error) => {
      console.log(error);
    }
    );
    redirect();
  }

  const transfer001Eth = async () => {
    await Moralis.enableWeb3();
    await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.001"), receiver: recAddress})
    //storing the data to the database
    users.save({
      isSubscribed: true,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress'),
      planType: 'Basic'
    }).then((isSubscribed) => {
      console.log(isSubscribed);
    }, (error) => {
      console.log(error);
    }
    );
    redirect();
  }

  const transfer01Eth = async () => {
    await Moralis.enableWeb3();
    await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.01"), receiver: recAddress})
    //storing the data to the database
    users.save({
      isSubscribed: true,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress'),
      planType: 'Standard'
    }).then((isSubscribed) => {
      console.log(isSubscribed);
    }, (error) => {
      console.log(error);
    }
    );
    redirect();
  }

  const transferPoint1Eth = async () => {
    await Moralis.enableWeb3();
    await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.1"), receiver: recAddress})
    //storing the data to the database
    users.save({
      isSubscribed: true,
      username: user.getUsername(),
      ethAddress: user.get('ethAddress'),
      planType: 'Premium'
    }).then((isSubscribed) => {
      console.log(isSubscribed);
    }, (error) => {
      console.log(error);
    }
    );
    redirect();
  }

  return (
    <div className={styles.plans}>
        <h1 className={styles.plans__h1}>Choose the plan that's right for you</h1>
        <ul style={{ padding: 0, fontSize: '18px' }}>
            <li style={{ display: 'flex' }}>
            <Icon fill='var(--primary-color)' size={24} svg='check' ></Icon> 
            <span>Watch all you want. Ad-free.</span>
            </li>
            <li style={{ display: 'flex' }}>
            <Icon fill='var(--primary-color)' size={24} svg='check' ></Icon>
            <span>Recommendations just for you.</span>
            </li>
            <li style={{ display: 'flex' }}>
            <Icon fill='var(--primary-color)' size={24} svg='check' ></Icon>
            <span>Change or cancel your plan anytime.</span>
            </li>
        </ul>

        <div className={styles.plans__subscription} >
          <div className={styles.plans__subscriptionCard}>
          <Card onClick={null} setIsSelected={null} >
          <div>
            <p style={{ color: '#000' }}>Mobile</p>
            <div style={{ alignItems: 'center', display: 'flex', gap: '5px' }} >
              <span style={{ color: '#000000', fontWeight: 600 }} > 0.0001 Eth</span>
              <span>per month</span>
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Video Quality: Good
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark"/> Resolution: 480p
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px', marginBottom: '10px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Devices: Phone, Tablet
            </div>
            <Button label='Select' size='large' backgroundColor='var(--primary-color)' textColor='#fff' onClick={() => transfer0001Eth()} ></Button>
          </div>
          </Card>
          </div>

          <div className={styles.plans__subscriptionCard}>
          <Card onClick={null} setIsSelected={null} >
          <div>
            <p style={{ color: '#000' }}>Basic</p>
            <div style={{ alignItems: 'center', display: 'flex', gap: '5px' }} >
              <span style={{ color: '#000000', fontWeight: 600 }} > 0.001 Eth</span>
              <span>per month</span>
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Video Quality: Good
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark"/> Resolution: 480p
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px', marginBottom: '10px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Devices: Phone, Tablet, Computer, TV 
            </div>
            <Button label='Select' size='large' backgroundColor='var(--primary-color)' textColor='#fff'  onClick={() => transfer001Eth()} ></Button>
          </div>
          </Card>
          </div>

          <div className={styles.plans__subscriptionCard}>
          <Card onClick={null} setIsSelected={null} >
          <div>
            <p style={{ color: '#000' }}>Standard</p>
            <div style={{ alignItems: 'center', display: 'flex', gap: '5px' }} >
              <span style={{ color: '#000000', fontWeight: 600 }} > 0.01 Eth</span>
              <span>per month</span>
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Video Quality: Better
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark"/> Resolution: 1080p
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px', marginBottom: '10px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Devices: Phone, Tablet, Computer, TV 
            </div>
            <Button label='Select' size='large' backgroundColor='var(--primary-color)' textColor='#fff'  onClick={() => transfer01Eth()} ></Button>
          </div>
          </Card>
          </div>

          <div className={styles.plans__subscriptionCard}>
          <Card onClick={null} setIsSelected={null} >
          <div>
            <p style={{ color: '#000' }}>Premium</p>
            <div style={{ alignItems: 'center', display: 'flex', gap: '5px' }} >
              <span style={{ color: '#000000', fontWeight: 600 }} > 0.1 Eth</span>
              <span>per month</span>
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Video Quality: Best
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark"/> Resolution: 4K + HDR
            </div>
            <div style={{ color: '#68738D', display: 'flex', fontSize: '12px', marginBottom: '10px' }} >
              <Icon fill="var(--primary-color)" svg="checkmark" /> Devices: Phone, Tablet, Computer, TV 
            </div>
            <Button label='Select' size='large' backgroundColor='var(--primary-color)' textColor='#fff'  onClick={() => transferPoint1Eth()} ></Button>
          </div>
          </Card>
          </div>
        </div>

    </div>
  )
}

export default Plans