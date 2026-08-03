import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAIxwIb5kH74MchW83LZVaPIwhOx8nuek",
  authDomain: "a-hargeisa-trail.firebaseapp.com",
  projectId: "a-hargeisa-trail",
  storageBucket: "a-hargeisa-trail.firebasestorage.app",
  messagingSenderId: "39466783653",
  appId: "1:39466783653:web:9c282497712c3d0065ce4c",
  measurementId: "G-460J5LDMYN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
