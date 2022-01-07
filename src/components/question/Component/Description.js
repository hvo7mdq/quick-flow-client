import React from 'react'
import DOMPurify from 'dompurify';

export default function Description({Description}) {
    return (
        <div className='col-11 crop-text-2 py-4 ps-4'>
            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(Description)}}></p>
        </div>
    )
}
