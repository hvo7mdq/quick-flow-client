import React from 'react'
import Time from '../../Asked/Time'
import By from '../../Asked/By'

export default function Asked({time,user,user_id}) {
    return (
        <div className='col-2'>
            <Time time={time}/>
            <By user_id={user_id} user={user}/>
        </div>
    )
}
