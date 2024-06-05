import React from "react"

export default function SocialMedia(){
    return <div>
        <div>
            <a href="https://www.facebook.com/quizzersclub" style={{'margin':'5px 10px','display':'inline-block','width':'45px','height':'45px', 'border':'1px solid #fff', 'borderRadius':'50%'}}><img src="fb.png" alt="fb" height="16px" width="16px" /></a>
            <a href="https://www.instagram.com/quizzersclub/" style={{'margin':'5px 10px','display':'inline-block','width':'45px','height':'45px', 'border':'1px solid #fff', 'borderRadius':'50%'}}><img src="insta.png" alt="insta" height="16px" width="16px" /></a>
            <a href="https://www.linkedin.com/company/quizzersclub/" style={{'margin':'5px 10px','display':'inline-block','width':'45px','height':'45px', 'border':'1px solid #fff', 'borderRadius':'50%'}}><img src="linkedin.png" alt="linkedIn" height="16px" width="16px" /></a>
        </div>
    </div>
}