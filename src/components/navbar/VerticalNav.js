import React from 'react'
import { Link } from 'react-router-dom'

export default function VerticalNav() {
    return (      
        <div className="navbar-light ver-nav position-fixed border-end text-center pt-3" id="navbarToggleExternalContent">
            <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" href="#">Questions</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category" className="nav-link" href="#">Category</Link>
                </li>
            </ul>
        </div> 
    )
}
