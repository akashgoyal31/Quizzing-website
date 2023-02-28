import React, {useState} from 'react'
import Brand from './Brand'
import firebaseApp from '../firebase'
import {useHistory} from 'react-router-dom'
import Event from './Event'
export default function AdminAuth(){
     
      return(<div className="landing-page">
        <div className="d-flex justify-content-center">
            <LoginPage />
        </div>
        <Brand />
    </div>)
}

const LoginPage=()=>{
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] =useState();
    
    const signIn = (e) => {
        e.preventDefault();

        
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/admin')
            })
            .catch(error=>setMessage(<p style={{'color':'#E63946','textAlign':'center'}}>Invalid Credentials</p>))
                setTimeout(() => {
                    setMessage("")
                }, 2000);
    }
    // return <div>
    //     //Checking the admin credentials with the onses stored in the database
    //     db.collection("admin-credentials").onSnapshot((snapshot)=>{
    //     snapshot.forEach((doc)=>{
    //         if(doc.data().LoginId===email && doc.data().Password === password){
    //             history.push("/admin");
    //         }else{
    //             setMessage(<p style={{'color':'#E63946', 'textAlign':'center'}}>Wrong Credentials</p>);
    //             setTimeout(()=>{
    //               setMessage("");
    //             },2000)
    //         }
    //     })
    // }) 
    // }

    return (<div>
        <Event />
        <div className="landing-page">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="QCM Unique ID" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={signIn}>
                    Login
            </button>
            <div>
            {message}
            </div>
        </div>
    </div>)
}

