// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO76Ti4g7EAYVnKidmOju2mcIrwaXl-w0",
  authDomain: "food-delivery-bbe9b.firebaseapp.com",
  projectId: "food-delivery-bbe9b",
  storageBucket: "food-delivery-bbe9b.appspot.com",
  messagingSenderId: "304306891140",
  appId: "1:304306891140:web:d920706434becd9f7855d1",
  measurementId: "G-3XQ33VFQDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, analytics };
