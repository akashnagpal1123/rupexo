import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Section2 = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="100%">
        <Typography variant="h4" align="center" gutterBottom>
          Section 2
        </Typography>
        <Typography variant="body1" align="center">
          This is the content for the second section. This section can have a
          different background color to distinguish it from the first one.
        </Typography>
      </Container>
    </Box>
  );
};

export default Section2; 