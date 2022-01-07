import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import axiosInstance from '../../axios'
import InputField from '../../components/Input/InputField'
import InputTag from '../../components/Input/InputTag'
import InputTextEditor from '../../components/Input/InputTextEditor'
import { newQuestionInitialValues } from '../../constants/Form/NewQuestionInitialValues'
import SecondaryLayout from '../../layout/SecondaryLayout'
import questionSchema from '../../schema/QuestionSchema'

export default function NewQuestion() {
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)
    const handleSubmit = async(values) => {
        axiosInstance.post('/posts/',values).then(res=>{
            setError(null)
            setSuccess("Question Asked")
        },err=>{
            setSuccess(null)
            setError("Failed to ask try again")
        })
        // console.log(values)
    }
    return (
        <SecondaryLayout>
            <Formik
            onSubmit={handleSubmit}
            initialValues={newQuestionInitialValues} 
            validationSchema={questionSchema}           
            >
            {({setFieldValue,values})=>(            
                <Form>
                    <p className='fw-bold fs-5'>Post a question</p>
                    <InputField name="title" type="text" id="title" label="Title" />
                    <InputTextEditor description="description" onChange={setFieldValue}/>
                    <InputTag tags={values.tags} id="tags" name="tags" type="text" setFieldValue={setFieldValue}/>
                    <button type="submit" className="btn btn-primary d-block">Post Question</button>
                    <p className='text-danger'>{error && error}</p>
                    <p className='text-success'>{success && success}</p>
                </Form>
                )}
            </Formik>
        </SecondaryLayout>
    )
}
