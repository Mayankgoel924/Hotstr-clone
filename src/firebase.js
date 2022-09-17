// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSWYkLnDtYIlC3M2kB68dAtNtgsaAlGH0",
    authDomain: "hotstar-clone-7408f.firebaseapp.com",
    projectId: "hotstar-clone-7408f",
    storageBucket: "hotstar-clone-7408f.appspot.com",
    messagingSenderId: "939002239067",
    appId: "1:939002239067:web:17419342895c7377e4477e",
    measurementId: "G-V45YVEHW7H"
  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const db = app.firestore();
const db = getFirestore(app);
// const auth = firebase.auth();
const auth = getAuth(app);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;