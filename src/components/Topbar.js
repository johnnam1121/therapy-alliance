import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, CssBaseline, IconButton, Menu, MenuItem, Typography, useMediaQuery, } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png';

export default function Topbar() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyles = {
    zIndex: 3,
    color: '#555555',
    border: '1px solid',
    mr: '1vw',
    outline: '#555555',
    '&:hover': { backgroundColor: '#f36523' }
  }

  const boldName = {
    flexGrow: '1',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '1.25rem',
  }

  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      px: isMobile ? '1vw' : '10vw',
      top: 0,
      position: 'sticky',
      zIndex: 10,
    }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', minHeight: '8vh' }}>
        <IconButton size="large" edge="start" color='inherit' aria-label="menu" component={Link} to="/">
          <img src={logo} alt='logo' height={'25vw'} />
        </IconButton>
        <Typography variant="h5" component="div" sx={boldName}>
          TD Therapy Alliance
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" }, }}>
          <Button variant='outlined' component={Link} to="/" sx={linkStyles}>Home</Button>
          <Button variant='outlined' component={Link} to="/About" sx={linkStyles}>About</Button>
          <Button variant='outlined' component={Link} to="/Contact" sx={linkStyles}>Contact</Button>
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
            {/* note to self. menu code is from mui documentation */}
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
              <MenuItem component={Link} onClick={handleClose} to="/" >Home</MenuItem>
              <MenuItem component={Link} onClick={handleClose} to="/About" >About</MenuItem>
              <MenuItem component={Link} onClick={handleClose} to="/Contact" >Contact</MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </Box>
  );
}