import React from 'react';
import { Box, Typography } from '@mui/material';

const Section2 = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Section 2
      </Typography>
      <Typography variant="body1">
        This is the content for the second section. This section can have a
        different background color to distinguish it from the first one.
      </Typography>
    </Box>
  );
};

export default Section2; 