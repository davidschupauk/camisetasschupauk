import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcFdOhAe0no_jL9Qdz_zThUuxycSHgVuI",
  authDomain: "camisetassch.firebaseapp.com",
  projectId: "camisetassch",
  storageBucket: "camisetassch.appspot.com",
  messagingSenderId: "162821092581",
  appId: "1:162821092581:web:7fdd9a83ea3a156e8fd00c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)