
// import React from 'react';
// import {
//   Box,
//   Button,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';

// function HeroSection() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         minHeight: '100vh',
//         width: '100%',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         px: 2,
//         py: { xs: 6, sm: 8 },
//         fontFamily: `'Poppins', 'Inter', sans-serif`,
//         zIndex: 1,
//         '::after': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background:
//             'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
//           zIndex: -1,
//         },
//       }}
//     >
//       {/* ✅ Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: -2,
//           opacity: 0.7,
//         }}
//       >
//         <source src="/videos/MicrosoftTeams-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{
//           textAlign: 'center',
//           zIndex: 2,
//           padding: isMobile ? '1rem' : '2rem',
//           maxWidth: '1000px',
//         }}
//       >
//         <Typography
//           variant={isMobile ? 'h4' : 'h2'}
//           sx={{
//             fontWeight: 700,
//             color: '#fff',
//             lineHeight: 1.3,
//             mb: 2,
//             textShadow: '0 2px 10px rgba(0,0,0,0.25)',
//           }}
//         >
//           Personalized AI Learning for Every{' '}
//           <span style={{ color: '#80d8ff', textShadow: '0 0 12px #80d8ff' }}>
//             Student
//           </span>
//         </Typography>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             color: '#e0f7fa',
//             fontSize: isMobile ? '0.95rem' : '1.1rem',
//             fontWeight: 400,
//             maxWidth: '700px',
//             margin: '0 auto',
//             mb: 3,
//             textShadow: '0 1px 3px rgba(0,0,0,0.3)',
//           }}
//         >
//           {/* Optional Subtitle Text */}
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             color: '#ffffffcc',
//             minHeight: '50px',
//             fontSize: isMobile ? '1rem' : '1.1rem',
//             mb: 4,
//             fontWeight: 500,
//           }}
//         >
//           <Typewriter
//             options={{
//               strings: [
//                 'No live classes, no waiting...',
//                 'Study anywhere, anytime...',
//                 'Learn smarter with AI...',
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 50,
//               deleteSpeed: 30,
//               pauseFor: 2000,
//             }}
//           />
//         </Typography>

//         <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: '#ff4081',
//                 color: '#fff',
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: '30px',
//                 fontWeight: '700',
//                 boxShadow: '0 8px 20px rgba(255, 64, 129, 0.3)',
//                 '&:hover': {
//                   backgroundColor: '#e73370',
//                 },
//               }}
//               onClick={() => navigate('/register')}
//             >
//               Start Learning Now
//             </Button>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               variant="outlined"
//               size="large"
//               sx={{
//                 color: '#80d8ff',
//                 borderColor: '#80d8ff',
//                 px: 4,
//                 py: 1.5,
//                 borderRadius: '30px',
//                 fontWeight: '700',
//                 '&:hover': {
//                   backgroundColor: 'rgba(128, 216, 255, 0.1)',
//                   color: '#fff',
//                   borderColor: '#fff',
//                 },
//               }}
//               onClick={() => navigate('/demo')}
//             >
//               Try AI Demo
//             </Button>
//           </motion.div>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// }

// export default HeroSection;


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