
// import React from 'react';
// import { Card, ListGroup, Badge } from 'react-bootstrap';
// import { FaBook, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';

// const Homework = () => {
//   const assignments = [
//     {
//       task: 'Math Worksheet',
//       subject: 'Mathematics',
//       status: 'Pending',
//       dueDate: 'Tomorrow',
//       description: 'Complete problems 1-20 on algebraic equations'
//     },
//     {
//       task: 'Science Project',
//       subject: 'Science',
//       status: 'Submitted',
//       dueDate: 'Yesterday',
//       description: 'Solar system model submission'
//     },
//     {
//       task: 'English Essay',
//       subject: 'English',
//       status: 'Overdue',
//       dueDate: 'Last Friday',
//       description: '500-word essay on favorite book'
//     }
//   ];

//   const getStatusDetails = (status) => {
//     switch (status) {
//       case 'Submitted':
//         return {
//           variant: 'success',
//           icon: <FaCheckCircle className="me-1" />,
//           bg: 'rgba(40, 167, 69, 0.1)',
//           border: '2px solid #28a745'
//         };
//       case 'Pending':
//         return {
//           variant: 'warning',
//           icon: <FaClock className="me-1" />,
//           bg: 'rgba(255, 193, 7, 0.1)',
//           border: '2px solid #ffc107'
//         };
//       default:
//         return {
//           variant: 'danger',
//           icon: <FaExclamationTriangle className="me-1" />,
//           bg: 'rgba(220, 53, 69, 0.1)',
//           border: '2px solid #dc3545'
//         };
//     }
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
//             color: '#2D5D7B'
//           }}>
//             <FaBook />
//           </div>
//           <Card.Title className="m-0" style={{
//             fontSize: '1.25rem',
//             fontWeight: '600',
//             color: '#222831'
//           }}>
//             Assignments
//           </Card.Title>
//         </div>

//         <ListGroup variant="flush">
//           {assignments.map((hw, idx) => {
//             const statusDetails = getStatusDetails(hw.status);
//             return (
//               <ListGroup.Item
//                 key={idx}
//                 className="p-4"
//                 style={{
//                   borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//                   transition: 'all 0.3s ease',
//                   backgroundColor: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(244, 248, 251, 0.7)'
//                 }}
//               >
//                 <div className="d-flex justify-content-between align-items-start mb-2">
//                   <div>
//                     <h6 className="mb-1" style={{
//                       fontWeight: '600',
//                       color: '#222831'
//                     }}>
//                       {hw.task}
//                     </h6>
//                     <small className="text-muted">{hw.subject}</small>
//                   </div>

//                   <Badge
//                     pill
//                     bg={statusDetails.variant}
//                     className="d-flex align-items-center justify-content-center"
//                     style={{
//                       padding: '0.6rem 1.5rem',
//                       minWidth: '110px',
//                       fontSize: '0.9rem',
//                       fontWeight: '600',
//                       borderRadius: '50px',
//                       textAlign: 'center',
//                       boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
//                       color: 'white',
//                       animation: statusDetails.variant === 'danger' ? 'glow 1.5s infinite' : 'none',
//                       gap: '0.4rem'
//                     }}
//                   >
//                     {statusDetails.icon}
//                     {hw.status}
//                   </Badge>
//                 </div>

//                 <p className="mb-2" style={{ fontSize: '0.9rem', color: '#444' }}>
//                   {hw.description}
//                 </p>

//                 <small className="text-muted">
//                   Due:{' '}
//                   <span style={{
//                     color: statusDetails.variant === 'danger' ? '#dc3545' : '#222831',
//                     fontWeight: statusDetails.variant === 'danger' ? '600' : 'normal'
//                   }}>
//                     {hw.dueDate}
//                   </span>
//                 </small>
//               </ListGroup.Item>
//             );
//           })}
//         </ListGroup>
//       </Card.Body>

//       {/* Glow animation keyframes inline */}
//       <style>{`
//         @keyframes glow {
//           0% { box-shadow: 0 0 0 rgba(220, 53, 69, 0.4); }
//           50% { box-shadow: 0 0 10px rgba(220, 53, 69, 0.7); }
//           100% { box-shadow: 0 0 0 rgba(220, 53, 69, 0.4); }
//         }
//       `}</style>
//     </Card>
//   );
// };

