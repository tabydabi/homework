import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAnh22xVkeLChOabQGRkIWBcBrvDkfQJLE",
  authDomain: "chat-react-7f901.firebaseapp.com",
  projectId: "chat-react-7f901",
  storageBucket: "chat-react-7f901.appspot.com",
  messagingSenderId: "867056730751",
  appId: "1:867056730751:web:70040665fab1d2c215b54a",
  measurementId: "G-1TE97G85JE"
};

const app = initializeApp(firebaseConfig);

const auth = app.auth();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

