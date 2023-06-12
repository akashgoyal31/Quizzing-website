import firebase from "firebase";
// import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJ8CBVfJzDG5PuqvBd4BVqYMAAzNOfU-c",
    authDomain: "quizzing-website-fe7ca.firebaseapp.com",
    projectId: "quizzing-website-fe7ca",
    storageBucket: "quizzing-website-fe7ca.appspot.com",
    messagingSenderId: "62662071220",
    appId: "1:62662071220:web:efec96bfb889edb71798e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default firebaseApp;

// // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
//  export const auth = firebase.auth();
//  export const firestore = firebase.firestore();


// *********************************************************





// // Import the functions you need from the SDKs you need
// //import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";
// //import firebase from 'firebase/app';
// import firebase from "firebase/compat/app";
// // Required for side-effects
// import "firebase/compat/firestore";
// //import { Firestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyAJ8CBVfJzDG5PuqvBd4BVqYMAAzNOfU-c",
//   authDomain: "quizzing-website-fe7ca.firebaseapp.com",
//   projectId: "quizzing-website-fe7ca",
//   storageBucket: "quizzing-website-fe7ca.appspot.com",
//   messagingSenderId: "62662071220",
//   appId: "1:62662071220:web:efec96bfb889edb71798e1"
// };

// // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
//  export const auth = firebase.auth();
//  export const firestore = firebase.firestore();


 export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = db.doc(`Users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const {dob}    = additionalData;
      const { Name} = additionalData;
      const { school} = additionalData;
     const { place } = additionalData;
        const { std } = additionalData;
       const { phone } = additionalData;
        const { altphone } = additionalData;
      
  
      try {
        userRef.set({
          Name,
          school,
            std,
           phone,
         altphone,
          email,
          dob,
           place,
           quiznottaken :true ,
          createdAt: new Date(),
        });

        // console.log(dob);
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };
