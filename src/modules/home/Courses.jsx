// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Courses() {
//   const courseData = [
//     {
//       id: 1,
//       title: '📚 Class 8–10',
//       subjects: ['Maths', 'Science', 'Telugu', 'English', 'Social Studies'],
//       images: [
//         'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1472&q=80',
//         'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1471&q=80'
//       ]
//     },
//     {
//       id: 2,
//       title: '🧪 Class 11–12',
//       subjects: ['Physics', 'Chemistry', 'Biology', 'Maths', 'Economics'],
//       images: [
//         'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1470&q=80'
//       ]
//     },
//     {
//       id: 3,
//       title: '🎓 Bridge / Certifications',
//       subjects: ['Board Exam Prep', 'Concept Revision', 'Python', 'Web Dev', 'Data Science'],
//       images: [
//         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80',
//         'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1470&q=80'
//       ]
//     }
//   ];

//   return (
//     <section
//       className="py-5"
//       style={{
//         background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
//         fontFamily: `'Poppins', sans-serif`
//       }}
//     >
//       <div className="container">
//         <h2 className="text-center fw-bold mb-5" style={{ color: '#2D5D7B', fontSize: '2.5rem' }}>
//           🌟 Fun & Smart Learning by Class
//         </h2>

//         <div className="row g-4">
//           {courseData.map((course) => (
//             <div className="col-md-4" key={course.id}>
//               <div className="course-card shadow-sm">
//                 <div className="course-slider">
//                   <div className="slide-track">
//                     {[...course.images, ...course.images].map((img, i) => (
//                       <div className="slide" key={i}>
//                         <img src={img} alt="course" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="p-4">
//                   <h5 className="fw-bold" style={{ color: '#1e88e5' }}>{course.title}</h5>
//                   <ul className="list-unstyled ps-3 mt-3">
//                     {course.subjects.map((subject, idx) => (
//                       <li key={idx} style={{ fontSize: '1rem', color: '#333' }}>
//                         ⭐ {subject}
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href="/course-detail"
//                     className="btn btn-primary mt-3 w-100"
//                     style={{
//                       background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
//                       border: 'none',
//                       borderRadius: '12px',
//                       fontWeight: '600'
//                     }}
//                   >
//                     Explore Courses
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .course-card {
//           background: white;
//           border-radius: 18px;
//           overflow: hidden;
//           transition: transform 0.3s;
//         }

//         .course-card:hover {
//           transform: scale(1.02);
//         }

//         .course-slider {
//           height: 200px;
//           overflow: hidden;
//           position: relative;
//         }

//         .slide-track {
//           display: flex;
//           width: 200%;
//           animation: scrollX 18s linear infinite;
//         }

//         .course-card:hover .slide-track {
//           animation-play-state: paused;
//         }

//         .slide {
//           flex: 0 0 33.33%;
//         }

//         .slide img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           transition: transform 0.3s ease-in-out;
//         }

//         .slide img:hover {
//           transform: scale(1.1);
//         }

//         @keyframes scrollX {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Courses;




// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { motion } from 'framer-motion';

// // function Courses() {
// //   const courseData = [
// //     {
// //       id: 1,
// //       title: '📚 Class 8–10',
// //       subjects: ['Maths', 'Science', 'Telugu','English', 'Social Studies'],
// //       images: [
// //         'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
// //         'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: '🧪 Class 11–12',
// //       subjects: ['Physics', 'Chemistry', 'Biology', 'Maths', 'Economics'],
// //       images: [
// //         'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: '🎓 Bridge / Certifications',
// //       subjects: [
// //         'Board Exam Prep',
// //         'Concept Revision',
// //         'Python',
// //         'Web Development',
// //         'Data Science',
// //       ],
// //       images: [
// //         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
// //         'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     },
// //   ];

// //   return (
// //     <section
// //       className="py-5"
// //       style={{
// //         background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
// //         fontFamily: `'Poppins', 'Inter', sans-serif`,
// //       }}
// //     >
// //       <div className="container">
// //         <motion.h2
// //           className="text-center fw-bold mb-5"
// //           style={{
// //             color: '#2D5D7B',
// //             fontSize: '2.5rem',
// //             textShadow: '0 1px 3px rgba(0,0,0,0.1)',
// //           }}
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           🌟 Fun & Smart Learning by Class
// //         </motion.h2>

// //         <div className="row g-4">
// //           {courseData.map((course, index) => (
// //             <div className="col-md-4" key={course.id}>
// //               <motion.div
// //                 className="h-100 rounded overflow-hidden"
// //                 style={{
// //                   background: 'white',
// //                   borderRadius: '18px',
// //                   boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
// //                   transition: 'transform 0.3s ease',
// //                 }}
// //                 whileHover={{ scale: 1.03 }}
// //                 whileTap={{ scale: 0.97 }}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: index * 0.2 }}
// //               >
// //                 {/* Image Gallery */}
// //                 <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
// //                   <div className="d-flex h-100" style={{ width: '300%' }}>
// //                     {course.images.map((img, imgIndex) => (
// //                       <motion.div
// //                         key={imgIndex}
// //                         className="h-100"
// //                         style={{
// //                           width: '33.33%',
// //                           backgroundImage: `url(${img})`,
// //                           backgroundSize: 'cover',
// //                           backgroundPosition: 'center',
// //                           filter: 'brightness(0.9)',
// //                         }}
// //                         animate={{
// //                           x: `-${index * 100}%`,
// //                         }}
// //                         transition={{
// //                           duration: 15,
// //                           repeat: Infinity,
// //                           ease: 'linear',
// //                         }}
// //                       />
// //                     ))}
// //                   </div>
// //                   <div 
// //                     className="position-absolute top-0 start-0 w-100 h-100"
// //                     style={{
// //                       background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(30,136,229,0.3))'
// //                     }}
// //                   />
// //                 </div>

// //                 {/* Course Content */}
// //                 <div className="p-4">
// //                   <h5
// //                     className="fw-bold mb-3"
// //                     style={{
// //                       color: '#1e88e5',
// //                       fontSize: '1.25rem',
// //                       borderBottom: '2px solid #e3f2fd',
// //                       paddingBottom: '8px',
// //                     }}
// //                   >
// //                     {course.title}
// //                   </h5>
// //                   <ul className="list-unstyled ps-3">
// //                     {course.subjects.map((subject, idx) => (
// //                       <motion.li
// //                         key={idx}
// //                         className="mb-2"
// //                         style={{
// //                           fontSize: '1rem',
// //                           color: '#333',
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           gap: '0.5rem',
// //                         }}
// //                         whileHover={{ x: 5 }}
// //                       >
// //                         <span role="img" aria-label="star">
// //                           ⭐
// //                         </span>{' '}
// //                         {subject}
// //                       </motion.li>
// //                     ))}
// //                   </ul>
                  
// //                   <motion.button
// //                     className="btn btn-primary mt-3 w-100"
// //                     style={{
// //                       background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
// //                       border: 'none',
// //                       borderRadius: '12px',
// //                       fontWeight: '600'
// //                     }}
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                   >
// //                     Explore Courses
// //                   </motion.button>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Courses;



// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { motion } from 'framer-motion';

// // function Courses() {
// //   const courseData = [
// //     {
// //       id: 1,
// //       title: 'Class 8–10 Foundation',
// //       icon: '📚',
// //       subjects: ['Mathematics', 'Science', 'English', 'Social Studies'],
// //       images: [
// //         'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
// //         'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: 'Class 11–12 Specialization',
// //       icon: '🧪',
// //       subjects: ['Physics', 'Chemistry', 'Biology', 'Advanced Maths', 'Economics'],
// //       images: [
// //         'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: 'Career Accelerators',
// //       icon: '🎓',
// //       subjects: [
// //         'Competitive Exam Prep',
// //         'Concept Mastery',
// //         'Python Programming',
// //         'Full Stack Development',
// //         'Data Science Fundamentals'
// //       ],
// //       images: [
// //         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
// //         'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     },
// //   ];

// //   return (
// //     <section
// //       className="py-5 position-relative"
// //       style={{
// //         background: 'linear-gradient(135deg, #f8fbff 0%, #f0f7ff 100%)',
// //         fontFamily: `'Inter', 'Poppins', sans-serif`,
// //         overflow: 'hidden'
// //       }}
// //     >
// //       {/* Decorative elements */}
// //       <div className="position-absolute top-0 start-0 w-100 h-100" style={{
// //         backgroundImage: 'radial-gradient(rgba(30, 136, 229, 0.1) 1px, transparent 1px)',
// //         backgroundSize: '20px 20px',
// //         zIndex: 0
// //       }}></div>
      
// //       <div className="container position-relative" style={{ zIndex: 1 }}>
// //         {/* Professional Heading */}
// //         <motion.div
// //           className="text-center mb-5"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           <p className="text-uppercase mb-2" style={{
// //             color: '#1e88e5',
// //             fontWeight: 600,
// //             letterSpacing: '2px',
// //             fontSize: '0.9rem'
// //           }}>
// //             Comprehensive Learning Paths
// //           </p>
// //           <h2 className="fw-bold mb-3" style={{
// //             color: '#0d47a1',
// //             fontSize: '2.5rem',
// //             lineHeight: 1.2
// //           }}>
// //             Tailored Academic Programs
// //           </h2>
// //           <div className="mx-auto" style={{
// //             width: '80px',
// //             height: '4px',
// //             background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
// //             borderRadius: '2px'
// //           }}></div>
// //         </motion.div>

// //         <div className="row g-4 mt-4">
// //           {courseData.map((course, index) => (
// //             <div className="col-lg-4 col-md-6" key={course.id}>
// //               <motion.div
// //                 className="h-100 rounded-4 overflow-hidden border-0"
// //                 style={{
// //                   background: 'white',
// //                   boxShadow: '0 10px 30px rgba(13, 71, 161, 0.1)',
// //                   transition: 'all 0.3s ease',
// //                 }}
// //                 whileHover={{ 
// //                   y: -5,
// //                   boxShadow: '0 15px 35px rgba(13, 71, 161, 0.15)'
// //                 }}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: "-50px" }}
// //                 transition={{ duration: 0.6, delay: index * 0.15 }}
// //               >
// //                 {/* Image Gallery */}
// //                 <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
// //                   <div className="d-flex h-100" style={{ width: '300%' }}>
// //                     {course.images.map((img, imgIndex) => (
// //                       <div
// //                         key={imgIndex}
// //                         className="h-100"
// //                         style={{
// //                           width: '33.33%',
// //                           backgroundImage: `url(${img})`,
// //                           backgroundSize: 'cover',
// //                           backgroundPosition: 'center',
// //                           filter: 'brightness(0.95)',
// //                         }}
// //                       />
// //                     ))}
// //                   </div>
// //                   <div 
// //                     className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
// //                     style={{
// //                       background: 'rgba(13, 71, 161, 0.2)',
// //                     }}
// //                   >
// //                     <motion.div 
// //                       className="d-flex align-items-center justify-content-center rounded-circle"
// //                       style={{
// //                         width: '80px',
// //                         height: '80px',
// //                         background: 'rgba(255, 255, 255, 0.9)',
// //                         fontSize: '2rem'
// //                       }}
// //                       whileHover={{ scale: 1.1 }}
// //                     >
// //                       {course.icon}
// //                     </motion.div>
// //                   </div>
// //                 </div>

// //                 {/* Course Content */}
// //                 <div className="p-4 pt-3">
// //                   <h3 className="fw-bold mb-3" style={{
// //                     color: '#0d47a1',
// //                     fontSize: '1.4rem',
// //                   }}>
// //                     {course.title}
// //                   </h3>
// //                   <ul className="list-unstyled">
// //                     {course.subjects.map((subject, idx) => (
// //                       <motion.li
// //                         key={idx}
// //                         className="mb-2 d-flex align-items-start"
// //                         style={{
// //                           fontSize: '0.95rem',
// //                           color: '#455a64',
// //                         }}
// //                         whileHover={{ x: 5 }}
// //                         transition={{ type: 'spring', stiffness: 300 }}
// //                       >
// //                         <span className="me-2" style={{ color: '#1e88e5' }}>•</span>
// //                         {subject}
// //                       </motion.li>
// //                     ))}
// //                   </ul>
                  
// //                   <motion.button
// //                     className="btn btn-primary mt-3 w-100 border-0"
// //                     style={{
// //                       background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
// //                       borderRadius: '8px',
// //                       fontWeight: '600',
// //                       padding: '10px',
// //                       fontSize: '0.9rem'
// //                     }}
// //                     whileHover={{ 
// //                       scale: 1.02,
// //                       background: 'linear-gradient(90deg, #0d47a1, #1e88e5)'
// //                     }}
// //                     whileTap={{ scale: 0.98 }}
// //                   >
// //                     Discover Program
// //                     <i className="bi bi-arrow-right ms-2"></i>
// //                   </motion.button>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Courses;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Courses() {
  const navigate = useNavigate();
 
  const handleExploreClick = () => {
    // Set flag in localStorage to trigger scroll in Pricing component
    localStorage.setItem('scrollToCourses', 'true');
    // Navigate to pricing page
    navigate('/pricing');
  };
 
  const courseData = [
    {
      id: 1,
      title: '📚 Class 8–10',
      subjects: ['Maths', 'Science', 'Telugu', 'English', 'Social Studies'],
      images: [
        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1472&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1471&q=80'
      ]
    },
    {
      id: 2,
      title: '🧪 Class 11–12',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Maths', 'Economics'],
      images: [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1470&q=80'
      ]
    },
    {
      id: 3,
      title: '🎓 Bridge / Certifications',
      subjects: ['Board Exam Prep', 'Concept Revision', 'Python', 'Web Dev', 'Data Science'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80',
        'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1470&q=80'
      ]
    }
  ];
 
  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
        fontFamily: `'Poppins', sans-serif`
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#2D5D7B', fontSize: '2.5rem' }}>
          🌟 Fun & Smart Learning by Class
        </h2>
 
        <div className="row g-4">
          {courseData.map((course) => (
            <div className="col-md-4" key={course.id}>
              <div className="course-card shadow-sm">
                <div className="course-slider">
                  <div className="slide-track">
                    {[...course.images, ...course.images].map((img, i) => (
                      <div className="slide" key={i}>
                        <img src={img} alt="course" />
                      </div>
                    ))}
                  </div>
                </div>
 
                <div className="p-4">
                  <h5 className="fw-bold" style={{ color: '#1e88e5' }}>{course.title}</h5>
                  <ul className="list-unstyled ps-3 mt-3">
                    {course.subjects.map((subject, idx) => (
                      <li key={idx} style={{ fontSize: '1rem', color: '#333' }}>
                        ⭐ {subject}
                      </li>
                    ))}
                  </ul>
 
                  <button
                    onClick={handleExploreClick}
                    className="btn btn-primary mt-3 w-100"
                    style={{
                      background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '600'
                    }}
                  >
                    Explore Courses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      <style>{`
        .course-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.3s;
        }
 
        .course-card:hover {
          transform: scale(1.02);
        }
 
        .course-slider {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
 
        .slide-track {
          display: flex;
          width: 200%;
          animation: scrollX 18s linear infinite;
        }
 
        .course-card:hover .slide-track {
          animation-play-state: paused;
        }
 
        .slide {
          flex: 0 0 33.33%;
        }
 
        .slide img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
 
        .slide img:hover {
          transform: scale(1.1);
        }
 
        @keyframes scrollX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
 
export default Courses;

