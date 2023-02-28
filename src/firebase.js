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


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAVDUQLXyHBEXtYah6QwAaEZAuIZ3E4c9s",
//   authDomain: "gt-quiz-9d9ca.firebaseapp.com",
//   databaseURL: "https://gt-quiz-9d9ca-default-rtdb.firebaseio.com",
//   projectId: "gt-quiz-9d9ca",
//   storageBucket: "gt-quiz-9d9ca.appspot.com",
//   messagingSenderId: "829247221709",
//   appId: "1:829247221709:web:c5517c234204e8925dde84",
//   measurementId: "G-83G7LDQCL6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig); 
// const analytics = getAnalytics(app);

