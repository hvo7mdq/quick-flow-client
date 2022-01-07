import React from 'react'
import Upvotes from '../question/Component/Upvotes'
import Title from '../question/Component/Title'
import Answer from '../question/Component/Answer'
import Description from '../question/Component/Description'
import Tags from '../question/Component/Tags'
import Time from '../Asked/Time'

export default function UserQuestion({ques}) {
    return (
        <>
        {ques ? 
            ques.map(question=>(
                <div className='row mt-3 mb-4 border-bottom ms-2 me-2' key={question.id}>
                    <Upvotes upvotes={question.upvote_count} />
                    <Title title={question.title} id={question.id}/>
                    <Answer ans={question.answers.length ? question.answers.length : 0} />
                    <Description Description={question.description} />
                    <Tags tags={question.tags} />
                    <div className='text-end mb-2 mt-0 pt-0'>
                    <Time time={question.created_at}/>
                    </div>
                </div>
            ))
            :
            <p>Loading</p>
            } 
            </>
    )
}
