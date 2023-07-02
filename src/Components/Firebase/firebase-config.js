
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWM0NOlpB8itPLuy3fcuFtuGVNtgE3kno",
  authDomain: "openinapp-b5b09.firebaseapp.com",
  projectId: "openinapp-b5b09",
  storageBucket: "openinapp-b5b09.appspot.com",
  messagingSenderId: "76749896710",
  appId: "1:76749896710:web:c27da592ccd82169c25787"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();