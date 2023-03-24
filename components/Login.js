import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Button, Modal } from 'antd';
import { login, logout } from '../reducers/user';
import { showSignUp, showSignIn, hide } from '../reducers/isModalVisible';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const isModalVisible = useSelector((state) => state.isModalVisible.value);

  
  

return (
    <div>
        <Head>
            <title>Login</title>
        </Head>
    <div className={styles.login}>
        <div className={styles.leftSection}>
        <Image src='/logo.png' alt="logo" width={200} height={200} className={styles.logo} />
        </div>
        <div className={styles.rightSection}>
            <div className={styles.leftCol}>
                <Image src='/logo.png' alt="logo" width={50} height={50} className={styles.smalllogo} />
                <h1>See what's happening</h1>
                <h2>Join Hackatweet today</h2>
                <button className={styles.btnSignUp} onClick={()=> dispatch(showSignUp())}>Sign up</button>
                <h6>Already have an account</h6>
                <button className={styles.btnSignIn} onClick={() => dispatch(showSignIn())}>Sign in</button>
            </div>
        </div>
    </div>
    {isModalVisible.signIn && <div id="react-modals">
    <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible.signIn} 
    closable={true} footer={null} onCancel={() => dispatch(hide())} > 
      <SignIn/>
    </Modal>

  </div>}
  {isModalVisible.signUp && <div id="react-modals">
    <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible.signUp} 
    closable={true} footer={null} onCancel={() => dispatch(hide())} > 
      <SignUp/>
    </Modal>
  </div>}
    </div >
);
}

export default Login;