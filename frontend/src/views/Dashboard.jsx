import React from 'react'
import Layout from './layout/Layout'
import { Avatar } from '@mui/material'
import profile from './img/profile.jpg';

const Dashboard = () => {
    return (
        <Layout>
            <Avatar sx={{ width: 150, height: 150 }} alt='profile' src={profile}></Avatar>
        </Layout>
    )
}

export default Dashboard