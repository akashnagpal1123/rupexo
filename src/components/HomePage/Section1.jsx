import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Section1 = () => {
  return (
    <Box sx={{ py: 8 }}>
    <Container maxWidth="100%">
        <Typography variant="h4" align="center" gutterBottom>
          Section 1
        </Typography>
        <Typography variant="body1" align="center">
          This is the content for the first section. You can add more details,
          images, or any other components here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Section1; 