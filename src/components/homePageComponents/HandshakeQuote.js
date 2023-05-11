import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import handshake from '../../pictures/handshake.jpg';

export default function HandshakeQuote() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const imageStyles = {
    height: isMobile ? '50vh' : '80vh',
    borderRadius: '20%',
  }

  return (
    <Box sx={{ backgroundColor: 'primary.light', px: '10vw' }}>
      <Grid container>
        <Grid xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', my: '5vh' }}>
          <img src={handshake} alt='handshake photo' style={imageStyles} />
        </Grid>
        <Grid xs={12} sm={6} sx={{ mb: isMobile ? '10vh' : '0' }}>
          <Typography variant='h3' sx={{ mt: isMobile ? '0' : '5vh', mb: '3vh' }}>
            some text here
          </Typography>
          <Typography variant='h5' sx={{ color: '#777777' }}>
            some text heresome text heresome text heresome text heresome text heresome text heresome text
            heresome text heresome text heresome text heresome text heresome text heresome text here
            some text heresome text heresome text heresome text heresome text heresome text heresome text
            heresome text heresome text heresome text heresome text heresome text heresome text here
          </Typography>
          <Typography variant='h5' sx={{ color: '#777777', my: '3vh' }}>
            some text heresome text heresome text heresome text heresome text heresome text heresome text
            heresome text heresome text heresome text heresome text heresome text heresome text here
            some text heresome text heresome text heresome text heresome text heresome text heresome text
            heresome text heresome text heresome text heresome text heresome text heresome text here
          </Typography>
          <Typography style={{ fontFamily: "Lucida Calligraphy", position: 'absolute', p: '0', }}>
            "Beyond Recovery, Towards Optimal Health: Our Vision For Therapy"
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

// <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
// <Typography style={{ fontFamily: "Lucida Calligraphy", }}>
//   "Beyond Recovery, Towards Optimal Health: Our Vision For Therapy"
// </Typography>
// </Box>
