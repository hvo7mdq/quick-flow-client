import React from 'react'

export default function Tags({tags}) {
    return (
        <div className='col-12 ps-4 '>
            {tags.map(tag=>(
                <div className='me-2 text-primary rounded px-2 my-1 d-inline-block tags'>
                    {tag}
                </div>
            ))}
        </div>
    )
}
