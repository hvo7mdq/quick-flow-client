import React,{ useState,useEffect} from 'react'
import SecondaryLayout from '../../layout/SecondaryLayout'
import profile from '../../assets/img/profile.jpg'
import axiosInstance from '../../axios'
import UserQuestion from '../../components/Profile/UserQuestion'

export default function Profile() {
    let [ques,setQuestions] = useState(null)
    useEffect(()=>{
        axiosInstance.get('posts/').then(res=>{
            // console.log(res.data.results)
            setQuestions(res.data.results)
        })
        // setQuestions(questions)
    },[])
    return (
        <SecondaryLayout>
            <div className="ms-auto px-3 py-4 content border-bottom">
                <div className="row">
                    <div className="col-8">
                        <p className='fw-bold fs-5'>User Post</p>
                        <UserQuestion ques={ques} />
                    </div>
                    <div className="col-4">
                        <div className="col-12" style={{height:"300px",width:"300px"}}>
                            <img src={profile} className='img-fluid rounded-circle' />
                        </div>
                        <div className="col-12 mt-2 fw-bold">
                            User Name
                        </div>
                        <div className="col-12">
                            Email Address
                        </div>
                    </div>
                </div>
            </div>
        </SecondaryLayout>
    )
}
