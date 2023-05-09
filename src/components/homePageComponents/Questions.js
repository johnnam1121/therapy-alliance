import { Box, Container, Grid, List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Questions() {
  const stars = require('../../pictures/stocktherapy.jpeg');
  const containerStyle = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${stars})`,
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
      <Box sx={{ position: 'relative', height: '15vh', backgroundColor: 'primary.main', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', pr: '5vw', pb: '3vh' }}>
        <Typography style={{ fontFamily: "Lucida Calligraphy", }}>
          "Beyond Recover, Towards Optimal Health: Our Vision For Therapy"
        </Typography>
      </Box>
    </Box>
  );
};
