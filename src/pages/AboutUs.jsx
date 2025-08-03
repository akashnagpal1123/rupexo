import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#111' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          About Rupexo
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#fff' }}>
          Welcome to Rupexo, your trusted partner in the world of digital currency exchange. We are dedicated to providing a secure, reliable, and user-friendly platform for all your crypto needs.
        </Typography>
        <Typography variant="body1" align="justify" paragraph sx={{ color: '#ccc' }}>
          Founded in 2020, Rupexo was born out of a passion for blockchain technology and a desire to make digital currencies accessible to everyone. Our team of experienced professionals from the finance and technology sectors works tirelessly to ensure that our platform is not only powerful but also intuitive and easy to use.
        </Typography>
        <Typography variant="body1" align="justify" paragraph sx={{ color: '#ccc' }}>
          Our mission is to empower individuals and businesses by providing them with the tools and knowledge to navigate the digital currency landscape with confidence. We believe in the transformative power of cryptocurrencies and are excited to be at the forefront of this financial revolution.
        </Typography>
        <Typography variant="body1" align="justify" paragraph sx={{ color: '#ccc' }}>
          At Rupexo, we are committed to security, transparency, and customer satisfaction. We adhere to the highest security standards to protect your assets and data. Our transparent fee structure and dedicated customer support team are here to ensure you have a seamless experience.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ color: '#FFD700', fontWeight: 'bold', mt: 6 }}>
          Our Values
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4, flexWrap: 'wrap' }}>
          <Box sx={{ textAlign: 'center', p: 2, maxWidth: 200 }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>Security</Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Protecting your assets is our top priority.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 2, maxWidth: 200 }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>Integrity</Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              We operate with transparency and honesty.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', p: 2, maxWidth: 200 }}>
            <Typography variant="h6" sx={{ color: '#FFD700' }}>Innovation</Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Continuously improving and adapting to the market.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs; 