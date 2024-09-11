// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXL_byzEo0VGM0__l6HCS7NSIK3EwR2ZE",
  authDomain: "first-project-db276.firebaseapp.com",
  projectId: "first-project-db276",
  storageBucket: "first-project-db276.appspot.com",
  messagingSenderId: "517364576264",
  appId: "1:517364576264:web:f4b391cb85ae55b60de1bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db =getFirestore(app);