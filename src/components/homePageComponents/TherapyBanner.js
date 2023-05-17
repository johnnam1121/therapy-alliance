import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import OT from '../../pictures/Banner-OT.png'
import PT from '../../pictures/Banner-PT.png'
import SLP from '../../pictures/Banner-SLP.png'
import { motion } from 'framer-motion'

export default function TherapyBanner() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const containerStyles = {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'stretch',
    px: '8vw',
    backgroundColor: 'primary.light',
  }

  const paperStyles = {
    transform: 'translateY(-8vh)',
    backgroundColor: 'primary.dark',
    mb: isMobile ? '0vh' : '3vh',
    height: isMobile ? '' : '55vh',
    pt: '3vh',
  }

  const imgStyles = {
    height: isMobile ? '20vh' : '15vh',
    width: isMobile ? '' : '10vw',
    borderRadius: '50%',
    marginTop: '3vh',
    marginBottom: '3vh'
  }

  return (
    <Box>
      <Grid container spacing={6} sx={containerStyles}>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0 }}>
            <Paper sx={paperStyles}>
              <img src={PT} alt='Physical Therapy' style={imgStyles} />
              <div style={{ marginInline: '2vw' }}>
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
              <img src={OT} alt='Occupational Therapy' style={imgStyles} />
              <div style={{ marginInline: '2vw' }}>
                <Typography variant='h4' sx={{ mb: '2vh' }}>
                  Occupational Therapy
                </Typography>
                <div style={{ paddingBottom: '3vh' }}>
                  <Typography variant='body 1'>
                    Improving fine motor skills to perform activities of daily living more efficiently
                  </Typography>
                </div>
              </div>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <Paper sx={paperStyles}>
              <img src={SLP} alt='Speech Language Pathology' style={imgStyles} />
              <div style={{ marginInline: '2vw' }}>
                <Typography variant='h4' sx={{ mb: '2vh' }}>
                  Speech Language Pathology
                </Typography>
                <div style={{ paddingBottom: '3vh' }}>
                  <Typography variant='body 1'>
                    Improving communication skills, swallowing ability, and cognition
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
