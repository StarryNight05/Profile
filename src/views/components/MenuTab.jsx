import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import skill from '../img/skills.png'
import work from '../img/work.png'
import porto from '../img/portofolio.png'
import { Avatar, Tooltip, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MenuTab = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4} md={4}>
                    <a href="#skills" style={{ textDecoration: 'none' }}>
                        <Item sx={{
                            background: '#FFC900'
                        }}>
                            <Typography sx={{
                                display: { xs: 'flex', md: 'flex' },
                                justifyContent: { xs: 'center', md: 'space-between' },
                            }}>
                                <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px', ml: '0.3rem', display: { xs: 'none', md: 'block' } }} alt='profile' src={skill}></Avatar>
                                <Typography
                                    variant='overline'
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        mr: { xs: 0, md: '1rem' },
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Skills
                                </Typography>
                                <Typography
                                    variant='overline'
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        display: { xs: 'block', md: 'none' }
                                    }}
                                >
                                    <Tooltip title="Skills" placement='bottom'>
                                        <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px' }} alt='profile' src={skill}></Avatar>
                                    </Tooltip>
                                </Typography>
                            </Typography>
                        </Item>
                    </a>
                </Grid>
                <Grid xs={4} md={4}>
                    <a href="#work-experience" style={{ textDecoration: 'none' }}>
                        <Item sx={{
                            background: '#FFC900'
                        }}>
                            <Typography sx={{
                                display: { xs: 'flex', md: 'flex' },
                                justifyContent: { xs: 'center', md: 'space-between' },
                            }}>
                                <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px', ml: '0.3rem', display: { xs: 'none', md: 'block' } }} alt='profile' src={work}></Avatar>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        mr: { xs: 0, md: '1rem' },
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Work experience
                                </Typography>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        display: { xs: 'block', md: 'none' }
                                    }}
                                >
                                    <Tooltip title="Work Experience" placement='bottom'>
                                        <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px' }} alt='profile' src={work}></Avatar>
                                    </Tooltip>
                                </Typography>
                            </Typography>
                        </Item>
                    </a>
                </Grid>
                <Grid xs={4} md={4}>
                    <a href="#portofolio" style={{ textDecoration: 'none' }}>
                        <Item sx={{
                            background: '#FFC900'
                        }}>
                            <Typography sx={{
                                display: { xs: 'flex', md: 'flex' },
                                justifyContent: { xs: 'center', md: 'space-between' },
                            }}>
                                <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px', ml: '0.3rem', display: { xs: 'none', md: 'block' } }} alt='profile' src={porto}></Avatar>
                                <Typography
                                    variant='overline'
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        mr: { xs: 0, md: '1rem' },
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                >
                                    Portofolio
                                </Typography>
                                <Typography
                                    variant='overline'
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        display: { xs: 'block', md: 'none' }
                                    }}
                                >
                                    <Tooltip title="Portofolio" placement='bottom'>
                                        <Avatar sx={{ width: 20, height: 20, border: '2px solid #001220', padding: '5px' }} alt='profile' src={porto}></Avatar>
                                    </Tooltip>
                                </Typography>
                            </Typography>
                        </Item>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MenuTab