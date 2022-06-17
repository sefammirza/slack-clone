
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8K_kVouuWYpIGvfJngTTOO-X5SQrx01k",
  authDomain: "slack-clone-4e9be.firebaseapp.com",
  projectId: "slack-clone-4e9be",
  storageBucket: "slack-clone-4e9be.appspot.com",
  messagingSenderId: "776815951841",
  appId: "1:776815951841:web:947dc6441bed8e21d15ca0"
};

// Initialize Firebase
 const firebaseApp  = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp);
 // const provider = new firebase.auth.GoogleAuthProvider()
 const provider = new GoogleAuthProvider();

export {auth,db,provider,firebaseApp};