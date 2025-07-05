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
//                   backdropFilter: 'blur(10px)',
//                   WebkitBackdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(255, 255, 255, 0.3)',
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
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
//                 {/* 🔽 Subtitles styled to white */}
//                 <h5 className="fw-semibold mb-2" style={{ color: '#ffffff' }}>{feature.title}</h5>
//                 <p className="mb-0" style={{ color: '#ffffff' }}>{feature.desc}</p>
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



import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import missionImage from './assets/mission-image.webp';
import learningImage from './assets/learning-image.webp';
import modulesImage from './assets/modules-image.webp'; // Add your third image import
import computer from './assets/computer-image.webp'; // Add your third image import
import car from './assets/car-image.webp';



function MissionVision() {
   useEffect(() => {
        document.title = "Features|Prime Minds - Your Smart Learning Platform";
      }, []);
  return (
    <section style={{ backgroundColor: '#f8f9fa' }}>
      {/* First Section - Mission & Vision */}
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fw-bold"
              style={{ color: '#2D5D7B', fontSize: '2.5rem' }}
            >
              Our Mission & Vision
            </motion.h1>
          </div>
          <div className="col-md-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="lead" style={{ 
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: 0
              }}>
                Vedha is committed to revolutionizing education by providing personalised, AI-driven learning experiences that adapt to each subject's needs. We aim to empower learners with innovative tools and resources, fostering success and lifelong growth.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <img
            src={missionImage}
            alt="Vedha education platform"
            className="img-fluid rounded shadow"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '500px',
              objectFit: 'cover',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          />
        </motion.div>
      </div>

      {/* Second Section - Unique Pace and Style */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="text-center text-lg-start">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  color: '#2D5D7B',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                I UNDERLY EVERY
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ 
                  color: '#3a86ff',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}
              >
                Student's Unique Pace and Style
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '2rem'
                }}
              >
                Vedha's AI engine dynamically adjusts the curriculum based on each student's performance, ensuring optimal learning. We identify knowledge gaps and provide targeted support, fostering a deeper understanding and greater academic success. Our platform adapts to individual learning styles, making education more effective and engaging.
              </motion.p>

              <div className="row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded text-center"
                    style={{ backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                  >
                    <h1 style={{ 
                      color: '#3a86ff',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem'
                    }}>
                      95%
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#555' }}>
                      Of students report feeling more engaged
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-3 rounded text-center"
                    style={{ backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                  >
                    <h1 style={{ 
                      color: '#8338ec',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem'
                    }}>
                      40+
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#555' }}>
                      Improvement in test scores observed
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={learningImage}
                alt="Student learning with Vedha"
                className="img-fluid rounded shadow-lg"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '500px',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Third Section - Engaging Learning Modules */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
            <div className="text-center text-lg-start">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  color: '#2D5D7B',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}
              >
                Dive into <span style={{ fontStyle: 'italic' }}>Engaging</span> and <span style={{ fontStyle: 'italic' }}>Adaptive</span> Learning Modules with Vedha
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '2rem'
                }}
              >
                Our interactive modules are designed to captivate students and foster a deeper understanding of the subject matter. With Vedha, learning becomes an exciting adventure, tailored to each student's unique learning style and pace, ensuring effective knowledge acquisition and retention.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  textAlign: 'left',
                  paddingLeft: '1.5rem',
                  fontSize: '1.1rem',
                  color: '#333'
                }}
              >
                <li className="mb-2"><strong>Personalized Content:</strong> Modules adapt to individual learning styles.</li>
                <li className="mb-2"><strong>Interactive Simulations:</strong> Engage with real-world scenarios.</li>
                <li className="mb-2"><strong>Gamified Learning:</strong> Earn rewards and track progress.</li>
                <li><strong>Real-time Feedback:</strong> Immediate insights for improvement.</li>
              </motion.ul>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 order-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={modulesImage}
                alt="Vedha learning modules"
                className="img-fluid rounded shadow-lg"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '500px',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
            <div className="text-center text-lg-start">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  color: '#2D5D7B',
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}
              >
                Dive into <span style={{ fontStyle: 'italic' }}>Engaging</span> and <span style={{ fontStyle: 'italic' }}>Adaptive</span> Learning Modules with Vedha
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '2rem'
                }}
              >
                Our interactive modules are designed to captivate students and foster a deeper understanding of the subject matter. With Vedha, learning becomes an exciting adventure, tailored to each student's unique learning style and pace, ensuring effective knowledge acquisition and retention.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  textAlign: 'left',
                  paddingLeft: '1.5rem',
                  fontSize: '1.1rem',
                  color: '#333'
                }}
              >
                <li className="mb-2"><strong>Personalized Content:</strong> Modules adapt to individual learning styles.</li>
                <li className="mb-2"><strong>Interactive Simulations:</strong> Engage with real-world scenarios.</li>
                <li className="mb-2"><strong>Gamified Learning:</strong> Earn rewards and track progress.</li>
                <li><strong>Real-time Feedback:</strong> Immediate insights for improvement.</li>
              </motion.ul>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 order-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={computer}
                alt="Vedha learning modules"
                className="img-fluid rounded shadow-lg"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '500px',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>



      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fw-bold"
              style={{ color: '#2D5D7B', fontSize: '2.5rem' }}
            >
              Our Mission & Vision
            </motion.h1>
          </div>
          <div className="col-md-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="lead" style={{ 
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#333',
                marginBottom: 0
              }}>
                Vedha is committed to revolutionizing education by providing personalised, AI-driven learning experiences that adapt to each subject's needs. We aim to empower learners with innovative tools and resources, fostering success and lifelong growth.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <img
            src={car}
            alt="Vedha education platform"
            className="img-fluid rounded shadow"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '500px',
              objectFit: 'cover',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          />
        </motion.div>
      </div>


      
    </section>
  );
}

export default MissionVision;