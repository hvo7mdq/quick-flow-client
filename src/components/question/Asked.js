import React from 'react'
import Time from '../Asked/Time'
import By from '../Asked/By'

export default function Asked({time,user}) {
    return (
        <div className='col-2'>
            <Time time={time}/>
            <By user={user}/>  
        </div>
    )
}
