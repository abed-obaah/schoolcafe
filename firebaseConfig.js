// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8VksWZaPU8YW7f_Y3Y4DSpWaYNqFzrB4",
    authDomain: "school-cafe-7d3b3.firebaseapp.com",
    projectId: "school-cafe-7d3b3",
    storageBucket: "school-cafe-7d3b3.appspot.com",
    messagingSenderId: "1053948603105",
    appId: "1:1053948603105:web:d833d694385477f87c65a0",
    measurementId: "G-970FCH052Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
