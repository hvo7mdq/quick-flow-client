import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout({children}) {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
