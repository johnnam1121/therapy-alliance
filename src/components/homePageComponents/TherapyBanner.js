import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import stock from '../../pictures/stockimg.jpg'

export default function TherapyBanner() {
  const containerStyle = { textAlign: 'center', mt: '5vh', pl: '10vw', pr: '10vw' }
  const titleStyle = { textAlign: 'center', marginBottom: '2rem' };
  const boldTitle = { textAlign: 'center', marginTop: '3vh', textDecoration: 'bold', fontSize: '10vh' };

  return (
    <Box sx={{ flexGrow: 1, zIndex: '3' }}>
      <Grid container sx={containerStyle} spacing={2}>
        <Grid item xs={4} md={4}>
          <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%' }} />
          <Typography variant='h3'>
            this is a test
          </Typography>
          <Typography variant='body 1'>
            this is a test
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%' }} />
          <Typography variant='h3'>
            this is a test
          </Typography>
          <Typography variant='body 1'>
            this is a test
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%' }} />
          <Typography variant='h3'>
            this is a test
          </Typography>
          <Typography variant='body 1'>
            this is a test
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}