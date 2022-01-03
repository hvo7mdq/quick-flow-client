import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout({children}) {
    return (
        <>
            <Navbar />
            <div className='con'>
            {children}
            </div>
        </>
    )
}
