import React from 'react'
import { Link } from 'react-router-dom'

export default function Tags({tags}) {
    return (
        <div className='col-10 ps-4 '>
            {tags.map((tag,index)=>(
                <div key={`${tag}-${index}`} className='me-2 text-primary rounded px-2 my-2 d-inline-block tags'>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                </div>
            ))}
        </div>
    )
}
