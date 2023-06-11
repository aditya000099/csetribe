import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDzxhGaioBWUh3WiHkV5Ehd8pTRUFwyNH0",
        authDomain: "cucse-c7810.firebaseapp.com",
        projectId: "cucse-c7810",
        storageBucket: "cucse-c7810.appspot.com",
        messagingSenderId: "865069983392",
        appId: "1:865069983392:web:82d4a56240d0420c308bc5",
        measurementId: "G-3EQE6YRGR1",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect Auth State
onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("Logged In");
    }
    else {
        console.log("No User");
    }
});