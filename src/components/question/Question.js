import React from 'react'
import Upvotes from './Component/Upvotes'
import Title from './Component/Title'
import Answer from './Component/Answer'
import Description from './Component/Description'
import Tags from './Component/Tags'
import Asked from './Component/Asked'

export default function Question({ques}) {
    return (
        <>
        {ques? 
            ques.length > 0 ?
            ques.map(question=>(
                <div className='row mt-3 mb-4 border-bottom ms-2 me-2' key={question.id}>
                    <Upvotes upvotes={question.upvote_count} />
                    <Title title={question.title} id={question.id}/>
                    <Answer ans={question.answers.length ? question.answers.length : 0} />
                    <Description Description={question.description} />
                    <Tags tags={question.tags} />
                    <Asked time={question.created_at} user={question.user.first_name +' '+ question.user.last_name} user_id={question.user.id}/>
                </div>
            ))
            :
            <p className='mt-3 loading'>No data</p>
            :
            <div className="d-flex justify-content-center loading">
            <div className="spinner-border text-primary mx-auto mt-4" role="status">
            <span className="sr-only"></span>
            </div>
            </div>
            } 
            </>
    )
}
