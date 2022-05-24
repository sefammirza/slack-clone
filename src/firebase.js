import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC8K_kVouuWYpIGvfJngTTOO-X5SQrx01k",
    authDomain: "slack-clone-4e9be.firebaseapp.com",
    projectId: "slack-clone-4e9be",
    storageBucket: "slack-clone-4e9be.appspot.com",
    messagingSenderId: "776815951841",
    appId: "1:776815951841:web:947dc6441bed8e21d15ca0"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export {provider, db, auth}