import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4TzJwHFUIdlQ7_DOyQBRGQRg9sS3r7QM",
    authDomain: "tinder-43068.firebaseapp.com",
    projectId: "tinder-43068",
    storageBucket: "tinder-43068.appspot.com",
    messagingSenderId: "60652851134",
    appId: "1:60652851134:web:7510ebac3acb3b895cf3ef",
    measurementId: "G-J9BP5M9NTQ"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const Database = firebaseapp.firestore();
export default Database ;