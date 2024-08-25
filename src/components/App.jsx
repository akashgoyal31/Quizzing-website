import React from 'react'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Admin from './Admin'
import Instructions from './Instructions'
import AdminAuth from './AdminAuth'
import NotFound from './NotFound'
import Score from './Score'
import Loginpage from './Loginpage'
import RegistrationPage from './RegistrationPage';

export default function App() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact><Loginpage /></Route>
                    <Route path='/registration-page' exact><RegistrationPage/></Route>
                    <Route path='/admin-login'><AdminAuth /></Route>
                    <Route path='/admin'><Admin /></Route>
                    <Route path="/showme-leader-board-ironman" ><LeaderBoard /></Route>
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/instructions' component={Instructions} />
                    <Route path='/LeaderBoard' component={LeaderBoard} />
                    <Route path='/score' component={Score} />
                    <Route><NotFound /></Route>
                </Switch>
            </Router>
        </div>
    )
}
