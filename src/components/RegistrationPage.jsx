// import React, { Component } from "react";
// import Event from './Event';
// import Brand from './Brand';

// import {auth} from '../firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, createUserDocument } from "../firebase";
// export default function RegistrationPage(){

//       //  const [text, setText]=useState("");

//     // const [email,setEmail]=useState("");         //email
//     // const [password,setPassword]= useState("");  //mobile
//     // const [first,setFirst]=useState("");         //first name
//     // const [sec,setSec]=useState("");             //last name
//     // const [scholar,setScholar]=useState("");     //scholar no.

//     // const handleChange=(e)=>{
//     //     setText(e.target.value);
//     // }


//       state = {
//         Name: "",
//         std: "",
//         school: "",
//         place: "",
//         phone: "",
//         altphone: "",
//         dob: "",
//         email: "",

//       };

//       handlechange = (e) => {
//         const { name, value } = e.target;

//         this.setState({ [name]: value });
//       };

//       handlesubmit = async (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         const { Name, std, school, place, phone, altphone, dob, email  } =
//         this.state;
//         try {
//           const { user } = await auth.createUserWithEmailAndPassword( email, dob);
//           console.log(user);
//           alert("you sucessfully registed");
//           await createUserDocument(user, {
//             school,
//             place,
//             Name,
//             std,
//             phone,
//             altphone,
//             dob,

//           });
//           // await createUsersDocument(user, { school });
//         } catch (error) {
//           console.log("error", error);
//         }

//         this.setState({
//           Name: "",
//           email: "",
//           dob: "",
//           place: "",
//           std: "",
//           school: "",
//           phone: "",
//           altphone: "",


//         });
//       };
//     return(<div style={window.innerWidth<500?{'paddingBottom':'35%'}:{'paddingBottom':'15%'}} className="landing-page">
//         {/* {/* <h1 style={{'color':'#E63946', 'fontWeight':'bolder', 'textAlign':'center','fontSize':'3rem'}}>
//             V<span style={{'fontSize':'2.5rem'}}>I</span>H<span style={{'fontSize':'2.5rem'}}>AA</span>N
//         </h1>
//         <div style={{'color':'#f1faee', 'padding':'2% 10%', 'textAlign':'center'}}>
//             <p>VIHAAN is QCM's opening event for session( It take place even before fresher's evening). The event is organized for the first year students to participate , learn and to let them know what awaits them in future. VIHAAN is a platform for the students, amateurs, quizzers and newcomers to mettle in quizzing.</p>
//         </div>
//          */}
//          {/* <Event /> */}
//          <Event />
//         <h3>Hello {text} !</h3>
//         {/* <div className="d-flex justify-content-center">
//             <div>
//                 <input onChange={handleChange} type="text" placeholder="First Name" />
//                 <input value={sec} onChange={event=>setSec(event.target.value)} type="text" placeholder="Last Name" />
//                 <select>
//                     <option>Executive</option>
//                     <option>Quizzer</option>
//                     <option>Web Developer</option>
//                     <option>Content Writer</option>
//                     <option>Photographer</option>
//                 </select>
//                 <input value ={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Email Address" />
//                 <input value={password} onChange={event=>setPassword(event.target.value)} type="tel" placeholder="Mobile Number" />
//                 <input value={scholar} onChange={event=>setScholar(event.target.value)} type="number" placeholder="Scholar Number" />
//                 <input type="text" placeholder="First Name" />
//                 <input type="text" placeholder="First Name" />
//                 <input type="text" placeholder="First Name" />
//             </div>
//         </div> */}
//         {/* <div className="d-flex justify-content-center"><a href="/verification"><button>Register</button></a></div> */}
//         <Brand/>
//         {/* <div className="brand">
//             Quizzers' Club
//             <br />
//             <span style={{'color':'#E63946', 'fontSize':'1.4rem'}}>MANIT</span>
//         </div>  */}
//     </div>)
// }



import React, { Component } from "react";
// import {auth} from '../firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserDocument } from "../firebase";
import Event from "./Event";
import Brand from "./Brand";
import { useState } from 'react'
import SocialMedia from "./SocialMedia";

