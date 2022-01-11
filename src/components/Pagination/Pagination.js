import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import classNames from '../../helper/ClassMerger'
import useQuery from '../../helper/Query'

export default function Pagination({totalPage,pageLimit}) {
    let query = useQuery()
    const history = useHistory()
    const {pathname} = useLocation()
    let [currPage,setCurrPage] = useState(query.get("page"))
    let next = classNames('page-item', currPage==totalPage && 'disabled')
    let prev = classNames('page-item' , currPage==1 && 'disabled')
    const nextPage = () => {
        gotoPage(currPage+parseInt(1))
    }
    const prevPage = () => {
        gotoPage(currPage-parseInt(1))
    }
    const gotoPage = (page) => {
        setCurrPage(page)
        history.push(`${pathname}?page=${page}`)
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currPage-1)/pageLimit)*pageLimit
        let limit = start+pageLimit <= totalPage ? pageLimit : totalPage-start
        return new Array(limit).fill().map((_,index) => start+index+1)
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
            <li class={prev}>
                <button onClick={prevPage} className='page-link' tabindex="-1">Prev</button>                
            </li>
            {getPaginationGroup().map(page=>(
                <li className={`page-item ${currPage==page && 'active'}`} key={`index-${page}`} >
                    <button className='page-link' onClick={()=>gotoPage(page)}>{page}</button>
                </li>
            ))}
            <li class={next}>
                <button onClick={nextPage} className='page-link' tabindex="-1">Next</button>                
            </li>
            </ul>
        </nav>
    )
}
