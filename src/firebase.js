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


 export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = db.doc(`Users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const {dob}    = additionalData;
      const { Name} = additionalData;
      const { section} = additionalData;
     const { scholarNo} = additionalData;
      try {
        userRef.set({
          Name,
         section,
         scholarNo,
          email,
          dob,
          
           quiznottaken :true ,
          createdAt: new Date(),
        });

        // console.log(dob);
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };
