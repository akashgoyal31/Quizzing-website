import { React, useEffect, useState } from 'react';
import Timer from './Timer';
import firebaseApp from '../firebase'
import { useHistory, Redirect } from 'react-router-dom'
import { LinearProgress, Popover } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Quiz() {

  //Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  //Popover

  const history = useHistory();
  const token = sessionStorage.getItem("auth");
  const numbers = [1 , 2 ,3,4,5,6,7,8,9,10 ,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  //useState hook to highlight the corresponding                               question toggle button
  let [active, setActive] = useState(0);
  //Increment on pushing next button
  const increment = () => {
    if (active !== 30) {
      setActive(active + 1);
    }
  }
  //Decrement on pushing previous button
  const decrement = () => {
    if (active !== 0) {
      setActive(active - 1);
    }
  }
  useEffect(() => {
    if (document.getElementsByClassName("question_section").length) {
      //Setting color of all the buttons to light blue
      document.querySelectorAll('[data-target="#carouselExampleIndicators"]').forEach((element) => {
        element.children[0].style.backgroundColor = '#8B8680';
      })
      //Highlighting only the active button
      let p = document.querySelectorAll('[data-slide-to="' + (active) + '"]')[0].children[0];
      p.scrollIntoView({ inline: 'center', top: '-20px' });
      p.style.backgroundColor = "#EFB90A";
    }
  }, [numbers]);

       

  //useEffect for fetching questions from the database
  const [ques, setQues] = useState([]);
  useEffect(() => {
    // var cnt  = 0 ;  
    firebaseApp.firestore().collection("Questions").limit(30).onSnapshot(snapshot => {
      // cnt++ ; 
      // setNumbers([...numbers , cnt])
      setQues(
        snapshot.docs.map(doc => ({
          que: doc.data().question,
          opta: doc.data().A,
          optb: doc.data().B,
          optc: doc.data().C,
          optd: doc.data().D,
          ans: doc.data().ans,
        }))
      )
    })
    // console.log(cnt);
  }
    , [])

  //Submit test function on clicking submit button
  const submitTest = () => {
    numbers.map((number) => {
      for (let n = 0; n < 4; n++) {
        const input = document.getElementsByName("answer" + (number))[n];
        console.log(input);
        if (input.checked === true) {
          //Storing the user responses into the database
          
          if (ques[number - 1].ans === input.value) {
            firebaseApp.firestore().collection("AnswerBank/" + sessionStorage.getItem("name") + "-" + sessionStorage.getItem("dob") + "/Answers").doc("answer" + (number < 10 ? "0" + number : number)).set({
              actualAns: ques[number - 1].ans,
              userAns: input.value,
              correct: true
            })
          } else {
            firebaseApp.firestore().collection("AnswerBank/" + sessionStorage.getItem("name") + "-" + sessionStorage.getItem("dob") + "/Answers").doc("answer" + (number < 10 ? "0" + number : number)).set({
              actualAns: ques[number - 1].ans,
              userAns: input.value,
              correct: false
            })
          }
        }
      }
    })
    history.push("/score");
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("submitTime");
  }

  //Loading Component
  const [loading, setLoading] = useState(true);
  //Loading Component Theme
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

  const clearResponse = (questionNumber,e) => {
     
    const inputs = document.querySelectorAll(`input[name="answer${questionNumber}"]`);
    inputs.forEach(input => {
      input.checked = false;
    });
  };
  return (loading ?
    <ThemeProvider theme={theme}>
      <LinearProgress />
    </ThemeProvider>
    : token ? <div style={{ 'minHeight': '100vh' }}>
      <div className="grid-container">
        <div style={{ 'padding': '25px 25px' }} className="grid-item">
          <h3 style={{ 'color': '#EFB90A', 'fontWeight': 'bolder', 'textAlign': 'left', 'fontSize': '1.3rem' }}>
          INTER-CITY QUIZZING CHALLENGE 
           
          </h3>
        </div>
        <div className="grid-item" style={{ 'padding': '12px 0', 'color': '#f1faee' }}>
          <div style={{ 'display': 'inline' }} className="d-flex justify-content-center">
            <img alt="timer-img" height="40px" width="40px" src="timer.png" />
          </div>
          <Timer func={submitTest} style={{ 'display': 'flex', 'justifyContent': 'center' }} />
        </div>
        <div className="grid-item">
          <button onClick={submitTest} className="submit-btn">SUBMIT</button>
        </div>
      </div>


      <div id='contain' className="question_section">
        <form id="mainForm">
          <div className="question-container">
            <div
              id="carouselExampleIndicators"
              className="carousel"
              data-ride="false"
              data-interval="false"
              data-wrap="false"
              data-touch="false"
              data-keyboard="false">
              <div className="questionToggles">
                <div style={{ 'display': 'inline-block' }} data-target="#carouselExampleIndicators" onClick={() => { setActive(0) }} data-slide-to="0">
                  <button className="toggleButton"><img alt="thumb-img" src="luck.png" width="27px" height="27px" /></button>
                </div>
                {numbers.map(number => {
                  return (<div style={{ 'display': 'inline-block' }} data-target="#carouselExampleIndicators" onClick={() => { setActive(number) }} data-slide-to={number}>
                    <button style={window.innerWidth > 600 ? { 'margin': '11.2px' } : {}} className="toggleButton">{number}</button>
                  </div>)
                })}
              </div>
              <div className="carousel-inner">
                <div style={{ 'padding': '100px 0', 'fontSize': '1.3rem' }} className="carousel-item active text-center">
                  Best of Luck.
                  <br />
                  <br />
                  <span>
                    <img alt="thumb-img" height="100px" width="100px" src="luck.png" />
                  </span>
                </div>
                {ques.map((qv, i) => {
                  return (<div className="carousel-item">
                    <div className="question" style={{ 'whiteSpace': 'pre-wrap' }}>
                      <p style={{ 'margin': '5px 0' }}>{"Question  " + (i + 1)} / <span style={{ 'fontSize': '1rem' }}>30</span></p>
                      <div style={{ 'height': '0', 'borderTop': '1px dashed rgba(69, 123, 157,0.5)', 'marginBottom': '5px' }}></div><br />
                      <p>{qv.que}</p>
                      <br />
                    </div>
                    <div className="Answer">
                      <ul style={{ 'listStyle': 'none', 'paddingInlineStart': '0' }}>
                        <li>
                          <input
                            type="radio"
                            id={(i + 1) + "_a"}
                            name={"answer" + (i + 1)}
                            className={"answer" + (i + 1)}
                            value="A"
                        
                          />
                          <label className="option grid-c" htmlFor={(i + 1) + "_a"}>
                            <span>A</span>{qv.opta}
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id={(i + 1) + "_b"}
                            name={"answer" + (i + 1)}
                            className={"answer" + (i + 1)}
                            value="B"
                         
                          />
                          <label className="option grid-c" htmlFor={(i + 1) + "_b"}>
                            <span>B</span>{qv.optb}</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id={(i + 1) + "_c"}
                            name={"answer" + (i + 1)}
                            className={"answer" + (i + 1)}
                            value="C"
                        
                          />
                          <label className="option grid-c" htmlFor={(i + 1) + "_c"}>
                            <span>C</span>{qv.optc}
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id={(i + 1) + "_d"}
                            name={"answer" + (i + 1)}
                            className={"answer" + (i + 1)}
                            value="D"
                      
                          />
                          <label className="option grid-c" htmlFor={(i + 1) + "_d"}>
                            <span>D</span>{qv.optd}
                          </label>
                        </li>
                      </ul>
                    </div>
                    <button style={{ 'borderRadius': '8px', 'width': 'fit-content', 'padding': '0.5vmax 1vmax', 'fontSize': '1.1rem'}} onClick={(e) =>{
                     e.preventDefault();
                        clearResponse(i + 1)
                    }}>Clear Response</button>
                  </div>)
                })}
              </div>
              <a
                onClick={decrement}
                className="carousel-control prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              ><i className="fas fa-arrow-left"></i> Prev
              </a>
              <a
                onClick={increment}
                className="carousel-control next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >Next <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
      {/* popover --- help */}
      <button className="pop-btn" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        ?
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <div style={{ 'padding': '20px' }}>
          In case of any queries, call -
          <br />
          Akash : +91 6375059551
        
        </div>
      </Popover>
      {/* popover --- help */}

    </div>
      :
      <Redirect to="/" />
  );
}

