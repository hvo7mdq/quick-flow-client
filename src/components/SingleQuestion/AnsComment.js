import React from 'react'
import { Formik,Form } from 'formik'
import { commentInitialValues } from '../../constants/Form/CommentInitialValues'
import commentSchema from '../../schema/CommentSchema'
import CommentInput from '../Input/CommentInput'
import axiosInstance from '../../axios'
import { useHistory } from 'react-router-dom'
import checkAuth from '../../helper/CheckAuth'

export default function Comment({comments,ans_id,fetchQues,post_id}) {
    let history = useHistory()
    const handleComment = async(values) => {
        let auth = checkAuth()
        if(auth){
            axiosInstance.post('/answer_comments/',{...values,answer:ans_id}).then(res=>{
                console.log(res)
                fetchQues(post_id)
            },err=>{
                console.log(err)
            })
        }else{
            history.push('/login')
        }        
    }
    return (
        <div className="row justify-content-end">
        {console.log(comments)}
        <div className="col-11 border-top">
        {comments && comments.length > 0 && comments.map((comment,index)=>(
            <div className="col-12 comment border-bottom pb-1 ps-2" key={`${comment}-${index}`}>
                {comment.comment}
            </div>
        ))            
        }
        <div className="col-12 mt-2">       
        <Formik
        onSubmit={handleComment}
        initialValues={commentInitialValues}
        validationSchema={commentSchema}
        >
            <Form>
                <CommentInput id="comment" name="comment" type="text" />
                <div className='d-flex justify-content-end'>
                    <button type="submit" className="btn btn-primary comment">Post Comment</button>
                </div>                
            </Form>
        </Formik>
        </div>
        </div>
        </div>
    )
}
