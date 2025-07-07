import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8swB5xggGiVw4EpvhK-UpQDrIFAOz1CY",
  authDomain: "cybercellbcet.firebaseapp.com",
  projectId: "cybercellbcet",
  storageBucket: "cybercellbcet.firebasestorage.app",
  messagingSenderId: "140358399715",
  appId: "1:140358399715:web:eed12a541792b2535c37d6",
  measurementId: "G-N2MQLDZDZ9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
