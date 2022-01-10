import React, { useState } from 'react'
import { Downvote, Upvote } from '../../assets/icons/Icons'
import axiosInstance from '../../axios'

export default function AnsUpvote({upvotes,ans_id,fetchQues,post_id}) {
    const upvote = () => {
        axiosInstance.patch('answers/upvote_count/',{answer:ans_id,vote_signal:'up'}).then(res=>{
            fetchQues(post_id)
        },err=>{
            // console.log(err)            
        })
    }
    const downvote = () => {
        axiosInstance.patch('answers/upvote_count/',{answer:ans_id,vote_signal:'down'}).then(res=>{
            fetchQues(post_id)
        },err=>{
            // console.log(err)
        })
    }
    return (
        <div className='col-1 text-center'>
            <button className='btn' onClick={upvote}><Upvote/></button>
            <p className='pt-1 mb-0'>{upvotes}</p>
            <button className='btn'onClick={downvote}><Downvote/></button>
        </div>
    )
}
