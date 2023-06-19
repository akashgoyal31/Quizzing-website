import React from 'react'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Landing from './Landing'
import Admin from './Admin'
import Instructions from './Instructions'
import AdminAuth from './AdminAuth'
import NotFound from './NotFound'
// import './App.css';
import Score from './Score'
import Loginpage from './Loginpage'
import ReactRegistrationPage from './RegistrationPage'
// import PrivateRoute from './PrivateRoute'
// import {db} from '../firebase'

export default function App() {
    // const [auth, setAuth]=useState(false);
    // useEffect(()=>{
    //     if(sessionStorage.getItem("auth")){
    //         setAuth(true);
    //     }
    // })


    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route path='/' exact><Landing /></Route> */}
                    {/* <Route path='/' exact><ReactRegistrationPage/></Route> */}
                    <Route path='/' exact><Loginpage /></Route>
                    {/* <Route path='/Loginpage' exact><Loginpage /></Route> */}
                    {/* <Route path='/verification'><Otp /></Route> */}
                    <Route path='/admin-login'><AdminAuth /></Route>
                    <Route path='/admin'><Admin /></Route>
                    <Route path="/showme-leader-board-ironman" ><LeaderBoard /></Route>
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/instructions' component={Instructions} />
                    {/* <Route path='/Loginpage' component={Loginpage} /> */}
                    <Route path='/LeaderBoard' component={LeaderBoard} />
                    
                    <Route path='/score' component={Score} />
                    <Route><NotFound /></Route>
                </Switch>
            </Router>
        </div>
    )
}
