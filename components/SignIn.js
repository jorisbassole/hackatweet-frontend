import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/SignIn.module.css';
import Image from 'next/image';
import { showSignUp, showSignIn, hide } from '../reducers/isModalVisible';
import Link from 'next/link';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const isModalVisible = useSelector((state) => state.isModalVisible.value);

    
  return (
    <div>
        <div className={styles.signIncontainer} > 
        <Image src='/logo.png' alt="logo" width={50} height={50} className={styles.smalllogo} />
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}  />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Link href="/home"><button className={styles.btnSignIn} onClick={() => dispatch(login())}>Sign In</button></Link>
      </div>
    </div>
  );
}

export default SignIn;
