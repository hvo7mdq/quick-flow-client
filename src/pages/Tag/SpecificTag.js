import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import Question from '../../components/question/Question'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function SpecificTag() {
    let {tag} = useParams()
    let [ques,setQuestion] = useState(null)
    useEffect(()=>{
        axiosInstance.get(`posts/?tags=${tag}`).then(res=>{
            // console.log(res.data.results)
            setQuestion(res.data.results)
        },err=>{
            console.log(err)
        })
    },[tag])
    return (
        <SecondaryLayout>
        <HelmetTitle title={tag} />
        <p className='fw-bold fs-5 border-bottom pb-2'>Question's related to {tag}</p>
            <Question ques={ques}/>
        </SecondaryLayout>
    )
}
