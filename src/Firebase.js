import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKlFNM0DvP07ZsbjjG_sdRxCNbWMqwf04",
    authDomain: "social-app-be397.firebaseapp.com",
    projectId: "social-app-be397",
    storageBucket: "social-app-be397.appspot.com",
    messagingSenderId: "458967634893",
    appId: "1:458967634893:web:7deeee7536ac576ac0ea84"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};