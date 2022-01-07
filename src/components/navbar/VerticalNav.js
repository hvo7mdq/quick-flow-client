import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home,Tag,Question } from '../../assets/icons/Icons'

export default function VerticalNav() {
    return (      
        <div className="navbar-light ver-nav position-fixed border-end pt-3" id="navbarToggleExternalContent">
            <ul className="navbar-nav flex-column me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active" className='nav-link d-flex align-items-center ps-4'>
                        <Home />
                        <div className='ps-2'>Home</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/questions" exact activeClassName="active" className="nav-link d-flex  align-items-center ps-4">
                        <Question />
                        <div className='ps-2'>Questions</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/tags" activeClassName="active" className="nav-link d-flex  align-items-center ps-4">
                        <Tag />
                        <div className='ps-2'>Tags</div>
                    </NavLink>
                </li>
            </ul>
        </div> 
    )
}
