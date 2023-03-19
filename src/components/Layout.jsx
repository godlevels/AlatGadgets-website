import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routess from '../routes/Routess'

const Layout = () => {
    return (
        <>
            <Header />

            <div>
                <Routess />
            </div>

            <Footer />
        </>
    )
}

export default Layout
