import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const PublicRoute = ({children}) => {
    if(!localStorage.getItem('token')){
        return children;
    }else{
        return <Redirect to='/' />
    }
}
