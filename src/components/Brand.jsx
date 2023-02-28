import React from "react"
import SocialMedia from './SocialMedia'

export default function Brand(){
    return <div className="brand">
           <div> Quizzers' Club 
            <span style={{'opacity':'1','color':'#E63946', 'fontSize':'1.6rem'}}>MANIT</span>
            </div> 
            {/* <br /> */}
            <SocialMedia />
            {/* <p>© All Rights reserved. Quizzers' Club MANIT 2021</p>
            <p><a href="https://www.linkedin.com/in/aman-malviya-5347871b1">Aman Malviya</a> & <a href="https://www.linkedin.com/in/yash-gupta-aa5656193/">Yash Gupta</a> </p> */}
        </div>
}