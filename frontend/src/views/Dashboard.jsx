import React from 'react'
import Layout from './layout/Layout'
import { Avatar, Card, CardContent, Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { BsHouseDoor } from 'react-icons/bs'
import FullWidthTabs from './components/MenuTab'
import profile from './img/profile.jpg';


const Dashboard = () => {
    return (
        <Layout>
            <Container maxWidth="lg" sx={{ marginTop: '8rem' }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '5vh' }}>
                    <Grid item md={12}>
                        <Card sx={{
                            background: '#fff',
                            color: '#000',
                            boxShadow: '0 0 5px #000'
                        }}>
                            <CardContent>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3} sx={{
                                            display: 'grid'
                                        }}>
                                            <div className="content" style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Avatar sx={{ width: 160, height: 160 }} alt='profile' src={profile}></Avatar>
                                            </div>
                                            <div className="content" style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Typography variant='h5' gutterBottom noWrap sx={{
                                                    marginTop: '2vh'
                                                }}>
                                                    Bryant Sulthan Nugroho
                                                </Typography>
                                            </div>
                                            <div className="break" style={{ display: 'flex', justifyContent: 'center' }}>
                                                <hr style={{ width: '150px' }} />
                                            </div>
                                            <div className="content" style={{
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Typography variant='subtitle' gutterBottom noWrap sx={{
                                                    marginTop: '5px'
                                                }}>
                                                    Bogor, Indonesia
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={9} sx={{
                                            borderLeft: 'solid 1px #001220'
                                        }}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda quam officiis porro debitis dignissimos at tenetur fugit nostrum suscipit.
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant='h5' gutterBottom sx={{
                    fontWeight: 'bold'
                }}>
                    <BsHouseDoor></BsHouseDoor>&nbsp;Home <hr />
                </Typography>
                <FullWidthTabs></FullWidthTabs>
            </Container>
        </Layout>
    )
}

export default Dashboard