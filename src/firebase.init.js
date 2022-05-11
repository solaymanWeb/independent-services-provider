// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrM4XXp2L_gvPBkCZoDBuyXmB46dnTa8k",
  authDomain: "good-health-good-life-169f3.firebaseapp.com",
  projectId: "good-health-good-life-169f3",
  storageBucket: "good-health-good-life-169f3.appspot.com",
  messagingSenderId: "660411406818",
  appId: "1:660411406818:web:1712870232480f99d941bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 