import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form } from 'formik'
import HelmetTitle from '../../../components/Helmet/HelmetTitle'
import InputField from '../../../components/Input/InputField'
import InputConfirmPass from '../../../components/Input/InputConfirmPass'
import changePasswordSchema from '../../../schema/ChangePasswordSchema'
import { changePassInitialValues } from '../../../constants/Form/ChangePassInitialValues'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../axios'
import { useHistory } from 'react-router-dom'

export default function ChangePassword() {
    const history = useHistory()
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)
    const {token} = useParams()
    const handleSubmit =async (values) => {
        await axiosInstance.post('/recoverpassword/',{...values,access:token}).then(res=>{
            setError(null)
            setSuccess("Password Changed Redirecting to login...")
            setTimeout(()=>{
                history.push('/login')
            },2000)            
        },err=>{
            setSuccess(null)
            setError("Expired Token. Try again")
        })
    }
    return (
        <>
        <HelmetTitle title="Change Password"/>
        <Formik
        initialValues={changePassInitialValues}
        validationSchema={changePasswordSchema}
        onSubmit={handleSubmit}
        >
        <Form className='shadow-lg signup-form mx-auto p-3 pb-1 border mb-4'>
            <p className='text-center fw-bold fs-4'>Change Password</p>
            <InputField id="password" name="password" type="password" label="Password" />
            <InputConfirmPass id="password2" name="password2" type="password" label="Confirm Password" />
            <button type="submit" className="btn btn-primary w-100 mb-4">Change Password</button>
            <div>
                <p className='d-inline-block text-danger error-txt '>{error && error}</p>
                <p className='d-inline-block text-success'>{success && success}</p>
            </div>
            </Form>
    </Formik>
    </>
    )
}
