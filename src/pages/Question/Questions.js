import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import {questions} from '../../constants/Questions/Questions'
import Upvotes from '../../components/question/Upvotes'
import Title from '../../components/question/Title'
import Answer from '../../components/question/Answer'
import Description from '../../components/question/Description'
import Tags from '../../components/question/Tags'
import { Link } from 'react-router-dom'

export default function Questions() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        setQuestions(questions)
    })
    return (
        <>
            <SecondaryLayout>
            <div className='ms-auto px-3 py-4 content border-bottom'>
                <div className='row'>
                <div className="col-4 d-flex align-items-center fw-bold">
                    All Questions
                </div>
                <div className="col-8 text-end">
                    <Link to='/question/create' className='btn btn-primary'>New Question</Link>
                </div>
                </div>
                {ques ? 
                ques.map(question=>(
                    <div className='row mt-3 mb-4 border ms-2 me-2' key={question.id}>
                        <Upvotes upvotes={question.upvotes} />
                        <Title title={question.Title} id={question.id} />
                        <Answer ans={question.answers.length} />
                        <Description Description={question.Description} />
                        <Tags tags={question.tags} />
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
