import React from 'react'

export default function SingleTag({tags}) {
    return (   
        <>
        <p className='fw-bold fs-5'>Tags</p>
        <div className="row gap-5 justify-content-center mt-4">
            {tags.map(tag=>(
                <div className="col-3 border text-center rounded text-primary tags py-3" key={`${tag.tag}-${tag.id}`}>
                    {tag.tag}
                </div>
            ))}
        </div>
        </>
    )
}
