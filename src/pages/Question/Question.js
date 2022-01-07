import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import { Link } from 'react-router-dom'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import Question from '../../components/question/Question'

export default function Questions() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        axiosInstance.get('/posts/').then(res=>{
            setQuestions(res.data.results)
        })
    },[])
    return (
        <>
            <HelmetTitle title="All Questions" />
            <SecondaryLayout>
                <div className='row border-bottom pb-2'>
                <div className="col-4 d-flex align-items-center fw-bold">
                    All Questions
                </div>
                <div className="col-8 text-end">
                    <Link to='/newquestion' className='btn btn-primary'>New Question</Link>
                </div>
                </div>
                <Question ques={ques} />    
            </SecondaryLayout>
        </>
    )
}
