

// import React from 'react';
// import { Card, Table, ProgressBar, Badge } from 'react-bootstrap';
// import { FaChartLine, FaMedal, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';
// import '../App.css';

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
//         variant: 'success',
//         icon: <FaMedal className="me-1" />,
//         bgColor: 'rgba(40, 167, 69, 0.1)',
//         textColor: '#28a745'
//       };
//     case 'Improved':
//       return {
//         variant: 'info',
//         icon: <FaArrowUp className="me-1" />,
//         bgColor: 'rgba(23, 162, 184, 0.1)',
//         textColor: '#17a2b8'
//       };
//     case 'Needs Attention':
//       return {
//         variant: 'warning',
//         icon: <FaExclamationTriangle className="me-1" />,
//         bgColor: 'rgba(255, 193, 7, 0.1)',
//         textColor: '#ffc107'
//       };
//     default:
//       return {
//         variant: 'secondary',
//         icon: null,
//         bgColor: 'rgba(108, 117, 125, 0.1)',
//         textColor: '#6c757d'
//       };
//   }
// };

// const MockTestReports = () => {
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
//             <FaChartLine />
//           </div>
//           <div>
//             <Card.Title className="dashboard-title m-0" style={{
//               fontSize: '1.25rem',
//               fontWeight: '600'
//             }}>
//               Mock Test Reports
//             </Card.Title>
//             <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
//               Performance summary based on recent mock tests
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
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Date</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Subject</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Score</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Progress</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
//                 <th style={{ padding: '12px 16px', fontWeight: '500' }}>Trend</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mockTestData.map((test, index) => {
//                 const percentage = (test.score / test.total) * 100;
//                 const statusConfig = getStatusConfig(test.status);
//                 const isImproving = test.trend === 'up';
                
//                 return (
//                   <tr 
//                     key={index}
//                     className="fade-in-row"
//                     style={{
//                       animationDelay: `${index * 0.1}s`,
//                       borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//                       transition: 'all 0.3s ease'
//                     }}
//                   >
//                     <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                       <div style={{ fontWeight: '500' }}>{test.date}</div>
//                     </td>
//                     <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                       <div style={{ fontWeight: '600' }}>{test.subject}</div>
//                     </td>
//                     <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                       <div>
//                         <span style={{ fontWeight: '600' }}>{test.score}</span>
//                         <span className="text-muted">/{test.total}</span>
//                       </div>
//                     </td>
//                     <td style={{ padding: '16px', verticalAlign: 'middle', minWidth: '150px' }}>
//                       <div className="d-flex align-items-center">
//                         <ProgressBar
//                           now={percentage}
//                           variant={percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'danger'}
//                           style={{
//                             height: '8px',
//                             flex: 1,
//                             marginRight: '8px',
//                             borderRadius: '4px'
//                           }}
//                         />
//                         <span style={{ 
//                           fontWeight: '600',
//                           color: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
//                           minWidth: '40px'
//                         }}>
//                           {Math.round(percentage)}%
//                         </span>
//                       </div>
//                     </td>
//                     <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                       <Badge 
//                         pill 
//                         style={{
//                           backgroundColor: statusConfig.bgColor,
//                           color: statusConfig.textColor,
//                           fontWeight: '600',
//                           padding: '6px 12px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           border: `1px solid ${statusConfig.textColor}`
//                         }}
//                       >
//                         {statusConfig.icon}
//                         {test.status}
//                       </Badge>
//                     </td>
//                     <td style={{ padding: '16px', verticalAlign: 'middle' }}>
//                       <div style={{
//                         color: isImproving ? '#28a745' : '#dc3545',
//                         fontWeight: '600',
//                         display: 'flex',
//                         alignItems: 'center'
//                       }}>
//                         {isImproving ? '↑' : '↓'} {test.improvement}
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
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
//             View Detailed Analysis →
//           </button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default MockTestReports;

//The "Trend" shows whether a student’s performance is improving or declining compared to their previous test.



import React from 'react';
import { Card, Table, ProgressBar, Badge } from 'react-bootstrap';
import { FaChartLine, FaMedal, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';
// import './modules/parent/styles.css';
import './styles.css';



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
        variant: 'success',
        icon: <FaMedal className="me-1" />,
        bgColor: 'rgba(40, 167, 69, 0.1)',
        textColor: '#28a745'
      };
    case 'Improved':
      return {
        variant: 'info',
        icon: <FaArrowUp className="me-1" />,
        bgColor: 'rgba(23, 162, 184, 0.1)',
        textColor: '#17a2b8'
      };
    case 'Needs Attention':
      return {
        variant: 'warning',
        icon: <FaExclamationTriangle className="me-1" />,
        bgColor: 'rgba(255, 193, 7, 0.1)',
        textColor: '#ffc107'
      };
    default:
      return {
        variant: 'secondary',
        icon: null,
        bgColor: 'rgba(108, 117, 125, 0.1)',
        textColor: '#6c757d'
      };
  }
};

const MockTestReports = () => {
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
            <FaChartLine />
          </div>
          <div>
            <Card.Title className="dashboard-title m-0" style={{
              fontSize: '1.25rem',
              fontWeight: '600'
            }}>
              Mock Test Reports
            </Card.Title>
            <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
              Performance summary based on recent mock tests
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
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Date</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Subject</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Score</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Progress</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Status</th>
                <th style={{ padding: '12px 16px', fontWeight: '500' }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {mockTestData.map((test, index) => {
                const percentage = (test.score / test.total) * 100;
                const statusConfig = getStatusConfig(test.status);
                const isImproving = test.trend === 'up';
                
                return (
                  <tr 
                    key={index}
                    className="fade-in-row"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div style={{ fontWeight: '500' }}>{test.date}</div>
                    </td>
                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div style={{ fontWeight: '600' }}>{test.subject}</div>
                    </td>
                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div>
                        <span style={{ fontWeight: '600' }}>{test.score}</span>
                        <span className="text-muted">/{test.total}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', verticalAlign: 'middle', minWidth: '150px' }}>
                      <div className="d-flex align-items-center">
                        <ProgressBar
                          now={percentage}
                          variant={percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'danger'}
                          style={{
                            height: '8px',
                            flex: 1,
                            marginRight: '8px',
                            borderRadius: '4px'
                          }}
                        />
                        <span style={{ 
                          fontWeight: '600',
                          color: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
                          minWidth: '40px'
                        }}>
                          {Math.round(percentage)}%
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <Badge 
                        pill 
                        style={{
                          backgroundColor: statusConfig.bgColor,
                          color: statusConfig.textColor,
                          fontWeight: '600',
                          padding: '6px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          border: `1px solid ${statusConfig.textColor}`
                        }}
                      >
                        {statusConfig.icon}
                        {test.status}
                      </Badge>
                    </td>
                    <td style={{ padding: '16px', verticalAlign: 'middle' }}>
                      <div style={{
                        color: isImproving ? '#28a745' : '#dc3545',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {isImproving ? '↑' : '↓'} {test.improvement}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MockTestReports;