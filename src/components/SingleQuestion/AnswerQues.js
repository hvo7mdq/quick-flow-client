import React from 'react'
import SingleUpvote from './SingleUpvote'
import Description from '../question/Component/Description'
import Correct from './Correct'
import AnsweredBy from './AnsweredBy'
import AnsComment from './AnsComment'
import { Formik,Form } from 'formik'
import InputTextEditor from '../Input/InputTextEditor'
import checkAuth from '../../helper/CheckAuth'
import { useHistory } from 'react-router-dom'
import answerSchema from '../../schema/AnswerSchema'
import { answerInitialValues } from '../../constants/Form/AnswerInitialValues'
import axiosInstance from '../../axios'

export default function AnswerQues({answers,post_id,fetchQues}) {
    let history = useHistory()
    const postAnswer = async(values)=> {
        // console.log(values)
        let auth = checkAuth()
        if(auth){
            await axiosInstance.post('answers/',{...values,post:post_id})
            fetchQues(post_id)
        }else{
            history.push('/')
        }
    }
    return (
        <div className='col-12 mt-3 pt-2 border-top'>
        <p className='fs-5'>{answers.length} Answers</p>
            <Formik
            initialValues={answerInitialValues}
            validationSchema={answerSchema}
            onSubmit={postAnswer}
            >
            {({setFieldValue})=>(
                <Form>
                    <InputTextEditor description="answer" onChange={setFieldValue}/>
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
                        <AnsweredBy user_id={ans.user.id} time={ans.created_at} user={ans.user.first_name +' '+ ans.user.last_name}/>
                    </div>
                    <AnsComment post_id={post_id} fetchQues={fetchQues} comments={ans.answer_comments} ans_id={ans.id}/>
                </div>
            ))}
        </div>
    )
}
