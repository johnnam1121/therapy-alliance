import { Box, Grid, Typography, Paper } from '@mui/material';
import stock from '../../pictures/stockimg.jpg'

export default function TherapyBanner() {

  const containerStyles = {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    px: '3vw',
  }

  const paperStyles = {
    transform: 'translateY(-10vh)',
    my: '3vh',
  }

  return (
    <Box>
      <Grid container spacing={2} sx={containerStyles}>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <div style={{ paddingLeft: '6vw', paddingRight: '6vw' }}>
              <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '3vh', marginBottom: '3vh' }} />
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <Typography variant='body 1'>
                Improving mobility, range of motion, and strength
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <div style={{ marginLeft: '6vw', paddingRight: '6vw' }}>
              <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '3vh', marginBottom: '3vh' }} />
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <Typography variant='body 1'>
                Improving mobility, range of motion, and strength
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <div style={{ marginLeft: '6vw', paddingRight: '6vw' }}>
              <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '3vh', marginBottom: '3vh' }} />
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <Typography variant='body 1'>
                Improving mobility, range of motion, and strength
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
