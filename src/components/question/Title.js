import React from 'react'
import { Link } from 'react-router-dom'

export default function Title({title,id}) {
    return (
        <div className='col-11 border-bottom d-flex align-items-center'>
            <Link to={`question/${id}`}>{title}</Link>
        </div>
    )
}
