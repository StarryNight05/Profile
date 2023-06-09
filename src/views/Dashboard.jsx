import React from 'react'
import Layout from './layout/Layout'
import { Avatar, Card, CardContent, Container, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import FullWidthTabs from './components/MenuTab'
import profile from './img/profile.png';
import { BsDownload } from 'react-icons/bs'

const SkillsMenu = React.lazy(() => import('./components/SkillsMenu'));
const WorkExperience = React.lazy(() => import('./components/WorkExperience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Footer = React.lazy(() => import('./components/Footer'));

const Dashboard = () => {
    return (
        <Layout>
            {/* About ME */}
            <section style={{
                background: '#F1D00A'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item md={12} sx={{ marginTop: { xs: '6.5rem', md: '8rem' }, marginBottom: '3rem' }}>
                            <Card sx={{
                                background: 'rgb(0, 30, 60)',
                                color: '#fff',
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
                                                    <Avatar sx={{ width: 160, height: 160, border: '1px solid #001220', boxShadow: '0 0 5px #001220' }} alt='profile' src={profile}></Avatar>
                                                </div>
                                                <div className="content" style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Typography variant='h6' gutterBottom noWrap sx={{
                                                        marginTop: '2vh',
                                                        fontFamily: 'Ubuntu'
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
                                                {/* <div className="cv" style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Typography variant='subtitle' gutterBottom noWrap sx={{
                                                        marginTop: '5px'
                                                    }}>
                                                        <Button href="" download sx={{
                                                            background: '#F1D00A',
                                                            color: 'rgb(0, 30, 60)',
                                                            fontWeight: 'bold',
                                                            '&:hover': {
                                                                background: '#fff',
                                                                color: '#000'
                                                            }
                                                        }}><BsDownload></BsDownload>&nbsp;Download</Button>
                                                    </Typography>
                                                </div> */}
                                            </Grid>
                                            <Grid item xs={12} md={9} sx={{
                                                borderLeft: 'solid 1px #fff',
                                                display: { xs: 'none', md: 'grid' }
                                            }}>
                                                <div className="content">
                                                    <Typography variant='subtitle' gutterBottom noWrap sx={{
                                                        fontWeight: 'bold',
                                                        color: '#FFC900'
                                                    }}>
                                                        About Me
                                                    </Typography><br /><br />
                                                    <Typography variant='body1' gutterBottom sx={{
                                                        fontFamily: 'Ubuntu'
                                                    }}>
                                                        I graduated from SMK Bina Mandiri Multimedia, Cileungsi, majoring in software engineering. I have an interest in digital things, like backend developer and I'm also interested in robotics.
                                                    </Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9} sx={{
                                                display: { xs: 'grid', md: 'none' }
                                            }}>
                                                <div className="content">
                                                    <Typography variant='subtitle' gutterBottom noWrap sx={{
                                                        fontWeight: 'bold',
                                                        color: '#FFC900'
                                                    }}>
                                                        About Me
                                                    </Typography><br />
                                                    <Typography variant='body1' gutterBottom sx={{
                                                        fontFamily: 'Ubuntu'
                                                    }}>
                                                        I graduated from SMK Bina Mandiri Multimedia, Cileungsi, majoring in software engineering. I have an interest in digital things, like backend developer and I'm also interested in robotics.
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* Menu */}
            <section style={{
                background: 'rgb(0, 30, 60)'
            }}
            >
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <FullWidthTabs></FullWidthTabs>
                </Container>
            </section>

            {/* Skills */}
            <section style={{
                background: '#F6F1E9'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <SkillsMenu></SkillsMenu>
                </Container>
            </section>

            {/* Work Experience */}
            <section style={{
                background: '#F1D00A'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <WorkExperience></WorkExperience>
                </Container>
            </section>

            {/* Portofolio */}
            <section style={{
                background: '#F6F1E9'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <Projects></Projects>
                </Container>
            </section>

            {/* Footer */}
            <section style={{
                background: 'rgb(0, 30, 60)',
                borderBottom: '2px solid #F1D00A'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem' }}>
                    <Footer></Footer>
                </Container>
            </section>
            <section style={{
                background: 'rgb(0, 30, 60)'
            }}>
                <Container maxWidth="lg" sx={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ color: '#F6F1E9', fontFamily: 'Ubuntu' }}>Copyright &copy; 2023 Bryant Sulthan Nugroho</Typography>
                </Container>
            </section>
        </Layout >
    )
}

export default Dashboard