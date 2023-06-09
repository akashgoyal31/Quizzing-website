import { React, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import firebaseApp from '../firebase';
import Brand from './Brand'
import Event from './Event'
import TestNotStarted from './TestNotStarted'
import Loginpage from './Loginpage';

export default function Landing() {
    // const [text, setText] = useState("");
    const [email, setEmail] = useState("");         //email
    // const [tel, setTel] = useState("");           //mobile
    // const [first, setFirst] = useState("");         //first name
    // const [last, setLast] = useState("");             //last name
    const [post, setPost] = useState("");             //post
    const [scholar, setScholar] = useState("");     //scholar no.
    const [message, setMessage] = useState();
   

    const history = useHistory();

    // const handleChange = (e) => {
    //     setText(e.target.value);
    //     setFirst(e.target.value);
    // }

    //Email Validation
    function validateEmail(emailAdd) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailAdd).toLowerCase());
    }

    //register user 
    const register = (event) => {
        event.preventDefault();
        if (email === "" || scholar === "" || post==="") {
            setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Fill all the details first.</p>);
            setTimeout(() => {
                setMessage("");
            }, 2000);
        } 
        
        else if (validateEmail(email) === false) {
            setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Invalid Email.</p>);
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
        //  else if (tel < 1000000000 || tel > 999999999999) {
        //     setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>Invalid Mobile Number.</p>);
        //     setTimeout(() => {
        //         setMessage("");
        //     }, 2000);
        // } 
        else {
            firebaseApp.firestore().collection("Users1").where('scholar', '==', scholar).onSnapshot((snapshot) => {
                let items = [];
                snapshot.forEach((doc) => items.push(doc.data()));

                if (items.length) {
                    setMessage(<p style={{ 'color': '#E63946', 'textAlign': 'center' }}>You have already registered.</p>);
                    setTimeout(() => {
                        setMessage("");
                    }, 2000);
                } else {
                    firebaseApp.firestore().collection("Users1").doc(scholar + "-" + post).set({
                        // firstName: first,
                        // lastName: last,
                        post: post,
                        email: email,
                        // mobile: tel,
                        scholar: scholar,
                        inTime: new Date().toLocaleTimeString(),
                    })
                    history.push('/instructions');
                    // history.push('/Loginpage');
                    sessionStorage.setItem("name", email);
                    sessionStorage.setItem("sch", scholar);
                    sessionStorage.setItem("auth", true);
                }
            })

        }
    };

    //Render Form based on time
    const [render, setRender] = useState(false);
    const bypass = useLocation().search === "?letMePass";
    useEffect(() => {
        let d = new Date().getTime();
        let startSlot1 = new Date(2023, 1, 28, 18, 30, 0, 0).getTime();
        let endSlot1 = new Date(2023, 1, 28, 19, 0, 0, 0).getTime();
        // let startSlot2= new Date(2021, 0, 16, 20, 30, 0, 0).getTime();
        // let endSlot2= new Date(2021, 0, 16, 21, 0, 0, 0).getTime();
        if ((d > startSlot1 && d < endSlot1) || bypass) {
            setRender(true);
        }
    });

    return (
        <div className='landing-page'>
            <Event />
            <div style={{ 'color': 'rgb(255 255 255)', 'padding': '2% 10% ', 'textAlign': 'justify', 'textAlignLast': 'center' }}>
                <p>Central India’s largest quizzing club, the Quizzers’ Club MANIT, is shortly here to unfold a futuristic and enthralling episode. Steel yourself to take on one of its fat parts? Flaunt your virtuosity and prove that you deserve it! You got this. Good luck!</p>
            </div>
            {render ? 
            <Loginpage />
            // <div>
            //     <h3>Hello !</h3>
            //     <div className="d-flex justify-content-center">
            //         <div>
            //             {/* <input value={first} onChange={handleChange} type="text" placeholder="First Name" required /> */}
            //             {/* <input value={last} onChange={event => setLast(event.target.value)} type="text" placeholder="Last Name" required /> */}
            //             <input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email Address" required />
            //             <input value={scholar} onChange={event => setScholar(event.target.value)} type="number" placeholder="Scholar Number" required />
            //             <select value={post} onChange={event => setPost(event.target.value)} required>
            //                 <option value="">Select your branch</option>
            //                 <option value="Computer Science Engineering">Computer Science Engineering</option>
            //                 <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
            //                 <option value="Electrical Engineering">Electrical Engineering</option>
            //                 <option value="Mechanical Engineering">Mechanical Engineering</option>
            //                 <option value="Mathematics and Data Science">Mathematics and Data Science</option>
            //                 <option value="Chemical Engineering">Chemical Engineering</option>
            //                 <option value="Civil Engineering">Civil Engineering</option>
            //                 <option value="MSME">MSME</option>
            //                 <option value="B.Planning">B.Planning/B.Architecture</option>
            //                 <option value="MCA">MCA</option>
            //             </select>
                        
            //             {/* <input value={tel} onChange={event => setTel(event.target.value)} type="tel" placeholder="Mobile Number" required /> */}
                       
            //         </div>
            //     </div>
            //     <div className="d-flex justify-content-center"><button onClick={register}>Submit</button></div>
            //     {message}
            //     <br />
            //     <p style={{ 'color': '#f1faee', 'textAlign': 'center' }}>If you face any issue, feel free to call <br />Ritik : +91 7004399783<br /> Kiran : +91 9057628755</p>
            // </div>
            :
            <TestNotStarted />
}
            <Brand />
        </div>
    )
}