import { Box, Container, Grid, List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Questions() {
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
            <Typography variant='h1' sx={{ textAlign: 'center', color: '#ffffff' }}>
              Questions? <a href="google.com" style={{ color: '#000000' }}>Contact Us</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
