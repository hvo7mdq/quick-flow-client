import React from 'react'

export default function Upvotes({upvotes}) {
    return (
        <div className='col-1 border-bottom border-end text-center'>
            <p className='h-100 pt-2'>{upvotes} <br /> Votes</p>
        </div>
    )
}
