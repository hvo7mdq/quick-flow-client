import React from 'react'

export default function Tags({tags}) {
    return (
        <div className='col-12 border ps-4'>
            {tags.map(tag=>(
                <div className='me-2 d-inline-block'>
                    {tag}
                </div>
            ))}
        </div>
    )
}
