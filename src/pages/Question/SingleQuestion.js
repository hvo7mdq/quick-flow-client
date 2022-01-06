import React, { useEffect, useState } from 'react'
import Description from '../../components/question/Component/Description'
import Title from '../../components/question/Component/Title'
import SecondaryLayout from '../../layout/SecondaryLayout'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import { useParams } from 'react-router-dom'
import SingleUpvote from '../../components/SingleQuestion/SingleUpvote'
import Tags from '../../components/question/Component/Tags'
import Asked from '../../components/question/Component/Asked'
import AnsweredBy from '../../components/SingleQuestion/AnsweredBy'
import Correct from '../../components/SingleQuestion/Correct'
import QuesComment from '../../components/SingleQuestion/QuesComment'
import Time from '../../components/Asked/Time'
import AnswerQues from '../../components/SingleQuestion/AnswerQues'

export default function SingleQuestion() {
    let [question,setQuestion] = useState(null)
    let { id } = useParams();
    useEffect(()=>{
        axiosInstance.get(`/posts/${id}/`).then(res=>{
            // console.log(res.data)
            setQuestion(res.data)
        })
    },[])
    return (
        <SecondaryLayout>        
        {console.log(question)}
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
                <Tags tags={question.tags} />
                <Asked time={question.created_at} user={question.user.first_name +' '+ question.user.last_name}/>
                <QuesComment comments={question.post_comments} post_id={question.id}/>
                <AnswerQues answers={question.answers}/>
                </div>
            </div>
        :
        <p>Loading</p>}
        </SecondaryLayout>
    )
}
