// Import the functions you need from the SDKs you need
import * as React from 'react';
import firebase from 'firebase/app';
import Auth from 'firebase/auth';
import database from 'firebase/database';
import App from './App';
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJ1XZ-yctx5vyehkimScJR0kVTBof6dM",
  authDomain: "handiprojet-f6dfa.firebaseapp.com",
  projectId: "handiprojet-f6dfa",
  storageBucket: "handiprojet-f6dfa.appspot.com",
  messagingSenderId: "807813397875",
  appId: "1:807813397875:web:7b3e6b6167abf7a2add906",
  databaseURL: "https://handiprojet-f6dfa-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase

let app

if(firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig);

}else{
  app=firebase.app()
}

const db = app.firestore();

const auth = firebase.auth();

export { firebase, auth, database, db};

function Setup() {
  return <App />;
}

export default Setup;
