import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const linkStyles = {
    display: 'block',
    textAlign: 'center',
    color: '#eeeeee',
    margin: '1vh',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
  };

  const menuTitles = {
    mt: '4vh',
    mb: '2vh',
    textAlign: 'center',
    color: '#FFFFFF',
    textDecoration: 'underline'
  };
  const menuText = {
    textAlign: 'center',
    color: '#eeeeee',
  };
  const iconStyles = {
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    color: '#eeeeee',
    fontSize: isMobile ? '3rem' : '2rem',
    mr: '1vw',
    borderRadius: '30%',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
  };

  return (
    <Box>
      <Grid container spacing={1} sx={{ backgroundColor: 'primary.main', px: '5vw' }}>
        <Grid item xs={12} md={3} >
          <Box>
            {/* <img src={logo} alt='logo' style={{ height: '5vh', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: '50%', }} /> */}
            <Typography variant='h4' sx={menuTitles}>
              TD Therapy Alliance
            </Typography>
          </Box>
          <Typography component={Link} sx={linkStyles} to='https://goo.gl/maps/LVANx7L2f6vnkDf28' target="_blank" rel="noopener noreferrer" >
            22742 Cypresswood Dr. #1174<br />
            Spring, TX, 77373<br />
          </Typography>
          <Typography component={Link} sx={linkStyles} to='mailto: johnnam93@gmail.com' target="_blank" rel="noopener noreferrer" >
            Mail: TBD
          </Typography>
          <Typography component={Link} sx={linkStyles} to='tel::+8324557478' target="_blank" rel="noopener noreferrer" >
            Tel: TBD
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={menuText}>
          <Typography variant='h4' sx={menuTitles}>
            Menu
          </Typography>
          <Typography component={Link} to="/" sx={linkStyles}>Home</Typography>
          <Typography component={Link} to="/About" sx={linkStyles}>About</Typography>
          <Typography component={Link} to="/Contact" sx={linkStyles}>Contact</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Hours
          </Typography>
          <Typography variant='body1' sx={menuText}>
            Monday: 9-5 PM <br />
            Tuesday: 9-5 PM <br />
            Wednesday: 9-5 PM <br />
            Thursday: 9-5 PM <br />
            Friday: 9-5 PM <br />
            Saturday: Closed <br />
            Sunday: Closed <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Social Media
          </Typography>
          <Box sx={menuText}>
            <Link to='https://www.google.com/?safe=active&ssui=on' target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={iconStyles} /></Link>
            <Link to='https://www.google.com/?safe=active&ssui=on' target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={iconStyles} /></Link>
            <Link to='https://www.google.com/?safe=active&ssui=on' target="_blank" rel="noopener noreferrer"><InstagramIcon sx={iconStyles} /></Link>
            <Link to='https://www.google.com/?safe=active&ssui=on' target="_blank" rel="noopener noreferrer"><InstagramIcon sx={iconStyles} /></Link>
          </Box>
          <Typography variant='h4' sx={menuTitles}>
            Some Useful Information
          </Typography>
          <Box sx={{ mb: '5vh', textAlign: 'center', }}>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblah?</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblahblahblah</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblah?</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblahblahblahblahblahblah</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: '#008e82', minHeight: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
        <Typography variant='body1' sx={{ color: '#eeeeee' }}>
          ©2023 John Nam. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}
