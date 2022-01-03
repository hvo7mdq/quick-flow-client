import React from 'react'
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
