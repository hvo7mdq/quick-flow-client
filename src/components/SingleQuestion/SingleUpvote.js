import React from 'react'
import { Downvote, Upvote } from '../../assets/icons/Icons'

export default function SingleUpvote({upvotes}) {
    return (
        <div className='col-1 text-center'>
            <button className='btn '><Upvote/></button>
            <p className='pt-1 mb-0'>{upvotes ? upvotes : 2}</p>
            <button className='btn'><Downvote/></button>
        </div>
    )
}
