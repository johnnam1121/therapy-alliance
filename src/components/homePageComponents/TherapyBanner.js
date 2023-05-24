import { Box, Grid, Paper, Typography, useMediaQuery, Card, CardContent } from '@mui/material';
import OT from '../../pictures/Banner-OT.png'
import PT from '../../pictures/Banner-PT.png'
import SLP from '../../pictures/Banner-SLP.png'
import { motion } from 'framer-motion'

export default function TherapyBanner() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const containerStyles = {
    textAlign: 'center',
    px: '8vw',
    backgroundColor: 'primary.light',
  }

  const cardStyles = {
    transform: 'translateY(-8vh)',
    backgroundColor: 'primary.dark',
    mb: isMobile ? '0vh' : '3vh',
    height: '100%',
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
      <Grid container spacing={0} sx={containerStyles}>
        <Grid item xs={12} md={4} sx={{ px: '1vw', pb: isMobile ? '2vh' : '0' }} component={motion.div} initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0 }}>
          <Card sx={cardStyles}>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ px: '1vw', pb: isMobile ? '2vh' : '0' }} component={motion.div} initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <Card sx={cardStyles}>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ px: '1vw', pb: isMobile ? '2vh' : '0' }} component={motion.div} initial={{ x: '20vw' }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }}>
          <Card sx={cardStyles}>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box >
  );
}
