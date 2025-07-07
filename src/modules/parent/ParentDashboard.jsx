


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ChildProfile from './ChildProfile';
// import Attendance from './Attendance';
// import Progress from './Progress';
// import Homework from './HomeWork';
// import MockTestReports from './MockTestReports';
// import StudyPlanner from './StudyPlanner';
// import { Row, Col, Container } from 'react-bootstrap';
// import { Typewriter } from 'react-simple-typewriter';
// import { FiLogOut } from 'react-icons/fi';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const ParentDashboard = () => {
//   const [selectedSection, setSelectedSection] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const titles = {
//       profile: 'Child Profile',
//       attendance: 'Attendance',
//       grades: 'Progress',
//       homework: 'Assignments',
//       mockreports: 'Mock Tests',
//       studyplanner: 'Study Plan'
//     };

//     document.title = selectedSection && titles[selectedSection]
//       ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
//       : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
//   }, [selectedSection]);

//   const sections = [
//     { key: 'profile', label: '👶 Child Profile', icon: '👶' },
//     { key: 'attendance', label: '📊 Attendance', icon: '📊' },
//     { key: 'grades', label: '📈 Progress', icon: '📈' },
//     { key: 'homework', label: '📝 Assignments', icon: '📝' },
//     { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
//     { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
//   ];

//   const handleLogout = () => navigate('/');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'profile': return <ChildProfile />;
//       case 'attendance': return <Attendance />;
//       case 'grades': return <Progress />;
//       case 'homework': return <Homework />;
//       case 'mockreports': return <MockTestReports />;
//       case 'studyplanner': return <StudyPlanner />;
//       default:
//         return (
//           <div className="text-center mt-5">
//             <h3 className="text-secondary">Select a section to begin</h3>
//             <div className="mt-4">
//               <div style={{
//                 width: '90%',
//                 maxWidth: '300px',
//                 height: '300px',
//                 margin: '0 auto',
//                 background: 'url(https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a551b1b9e0e8c2a770c863f8b0f6b53b.gif) center/contain no-repeat'
//               }}></div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: '#F4F8FB',
//       minHeight: '100vh',
//       padding: '1rem',
//       position: 'relative',
//       overflowX: 'hidden'
//     }}>
//       <Container fluid className="text-center" style={{ position: 'relative' }}>
//         {/* Avatar + Logout */}
//         <div className="d-flex flex-column align-items-center mt-3 mb-4">
//           <img
//             src="/images/parent2.webp"
//             alt="Parent"
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//               border: '3px solid #FFFFFF'
//             }}
//           />
//           <button onClick={handleLogout} style={{
//             marginTop: '10px',
//             background: 'transparent',
//             border: 'none',
//             color: '#A62D69',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             fontWeight: '600',
//             fontSize: '0.9rem'
//           }}>
//             <FiLogOut className="me-1" /> Logout
//           </button>
//         </div>

//         {/* Header */}
//         <div style={{ textAlign: 'center' }}>
//           <h2 style={{
//             fontWeight: '800',
//             fontSize: '2.5rem',
//             marginBottom: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '16px',
//             background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             border: 'none',
//             boxShadow: 'none'
//           }}>
//             <img
//               src={novyaLogo}
//               alt="NOVYA Logo"
//               style={{
//                 height: '100px',
//                 width: 'auto',
//                 maxWidth: '60px',
//                 objectFit: 'contain',
//                 display: 'inline-block',
//                 verticalAlign: 'middle'
//               }}
//             />
//             Welcome to Parent Portal
//           </h2>

//           <p style={{
//             fontStyle: 'italic',
//             fontSize: '1.1rem',
//             color: '#222831',
//             fontWeight: '500',
//             padding: '0 10px'
//           }}>
//             <Typewriter
//               words={[
//                 "Stay engaged with your child's education...",
//                 "Track academic progress in real-time...",
//                 "Celebrate learning milestones together!",
//                 "Empower your child's educational journey"
//               ]}
//               loop
//               typeSpeed={50}
//               deleteSpeed={30}
//               delaySpeed={2000}
//             />
//           </p>
//         </div>

