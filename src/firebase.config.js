import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA5ylx4Rv9GAb3SxLlJNCxWcggcubb9GbI",
  authDomain: "alatgadgets-5000a.firebaseapp.com",
  projectId: "alatgadgets-5000a",
  storageBucket: "alatgadgets-5000a.appspot.com",
  messagingSenderId: "967657701502",
  appId: "1:967657701502:web:c954f8ccb4e5a10f1dd82f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app