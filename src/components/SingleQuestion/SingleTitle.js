import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleTitle({title,id}) {
    return (
        <div className={`col-12  d-flex align-items-center fs-5`}>
            <Link to={`question/${id}`} className='text-decoration-none'>{title}</Link>
        </div>
    )
}
