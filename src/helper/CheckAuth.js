import jwtDecode from "jwt-decode";

export default function checkAuth() {
    let token = localStorage.getItem('token')
    if(token){
        try{
            let decoded = jwtDecode(token)
            let currTime = new Date()
            if(decoded.exp > currTime.getTime()/1000){
                return true
            }else{
                localStorage.clear()
                return false
            }
        }catch(error){
            localStorage.clear()
            return false
        }
    }else{
        return false
    }
}