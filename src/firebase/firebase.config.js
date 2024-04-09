// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADqmhWtoyruY1ePjXcupKKOWA3RsGv-CA",
    authDomain: "ms-build-1ae32.firebaseapp.com",
    projectId: "ms-build-1ae32",
    storageBucket: "ms-build-1ae32.appspot.com",
    messagingSenderId: "1053148201491",
    appId: "1:1053148201491:web:8b7353920f9d4e1e3ab5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth;