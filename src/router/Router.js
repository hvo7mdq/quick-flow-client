import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home/Home"

export const Router = () => {
    return(
        <Switch>
            <Route path='/' >
            <Home />
            </Route>
            <Route path='/login' >
            </Route>
            <Route path='/signup' >
            </Route>
            <Route path='/category' >
            </Route>
        </Switch> 
    )
    
}