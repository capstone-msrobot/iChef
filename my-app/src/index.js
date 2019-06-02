import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyA1L3NCoat-aFkaFs7A3BkYV2jx5h8bUAc",
    authDomain: "capstone-msrobot.firebaseapp.com",
    databaseURL: "https://capstone-msrobot.firebaseio.com",
    projectId: "capstone-msrobot",
    storageBucket: "capstone-msrobot.appspot.com",
    messagingSenderId: "915810040724"
  };
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
