import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtWmiu6dkpqpC5LBy9kyphUATjm3nTMxs",
  authDomain: "gyaan-trivia.firebaseapp.com",
  projectId: "gyaan-trivia",
  storageBucket: "gyaan-trivia.appspot.com",
  messagingSenderId: "201548205525",
  appId: "1:201548205525:web:aeef213eabfb02175b415c",
  measurementId: "G-7LWV74L6J2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default firebaseApp;



