import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import stock from '../../pictures/stockimg.jpg';

import { motion } from 'framer-motion'

export default function TherapyBanner() {
  const isMobile = useMediaQuery('(max-width:768px)');

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
    mb: isMobile ? '0vh' : '10vh',
  }

  return (
    <Box>
      <Grid container spacing={8} sx={containerStyles}>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0 }}>
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
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.25 }}>
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
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
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
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
