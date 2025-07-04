// // import React, { useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { motion, useAnimation } from 'framer-motion';
// // import { FaGooglePlay, FaApple, FaRocket, FaMobileAlt, FaSyncAlt, FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
// // import { RiFlutterFill } from 'react-icons/ri';
// // import { SiPwa } from 'react-icons/si';

// // function AppDownload() {
// //   const controls = useAnimation();

// //   useEffect(() => {
// //     const sequence = async () => {
// //       while (true) {
// //         await controls.start({
// //           rotate: [0, 5, -5, 0],
// //           y: [0, -10, 0],
// //           transition: { duration: 6, ease: "easeInOut" }
// //         });
// //       }
// //     };
// //     sequence();
// //   }, [controls]);

// //   return (
// //     <section 
// //       style={{ 
// //         background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%)',
// //         color: '#1a3e72',
// //         overflow: 'hidden',
// //         position: 'relative',
// //         padding: '5rem 0'
// //       }} 
// //       className="text-center"
// //     >
// //       {/* Floating animated elements */}
// //       {[...Array(8)].map((_, i) => (
// //         <motion.div
// //           key={i}
// //           animate={{
// //             y: [0, -20, 0],
// //             x: [0, Math.random() * 40 - 20, 0],
// //             opacity: [0.6, 1, 0.6],
// //             rotate: [0, Math.random() * 20 - 10, 0]
// //           }}
// //           transition={{
// //             duration: 8 + Math.random() * 10,
// //             repeat: Infinity,
// //             ease: "easeInOut"
// //           }}
// //           style={{
// //             position: 'absolute',
// //             width: `${Math.random() * 60 + 40}px`,
// //             height: `${Math.random() * 60 + 40}px`,
// //             background: 'rgba(26, 62, 114, 0.05)',
// //             borderRadius: '50%',
// //             zIndex: 0,
// //             top: `${Math.random() * 80 + 10}%`,
// //             left: `${Math.random() * 80 + 10}%`,
// //             border: '1px solid rgba(26, 62, 114, 0.1)'
// //           }}
// //         />
// //       ))}

// //       <div className="container position-relative" style={{ zIndex: 1 }}>
// //         {/* Animated title */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="fw-bold mb-4" style={{ 
// //             color: '#1a3e72',
// //             fontSize: '3rem',
// //             textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
// //             position: 'relative',
// //             display: 'inline-block'
// //           }}>
// //             <span style={{
// //               position: 'absolute',
// //               top: '-10px',
// //               right: '-20px',
// //               fontSize: '1.5rem',
// //               color: '#ffd700'
// //             }}>
// //               <FaStar />
// //             </span>
// //             Transform Your Learning
// //             <span style={{
// //               position: 'absolute',
// //               bottom: '-10px',
// //               left: '-20px',
// //               fontSize: '1.5rem',
// //               color: '#ffd700'
// //             }}>
// //               <FaStar />
// //             </span>
// //           </h2>
          
// //           <motion.p 
// //             className="mb-4 lead fw-medium"
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             Our cutting-edge app is <span className="fw-bold" style={{ color: '#1a6bff' }}>coming soon</span> to revolutionize your education!
// //           </motion.p>
// //         </motion.div>

