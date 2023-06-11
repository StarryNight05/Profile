import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="main" style={{ minHeight: '100vh' }}>
                <main>
                    {children}
                </main>
            </div>
        </ >
    )
}

export default Layout