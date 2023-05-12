import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

export default function Mission() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const textStyles = {
    color: "#888888",
    mb: '3vh'
  }

  const sectionTitles = {
    color: '#777777',
    mb: '1vh'
  }

  return (
    <Box>
      <Grid container sx={{ backgroundColor: 'primary.light', px: '15vw' }}>
        <Grid item xs={12} md={12} sx={{ mb: '5vh', mt: '10vh' }}>
          <Typography variant='h3'>
            Who Are We
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h4' sx={sectionTitles}>
            Mission:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            Some text goes hereSome text goes hereSome text goes
            hereSome text goes hereSome text goes
            Some text goes hereSome text goes hereSome text goes hereSome text goes here
            Some text goes hereSome text goes hereSome text goes hereSome text goes hereSome text goes herev
            hereSome text goes hereSome text goes here
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h4' sx={sectionTitles}>
            Vision:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            Some text goes hereSome text goes hereSome text goes
            hereSome text goes hereSome text goes
            Some text goes hereSome text goes hereSome text goes hereSome text goes here
            Some text goes hereSome text goes hereSome text goes hereSome text goes hereSome text goes herev
            hereSome text goes hereSome text goes here
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mb: '10vh' }}>
          <Typography variant='h4' sx={sectionTitles}>
            Values:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            Some text goes hereSome text goes hereSome text goes
            hereSome text goes hereSome text goes
            Some text goes hereSome text goes hereSome text goes hereSome text goes here
            Some text goes hereSome text goes hereSome text goes hereSome text goes hereSome text goes herev
            hereSome text goes hereSome text goes here
          </Typography>
        </Grid>
      </Grid>
    </Box >
  );
}












// <Grid container sx={{ backgroundColor: 'primary.light', px: '10vw', my: '10vh' }}>
// <Typography variant='h2'>Who We Are</Typography>
// <Grid item xs={12} md={12} >
//   <Typography variant='h2'>Who We Are</Typography>
//   <Typography variant='h3' sx={sectionTitles}>Mission Statement:</Typography>
//   <Typography variant='h5' sx={sectionTitles}>
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//   </Typography>
// </Grid>
// </Grid>
