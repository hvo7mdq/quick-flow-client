import React from 'react'
import { Link } from 'react-router-dom'

export default function Title({title,id}) {
    return (
        <div className={`col-11  d-flex align-items-center fs-5 ps-4`}>
            <Link to={`/questions/${id}`} className='text-decoration-none'>{title}</Link>
        </div>
    )
}
