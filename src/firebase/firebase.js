// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore,initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhkW0lq1q-09jboiCg7xd1IvWZgqbfZI",
  authDomain: "okeyapp-43e3a.firebaseapp.com",
  projectId: "okeyapp-43e3a",
  databaseURL: "https://okeyapp-43e3a-default-rtdb.firebaseio.com",
  storageBucket: "okeyapp-43e3a.appspot.com",
  messagingSenderId: "731807690240",
  appId: "1:731807690240:web:2680d644ace6d2cd5b32e5"
};


// Initialize Firebase\
const app =  initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const db = getDatabase(app)
export const auth = getAuth(app);