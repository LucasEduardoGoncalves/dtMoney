import firebase from 'firebase/app';

import "firebase/firestore";
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDbSWo4H30w3Kn87wRPTjruo-xUr4gubGg",
  authDomain: "dt-money-lucas-dev.firebaseapp.com",
  projectId: "dt-money-lucas-dev",
  storageBucket: "dt-money-lucas-dev.appspot.com",
  messagingSenderId: "379895686810",
  appId: "1:379895686810:web:9fb136a31665387a71e123"
};

firebase.initializeApp(firebaseConfig);
  
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export { firebase };