// //         {/* Feature badges with animations */}
// //         <motion.div
// //           className="d-flex justify-content-center flex-wrap gap-3 mb-5"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           viewport={{ once: true }}
// //         >
// //           {[
// //             { icon: <FaRocket />, text: 'Lightning Fast' },
// //             { icon: <RiFlutterFill />, text: 'Flutter Powered' },
// //             { icon: <SiPwa />, text: 'PWA Ready' },
// //             { icon: <FaMobileAlt />, text: 'Mobile First' },
// //             { icon: <FaSyncAlt />, text: 'Cloud Sync' },
// //             { icon: <FaCloudDownloadAlt />, text: 'Offline Mode' }
// //           ].map((item, index) => (
// //             <motion.span
// //               key={index}
// //               className="badge px-3 py-2 rounded-pill"
// //               style={{
// //                 background: 'rgba(255,255,255,0.7)',
// //                 backdropFilter: 'blur(10px)',
// //                 color: '#1a3e72',
// //                 border: '1px solid rgba(26, 62, 114, 0.1)',
// //                 fontSize: '0.9rem'
// //               }}
// //               whileHover={{ 
// //                 y: -3,
// //                 background: 'rgba(26, 62, 114, 0.1)'
// //               }}
// //               transition={{ type: 'spring', stiffness: 300 }}
// //             >
// //               <span className="me-2" style={{ color: '#1a6bff' }}>{item.icon}</span>
// //               {item.text}
// //             </motion.span>
// //           ))}
// //         </motion.div>

// //         {/* App download buttons */}
// //         <motion.div 
// //           className="d-flex justify-content-center flex-wrap gap-4 mb-5"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.div
// //             whileHover={{ y: -5 }}
// //             whileTap={{ scale: 0.98 }}
// //             animate={controls}
// //             style={{
// //               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
// //               borderRadius: '16px',
// //               padding: '1.5rem 2rem',
// //               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// //               border: '1px solid rgba(255,255,255,0.5)',
// //               width: '280px',
// //               position: 'relative',
// //               overflow: 'hidden'
// //             }}
// //           >
// //             <div 
// //               style={{
// //                 position: 'absolute',
// //                 top: '-50px',
// //                 right: '-50px',
// //                 width: '100px',
// //                 height: '100px',
// //                 borderRadius: '50%',
// //                 background: 'rgba(26, 107, 255, 0.1)',
// //                 zIndex: 0
// //               }}
// //             ></div>
// //             <div className="position-relative" style={{ zIndex: 1 }}>
// //               <div className="d-flex align-items-center gap-3">
// //                 <FaGooglePlay style={{ fontSize: '2.5rem', color: '#1a3e72' }} />
// //                 <div className="text-start">
// //                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>GET IT ON</div>
// //                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>Google Play</div>
// //                 </div>
// //               </div>
// //               <div 
// //                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
// //                 style={{ 
// //                   background: 'linear-gradient(90deg, #1a6bff, #1a3e72)',
// //                   color: 'white',
// //                   fontSize: '0.6rem'
// //                 }}
// //               >
// //                 Coming Soon
// //               </div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             whileHover={{ y: -5 }}
// //             whileTap={{ scale: 0.98 }}
// //             animate={controls}
// //             style={{
// //               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
// //               borderRadius: '16px',
// //               padding: '1.5rem 2rem',
// //               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
// //               border: '1px solid rgba(255,255,255,0.5)',
// //               width: '280px',
// //               position: 'relative',
// //               overflow: 'hidden'
// //             }}
// //           >
// //             <div 
// //               style={{
// //                 position: 'absolute',
// //                 top: '-50px',
// //                 right: '-50px',
// //                 width: '100px',
// //                 height: '100px',
// //                 borderRadius: '50%',
// //                 background: 'rgba(26, 107, 255, 0.1)',
// //                 zIndex: 0
// //               }}
// //             ></div>
// //             <div className="position-relative" style={{ zIndex: 1 }}>
// //               <div className="d-flex align-items-center gap-3">
// //                 <FaApple style={{ fontSize: '2.5rem', color: '#1a3e72' }} />
// //                 <div className="text-start">
// //                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download on the</div>
// //                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>App Store</div>
// //                 </div>
// //               </div>
// //               <div 
// //                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
// //                 style={{ 
// //                   background: 'linear-gradient(90deg, #1a6bff, #1a3e72)',
// //                   color: 'white',
// //                   fontSize: '0.6rem'
// //                 }}
// //               >
// //                 Coming Soon
// //               </div>
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* App mockup with floating animation */}
// //         <motion.div
// //           className="mt-5"
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.8 }}
// //           viewport={{ once: true }}
// //           animate={{
// //             y: [0, -15, 0],
// //             transition: {
// //               duration: 6,
// //               repeat: Infinity,
// //               ease: "easeInOut"
// //             }
// //           }}
// //         >
// //           <img 
// //             src="https://cdn.dribbble.com/users/1787323/screenshots/14139196/media/0cbc6d3e94b538d5c4b9f9e8c4d4b5a5.png" 
// //             alt="App preview" 
// //             style={{ 
// //               maxWidth: '100%', 
// //               height: 'auto',
// //               borderRadius: '24px',
// //               boxShadow: '0 30px 60px rgba(26, 62, 114, 0.2)',
// //               border: '1px solid rgba(255,255,255,0.3)'
// //             }}
// //           />
// //         </motion.div>

