import React from 'react'
import Helmet from 'react-helmet'

export default function HelmetTitle({title}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content="Q and A related to programming" />
        </Helmet>
    )
}