//         {/* Parent Tip Box */}
//         <div className="mt-4 mx-auto" style={{
//           backgroundColor: '#FFFFFF',
//           borderLeft: '6px solid #A62D69',
//           fontSize: '1rem',
//           fontWeight: '500',
//           color: '#222831',
//           boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
//           borderRadius: '12px',
//           width: '90%',
//           maxWidth: '700px',
//           padding: '1rem'
//         }}>
//           <div className="d-flex align-items-center">
//             <div style={{
//               backgroundColor: '#A62D69',
//               width: '40px',
//               height: '40px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '15px',
//               color: 'white',
//               flexShrink: 0
//             }}>
//               💖
//             </div>
//             <div>
//               <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
//               "Your engagement boosts your child's confidence and academic success. Celebrate small wins!"
//             </div>
//           </div>
//         </div>

//         {/* Section Boxes */}
//         <Row className="mt-5 justify-content-center px-3">
//           {sections.map((section) => (
//             <Col key={section.key} xs={6} sm={4} md={3} lg={2} className="mb-4">
//               <div
//                 onClick={() => setSelectedSection(section.key)}
//                 style={{
//                   cursor: 'pointer',
//                   borderRadius: '15px',
//                   overflow: 'hidden',
//                   minHeight: '100px',
//                   background: '#FFFFFF',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//                   transition: 'transform 0.2s',
//                   textAlign: 'center',
//                   padding: '1rem'
//                 }}
//               >
//                 <div style={{
//                   fontSize: '1.5rem',
//                   marginBottom: '0.5rem',
//                   transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)',
//                   color: '#2D5D7B'
//                 }}>
//                   {section.icon}
//                 </div>
//                 <div style={{
//                   fontWeight: '700',
//                   fontSize: '0.9rem',
//                   color: '#2D5D7B'
//                 }}>
//                   {section.label.split(' ').slice(1).join(' ')}
//                 </div>
//                 {selectedSection === section.key && (
//                   <div style={{
//                     marginTop: '8px',
//                     height: '4px',
//                     background: 'linear-gradient(to right, #2D5D7B, #A62D69)'
//                   }}></div>
//                 )}
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* Render Section */}
//         <div className="mt-5">
//           {renderSection()}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ParentDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ChildProfile from './ChildProfile';
// import Attendance from './Attendance';
// import Progress from './Progress';
// import Homework from './HomeWork';
// import MockTestReports from './MockTestReports';
// import StudyPlanner from './StudyPlanner';
// import { Row, Col, Container } from 'react-bootstrap';
// import { Typewriter } from 'react-simple-typewriter';
// import { FiLogOut } from 'react-icons/fi';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const ParentDashboard = () => {
//   const [selectedSection, setSelectedSection] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const titles = {
//       profile: 'Child Profile',
//       attendance: 'Attendance',
//       grades: 'Progress',
//       homework: 'Assignments',
//       mockreports: 'Mock Tests',
//       studyplanner: 'Study Plan'
//     };

//     document.title = selectedSection && titles[selectedSection]
//       ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
//       : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
//   }, [selectedSection]);

//   const sections = [
//     { key: 'profile', label: '👶 Child Profile', icon: '👶' },
//     { key: 'attendance', label: '📊 Attendance', icon: '📊' },
//     { key: 'grades', label: '📈 Progress', icon: '📈' },
//     { key: 'homework', label: '📝 Assignments', icon: '📝' },
//     { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
//     { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
//   ];

//   const handleLogout = () => navigate('/');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'profile': return <ChildProfile />;
//       case 'attendance': return <Attendance />;
//       case 'grades': return <Progress />;
//       case 'homework': return <Homework />;
//       case 'mockreports': return <MockTestReports />;
//       case 'studyplanner': return <StudyPlanner />;
//       default:
//         return (
//           <div className="text-center mt-5">
//             <h3 style={{ color: '#888' }}>Select a section to begin</h3>
//             <div className="mt-4">
//               <div style={{
//                 width: '90%',
//                 maxWidth: '300px',
//                 height: '300px',
//                 margin: '0 auto',
//                 background: 'url(https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a551b1b9e0e8c2a770c863f8b0f6b53b.gif) center/contain no-repeat'
//               }}></div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: '#F4F8FB',
//       minHeight: '100vh',
//       padding: '1rem',
//       position: 'relative',
//       overflowX: 'hidden'
//     }}>
//       <Container fluid className="text-center" style={{ position: 'relative' }}>
//         {/* Avatar + Logout */}
//         <div className="d-flex flex-column align-items-center mt-3 mb-4">
//           <img
//             src="/images/parent2.webp"
//             alt="Parent"
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//               border: '3px solid #FFFFFF'
//             }}
//           />
//           <button onClick={handleLogout} style={{
//             marginTop: '10px',
//             background: 'transparent',
//             border: 'none',
//             color: '#A62D69',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             fontWeight: '600',
//             fontSize: '0.9rem'
//           }}>
//             <FiLogOut className="me-1" /> Logout
//           </button>
//         </div>

