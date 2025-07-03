import React from 'react';
import { Box, Typography } from '@mui/material';

const stepsData = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create an account in minutes',
  },
  {
    number: '2',
    title: 'Link Account',
    description: 'Connect your bank to our platform',
  },
  {
    number: '3',
    title: 'Convert ₹ to USDT',
    description: 'Easily exchange and receive USDT',
  },
];

const HowItWorksStep = ({ number, title, description }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      textAlign: 'left',
      maxWidth: 280,
      mx: 2,
      my: { xs: 3, md: 0 },
    }}
  >
    <Typography variant="h2" component="div" sx={{ color: '#E0B64C', fontWeight: 'bold', mr: 2 }}>
      {number}
    </Typography>
    <Box>
      <Typography variant="h6" sx={{ color: '#E0B64C', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#fff" }}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const Section2 = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#000' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#E0B64C', fontWeight: 'bold', mb: 6 }}>
        How It Works
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: { xs: 'column', md: 'row' },
          px: 2,
        }}
      >
        {stepsData.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </Box>
    </Box>
  );
};

export default Section2; 