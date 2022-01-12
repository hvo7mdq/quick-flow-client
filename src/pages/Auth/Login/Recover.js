import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form } from 'formik'
import recoverSchema from '../../../schema/RecoverSchema'
import HelmetTitle from '../../../components/Helmet/HelmetTitle'
import InputField from '../../../components/Input/InputField'
import { recoverInitialValues } from '../../../constants/Form/RecoverInitialValues'
import axiosInstance from '../../../axios'

export default function Recover() {
    const [err,setErr] = useState(null)
    const [success,setSuccess] = useState(null)
    const handleSubmit = async (values) => {
        await axiosInstance.post('/accounts/recover/',values).then(res=>{
            setErr(null)
            setSuccess("Check your Email.")
            // console.log(res.data)
        },err=>{
            setSuccess(null)
            setErr(err.response.data.detail)
        })
    }
    return (
        <>
        <HelmetTitle title="Forgot Password" />
        <Formik
        initialValues={recoverInitialValues}
        validationSchema={recoverSchema}
        onSubmit={handleSubmit}
        >
            <Form className='shadow-lg recover-form mx-auto pt-4 px-3 pb-4 border'>
                <p className='text-center fw-bold fs-5'>Find Your Account</p>
                <p className='text-center'>Please enter your email to search for your account.</p>
                <InputField id="email" name="email" type="email" label="Email Address"/>
                <div className='d-flex justify-content-between mt-2'>
                    <div>
                        <p className='d-inline-block text-danger error-txt '>{err && err}</p>
                        <p className='d-inline-block text-success'>{success && success}</p>
                    </div>
                    <div>                    
                        <Link to="/login" className="btn btn-light border me-3">Cancel</Link>
                        <button type="submit" className="btn btn-primary px-4">Search</button>                
                    </div>
                </div>   
                                    
            </Form>
        </Formik>
        </>
    )
}
