import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
            <div className="container">
                <a className="navbar-brand" href="#">QuickFlow</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Category</a>
                    </li>
                </ul>
                <form className="d-flex w-50">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className='btn btn-primary me-2'>Log In</button>
                <button className='btn btn-primary'>Sign Up</button>
                </div>
            </div>
        </nav>
    )
}
