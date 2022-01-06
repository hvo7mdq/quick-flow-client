import { useLocation } from "react-router-dom"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const PrivateRoute = ({children}) => {
    let location = useLocation()
    if(localStorage.getItem('token')){
        return children;
    }else{
        return <Redirect to='/login' />
    }
}