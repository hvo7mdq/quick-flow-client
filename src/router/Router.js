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
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoutes'
import Search from '../pages/Search/Search'
import SpecificTag from '../pages/Tag/SpecificTag'
import EditQuestion from '../pages/Question/EditQuestion'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' >
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            </Route>
            <Route exact path='/signup'>
                <PublicRoute>
                    <Signup/>
                </PublicRoute>
            </Route>
            <Route exact path='/tags' component={Tag} />
            <Route exact path='/tags/:tag' component={SpecificTag} />
            <Route exact path='/account/recover'>
                <PublicRoute>
                    <Recover/>
                </PublicRoute>
            </Route>
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/questions/:id' component={SingleQuestion} />
            <Route exact path='/newquestion' >
                <PrivateRoute>
                    <NewQuestion />
                </PrivateRoute>
            </Route>
            <Route exact path='/editquestion/:id' >
                <PrivateRoute>
                    <EditQuestion />
                </PrivateRoute>
            </Route>
            <Route exact path='/account/changepassword/:token' >
                <PublicRoute>
                    <ChangePassword/>
                </PublicRoute>
            </Route>
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/search/:query' component={Search} />
            <Route path='*' component={NotFound} />
        </Switch> 
    )
    
}