import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyDfEyJu_kVE6vIGsasp6oqHEZAodXOg5io",
    authDomain: "smart-db-92288.firebaseapp.com",
    projectId: "smart-db-92288",
    storageBucket: "smart-db-92288.appspot.com",
    messagingSenderId: "799416575272",
    appId: "1:799416575272:web:06d03c470db5e02a689c1d",
    measurementId: "G-0FP0R0F48E"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
