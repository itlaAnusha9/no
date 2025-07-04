
// import React, { useState } from 'react';
// import { Card, Table, Button, Badge } from 'react-bootstrap';
// import { FaCalendarAlt, FaCheckCircle, FaRegCircle, FaPlay, FaBook, FaGraduationCap } from 'react-icons/fa';
// import '../App.css';

// const StudyPlanner = () => {
//   const [planner, setPlanner] = useState([
//     {
//       date: '2025-07-01',
//       subject: 'Mathematics',
//       topic: 'Fractions',
//       videoLink: 'https://www.youtube.com/watch?v=xyz123',
//       completed: true,
//     },
//     {
//       date: '2025-07-02',
//       subject: 'Science',
//       topic: 'Water Cycle',
//       videoLink: 'https://www.youtube.com/watch?v=abc456',

//       completed: false,
//     },
//     {
//       date: '2025-07-03',
//       subject: 'English',
//       topic: 'Essay Writing',
//       videoLink: '',
//       completed: false,
//     },
//     {
//       date: '2025-07-04',
//       subject: 'Social Studies',
//       topic: 'Types of Government',
//       videoLink: 'https://www.youtube.com/watch?v=gov789',
//       completed: true,
//     },
//   ]);

//   const toggleStatus = (index) => {
//     const updated = [...planner];
//     updated[index].completed = !updated[index].completed;
//     setPlanner(updated);
//   };

//   return (
//     <Card className="mb-3 fade-in shadow-lg" style={{
//       borderRadius: '12px',
//       border: 'none',
//       transition: 'all 0.3s ease',
//       overflow: 'hidden'
//     }}>
//       <Card.Body className="p-0">
//         <div className="d-flex align-items-center p-4 pb-3" style={{
//           borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
//         }}>
//           <div style={{
//             backgroundColor: 'rgba(45, 93, 123, 0.1)',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '12px',
//             color: 'var(--accent)'
//           }}>
//             <FaGraduationCap />
//           </div>
//           <div>
//             <Card.Title className="dashboard-title m-0" style={{
//               fontSize: '1.25rem',
//               fontWeight: '600'
//             }}>
//               Study Planner
//             </Card.Title>
//             <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
//               Daily study plan with recordings and status tracking
//             </p>
//           </div>
//         </div>

//         <div className="table-responsive">
//           <Table borderless className="mb-0">
//             <thead style={{ 
//               backgroundColor: 'var(--accent)',
//               color: 'white'
//             }}>
//               <tr>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaCalendarAlt className="me-1" /> Date</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaBook className="me-1" /> Subject</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Topic</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Resources</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {planner.map((item, idx) => (
//                 <tr 
//                   key={idx}
//                   className="fade-in-row"
//                   style={{
//                     animationDelay: `${idx * 0.1}s`,
//                     borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//                     transition: 'all 0.3s ease',
//                     backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.05)' : 'transparent'
//                   }}
//                 >
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
//                     {item.date}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '600' }}>
//                     {item.subject}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.topic}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.videoLink ? (
//                       <Button
//                         variant="link"
//                         href={item.videoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-0 d-flex align-items-center"
//                         style={{
//                           color: 'var(--accent)',
//                           textDecoration: 'none',
//                           fontWeight: '500'
//                         }}
//                       >
//                         <FaPlay className="me-1" />
//                         Watch Video
//                       </Button>
//                     ) : (
//                       <Badge 
//                         pill
//                         style={{
//                           backgroundColor: 'rgba(108, 117, 125, 0.1)',
//                           color: '#6c757d',
//                           fontWeight: '500',
//                           padding: '5px 10px'
//                         }}
//                       >
//                         No Video
//                       </Badge>
//                     )}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     <Badge 
//                       pill
//                       style={{
//                         backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
//                         color: item.completed ? '#28a745' : '#ffc107',
//                         border: `1px solid ${item.completed ? '#28a745' : '#ffc107'}`,
//                         fontWeight: '600',
//                         padding: '5px 10px',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}
//                     >
//                       {item.completed ? (
//                         <FaCheckCircle className="me-1" />
//                       ) : (
//                         <FaRegCircle className="me-1" />
//                       )}
//                       {item.completed ? 'Completed' : 'Pending'}
//                     </Badge>
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     <Button
//                       size="sm"
//                       variant={item.completed ? 'outline-danger' : 'outline-success'}
//                       onClick={() => toggleStatus(idx)}
//                       style={{
//                         borderRadius: '20px',
//                         fontWeight: '500',
//                         padding: '5px 15px',
//                         transition: 'all 0.3s ease',
//                         borderWidth: '2px'
//                       }}
//                     >
//                       {item.completed ? 'Undo' : 'Complete'}
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>

