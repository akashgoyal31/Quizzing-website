import React, { useState, useEffect, useLocation } from 'react'
import Brand from './Brand'
import Event from './Event'
import TestNotStarted from './TestNotStarted'
import { useHistory } from 'react-router-dom'
import firebaseApp  from '../firebase'

// import Reactlogin from './Login'
export default function Loginpage() {
  return (
    <div className="landing-page">
      <div className="d-flex justify-content-center">
        {/* <Reactlogin /> */}
        <Login />
      </div>
      <Brand />
    </div>)
}




const Login = () => {


  //Render Form based on time
  const [render, setRender] = useState(true);
  useEffect(() => {
    let d = new Date().getTime();
    let startSlot1 = new Date(2023, 0, 21, 16, 0, 0, 0).getTime();
    let endSlot1 = new Date(2023, 0, 21, 17, 50, 0, 0).getTime();
    if ((d > startSlot1 && d < endSlot1)) {
      setRender(true);
    }
  });
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    firebaseApp.firestore().collection("Users").where('email', '==', email).onSnapshot((snapshot) => {
      let items = [];
      let userid ; 
      snapshot.forEach((doc) => {
        items.push(doc.data()) ;
        userid = doc.id  ; 
      });
      console.log(items);
      // console.log(userid);
      // console.log(items[0].quiznottaken);
      // console.log(password);
      // items[0].quiznottaken = true;
      if (email === "" || password === "") {
        setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Fill all the details first.</p>);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else if ((items.length) && (items[0].dob === password) && (items[0].quiznottaken)) {
      

        history.push('/instructions');
        // items[0].quiznottaken = false;
        firebaseApp.firestore().collection("Users").doc(userid).update({quiznottaken: false});
        console.log(items[0].quiznottaken);
        // items[0].quiznottaken=false;
        sessionStorage.setItem("name", email);
                    sessionStorage.setItem("dob", password);
        sessionStorage.setItem("auth", true);

      }
      else if (!(items[0].quiznottaken)) {
        setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>test already taken</p>)
        setTimeout(() => {
          setMessage("")
        }, 2000);

      }
      else {
        setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Invalid Credentials</p>)
        setTimeout(() => {
          setMessage("")
        }, 2000);
      }

    })
  }

  return (
    <div className='landing-pages'>
      <Event />
      <div style={{ 'color': 'rgb(255 255 255)', 'padding': '2% 10% ', 'textAlign': 'justify', 'textAlignLast': 'center' }}>
        <p>Attention freshers!!
          Central India’s largest quizzing club, the Quizzers’ Club MANIT, is shortly here to unfold a futuristic and enthralling episode. Steel yourself to take on one of its fat parts? Flaunt your virtuosity and prove that you deserve it! You got this. Good luck!</p>
      </div>
      {render ? <div>
        <h3>Hello  !</h3>
        <div className="d-flex justify-content-center">
          <div className="landing-page">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            <button onClick={signIn}>
              Login
            </button>
            <div>
              {message}
            </div>
          </div>
        </div>


        <br />
        <p style={{ 'color': '#f1faee', 'textAlign': 'center' }}>If you face any issue, feel free to call <br />Akash : +91 6375059551<br /> Abhay : +91 6261894289</p>
        
      </div>
        :
        <TestNotStarted />
      }
      <Brand />
    </div>
  )
}

