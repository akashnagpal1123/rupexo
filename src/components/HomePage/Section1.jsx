import React from 'react';
import { Box, Typography } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const featureData = [
  {
    icon: <FlashOnIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Conversion',
    description: 'Exchange rupees to USDT in no time',
  },
  {
    icon: <GppGoodOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'No Hidden Fees',
    description: 'Enjoy transparent and fair pricing',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Our team is here to help anytime',
  },
];

const Feature = ({ icon, title, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: 220,
      mx: 2,
      my: { xs: 3, md: 0 },
    }}
  >
    <Box
      sx={{
        color: '#E0B64C',
        border: '2px solid #E0B64C',
        borderRadius: '50%',
        p: 2,
        mb: 2,
        display: 'inline-flex',
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" sx={{ color: '#E0B64C', fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: "#fff" }}>
      {description}
    </Typography>
  </Box>
);

const Section1 = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#000' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#E0B64C', fontWeight: 'bold', mb: 6 }}>
        Features
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          flexDirection: { xs: 'column', md: 'row' },
          px: 2,
          
        }}
      >
        {featureData.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </Box>
    </Box>
  );
};

export default Section1; 