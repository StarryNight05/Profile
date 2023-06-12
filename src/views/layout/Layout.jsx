import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <div className="main" style={{ minHeight: '100vh' }}>
                <main>
                    {children}
                </main>
            </div>
        </ >
    )
}

export default Layout