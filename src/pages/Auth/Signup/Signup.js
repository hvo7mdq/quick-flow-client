import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <form className='signup-form mx-auto mt-5 p-3 pb-1 border'>
        <p className='text-center fw-bold fs-4'>Sign Up To QuickFlow</p>
        <p className='text-center w-75 mx-auto'>Create your account to ask or answer questions and unlock all features.</p>
        <div className="mb-3 d-flex justify-content-between">
             <div className='w-50 pe-1'>
                <label for="fname" className="form-label">First Name</label>
                <input type="text" className="form-control w-100" id="fname" required/>
            </div>
            <div className='w-50 ps-1'>
                <label for="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control w-100" id="lname" required/>
            </div>
        </div>
        <div className="mb-3">
            <label for="InputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label for="InputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword1" required/>
        </div>
        <div className="mb-3">
            <label for="ConfirmInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="ConfirmInputPassword1" required/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className='border-top mt-3 text-center pt-2'>Already have an account? <Link to='/signup'>Log In.</Link></p>
        </form>
    )
}
