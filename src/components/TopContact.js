import React from 'react';
import { useMediaQuery, Box, Button, CssBaseline, IconButton, Menu, Paper, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

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
          <LinkedInIcon sx={iconStyles} />
          <LinkedInIcon sx={iconStyles} />
          <LinkedInIcon sx={iconStyles} />
          <InstagramIcon sx={iconStyles} />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <EmailIcon sx={iconStyles} />
            <Box sx={{ mr: '1vw', display: { xs: "none", sm: "block" } }}>someemail@gmail.com</Box>
            <LocalPhoneIcon sx={iconStyles} />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>(123) 456-7890</Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
