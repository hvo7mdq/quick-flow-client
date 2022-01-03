import React from 'react'

export default function Answer({ans}) {
    return (
        <div className='col-1 text-center'>
            <p className='h-100 pt-3'>{ans} <br /> Answers</p>
        </div>
    )
}
