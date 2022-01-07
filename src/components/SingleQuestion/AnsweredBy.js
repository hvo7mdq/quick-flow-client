import React from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

var relativeTime = require('dayjs/plugin/relativeTime')
export default function AnsweredBy({time,user,user_id}) {
    return (
        <div className='col-2 answered-by'>
            <p className='d-inline'>Answered {dayjs.extend(relativeTime)}{dayjs(time).fromNow()}</p>
            <p>By <Link to={`/profile/${user_id}`}>{user}</Link></p>
        </div>
    )
}
