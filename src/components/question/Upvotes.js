import React from 'react'

export default function Upvotes({upvotes}) {
    return (
        <div className='col-1 text-center'>
            <p className='pt-1'>{upvotes} <br /> Votes</p>
        </div>
    )
}
