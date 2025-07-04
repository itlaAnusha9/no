// // // // import React from 'react';
// // // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // // function Features() {
// // // //   const features = [
// // // //     { title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
// // // //     { title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
// // // //     { title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
// // // //     { title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
// // // //     { title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
// // // //     { title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
// // // //   ];

// // // //   return (
// // // //     <section style={{ backgroundColor: '#F4F8FB' }} className="py-5">
// // // //       <div className="container">
// // // //         <h2 className="text-center fw-bold mb-5" style={{ color: '#2D5D7B' }}>
// // // //           What We Offer
// // // //         </h2>
// // // //         <div className="row g-4">
// // // //           {features.map((feature, idx) => (
// // // //             <div key={idx} className="col-12 col-md-6 col-lg-4">
// // // //               <div
// // // //                 className="p-4 h-100 rounded shadow-sm"
// // // //                 style={{
// // // //                   backgroundColor: '#fff',
// // // //                   color: '#222831',
// // // //                   border: '1px solid #e0e0e0'
// // // //                 }}
// // // //               >
// // // //                 <h5 className="fw-semibold mb-2" style={{ color: '#2D5D7B' }}>
// // // //                   {feature.title}
// // // //                 </h5>
// // // //                 <p className="mb-0">{feature.desc}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default Features;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Features.css';
// import { motion } from 'framer-motion';
// import { FaRobot, FaChartLine, FaBrain, FaGraduationCap, FaLanguage, FaMagic } from 'react-icons/fa';

// function Features() {
//   const features = [
//     { icon: <FaRobot />, title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
//     { icon: <FaChartLine />, title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
//     { icon: <FaBrain />, title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
//     { icon: <FaGraduationCap />, title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
//     { icon: <FaLanguage />, title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
//     { icon: <FaMagic />, title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
//   ];

//   return (
//     <section className="features-section py-5">
//       <div className="container">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center fw-bold mb-5 section-title"
//         >
//           What We Offer
//         </motion.h2>
//         <div className="row g-4">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="col-12 col-md-6 col-lg-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <div className="feature-card p-4 h-100 text-center">
//                 <div className="icon-box mb-3">{feature.icon}</div>
//                 <h5 className="fw-semibold mb-2">{feature.title}</h5>
//                 <p className="mb-0">{feature.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Features.css';
// import { motion } from 'framer-motion';
// import { FaRobot, FaChartLine, FaBrain, FaGraduationCap, FaLanguage, FaMagic } from 'react-icons/fa';

// function Features() {
//   const features = [
//     { icon: <FaRobot />, title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
//     { icon: <FaChartLine />, title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
//     { icon: <FaBrain />, title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
//     { icon: <FaGraduationCap />, title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
//     { icon: <FaLanguage />, title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
//     { icon: <FaMagic />, title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
//   ];

//   return (
//     <section className="features-section py-5">
//       <div className="container">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center fw-bold mb-5 section-title"
//         >
//           What We Offer
//         </motion.h2>
//         <div className="row g-4">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="col-12 col-md-6 col-lg-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <div className="feature-card p-4 h-100 text-center">
//                 <div className="svg-blob"></div>
//                 <motion.div
//                   className="icon-box mb-3"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h5 className="fw-semibold mb-2">{feature.title}</h5>
//                 <p className="mb-0">{feature.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import { FaRobot, FaChartLine, FaBrain, FaGraduationCap, FaLanguage, FaMagic } from 'react-icons/fa';

// function Features() {
//   const features = [
//     { icon: <FaRobot />, title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
//     { icon: <FaChartLine />, title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
//     { icon: <FaBrain />, title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
//     { icon: <FaGraduationCap />, title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
//     { icon: <FaLanguage />, title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
//     { icon: <FaMagic />, title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
//   ];

//   return (
//     <section
//       className="features-section py-5 position-relative"
//       style={{
//         overflow: 'hidden',
//         backgroundColor: '#f0f9ff',
//         zIndex: 1,
//       }}
//     >
//       {/* Scrolling background */}
//       <div
//         className="scrolling-bg"
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80)',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'repeat-x',
//           backgroundPosition: 'center',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '200%',
//           height: '100%',
//           animation: 'scrollBg 60s linear infinite',
//           opacity: 0.1,
//           zIndex: 0,
//         }}
//       ></div>

//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center fw-bold mb-5 section-title"
//           style={{
//             color: '#2D5D7B',
//             fontSize: '2.2rem',
//           }}
//         >
//           What We Offer
//         </motion.h2>

