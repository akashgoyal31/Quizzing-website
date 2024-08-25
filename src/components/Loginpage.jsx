import React, { useState, useEffect} from 'react'
import Brand from './Brand'
import Event from './Event'
import TestNotStarted from './TestNotStarted'
import { useHistory , useLocation } from 'react-router-dom'
import firebaseApp from '../firebase'
import { Link } from 'react-router-dom'

export default function Loginpage() {
  return (
    <div className="landing-page">
      <div className="d-flex justify-content-center">
        <Login />
      </div>
      <Brand />
    </div>)
}




const Login = () => {


  //Render Form based on time
  const [render, setRender] = useState(true);
  const bypass = useLocation().search === "?letmepass";
  useEffect(() => {
    let d = new Date().getTime();
    // format  year  , month index ,  day ,  hours ,  minute  ,  second  ,  milisecond  
    let startSlot1 = new Date(2024, 4, 7, 21, 30, 0, 0).getTime();
    let endSlot1 = new Date(2024, 4, 7, 22, 15, 0, 0).getTime();
    if ((d >= startSlot1 && d < endSlot1 || bypass)) {
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
      let userid;
      snapshot.forEach((doc) => {
        items.push(doc.data());
        userid = doc.id;
      });
      console.log(items);

      if (email === "" || password === "") {
        setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Fill all the details first.</p>);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else if ((items.length) && (items[0].dob === password) && (items[0].quiznottaken)) {


        history.push('/instructions');
        firebaseApp.firestore().collection("Users").doc(userid).update({ quiznottaken: false });
        console.log(items[0].quiznottaken);
        sessionStorage.setItem("name", email);
        sessionStorage.setItem("dob", password);
        sessionStorage.setItem("user", items[0].Name);

        sessionStorage.setItem("auth", true);

      }
      else if ((items.length) && (!(items[0].quiznottaken))) {
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
        <p>Dive into the ultimate quiz showdown! Compete with top teams from across cities and showcase your knowledge in this thrilling event. Good luck to all participants as they embark on this exciting quest for quizzing glory!</p>
      </div>
      {render ? <div>
        <h3>Hello  !</h3>
        <div className="d-flex justify-content-center">
          <div className="landing-page">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password (YYYY-MM-DD)" />
            <button onClick={signIn}>
              Login
            </button>
            <div>
              {message}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ color: "white", marginTop: "10px" }}>Don't have an account? <Link style={{ color: "orange", marginLeft: "10px", textDecoration: "underline" }} to="/registration-page" > Register Now ! </Link> </div>


        <br />
        <p style={{ 'color': '#f1faee', 'textAlign': 'center' }}>If you face any issue, feel free to call <br />Akash : +91 6375059551 </p>

      </div>
        :
        <>
        <TestNotStarted />
        <div className="d-flex justify-content-center" style={{ color: "white", marginTop: "10px" }}>Don't have an account? <Link style={{ color: "orange", marginLeft: "10px", textDecoration: "underline" }} to="/registration-page" > Register Now ! </Link> </div>
        </>


      }
      <Brand />
    </div>
  )
}

