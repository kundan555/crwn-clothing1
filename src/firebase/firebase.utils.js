import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3BrCBA2wwapYCIK0qGtlF2JvsqpsUL6Q",
    authDomain: "crwn-db-81d00.firebaseapp.com",
    databaseURL: "https://crwn-db-81d00.firebaseio.com",
    projectId: "crwn-db-81d00",
    storageBucket: "crwn-db-81d00.appspot.com",
    messagingSenderId: "432276272062",
    appId: "1:432276272062:web:c34a5aea6b5007ea1c7fef",
    measurementId: "G-CVB8L3NB4Z"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;