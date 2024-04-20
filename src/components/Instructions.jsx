import React, { useState } from 'react'
import { LinearProgress } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom"


export default function Instructions() {
    const token = sessionStorage.getItem("auth");
    console.log(token);
    const submitTime = sessionStorage.getItem("submitTime");
    const [loading, setLoading] = useState(true);
    const theme = createTheme({
        palette: {
            primary: {
                main: "#06d6a0",
            },
            secondary: {
                main: "#f1faee",
            },
        },
    });
    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return (loading ?
        <ThemeProvider theme={theme}>
            <LinearProgress />
        </ThemeProvider>
        : token ? submitTime ? <Redirect to="/quiz" /> : <div className="landing-page d-flex justify-content-center">
            {/*<Prompt
                message={(location, action)=>{
                    if(action==='POP'){
                        sessionStorage.removeItem("auth");
                        return "Are you sure you want to navigate back? You will be taken to the register window and you won't be able to take the test again.";
                    }
                }}
            />*/}
            <div style={window.innerWidth > 700 ? { 'padding': '0 25%' } : { 'padding': '0 8%' }} className="question">
                <p style={{ 'margin': '5px 0', 'color': 'rgb(255 255 255)', 'paddingTop': '5%' }}>
                    Instructions-
                </p>
                <div style={{ 'height': '0', 'borderTop': '1px dashed rgba(69, 123, 157,0.5)', 'marginBottom': '5px' }}>
                </div>
                <p style={{ 'fontSize': '1rem', 'color': 'rgb(255 255 255)' }}>
                    1. The time slot for GT Quiz is from 8:00 p.m. to 8:40 p.m.
                    <br />
                    <div style={{ 'height': '0', 'marginBottom': '10px' }}>
                    </div>
                    2. The time allotted for the quiz is 25 minutes.
                    <br />
                    <div style={{ 'height': '0', 'marginBottom': '10px' }}>
                    </div>
                    3. The quiz comprises 25 Questions.
                    <br />
                    <div style={{ 'height': '0', 'marginBottom': '10px' }}>
                    </div>
                    4. The marking scheme for the quiz is +4 for the correct answer and -1 for the incorrect answer.
                    <br />
                    <div style={{ 'height': '0', 'marginBottom': '10px' }}>
                    </div>
                    5. Don’t reload, navigate or switch tabs. These activities are recorded and will lead to disqualification.
                    {/* <br />
                    <div style={{ 'height': '0', 'marginBottom': '10px' }}>
                    </div>
                    6. Avoid reloading and navigating while attempting the quiz, you may get disqualified and your response may be lost. */}
                </p>
                <a style={{ 'display': 'block', 'textDecoration': 'none', 'marginTop': '20px' }} className="d-flex justify-content-center" href="/quiz">
                    <button onClick={() =>
                        sessionStorage.setItem("submitTime", new Date().getTime() + 1504000)
                    } style={{ 'borderRadius': '8px', 'width': '250px' }}>
                        Proceed
                    </button>
                </a>
            </div>
        </div>
            :
            <Redirect to="/" />
    )

}
