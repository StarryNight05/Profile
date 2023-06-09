import React from 'react'
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { BsMenuButtonWide } from 'react-icons/bs';


// const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };
    return (
        <AppBar sx={{
            background: '#fff',
            color: '#202529',
            boxShadow: '0 0 8px #000'
        }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bryant Sulthan Nugroho
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <BsMenuButtonWide></BsMenuButtonWide>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <Typography
                        variant="overline"
                        noWrap
                        component="a"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'center',
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bryant Sulthan Nugroho
                    </Typography>

                    {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ color: '#000', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar