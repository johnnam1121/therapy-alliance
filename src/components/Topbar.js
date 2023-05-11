import { useMediaQuery, Box, Button, CssBaseline, IconButton, Menu, Paper, Grid, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      pl: '10vw',
      pr: '9vw',
      top: 0,
      position: 'sticky',
      zIndex: 10,
    }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', minHeight: '8vh' }}>
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
        <Box sx={{ display: { xs: "none", sm: "block" }, }}>
          <Button component={Link} to="/Home" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>Home</Button>
          <Button component={Link} to="/About" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>About</Button>
          <Button component={Link} to="/Projects" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>About</Button>
          <Button component={Link} to="/Experience" sx={{ zIndex: 3, color: '#000000', '&:hover': { backgroundColor: '#f36523' } }}>About</Button>
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
      </Box>
    </Box>
  );
}