// //         {/* Countdown timer */}
// //         <motion.div
// //           className="mt-5"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ delay: 1 }}
// //           viewport={{ once: true }}
// //         >
// //           <div className="d-inline-block px-4 py-3 rounded-pill" style={{
// //             background: 'rgba(255,255,255,0.7)',
// //             backdropFilter: 'blur(10px)',
// //             border: '1px solid rgba(26, 62, 114, 0.1)'
// //           }}>
// //             <span className="fw-bold me-2" style={{ color: '#1a6bff' }}>Launching in:</span>
// //             <span className="fw-bold">14 days 06:45:32</span>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default AppDownload;




// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion, useAnimation } from 'framer-motion';
// import { FaGooglePlay, FaApple, FaRocket, FaMobileAlt, FaSyncAlt, FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
// import { RiFlutterFill } from 'react-icons/ri';
// import { SiPwa } from 'react-icons/si';

// function AppDownload() {
//   const controls = useAnimation();

//   useEffect(() => {
//     const sequence = async () => {
//       while (true) {
//         await controls.start({
//           rotate: [0, 5, -5, 0],
//           y: [0, -10, 0],
//           transition: { duration: 6, ease: "easeInOut" }
//         });
//       }
//     };
//     sequence();
//   }, [controls]);

//   return (
//     <section 
//       style={{ 
//         background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%)',
//         color: '#1a3e72',
//         overflow: 'hidden',
//         position: 'relative',
//         padding: '5rem 0'
//       }} 
//       className="text-center"
//     >
//       {/* Floating animated elements */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, Math.random() * 40 - 20, 0],
//             opacity: [0.6, 1, 0.6],
//             rotate: [0, Math.random() * 20 - 10, 0]
//           }}
//           transition={{
//             duration: 8 + Math.random() * 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             width: `${Math.random() * 60 + 40}px`,
//             height: `${Math.random() * 60 + 40}px`,
//             background: 'rgba(26, 62, 114, 0.05)',
//             borderRadius: '50%',
//             zIndex: 0,
//             top: `${Math.random() * 80 + 10}%`,
//             left: `${Math.random() * 80 + 10}%`,
//             border: '1px solid rgba(26, 62, 114, 0.1)'
//           }}
//         />
//       ))}

//       <div className="container position-relative" style={{ zIndex: 1 }}>
//         {/* Animated title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="fw-bold mb-4" style={{ 
//             color: '#1a3e72',
//             fontSize: '3rem',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
//             position: 'relative',
//             display: 'inline-block'
//           }}>
//             <span style={{
//               position: 'absolute',
//               top: '-10px',
//               right: '-20px',
//               fontSize: '1.5rem',
//               color: '#ffd700'
//             }}>
//               <FaStar />
//             </span>
//             Transform Your Learning
//             <span style={{
//               position: 'absolute',
//               bottom: '-10px',
//               left: '-20px',
//               fontSize: '1.5rem',
//               color: '#ffd700'
//             }}>
//               <FaStar />
//             </span>
//           </h2>
          