//         {/* Header */}
//         <div style={{ textAlign: 'center' }}>
//           <h2 style={{
//             fontWeight: '800',
//             fontSize: '2.5rem',
//             marginBottom: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '16px',
//             background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             <img
//               src={novyaLogo}
//               alt="NOVYA Logo"
//               style={{
//                 height: '100px',
//                 width: 'auto',
//                 maxWidth: '60px',
//                 objectFit: 'contain'
//               }}
//             />
//             Welcome to Parent Portal
//           </h2>

//           <p style={{
//             fontStyle: 'italic',
//             fontSize: '1.1rem',
//             color: '#222831',
//             fontWeight: '500',
//             padding: '0 10px'
//           }}>
//             <Typewriter
//               words={[
//                 "Stay engaged with your child's education...",
//                 "Track academic progress in real-time...",
//                 "Celebrate learning milestones together!",
//                 "Empower your child's educational journey"
//               ]}
//               loop
//               typeSpeed={50}
//               deleteSpeed={30}
//               delaySpeed={2000}
//             />
//           </p>
//         </div>

//         {/* Parent Tip Box — line removed */}
//         <div className="mt-4 mx-auto" style={{
//           backgroundColor: '#FFFFFF',
//           fontSize: '1rem',
//           fontWeight: '500',
//           color: '#222831',
//           boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
//           borderRadius: '12px',
//           width: '90%',
//           maxWidth: '700px',
//           padding: '1rem'
//         }}>
//           <div className="d-flex align-items-center">
//             <div style={{
//               backgroundColor: '#A62D69',
//               width: '40px',
//               height: '40px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '15px',
//               color: 'white',
//               flexShrink: 0
//             }}>
//               💖
//             </div>
//             <div>
//               <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
//               "Your engagement boosts your child's confidence and academic success. Celebrate small wins!"
//             </div>
//           </div>
//         </div>

//         {/* Section Boxes */}
//         <Row className="mt-5 justify-content-center px-3">
//           {sections.map((section) => (
//             <Col key={section.key} xs={6} sm={4} md={3} lg={2} className="mb-4">
//               <div
//                 onClick={() => setSelectedSection(section.key)}
//                 style={{
//                   cursor: 'pointer',
//                   borderRadius: '15px',
//                   overflow: 'hidden',
//                   minHeight: '100px',
//                   background: '#FFFFFF',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//                   transition: 'transform 0.2s',
//                   textAlign: 'center',
//                   padding: '1rem',
//                   border: selectedSection === section.key ? '3px solid #A62D69' : 'none',
//                   backgroundColor: selectedSection === section.key ? '#A62D69' : '#FFFFFF',
//                   color: selectedSection === section.key ? '#FFFFFF' : '#2D5D7B'
//                 }}
//               >
//                 <div style={{
//                   fontSize: '1.5rem',
//                   marginBottom: '0.5rem',
//                   transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)',
//                   transition: 'transform 0.2s ease'
//                 }}>
//                   {section.icon}
//                 </div>
//                 <div style={{
//                   fontWeight: '700',
//                   fontSize: '0.9rem'
//                 }}>
//                   {section.label.split(' ').slice(1).join(' ')}
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* Render Section */}
//         <div className="mt-5">
//           {renderSection()}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ParentDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ChildProfile from './ChildProfile';
// import Attendance from './Attendance';
// import Progress from './Progress';
// import Homework from './HomeWork';
// import MockTestReports from './MockTestReports';
// import StudyPlanner from './StudyPlanner';
// import { Row, Col, Container } from 'react-bootstrap';
// import { Typewriter } from 'react-simple-typewriter';
// import { FiLogOut } from 'react-icons/fi';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const ParentDashboard = () => {
//   const [selectedSection, setSelectedSection] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const titles = {
//       profile: 'Child Profile',
//       attendance: 'Attendance',
//       grades: 'Progress',
//       homework: 'Assignments',
//       mockreports: 'Mock Tests',
//       studyplanner: 'Study Plan'
//     };

