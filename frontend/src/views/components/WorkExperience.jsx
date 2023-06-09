import React from 'react'
import { Box, Typography } from '@mui/material'

const WorkExperience = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '2rem', mb: '2rem' }}>
            <div id="work-experience" style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h5' gutterBottom sx={{
                    color: '#001220',
                    fontWeight: 'bold',
                    fontFamily: 'Ubuntu',
                    mb: { xs: '.5rem', md: '1rem' }
                }}
                >
                    Work Experience
                </Typography>
            </div>
            <div id="experience2">
                <Typography variant='subtitle1' gutterBottom sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Ubuntu'
                }}>
                    PT. Amanah Media Edukasi
                </Typography>
                <Typography variant='caption' gutterBottom sx={{
                    fontFamily: 'Ubuntu'
                }}>
                    Desember 2021 - Maret 2022
                </Typography>
            </div>
            <div className="break">
                <hr style={{ width: '120px', color: '#001220' }} />
            </div>
            <div id="job-desk" style={{ marginTop: '.5rem' }}>
                <li style={{ fontWeight: 'bold' }}>Fullstack</li>
                <Typography variant='body1' gutterBottom sx={{
                    fontFamily: 'Ubuntu',
                    ml: '1.3rem'
                }}>
                    Had an internship at a tax consulting firm as a fullstack web developer. Creating a taxation private tutoring website, which aims to make it easier for people to learn taxation
                </Typography>
            </div>
        </Box>
    )
}

export default WorkExperience