//           <motion.p 
//             className="mb-4 lead fw-medium"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Our cutting-edge app is <span className="fw-bold" style={{ color: '#1a6bff' }}>coming soon</span> to revolutionize your education!
//           </motion.p>
//         </motion.div>

//         {/* Feature badges with animations */}
//         <motion.div
//           className="d-flex justify-content-center flex-wrap gap-3 mb-5"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           {[
//             { icon: <FaRocket />, text: 'Lightning Fast' },
//             { icon: <RiFlutterFill />, text: 'Flutter Powered' },
//             { icon: <SiPwa />, text: 'PWA Ready' },
//             { icon: <FaMobileAlt />, text: 'Mobile First' },
//             { icon: <FaSyncAlt />, text: 'Cloud Sync' },
//             { icon: <FaCloudDownloadAlt />, text: 'Offline Mode' }
//           ].map((item, index) => (
//             <motion.span
//               key={index}
//               className="badge px-3 py-2 rounded-pill"
//               style={{
//                 background: 'rgba(255,255,255,0.7)',
//                 backdropFilter: 'blur(10px)',
//                 color: '#1a3e72',
//                 border: '1px solid rgba(26, 62, 114, 0.1)',
//                 fontSize: '0.9rem'
//               }}
//               whileHover={{ 
//                 y: -3,
//                 background: 'rgba(26, 62, 114, 0.1)'
//               }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <span className="me-2" style={{ color: '#1a6bff' }}>{item.icon}</span>
//               {item.text}
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* App download buttons with authentic colors */}
//         <motion.div 
//           className="d-flex justify-content-center flex-wrap gap-4 mb-5"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {/* Google Play Button - Using authentic green color */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.98 }}
//             animate={controls}
//             style={{
//               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
//               borderRadius: '16px',
//               padding: '1.5rem 2rem',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//               border: '1px solid rgba(255,255,255,0.5)',
//               width: '280px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//           >
//             <div 
//               style={{
//                 position: 'absolute',
//                 top: '-50px',
//                 right: '-50px',
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 background: 'rgba(0, 172, 69, 0.1)', // Google Play green tint
//                 zIndex: 0
//               }}
//             ></div>
//             <div className="position-relative" style={{ zIndex: 1 }}>
//               <div className="d-flex align-items-center gap-3">
//                 <FaGooglePlay style={{ fontSize: '2.5rem', color: '#00AC45' }} /> {/* Authentic Google Play green */}
//                 <div className="text-start">
//                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>GET IT ON</div>
//                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>Google Play</div>
//                 </div>
//               </div>
//               <div 
//                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
//                 style={{ 
//                   background: 'linear-gradient(90deg, #00AC45, #1a3e72)',
//                   color: 'white',
//                   fontSize: '0.6rem'
//                 }}
//               >
//                 Coming Soon
//               </div>
//             </div>
//           </motion.div>

//           {/* App Store Button - Using authentic black color */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.98 }}
//             animate={controls}
//             style={{
//               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
//               borderRadius: '16px',
//               padding: '1.5rem 2rem',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//               border: '1px solid rgba(255,255,255,0.5)',
//               width: '280px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//           >
//             <div 
//               style={{
//                 position: 'absolute',
//                 top: '-50px',
//                 right: '-50px',
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 background: 'rgba(0, 0, 0, 0.1)', // App Store black tint
//                 zIndex: 0
//               }}
//             ></div>
//             <div className="position-relative" style={{ zIndex: 1 }}>
//               <div className="d-flex align-items-center gap-3">
//                 <FaApple style={{ fontSize: '2.5rem', color: '#000000' }} /> {/* Authentic App Store black */}
//                 <div className="text-start">
//                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download on the</div>
//                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>App Store</div>
//                 </div>
//               </div>
//               <div 
//                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
//                 style={{ 
//                   background: 'linear-gradient(90deg, #000000, #1a3e72)',
//                   color: 'white',
//                   fontSize: '0.6rem'
//                 }}
//               >
//                 Coming Soon
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* App mockup with floating animation */}
//         <motion.div
//           className="mt-5"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           viewport={{ once: true }}
//           animate={{
//             y: [0, -15, 0],
//             transition: {
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }
//           }}
//         >
//           <img 
//             src="https://cdn.dribbble.com/users/1787323/screenshots/14139196/media/0cbc6d3e94b538d5c4b9f9e8c4d4b5a5.png" 
//             alt="App preview" 
//             style={{ 
//               maxWidth: '100%', 
//               height: 'auto',
//               borderRadius: '24px',
//               boxShadow: '0 30px 60px rgba(26, 62, 114, 0.2)',
//               border: '1px solid rgba(255,255,255,0.3)'
//             }}
//           />
//         </motion.div>

//         {/* Countdown timer */}
//         <motion.div
//           className="mt-5"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           viewport={{ once: true }}
//         >
//           <div className="d-inline-block px-4 py-3 rounded-pill" style={{
//             background: 'rgba(255,255,255,0.7)',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(26, 62, 114, 0.1)'
//           }}>
//             <span className="fw-bold me-2" style={{ color: '#1a6bff' }}>Launching in:</span>
//             <span className="fw-bold">14 days 06:45:32</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default AppDownload;


// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion, useAnimation } from 'framer-motion';
// import { FaGooglePlay, FaApple, FaRocket, FaMobileAlt, FaSyncAlt, FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
// import { RiFlutterFill } from 'react-icons/ri';
// import { SiPwa } from 'react-icons/si';

// function AppDownload() {
//   const controls = useAnimation();

//   useEffect(() => {
//     const sequence = async () => {
//       while (true) {
//         await controls.start({
//           rotate: [0, 5, -5, 0],
//           y: [0, -10, 0],
//           transition: { duration: 6, ease: "easeInOut" }
//         });
//       }
//     };
//     sequence();
//   }, [controls]);

//   // Custom Google Play icon with exact colors
//   const GooglePlayIcon = () => (
//     <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
//       {/* Google Play triangle */}
//       <path d="M1 1.5L12 12L1 22.5V1.5Z" fill="#4285F4" />
//       {/* Google Play green */}
//       <path d="M12 12L1 22.5L6.5 17.5L12 12Z" fill="#0F9D58" />
//       {/* Google Play yellow */}
//       <path d="M12 12L6.5 17.5L17.5 23.5L23 18L12 12Z" fill="#FFCD40" />
//       {/* Google Play red */}
//       <path d="M12 12L23 18V6L12 12Z" fill="#EB4335" />
//     </svg>
//   );

//   return (
//     <section 
//       style={{ 
//         background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%)',
//         color: '#1a3e72',
//         overflow: 'hidden',
//         position: 'relative',
//         padding: '5rem 0'
//       }} 
//       className="text-center"
//     >
//       {/* Floating animated elements */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, Math.random() * 40 - 20, 0],
//             opacity: [0.6, 1, 0.6],
//             rotate: [0, Math.random() * 20 - 10, 0]
//           }}
//           transition={{
//             duration: 8 + Math.random() * 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             position: 'absolute',
//             width: `${Math.random() * 60 + 40}px`,
//             height: `${Math.random() * 60 + 40}px`,
//             background: 'rgba(26, 62, 114, 0.05)',
//             borderRadius: '50%',
//             zIndex: 0,
//             top: `${Math.random() * 80 + 10}%`,
//             left: `${Math.random() * 80 + 10}%`,
//             border: '1px solid rgba(26, 62, 114, 0.1)'
//           }}
//         />
//       ))}

