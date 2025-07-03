import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';

// A component for the animated background halves
const BackgroundImageHalf = ({ x, y, clipPath }) => (
  <motion.div
    style={{
      x, // This will be animated based on scroll
      y, // This will be animated based on scroll
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/bg_img.jpg)',
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


  return (
    <Box ref={targetRef} sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Layers - now with diagonal clip paths */}


            {/* Background Layers */}
      <BackgroundImageHalf x={xLeft} clipPath="polygon(0 0, 50% 0, 50% 100%, 0 100%)" />
      <BackgroundImageHalf x={xRight} clipPath="polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" />


      {/* Overlay to darken the image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Content Layer */}
      <motion.div
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
          color: '#E0B64C',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            lineHeight: 1.2,
            mb: 4,
          }}
        >
          Exchange ₹ to USDT
          <br />
          Instantly
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E0B64C',
            color: 'black',
            fontWeight: 'bold',
            padding: '10px 30px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#C9A444',
            },
          }}
        >
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero; 