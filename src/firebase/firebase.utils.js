import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyDdpB--yHJbZ9EOidoYrIwmReQItiUyvBs",
  authDomain: "crwn-db-f835d.firebaseapp.com",
  projectId: "crwn-db-f835d",
  storageBucket: "crwn-db-f835d.appspot.com",
  messagingSenderId: "365013750242",
  appId: "1:365013750242:web:aec2acebf88d14a82ce9bb",
  measurementId: "G-5H33ZXF9FK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;
