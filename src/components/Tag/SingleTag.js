import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleTag({tags}) {
    return (  
        <div className="row gap-5 justify-content-center mt-4">
            {tags.map(tag=>(
                <Link to={`/tags/${tag.tag}`} className="col-3 border text-center rounded text-primary tags py-3" key={`${tag.tag}-${tag.id}`}>
                    {tag.tag}
                </Link>
            ))}
        </div>
    )
}