//         <div className="p-3 text-center" style={{
//           backgroundColor: 'rgba(45, 93, 123, 0.05)'
//         }}>
//           <button className="btn btn-link" style={{
//             color: 'var(--accent)',
//             fontWeight: '600',
//             textDecoration: 'none'
//           }}>
//             View Full Study Plan →
//           </button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default StudyPlanner;


// import React, { useState } from 'react';
// import { Card, Table, Button, Badge } from 'react-bootstrap';
// import { FaCalendarAlt, FaCheckCircle, FaRegCircle, FaPlay, FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';
// import '../App.css';

// const StudyPlanner = () => {
//   const [planner, setPlanner] = useState([
//     {
//       date: '2025-07-01',
//       subject: 'Mathematics',
//       topic: 'Fractions',
//       videoLink: 'https://www.youtube.com/watch?v=xyz123',
//       completed: true,
//       duration: '45 mins'
//     },
//     {
//       date: '2025-07-02',
//       subject: 'Science',
//       topic: 'Water Cycle',
//       videoLink: 'https://www.youtube.com/watch?v=abc456',
//       completed: false,
//       duration: '60 mins'
//     },
//     {
//       date: '2025-07-03',
//       subject: 'English',
//       topic: 'Essay Writing',
//       videoLink: '',
//       completed: false,
//       duration: '90 mins'
//     },
//     {
//       date: '2025-07-04',
//       subject: 'Social Studies',
//       topic: 'Types of Government',
//       videoLink: 'https://www.youtube.com/watch?v=gov789',
//       completed: true,
//       duration: '30 mins'
//     },
//   ]);

//   const toggleStatus = (index) => {
//     const updated = [...planner];
//     updated[index].completed = !updated[index].completed;
//     setPlanner(updated);
//   };

//   return (
//     <Card className="mb-3 fade-in shadow-lg" style={{
//       borderRadius: '12px',
//       border: 'none',
//       transition: 'all 0.3s ease',
//       overflow: 'hidden'
//     }}>
//       <Card.Body className="p-0">
//         <div className="d-flex align-items-center p-4 pb-3" style={{
//           borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
//         }}>
//           <div style={{
//             backgroundColor: 'rgba(45, 93, 123, 0.1)',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '12px',
//             color: 'var(--accent)'
//           }}>
//             <FaGraduationCap />
//           </div>
//           <div>
//             <Card.Title className="dashboard-title m-0" style={{
//               fontSize: '1.25rem',
//               fontWeight: '600'
//             }}>
//               Study Planner
//             </Card.Title>
//             <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
//               Daily study plan with recordings and status tracking
//             </p>
//           </div>
//         </div>

//         <div className="table-responsive">
//           <Table borderless className="mb-0">
//             <thead style={{ 
//               backgroundColor: 'var(--accent)',
//               color: 'white'
//             }}>
//               <tr>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaCalendarAlt className="me-1" /> Date</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaBook className="me-1" /> Subject</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Topic</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Resources</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Duration</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {planner.map((item, idx) => (
//                 <tr 
//                   key={idx}
//                   className="fade-in-row"
//                   style={{
//                     animationDelay: `${idx * 0.1}s`,
//                     borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//                     transition: 'all 0.3s ease',
//                     backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.05)' : 'transparent'
//                   }}
//                 >
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
//                     {item.date}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '600' }}>
//                     {item.subject}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.topic}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.videoLink ? (
//                       <Button
//                         variant="link"
//                         href={item.videoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-0 d-flex align-items-center"
//                         style={{
//                           color: 'var(--accent)',
//                           textDecoration: 'none',
//                           fontWeight: '500'
//                         }}
//                       >
//                         <FaPlay className="me-1" />
//                         Watch Video
//                       </Button>
//                     ) : (
//                       <Badge 
//                         pill
//                         style={{
//                           backgroundColor: 'rgba(108, 117, 125, 0.1)',
//                           color: '#6c757d',
//                           fontWeight: '500',
//                           padding: '5px 10px'
//                         }}
//                       >
//                         No Video
//                       </Badge>
//                     )}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     <Badge 
//                       pill
//                       style={{
//                         backgroundColor: 'rgba(13, 110, 253, 0.1)',
//                         color: '#0d6efd',
//                         fontWeight: '500',
//                         padding: '5px 10px',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}
//                     >
//                       <FaClock className="me-1" />
//                       {item.duration}
//                     </Badge>
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     <Badge 
//                       pill
//                       style={{
//                         backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
//                         color: item.completed ? '#28a745' : '#ffc107',
//                         border: `1px solid ${item.completed ? '#28a745' : '#ffc107'}`,
//                         fontWeight: '600',
//                         padding: '5px 10px',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}
//                     >
//                       {item.completed ? (
//                         <FaCheckCircle className="me-1" />
//                       ) : (
//                         <FaRegCircle className="me-1" />
//                       )}
//                       {item.completed ? 'Completed' : 'Pending'}
//                     </Badge>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default StudyPlanner;

