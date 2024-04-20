import React from "react"
import SocialMedia from './SocialMedia'

export default function Brand(){
    return <div className="brand" >
           <div> Quizzers' Club 
            <span style={{'opacity':'1','color':'#E63946', 'fontSize':'1.6rem'}}>NIT Bhopal</span>
            </div> 

            <SocialMedia />
           
        </div>
}