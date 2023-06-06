import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: '8rem' }}>
                <main>
                    {children}
                </main>
            </Container>
        </React.Fragment >
    )
}

export default Layout