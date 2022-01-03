import React from 'react'
import { Tick } from '../../assets/icons/Icons'

export default function Correct({correct}) {
    return (
        <div className='col-1 text-center'>
            {correct && <p><Tick /></p>}
        </div>
    )
}
