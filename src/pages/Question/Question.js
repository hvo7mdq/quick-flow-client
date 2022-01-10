import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import { Link } from 'react-router-dom'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import Question from '../../components/question/Question'
import Pagination from '../../components/Pagination/Pagination'
import useQuery from '../../helper/Query'

export default function Questions() {
    let [ques,setQuestions] = useState(null)
    let [paginaton,setPagination] = useState(null)
    let query = useQuery()
    let page = query.get("page")
    useEffect(()=>{
        axiosInstance.get(`/posts/?page=${page}`).then(res=>{
            setQuestions(res.data.results)
            setPagination(Math.ceil(res.data.count/10))
        })
    },[page])
    return (
        <>
            <HelmetTitle title="All Questions" />
            <SecondaryLayout>
                <div className='row border-bottom pb-2'>
                <div className="col-4 d-flex align-items-center fw-bold">
                    All Questions
                </div>
                <div className="col-8 text-end">
                    <Link to='/newquestion' className='btn btn-primary'>New Question</Link>
                </div>
                </div>
                <Question ques={ques} />  
                <Pagination page_no={paginaton}/>  
            </SecondaryLayout>
        </>
    )
}
