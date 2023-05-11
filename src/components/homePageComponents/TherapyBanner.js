import { Box, Grid, Typography, Paper } from '@mui/material';
import stock from '../../pictures/stockimg.jpg'

export default function TherapyBanner() {

  const containerStyles = {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    px: '8vw',
    backgroundColor: 'primary.light',
  }

  const paperStyles = {
    transform: 'translateY(-8vh)',
    backgroundColor: 'primary.dark',
    mb: '10vh',
  }

  return (
    <Box>
      <Grid container spacing={8} sx={containerStyles}>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '5vh', marginBottom: '3vh' }} />
            <div style={{ marginInline: '3vw' }}>
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <div style={{ paddingBottom: '3vh' }}>
                <Typography variant='body 1'>
                  Improving mobility, range of motion, and strength
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '5vh', marginBottom: '3vh' }} />
            <div style={{ marginInline: '3vw' }}>
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <div style={{ paddingBottom: '3vh' }}>
                <Typography variant='body 1'>
                  Improving mobility, range of motion, and strength
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper sx={paperStyles}>
            <img src={stock} alt='stock image' style={{ height: '15vh', borderRadius: '50%', marginTop: '5vh', marginBottom: '3vh' }} />
            <div style={{ marginInline: '3vw' }}>
              <Typography variant='h4' sx={{ mb: '2vh' }}>
                Physical Therapy
              </Typography>
              <div style={{ paddingBottom: '3vh' }}>
                <Typography variant='body 1'>
                  Improving mobility, range of motion, and strength
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
