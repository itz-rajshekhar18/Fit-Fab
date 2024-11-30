import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-SERVICE.js";
import { getAuth,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-SERVICE.js";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFAI1uahJSaSfUmiqmsmtuafi4TuPWdIQ",
  authDomain: "fitandfab-a6d8d.firebaseapp.com",
  projectId: "fitandfab-a6d8d",
  storageBucket: "fitandfab-a6d8d.firebasestorage.app",
  messagingSenderId: "1017702221391",
  appId: "1:1017702221391:web:97c13f700901bb06300c3a",
  measurementId: "G-0D3TYFKB22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const submit =   document.getElementById('loginForm');
submit.addEventListener('submit', function(event) {
event.preventDefault()

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href = "sign.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
});