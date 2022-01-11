import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import loginSchema from '../../../schema/LoginSchema'
import { Formik,Form } from 'formik'
import HelmetTitle from '../../../components/Helmet/HelmetTitle'
import InputField from '../../../components/Input/InputField'
import { loginInitialValues } from '../../../constants/Form/LoginInitialValues'
import axiosInstance from '../../../axios'

export default function Login() {
    const [loginError,setLoginError] = useState(null)
    let history = useHistory()
    const handleSubmit =async (values) => {
        await axiosInstance.post('/login/',values).then(res=>{
            setLoginError(null)
            localStorage.setItem('token',res.data.access)
            localStorage.setItem('refresh',res.data.refresh)
            history.push('/?page=1')
        }).catch(err=>{
            setLoginError("Email or Password Incorrect")
            console.log(err)
        })
    }

    return (
        <>
        <HelmetTitle title="Log In"/>
        <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        >
        <Form className='shadow-lg login-form mx-auto pt-3 px-3 pb-1 border'>
            <p className='text-center fw-bold fs-5'>Welcome back!</p>
            <p className='text-center'>Sign in to ask or answer questions and unlock all features.</p>
            <InputField name="email" type="email" id="email" label="Email Address" >
                <div className="form-text">We'll never share your email with anyone else.</div>
            </InputField>
            <InputField name="password" type="password" id="password" label="Password" />
            <button type="submit" className="btn btn-primary w-100">Log In</button>
            <div className='login-incorrect d-flex justify-content-between pt-2'>
                <p className='text-danger'>{loginError}</p>
                <Link to="/account/recover">Forgot Password?</Link>
            </div>
            <p className='border-top mt-3 text-center pt-2'>New to QuickFlow? <Link to='/signup'>Create an account.</Link></p>            
        </Form>
    </Formik>
    </>
    )
}
