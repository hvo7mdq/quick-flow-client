import React from 'react'

export default function Answer({ans}) {
    return (
        <div className='col-1 border text-center'>
            <p className='border h-100 pt-2'>{ans} <br /> Answers</p>
        </div>
    )
}
