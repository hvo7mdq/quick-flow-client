import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios'
import Question from '../../components/question/Question'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function Search() {
    let {query} = useParams()
    let [ques,setQuestion] = useState(null)
    useEffect(()=>{
        axiosInstance.get(`posts/?search=${query}`).then(res=>{
            // console.log(res.data.results)
            // console.log(query)
            setQuestion(res.data.results)
        },err=>{
            // console.log(err.response)
        })
    },[query])
    return (
        <>
            <HelmetTitle title="Search Result" />
            <SecondaryLayout>
                <div className='fw-bold border-bottom pb-2'>
                    Search Result
                </div>
                <Question ques={ques} />     
            </SecondaryLayout>
        </>
    )
}
