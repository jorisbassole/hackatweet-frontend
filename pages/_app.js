import '@/styles/globals.css'
import Head from 'next/head';

// redux imports
import { Provider } from 'react-redux';
import user from '../reducers/user';
import isModalVisible from '@/reducers/isModalVisible';

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({ user, isModalVisible });

const persistConfig = { key: 'hackatweet', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Head>
          <title>Twitter Clone</title>
        </Head>
  <Component {...pageProps} />  
    </PersistGate>
  </Provider>
  )
}
