import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from '../components/Tweet';
import LastTweets from '../components/LastTweets';
import Trends from '../components/Trends';
import Link from 'next/link';
import {login, logout } from '../reducers/user';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

 return (
<div className={styles.homePage}>
  <div className={styles.left} >
    <Image src='/logo.png' alt="logo" width={50} height={50} className={styles.smalllogo} />
    <div className={styles.logout} >
    <Image src='/egg.jpg' alt="egg" width={30} height={30} className={styles.egg} />
    <div className={styles.user} >
    <span>{user.firstName}</span><br />
    <span>{user.username}</span>
    </div>
    <Link href="/"><button className={styles.btnLogout} onClick={() => dispatch(logout())} >Logout</button></Link>
    </div>
  </div>
  <div className={styles.middle}>
    <div className={styles.middleUp}>
      <Tweet/>
    </div>
    <div className={styles.middleDown}>
      <LastTweets/>
    </div>
  </div>
  <div className={styles.right}>
    <Trends/>
  </div>
</div>
   )
}

export default Home;
