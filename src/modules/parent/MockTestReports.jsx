
// import React from 'react';
// import { Card, Table } from 'react-bootstrap';
// import { FaChartLine, FaMedal, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';

// const mockTestData = [
//   {
//     subject: 'Mathematics',
//     date: '2025-06-20',
//     score: 88,
//     total: 100,
//     status: 'Improved',
//     trend: 'up',
//     improvement: '+12%',
//   },
//   {
//     subject: 'Science',
//     date: '2025-06-15',
//     score: 72,
//     total: 100,
//     status: 'Needs Attention',
//     trend: 'down',
//     improvement: '-5%',
//   },
//   {
//     subject: 'English',
//     date: '2025-06-10',
//     score: 91,
//     total: 100,
//     status: 'Excellent',
//     trend: 'up',
//     improvement: '+8%',
//   },
//   {
//     subject: 'Social Studies',
//     date: '2025-06-05',
//     score: 65,
//     total: 100,
//     status: 'Needs Attention',
//     trend: 'down',
//     improvement: '-3%',
//   },
// ];

// const getStatusConfig = (status) => {
//   switch (status) {
//     case 'Excellent':
//       return {
//         bgColor: 'linear-gradient(45deg, #28a745, #5dd28e)',
//         border: '#28a745',
//         textColor: '#fff',
//         icon: <FaMedal style={{ marginRight: '4px' }} />
//       };
//     case 'Improved':
//       return {
//         bgColor: 'linear-gradient(45deg, #17a2b8, #5ecdd3)',
//         border: '#17a2b8',
//         textColor: '#fff',
//         icon: <FaArrowUp style={{ marginRight: '4px' }} />
//       };
//     case 'Needs Attention':
//       return {
//         bgColor: 'linear-gradient(45deg, #ffc107, #ffd65b)',
//         border: '#ffc107',
//         textColor: '#000',
//         icon: <FaExclamationTriangle style={{ marginRight: '4px' }} />
//       };
//     default:
//       return {
//         bgColor: '#ccc',
//         border: '#999',
//         textColor: '#000',
//         icon: null
//       };
//   }
// };

// const MockTestReports = () => {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>

//       <Card style={{
//         marginBottom: '1rem',
//         borderRadius: '12px',
//         border: 'none',
//         overflow: 'hidden',
//         boxShadow: '0 1rem 3rem rgba(0,0,0,0.1)',
//         animation: 'fadeInUp 0.6s ease'
//       }}>
//         <Card.Body style={{ padding: '0' }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             padding: '1.5rem',
//             borderBottom: '1px solid rgba(0,0,0,0.05)'
//           }}>
//             <div style={{
//               backgroundColor: 'rgba(45, 93, 123, 0.1)',
//               width: '40px',
//               height: '40px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: '12px',
//               color: '#2d5d7b'
//             }}>
//               <FaChartLine />
//             </div>
//             <div>
//               <Card.Title style={{
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 margin: '0',
//                 color: '#2d5d7b'
//               }}>
//                 Mock Test Reports
//               </Card.Title>
//               <p style={{
//                 color: '#6c757d',
//                 marginBottom: '0',
//                 fontSize: '0.85rem'
//               }}>
//                 Performance summary based on recent mock tests
//               </p>
//             </div>
//           </div>

//           <div style={{ overflowX: 'auto' }}>
//             <Table style={{ width: '100%', marginBottom: 0 }}>
//               <thead style={{ backgroundColor: '#2d5d7b', color: '#fff' }}>
//                 <tr>
//                   {['Date', 'Subject', 'Score', 'Progress', 'Status', 'Trend'].map(header => (
//                     <th key={header} style={{ padding: '10px 16px', fontWeight: '500', textAlign: 'center' }}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {mockTestData.map((test, index) => {
//                   const percentage = (test.score / test.total) * 100;
//                   const status = getStatusConfig(test.status);
//                   const isUp = test.trend === 'up';

