import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rupexo
        </Typography>
        <Button color="inherit">Contact Us</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 