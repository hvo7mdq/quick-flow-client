import React from 'react'

export default function Upvotes({upvotes}) {
    return (
        <div className='col-1 border text-center'>
            <p className='border h-100 pt-2'>{upvotes} <br /> Votes</p>
        </div>
    )
}
