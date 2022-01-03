import React, { useEffect, useState } from 'react'
import Description from '../../components/question/Description'
import Title from '../../components/question/Title'
import Upvotes from '../../components/question/Upvotes'
import SecondaryLayout from '../../layout/SecondaryLayout'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import { useParams } from 'react-router-dom'
import SingleUpvote from '../../components/SingleQuestion/SingleUpvote'
import Tags from '../../components/question/Tags'
import Asked from '../../components/question/Asked'
import AnsweredBy from '../../components/SingleQuestion/AnsweredBy'
import Correct from '../../components/SingleQuestion/Correct'
import Comment from '../../components/SingleQuestion/Comment'
import Time from '../../components/Asked/Time'
import By from '../../components/Asked/By'

export default function SingleQuestion() {
    let [question,setQuestion] = useState(null)
    let { id } = useParams();
    useEffect(()=>{
        axiosInstance.get(`posts/${id}/`).then(res=>{
            console.log(res.data)
            setQuestion(res.data)
        })
        // setQuestions(questions)
    },[])
    return (
        <SecondaryLayout>
        <HelmetTitle title={question?question.title:'Title'} />
        {question ? 
            <div className='ms-auto px-3 py-4 content border'>
                <Title title={question.title}/>
                <div className='border-bottom pt-1 d-flex'>
                    <Time time={question.created_at} />
                </div>
                <div className="row">
                <SingleUpvote upvotes={question.upvote_count} />
                <Description Description={question.description} />
                <Tags tags={question.tag} />
                <Asked time={question.created_at} user={question.user.first_name +' '+ question.user.last_name}/>
                <Comment />
                <div className='col-12 mt-3 pt-2 border-top'>
                <p className='fs-5'>{question.answers.length} Answers</p>
                    {question.answers.map(ans=>(
                        <div className='row border-bottom pb-2' key={ans.id}>
                            <SingleUpvote upvotes={ans.upvote_count} />
                            <Description Description={ans.answer} />
                            <div className="row justify-content-between">
                                <Correct correct={ans.correct} />
                                <AnsweredBy time={ans.created_at} user={ans.user.first_name +' '+ ans.user.last_name}/>
                            </div>
                            <Comment />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        :
        <p>Loading</p>}
        </SecondaryLayout>
    )
}
