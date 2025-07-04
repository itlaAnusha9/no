



import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { FaBook, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';
// import './modules/parent/styles.css';
import './styles.css';



const Homework = () => {
  const assignments = [
    { 
      task: 'Math Worksheet', 
      subject: 'Mathematics',
      status: 'Pending', 
      dueDate: 'Tomorrow',
      description: 'Complete problems 1-20 on algebraic equations'
    },
    { 
      task: 'Science Project', 
      subject: 'Science',
      status: 'Submitted', 
      dueDate: 'Yesterday',
      description: 'Solar system model submission'
    },
    { 
      task: 'English Essay', 
      subject: 'English',
      status: 'Overdue', 
      dueDate: 'Last Friday',
      description: '500-word essay on favorite book'
    }
  ];

  const getStatusDetails = (status) => {
    switch(status) {
      case 'Submitted':
        return {
          variant: 'success',
          icon: <FaCheckCircle className="me-1" />,
          bg: 'rgba(40, 167, 69, 0.1)',
          border: '2px solid #28a745'
        };
      case 'Pending':
        return {
          variant: 'warning',
          icon: <FaClock className="me-1" />,
          bg: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid #ffc107'
        };
      default:
        return {
          variant: 'danger',
          icon: <FaExclamationTriangle className="me-1" />,
          bg: 'rgba(220, 53, 69, 0.1)',
          border: '2px solid #dc3545'
        };
    }
  };

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
            <FaBook />
          </div>
          <Card.Title className="dashboard-title m-0" style={{
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            Assignments
          </Card.Title>
        </div>

        <ListGroup variant="flush">
          {assignments.map((hw, idx) => {
            const statusDetails = getStatusDetails(hw.status);
            return (
              <ListGroup.Item 
                key={idx} 
                className="p-4"
                style={{
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  backgroundColor: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(244, 248, 251, 0.7)'
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="mb-1" style={{ 
                      fontWeight: '600',
                      color: 'var(--text-color)'
                    }}>
                      {hw.task}
                    </h6>
                    <small className="text-muted">{hw.subject}</small>
                  </div>
                  <Badge 
                    pill 
                    bg={statusDetails.variant}
                    className="px-3 py-2 d-flex align-items-center"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      animation: statusDetails.variant === 'danger' ? 'pulse 1.5s infinite' : 'none'
                    }}
                  >
                    {statusDetails.icon}
                    {hw.status}
                  </Badge>
                </div>
                
                <p className="mb-2" style={{ fontSize: '0.9rem' }}>
                  {hw.description}
                </p>
                
                <small className="text-muted">
                  Due: <span style={{ 
                    color: statusDetails.variant === 'danger' ? '#dc3545' : 'inherit',
                    fontWeight: statusDetails.variant === 'danger' ? '600' : 'normal'
                  }}>
                    {hw.dueDate}
                  </span>
                </small>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Homework;