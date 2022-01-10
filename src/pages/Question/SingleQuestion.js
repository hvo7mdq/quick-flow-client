import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import { useParams } from 'react-router-dom'
import SingleUpvote from '../../components/SingleQuestion/SingleUpvote'
import Tags from '../../components/question/Component/Tags'
import Asked from '../../components/question/Component/Asked'
import QuesComment from '../../components/SingleQuestion/QuesComment'
import Time from '../../components/Asked/Time'
import AnswerQues from '../../components/SingleQuestion/AnswerQues'
import SingleTitle from '../../components/SingleQuestion/SingleTitle'
import Desc from '../../components/question/Component/Desc'

export default function SingleQuestion() {
    let [question,setQuestion] = useState(null)
    let { id } = useParams();
    const fetchQues = (id) => {
        axiosInstance.get(`/posts/${id}/`).then(res=>{
            // console.log(res.data)
            setQuestion(res.data)
        })
    }
    useEffect(()=>{
       fetchQues(id)
    },[])
    return (
        <SecondaryLayout>        
        <HelmetTitle title={question?question.title:'Title'} />
        {question ? 
            <div>
                <SingleTitle title={question.title} id={question.id} />
                <div className='border-bottom pt-1 d-flex'>
                    <Time time={question.created_at} />
                </div>
                <div className="row">
                <SingleUpvote fetchQues={fetchQues} post_id={question.id} upvotes={question.upvote_count} />
                <Desc Description={question.description} />
                <Tags tags={question.tags} />
                <Asked time={question.created_at} user_id={question.user.id} user={question.user.first_name +' '+ question.user.last_name}/>
                <QuesComment fetchQues={fetchQues} comments={question.post_comments} post_id={question.id}/>
                <AnswerQues user_id={question.user.id} fetchQues={fetchQues} post_id={question.id} answers={question.answers}/>
                </div>
            </div>
        :
        <div className="d-flex justify-content-center loading">
            <div className="spinner-border text-primary mx-auto mt-4" role="status">
            <span className="sr-only"></span>
            </div>
        </div>}
        </SecondaryLayout>
    )
}
