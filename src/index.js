import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from "./Login/login";
import DashboardComponent from "./Dashboard/dashboard";
import SignupComponent from "./Signup/signup";
import MainComponent from './Main/maincomponent'

const firebase = require('firebase');
require('firebase/firestore');

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

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/main' component={MainComponent}></Route>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
