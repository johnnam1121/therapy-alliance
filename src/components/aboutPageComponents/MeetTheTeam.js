import { Box, Paper, Grid, Typography, useMediaQuery } from '@mui/material';
import Tony from '../../pictures/Tony.jpg'
import David from '../../pictures/David.jpg'

export default function MeetTheTeam() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const paperStyles = {
    p: 1,
    borderRadius: 8,
    boxShadow: 4,
    backgroundColor: 'primary.dark',
    width: '27vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  const imgStyles = {
    height: '60vh',
    width: '25vw',
    borderRadius: '10%'
  }

  return (
    <Box>
      <Grid container spacing={3} sx={{ backgroundColor: 'primary.dark', px: '15vw' }}>
        <Grid item xs={12} md={12} sx={{ mt: '5vh' }}>
          <Typography variant='h3'>
            Meet The Team
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper sx={paperStyles}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={Tony} alt='Tony Pic' style={imgStyles} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>This is a test</Typography>
            </Box>
          </Paper>
          <Box sx={{ mx: 4 }} />
          <Paper sx={paperStyles}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={David} alt='David Pic' style={imgStyles} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>This is another test</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

