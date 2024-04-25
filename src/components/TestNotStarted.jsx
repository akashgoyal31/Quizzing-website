import React from 'react'

export default function TextNotStarted(){
    return(<div style={{'padding':'0 10%'}}>
            <br/>
            {/* <div><h3>QUIZ HAS ENDED</h3></div> */}
            <div style={{'display':'grid', 'grid-template-columns':'3fr', 'border':'2px solid rgb(69, 123, 157)', 'padding':'10px 20px', 'borderRadius':'8px 8px', 'color':'#f1faee'}}>
                
                <div style={{'textAlign':'center'}}>Quiz will be opened only at <br />26 April 2024<br />9:30 PM to 10:00 PM</div>
            </div>
            {/* <div style={{'display':'grid', 'grid-template-columns':'1fr 2fr', 'border':'2px solid rgba(69, 123, 157,0.7)', 'padding':'10px 20px', 'borderRadius':'8px 8px', 'color':'#f1faee'}}>
                <div>Slot 2</div>
            </div> */}
        </div>)
}