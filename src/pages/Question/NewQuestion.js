import { Form, Formik } from 'formik'
import React from 'react'
import axiosInstance from '../../axios'
import InputField from '../../components/Input/InputField'
import InputTag from '../../components/Input/InputTag'
import InputTextEditor from '../../components/Input/InputTextEditor'
import SecondaryLayout from '../../layout/SecondaryLayout'
import questionSchema from '../../schema/QuestionSchema'

export default function NewQuestion() {
    const handleSubmit = async(values) => {
        axiosInstance.post('posts/',values).then(res=>{
            // console.log(res)
        },err=>{
            // console.log(err)
        })
        // console.log(values)
    }
    return (
        <SecondaryLayout>
        <div className='ms-auto px-3 py-4 content border-bottom'>
            <Formik
            onSubmit={handleSubmit}
            initialValues={{
                title: '',
                tags:[],
                description : ""
            }} 
            validationSchema={questionSchema}           
            >
            {({setFieldValue,values})=>(            
                <Form>
                    <p className='fw-bold fs-5'>Post a question</p>
                    <InputField name="title" type="text" id="title" label="Title" />
                    <InputTextEditor description="description" onChange={setFieldValue}/>
                    <InputTag tags={values.tags} id="tags" name="tags" type="text" setFieldValue={setFieldValue}/>
                    <button type="submit" className="btn btn-primary d-block">Post Question</button>
                </Form>
                )}
            </Formik>
        </div>
        </SecondaryLayout>
    )
}
