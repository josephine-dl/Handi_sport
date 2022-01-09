import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqPdBx62tY6t3aUZ1XP6n6t6hNoTt7fEE",
    authDomain: "handi-projet1.firebaseapp.com",
    projectId: "handi-projet1",
    storageBucket: "handi-projet1.appspot.com",
    messagingSenderId: "250169168099",
    appId: "1:250169168099:web:80a68f7e8335e3e054b5d6"
  };

  let app
  if(firebase.apps.length === 0){
        app = firebase.initializeApp(firebaseConfig)
  }else{
      app = firebase.app()
  }
  const db = app.firestore()
  const auth = firebase.auth()

  export { db, auth }