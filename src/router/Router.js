import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Login from "../pages/Auth/Login/Login"
import Signup from "../pages/Auth/Signup/Signup"
import Tag from "../pages/Tag/Tag"
import NotFound from '../pages/404/404'
import Recover from '../pages/Auth/Login/Recover'
import Questions from '../pages/Question/Question'
import SingleQuestion from '../pages/Question/SingleQuestion'
import NewQuestion from '../pages/Question/NewQuestion'
import ChangePassword from '../pages/Auth/ChangePassword/ChangePassword'
import Profile from '../pages/Profile/Profile'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/category' component={Tag} />
            <Route exact path='/account/recover' component={Recover} />
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/questions/:id' component={SingleQuestion} />
            <Route exact path='/newquestion' component={NewQuestion} />
            <Route exact path='/account/changepassword/:token' component={ChangePassword} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route path='*' component={NotFound} />
        </Switch> 
    )
    
}