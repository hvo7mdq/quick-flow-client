import { useLocation, } from "react-router"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const PublicRoute = ({children}) => {
    let location = useLocation()
    if(!localStorage.getItem('token')){
        return children;
    }else{
        return <Redirect to='/' />
    }
}