// export default Homework;

import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { FaBook, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';

const Homework = () => {
  const assignments = [
    {
      task: 'Math Worksheet',
      subject: 'Mathematics',
      status: 'Pending',
      dueDate: 'Tomorrow',
      description: 'Complete problems 1-20 on algebraic equations',
    },
    {
      task: 'Science Project',
      subject: 'Science',
      status: 'Submitted',
      dueDate: 'Yesterday',
      description: 'Solar system model submission',
    },
    {
      task: 'English Essay',
      subject: 'English',
      status: 'Overdue',
      dueDate: 'Last Friday',
      description: '500-word essay on favorite book',
    },
  ];

  const getStatusDetails = (status) => {
    switch (status) {
      case 'Submitted':
        return {
          variant: 'success',
          icon: <FaCheckCircle className="me-1" />,
        };
      case 'Pending':
        return {
          variant: 'warning',
          icon: <FaClock className="me-1" />,
        };
      default:
        return {
          variant: 'danger',
          icon: <FaExclamationTriangle className="me-1" />,
        };
    }
  };

  return (
    <Card className="mb-4 shadow-lg" style={{
      borderRadius: '12px',
      border: 'none',
      overflow: 'hidden',
    }}>
      <Card.Body className="p-0">
        {/* Header */}
        <div className="d-flex align-items-center p-4 pb-3 border-bottom">
          <div className="me-3 d-flex align-items-center justify-content-center rounded-circle"
            style={{
              backgroundColor: 'rgba(45, 93, 123, 0.1)',
              width: '42px',
              height: '42px',
              color: '#2D5D7B',
              flexShrink: 0,
            }}>
            <FaBook />
          </div>
          <Card.Title className="m-0 fw-semibold text-dark fs-5">
            Assignments
          </Card.Title>
        </div>

        {/* Assignment List */}
        <ListGroup variant="flush">
          {assignments.map((hw, idx) => {
            const statusDetails = getStatusDetails(hw.status);

            return (
              <ListGroup.Item
                key={idx}
                className="p-4"
                style={{
                  backgroundColor:
                    idx % 2 === 0
                      ? 'rgba(255, 255, 255, 0.9)'
                      : 'rgba(244, 248, 251, 0.9)',
                }}
              >
                {/* Task Header */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3 gap-2">
                  <div>
                    <h6 className="mb-1 fw-bold text-dark fs-6">{hw.task}</h6>
                    <small className="text-muted">{hw.subject}</small>
                  </div>

                  <Badge
                    pill
                    bg={statusDetails.variant}
                    className="d-flex align-items-center justify-content-center px-3 py-2 text-white fw-semibold"
                    style={{
                      minWidth: '100px',
                      fontSize: '0.875rem',
                      borderRadius: '50px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                      animation: hw.status === 'Overdue' ? 'glow 1.5s infinite' : 'none',
                      gap: '0.4rem',
                    }}
                  >
                    {statusDetails.icon}
                    {hw.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="mb-2 text-muted" style={{ fontSize: '0.95rem' }}>
                  {hw.description}
                </p>

                {/* Due Date */}
                <small className="text-muted">
                  Due:{' '}
                  <span
                    style={{
                      color:
                        hw.status === 'Overdue'
                          ? '#dc3545'
                          : '#222831',
                      fontWeight: hw.status === 'Overdue' ? '600' : 'normal',
                    }}
                  >
                    {hw.dueDate}
                  </span>
                </small>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>

      {/* Animation keyframes for glow effect */}
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 0 rgba(220, 53, 69, 0.4); }
          50% { box-shadow: 0 0 10px rgba(220, 53, 69, 0.7); }
          100% { box-shadow: 0 0 0 rgba(220, 53, 69, 0.4); }
        }

        @media (max-width: 768px) {
          .fs-5 { font-size: 1.15rem !important; }
          .fs-6 { font-size: 1rem !important; }
          .p-4 { padding: 1.25rem !important; }
        }

        @media (max-width: 480px) {
          .p-4 { padding: 1rem !important; }
          .fs-6 { font-size: 0.95rem !important; }
        }
      `}</style>
    </Card>
  );
};

export default Homework;
