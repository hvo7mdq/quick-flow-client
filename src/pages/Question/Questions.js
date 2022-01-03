import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import Upvotes from '../../components/question/Upvotes'
import Title from '../../components/question/Title'
import Answer from '../../components/question/Answer'
import Description from '../../components/question/Description'
import Tags from '../../components/question/Tags'
import { Link } from 'react-router-dom'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import Asked from '../../components/question/Asked'

export default function Questions() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        axiosInstance.get('posts/').then(res=>{
            console.log(res.data.results)
            setQuestions(res.data.results)
        })
        // setQuestions(questions)
    },[])
    return (
        <>
            <HelmetTitle title="All Questions" />
            <SecondaryLayout>
            <div className='ms-auto px-3 py-4 content border-bottom'>
                <div className='row border-bottom pb-2'>
                <div className="col-4 d-flex align-items-center fw-bold">
                    All Questions
                </div>
                <div className="col-8 text-end">
                    <Link to='/question/create' className='btn btn-primary'>New Question</Link>
                </div>
                </div>
                {ques ? 
                ques.map(question=>(
                    <div className='row mt-3 mb-4 border-bottom ms-2 me-2' key={question.id}>
                        <Upvotes upvotes={question.upvote_count} />
                        <Title title={question.title} id={question.id}/>
                        <Answer ans={question.answers.length ? question.answers.length : 0} />
                        <Description Description={question.description} />
                        <Tags tags={question.tag} />
                        <Asked time={question.created_at} user={question.user.first_name +' '+ question.user.last_name}/>
                    </div>
                ))
                :
                <p>Loading</p>
                }                
            </div>
            </SecondaryLayout>
        </>
    )
}
