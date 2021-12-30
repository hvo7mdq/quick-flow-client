import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form,Field } from 'formik'
import signupSchema from '../../../schema/SignupSchema'
import axios from 'axios'
import HelmetTitle from '../../../components/Helmet/HelmetTitle'
import InputField from '../../../components/Input/InputField'
import InputConfirmPass from '../../../components/Input/InputConfirmPass'
import InputName from '../../../components/Input/InputName'
import { signupInitialValues } from '../../../constants/Form/SignUpInitialValues'

export default function Signup() {
    const [signupSuccess,setSignupSuccess] = useState(null)
    const [signupError,setSignupError] = useState(null)

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
        <>
        <HelmetTitle title="Sign Up" />
        <Formik
        initialValues={signupInitialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        >
            <Form className='shadow-lg signup-form mx-auto mt-5 p-3 pb-1 border mb-4'>
            <p className='text-center fw-bold fs-4'>Sign Up To QuickFlow</p>
            <p className='text-center w-75 mx-auto'>Create your account to ask or answer questions and unlock all features.</p>
            <div className="mb-3 d-flex justify-content-between">
                <div className='w-50 pe-1'>
                    <InputName id="first_name" name="first_name" type="text" label="First Name" />
                </div>
                <div className='w-50 ps-1'>
                    <InputName id="last_name" name="last_name" type="text" label="Last Name" />
                </div>
            </div>
            <InputField id="email" name="email" type="email" label="Email Address"/>
            <InputField id="password" name="password" type="password" label="Password" />
            <InputConfirmPass id="password2" name="password2" type="password" label="Confirm Password" />
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <p className='mt-3 text-center fw-bold text-success'>{signupSuccess && signupSuccess}</p>
            <p className='mt-3 text-center fw-bold text-danger'>{signupError && signupError}</p>
            <p className='border-top mt-3 text-center pt-2'>Already have an account? <Link to='/login'>Log In.</Link></p>
            </Form>
        </Formik>
        </>
    )
}
