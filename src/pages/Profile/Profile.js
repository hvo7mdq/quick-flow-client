import React,{ useState,useEffect} from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import axiosInstance from '../../axios'
import UserQuestion from '../../components/Profile/UserQuestion'
import { useParams } from 'react-router-dom'

export default function Profile() {
    let [ques,setQuestions] = useState(null)
    let [user,setUser] = useState(null)
    let {id} = useParams()
    useEffect(()=>{
        // axiosInstance.get('posts/').then(res=>{
        //     // console.log(res.data.results)
        //     setQuestions(res.data.results)
        // })
        axiosInstance.get(`/profile/${id}/`).then(res=>{
            // console.log(res.data)
            setUser(res.data)
        },err=>{
            // console.log(err)
        })
        // console.log(id)
        // setQuestions(questions)
    },[])
    return (
        <SecondaryLayout>
        {user && 
            <div className="ms-auto px-3 py-4 content border-bottom">
                <div className="row">
                    <div className="col-8">
                        <p className='fw-bold fs-5'>User Post</p>
                        <UserQuestion ques={ques} />
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{height:"300px",width:"300px"}}>
                            <img src={`${process.env.REACT_APP_API_URL_1}${user.avatar}`} className='img-fluid rounded-circle' />
                        </div>
                        <div className="col-12 mt-4 fw-bold fs-4">
                            {user.user.first_name + ' ' +user.user.last_name}
                        </div>
                        <div className="col-12">
                            {user.user.email}
                        </div>
                    </div>
                </div>
            </div>
        }
        </SecondaryLayout>
    )
}