//     document.title = selectedSection && titles[selectedSection]
//       ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
//       : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
//   }, [selectedSection]);

//   const sections = [
//     { key: 'profile', label: '👶 Child Profile', icon: '👶' },
//     { key: 'attendance', label: '📊 Attendance', icon: '📊' },
//     { key: 'grades', label: '📈 Progress', icon: '📈' },
//     { key: 'homework', label: '📝 Assignments', icon: '📝' },
//     { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
//     { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
//   ];

//   const handleLogout = () => navigate('/');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'profile': return <ChildProfile />;
//       case 'attendance': return <Attendance />;
//       case 'grades': return <Progress />;
//       case 'homework': return <Homework />;
//       case 'mockreports': return <MockTestReports />;
//       case 'studyplanner': return <StudyPlanner />;
//       default:
//         return (
//           <div className="text-center mt-5">
//             <h3 style={{ color: '#888' }}>Select a section to begin</h3>
//             <div className="mt-4">
//               <div style={{
//                 width: '90%',
//                 maxWidth: '300px',
//                 height: '300px',
//                 margin: '0 auto',
//                 background: 'url(https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a551b1b9e0e8c2a770c863f8b0f6b53b.gif) center/contain no-repeat'
//               }}></div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: '#F4F8FB',
//       minHeight: '100vh',
//       padding: '1rem',
//       position: 'relative',
//       overflowX: 'hidden'
//     }}>
//       {/* Force remove rogue pink border */}
//       <style>
//         {`
//           div[style*="border-left: 6px solid #A62D69"] {
//             border-left: none !important;
//           }
//           ::before {
//             border-left: none !important;
//           }
//         `}
//       </style>

//       <Container fluid className="text-center" style={{ position: 'relative' }}>
//         {/* Avatar + Logout */}
//         <div className="d-flex flex-column align-items-center mt-3 mb-4">
//           <img
//             src="/images/parent2.webp"
//             alt="Parent"
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//               border: '3px solid #FFFFFF'
//             }}
//           />
//           <button onClick={handleLogout} style={{
//             marginTop: '10px',
//             background: 'transparent',
//             border: 'none',
//             color: '#A62D69',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             fontWeight: '600',
//             fontSize: '0.9rem'
//           }}>
//             <FiLogOut className="me-1" /> Logout
//           </button>
//         </div>

//         {/* Header */}
//         <div style={{ textAlign: 'center' }}>
//           <h2 style={{
//             fontWeight: '800',
//             fontSize: '2.5rem',
//             marginBottom: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '16px',
//             background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             <img
//               src={novyaLogo}
//               alt="NOVYA Logo"
//               style={{
//                 height: '100px',
//                 width: 'auto',
//                 maxWidth: '60px',
//                 objectFit: 'contain'
//               }}
//             />
//             Welcome to Parent Portal
//           </h2>

//           <p style={{
//             fontStyle: 'italic',
//             fontSize: '1.1rem',
//             color: '#222831',
//             fontWeight: '500',
//             padding: '0 10px'
//           }}>
//             <Typewriter
//               words={[
//                 "Stay engaged with your child's education...",
//                 "Track academic progress in real-time...",
//                 "Celebrate learning milestones together!",
//                 "Empower your child's educational journey"
//               ]}
//               loop
//               typeSpeed={50}
//               deleteSpeed={30}
//               delaySpeed={2000}
//             />
//           </p>
//         </div>

