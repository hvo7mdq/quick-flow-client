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
            <Route exact path='/' >
                <Home />
            </Route>
            <Route exact path='/login' >
                <Login />
            </Route>
            <Route exact path='/signup' >
                <Signup />
            </Route>
            <Route exact path='/category' >
                <Category />
            </Route>
            <Route exact path='/login/recover' >
                <Recover />
            </Route>
            <Route path='*' >
                <NotFound />
            </Route>
        </Switch> 
    )
    
}