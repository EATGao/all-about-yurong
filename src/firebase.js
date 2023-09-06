// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDBQaMnEVhpRMDFIiKVj13f2Q9crAE-Xs",
  authDomain: "all-about-yurong.firebaseapp.com",
  projectId: "all-about-yurong",
  storageBucket: "all-about-yurong.appspot.com",
  messagingSenderId: "353754777822",
  appId: "1:353754777822:web:d083750231a4cef6419a4f",
  measurementId: "G-1Q35CGZBXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);