// import React, { useState } from 'react';
// import { Card, Table, Button, Badge } from 'react-bootstrap';
// import { FaCalendarAlt, FaCheckCircle, FaRegCircle, FaPlay, FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';
// import '../App.css';

// const StudyPlanner = () => {
//   const [planner, setPlanner] = useState([
//     {
//       date: '2025-07-01',
//       subject: 'Mathematics',
//       topic: 'Fractions',
//       videoLink: 'https://www.youtube.com/watch?v=xyz123',
//       completed: true,
//       duration: '45 mins'
//     },
//     {
//       date: '2025-07-02',
//       subject: 'Science',
//       topic: 'Water Cycle',
//       videoLink: 'https://www.youtube.com/watch?v=abc456',
//       completed: false,
//       duration: '60 mins'
//     },
//     {
//       date: '2025-07-03',
//       subject: 'English',
//       topic: 'Essay Writing',
//       videoLink: '',
//       completed: false,
//       duration: '90 mins'
//     },
//     {
//       date: '2025-07-04',
//       subject: 'Social Studies',
//       topic: 'Types of Government',
//       videoLink: 'https://www.youtube.com/watch?v=gov789',
//       completed: true,
//       duration: '30 mins'
//     },
//   ]);

//   const toggleStatus = (index) => {
//     const updated = [...planner];
//     updated[index].completed = !updated[index].completed;
//     setPlanner(updated);
//   };

//   return (
//     <Card className="mb-3 fade-in shadow-lg" style={{
//       borderRadius: '12px',
//       border: 'none',
//       transition: 'all 0.3s ease',
//       overflow: 'hidden'
//     }}>
//       <Card.Body className="p-0">
//         <div className="d-flex align-items-center p-4 pb-3" style={{
//           borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
//         }}>
//           <div style={{
//             backgroundColor: 'rgba(45, 93, 123, 0.1)',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '12px',
//             color: 'var(--accent)'
//           }}>
//             <FaGraduationCap />
//           </div>
//           <div>
//             <Card.Title className="dashboard-title m-0" style={{
//               fontSize: '1.25rem',
//               fontWeight: '600'
//             }}>
//               Study Planner
//             </Card.Title>
//             <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
//               Daily study plan with recordings and status tracking
//             </p>
//           </div>
//         </div>

//         <div className="table-responsive">
//           <Table borderless className="mb-0">
//             <thead style={{ 
//               backgroundColor: 'var(--accent)',
//               color: 'white'
//             }}>
//               <tr>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaCalendarAlt className="me-1" /> Date</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaBook className="me-1" /> Subject</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Topic</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Resources</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Duration</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {planner.map((item, idx) => (
//                 <tr 
//                   key={idx}
//                   className="fade-in-row"
//                   style={{
//                     animationDelay: `${idx * 0.1}s`,
//                     borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//                     transition: 'all 0.3s ease',
//                     backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.05)' : 'transparent'
//                   }}
//                 >
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
//                     {item.date}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '600' }}>
//                     {item.subject}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.topic}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     {item.videoLink ? (
//                       <Button
//                         variant="link"
//                         href={item.videoLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-0 d-flex align-items-center"
//                         style={{
//                           color: 'var(--accent)',
//                           textDecoration: 'none',
//                           fontWeight: '500'
//                         }}
//                       >
//                         <FaPlay className="me-1" />
//                         Watch Video
//                       </Button>
//                     ) : (
//                       <Badge 
//                         pill
//                         style={{
//                           backgroundColor: 'rgba(108, 117, 125, 0.1)',
//                           color: '#6c757d',
//                           fontWeight: '500',
//                           padding: '5px 10px'
//                         }}
//                       >
//                         No Video
//                       </Badge>
//                     )}
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
//                     <div className="d-flex align-items-center">
//                       <FaClock className="me-2" style={{ color: '#6c757d' }} />
//                       {item.duration}
//                     </div>
//                   </td>
//                   <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                     <Badge 
//                       pill
//                       style={{
//                         backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
//                         color: item.completed ? '#28a745' : '#ffc107',
//                         border: `1px solid ${item.completed ? '#28a745' : '#ffc107'}`,
//                         fontWeight: '600',
//                         padding: '5px 10px',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}
//                     >
//                       {item.completed ? (
//                         <FaCheckCircle className="me-1" />
//                       ) : (
//                         <FaRegCircle className="me-1" />
//                       )}
//                       {item.completed ? 'Completed' : 'Pending'}
//                     </Badge>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default StudyPlanner;




