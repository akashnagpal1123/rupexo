import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

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
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: '#FFD700',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
          }}
        >
          Rupexo
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header; 