import React from 'react'
import { MenuIcon, useMediaQuery, Box, Button, CssBaseline, IconButton, Menu, Paper, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function TopContact() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', bgColor: 'primary.main', ml: '10vw', mr: '10vw', minHeight: '8vh' }}>
      <CssBaseline />
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <LinkedInIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', color: '#eeeeee', fontSize: '2rem', mr: '1vw' }} />
        <InstagramIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', color: '#eeeeee', fontSize: '2rem' }} />
      </div>
      <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <EmailIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)' }} />&nbsp; someemail@gmail.com &nbsp; <LocalPhoneIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', marginLeft: '0.5rem' }} /> &nbsp; (123) 456-7890
      </Typography>
    </Box>
  )
}