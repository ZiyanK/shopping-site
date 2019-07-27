import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDaYxnUe5bDdYU6PzXxodVzK7o27m7ONBI",
  authDomain: "clothing-web-app.firebaseapp.com",
  databaseURL: "https://clothing-web-app.firebaseio.com",
  projectId: "clothing-web-app",
  storageBucket: "",
  messagingSenderId: "514445956819",
  appId: "1:514445956819:web:e728c9cf6542e24e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;