//         {/* Parent Tip Box — line removed */}
//         <div className="mt-4 mx-auto" style={{
//           backgroundColor: '#FFFFFF',
//           fontSize: '1rem',
//           fontWeight: '500',
//           color: '#222831',
//           boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
//           borderRadius: '12px',
//           width: '90%',
//           maxWidth: '700px',
//           padding: '1rem'
//         }}>
//           <div className="d-flex align-items-center">
//             <div style={{
//               backgroundColor: '#A62D69',
//               width: '40px',
//               height: '40px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '15px',
//               color: 'white',
//               flexShrink: 0
//             }}>
//               💖
//             </div>
//             <div>
//               <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
//               "Your engagement boosts your child's confidence and academic success. Celebrate small wins!"
//             </div>
//           </div>
//         </div>

//         {/* Section Boxes */}
//         <Row className="mt-5 justify-content-center px-3">
//           {sections.map((section) => (
//             <Col key={section.key} xs={6} sm={4} md={3} lg={2} className="mb-4">
//               <div
//                 onClick={() => setSelectedSection(section.key)}
//                 style={{
//                   cursor: 'pointer',
//                   borderRadius: '15px',
//                   overflow: 'hidden',
//                   minHeight: '100px',
//                   backgroundColor: selectedSection === section.key ? '#A62D69' : '#FFFFFF',
//                   color: selectedSection === section.key ? '#FFFFFF' : '#2D5D7B',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//                   transition: 'transform 0.2s, background-color 0.3s ease, color 0.3s ease',
//                   textAlign: 'center',
//                   padding: '1rem',
//                   border: selectedSection === section.key ? '3px solid #A62D69' : 'none',
//                 }}
//               >
//                 <div style={{
//                   fontSize: '1.5rem',
//                   marginBottom: '0.5rem',
//                   transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)',
//                   transition: 'transform 0.2s ease'
//                 }}>
//                   {section.icon}
//                 </div>
//                 <div style={{
//                   fontWeight: '700',
//                   fontSize: '0.9rem'
//                 }}>
//                   {section.label.split(' ').slice(1).join(' ')}
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* Render Section */}
//         <div className="mt-5">
//           {renderSection()}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ParentDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ChildProfile from './ChildProfile';
// import Attendance from './Attendance';
// import Progress from './Progress';
// import Homework from './HomeWork';
// import MockTestReports from './MockTestReports';
// import StudyPlanner from './StudyPlanner';
// import { Row, Col, Container } from 'react-bootstrap';
// import { Typewriter } from 'react-simple-typewriter';
// import { FiLogOut } from 'react-icons/fi';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const ParentDashboard = () => {
//   const [selectedSection, setSelectedSection] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const titles = {
//       profile: 'Child Profile',
//       attendance: 'Attendance',
//       grades: 'Progress',
//       homework: 'Assignments',
//       mockreports: 'Mock Tests',
//       studyplanner: 'Study Plan'
//     };

//     document.title = selectedSection && titles[selectedSection]
//       ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
//       : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
//   }, [selectedSection]);

//   const sections = [
//     { key: 'profile', label: '👶 Child Profile', icon: '👶' },
//     { key: 'attendance', label: '📊 Attendance', icon: '📊' },
//     { key: 'grades', label: '📈 Progress', icon: '📈' },
//     { key: 'homework', label: '📝 Assignments', icon: '📝' },
//     { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
//     { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
//   ];

//   const handleLogout = () => navigate('/');

//   const renderSection = () => {
//     switch (selectedSection) {
//       case 'profile': return <ChildProfile />;
//       case 'attendance': return <Attendance />;
//       case 'grades': return <Progress />;
//       case 'homework': return <Homework />;
//       case 'mockreports': return <MockTestReports />;
//       case 'studyplanner': return <StudyPlanner />;
//       default:
//         return (
//           <div className="text-center mt-5">
//             <h3 style={{ color: '#888' }}>Select a section to begin</h3>
//             <div className="mt-4">
//               <div style={{
//                 width: '90%',
//                 maxWidth: '300px',
//                 height: '300px',
//                 margin: '0 auto',
//                 background: 'url(https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a551b1b9e0e8c2a770c863f8b0f6b53b.gif) center/contain no-repeat'
//               }}></div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{
//       backgroundColor: '#F4F8FB',
//       minHeight: '100vh',
//       padding: '1rem',
//       position: 'relative',
//       overflowX: 'hidden'
//     }}>
//       <Container fluid className="text-center" style={{ position: 'relative' }}>
//         {/* Avatar + Logout */}
//         <div className="d-flex flex-column align-items-center mt-3 mb-4">
//           <img
//             src="/images/parent2.webp"
//             alt="Parent"
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//               border: '3px solid #FFFFFF'
//             }}
//           />
//           <button onClick={handleLogout} style={{
//             marginTop: '10px',
//             background: 'transparent',
//             border: 'none',
//             color: '#A62D69',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             fontWeight: '600',
//             fontSize: '0.9rem'
//           }}>
//             <FiLogOut className="me-1" /> Logout
//           </button>
//         </div>

