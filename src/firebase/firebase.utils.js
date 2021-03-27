import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDoWpmMsHxMEBEXuFI5i0omKaAgrWec3sY",
  authDomain: "crwn-db-b73fa.firebaseapp.com",
  projectId: "crwn-db-b73fa",
  storageBucket: "crwn-db-b73fa.appspot.com",
  messagingSenderId: "877665606322",
  appId: "1:877665606322:web:662b60a892b77fd1d507ab",
  measurementId: "G-R6MXR6NW1M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;