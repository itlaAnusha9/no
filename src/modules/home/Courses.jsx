// // import React from 'react';
// // import { useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // // Set this to match your actual navbar height
// // const NAVBAR_HEIGHT = '80px';

// // function Courses() {
// //    useEffect(() => {
// //         document.title = "Courses|NOVYA - Your Smart Learning Platform";
// //       }, []);

// //   const navigate = useNavigate();
// //   const handleExploreClick = () => {
// //     localStorage.setItem('scrollToCourses', 'true');
// //     navigate('/pricing');
// //   };

// //   const courseData = [
// //     {
// //       id: 1,
// //       title: '📚 Class 8–10',
// //       subjects: ['Maths', 'Science', 'Telugu', 'English', 'Social Studies'],
// //       images: [
// //         'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1472&q=80',
// //         'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1471&q=80'
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: '🧪 Class 11–12',
// //       subjects: ['Physics', 'Chemistry', 'Biology', 'Maths', 'Economics'],
// //       images: [
// //         'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: '🎓 Bridge / Certifications',
// //       subjects: ['Board Exam Prep', 'Concept Revision', 'Python', 'Web Dev', 'Data Science'],
// //       images: [
// //         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
// //         'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80',
// //         'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1470&q=80'
// //       ]
// //     }
// //   ];

// //   return (
// //     <div 
// //       className="page-content-wrapper"
// //       style={{
// //         paddingTop: NAVBAR_HEIGHT,
// //         minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`
// //       }}
// //     >
// //       <section
// //         className="py-5"
// //         style={{
// //           background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
// //           fontFamily: `'Poppins', sans-serif`
// //         }}
// //       >
// //         <div className="container">
// //           <h2
// //             className="text-center fw-bold mb-5"
// //             style={{ color: '#2D5D7B', fontSize: '2.5rem' }}
// //           >
// //             🌟 Fun & Smart Learning by Class
// //           </h2>

// //           <div className="row g-4">
// //             {courseData.map(course => (
// //               <div className="col-md-4" key={course.id}>
// //                 <div className="course-card shadow-sm">
// //                   <div className="course-slider">
// //                     <div className="slide-track">
// //                       {[...course.images, ...course.images].map((img, i) => (
// //                         <div className="slide" key={i}>
// //                           <img src={img} alt="course" />
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="p-4">
// //                     <h5 className="fw-bold" style={{ color: '#1e88e5' }}>
// //                       {course.title}
// //                     </h5>
// //                     <ul className="list-unstyled ps-3 mt-3">
// //                       {course.subjects.map((s, idx) => (
// //                        <li key={idx} style={{ fontSize: '1rem', color: 'black' }}>
// //                           ⭐ {s}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                     <button
// //                       onClick={handleExploreClick}
// //                       className="btn btn-primary mt-3 w-100"
// //                       style={{
// //                         background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
// //                         border: 'none',
// //                         borderRadius: '12px',
// //                         fontWeight: 600
// //                       }}
// //                     >
// //                       Explore Courses
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Inline slider CSS */}
// //         <style>{`
// //           .course-card { 
// //             background: white; 
// //             border-radius: 18px; 
// //             overflow: hidden; 
// //             transition: transform 0.3s; 
// //           }
// //           .course-card:hover { 
// //             transform: scale(1.02); 
// //           }
// //           .course-slider { 
// //             height: 200px; 
// //             overflow: hidden; 
// //             position: relative; 
// //           }
// //           .slide-track { 
// //             display: flex; 
// //             width: 200%; 
// //             animation: scrollX 18s linear infinite; 
// //           }
// //           .course-card:hover .slide-track { 
// //             animation-play-state: paused; 
// //           }
// //           .slide { 
// //             flex: 0 0 33.33%; 
// //           }
// //           .slide img { 
// //             width: 100%; 
// //             height: 200px; 
// //             object-fit: cover; 
// //             transition: transform 0.3s ease-in-out; 
// //           }
// //           .slide img:hover { 
// //             transform: scale(1.1); 
// //           }
// //           @keyframes scrollX { 
// //             0% { transform: translateX(0%); } 
// //             100% { transform: translateX(-50%); } 
// //           }
// //           html { 
// //             scroll-padding-top: ${NAVBAR_HEIGHT}; 
// //           }
// //         `}</style>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Courses;






