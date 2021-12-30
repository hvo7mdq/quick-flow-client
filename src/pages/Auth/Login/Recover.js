import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form,Field } from 'formik'
import axios from 'axios'
import recoverSchema from '../../../schema/RecoverSchema'

export default function Recover() {
    useEffect(()=>{
        document.title = "Forgot Password"
    },[])

    const handleSubmit = async (values) => {
        await axios.post(`${process.env.REACT_APP_API_URL_1}accounts/recover`,values)
    }
    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={recoverSchema}
        onSubmit={handleSubmit}
        >
            {({ errors, touched, isValidating }) => (
            <Form className='shadow-lg recover-form mx-auto mt-5 pt-4 px-3 pb-4 border'>
                <p className='text-center fw-bold fs-5'>Find Your Account</p>
                <p className='text-center'>Please enter your email to search for your account.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        className={`form-control ${errors.email && touched.email && 'border-red'}`}
                    />
                    <div className='text-danger error-txt'>
                        {errors.email && touched.email && errors.email}
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                <Link to="/login" className="btn btn-light border me-3">Cancel</Link>
                <button type="submit" className="btn btn-primary px-4">Search</button>
                </div>
                       
            </Form>
            )}
        </Formik>
    )
}
