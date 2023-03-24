import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

function Trends() {
  
  
 return (
<div>
  <p>Trends</p>
  <div className={styles.hashtagsContainer}></div>
</div>
 )
}

export default Trends;
