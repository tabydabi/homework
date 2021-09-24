import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp(
  {  
  apiKey: "AIzaSyAnh22xVkeLChOabQGRkIWBcBrvDkfQJLE",
  authDomain: "chat-react-7f901.firebaseapp.com",
  projectId: "chat-react-7f901",
  storageBucket: "chat-react-7f901.appspot.com",
  messagingSenderId: "867056730751",
  appId: "1:867056730751:web:70040665fab1d2c215b54a",
  measurementId: "G-1TE97G85JE"
 }
)

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

