


import React, { Component } from "react";

import { auth, createUserDocument } from "../firebase";
import Event from "./Event";
import Brand from "./Brand";
import { useState } from 'react'
import SocialMedia from "./SocialMedia";
import { Link } from 'react-router-dom'
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
          <br/>
            <div className="d-flex justify-content-center" style={{color: "white" , marginTop:"10px"}} >Already have an account? <Link style={{color: "orange" , marginLeft:"10px" , textDecoration:"underline" }} to= "/" > Login ! </Link> </div>

        {/* <Brand /> */}
        <div className="brand" style={{'top' : '190%'}}>
           <div> Quizzers' Club 
            <span style={{'opacity':'1','color':'#E63946', 'fontSize':'1.6rem'}}>NIT Bhopal</span>
            </div> 
            {/* <br /> */}
            <SocialMedia />
        </div>

        </div>
      </>
    );
  }
}
export default ReactRegistrationPage;
