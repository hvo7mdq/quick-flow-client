import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axiosInstance from '../../axios'
import InputField from '../../components/Input/InputField'
import InputTag from '../../components/Input/InputTag'
import InputTextEditor from '../../components/Input/InputTextEditor'
import SecondaryLayout from '../../layout/SecondaryLayout'
import questionSchema from '../../schema/QuestionSchema'
import DOMPurify from 'dompurify'

export default function EditQuestion() {
    const {id} = useParams()
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)
    const [ques,setQues] = useState(null)
    const handleSubmit = async(values) => {
        axiosInstance.patch(`/posts/${id}/`,values).then(res=>{
            setError(null)
            setSuccess("Question Edited")
        },err=>{
            setSuccess(null)
            setError("Failed to ask try again")
        })
        // console.log(values)
    }
    const fetchQues = (id) => {
        axiosInstance.get(`/posts/${id}/`).then(res=>{
            // console.log(res.data)
            setQues(res.data)
        },err=>{
            // console.log(err)
        })
    }
    useEffect(()=>{
       fetchQues(id)
    },[])
    return (
        <SecondaryLayout>
        {ques ?
            <Formik
            onSubmit={handleSubmit}
            initialValues={{
                title: ques.title,
                tags:ques.tags,
                description :  ''
            }} 
            validationSchema={questionSchema}           
            >
            {({setFieldValue,values})=>(            
                <Form>
                    <p className='fw-bold fs-5'>Edit a question</p>
                    <InputField name="title" type="text" id="title" label="Title" />
                    <InputTextEditor value={ques.description} description="description" onChange={setFieldValue}/>
                    <InputTag tags={values.tags} id="tags" name="tags" type="text" setFieldValue={setFieldValue}/>
                    <button type="submit" className="btn btn-primary d-block">Update Question</button>
                    <p className='text-danger'>{error && error}</p>
                    <p className='text-success'>{success && success}</p>
                </Form>
                )}
            </Formik>
        :
        <div className="d-flex justify-content-center loading">
            <div className="spinner-border text-primary mx-auto mt-4" role="status">
            <span className="sr-only"></span>
            </div>
        </div>}
        </SecondaryLayout>
    )
}
