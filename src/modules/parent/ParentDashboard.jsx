


import React, { useState } from 'react';
import ChildProfile from './ChildProfile';
import Attendance from './Attendance';
import Progress from './Progress';
import Homework from './HomeWork';
import Fees from './Fees';
import MockTestReports from './MockTestReports';
import StudyPlanner from './StudyPlanner';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
// import './modules/parent/styles.css';
import './styles.css';


const ParentDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const sections = [
    { key: 'profile', label: '👶 Child Profile', icon: '👶', color: '#FF9AA2' },
    { key: 'attendance', label: '📊 Attendance', icon: '📊', color: '#FFB7B2' },
    { key: 'grades', label: '📈 Progress', icon: '📈', color: '#FFDAC1' },
    { key: 'homework', label: '📝 Assignments', icon: '📝', color: '#E2F0CB' },
    { key: 'fees', label: '💰 Fee Status', icon: '💰', color: '#B5EAD7' },
    { key: 'mockreports', label: '📄 Mock Tests', icon: '📄', color: '#C7CEEA' },
    { key: 'studyplanner', label: '📅 Study Plan', icon: '📅', color: '#F8C8DC' }
  ];

  const renderSection = () => {
    switch (selectedSection) {
      case 'profile': return <ChildProfile />;
      case 'attendance': return <Attendance />;
      case 'grades': return <Progress />;
      case 'homework': return <Homework />;
      case 'fees': return <Fees />;
      case 'mockreports': return <MockTestReports />;
      case 'studyplanner': return <StudyPlanner />;
      default: return (
        <div className="text-center py-5 fade-in">
          <h3 className="text-muted">Select a section to begin</h3>
          <div className="mt-4">
            <div style={{ 
              width: '300px', 
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
    <div
      style={{
        backgroundColor: '#F4F8FB',
        minHeight: '100vh',
        padding: '2rem',
        position: 'relative'
      }}
    >
      {/* Parent Avatar */}
      <div className="fade-in" style={{
        position: 'absolute',
        top: '20px',
        right: '30px',
        zIndex: 2
      }}>
        <img
          src="/images/parent.jpg"
          alt="Parent"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            border: '3px solid white'
          }}
        />
      </div>

      <div className="position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="text-center fade-in">
          <h2
            className="dashboard-title mb-3"
            style={{ 
              fontWeight: '800', 
              color: '#2D5D7B',
              fontSize: '2.5rem',
              textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ 
              background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome to Parent Portal
            </span>
          </h2>

          <p
            className="text-muted mb-4"
            style={{
              fontStyle: 'italic',
              fontSize: '1.5rem',
              minHeight: '50px',
              color: '#222831',
              fontWeight: '500'
            }}
          >
            <Typewriter
              words={[
                "Stay engaged with your child's education...",
                "Track academic progress in real-time...",
                "Celebrate learning milestones together!",
                "Empower your child's educational journey"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>

          <div className="fade-in">
            <Alert
              variant="light"
              className="mx-auto w-75"
              style={{
                backgroundColor: 'rgba(255, 233, 242, 0.7)',
                borderLeft: '6px solid #A62D69',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#222831',
                boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
                borderRadius: '12px',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0'
              }}
            >
              <div className="d-flex align-items-center">
                <div style={{
                  backgroundColor: '#A62D69',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '15px',
                  color: 'white',
                  flexShrink: 0
                }}>
                  💖
                </div>
                <div>
                  <strong style={{ color: '#A62D69' }}>Parent Tip:</strong>{' '}
                  "Your engagement boosts your child's confidence and academic success. Celebrate small wins!"
                </div>
              </div>
            </Alert>
          </div>
        </div>

        {/* Section Boxes */}
        <div className="mt-5 slide-up">
          <Row className="g-4 justify-content-center">
            {sections.map((section, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={section.key}>
                <div
                  className="card-hover"
                  onClick={() => setSelectedSection(section.key)}
                >
                  <Card
                    className={`text-center dashboard-card ${
                      selectedSection === section.key ? 'card-selected' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${section.color} 0%, #ffffff 100%)`,
                      borderRadius: '15px',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                      border: 'none',
                      cursor: 'pointer',
                      minHeight: '120px',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {selectedSection === section.key && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255,255,255,0.2)',
                        zIndex: 0
                      }}></div>
                    )}
                    <Card.Body className="d-flex flex-column justify-content-center" style={{ zIndex: 1 }}>
                      <div style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem',
                        transition: 'all 0.3s ease',
                        transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)'
                      }}>
                        {section.icon}
                      </div>
                      <Card.Title
                        style={{
                          fontWeight: '600',
                          fontSize: '1rem',
                          color: selectedSection === section.key ? '#2D5D7B' : '#222831',
                          marginBottom: '0'
                        }}
                      >
                        {section.label.split(' ').slice(1).join(' ')}
                      </Card.Title>
                    </Card.Body>
                    {selectedSection === section.key && (
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: '#A62D69',
                        animation: 'pulse 2s infinite'
                      }}></div>
                    )}
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Render selected section */}
        <div className="mt-5 fade-in">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;








