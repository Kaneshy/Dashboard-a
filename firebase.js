
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAeuHQbeumOXJ2Rny7WIqREeyWs-Jl7CWc",
  authDomain: "dashboard-nextjs-e2372.firebaseapp.com",
  projectId: "dashboard-nextjs-e2372",
  storageBucket: "dashboard-nextjs-e2372.appspot.com",
  messagingSenderId: "1088596925128",
  appId: "1:1088596925128:web:f79a2959b330a391ece3fd",
  measurementId: "G-GKSFMT9RBQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app