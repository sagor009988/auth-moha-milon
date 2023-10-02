// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkHXe7cCQ91Hq8x7SKHbH9GrOY-5sUSgc",
  authDomain: "moha-milon-24bc3.firebaseapp.com",
  projectId: "moha-milon-24bc3",
  storageBucket: "moha-milon-24bc3.appspot.com",
  messagingSenderId: "990871952156",
  appId: "1:990871952156:web:86e138dd3d6f20ee4b78d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;