import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import loginSchema from '../../../schema/LoginSchema'
import { Formik,Form,Field } from 'formik'
import axios from 'axios'

export default function Login() {
    const [loginError,setLoginError] = useState(null)
    useEffect(()=>{
        document.title = "Login"
    },[])

    const handleSubmit =async (values) => {
        await axios.post(`${process.env.REACT_APP_API_URL_1}api/login/`,values).then(res=>{
            console.log("match",res)
            setLoginError(null)
        },err=>{
            setLoginError("Email or Password Incorrect")
            // console.log("error",err.request.responseText)
        })
    }

    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        >
        {({ errors, touched, isValidating }) => (
        <Form className='shadow-lg login-form mx-auto mt-5 pt-3 px-3 pb-1 border needs-validation'>
            <p className='text-center fw-bold fs-5'>Welcome back!</p>
            <p className='text-center'>Sign in to ask or answer questions and unlock all features.</p>
            <div className="mb-3 needs-validation">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <div className='text-danger'>
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
            <div className="mb-3 needs-validation">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" id="password" name="password" className="form-control"/>
                <div className='text-danger'>
                    {errors.password && touched.password && errors.password}
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Log In</button>
            <div className='login-incorrect d-flex justify-content-between pt-2'>
                <p className='text-danger'>{loginError}</p>
                <Link to="/login/recover">Forgot Password?</Link>
            </div>
            <p className='border-top mt-3 text-center pt-2'>New to QuickFlow? <Link to='/signup'>Create an account.</Link></p>            
        </Form>
        )}
    </Formik>
    )
}
