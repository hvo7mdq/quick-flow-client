import React from 'react'
import VerticalNav from '../components/navbar/VerticalNav'
import Footer from '../components/Footer/Footer'

export default function SecondaryLayout({children}) {
    return (
            <>
            <VerticalNav />
            {children}  
            <Footer />
            </>
    )
}
