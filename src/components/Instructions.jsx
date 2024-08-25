import React, { useState } from 'react'
import { LinearProgress } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom"


export default function Instructions() {
    const token = sessionStorage.getItem("auth");
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
            <div className="question" style={{'padding': '0 15vw'}}>
                <div style={{'min-height': '40vh'}}>
                    <p style={{ 'margin': '5px 0', 'color': 'rgb(255 255 255)', 'paddingTop': '5%', 'fontSize': '2vmax', 'fontWeight': 'bold'}}>
                        Instructions -
                    </p>
                    <div style={{ 'height': '0', 'borderTop': '1px dashed rgba(69, 123, 157,0.5)', 'marginBottom': '1vh' }}>
                    </div>
                    <div style={{ 'fontSize': '1.5vmax', 'color': 'rgb(255 255 255)', 'display': 'flex', 'flexDirection': 'column', 'gap': '0.3vmax' }}>
                        1. This quiz consists of 30 multiple-choice questions, 10 focused on logical reasoning and 20 on general knowledge.
                        <br />
                        <div style={{ 'height': '0', 'marginBottom': '1vh' }}>
                        </div>
                        2. Each correct answer will be awarded +4 points, while each incorrect answer will incur a deduction of -1 point. The maximum attainable score is 120.
                        <br />
                        <div style={{ 'height': '0', 'marginBottom': '1vh' }}>
                        </div>
                        3. You will have a strict 30-minute timeframe to complete the quiz. No extensions will be granted.

                        <br />
                        <div style={{ 'height': '0', 'marginBottom': '1vh' }}>
                        </div>
                        4. Switching tabs or accessing external resources during the quiz is strictly prohibited.
                        <br />
                        <div style={{ 'height': '0', 'marginBottom': '1vh' }}>
                        </div>
                        5. Your performance in this quiz will determine your eligibility for advancement to the next round.
                        <br />
                        
                    </div>
                </div>

                

                <a style={{'marginTop': '1vmax', 'marginBottom': '1vmax' }} className="d-flex justify-content-center" href="/quiz">
                    <button onClick={() =>
                        sessionStorage.setItem("submitTime", new Date().getTime() + 1804000)
                    } style={{ 'borderRadius': '8px', 'width': 'fit-content', 'padding': '1vmax 2vmax', 'fontSize': '1.1rem'}}>
                        Proceed
                    </button>
                </a>
            </div>
        </div>
            :
            <Redirect to="/" />
    )

}
