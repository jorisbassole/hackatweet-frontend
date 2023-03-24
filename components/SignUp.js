import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/SignIn.module.css';
import Image from 'next/image';
import { login, logout } from '../reducers/user';
import Link from 'next/link';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('')
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const isModalVisible = useSelector((state) => state.isModalVisible.value);

  //Fetch la route signUp
  const handleSignUp= () => {
  fetch('https://hackatweet-backend-three-flax.vercel.app/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname: firstname, username: username, password: password }),
  }).then(response => response.json())
    .then(data => {
      console.log(firstname)
      if (data.result) {
        dispatch(login({ firstName: data.firstname, username: data.username, token: data.token }));
        setUsername('');
        setPassword('');

  }
})
  };

  return (
    <div>
      <div className={styles.signIncontainer} >
        <Image src='/logo.png' alt="logo" width={50} height={50} className={styles.smalllogo} />
        <h2>Connect to Hackatweet</h2>
        <input type="text" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Link href="/home"><button className={styles.btnSignUp} onClick={() => handleSignUp()}>Sign Up</button></Link>

  </div>
</div>
  );
}

export default SignUp;