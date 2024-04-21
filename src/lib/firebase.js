import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-a80f2.firebaseapp.com",
  projectId: "chatapp-a80f2",
  storageBucket: "chatapp-a80f2.appspot.com",
  messagingSenderId: "380704338153",
  appId: "1:380704338153:web:cd914c6b4b4d4c49f18078"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(); 
export const db = getFirestore(); 
export const storage = getStorage(); 