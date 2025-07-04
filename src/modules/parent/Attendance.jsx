
// // Attendance.jsx
// import React from 'react';
// import { Card, ProgressBar, Badge } from 'react-bootstrap';
// import '../App.css';

// const Attendance = () => {
//   const totalDays = 200;
//   const presentDays = 170;
//   const absentDays = totalDays - presentDays;
//   const presentPercentage = Math.round((presentDays / totalDays) * 100);

//   let status = '';
//   let variant = '';
//   if (presentPercentage >= 90) {
//     status = 'Excellent';
//     variant = 'success';
//   } else if (presentPercentage >= 75) {
//     status = 'Good';
//     variant = 'warning';
//   } else {
//     status = 'Needs Attention';
//     variant = 'danger';
//   }

//   return (
//     <Card className="mb-3 attendance-card shadow transition-hover fade-in">
//       <Card.Body>
//         <Card.Title className="dashboard-title">Attendance</Card.Title>
//         <p><strong>Total Working Days:</strong> {totalDays}</p>
//         <p><strong>Present Days:</strong> {presentDays}</p>
//         <p><strong>Absent Days:</strong> {absentDays}</p>
//         <ProgressBar
//           now={presentPercentage}
//           label={`${presentPercentage}%`}
//           variant={variant}
//           striped
//           animated
//         />
//         <p className="mt-3">
//           <strong>Status:</strong>{' '}
//           <Badge bg={variant} className="px-3 py-2">{status}</Badge>
//         </p>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Attendance;



import React from 'react';
import { Card, ProgressBar, Badge } from 'react-bootstrap';
// import './modules/parent/styles.css';
import './styles.css';


const Attendance = () => {
  const totalDays = 200;
  const presentDays = 170;
  const absentDays = totalDays - presentDays;
  const presentPercentage = Math.round((presentDays / totalDays) * 100);

  let status = '';
  let variant = '';
  let statusEmoji = '';
  if (presentPercentage >= 90) {
    status = 'Excellent';
    variant = 'success';
    statusEmoji = '🎯';
  } else if (presentPercentage >= 75) {
    status = 'Good';
    variant = 'warning';
    statusEmoji = '👍';
  } else {
    status = 'Needs Attention';
    variant = 'danger';
    statusEmoji = '⚠️';
  }

  return (
    <Card className="mb-3 fade-in shadow-lg" style={{
      transition: 'all 0.3s ease',
      borderLeft: `5px solid var(--${variant})`
    }}>
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Card.Title className="dashboard-title m-0" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--accent)'
          }}>
            📊 Attendance Summary
          </Card.Title>
          <div className="attendance-percentage" style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: `var(--${variant})`,
            animation: 'pulse 2s infinite'
          }}>
            {presentPercentage}%
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="stat-card p-3 rounded" style={{
              backgroundColor: 'rgba(45, 93, 123, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-muted">Total Days</div>
              <div className="h4 font-weight-bold" style={{ color: 'var(--accent)' }}>{totalDays}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card p-3 rounded" style={{
              backgroundColor: 'rgba(40, 167, 69, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-muted">Present</div>
              <div className="h4 font-weight-bold text-success">{presentDays}</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card p-3 rounded" style={{
              backgroundColor: 'rgba(220, 53, 69, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="text-muted">Absent</div>
              <div className="h4 font-weight-bold text-danger">{absentDays}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span>Attendance Progress</span>
            <span>{presentDays}/{totalDays} days</span>
          </div>
          <ProgressBar
            now={presentPercentage}
            label={`${presentPercentage}%`}
            variant={variant}
            striped
            animated
            style={{
              height: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{
          backgroundColor: `var(--${variant}-light)`,
          borderLeft: `4px solid var(--${variant})`,
          animation: 'fadeIn 0.5s ease-out'
        }}>
          <div>
            <strong>Status:</strong>
            <span className="ml-2">{statusEmoji} {status}</span>
          </div>
          <Badge pill bg={variant} className="px-3 py-2" style={{
            fontSize: '0.9rem',
            animation: 'bounce 1s infinite alternate'
          }}>
            {status.toUpperCase()}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Attendance;