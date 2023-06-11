import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Tooltip, Typography } from '@mui/material';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png'
import bs from '../img/Bootstrap.png'
import rjs from '../img/React.png'
import mui from '../img/mui.png'
import lrv from '../img/laravel.png'
import njs from '../img/Node.png'
import sqlogo from '../img/Mysql.png'

const SkillsMenu = () => {
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
                    Skills
                </Typography>
            </div>
            <div id="skills" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h6' gutterBottom sx={{
                    color: '#001220',
                    fontWeight: 'bold',
                    fontFamily: 'Ubuntu'
                }}
                >
                    Basic Skills
                </Typography>
            </div>
            <div id="skills" style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '.5rem',
            }}>
                <Tooltip title="HTML" placement='bottom'>
                    <img src={html} alt="html" style={{ width: '40px', marginRight: '.5rem' }} />
                </Tooltip>
                <Tooltip title="CSS" placement='bottom'>
                    <img src={css} alt="css" style={{ width: '40px', marginRight: '.5rem' }} />
                </Tooltip>
                <Tooltip title="JavaScript" placement='bottom'>
                    <img src={js} alt="js" style={{ width: '40px' }} />
                </Tooltip>
            </div>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', mt: '2rem', ml: { xs: '3rem', md: '9rem' } }}>
                <Grid item xs={12} md={4} sx={{ mb: { xs: '1rem', md: '0' } }}>
                    <Typography variant='h6' sx={{
                        color: '#001220',
                        fontWeight: 'bold',
                        fontFamily: 'Ubuntu',
                        mb: '.5rem'
                    }}>
                        Front End Framework
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={bs} alt="bs" style={{ width: '30px' }} />&nbsp;Bootstrap
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={rjs} alt="rjs" style={{ width: '30px' }} />&nbsp;ReactJS
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={mui} alt="mui" style={{ width: '30px' }} />&nbsp;Material UI
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mb: { xs: '1rem', md: '0' } }}>
                    <Typography variant='h6' sx={{
                        color: '#001220',
                        fontWeight: 'bold',
                        fontFamily: 'Ubuntu',
                        mb: '.5rem'
                    }}>
                        Back End Framework
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={lrv} alt="lrv" style={{ width: '30px' }} />&nbsp;Laravel
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={njs} alt="njs" style={{ width: '30px' }} />&nbsp;NodeJS
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6' sx={{
                        color: '#001220',
                        fontWeight: 'bold',
                        fontFamily: 'Ubuntu',
                        mb: '.5rem'
                    }}>
                        Database
                    </Typography>
                    <Typography variant='subtitle1' sx={{
                        display: 'flex',
                        mt: '.5rem'
                    }}>
                        <img src={sqlogo} alt="sqlogo" style={{ width: '30px' }} />&nbsp;MySQL
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default SkillsMenu