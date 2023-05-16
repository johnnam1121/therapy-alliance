import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

export default function Questions() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const stockColored = require('../../pictures/stockColored.jpeg');
  const containerStyle = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${stockColored})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    alignItems: 'center',
    display: 'flex',
  };

  return (
    <Box>
      <Box sx={{ ...containerStyle }}>
        <Grid container spacing={2}>
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
            <Typography variant='h1' sx={{ textAlign: 'center', color: '#ffffff', fontSize: '3.25rem' }}>
              Questions? <a href="http://johnnam1121.github.io/therapy-alliance#/Contact" style={{ color: '#000000' }}>Contact Us</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