//         <div className="row g-4">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="col-12 col-md-6 col-lg-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <div
//                 className="feature-card p-4 h-100 text-center"
//                 style={{
//                   borderRadius: '16px',
//                   background: 'white',
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <motion.div
//                   className="icon-box mb-3"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   style={{
//                     fontSize: '2rem',
//                     color: '#1E88E5',
//                   }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h5 className="fw-semibold mb-2" style={{ color: '#222831' }}>
//                   {feature.title}
//                 </h5>
//                 <p className="mb-0 text-muted">{feature.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation Keyframes */}
//       <style>
//         {`
//           @keyframes scrollBg {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Features;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import { FaRobot, FaChartLine, FaBrain, FaGraduationCap, FaLanguage, FaMagic } from 'react-icons/fa';

// function Features() {
//   const features = [
//     { icon: <FaRobot />, title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
//     { icon: <FaChartLine />, title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
//     { icon: <FaBrain />, title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
//     { icon: <FaGraduationCap />, title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
//     { icon: <FaLanguage />, title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
//     { icon: <FaMagic />, title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
//   ];

//   const gradientColors = [
//     'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
//     'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
//     'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
//     'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
//     'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)'
//   ];

//   return (
//     <section
//       className="features-section py-5 position-relative"
//       style={{
//         overflow: 'hidden',
//         backgroundColor: '#f0f9ff',
//         zIndex: 1,
//       }}
//     >
//       {/* Scrolling background */}
//       <div
//         className="scrolling-bg"
//         style={{
//           backgroundImage:
//             'url(https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80)',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'repeat-x',
//           backgroundPosition: 'center',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '200%',
//           height: '100%',
//           animation: 'scrollBg 60s linear infinite',
//           opacity: 0.1,
//           zIndex: 0,
//         }}
//       ></div>

//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center fw-bold mb-5 section-title"
//           style={{
//             color: '#2D5D7B',
//             fontSize: '2.2rem',
//           }}
//         >
//           What We Offer
//         </motion.h2>

//         <div className="row g-4">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="col-12 col-md-6 col-lg-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <div
              
//                 className="feature-card p-4 h-100 text-white text-center"
//                 style={{
//                   borderRadius: '16px',
//                   background: gradientColors[idx % gradientColors.length],
//                   boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//                   position: 'relative',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <motion.div
//                   className="icon-box mb-3"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   style={{
//                     fontSize: '2rem',
//                   }}
//                 >
//                   {feature.icon}
//                 </motion.div>
//                 <h5 className="fw-semibold mb-2">{feature.title}</h5>
//                 <p className="mb-0">{feature.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation Keyframes */}
//       <style>
//         {`
//           @keyframes scrollBg {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Features;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaBrain, FaGraduationCap, FaLanguage, FaMagic } from 'react-icons/fa';

function Features() {
  const features = [
    { icon: <FaRobot />, title: 'AI Tutor Available 24x7', desc: 'Ask doubts anytime, get instant answers.' },
    { icon: <FaChartLine />, title: 'Personalized Dashboard', desc: 'See your progress and strengths.' },
    { icon: <FaBrain />, title: 'Adaptive Quizzes', desc: 'Quizzes that match your learning speed.' },
    { icon: <FaGraduationCap />, title: 'Courses for 8th to PG', desc: 'From NCERT to certification programs.' },
    { icon: <FaLanguage />, title: 'Multilingual Support', desc: 'Learn in English or your regional language.' },
    { icon: <FaMagic />, title: 'AI Feedback Engine', desc: 'Get suggestions on how to improve.' }
  ];

  const gradientColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)'
  ];

  return (
    <section
      className="features-section py-5 position-relative"
      style={{
        overflow: 'hidden',
        backgroundColor: '#f0f9ff',
        zIndex: 1,
      }}
    >
      {/* Scrolling background */}
      <div
        className="scrolling-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '100%',
          animation: 'scrollBg 60s linear infinite',
          opacity: 0.1,
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center fw-bold mb-5 section-title"
          style={{
            color: '#2D5D7B',
            fontSize: '2.2rem',
          }}
        >
          What We Offer
        </motion.h2>

        <div className="row g-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div
                className="feature-card p-4 h-100 text-white text-center"
                style={{
                  borderRadius: '16px',
                  background: gradientColors[idx % gradientColors.length],
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
              >
                <motion.div
                  className="icon-box mb-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h5 className="fw-semibold mb-2">{feature.title}</h5>
                <p className="mb-0">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>
        {`
          @keyframes scrollBg {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

export default Features;
