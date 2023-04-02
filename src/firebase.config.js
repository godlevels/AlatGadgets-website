import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7xqcw3ThBuOaNFjDZnf58-pXr-goYGAE",
  authDomain: "alatgadget.firebaseapp.com",
  projectId: "alatgadget",
  storageBucket: "alatgadget.appspot.com",
  messagingSenderId: "752328311979",
  appId: "1:752328311979:web:c2b83128d1b845ff3463ee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;