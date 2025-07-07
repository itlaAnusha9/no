


import React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import heroImage from './assets/hero.webp';

function HeroSection() {
   useEffect(() => {
      document.title = "Home|NOVYA - Your Smart Learning Platform";
    }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '40px', // Gap around the image (adjust as needed)
        boxSizing: 'border-box', // Ensures padding is included in dimensions
      }}
    >
      {/* Centered image with max-width/max-height constraints */}
      <Box
        component="img"
        src={heroImage}
        alt="Background"
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain', // Ensures full image is visible (no cropping)
          display: 'block', // Removes extra space below image
        }}
      />
    </Box>
  );
}

export default HeroSection;