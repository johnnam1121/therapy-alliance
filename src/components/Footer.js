import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const linkStyles = {
    display: 'block',
    textAlign: 'center',
    color: '#eeeeee',
    margin: '1vh 0',
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ backgroundColor: 'primary.main' }}>
        <Grid item xs={12} md={4}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            TD Therapy Alliance
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center', color: '#eeeeee' }}>
            22742 Cypresswood Dr. #1174<br />
            Spring, TX, 77373<br />
            Mail: TBD<br />
            Tel: TBD<br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} sx={{ textAlign: 'center', color: '#eeeeee' }}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            Menu
          </Typography>
          <Typography component={Link} to="/" sx={linkStyles}>Home</Typography>
          <Typography component={Link} to="/" sx={linkStyles}>About</Typography>
          <Typography component={Link} to="/" sx={linkStyles}>Service</Typography>
          <Typography component={Link} to="/" sx={linkStyles}>Contact</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            Hours
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center', color: '#eeeeee' }}>
            Sunday: Closed <br />
            Monday: 9-5 PM <br />
            Tuesday: 9-5 PM <br />
            Wednesday: 9-5 PM <br />
            Thursday: 9-5 PM <br />
            Friday: 9-5 PM <br />
            Saturday: Closed <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            Social Media
          </Typography>
          <Box sx={{ textAlign: 'center', color: '#eeeeee' }}>
            <LinkedInIcon />
            <InstagramIcon />
          </Box>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            Some Useful Information
          </Typography>
          <Box sx={{ ml: '7vw', mr: '7vw', mb: '5vh' }}>
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
