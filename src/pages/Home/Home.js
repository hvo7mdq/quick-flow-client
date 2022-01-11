import React, { useEffect, useState } from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import HelmetTitle from '../../components/Helmet/HelmetTitle'
import axiosInstance from '../../axios'
import Question from '../../components/question/Question'
import Pagination from '../../components/Pagination/Pagination'
import useQuery from '../../helper/Query'

export default function Home() {
    let [ques,setQuestions] = useState(null)
    let [paginaton,setPagination] = useState(null)
    let query = useQuery()
    let page = query.get("page") || 1
    useEffect(async()=>{
        await axiosInstance.get(`/posts/?page=${page}`).then(res=>{
            // console.log(res.data.results)
            setQuestions(res.data.results)
            setPagination(Math.ceil(res.data.count/5))
        })
        // setQuestions(questions)
    },[page])
    return (
        <>
            <HelmetTitle title="Home" />
            <SecondaryLayout>
                <div className='fw-bold border-bottom pb-2'>
                    Top Questions
                </div>
                <Question ques={ques} />     
                {ques && paginaton && <Pagination totalPage={paginaton} pageLimit={5} />  }
            </SecondaryLayout>
        </>
    )
}
