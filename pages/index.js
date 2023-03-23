import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/Login';
import styles from '../styles/Home.module.css';
import Home from '../components/Home';

function Index() {
  return (
    <div>
        <div>
        <Login/>
      </div>
    </div>
  );
}

export default Index;
