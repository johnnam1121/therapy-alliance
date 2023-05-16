import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Landing() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const buttonStyles = {
    mt: '7vh',
    display: 'block',
    mx: 'auto',
    color: '#ffffff',
    backgroundColor: '#00a99d',
    '&:hover': { backgroundColor: '#f36523' },
    fontSize: isMobile ? '4vw' : '1.5vw',
    borderRadius: '10%',
    width: isMobile? '30vw':'10vw'
  }

  const backgroundPhoto = require('../../pictures/physicalTherapy.jpeg');
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '90vh',
    background: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={background}>
      <Grid container>
        <Grid item xd={12} md={12} sx={{ textAlign: 'center', p: '6vw', alignItems: 'center', }} >
          <Typography variant='h1'>Let Us Connect You To<br /> Your <span style={{ color: '#f36523', fontStyle: 'italic' }}>Dream</span> Job Today!</Typography>
          <Button sx={buttonStyles} component={Link} to="/Contact">Apply Now!</Button>
        </Grid>
      </Grid>
    </Box>
  );
}


// export default function Landing() {
//   const therapyPicRow = { textAlign: 'center', pl: '15vw', pr: '15vw', alignItems: 'center', height: '90vh', backgroundColor: 'primary.light' }
//   const boldTitle = { textAlign: 'center', marginTop: '10vh', fontWeight: 'bold', fontSize: '4rem', color: '#ffffff', alignItems: 'center' };
//   const buttonStyles = { display: 'block', ml: 'auto', mr: 'auto', color: '#ffffff', backgroundColor: '#3fa9f5', '&:hover': { backgroundColor: '#f36523' } }
//   const backgroundPhoto = require('../../pictures/backTherapy.jpeg');
//   const background = {
//     position: 'relative',
//     padding: 0,
//     overflow: 'hidden',
//     minHeight: '100vh',
//     background: `url(${backgroundPhoto})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundAttachment: 'fixed',
//     alignItems: 'center',
//     width: '100%',
//   };

//   return (
//     <Box sx={{ backgroundColor: 'primary.main' }}>
//       <Grid container sx={background}>
//         <Grid item xs={false} sm={2} />
//         <Grid item xs={12} sm={8} sx={{ alignItems: 'center' }}>
//           <Typography variant='h1' style={boldTitle}>
//             Let's Connect You To Your Dream Job Today!
//           </Typography>
//           <Button variant='outlined' sx={buttonStyles}>Apply Now!</Button>
//         </Grid>
//         <Grid item xs={false} sm={2} />
//       </Grid>

//       <Grid container sx={therapyPicRow} spacing={2}>
//         <Grid item xs={4} md={4} sx={{ mt: '10vh', mb: '10vh ' }}>
//           <img src={stock} alt='stock image' style={{ height: '10vw', marginBottom: '3vh', borderRadius: '50%' }} />
//           <Typography variant='h3' sx={{ mb: '1vh' }}>
//             Physical Therapy
//           </Typography>
//           <Typography variant='body1'>
//             Improving mobility, range of motion, and strength
//           </Typography>
//         </Grid>
//         <Grid item xs={4} md={4} sx={{ mt: '10vh', mb: '10vh ' }}>
//           <img src={stock} alt='stock image' style={{ height: '10vw', marginBottom: '3vh', borderRadius: '50%' }} />
//           <Typography variant='h3' sx={{ mb: '1vh' }}>
//             Occupational Therapy
//           </Typography>
//           <Typography variant='body1'>
//             Improving fine motor skills to perform activities of daily living more efficiently
//           </Typography>
//         </Grid>
//         <Grid item xs={4} md={4} sx={{ mt: '10vh', mb: '10vh ' }}>
//           <img src={stock} alt='stock image' style={{ height: '10vw', marginBottom: '3vh', borderRadius: '50%' }} />
//           <Typography variant='h3' sx={{ mb: '1vh' }}>
//             Speech Language Pathology
//           </Typography>
//           <Typography variant='body1'>
//             Improving communication skills, swallowing ability, and cognition
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }