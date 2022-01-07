import React, { useEffect } from 'react'
import axiosInstance from '../../axios'
import SecondaryLayout from '../../layout/SecondaryLayout'

export default function Tag() {
    useEffect(()=>{
        axiosInstance.get('tags/').then(res=>{
            // console.log(res)
        },err=>{
            // console.log(err)
        })
    },[])
    return (
        <>
            <SecondaryLayout>
                Tags
            </SecondaryLayout>
        </>
    )
}