//                   return (
//                     <tr
//                       key={index}
//                       style={{
//                         animation: `fadeInUp 0.5s ease-in ${index * 0.1}s`,
//                         animationFillMode: 'both',
//                         backgroundColor: index % 2 === 0 ? '#ffffff' : '#f4f8fb',
//                         borderBottom: '1px solid rgba(0,0,0,0.05)',
//                         height: '52px'
//                       }}
//                     >
//                       <td style={{ padding: '10px', textAlign: 'center', fontWeight: 500 }}>{test.date}</td>
//                       <td style={{ padding: '10px', textAlign: 'center', fontWeight: 600 }}>{test.subject}</td>
//                       <td style={{ padding: '10px', textAlign: 'center' }}>
//                         <span style={{ fontWeight: 600 }}>{test.score}</span>
//                         <span style={{ color: '#6c757d' }}>/{test.total}</span>
//                       </td>
//                       <td style={{ padding: '10px' }}>
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                           <div style={{
//                             flex: 1,
//                             marginRight: '8px',
//                             height: '8px',
//                             borderRadius: '4px',
//                             backgroundColor: '#e9ecef'
//                           }}>
//                             <div style={{
//                               width: `${percentage}%`,
//                               height: '100%',
//                               backgroundColor: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
//                               transition: 'width 0.5s'
//                             }} />
//                           </div>
//                           <span style={{
//                             fontWeight: '600',
//                             minWidth: '40px',
//                             color: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545'
//                           }}>
//                             {Math.round(percentage)}%
//                           </span>
//                         </div>
//                       </td>
//                       <td style={{ padding: '10px', textAlign: 'center' }}>
//                         <div style={{
//                           background: status.bgColor,
//                           color: status.textColor,
//                           padding: '2px 10px',
//                           borderRadius: '20px',
//                           fontWeight: 500,
//                           fontSize: '0.8rem',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           border: `1px solid ${status.border}`,
//                           justifyContent: 'center',
//                           textShadow: status.textColor === '#fff' ? '0 1px 1px rgba(0,0,0,0.1)' : 'none',
//                           whiteSpace: 'nowrap'
//                         }}>
//                           <span style={{ marginRight: '4px', display: 'flex', alignItems: 'center' }}>
//                             {status.icon}
//                           </span>
//                           {test.status}
//                         </div>
//                       </td>
//                       <td style={{ padding: '10px', textAlign: 'center' }}>
//                         <span style={{
//                           fontWeight: 600,
//                           color: isUp ? '#28a745' : '#dc3545',
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center'
//                         }}>
//                           {isUp ? '↑' : '↓'} {test.improvement}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default MockTestReports;


import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { FaChartLine, FaMedal, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';

const mockTestData = [
  {
    subject: 'Mathematics',
    date: '2025-06-20',
    score: 88,
    total: 100,
    status: 'Improved',
    trend: 'up',
    improvement: '+12%',
  },
  {
    subject: 'Science',
    date: '2025-06-15',
    score: 72,
    total: 100,
    status: 'Needs Attention',
    trend: 'down',
    improvement: '-5%',
  },
  {
    subject: 'English',
    date: '2025-06-10',
    score: 91,
    total: 100,
    status: 'Excellent',
    trend: 'up',
    improvement: '+8%',
  },
  {
    subject: 'Social Studies',
    date: '2025-06-05',
    score: 65,
    total: 100,
    status: 'Needs Attention',
    trend: 'down',
    improvement: '-3%',
  },
];

const getStatusConfig = (status) => {
  switch (status) {
    case 'Excellent':
      return {
        bgColor: 'linear-gradient(45deg, #28a745, #5dd28e)',
        border: '#28a745',
        textColor: '#fff',
        icon: <FaMedal />,
      };
    case 'Improved':
      return {
        bgColor: 'linear-gradient(45deg, #17a2b8, #5ecdd3)',
        border: '#17a2b8',
        textColor: '#fff',
        icon: <FaArrowUp />,
      };
    case 'Needs Attention':
      return {
        bgColor: 'linear-gradient(45deg, #ffc107, #ffd65b)',
        border: '#ffc107',
        textColor: '#000',
        icon: <FaExclamationTriangle />,
      };
    default:
      return {
        bgColor: '#ccc',
        border: '#999',
        textColor: '#000',
        icon: null,
      };
  }
};

const MockTestReports = () => {
  return (
    <>
      {/* Responsive & Animation styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .responsive-title { font-size: 1rem !important; }
            .responsive-sub { font-size: 0.75rem !important; }
            .responsive-padding { padding: 1rem !important; }
            .table th, .table td { font-size: 0.85rem !important; padding: 0.75rem !important; }
          }

          @media (max-width: 480px) {
            .responsive-title { font-size: 0.95rem !important; }
            .responsive-sub { font-size: 0.7rem !important; }
            .table th, .table td { font-size: 0.8rem !important; padding: 0.6rem !important; }
          }
        `}
      </style>

      <Card style={{
        marginBottom: '1rem',
        borderRadius: '12px',
        border: 'none',
        overflow: 'hidden',
        boxShadow: '0 1rem 3rem rgba(0,0,0,0.1)',
        animation: 'fadeInUp 0.6s ease'
      }}>
        <Card.Body className="responsive-padding" style={{ padding: '1.5rem' }}>
          {/* Header */}
          <div className="d-flex align-items-center mb-3 flex-wrap">
            <div style={{
              backgroundColor: 'rgba(45, 93, 123, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2d5d7b',
              marginRight: '12px',
              flexShrink: 0
            }}>
              <FaChartLine />
            </div>
            <div>
              <Card.Title className="m-0 responsive-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#2d5d7b'
              }}>
                Mock Test Reports
              </Card.Title>
              <p className="responsive-sub mb-0" style={{
                color: '#6c757d',
                fontSize: '0.85rem'
              }}>
                Performance summary based on recent mock tests
              </p>
            </div>
          </div>

          {/* Table container with scroll on small screens */}
          <div style={{ overflowX: 'auto' }}>
            <Table responsive className="table" style={{ marginBottom: 0 }}>
              <thead style={{ backgroundColor: '#2d5d7b', color: '#fff' }}>
                <tr>
                  {['Date', 'Subject', 'Score', 'Progress', 'Status', 'Trend'].map(header => (
                    <th key={header} className="text-center py-3">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockTestData.map((test, index) => {
                  const percentage = (test.score / test.total) * 100;
                  const status = getStatusConfig(test.status);
                  const isUp = test.trend === 'up';

                  return (
                    <tr key={index} style={{
                      animation: `fadeInUp 0.5s ease-in ${index * 0.1}s`,
                      animationFillMode: 'both',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f4f8fb',
                      borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      <td className="text-center fw-medium">{test.date}</td>
                      <td className="text-center fw-bold">{test.subject}</td>
                      <td className="text-center fw-semibold">
                        {test.score}<span className="text-muted">/{test.total}</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div style={{
                            flex: 1,
                            marginRight: '8px',
                            height: '8px',
                            borderRadius: '4px',
                            backgroundColor: '#e9ecef'
                          }}>
                            <div style={{
                              width: `${percentage}%`,
                              height: '100%',
                              backgroundColor: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
                              transition: 'width 0.5s',
                              borderRadius: '4px'
                            }} />
                          </div>
                          <span style={{
                            fontWeight: 600,
                            minWidth: '40px',
                            color: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545'
                          }}>
                            {Math.round(percentage)}%
                          </span>
                        </div>
                      </td>
                      <td className="text-center">
                        <div style={{
                          background: status.bgColor,
                          color: status.textColor,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: `1px solid ${status.border}`,
                          whiteSpace: 'nowrap',
                          gap: '6px'
                        }}>
                          {status.icon}
                          {test.status}
                        </div>
                      </td>
                      <td className="text-center fw-bold" style={{ color: isUp ? '#28a745' : '#dc3545' }}>
                        {isUp ? '↑' : '↓'} {test.improvement}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MockTestReports;
