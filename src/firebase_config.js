import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASBj3bUUWpiYrVLIUq_tBQSQgJt80LLAg",
  authDomain: "newportfolio-b85bb.firebaseapp.com",
  projectId: "newportfolio-b85bb",
  storageBucket: "newportfolio-b85bb.appspot.com",
  messagingSenderId: "433086228830",
  appId: "1:433086228830:web:773498482baeb03d53c7cf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
