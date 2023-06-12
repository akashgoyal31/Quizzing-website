// import React, {useState} from 'react'

// export default function RegistrationPage(){

//        const [text, setText]=useState("");

//     const [email,setEmail]=useState("");         //email
//     const [password,setPassword]= useState("");  //mobile
//     const [first,setFirst]=useState("");         //first name
//     const [sec,setSec]=useState("");             //last name
//     const [scholar,setScholar]=useState("");     //scholar no.

//     const handleChange=(e)=>{
//         setText(e.target.value);
//     }


//     return(<div style={window.innerWidth<500?{'paddingBottom':'35%'}:{'paddingBottom':'15%'}} className="landing-page">
//         <h1 style={{'color':'#E63946', 'fontWeight':'bolder', 'textAlign':'center','fontSize':'3rem'}}>
//             V<span style={{'fontSize':'2.5rem'}}>I</span>H<span style={{'fontSize':'2.5rem'}}>AA</span>N
//         </h1>
//         <div style={{'color':'#f1faee', 'padding':'2% 10%', 'textAlign':'center'}}>
//             <p>VIHAAN is QCM's opening event for session( It take place even before fresher's evening). The event is organized for the first year students to participate , learn and to let them know what awaits them in future. VIHAAN is a platform for the students, amateurs, quizzers and newcomers to mettle in quizzing.</p>
//         </div>
        
//         <h3>Hello {text} !</h3>
//         <div className="d-flex justify-content-center">
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
//         </div>
//         <div className="d-flex justify-content-center"><a href="/verification"><button>Register</button></a></div>
//         <div className="brand">
//             Quizzers' Club
//             <br />
//             <span style={{'color':'#E63946', 'fontSize':'1.4rem'}}>MANIT</span>
//         </div>
//     </div>)
// }



import React, { Component } from "react";
// import {auth} from '../firebase/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserDocument } from "../firebase";

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
    const { Name, std, school, place, phone, altphone, dob, email  } =
    this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword( email, dob);
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
    const { Name, std, school, phone, altphone, email, place, dob  } =
    this.state;
    // this.setState({ [quiznottaken]: true });


    return (
      <div>
        <div className="logos flex align">
          <a href="https://www.quizzersclubmanit.in/">
            <img className="qcm" src="./component/resources/logo.png" alt="" />
          </a>
          <span className="font-3">QUIZZERS' CLUB NIT Bhopal</span>
          <img className="manit" src="resources/manit.png" alt="" />
        </div>
        <div className="container grid">
          <div className="cube-container spanx2 flex justify align">
            <h1 className="heading font-1 text-center">
              <span className="span1">POWER</span> OF
              <span className="span3">
                YOUR <span className="span2">MIND</span>
              </span>
            </h1>
          </div>

          <div className="form-container spany2 flex justify align">
            <form action="#" className="grid" onSubmit={this.handlesubmit}>
              <div>
                <label htmlFor="name">Name</label>
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
                <label htmlFor="std">Class</label>
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
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  name="school"
                  value={school}
                  onChange={this.handlechange}
                  id="school"
                  placeholder=" enter school name"
                />
              </div>
              <div>
                <label htmlFor="phone">Contact</label>
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
                <label htmlFor="altPhone">Alternate Contact</label>
                <input
                  type="tel"
                  name="altphone"
                  value={altphone}
                  onChange={this.handlechange}
                  id="altPhone"
                  placeholder="alternate number"
                />
              </div>
              <div>
                <label id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handlechange}
                  spellCheck="false"
                  id="email"
                  placeholder="email address"
                  // onkeyup="validateEmail()"
                />
                <p id="email-error"></p>
              </div>
              <div>
                <label htmlFor="place">City</label>
                <input
                  type="text"
                  name="place"
                  value={place}
                  onChange={this.handlechange}
                  id="place"
                  placeholder="city name"
                />
              </div>
              <div>
                <label htmlFor="dob">Birth Date</label>
                <input
                  type="date"
                  required
                  name="dob"
                  id="dob"
                  value={dob}
                  onChange={this.handlechange}
                />
              </div>
              <div className="spanx2">
                <input
                  className="btn"
                  type="submit"
                  value="Register"
                  // onClick={Register()}
                />
              </div>
            </form>
          </div>
          <div className="vertical-text font-2 flex justify align">
            <span className="subtitle light-font char-space">Quiz 2023</span>
          </div>
          <div className="about font-2 light-font">
            <h3 className="my-1 char-space">About</h3>
            <p className="grey">
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, officia.
              </h5>
            </p>
            <p className="grey">
              <h5>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </p>
          </div>
        </div>
        <div className="social">
          <p className="font-2">Our social media links</p>
          <img
            className="image1"
            src="resources\van-tay-media-WMDKC8moG9w-unsplash.jpg"
            alt=""
          />
          <footer className="grid">
            <div className="icons">
              <a href="https://www.facebook.com/quizzersclub" target="_blank">
                <img className="fb" src="resources/facebook.svg" alt="" />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://instagram.com/quizzersclub?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
              >
                <img className="insta" src="resources/instagram.svg" alt="" />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://www.linkedin.com/company/quizzersclub/"
                target="_blank"
              >
                <img className="linkedin" src="resources/linkedin.svg" alt="" />
              </a>
            </div>

            <div className="icons">
              <a
                href="https://www.google.com/intl/en_in/gmail/"
                target="_blank"
              >
                <img className="email" src="resources/email.svg" alt="" />
              </a>
            </div>
          </footer>
        </div>
        <div className="footer">
          <p className="p1">&copy; All rights reserved.</p>
          <p className="p2">Quizzers' Club MANIT 2023.</p>
        </div>
      </div>
    );
  }
}
export default ReactRegistrationPage;
