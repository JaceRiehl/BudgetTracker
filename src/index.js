import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');
ReactDOM.render(<App />, document.getElementById('root'));

const firebaseConfig = {
    apiKey: "AIzaSyAK-eNHXdVcu6nYH_SYexXEM1lWStfyxqA",
    authDomain: "budgeter-45a54.firebaseapp.com",
    databaseURL: "https://budgeter-45a54.firebaseio.com",
    projectId: "budgeter-45a54",
    storageBucket: "budgeter-45a54.appspot.com",
    messagingSenderId: "830774285368",
    appId: "1:830774285368:web:18845041b634b33d9e82cd",
    measurementId: "G-YZEBLG7LVB"
};

firebase.initializeApp(firebaseConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
