import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'


export default function Pagination({page_no}) {
    const {pathname} = useLocation()
    const pagination = []
    for(let i = 1;i<=page_no;i++){
        pagination.push(i)
    }
    return (
        <div className='text-center'>
            {pagination.length > 0 && pagination.map(page=>(
                <div key={`index-${page}`} className='d-inline px-2 mx-1'>
                    <Link to={`${pathname}?page=${page}`}>{page}</Link>
                </div>
            ))}
        </div>
    )
}
