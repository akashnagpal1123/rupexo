import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';

const stepsData = [
  {
    number: '01',
    title: 'Get Your Best Rate',
    description: 'Connect with us to check our unbeatable USDT rate — always better than market averages.',
    icon: <CurrencyExchangeIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    duration: 'Real-time',
  },
  {
    number: '02',
    title: 'Connect With Us',
    description: 'Reach out to us via WhatsApp or chat to begin your transaction.',
    icon: <PersonAddIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
    duration: '1 min',
  },
  {
    number: '03',
    title: 'Make Payment',
    description: 'Transfer the INR amount to our verified bank account securely.',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)',
    duration: '2–3 min',
  },
  {
    number: '04',
    title: 'Submit KYC',
    description: 'Provide your KYC details to ensure a secure and compliant transaction.',
    icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF4500 100%)',
    duration: '1 min',
  },
  {
    number: '05',
    title: 'Receive USDT',
    description: 'We’ll instantly send the USDT to your account after payment and verification.',
    icon: <CurrencyExchangeIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF6347 100%)',
    duration: 'Instant',
  },
  {
    number: '06',
    title: 'Come Back Soon!',
    description: 'Thank you for choosing us. We look forward to serving you again.',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF7F50 100%)',
    duration: 'See you!',
  },
];

const HowItWorksStep = ({ number, title, description, icon, gradient, duration }) => (
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
        '& .step-number': {
          transform: 'scale(1.1)',
          boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
        },
        '& .step-icon': {
          transform: 'scale(1.1) rotate(5deg)',
        },
      },
    }}
  >
    {/* Step Number */}
    <Box
      className="step-number"
      sx={{
        background: gradient,
        borderRadius: '50%',
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
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
      <Typography
        variant="h4"
        sx={{
          color: '#000',
          fontWeight: 800,
          fontSize: { xs: '1.5rem', sm: '1.8rem' },
        }}
      >
        {number}
      </Typography>
    </Box>

    {/* Icon */}
    <Box
      className="step-icon"
      sx={{
        color: '#FFD700',
        mb: 2,
        transition: 'all 0.4s ease',
        filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
      }}
    >
      {icon}
    </Box>

    {/* Content */}
    <Typography
      variant="h5"
      sx={{
        color: '#FFD700',
        fontWeight: 700,
        mb: 2,
        fontSize: { xs: '1.2rem', sm: '1.4rem' },
        textShadow: '0 0 10px rgba(255, 215, 0, 0.3)',
      }}
    >
      {title}
    </Typography>
    
    <Typography
      variant="body1"
      sx={{
        color: '#FFF',
        opacity: 0.9,
        mb: 2,
        lineHeight: 1.6,
        fontSize: { xs: '0.9rem', sm: '1rem' },
      }}
    >
      {description}
    </Typography>

    {/* Duration Badge */}
    <Box
      sx={{
        background: gradient,
        borderRadius: 2,
        px: 2,
        py: 0.5,
        mt: 'auto',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#000',
          fontWeight: 600,
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
        }}
      >
        {duration}
      </Typography>
    </Box>
  </Box>
);

const Section2 = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 50%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
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
            How It Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#FFF',
              opacity: 0.8,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Get started in minutes with our simple 4-step process. 
            From account creation to receiving USDT, we've made it effortless.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {stepsData.map((step, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <HowItWorksStep {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section2; 