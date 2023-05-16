import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import stock from '../../pictures/stockimg.jpg';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const whyChooseUs = { textAlign: 'center', minHeight: '45vh', alignItems: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.15)', };
  const textStyles = { textAlign: 'center', fontWeight: 'bold', mb: '5vh', px: isMobile ? '8vw' : '3vw' }
  const imgRow = { textAlign: 'center', px: '7vw', alignItems: 'center', minHeight: '70vh' }
  const imgStyles = { height: '15vh', marginBottom: '1vh', borderRadius: '50%', marginTop: isMobile ? '5vh' : 0 }
  const buttonStyles = { color: '#ffffff', backgroundColor: '#00a99d', '&:hover': { backgroundColor: '#f36523' }, fontSize: isMobile ? '3vw' : '1.25vw', mb: '5vh', mt: isMobile ? '3vh' : 0 }
  const backgroundPhoto = require('../../pictures/therapyStock.jpeg');
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    background: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={{ backgroundColor: 'primary.light' }}>
      <Box sx={background}>
        <Grid container sx={whyChooseUs} spacing={2}>
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <Typography variant='h1' sx={textStyles}>
              Why Choose Us
            </Typography>
            <Typography variant='h5' sx={textStyles}>
              Here at TD Therapy Alliance, we take pride in developing our staff in order to
              provide the best quality services for our patients
            </Typography>
          </Grid>
          <Grid item xs={false} sm={3} />
        </Grid>
      </Box>
      <Box>
        <Grid container sx={imgRow} spacing={5}>
          <Grid item xs={12} md={4}>
            <img src={stock} alt='stock image' style={imgStyles} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={stock} alt='stock image' style={imgStyles} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={stock} alt='stock image' style={imgStyles} />
            <Typography variant='h3' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}><Button sx={buttonStyles} component={Link} to="/About">See More</Button></Box>
    </Box>
  );
}




// import { useMediaQuery, Box, Button, CssBaseline, IconButton, Menu, Paper, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
// import stock from '../../pictures/stockimg.jpg'

// export default function WhyChooseUs() {
//   const isMobile = useMediaQuery('(max-width:768px)');

//   const whyChooseUs = {
//     textAlign: 'center',
//     minHeight: '45vh',
//     alignItems: 'center',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.15)',
//   };
//   const imgRow = { textAlign: 'center', px: '7vw', alignItems: 'center', minHeight:'70vh' }
//   const buttonStyles = { color: '#ffffff', backgroundColor: '#00a99d', '&:hover': { backgroundColor: '#f36523' }, fontSize: '1.25vw', mb:'5vh' }
//   const backgroundPhoto = require('../../pictures/therapyStock.jpeg');
//   const background = {
//     position: 'relative',
//     padding: 0,
//     overflow: 'hidden',
//     minHeight: '90vh',
//     background: `url(${backgroundPhoto})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     alignItems: 'center',
//     display: 'flex',
//     width: '100%',
//     zIndex: 0
//   };

//   return (
//     <Box sx={{ backgroundColor: 'primary.light' }}>
//       <Box sx={{
//         flexGrow: 1,
//         backgroundColor: 'primary.dark',
//       }}>
//         <Grid container sx={whyChooseUs} spacing={2}>
//           <Grid item xs={false} sm={3} />
//           <Grid item xs={12} sm={6}>
//             <Typography variant='h1' sx={{ textAlign: 'center', fontWeight: 'bold', mb: '5vh', color: '#333333' }}>
//               Why Choose Us
//             </Typography>
//             <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', mb: '5vh' }}>
//               Here at TD Therapy Alliance, we take pride in developing our staff in order to
//               provide the best quality services for our patients
//             </Typography>
//           </Grid>
//           <Grid item xs={false} sm={3} />
//         </Grid>
//       </Box>

//       <Box>
//         <Grid container sx={imgRow} spacing={5}>
//           <Grid item xs={4} md={4}>
//             <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
//             <Typography variant='h3' sx={{ mb: '2vh' }}>
//               Developed Therapist
//             </Typography>
//             <Typography variant='body 1'>
//               Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
//               We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
//             </Typography>
//           </Grid>
//           <Grid item xs={4} md={4}>
//             <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
//             <Typography variant='h3' sx={{ mb: '2vh' }}>
//               Developed Therapist
//             </Typography>
//             <Typography variant='body 1'>
//               Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
//               We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
//             </Typography>
//           </Grid>
//           <Grid item xs={4} md={4}>
//             <img src={stock} alt='stock image' style={{ height: '15vh', marginBottom: '3vh', borderRadius: '50%' }} />
//             <Typography variant='h3' sx={{ mb: '2vh' }}>
//               Developed Therapist
//             </Typography>
//             <Typography variant='body 1'>
//               Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
//               We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'center',}}><Button sx={buttonStyles}>See More</Button></Box>
//     </Box>
//   );
// }