// import React from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Set this to match your actual navbar height
// const NAVBAR_HEIGHT = '80px';

// function Courses() {
//    useEffect(() => {
//         document.title = "Courses|NOVYA - Your Smart Learning Platform";
//       }, []);

//   const navigate = useNavigate();
//   const handleExploreClick = () => {
//     localStorage.setItem('scrollToCourses', 'true');
//     navigate('/pricing');
//   };

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
//     },
//     {
//       id: 4,
//       title: '⚙️ Engineering',
//       subjects: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Aerospace'],
//       images: [
//         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1581093450023-4c1d5a1b1b1a?auto=format&fit=crop&w=1470&q=80'
//       ]
//     },
//     {
//       id: 5,
//       title: '🏨 Hotel Management',
//       subjects: ['Front Office', 'Housekeeping', 'Food Production', 'Food Service', 'Hotel Accounting'],
//       images: [
//         'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80',
//         'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1632&q=80',
//         'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1470&q=80'
//       ]
//     }
//   ];

//   return (
//     <div 
//       className="page-content-wrapper"
//       style={{
//         paddingTop: NAVBAR_HEIGHT,
//         minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`
//       }}
//     >
//       <section
//         className="py-5"
//         style={{
//           background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
//           fontFamily: `'Poppins', sans-serif`
//         }}
//       >
//         <div className="container">
//           <h2
//             className="text-center fw-bold mb-5"
//             style={{ color: '#2D5D7B', fontSize: '2.5rem' }}
//           >
//             🌟 Fun & Smart Learning by Category
//           </h2>

//           <div className="row g-4">
//             {courseData.map(course => (
//               <div className="col-md-4" key={course.id}>
//                 <div className="course-card shadow-sm">
//                   <div className="course-slider">
//                     <div className="slide-track">
//                       {[...course.images, ...course.images].map((img, i) => (
//                         <div className="slide" key={i}>
//                           <img src={img} alt="course" />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h5 className="fw-bold" style={{ color: '#1e88e5' }}>
//                       {course.title}
//                     </h5>
//                     <ul className="list-unstyled ps-3 mt-3">
//                       {course.subjects.map((s, idx) => (
//                        <li key={idx} style={{ fontSize: '1rem', color: 'black' }}>
//                           ⭐ {s}
//                         </li>
//                       ))}
//                     </ul>
//                     <button
//                       onClick={handleExploreClick}
//                       className="btn btn-primary mt-3 w-100"
//                       style={{
//                         background: 'linear-gradient(90deg, #1e88e5, #0d47a1)',
//                         border: 'none',
//                         borderRadius: '12px',
//                         fontWeight: 600
//                       }}
//                     >
//                       Explore Courses
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Inline slider CSS */}
//         <style>{`
//           .course-card { 
//             background: white; 
//             border-radius: 18px; 
//             overflow: hidden; 
//             transition: transform 0.3s; 
//           }
//           .course-card:hover { 
//             transform: scale(1.02); 
//           }
//           .course-slider { 
//             height: 200px; 
//             overflow: hidden; 
//             position: relative; 
//           }
//           .slide-track { 
//             display: flex; 
//             width: 200%; 
//             animation: scrollX 18s linear infinite; 
//           }
//           .course-card:hover .slide-track { 
//             animation-play-state: paused; 
//           }
//           .slide { 
//             flex: 0 0 33.33%; 
//           }
//           .slide img { 
//             width: 100%; 
//             height: 200px; 
//             object-fit: cover; 
//             transition: transform 0.3s ease-in-out; 
//           }
//           .slide img:hover { 
//             transform: scale(1.1); 
//           }
//           @keyframes scrollX { 
//             0% { transform: translateX(0%); } 
//             100% { transform: translateX(-50%); } 
//           }
//           html { 
//             scroll-padding-top: ${NAVBAR_HEIGHT}; 
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// }

