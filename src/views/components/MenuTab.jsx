import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import {Typography } from '@mui/material'

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
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={30} height={30} viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='none' width={30} height={30} viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
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