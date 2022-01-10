import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import SingleTag from '../../components/Tag/SingleTag'
import SecondaryLayout from '../../layout/SecondaryLayout'
import { Formik,Form,Field } from 'formik'
import { searchInitialValues } from '../../constants/Form/SearchInitialValues'
import searchSchema from '../../schema/SearchSchema'
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Tag() {
    const history = useHistory()
    const [tags,setTag] = useState(null)
    useEffect(async ()=>{
        await axiosInstance.get('tags/').then(res=>{
            // console.log(res.data.results)
            setTag(res.data.results)
        },err=>{
            // console.log(err)
        })
    },[])
    const search = (values) => {
        history.push(`tags/${values.search}`)
    }
    return (
        <>
            <SecondaryLayout>            
            <p className='fw-bold fs-5'>Tags</p>
            <Formik
            initialValues={searchInitialValues}
            onSubmit={search}
            validationSchema={searchSchema}>
                <Form className="d-flex w-25">
                    <Field id="search" name="search" placeholder="Filter by tag name" className="form-control me-2" />
                </Form>
            </Formik>
            {tags ? 
            <SingleTag  tags={tags}/> 
            :
            <div className="d-flex justify-content-center loading">
            <div className="spinner-border text-primary mx-auto mt-4" role="status">
            <span className="sr-only"></span>
            </div>
            </div>
            }
            </SecondaryLayout>
        </>
    )
}
