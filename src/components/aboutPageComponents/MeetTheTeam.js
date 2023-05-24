import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import David from '../../pictures/David.jpg';
import Tony from '../../pictures/Tony.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MeetTheTeam() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const paperStyles = {
    p: 1,
    borderRadius: 8,
    boxShadow: 4,
    backgroundColor: 'primary.dark',
    width: isMobile ? '80vw' : '27vw',
    display: 'flex',
    flexDirection: 'column',
    mb: '10vh'
  }

  const imgStyles = {
    height: isMobile ? '45vh' : '60vh',
    width: isMobile ? '70vw' : '25vw',
    borderRadius: '10%'
  }

  return (
    <Box>{isMobile ? (
      <Grid container spacing={3} sx={{ backgroundColor: 'primary.light', px: isMobile ? '10vw' : '15vw', }}>
        <Grid item xs={12} md={12} sx={{ mt: '5vh' }}>
          <Typography variant='h3'>
            Meet The Team
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ display: isMobile ? '' : 'flex', justifyContent: 'center' }}>
          <Paper sx={paperStyles}>
            <Carousel infiniteLoop autoPlay >
              <div>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={Tony} alt='Tony Pic' style={imgStyles} />
                </Box>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography sx={{ color: '#777777' }} variant='h5'>CEO, Co-Founder</Typography>
                  <Typography sx={{ color: '#00a99d' }} variant='h6'>Tony Tran</Typography>
                  {/* <Typography sx={{ mb: '3vh' }} variant='body1'>Some text we plan on adding later</Typography> */}
                </Box>
              </div>
              <div>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={David} alt='David Pic' style={imgStyles} />
                </Box>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography sx={{ color: '#777777' }} variant='h5'>CEO, Co-Founder</Typography>
                  <Typography sx={{ color: '#00a99d' }} variant='h6'>David Nguyen</Typography>
                  {/* <Typography sx={{ mb: '3vh' }} variant='body1'>Some text we plan on adding later</Typography> */}
                </Box>
              </div>
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
    ) : (
      <Grid container spacing={3} sx={{ backgroundColor: 'primary.light', px: isMobile ? '10vw' : '15vw', }}>
        <Grid item xs={12} md={12} sx={{ mt: '5vh' }}>
          <Typography variant='h3'>
            Meet The Team
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper sx={paperStyles}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={Tony} alt='Tony Pic' style={imgStyles} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography sx={{ color: '#777777' }} variant='h5'>CEO, Co-Founder</Typography>
              <Typography sx={{ color: '#00a99d' }} variant='h6'>Tony Tran</Typography>
              {/* <Typography sx={{ mb: '3vh' }} variant='body1'>Some text we plan on adding later</Typography> */}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper sx={paperStyles}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={David} alt='David Pic' style={imgStyles} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography sx={{ color: '#777777' }} variant='h5'>CEO, Co-Founder</Typography>
              <Typography sx={{ color: '#00a99d' }} variant='h6'>David Nguyen</Typography>
              {/* <Typography sx={{ mb: '3vh' }} variant='body1'>Some text we plan on adding later</Typography> */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    )}
    </Box>
  );
}
