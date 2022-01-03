import React from 'react'
import dayjs from 'dayjs'

var relativeTime = require('dayjs/plugin/relativeTime')
export default function AnsweredBy({time,user}) {
    return (
        <div className='col-2 answered-by'>
            <p className='d-inline'>Answered {dayjs.extend(relativeTime)}{dayjs(time).fromNow()}</p>
            <p>By {user}</p>
        </div>
    )
}