//         {/* Header */}
//         <div style={{ textAlign: 'center' }}>
//           <h2 style={{
//             fontWeight: '800',
//             fontSize: '2.5rem',
//             marginBottom: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: '16px',
//             background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             <img
//               src={novyaLogo}
//               alt="NOVYA Logo"
//               style={{
//                 height: '100px',
//                 width: 'auto',
//                 maxWidth: '60px',
//                 objectFit: 'contain'
//               }}
//             />
//             Welcome to Parent Portal
//           </h2>

//           <p style={{
//             fontStyle: 'italic',
//             fontSize: '1.1rem',
//             color: '#222831',
//             fontWeight: '500',
//             padding: '0 10px'
//           }}>
//             <Typewriter
//               words={[
//                 "Stay engaged with your child's education...",
//                 "Track academic progress in real-time...",
//                 "Celebrate learning milestones together!",
//                 "Empower your child's educational journey"
//               ]}
//               loop
//               typeSpeed={50}
//               deleteSpeed={30}
//               delaySpeed={2000}
//             />
//           </p>
//         </div>

//         {/* ✅ Parent Tip Box - Clean and No Border */}
//         <div style={{
//           backgroundColor: '#FFFFFF',
//           fontSize: '1rem',
//           fontWeight: 500,
//           color: '#222831',
//           boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
//           borderRadius: '12px',
//           width: '90%',
//           maxWidth: '700px',
//           padding: '1rem',
//           marginTop: '1.5rem',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//           position: 'relative',
//           overflow: 'hidden',
//           borderLeft: 'none',
//           border: 'none'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center'
//           }}>
//             <div style={{
//               backgroundColor: '#A62D69',
//               width: '40px',
//               height: '40px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '15px',
//               color: 'white',
//               flexShrink: 0
//             }}>
//               💖
//             </div>
//             <div>
//               <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
//               Your engagement boosts your child's confidence and academic success. Celebrate small wins!
//             </div>
//           </div>
//         </div>

