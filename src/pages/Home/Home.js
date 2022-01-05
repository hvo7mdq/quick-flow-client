import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import Question from '../../components/question/Question'

export default function Home() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        axiosInstance.get('posts/').then(res=>{
            // console.log(res.data.results)
            setQuestions(res.data.results)
        })
        // setQuestions(questions)
    },[])
    return (
        <>
            <HelmetTitle title="Home" />
            <SecondaryLayout>
            <div className='ms-auto px-3 py-4 content border-bottom'>
                <div className='fw-bold border-bottom pb-2'>
                    Top Questions
                </div>
                <Question ques={ques} />               
            </div>
            </SecondaryLayout>
        </>
    )
}
