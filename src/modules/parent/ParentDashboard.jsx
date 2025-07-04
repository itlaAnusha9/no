

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChildProfile from './ChildProfile';
import Attendance from './Attendance';
import Progress from './Progress';
import Homework from './HomeWork';
import Fees from './Fees';
import MockTestReports from './MockTestReports';
import StudyPlanner from './StudyPlanner';
import { Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { FiLogOut } from 'react-icons/fi';

const ParentDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const navigate = useNavigate();

  const sections = [
    { key: 'profile', label: '👶 Child Profile', icon: '👶' },
    { key: 'attendance', label: '📊 Attendance', icon: '📊' },
    { key: 'grades', label: '📈 Progress', icon: '📈' },
    { key: 'homework', label: '📝 Assignments', icon: '📝' },
    { key: 'fees', label: '💰 Fee Status', icon: '💰' },
    { key: 'mockreports', label: '📄 Mock Tests', icon: '📄' },
    { key: 'studyplanner', label: '📅 Study Plan', icon: '📅' }
  ];

  const handleLogout = () => {
    navigate('/');
  };

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
        <div style={{
          textAlign: 'center',
          padding: '3rem 0',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          <h3 style={{ color: '#6c757d' }}>Select a section to begin</h3>
          <div style={{ marginTop: '1.5rem' }}>
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
    <div style={{
      backgroundColor: '#F4F8FB',
      minHeight: '100vh',
      padding: '2rem',
      position: 'relative'
    }}>
      {/* Parent Avatar with Logout */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '30px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <img
          src="/images/parent2.webp"
          alt="Parent"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            border: '3px solid #FFFFFF',
            backgroundColor: '#FFFFFF'
          }}
        />
        <button 
          onClick={handleLogout}
          style={{
            marginTop: '15px',
            background: 'transparent',
            border: 'none',
            color: '#A62D69',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          <FiLogOut style={{ marginRight: '5px' }} /> Logout
        </button>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          <h2 style={{ 
            fontWeight: '800', 
            color: '#2D5D7B',
            fontSize: '2.5rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
            marginBottom: '1rem'
          }}>
            <span style={{ 
              background: 'linear-gradient(45deg, #2D5D7B, #A62D69)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome to Parent Portal
            </span>
          </h2>

          <p style={{
            fontStyle: 'italic',
            fontSize: '1.5rem',
            minHeight: '50px',
            color: '#222831',
            fontWeight: '500',
            marginBottom: '1.5rem'
          }}>
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

          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderLeft: '6px solid #A62D69',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#222831',
              boxShadow: '0 4px 15px rgba(166, 45, 105, 0.1)',
              borderRadius: '12px',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
              width: '75%',
              margin: '0 auto',
              padding: '1rem'
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
            </div>
          </div>
        </div>

        {/* Section Boxes */}
        <div style={{
          marginTop: '3rem',
          animation: 'slideUp 0.5s ease-out'
        }}>
          <Row style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            margin: '0 50px'
          }}>
            {sections.map((section) => (
              <Col key={section.key} style={{
                flex: '0 0 calc(16.666% - 1rem)',
                maxWidth: 'calc(16.666% - 1rem)',
                marginBottom: '1.5rem'
              }}>
                <div 
                  onClick={() => setSelectedSection(section.key)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    minHeight: '100px',
                    background: '#FFFFFF',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                    ':hover': {
                      background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                      '& > div': {
                        color: '#FFFFFF'
                      }
                    }
                  }}
                >
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      '& > div': {
                        color: '#FFFFFF !important'
                      }
                    }
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      marginBottom: '0.5rem',
                      transition: 'all 0.3s ease',
                      transform: selectedSection === section.key ? 'scale(1.2)' : 'scale(1)',
                      color: '#2D5D7B'
                    }}>
                      {section.icon}
                    </div>
                    <div style={{
                      fontWeight: '700',
                      fontSize: '1rem',
                      color: '#2D5D7B',
                      transition: 'all 0.3s ease'
                    }}>
                      {section.label.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                  {selectedSection === section.key && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                      animation: 'pulse 2s infinite'
                    }}></div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Render selected section */}
        <div style={{
          marginTop: '3rem',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;


