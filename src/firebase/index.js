import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjhTlcPnC5yJimAt3491gjM5VrUlMs-Ow',
  authDomain: 'e-commerce-cart.firebaseapp.com',
  databaseURL: 'https://e-commerce-cart.firebaseio.com',
  projectId: 'e-commerce-cart',
  storageBucket: 'e-commerce-cart.appspot.com',
  messagingSenderId: '578339414890',
  appId: '1:578339414890:web:15ddfcc90fc8217fa63b13',
  measurementId: 'G-KBH52LGYWG'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); // async request

  // if users is not added to database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //adding user to firebase database - async request (try/catch)
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error('ERROR MSG:' + err.message);
    }
  }

  return userRef;
};

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
providerGoogle.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

export default firebase;
