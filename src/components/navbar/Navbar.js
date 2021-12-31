import React, { useEffect } from 'react'
import { Link,useLocation,useHistory } from 'react-router-dom'

export default function Navbar() {
    const history = useHistory()
    let location = useLocation()
    useEffect(()=>{
    },[location])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex w-50 justify-content-around'>
                    <Link to="/" className="navbar-brand" href="#">QuickFlow</Link>
                    <form className="d-flex w-75">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                {localStorage.getItem('token')?
                <div>
                    <Link to="" className='btn btn-primary me-2'>My Profile</Link>
                    <button type="button" className='btn btn-danger' onClick={()=>{
                        localStorage.removeItem('token')
                        history.push('/')
                        }}>Log Out</button>
                </div>
                :
                <div>
                    <Link to="/login" className='btn btn-primary me-2'>Log In</Link>
                    <Link to="/signup" className='btn btn-light border'>Sign Up</Link>
                </div>
                }
            </div>
        </nav>
    )
}