import React, { useState } from 'react';
import { Card, Table, Button, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaCheckCircle, FaRegCircle, FaPlay, FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';
import './styles.css';
const StudyPlanner = () => {
  const [planner] = useState([
    {
      date: '2025-07-01',
      subject: 'Mathematics',
      topic: 'Fractions',
      videoLink: 'https://www.youtube.com/watch?v=xyz123',
      completed: true,
      duration: '45 mins'
    },
    {
      date: '2025-07-02',
      subject: 'Science',
      topic: 'Water Cycle',
      videoLink: 'https://www.youtube.com/watch?v=abc456',
      completed: false,
      duration: '60 mins'
    },
    {
      date: '2025-07-03',
      subject: 'English',
      topic: 'Essay Writing',
      videoLink: '',
      completed: false,
      duration: '90 mins'
    },
    {
      date: '2025-07-04',
      subject: 'Social Studies',
      topic: 'Types of Government',
      videoLink: 'https://www.youtube.com/watch?v=gov789',
      completed: true,
      duration: '30 mins'
    },
  ]);

  return (
    <Card className="mb-3 fade-in shadow-lg" style={{
      borderRadius: '12px',
      border: 'none',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    }}>
      <Card.Body className="p-0">
        <div className="d-flex align-items-center p-4 pb-3" style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            backgroundColor: 'rgba(45, 93, 123, 0.1)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            color: 'var(--accent)'
          }}>
            <FaGraduationCap />
          </div>
          <div>
            <Card.Title className="dashboard-title m-0" style={{
              fontSize: '1.25rem',
              fontWeight: '600'
            }}>
              Study Planner
            </Card.Title>
            <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
              Daily study plan with recordings and status tracking
            </p>
          </div>
        </div>

        <div className="table-responsive">
          <Table borderless className="mb-0">
            <thead style={{ 
              backgroundColor: 'var(--accent)',
              color: 'white'
            }}>
              <tr>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaCalendarAlt className="me-1" /> Date</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}><FaBook className="me-1" /> Subject</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Topic</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Resources</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Duration</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {planner.map((item, idx) => (
                <tr 
                  key={idx}
                  className="fade-in-row"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.05)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
                    {item.date}
                  </td>
                  <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '600' }}>
                    {item.subject}
                  </td>
                  <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                    {item.topic}
                  </td>
                  <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                    {item.videoLink ? (
                      <Button
                        variant="link"
                        href={item.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-0 d-flex align-items-center"
                        style={{
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}
                      >
                        <FaPlay className="me-1" />
                        Watch Video
                      </Button>
                    ) : (
                      <Badge 
                        pill
                        style={{
                          backgroundColor: 'rgba(108, 117, 125, 0.1)',
                          color: '#6c757d',
                          fontWeight: '500',
                          padding: '5px 10px'
                        }}
                      >
                        No Video
                      </Badge>
                    )}
                  </td>
                  <td style={{ padding: '16px', verticalAlign: 'middle', fontWeight: '500' }}>
                    <div className="d-flex align-items-center">
                      <FaClock className="me-2" style={{ color: '#6c757d' }} />
                      {item.duration}
                    </div>
                  </td>
                  <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                    <Badge 
                      pill
                      style={{
                        backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                        color: item.completed ? '#28a745' : '#ffc107',
                        border: `1px solid ${item.completed ? '#28a745' : '#ffc107'}`,
                        fontWeight: '600',
                        padding: '5px 10px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.completed ? (
                        <FaCheckCircle className="me-1" />
                      ) : (
                        <FaRegCircle className="me-1" />
                      )}
                      {item.completed ? 'Completed' : 'Pending'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudyPlanner;