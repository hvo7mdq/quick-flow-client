import React from 'react'

export default function Answer({ans}) {
    return (
        <div className='col-1 border-bottom border-end text-center'>
            <p className='h-100 pt-2'>{ans} <br /> Answers</p>
        </div>
    )
}
