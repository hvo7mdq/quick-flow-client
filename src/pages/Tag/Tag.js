import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import SingleTag from '../../components/Tag/SingleTag'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function Tag() {
    const [tags,setTag] = useState(null)
    useEffect(async ()=>{
        await axiosInstance.get('tags/').then(res=>{
            // console.log(res.data.results)
            setTag(res.data.results)
        },err=>{
            // console.log(err)
        })
    },[])
    return (
        <>
            <SecondaryLayout>            
            <p className='fw-bold fs-5'>Tags</p>
            {tags ? 
            <SingleTag  tags={tags}/> 
            :
            <div className="d-flex justify-content-center loading">
            <div className="spinner-border text-primary mx-auto mt-4" role="status">
            <span className="sr-only"></span>
            </div>
            </div>
            }
            </SecondaryLayout>
        </>
    )
}
