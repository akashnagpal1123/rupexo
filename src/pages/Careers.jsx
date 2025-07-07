import React from 'react';
import { Box, Typography, Container, Button, Paper } from '@mui/material';

const jobOpenings = [
  {
    title: 'Senior Blockchain Developer',
    location: 'Remote',
    description: 'We are looking for an experienced Blockchain Developer to join our team. You will be responsible for designing, implementing, and supporting our blockchain-based products.'
  },
  {
    title: 'Frontend Developer (React)',
    location: 'New York, NY',
    description: 'We are seeking a skilled Frontend Developer with expertise in React to build and maintain our user-facing applications. You will work closely with our design and product teams.'
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    description: 'Join our team as a DevOps Engineer to manage and improve our CI/CD pipelines, cloud infrastructure, and deployment processes. Experience with AWS and Kubernetes is a plus.'
  }
];

const Careers = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#111' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          Careers at Rupexo
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#fff' }}>
          Join our mission to build the future of finance. We are a team of passionate innovators and builders. Explore our open positions below and become a part of the Rupexo family.
        </Typography>

        <Box sx={{ mt: 6 }}>
          {jobOpenings.map((job, index) => (
            <Paper key={index} sx={{ p: 4, mb: 4, backgroundColor: '#222', color: '#fff', border: '1px solid #FFD700' }}>
              <Typography variant="h4" component="h3" sx={{ color: '#FFD700' }}>
                {job.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#ccc', mb: 2 }}>
                {job.location}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {job.description}
              </Typography>
              <Button variant="contained" sx={{ 
                backgroundColor: '#FFD700', 
                color: '#000',
                '&:hover': {
                  backgroundColor: '#E6C300'
                }
              }}>
                Apply Now
              </Button>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Careers; 