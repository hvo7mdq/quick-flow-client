import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout({children}) {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
