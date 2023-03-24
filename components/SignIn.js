import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/SignIn.module.css';
import Image from 'next/image';
import { showSignUp, showSignIn, hide } from '../reducers/isModalVisible';
import Link from 'next/link';
import { login, logout } from '../reducers/user';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const isModalVisible = useSelector((state) => state.isModalVisible.value);

  //fetch pour le signIn 
  const handleSignIn=() => {

  fetch('https://hackatweet-backend-three-flax.vercel.app/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({firstName: data.firstname, username: data.username, token: data.token }));
                    setUsername('');
                    setPassword('');
                }
            });
    }

  return (
    <div>
        <div className={styles.signIncontainer} > 
        <Image src='/logo.png' alt="logo" width={50} height={50} className={styles.smalllogo} />
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}  />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Link href="/home"><button className={styles.btnSignIn} onClick={() => handleSignIn()}>Sign In</button></Link>
      </div>
    </div>
  );
}

export default SignIn;