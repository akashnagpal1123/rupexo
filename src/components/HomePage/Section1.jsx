import React from 'react';
import { Box, Typography } from '@mui/material';

const Section1 = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Section 1
      </Typography>
      <Typography variant="body1">
        This is the content for the first section. You can add more details,
        images, or any other components here.
      </Typography>
    </Box>
  );
};

export default Section1; 