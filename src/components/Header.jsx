import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#222222',
        boxShadow: '0 2px 8px rgba(255, 215, 0, 0.2)'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1,
            color: '#FFD700',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            textDecoration: 'none'
          }}
        >
          Rupexo
        </Typography>
        <Button 
          component={Link}
          to="/about"
          sx={{ 
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
          }}
        >
          About Us
        </Button>
        <Button 
          component={Link}
          to="/careers"
          sx={{ 
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
          }}
        >
          Careers
        </Button>
        <Button 
          component={Link}
          to="/news"
          sx={{ 
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
          }}
        >
          News
        </Button>
        <Button 
          sx={{ 
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
          }}
        >
          Contact Us
        </Button>
        <Button 
          component="a"
          href="/docs/Rupexo (KYC Form).pdf"
          download
          sx={{ 
            color: '#FFD700',
            '&:hover': {
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#FFF'
            }
          }}
        >
          Download KYC Form
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 