//         {/* Section Boxes */}
//         <Row className="mt-5 justify-content-center px-3">
//           {sections.map((section) => (
//             <Col key={section.key} xs={6} sm={4} md={3} lg={2} className="mb-4">
//               <div
//                 onClick={() => setSelectedSection(section.key)}
//                 style={{
//                   cursor: 'pointer',
//                   borderRadius: '15px',
//                   overflow: 'hidden',
//                   minHeight: '100px',
//                   backgroundColor: selectedSection === section.key ? '#A62D69' : '#FFFFFF',
//                   color: selectedSection === section.key ? '#FFFFFF' : '#2D5D7B',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
//                   transition: 'transform 0.2s, background-color 0.3s ease, color 0.3s ease',
//                   textAlign: 'center',
//                   padding: '1rem',
//                   border: selectedSection === section.key ? '3px solid #A62D69' : 'none',
//                 }}
//               >
//                 <div style={{
//                   fontSize: '1.5rem',
//                   marginBottom: '0.5rem',
//                   transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)',
//                   transition: 'transform 0.2s ease'
//                 }}>
//                   {section.icon}
//                 </div>
//                 <div style={{
//                   fontWeight: '700',
//                   fontSize: '0.9rem'
//                 }}>
//                   {section.label.split(' ').slice(1).join(' ')}
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* Render Section */}
//         <div className="mt-5">
//           {renderSection()}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ParentDashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChildProfile from './ChildProfile';
import Attendance from './Attendance';
import Progress from './Progress';
import Homework from './HomeWork';
import MockTestReports from './MockTestReports';
import StudyPlanner from './StudyPlanner';
import { Row, Col, Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { FiLogOut } from 'react-icons/fi';
import novyaLogo from '../home/assets/NOVYA LOGO.png';

const ParentDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const titles = {
      profile: 'Child Profile',
      attendance: 'Attendance',
      grades: 'Progress',
      homework: 'Assignments',
      mockreports: 'Mock Tests',
      studyplanner: 'Study Plan'
    };
    document.title = selectedSection && titles[selectedSection]
      ? `${titles[selectedSection]} | NOVYA - Your Smart Learning Platform`
      : 'Parent Dashboard | NOVYA - Your Smart Learning Platform';
  }, [selectedSection]);

  const sections = [
    { key: 'profile', label: '👶 Child Profile', icon: '👶' },
    { key: 'attendance', label: '📊 Attendance', icon: '📊' },
    { key: 'grades', label: '📈 Progress', icon: '📈' },
    { key: 'homework', label: '📝 Assignments', icon: '📝' },
    { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
    { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
  ];

  const handleLogout = () => navigate('/');

  const renderSection = () => {
    switch (selectedSection) {
      case 'profile': return <ChildProfile />;
      case 'attendance': return <Attendance />;
      case 'grades': return <Progress />;
      case 'homework': return <Homework />;
      case 'mockreports': return <MockTestReports />;
      case 'studyplanner': return <StudyPlanner />;
      default:
        return (
          <div className="text-center mt-5">
            <h3 style={{ color: '#888' }}>Select a section to begin</h3>
            <div className="mt-4">
              <div style={{
                width: '90%',
                maxWidth: '300px',
                height: '300px',
                margin: '0 auto',
                background: 'url(https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a551b1b9e0e8c2a770c863f8b0f6b53b.gif) center/contain no-repeat'
              }}></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{
      backgroundColor: '#F4F8FB',
      minHeight: '100vh',
      padding: '1rem',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <Container fluid className="text-center">
        {/* Avatar + Logout */}
        <div className="d-flex flex-column align-items-center mt-3 mb-4">
          <img
            src="/images/parent2.webp"
            alt="Parent"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              border: '3px solid #FFFFFF'
            }}
          />
          <button onClick={handleLogout} style={{
            marginTop: '10px',
            background: 'transparent',
            border: 'none',
            color: '#A62D69',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}>
            <FiLogOut className="me-1" /> Logout
          </button>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontWeight: '800',
            fontSize: '2rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            flexWrap: 'wrap'
          }}>
            <img
              src={novyaLogo}
              alt="NOVYA Logo"
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            Welcome to Parent Portal
          </h2>

          <p style={{
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#222831',
            fontWeight: '500',
            padding: '0 10px'
          }}>
            <Typewriter
              words={[
                "Stay engaged with your child's education...",
                "Track academic progress in real-time...",
                "Celebrate learning milestones together!",
                "Empower your child's educational journey"
              ]}
              loop
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>
        </div>

        {/* Parent Tip Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          fontSize: '1rem',
          fontWeight: 500,
          color: '#222831',
          boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
          borderRadius: '12px',
          width: '90%',
          maxWidth: '700px',
          padding: '1rem',
          marginTop: '1.5rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: '#A62D69',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              color: 'white'
            }}>
              💖
            </div>
            <div>
              <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
              Your engagement boosts your child's confidence and academic success. Celebrate small wins!
            </div>
          </div>
        </div>

        {/* Section Boxes */}
        <Row className="mt-5 justify-content-center px-3">
          {sections.map((section) => (
            <Col key={section.key} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <div
                onClick={() => setSelectedSection(section.key)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '15px',
                  minHeight: '100px',
                  backgroundColor: selectedSection === section.key ? '#A62D69' : '#FFFFFF',
                  color: selectedSection === section.key ? '#FFFFFF' : '#2D5D7B',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  padding: '1rem',
                  border: selectedSection === section.key ? '2px solid #A62D69' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {section.icon}
                </div>
                <div style={{
                  fontWeight: '700',
                  fontSize: '0.9rem'
                }}>
                  {section.label.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Render Section Content */}
        <div className="mt-5">
          {renderSection()}
        </div>
      </Container>
    </div>
  );
};

export default ParentDashboard;