//       <div className="container position-relative" style={{ zIndex: 1 }}>
//         {/* Animated title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="fw-bold mb-4" style={{ 
//             color: '#1a3e72',
//             fontSize: '3rem',
//             textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
//             position: 'relative',
//             display: 'inline-block'
//           }}>
//             <span style={{
//               position: 'absolute',
//               top: '-10px',
//               right: '-20px',
//               fontSize: '1.5rem',
//               color: '#ffd700'
//             }}>
//               <FaStar />
//             </span>
//             Transform Your Learning
//             <span style={{
//               position: 'absolute',
//               bottom: '-10px',
//               left: '-20px',
//               fontSize: '1.5rem',
//               color: '#ffd700'
//             }}>
//               <FaStar />
//             </span>
//           </h2>
          
//           <motion.p 
//             className="mb-4 lead fw-medium"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Our cutting-edge app is <span className="fw-bold" style={{ color: '#1a6bff' }}>coming soon</span> to revolutionize your education!
//           </motion.p>
//         </motion.div>

//         {/* Feature badges with animations */}
//         <motion.div
//           className="d-flex justify-content-center flex-wrap gap-3 mb-5"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           {[
//             { icon: <FaRocket />, text: 'Lightning Fast' },
//             { icon: <RiFlutterFill />, text: 'Flutter Powered' },
//             { icon: <SiPwa />, text: 'PWA Ready' },
//             { icon: <FaMobileAlt />, text: 'Mobile First' },
//             { icon: <FaSyncAlt />, text: 'Cloud Sync' },
//             { icon: <FaCloudDownloadAlt />, text: 'Offline Mode' }
//           ].map((item, index) => (
//             <motion.span
//               key={index}
//               className="badge px-3 py-2 rounded-pill"
//               style={{
//                 background: 'rgba(255,255,255,0.7)',
//                 backdropFilter: 'blur(10px)',
//                 color: '#1a3e72',
//                 border: '1px solid rgba(26, 62, 114, 0.1)',
//                 fontSize: '0.9rem'
//               }}
//               whileHover={{ 
//                 y: -3,
//                 background: 'rgba(26, 62, 114, 0.1)'
//               }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <span className="me-2" style={{ color: '#1a6bff' }}>{item.icon}</span>
//               {item.text}
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* App download buttons */}
//         <motion.div 
//           className="d-flex justify-content-center flex-wrap gap-4"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {/* Google Play Button - With exact multi-color logo */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.98 }}
//             animate={controls}
//             style={{
//               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
//               borderRadius: '16px',
//               padding: '1.5rem 2rem',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//               border: '1px solid rgba(255,255,255,0.5)',
//               width: '280px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//           >
//             <div 
//               style={{
//                 position: 'absolute',
//                 top: '-50px',
//                 right: '-50px',
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 background: 'rgba(66, 133, 244, 0.1)', // Google Play blue tint
//                 zIndex: 0
//               }}
//             ></div>
//             <div className="position-relative" style={{ zIndex: 1 }}>
//               <div className="d-flex align-items-center gap-3">
//                 <GooglePlayIcon />
//                 <div className="text-start">
//                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>GET IT ON</div>
//                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>Google Play</div>
//                 </div>
//               </div>
//               <div 
//                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
//                 style={{ 
//                   background: 'linear-gradient(90deg, #4285F4, #1a3e72)',
//                   color: 'white',
//                   fontSize: '0.6rem'
//                 }}
//               >
//                 Coming Soon
//               </div>
//             </div>
//           </motion.div>

