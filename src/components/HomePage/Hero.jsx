import React, { useRef } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

// Using motion like this to avoid 'motion' is defined but never used lint error.
const MotionDiv = motion.div;

// A component for the animated background halves
const BackgroundImageHalf = ({ x, y, clipPath }) => (
  <MotionDiv
    style={{
      x,
      y,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/bg_img2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      clipPath,
    }}
  />
);

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // As we scroll, move the halves diagonally
  const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const yLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yRight = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%']);

  const stats = [
    { icon: <TrendingUpIcon />, value: '₹50M+', label: 'Traded Volume' },
    { icon: <SecurityIcon />, value: '10K+', label: 'Happy Users' },
    { icon: <SpeedIcon />, value: '<30s', label: 'Transaction Time' },
  ];

  return (
    <Box ref={targetRef} sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Layers */}
      <BackgroundImageHalf x={xLeft} y={yLeft} clipPath="polygon(0 0, 50% 0, 50% 100%, 0 100%)" />
      <BackgroundImageHalf x={xRight} y={yRight} clipPath="polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" />

      {/* Enhanced Overlay with gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0, 0, 0, 0.3) 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)',
          }
        }}
      />

      {/* Content Layer */}
      <MotionDiv
        style={{
          opacity: contentOpacity,
          y: contentY,
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFD700',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              background: 'rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(255, 255, 255, 0.18)',
              p: { xs: 3, md: 5 },
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              {/* Main Content */}
              <Grid item xs={12} md={7}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  {/* Badge */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 3,
                      py: 1,
                      mb: 3,
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#FFD700',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { opacity: 1 },
                          '50%': { opacity: 0.5 },
                          '100%': { opacity: 1 },
                        },
                      }}
                    />
                    <Typography variant="body2" sx={{ color: '#FFD700', fontWeight: 600 }}>
                      #1 Trusted Exchange Platform
                    </Typography>
                  </Box>

                  {/* Main Heading */}
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                      lineHeight: 1.1,
                      mb: 3,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Exchange ₹ to USDT
                    <br />
                    <span style={{ color: '#FFD700' }}>Instantly</span>
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#FFF',
                      opacity: 0.9,
                      mb: 4,
                      lineHeight: 1.4,
                      fontSize: { xs: '1.1rem', sm: '1.3rem' },
                      maxWidth: 600,
                    }}
                  >
                    Experience lightning-fast cryptocurrency exchange with bank-grade security. 
                    Convert your rupees to USDT in under 30 seconds.
                  </Typography>

                  {/* CTA Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        fontWeight: 700,
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 35px rgba(255, 215, 0, 0.4)',
                          background: 'linear-gradient(135deg, #FFA500 0%, #FFD700 100%)',
                        },
                      }}
                    >
                      Get Started Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        border: '2px solid #FFD700',
                        color: '#FFD700',
                        fontWeight: 600,
                        padding: '13px 25px',
                        fontSize: '1rem',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 215, 0, 0.1)',
                          borderColor: '#FFA500',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Stats Section */}
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    alignItems: { xs: 'center', md: 'flex-end' },
                  }}
                >
                  {stats.map((stat, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 215, 0, 0.1)',
                          borderRadius: 3,
                          minWidth: 200,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(-5px) scale(1.02)',
                            borderColor: 'rgba(255, 215, 0, 0.4)',
                            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.1)',
                            background: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: '#FFD700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h4"
                            sx={{
                              color: '#FFD700',
                              fontWeight: 700,
                              fontSize: { xs: '1.5rem', sm: '1.8rem' },
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#FFF',
                              opacity: 0.8,
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Box>
                    </MotionDiv>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </MotionDiv>
    </Box>
  );
};

export default Hero; 