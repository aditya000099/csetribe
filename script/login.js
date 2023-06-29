// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var is_signedIn = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const login = document.getElementById("login");
// const signOut = document.getElementById("signOut");
// const heading = document.getElementById("heading");
// const hins = document.getElementById("hins");

const firebaseConfig = {
  apiKey: "AIzaSyDzxhGaioBWUh3WiHkV5Ehd8pTRUFwyNH0",
  authDomain: "cucse-c7810.firebaseapp.com",
  projectId: "cucse-c7810",
  storageBucket: "cucse-c7810.appspot.com",
  messagingSenderId: "865069983392",
  appId: "1:865069983392:web:82d4a56240d0420c308bc5",
  measurementId: "G-3EQE6YRGR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

login.addEventListener("click", (e) => {
  //Popup

  //   signInWithPopup(auth, provider);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      is_signedIn = true;
      const username = user.displayName;
      // alert(username);
      onSignInSuccess();
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    });

  function onSignInSuccess() {
    if (is_signedIn) {
      // alert("User is signed in");

      window.location.href = "./home.html";
      
    }
  }

  firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in.
        alert(user.email);

      } else {
        // No user is signed in.
      }
    });
  // add name display after login to do
});



export const username = username;
// window.history.forward();
// 	function noBack() { window.history.forward(); }