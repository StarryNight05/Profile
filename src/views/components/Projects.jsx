import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pkl from '../img/pkl.png'
import spp from '../img/spp.png'
import vote from '../img/evote.png'
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '3rem', mb: '3rem' }}>
            <div id="skills" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h5' gutterBottom sx={{
                    color: 'text.secondary',
                    fontWeight: 'bold',
                    fontFamily: 'Ubuntu',
                    mb: { xs: '.5rem', md: '1rem' }
                }}
                >
                    Portofolio
                </Typography>
            </div>
            <div id="skills" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='body1' gutterBottom sx={{
                    color: 'text.secondary',
                    fontFamily: 'Ubuntu',
                    fontSize: '25px',
                    mb: { xs: '.5rem', md: '1rem' }
                }}
                >
                    Lastest Projects
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: { xs: '148px', md: '195px' } }}
                            image={vote}
                            title="Evoting"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Student Council E-voting
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To make it easier for students to choose the student council president and make it easier to calculate the results of votes. This Website built with Bootstrap, Javascript and PHP.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            margin: '5px'
                        }}>
                            <Button size="small" href='https://github.com/StarryNight05/Evoting' sx={{
                                background: '#001220',
                                '&:hover': {
                                    background: '#fff',
                                    color: '#001220'
                                },
                                color: '#fff',
                                fontFamily: 'Ubuntu',
                                border: '2px solid #001220'
                            }}
                            >
                                Go To Github&nbsp;<BsGithub style={{ marginLeft: '3px', marginRight: '4px' }}></BsGithub>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: { xs: '148px', md: '195px' } }}
                            image={spp}
                            title="SPP"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                School Administration
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I created this website to get a certificate from the National Professional Certification Agency. This website built with Bootstrap, Javascript and PHP.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            margin: '5px'
                        }}>
                            <Button size="small" href='https://github.com/StarryNight05/spp' sx={{
                                background: '#001220',
                                '&:hover': {
                                    background: '#fff',
                                    color: '#001220'
                                },
                                color: '#fff',
                                fontFamily: 'Ubuntu',
                                border: '2px solid #001220'
                            }}
                            >
                                Go To Github&nbsp;<BsGithub style={{ marginLeft: '3px', marginRight: '4px' }}></BsGithub>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: { xs: '148px', md: '195px' } }}
                            image={pkl}
                            title="Amana Tax"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Online Private Tutoring
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Build with Bootstrap, Javascript and PHP. This is a demo website I create when I was an internship.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{
                            margin: '5px'
                        }}>
                            <Button size="small" href='https://github.com/StarryNight05/Intern-AmanaTax' sx={{
                                background: '#001220',
                                '&:hover': {
                                    background: '#fff',
                                    color: '#001220'
                                },
                                color: '#fff',
                                fontFamily: 'Ubuntu',
                                border: '2px solid #001220'
                            }}
                            >
                                Go To Github&nbsp;<BsGithub style={{ marginLeft: '3px', marginRight: '4px' }}></BsGithub>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Projects