//           {/* App Store Button */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.98 }}
//             animate={controls}
//             style={{
//               background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
//               borderRadius: '16px',
//               padding: '1.5rem 2rem',
//               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//               border: '1px solid rgba(255,255,255,0.5)',
//               width: '280px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//           >
//             <div 
//               style={{
//                 position: 'absolute',
//                 top: '-50px',
//                 right: '-50px',
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//                 background: 'rgba(0, 0, 0, 0.1)', // App Store black tint
//                 zIndex: 0
//               }}
//             ></div>
//             <div className="position-relative" style={{ zIndex: 1 }}>
//               <div className="d-flex align-items-center gap-3">
//                 <FaApple style={{ fontSize: '2.5rem', color: '#000000' }} /> {/* Pure black */}
//                 <div className="text-start">
//                   <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download on the</div>
//                   <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>App Store</div>
//                 </div>
//               </div>
//               <div 
//                 className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
//                 style={{ 
//                   background: 'linear-gradient(90deg, #000000, #1a3e72)',
//                   color: 'white',
//                   fontSize: '0.6rem'
//                 }}
//               >
//                 Coming Soon
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default AppDownload;



import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaSyncAlt, FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';
import { SiPwa } from 'react-icons/si';

function AppDownload() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0],
          transition: { duration: 6, ease: "easeInOut" }
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <section 
      style={{ 
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%)',
        color: '#1a3e72',
        overflow: 'hidden',
        position: 'relative',
        padding: '5rem 0'
      }} 
      className="text-center"
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.6, 1, 0.6],
            rotate: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
            background: 'rgba(26, 62, 114, 0.05)',
            borderRadius: '50%',
            zIndex: 0,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            border: '1px solid rgba(26, 62, 114, 0.1)'
          }}
        />
      ))}

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-4" style={{ 
            color: '#1a3e72',
            fontSize: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-20px',
              fontSize: '1.5rem',
              color: '#ffd700'
            }}>
              <FaStar />
            </span>
            Transform Your Learning
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-20px',
              fontSize: '1.5rem',
              color: '#ffd700'
            }}>
              <FaStar />
            </span>
          </h2>
          
          <motion.p 
            className="mb-4 lead fw-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our cutting-edge app is <span className="fw-bold" style={{ color: '#1a6bff' }}>coming soon</span> to revolutionize your education!
          </motion.p>
        </motion.div>

        <motion.div
          className="d-flex justify-content-center flex-wrap gap-3 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaRocket />, text: 'Lightning Fast' },
            { icon: <RiFlutterFill />, text: 'Flutter Powered' },
            { icon: <SiPwa />, text: 'PWA Ready' },
            { icon: <FaMobileAlt />, text: 'Mobile First' },
            { icon: <FaSyncAlt />, text: 'Cloud Sync' },
            { icon: <FaCloudDownloadAlt />, text: 'Offline Mode' }
          ].map((item, index) => (
            <motion.span
              key={index}
              className="badge px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                color: '#1a3e72',
                border: '1px solid rgba(26, 62, 114, 0.1)',
                fontSize: '0.9rem'
              }}
              whileHover={{ 
                y: -3,
                background: 'rgba(26, 62, 114, 0.1)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="me-2" style={{ color: '#1a6bff' }}>{item.icon}</span>
              {item.text}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="d-flex justify-content-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Official Google Play Badge */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={controls}
            style={{
              background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
              borderRadius: '16px',
              padding: '1rem 2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.5)',
              width: '280px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play"
              style={{ width: '100%', height: 'auto' }} 
            />
            <div 
              className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
              style={{ 
                background: 'linear-gradient(90deg, #4285F4, #1a3e72)',
                color: 'white',
                fontSize: '0.6rem'
              }}
            >
              Coming Soon
            </div>
          </motion.div>

          {/* Official App Store Badge */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={controls}
            style={{
              background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
              borderRadius: '16px',
              padding: '1rem 2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.5)',
              width: '280px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store"
              style={{ width: '100%', height: 'auto' }} 
            />
            <div 
              className="position-absolute top-0 end-0 mt-2 me-2 badge rounded-pill px-2 py-1"
              style={{ 
                background: 'linear-gradient(90deg, #000000, #1a3e72)',
                color: 'white',
                fontSize: '0.6rem'
              }}
            >
              Coming Soon
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AppDownload;
