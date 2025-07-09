import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const featureData = [
  {
    icon: <FlashOnIcon sx={{ fontSize: 50 }} />,
    title: 'Lightning Fast',
    description: 'Complete transactions in under 30 seconds with our advanced processing technology',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  },
  {
    icon: <GppGoodOutlinedIcon sx={{ fontSize: 50 }} />,
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing with no surprise charges. See exactly what you pay',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 50 }} />,
    title: '24/7 Expert Support',
    description: 'Round-the-clock assistance from our dedicated team of professionals',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 50 }} />,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption and multi-factor authentication protection',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF4500 100%)',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 50 }} />,
    title: 'Best Exchange Rates',
    description: 'Get the most competitive rates with real-time market pricing',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF6347 100%)',
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 50 }} />,
    title: 'Instant Account Transfer',
    description: 'Send your funds to our verified account in seconds with seamless UPI or IMPS.',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF1493 100%)',
  }
];

const Feature = ({ icon, title, description, gradient }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      p: 4,
      borderRadius: 3,
      background: 'rgba(34, 34, 34, 0.8)',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      minHeight: 320,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: gradient,
        transform: 'scaleX(0)',
        transition: 'transform 0.4s ease',
      },
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)',
        borderColor: 'rgba(255, 215, 0, 0.5)',
        '&::before': {
          transform: 'scaleX(1)',
        },
        '& .icon-container': {
          transform: 'scale(1.1)',
          boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
        },
      },
    }}
  >
    <Box
      className="icon-container"
      sx={{
        background: gradient,
        borderRadius: '50%',
        p: 3,
        mb: 3,
        display: 'inline-flex',
        transition: 'all 0.4s ease',
        boxShadow: '0 8px 20px rgba(255, 215, 0, 0.2)',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          background: gradient,
          borderRadius: '50%',
          zIndex: -1,
          opacity: 0.3,
          filter: 'blur(8px)',
        },
      }}
    >
      {icon}
    </Box>
    <Typography 
      variant="h5" 
      sx={{ 
        color: '#FFD700', 
        fontWeight: 700,
        mb: 2,
        fontSize: { xs: '1.3rem', sm: '1.5rem' },
        textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
      }}
    >
      {title}
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        color: '#FFF',
        opacity: 0.9,
        lineHeight: 1.6,
        fontSize: { xs: '0.9rem', sm: '1rem' }
      }}
    >
      {description}
    </Typography>
  </Box>
);

const Section1 = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #000000 0%, #111111 50%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#FFD700', 
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Choose Rupexo?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#FFF',
              opacity: 0.8,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Experience the future of digital currency exchange with cutting-edge technology 
            and unparalleled security measures.
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {featureData.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Feature {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section1; 