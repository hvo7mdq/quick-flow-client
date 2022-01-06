import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import jwtDecode from "jwt-decode";

export const PrivateRoute = ({children}) => {
    let token = localStorage.getItem('token')
    if(token){
        let tokenExp = jwtDecode(token).exp
        let dateNow = new Date()
        if(tokenExp < dateNow.getTime()/1000){
            localStorage.clear()
            return <Redirect to='/login' />
        }else{
            return children
        }
    }else{
        return <Redirect to='/login' />
    }
}