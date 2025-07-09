import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../utils/whatsapp';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const buttonStyles = {
    color: '#FFD700',
    '&:hover': {
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
      color: '#FFF'
    }
  };

  const menuItems = [
    <MenuItem key="about" onClick={handleMenuClose} component={Link} to="/about">About Us</MenuItem>,
    <MenuItem key="contact" onClick={handleMenuClose}>Contact Us</MenuItem>,
    <MenuItem key="download" onClick={handleMenuClose} component="a" href="/docs/Rupexo (KYC Form).pdf" download>Download KYC Form</MenuItem>
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#222222',
        boxShadow: '0 2px 8px rgba(255, 215, 0, 0.2)'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="/images/rupexo_logo_final.png" alt="Rupexo Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            Rupexo
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ color: '#FFD700' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
          sx={{ 
                '& .MuiPaper-root': {
                  backgroundColor: '#333',
            color: '#FFD700',
                },
                '& .MuiMenuItem-root': {
                  ...buttonStyles,
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
                }
          }}
        >
              {menuItems}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
        <Button 
          component={Link}
              to="/about"
              sx={buttonStyles}
        >
              About Us
            </Button>
            <Button 
              sx={buttonStyles}
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy USDT
            </Button>
        <Button 
          component="a"
          href="/docs/Rupexo (KYC Form).pdf"
          download
              sx={buttonStyles}
        >
          Download KYC Form
        </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 