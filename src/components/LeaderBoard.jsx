import React, {useEffect, useState} from "react"
import Event from './Event'
import Brand from './Brand'
import {db}  from '../firebase'

export default function LeaderBoard(){
    const [points, setPoints]=useState([]);
    useEffect(()=>{
            db.collection("scores").doc("null-null").delete();
            db.collection("scores").orderBy("points", "desc").onSnapshot((snapshot)=>{
                let scores=[];
                snapshot.forEach((doc)=>{
                    scores.push(doc.data());
                })
                setPoints(scores);
            })
    },[])
    
    return(<div style={{'paddingBottom':'120px'}}>
        <br />
        <Event />
        <h3 style={{'color':'#06a6b0', 'fontWeight':'bolder', 'textAlign':'center','fontSize':'1.2rem'}}>
            L<span style={{'fontSize':'1rem'}}>eader</span>B<span style={{'fontSize':'1rem'}}>oard</span>
        </h3>
        <div style={{'padding':'10px'}} className="landing-page">
            <div className="score" style={{'display':'grid', 'gridTemplateColumns':'1fr 3fr 1fr', 'margin':'auto', 'backgroundColor':'#06b6a0', 'border':'none', 'textAlign':'left'}}>
                    <div style={{'textAlign':'center'}}>Rank</div>
                    <div style={{'paddingLeft':"10px"}}>Student</div>
                    <div style={{'textAlign':'center'}}>Points</div>
            </div>
            {points.map((score, i)=>{
                return <div className="score" style={{'display':'grid', 'grid-template-columns':'1fr 3fr 1fr', 'margin':'auto', 'textAlign':'left', 'fontSize':'0.9rem'}}>
                    <div style={{'textAlign':'center'}}>{(i+1)}</div>
                    <div style={{'paddingLeft':"10px"}}>{score.name}</div>
                    <div style={{'textAlign':'center'}}>{score.points}</div>
                </div>
            })}        
        </div>
        <Brand />
    </div>)
}