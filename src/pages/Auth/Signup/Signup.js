import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form,Field } from 'formik'
import signupSchema from '../../../schema/SignupSchema'
import axios from 'axios'

export default function Signup() {
    const [signupSuccess,setSignupSuccess] = useState(null)
    const [signupError,setSignupError] = useState(null)
    useEffect(()=>{
        document.title = "Sign Up"
    },[])

    const handleSubmit =async (values) => {
        console.log({...values,gender:'male'})
        await axios.post(`${process.env.REACT_APP_API_URL_1}accounts/`,{...values,gender:'male'}).then(res=>{
            console.log(res.data.msg)
            setSignupSuccess('Confirmation has been sent to your email.')
        },err=>{
            setSignupError("Failed to register try again.")
        })
    }

    return (
        <Formik
        initialValues={{
            first_name:'',
            last_name:'',
            email: '',
            password: '',
            password2:''
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        >
        {({errors,touched,isValidating})=>(
            <Form className='shadow-lg signup-form mx-auto mt-5 p-3 pb-1 border mb-4'>
            <p className='text-center fw-bold fs-4'>Sign Up To QuickFlow</p>
            <p className='text-center w-75 mx-auto'>Create your account to ask or answer questions and unlock all features.</p>
            <div className="mb-3 d-flex justify-content-between">
                <div className='w-50 pe-1'>
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <Field type="text" name="first_name" className={`form-control w-100 ${errors.first_name && touched.first_name && 'border-red'}`} id="first_name" />
                    <div className='text-danger error-txt'>
                        {errors.first_name && touched.first_name && errors.first_name}
                    </div>
                </div>
                <div className='w-50 ps-1'>
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <Field type="text" name="last_name" className={`form-control w-100 ${errors.last_name && touched.last_name && 'border-red'}`} id="last_name" />
                    <div className='text-danger error-txt'>
                        {errors.last_name && touched.last_name && errors.last_name}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field type="email" name="email" className={`form-control ${errors.email && touched.email && 'border-red'}`} id="email" aria-describedby="emailHelp"/>
                <div className='text-danger error-txt'>
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" name="password" className={`form-control ${errors.password && touched.password && 'border-red'}`} id="password" />
                <div className='text-danger error-txt'>
                    {errors.password && touched.password && errors.password}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm Password</label>
                <Field type="password" name="password2" className={`form-control ${errors.password2 && touched.password2 && 'border-red'}`} id="password2" />
                <div className='text-danger error-txt'>
                    {errors.password2 && errors.password2}
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <p className='mt-3 text-center fw-bold text-success'>{signupSuccess && signupSuccess}</p>
            <p className='border-top mt-3 text-center pt-2'>Already have an account? <Link to='/login'>Log In.</Link></p>
            </Form>
            )}
        </Formik>
    )
}
