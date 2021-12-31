import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Login from "../pages/Auth/Login/Login"
import Signup from "../pages/Auth/Signup/Signup"
import Category from "../pages/Category/Category"
import NotFound from '../pages/404/404'
import Recover from '../pages/Auth/Login/Recover'

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/category' component={Category} />
            <Route exact path='/login/recover' component={Recover} />\
            <Route path='*' component={NotFound} />
        </Switch> 
    )
    
}