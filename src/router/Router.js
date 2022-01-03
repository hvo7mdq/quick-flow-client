import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Login from "../pages/Auth/Login/Login"
import Signup from "../pages/Auth/Signup/Signup"
import Tag from "../pages/Tag/Tag"
import NotFound from '../pages/404/404'
import Recover from '../pages/Auth/Login/Recover'
import Questions from '../pages/Question/Questions'
import SingleQuestion from '../pages/Question/SingleQuestion'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/category' component={Tag} />
            <Route exact path='/login/recover' component={Recover} />
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/question/:id' component={SingleQuestion} />
            <Route path='*' component={NotFound} />
        </Switch> 
    )
    
}