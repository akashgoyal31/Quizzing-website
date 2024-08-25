


// import React, { Component } from "react";
import React, { useState } from "react";

import { auth, createUserDocument } from "../firebase";
import Event from "./Event";
import SocialMedia from "./SocialMedia";
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

export default function RegistrationPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [scholarNo, setScholarNo] = useState("");
  const [section, setSection] = useState("");


  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);
  
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, dob);
      console.log(user);
      alert("you sucessfully registed");
      await createUserDocument(user, {
        Name,
        scholarNo,
        section,
        email,
        dob

      });
      // await createUsersDocument(user, { school });
    } catch (error) {
      alert("Email id Already exist used differnt Email id");
      console.log("error", error);

    }

    setName(""); 
    setEmail(""); 
    setDob(""); 
    setScholarNo(""); 
    setSection(""); 

  }
  return (
    <>
      <div style={window.innerWidth < 500 ? { 'paddingBottom': '35%' } : { 'paddingBottom': '15%' }} className="landing-page">

        <Event />

        < div className="d-flex justify-content-center">
          <form action="#" className="grid" onSubmit={handlesubmit}>
            <div>
              <label className="label-register" htmlFor="name " >Name</label>
              <input
                type="text"
                name="Name"
                value={Name}
                onChange={(e) => {setName(e.target.value)}}
                id="Name"
                required
                placeholder="enter your name"
              />
            </div>
            <div>
              <label className="label-register" htmlFor="std" >Scholar No</label>
              <input
                type="number"
                name="scholarNo"
                value={scholarNo}
                onChange={(e) => {setScholarNo(e.target.value)}}
                id="scholarNo"
                required
                placeholder="enter your Scholar no."
              />
            </div>
            <div>
              <label className="label-register" htmlFor="school">Section</label>
              <input
                type="text"
                name="section"
                value={section}
                onChange={(e) => {setSection(e.target.value)}}
                id="section"
                required
                placeholder=" enter your section"
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
                onChange={(e) => {setEmail(e.target.value)}}
                spellCheck="false"
                id="email"
                required
                placeholder="email address"
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
                onChange={(e) => {setDob(e.target.value)}}
              />
            </div>
            <div className="d-flex justify-content-center register-btn">
              <input

                className="btn"
                type="submit"
                value="Register"
              />
            </div>
          </form>

        </div >
        <br />
        <div className="d-flex justify-content-center" style={{ color: "white", marginTop: "10px" }} >Already have an account? <Link style={{ color: "orange", marginLeft: "10px", textDecoration: "underline" }} to="/" > Login ! </Link> </div>

        {/* <Brand /> */}
        <div className="brand" style={{ 'top': '190%' }}>
          <div> Quizzers' Club
            <span style={{ 'opacity': '1', 'color': '#E63946', 'fontSize': '1.6rem' }}>NIT Bhopal</span>
          </div>
          <SocialMedia />
        </div>

      </div>
    </>
  )
} 
