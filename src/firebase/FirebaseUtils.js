import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBPXa6PIZ807CPr_K7GoPlnQaN3V9cdQJE',
  authDomain: 'e-commerce-7bafc.firebaseapp.com',
  databaseURL: 'https://e-commerce-7bafc.firebaseio.com',
  projectId: 'e-commerce-7bafc',
  storageBucket: 'e-commerce-7bafc.appspot.com',
  messagingSenderId: '408564109886',
  appId: '1:408564109886:web:4089854c9cc3f583ec376f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
