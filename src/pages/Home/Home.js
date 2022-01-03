import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import Upvotes from '../../components/question/Upvotes'
import Title from '../../components/question/Title'
import Answer from '../../components/question/Answer'
import Description from '../../components/question/Description'
import Tags from '../../components/question/Tags'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import Asked from '../../components/question/Asked'
import axiosInstance from '../../axios'

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
                {ques ? 
                ques.map(question=>(
                    <div className='row mt-3 mb-4 border-bottom ps-2 me-2' key={question.id}>
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
