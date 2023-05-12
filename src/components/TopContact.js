import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, CssBaseline, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TopContact() {

  const isMobile = useMediaQuery('(max-width:768px)');
  const iconStyles = {
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    color: '#eeeeee',
    fontSize: '1.75rem',
    mr: '1vw',
    borderRadius: '30%'
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgColor: 'primary.main',
        minHeight: '6vh',
        px: isMobile ? '1vw' : '10vw',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <CssBaseline />
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item xs={6} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} to="/">
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} to="/">
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} to="/">
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <IconButton edge="start" color='inherit' aria-label="menu" component={Link} to="mailto: johnnam93@gmail.com">
              <EmailIcon sx={iconStyles} />
            </IconButton>
            <Box sx={{ mr: '1vw', display: { xs: "none", sm: "block" } }}>
              <Typography variant='body1' sx={{ color: '#eeeeee' }} component={Link} to='mailto: johnnam93@gmail.com' target="_blank" rel="noopener noreferrer" >
                someemail@gmail.com
              </Typography>
            </Box>
            <IconButton edge="start" color='inherit' aria-label="menu" component={Link} to="tel::+8324557478">
              <LocalPhoneIcon sx={iconStyles} />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant='body1' sx={{ color: '#eeeeee' }} component={Link} to='tel::+8324557478' target="_blank" rel="noopener noreferrer" >
                (123) 456-7890
              </Typography>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
