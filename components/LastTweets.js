import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/LastTweets.module.css';
import Image from 'next/image';


function LastTweets() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    fetch('https://hackatweet-backend-three-flax.vercel.app/tweets/showTweets')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        setAllTweets(data.tweets);
        console.log('allTweets', allTweets);
        });
  }, []);

  const tweets = allTweets.map((data, i) => {
    return  <div >
    <Image src='/egg.jpg' alt="egg" width={30} height={30} className={styles.egg} />
      <span className={styles.firstName}>{data.firstname}</span><span className={styles.username}>@{data.username}</span><span className={styles.date}> * 1 hour ago</span>
      <div className={styles.tweetText}>{data.content}</div>
    </div>
  });

 return (
   <div className={styles.tweetContainer}>
    {tweets}
  </div>
 )
}

export default LastTweets;
