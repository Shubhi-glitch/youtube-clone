import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhWshsldq_F3IXI4jYphlrbuDEyV2rjIA",
  authDomain: "yourtube-clone-1b681.firebaseapp.com",
  projectId: "yourtube-clone-1b681",
  storageBucket: "yourtube-clone-1b681.firebasestorage.app",
  messagingSenderId: "387562584376",
  appId: "1:387562584376:web:65d7d94836e281886769cd"
};

// Prevent Firebase duplicate initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
