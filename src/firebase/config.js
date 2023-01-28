// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhuU55RHgN2DITjUwBcAbPlC1k6L2ldg",
  authDomain: "fh-react-cursos.firebaseapp.com",
  projectId: "fh-react-cursos",
  storageBucket: "fh-react-cursos.appspot.com",
  messagingSenderId: "297718655991",
  appId: "1:297718655991:web:11199c5f71f88682481cf2"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
