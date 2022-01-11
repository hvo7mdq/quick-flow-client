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
        axiosInstance.get(`/profile/${id}/`).then(res=>{
            setUser(res.data)
            setQuestions(res.data.posts)
        },err=>{
            // console.log(err)
        })
    },[])
    return (
        <SecondaryLayout>
        {user ?
                <div className="row">
                    <div className="col-8">
                        <p className='fw-bold fs-5'>{user.user.first_name + ' ' +user.user.last_name}'s Questions</p>
                        {ques && ques.length>0 ?
                        <UserQuestion ques={ques} />
                        :
                        <p>No data</p>
                        }
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{height:"300px",width:"300px"}}>
                            <img src={`${process.env.REACT_APP_API_URL_2}${user.avatar}`} className='img-fluid border rounded-circle' />
                        </div>
                        <div className="col-12 mt-4 fw-bold fs-4">
                            {user.user.first_name + ' ' +user.user.last_name}
                        </div>
                        <div className="col-12">
                            {user.user.email}
                        </div>
                    </div>
                </div>
            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary mx-auto mt-4" role="status">
                <span className="sr-only"></span>
                </div>
            </div>
        }
        </SecondaryLayout>
    )
}
