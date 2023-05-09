import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Topbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const background = { background: 'linear-gradient(to right, #87CEFA, #1E90FF)' }
  const background = {
    background: '#eeeeee',
  }

  return (
    <Box>


      <Box className="topbar" sx={{ display: 'flex', justifyContent: 'space-between', bgColor: 'secondary.main', ml: '10vw', mr: '10vw', minHeight: '8vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <LinkedInIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', color: '#eeeeee', fontSize: '2rem', mr: '1vw' }} />
          <InstagramIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', color: '#eeeeee', fontSize: '2rem' }} />
        </div>
        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <EmailIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)' }} />&nbsp; someemail@gmail.com &nbsp; <LocalPhoneIcon sx={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', marginLeft: '0.5rem' }} /> &nbsp; (123) 456-7890
        </Typography>
      </Box>

      <Box sx={background}>
        <CssBaseline />
        <Toolbar sx={{ justifyContent: 'space-between', ml: '8vw', mr: '10vw' }}>
          <IconButton
            size="large"
            edge="start"
            color='inherit'
            aria-label="menu"
            component={Link} to="/"
          >
            <img src={logo} height={'25vw'} />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Therapy Alliance
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/Home" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>Home</Button>
            <Button component={Link} to="/About" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>About</Button>
            <Button component={Link} to="/Projects" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>Projects</Button>
            <Button component={Link} to="/Experience" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>Experience</Button>
          </Box>
          {isMobile && (
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                sx={{ zIndex: '3' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      backgroundColor: 'white',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem component={Link} onClick={handleClose} to="/About" >About</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/Projects" >Projects</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/Experience" >Experience</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}