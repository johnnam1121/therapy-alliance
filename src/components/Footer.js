import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: 'primary.dark' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            TD Therapy Alliance
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'center', color: '#eeeeee' }}>
            22742 Cypresswood Dr. #1174<br />
            Spring, TX, 77373<br />
            Mail: TBD<br />
            Tel: TBD<br />
            ©2023 John Nam. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} sx={{ textAlign: 'center', color: '#eeeeee' }}>
          <Typography variant='h6' sx={{ mt: '4vh', mb: '2vh', textAlign: 'center', color: '#eeeeee' }}>
            Menu
          </Typography>
          <Typography component={Link} to="/" sx={{ textAlign: 'center', color: '#eeeeee' }}>Home</Typography><br />
          <Typography component={Link} to="/" sx={{ textAlign: 'center', color: '#eeeeee' }}>About</Typography><br />
          <Typography component={Link} to="/" sx={{ textAlign: 'center', color: '#eeeeee' }}>Service</Typography><br />
          <Typography component={Link} to="/" sx={{ textAlign: 'center', color: '#eeeeee' }}>Contact</Typography><br />
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
    </Container>
  )
}
