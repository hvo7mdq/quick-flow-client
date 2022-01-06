import React from 'react'
import SingleUpvote from './SingleUpvote'
import Description from '../question/Component/Description'
import Correct from './Correct'
import AnsweredBy from './AnsweredBy'
import AnsComment from './AnsComment'
import { Formik,Form } from 'formik'
import InputTextEditor from '../Input/InputTextEditor'

export default function AnswerQues({answers}) {
    return (
        <div className='col-12 mt-3 pt-2 border-top'>
        <p className='fs-5'>{answers.length} Answers</p>
            <Formik>
            {({setFieldValue})=>(
                <Form>
                    <InputTextEditor description="description" onChange={setFieldValue}/>
                    <button type="submit" className="btn btn-primary d-block">Post Answer</button>
                </Form>
            )}
            </Formik>
            {answers.map(ans=>(
                <div className='row border-bottom pb-2 mt-3' key={ans.id}>
                    <SingleUpvote upvotes={ans.upvote_count} />
                    <Description Description={ans.answer} />
                    <div className="row justify-content-between">
                        <Correct correct={ans.correct} />
                        <AnsweredBy time={ans.created_at} user={ans.user.first_name +' '+ ans.user.last_name}/>
                    </div>
                    <AnsComment comments={ans.answer_comments} ans_id={ans.id}/>
                </div>
            ))}
        </div>
    )
}
