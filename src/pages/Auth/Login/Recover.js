import React from 'react'
import { Link } from 'react-router-dom'
import { Formik,Form } from 'formik'
import recoverSchema from '../../../schema/RecoverSchema'
import HelmetTitle from '../../../components/Helmet/HelmetTitle'
import InputField from '../../../components/Input/InputField'
import { recoverInitialValues } from '../../../constants/Form/RecoverInitialValues'
import axiosInstance from '../../../axios'

export default function Recover() {
    const handleSubmit = async (values) => {
        await axiosInstance.post('accounts/recover',values)
    }
    return (
        <>
        <HelmetTitle title="Forgot Password" />
        <Formik
        initialValues={recoverInitialValues}
        validationSchema={recoverSchema}
        onSubmit={handleSubmit}
        >
            <Form className='shadow-lg recover-form mx-auto mt-5 pt-4 px-3 pb-4 border'>
                <p className='text-center fw-bold fs-5'>Find Your Account</p>
                <p className='text-center'>Please enter your email to search for your account.</p>
                <InputField id="email" name="email" type="email" label="Email Address"/>
                <div className='d-flex justify-content-end mt-2'>
                <Link to="/login" className="btn btn-light border me-3">Cancel</Link>
                <button type="submit" className="btn btn-primary px-4">Search</button>
                </div>                       
            </Form>
        </Formik>
        </>
    )
}
