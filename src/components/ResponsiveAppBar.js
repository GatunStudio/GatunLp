import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../Dist/logo.png';

import { motion, useScroll } from "framer-motion";

const pages = ['Introdução', 'Soluções', 'Sobre nós', 'Portfólio', 'Contato'];
const click = [() => {
  // find a section 
  // scroll to that section - 100px 
    window.scrollTo({ top: 0, behavior: "smooth" });
},

() => {
  // find a section
  const section = document.querySelector(".Solution");
  // scroll to that section - 100px
  if (section) {
    let newSection =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      200;
    window.scrollTo({ top: newSection, behavior: "smooth" });
  }
}
, () => {
  // find a section
  const section = document.querySelector(".more");
  // scroll to that section - 100px
  if (section) {
    let newSection =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      200;
    window.scrollTo({ top: newSection, behavior: "smooth" });
  }
}, 
() => {
   // scroll to the end
    const section = document.querySelector(".tripulantes");
    // scroll to that section - 100px
    if (section) {
      let newSection =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        200;
      window.scrollTo({ top: newSection, behavior: "smooth" });
    }
}, 
() => {
   // scroll to the end
    const section = document.querySelector(".footer");
    // scroll to that section - 100px
    if (section) {
      let newSection =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        200;
      window.scrollTo({ top: newSection, behavior: "smooth" });
    }
}
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() { 
  const { scrollYProgress } = useScroll();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null); 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] =  useState('transparent');
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const calculateBackground = () => {
        if (scrollPosition > 50) {
          // % of 0 to 350 scrollposition / 100
          //350 of 350 = 100% 
          //100 of 350 = 28.57%
          setHeaderBackground('rgba(59, 15, 113, ' +  (scrollPosition / 350) 
          + ')');
        } else if (scrollPosition <= 50) {
          setHeaderBackground('transparent');
        }
    };
    calculateBackground();
  }, [scrollPosition]); 

  return (
    
    <motion.div
    className="App"
    style = {{
      //change background opacity rgba
      backgroundColor:  headerBackground,
       
      zIndex: 1000,
      position: "fixed",
    }}
  >
    <AppBar position="fixed" sx={{ 
      backgroundColor:  headerBackground,zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'none', md: 'flex' },
      opacity: scrollPosition / 100 + 0.0, mr: 1 }} > 
          <img src={logo}  width="50px"/>
            </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onAbort={click[0]}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              
              textDecoration: 'none',
            }}
          >
            GATUN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                <MenuItem key={page} onClick={
                  click[pages.indexOf(page)]
                }>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} > 
          <img src={logo} width="50px"/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem', 
              opacity: scrollPosition / 100 + 0.6,
              textDecoration: 'none',
              
            }} 
          >
            GATUN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={ click[pages.indexOf(page)]}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              { /*<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>*/}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </motion.div>
  );
}
export default ResponsiveAppBar;