// export default Courses;





import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set this to match your actual navbar height
const NAVBAR_HEIGHT = '80px';

function Courses() {
  useEffect(() => {
    document.title = "Courses|NOVYA - Your Smart Learning Platform";
  }, []);

  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const handleExploreClick = () => {
    localStorage.setItem('scrollToCourses', 'true');
    navigate('/pricing');
  };

  const courseData = [
    {
      id: 1,
      title: '📚 School Education',
      category: 'academic',
      subjects: ['Class 8-10 Maths', 'Class 8-10 Science', 'Class 11-12 Physics', 'Class 11-12 Chemistry', 'Board Exam Prep'],
      images: [
        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1472&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1471&q=80'
      ]
    },
    {
      id: 2,
      title: '⚙️ Engineering',
      category: 'academic',
      subjects: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Aerospace'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1581093450023-4c1d5a1b1b1a?auto=format&fit=crop&w=1470&q=80'
      ]
    },
    {
      id: 3,
      title: '💻 Software Development',
      category: 'professional',
      subjects: ['Python Programming', 'Web Development', 'Mobile App Development', 'Data Science', 'Cloud Computing'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1469&q=80',
        'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1470&q=80'
      ]
    },
    {
      id: 4,
      title: '🏨 Hotel Management',
      category: 'professional',
      subjects: ['Front Office Operations', 'Housekeeping Management', 'Food Production', 'Food & Beverage Service', 'Hotel Accounting'],
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1470&q=80'
      ]
    },
    {
      id: 5,
      title: '🎓 Certifications',
      category: 'professional',
      subjects: ['AWS Certification', 'Microsoft Certifications', 'Cisco Certifications', 'Digital Marketing', 'Project Management'],
      images: [
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1469&q=80'
      ]
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courseData 
    : courseData.filter(course => course.category === activeCategory);

  return (
    <div 
      className="page-content-wrapper"
      style={{
        paddingTop: NAVBAR_HEIGHT,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT})`
      }}
    >
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%)',
          fontFamily: `'Poppins', sans-serif`
        }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-3"
            style={{ color: '#2D5D7B', fontSize: '2.5rem' }}
          >
            Explore Our Courses
          </h2>

          <h5 className="text-center mb-4" style={{ color: '#4a6b8a' }}>
            Professional Courses: Software Development & Hotel Management
          </h5>

          <div className="d-flex justify-content-center mb-5">
            <div className="btn-group" role="group">
              <button 
                type="button" 
                className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveCategory('all')}
              >
                All Courses
              </button>
              <button 
                type="button" 
                className={`btn ${activeCategory === 'academic' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveCategory('academic')}
              >
                Academic
              </button>
              <button 
                type="button" 
                className={`btn ${activeCategory === 'professional' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveCategory('professional')}
              >
                Professional
              </button>
            </div>
          </div>

          <div className="row g-4">
            {filteredCourses.map(course => (
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
                    <h5 className="fw-bold" style={{ color: '#1e88e5' }}>
                      {course.title}
                    </h5>
                    <ul className="list-unstyled ps-3 mt-3">
                      {course.subjects.map((s, idx) => (
                       <li key={idx} style={{ fontSize: '1rem', color: 'black' }}>
                          ⭐ {s}
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
                        fontWeight: 600
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

        {/* Inline slider CSS */}
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
            0% { transform: translateX(0%); } 
            100% { transform: translateX(-50%); } 
          }
          html { 
            scroll-padding-top: ${NAVBAR_HEIGHT}; 
          }
        `}</style>
      </section>
    </div>
  );
}

export default Courses;