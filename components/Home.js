import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
        <div>
        <Login/>
      </div>
    </div>
  );
}

export default Home;
