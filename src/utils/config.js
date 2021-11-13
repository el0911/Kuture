
import firebase from 'firebase';

export const URL = process.env.REACT_APP_API

const config = {
   apiKey: 'AIzaSyD_YpZGwZCM3Duz20kbTwATWrlRg4y5ip4',
   authDomain: "dripple-183008.firebaseapp.com",
   databaseURL: "https://dripple-183008.firebaseio.com"
 };
 firebase.initializeApp(config);
 export const auth = firebase.auth;
 export const db = firebase.database();