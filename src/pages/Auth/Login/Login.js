import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <form className='login-form mx-auto mt-5 p-3 pb-1 border'>
        <p className='text-center'>Welcome back!</p>
        <p className='text-center'>Sign in to ask or answer questions and unlock all features.</p>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <div class="invalid-feedback">
        Please choose a username.
      </div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Log In</button>
        <p className='border-top mt-3 text-center pt-2'>New to QuickFlow? <Link to='/signup'>Create an account.</Link></p>
        </form>
    )
}
