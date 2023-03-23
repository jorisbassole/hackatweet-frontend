import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/SignIn.module.css';
import Image from 'next/image';

function SignUp() {
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
        <button className={styles.btnSignIn} onClick={() => handleConnection()}>Sign In</button>
      </div>
    </div>
  );
}

export default SignUp;
