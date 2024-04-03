import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2tUsYe3Ff2Ble6ghcQ9JIxvYMYm_ce2c",
  authDomain: "nwitter-reloaded-fa814.firebaseapp.com",
  projectId: "nwitter-reloaded-fa814",
  storageBucket: "nwitter-reloaded-fa814.appspot.com",
  messagingSenderId: "62067973745",
  appId: "1:62067973745:web:caf264c365b97d932c45d0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);