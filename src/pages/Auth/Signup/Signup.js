import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form,Field } from 'formik'
import signupSchema from '../../../schema/SignupSchema'

export default function Signup() {
    useEffect(()=>{
        document.title = "Sign Up"
    },[])
    return (
        <Formik
        initialValues={{
            fname:'',
            lname:'',
            email: '',
            password: '',
            password2:''
        }}
        validationSchema={signupSchema}
        onSubmit={
            async (values) => {
                console.log(values)
            }}
        >
        {({errors,touched,isValidating})=>(
            <Form className='shadow-lg signup-form mx-auto mt-5 p-3 pb-1 border mb-4'>            
            {console.log(errors)}
            <p className='text-center fw-bold fs-4'>Sign Up To QuickFlow</p>
            <p className='text-center w-75 mx-auto'>Create your account to ask or answer questions and unlock all features.</p>
            <div className="mb-3 d-flex justify-content-between">
                <div className='w-50 pe-1'>
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <Field type="text" name="fname" className="form-control w-100" id="fname" />
                    <div className='text-danger'>
                        {errors.fname && touched.fname && errors.fname}
                    </div>
                </div>
                <div className='w-50 ps-1'>
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <Field type="text" name="lname" className="form-control w-100" id="lname" />
                    <div className='text-danger'>
                        {errors.lname && touched.lname && errors.lname}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div className='text-danger'>
                    {errors.email && touched.email && errors.email}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" name="password" className="form-control" id="password" />
                <div className='text-danger'>
                    {errors.password && touched.password && errors.password}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm Password</label>
                <Field type="password" name="password2" className="form-control" id="password2" />
                <div className='text-danger'>
                    {errors.password2 && errors.password2}
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <p className='border-top mt-3 text-center pt-2'>Already have an account? <Link to='/login'>Log In.</Link></p>
            </Form>
            )}
        </Formik>
    )
}
