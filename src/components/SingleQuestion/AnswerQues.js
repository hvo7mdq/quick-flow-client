import React, { useState } from 'react'
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
import AnsUpvote from './AnsUpvote'

export default function AnswerQues({answers,post_id,fetchQues,user_id}) {
    let history = useHistory()
    let auth = checkAuth()
    let [err,setErr] = useState(null)
    const postAnswer = async(values)=> {
        // console.log(values)
        if(auth[0]){
            await axiosInstance.post('answers/',{...values,post:post_id}).catch(err=>{
                setErr(err.response.data.detail)
            })
            fetchQues(post_id)
        }else{
            history.push('/login')
        }
    }
    const correctAnswer = async (id) => {
        if(auth[1].user_id === user_id){
            let up = await axiosInstance.patch('answers/right_answer/',{answer:id})
            up.then(res=>{
                // console.log(res)
                fetchQues(post_id)
            })
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
                    <p className='text-danger mt-2'>{err && err}</p>
                </Form>
            )}
            </Formik>
            {answers.map(ans=>(
                <div className='row border-bottom pb-2 mt-3' key={ans.id}>
                    <AnsUpvote post_id={post_id} fetchQues={fetchQues} ans_id={ans.id} upvotes={ans.upvote_count} />
                    <Description Description={ans.answer} />
                    <div className="row justify-content-between">
                        <Correct correct={ans.correct} />
                        <AnsweredBy user_id={ans.user.id} time={ans.created_at} user={ans.user.first_name +' '+ ans.user.last_name}/>
                    </div>           
                    {auth[1].user_id == user_id &&         
                    <button className='correct-btn btn btn-primary mb-2 ms-2' onClick={()=>correctAnswer(ans.id)}>Correct Answer</button>
                    }
                    <AnsComment post_id={post_id} fetchQues={fetchQues} comments={ans.answer_comments} ans_id={ans.id}/>
                </div>
            ))}
        </div>
    )
}
