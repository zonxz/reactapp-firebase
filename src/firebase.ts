import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjHVZmQtjmp8R7rXLffCsXvLv6M8c-9Wk",
  authDomain: "react-app-a978a.firebaseapp.com",
  projectId: "react-app-a978a",
  storageBucket: "react-app-a978a.appspot.com",
  messagingSenderId: "712790179245",
  appId: "1:712790179245:web:6a5af882391599b423f524"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db

