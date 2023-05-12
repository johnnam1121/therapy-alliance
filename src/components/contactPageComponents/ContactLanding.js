import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

export default function ContactLanding() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const backgroundPhoto = require('../../pictures/Contact.jpeg');
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={background}>
      <Grid container>
        <Grid item xd={12} md={12} sx={{ textAlign: 'center', p: '6vw', alignItems: 'center', }} >
          <Typography variant='h1'>Contact Us</Typography>
          <Typography variant='h5' sx={{ color: '#eeeeee', px: '10vw', mt: '3vh' }}>
            We seek to improve the home health industry by raising the bar...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}