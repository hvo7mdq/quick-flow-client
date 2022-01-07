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
            {tags && <SingleTag  tags={tags}/>}
            </SecondaryLayout>
        </>
    )
}
