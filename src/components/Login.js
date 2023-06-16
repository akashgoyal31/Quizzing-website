// import React, { Component } from 'react';
// // import {signInWithEmailAndPassword} from 'firebase'
// import {auth} from '../firebase';

 
//  class Reactlogin extends Component {
    
//     state = { email: '', dob: '' };

//   handleChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, dob } = this.state;
//     if (email && dob ) {
//       try {
//         await auth.signInWithEmailAndPassword(email, dob);
//         alert("hello");
        

//       } catch (error) {
//         console.log('error logging in', error);
//       }
//     }

//      this.setState({ email: '', password: '' });
//   };
 
//   render() {
//     const { email, dob}  = this.state;
//     return (
//       <>
//            <div class="login-form">
//         <div class="login-form-box">
//             <div class="login-form-header">
//                 <h2>Sign In</h2>
//                 <p>Don't have an account? <a href="">Sign Up</a></p>
//             </div>
//             <form action="" onSubmit={this.handleSubmit}>
//                 <div class="input-item">
//                     <input type="text" placeholder="Enter Email"
//                       name="email"
//                       value={email}
//                       onChange={this.handleChange}
//                     />
//                 </div>
//                 <div class="input-item">
//                     <input type="text" placeholder="Enter BOD(year-month-date)"
//                       name="dob"
//                       value={dob}
//                       onChange={this.handleChange}
//                     />
//                 </div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     </div> 
//       </>
//     )
//   }
// }
 
// export default Reactlogin
