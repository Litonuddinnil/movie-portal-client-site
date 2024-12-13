// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu99I6sLT_t86TrtV8kUAIOFyTaCd1TYc",
  authDomain: "movie-portal-f2acb.firebaseapp.com",
  projectId: "movie-portal-f2acb",
  storageBucket: "movie-portal-f2acb.firebasestorage.app",
  messagingSenderId: "438176546090",
  appId: "1:438176546090:web:ec089441fa7890d007f253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;