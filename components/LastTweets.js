import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

function LastTweets() {

 return (
<div>
   
  <div>
  <Image src='/egg.jpg' alt="egg" width={30} height={30} className={styles.egg} />
    <span>firstName</span>
    <span>username</span>
  </div>
</div>
 )
}

export default LastTweets;
