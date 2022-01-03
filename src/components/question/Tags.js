import React from 'react'

export default function Tags({tags}) {
    return (
        <div className='col-10 ps-4 '>
            {tags.map(tag=>(
                <div className='me-2 text-primary rounded px-2 my-2 d-inline-block tags'>
                    {tag}
                </div>
            ))}
        </div>
    )
}
