import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from '../components/Tweet';
import LastTweets from '../components/LastTweets';
import Trends from '../components/Trends';

function Home() {

 return (
<div className={styles.homePage}>
  <div className={styles.left} >
    <Image src='/egg.jpg' alt="egg" width={30} height={30} className={styles.egg} />
    <span>firstName</span>
    <span>username</span>
  </div>
  <div className={styles.middle}>
      <LastTweets />
  </div>
  <div className={styles.right}>
    <Trends/>
  </div>
</div>
   )
}

export default Home;
