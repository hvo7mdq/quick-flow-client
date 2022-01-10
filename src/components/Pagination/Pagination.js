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
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
            {pagination.length > 0 && pagination.map(page=>(
                <div key={`index-${page}`} >
                    <li className="page-item">
                        <Link className='page-link' to={`${pathname}?page=${page}`}>{page}</Link>
                    </li>
                </div>
            ))}
            </ul>
        </nav>
    )
}
