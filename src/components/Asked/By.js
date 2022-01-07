import React from 'react'
import { Link } from 'react-router-dom'

export default function By({user,user_id}) {
    return (
       <p className='answered-by'>By <Link to={`/profile/${user_id-1}`}>{user}</Link></p>
    )
}
