import React from 'react'
import dayjs from 'dayjs'

var relativeTime = require('dayjs/plugin/relativeTime')
export default function Time({time}) {
    return (
        <p className='d-inline answered-by'>Asked {dayjs.extend(relativeTime)}{dayjs(time).fromNow()}</p>
    )
}
