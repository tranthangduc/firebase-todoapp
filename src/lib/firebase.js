import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQME4Uz6sWp7E4n9OYjQgdeoxshaIJ0pc",
  authDomain: "todoapp-dded9.firebaseapp.com",
  projectId: "todoapp-dded9",
  storageBucket: "todoapp-dded9.appspot.com",
  messagingSenderId: "271823846040",
  appId: "1:271823846040:web:c9f0a2a7ba7026f6822eed",
  measurementId: "G-FB1TCW0FC5"
};

firebase.initializeApp(firebaseConfig);