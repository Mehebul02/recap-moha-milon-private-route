// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUz7ZuKNGvbzKNqMvdO_-PgzXNpAJVEZQ",
  authDomain: "recap-moha-milon-private-route.firebaseapp.com",
  projectId: "recap-moha-milon-private-route",
  storageBucket: "recap-moha-milon-private-route.appspot.com",
  messagingSenderId: "293067629308",
  appId: "1:293067629308:web:7c1588ca10f24eb7346d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth