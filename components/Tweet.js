import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Tweet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [tweetText, setTweetText] = useState('');
  const [date, setDate] = useState('2050-11-22T23:59:59');

  console.log(tweetText);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleTweet = () => {
    fetch('https://hackatweet-backend-three-flax.vercel.app/tweets/saveTweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: user.firstName, username: user.username, token: user.token, content: tweetText }),
    }).then(response => response.json())
      .then(data => {
        if (data) {
         setTweetText('');
                }
      });
  };


 return (
<div>
  <p>Home</p>
  <input type="text" placeholder="What's up?" onChange={(e) => setTweetText(e.target.value)} className={styles.inputTweet}/>
  <div><span className={styles.counter} >0/280</span> 
  <button className={styles.btnTweet} onClick={() => handleTweet()}>Tweet</button></div>
</div>
   )
}

export default Tweet;