class ReactRegistrationPage extends Component {


  state = {
    Name: "",
    std: "",
    school: "",
    place: "",
    phone: "",
    altphone: "",
    dob: "",
    email: "",

  };

  handlechange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const { Name, std, school, place, phone, altphone, dob, email } =
      this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, dob);
      console.log(user);
      alert("you sucessfully registed");
      await createUserDocument(user, {
        school,
        place,
        Name,
        std,
        phone,
        altphone,
        dob,

      });
      // await createUsersDocument(user, { school });
    } catch (error) {
      console.log("error", error);
   
    }

    this.setState({
      Name: "",
      email: "",
      dob: "",
      place: "",
      std: "",
      school: "",
      phone: "",
      altphone: "",


    });
  };

  render() {
    const { Name, std, school, phone, altphone, email, place, dob } =
      this.state;
    // this.setState({ [quiznottaken]: true });
    // const [message, setMessage] = useState('');


    return (
      <>
        <div style={window.innerWidth < 500 ? { 'paddingBottom': '35%' } : { 'paddingBottom': '15%' }} className="landing-page">

          <Event />

          < div className="d-flex justify-content-center">
            <form action="#" className="grid" onSubmit={this.handlesubmit}>
              <div>
                <label className="label-register" htmlFor="name " >Name</label>
                <input
                  type="text"
                  name="Name"
                  value={Name}
                  onChange={this.handlechange}
                  id="Name"
                  required
                  placeholder="enter your name"
                />
              </div>
              <div>
                <label className="label-register" htmlFor="std" >Class</label>
                <input
                  type="number"
                  name="std"
                  value={std}
                  onChange={this.handlechange}
                  id="std"
                  required
                  placeholder="enter your class"
                />
              </div>
              <div>
                <label className="label-register" htmlFor="school">School</label>
                <input
                  type="text"
                  name="school"
                  value={school}
                  onChange={this.handlechange}
                  id="school"
                  required
                  placeholder=" enter school name"
                />
              </div>
              <div>
                <label className="label-register" htmlFor="phone">Contact</label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={this.handlechange}
                  id="phone"
                  required
                  placeholder="contact number"
                />
              </div>
              <div>
                <label className="label-register" htmlFor="altPhone">Alternate Contact</label>
                <input
                  type="tel"
                  name="altphone"
                  value={altphone}
                  onChange={this.handlechange}
                  id="altPhone"
                  required
                  placeholder="alternate number"
                />
              </div>
              <div>
                <label className="label-register" id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handlechange}
                  spellCheck="false"
                  id="email"
                  required
                  placeholder="email address"
                // onkeyup="validateEmail()"
                />

              </div>
              <div>
                <label className="label-register" htmlFor="place">City</label>
                <input
                  type="text"
                  name="place"
                  value={place}
                  onChange={this.handlechange}
                  id="place"
                  placeholder="city name"
                  required
                />
              </div>
              <div>
                <label className="label-register" htmlFor="dob">Birth Date</label>
                <input
                  type="date"
                  required
                  name="dob"
                  id="dob"
                  
                  value={dob}
                  onChange={this.handlechange}
                />
              </div>
              <div className="d-flex justify-content-center register-btn">
                <input
              
                  className="btn"
                  type="submit"
                  value="Register"
                // onClick={Register()}
                />
            {/* <div>
              {message}
            </div> */}
              </div>
            </form>

          </div >

        {/* <Brand /> */}
        <div className="brand" style={{'top' : '169%'}}>
           <div> Quizzers' Club 
            <span style={{'opacity':'1','color':'#E63946', 'fontSize':'1.6rem'}}>NIT Bhopal</span>
            </div> 
            {/* <br /> */}
            <SocialMedia />
            {/* <p>© All Rights reserved. Quizzers' Club MANIT 2021</p>
            <p><a href="https://www.linkedin.com/in/aman-malviya-5347871b1">Aman Malviya</a> & <a href="https://www.linkedin.com/in/yash-gupta-aa5656193/">Yash Gupta</a> </p> */}
        </div>

        </div>
      </>
    );
  }
}
export default ReactRegistrationPage;
