import React from 'react'
import VerticalNav from '../components/navbar/VerticalNav'
import Footer from '../components/Footer/Footer'

export default function SecondaryLayout({children}) {
    return (
            <>
            <VerticalNav />            
            <div className="ms-auto px-3 py-4 content border-bottom content-100">
            {children} 
            </div>
            <Footer />
            </>
    )
}
