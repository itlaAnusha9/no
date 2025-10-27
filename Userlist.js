
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('students');
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data for overview
  const studentOverview = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', performance: 'Excellent' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', performance: 'Good' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'inactive', performance: 'Average' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'active', performance: 'Excellent' }
  ];

  const parentOverview = [
    { id: 1, name: 'Robert Doe', childName: 'John Doe', performance: 'Excellent', unreadMessages: 2 },
    { id: 2, name: 'Michael Smith', childName: 'Jane Smith', performance: 'Good', unreadMessages: 1 },
    { id: 3, name: 'David Johnson', childName: 'Mike Johnson', performance: 'Average', unreadMessages: 0 },
    { id: 4, name: 'James Wilson', childName: 'Sarah Wilson', performance: 'Excellent', unreadMessages: 3 }
  ];

  const handleStudentDetails = () => {
    navigate('/teacher/student-details');
  };

  const handleParentDetails = () => {
    navigate('/teacher/parent-details');
  };

  const handleThemeToggle = (e) => {
    setDarkMode(e.target.checked);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // FIXED: Removed marginLeft from containerStyle to eliminate blank space
  const containerStyle = {
    backgroundColor: darkMode ? '#0f172a' : '#F4F8FB',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    padding: '30px',
    minHeight: '100vh'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px'
  };

  const titleStyle = {
    color: darkMode ? '#e2e8f0' : '#222831',
    fontSize: '2rem',
    fontWeight: '600',
    margin: '0'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  };

  const studentButtonStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: '#2D5D7B',
    color: '#FFFFFF'
  };

  const parentButtonStyle = {
    ...studentButtonStyle,
    backgroundColor: '#A62D69'
  };

  const tabContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    borderBottom: `2px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    paddingBottom: '10px'
  };

  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: isActive ? '#2D5D7B' : 'transparent',
    color: isActive ? '#FFFFFF' : '#2D5D7B',
    border: isActive ? 'none' : `2px solid #2D5D7B`
  });

  const overviewContainerStyle = {
    backgroundColor: darkMode ? '#1e293b' : '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '25px',
    marginBottom: '30px',
    border: darkMode ? '1px solid #334155' : 'none'
  };

  const overviewTitleStyle = {
    color: darkMode ? '#e2e8f0' : '#222831',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0 0 20px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const tableContainerStyle = {
    overflowX: 'auto',
    borderRadius: '8px',
    border: darkMode ? '1px solid #334155' : '1px solid rgba(0, 0, 0, 0.1)'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '600px'
  };

  const thStyle = {
    backgroundColor: '#2D5D7B',
    color: '#FFFFFF',
    padding: '16px 12px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '0.9rem',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const tdStyle = {
    padding: '14px 12px',
    borderBottom: darkMode ? '1px solid #334155' : '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '0.9rem',
    border: darkMode ? '1px solid #334155' : '1px solid rgba(0, 0, 0, 0.05)',
    color: darkMode ? '#e2e8f0' : '#222831'
  };

  const statusBadgeStyle = (status) => ({
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
    backgroundColor: status === 'active' ? 'rgba(60, 179, 113, 0.2)' : 'rgba(220, 53, 69, 0.2)',
    color: status === 'active' ? '#3CB371' : '#DC3545',
    border: `1px solid ${status === 'active' ? '#3CB371' : '#DC3545'}`
  });

  const performanceBadgeStyle = (performance) => {
    let color;
    switch(performance) {
      case 'Excellent': color = '#3CB371'; break;
      case 'Good': color = '#4DD0E1'; break;
      case 'Average': color = '#FFC107'; break;
      default: color = '#B0BEC5';
    }
    return {
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
      backgroundColor: `${color}20`,
      color: color,
      border: `1px solid ${color}`
    };
  };

  const messageBadgeStyle = {
    padding: '4px 8px',
    borderRadius: '50%',
    fontSize: '0.7rem',
    fontWeight: '600',
    backgroundColor: '#A62D69',
    color: '#FFFFFF',
    marginLeft: '0px'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  };

  const statCardStyle = {
    backgroundColor: darkMode ? '#1e293b' : '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    border: darkMode ? '1px solid #334155' : '1px solid rgba(0, 0, 0, 0.1)'
  };

  const statValueStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2D5D7B',
    margin: '10px 0'
  };

  const statLabelStyle = {
    fontSize: '0.9rem',
    color: darkMode ? '#94a3b8' : '#666',
    fontWeight: '500'
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={containerStyle}>
      {/* 90px gap from header */}
      <div style={{ height: '30px' }}></div>
      
      {/* Main Content */}
      <div style={contentStyle}>
        <div style={headerStyle}>
          <h3 style={titleStyle}>User Management Dashboard</h3>
          <div style={buttonContainerStyle}>
            <button 
              style={studentButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#244A63'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2D5D7B'}
              onClick={handleStudentDetails}
            >
              View Student Details
            </button>
            <button 
              style={parentButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#912358'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#A62D69'}
              onClick={handleParentDetails}
            >
              View Parent Details
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={statLabelStyle}>Total Students</div>
            <div style={statValueStyle}>45</div>
            <div style={{...statLabelStyle, color: '#3CB371'}}>38 Active</div>
          </div>
          <div style={statCardStyle}>
            <div style={statLabelStyle}>Total Parents</div>
            <div style={statValueStyle}>45</div>
            <div style={{...statLabelStyle, color: '#3CB371'}}>All Connected</div>
          </div>
          <div style={statCardStyle}>
            <div style={statLabelStyle}>Pending Messages</div>
            <div style={statValueStyle}>12</div>
            <div style={{...statLabelStyle, color: '#A62D69'}}>Require Attention</div>
          </div>
          <div style={statCardStyle}>
            <div style={statLabelStyle}>Avg Performance</div>
            <div style={statValueStyle}>82%</div>
            <div style={{...statLabelStyle, color: '#4DD0E1'}}>Class Average</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={tabContainerStyle}>
          <button 
            style={tabStyle(activeTab === 'students')}
            onClick={() => setActiveTab('students')}
          >
            Students Overview
          </button>
          <button 
            style={tabStyle(activeTab === 'parents')}
            onClick={() => setActiveTab('parents')}
          >
            Parents Overview
          </button>
        </div>

        {/* Students Overview */}
        {activeTab === 'students' && (
          <div style={overviewContainerStyle}>
            <h2 style={overviewTitleStyle}>
              <span>📊</span>
              Students Overview - Recent Activities
            </h2>
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Student Name</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Performance</th>
                    <th style={thStyle}>Last Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {studentOverview.map((student) => (
                    <tr 
                      key={student.id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkMode ? 'rgba(45, 93, 123, 0.2)' : 'rgba(45, 93, 123, 0.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={tdStyle}>{student.name}</td>
                      <td style={tdStyle}>{student.email}</td>
                      <td style={tdStyle}>
                        <span style={statusBadgeStyle(student.status)}>
                          {student.status}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        <span style={performanceBadgeStyle(student.performance)}>
                          {student.performance}
                        </span>
                      </td>
                      <td style={tdStyle}>2 hours ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Parents Overview */}
        {activeTab === 'parents' && (
          <div style={overviewContainerStyle}>
            <h2 style={overviewTitleStyle}>
              <span>👨‍👩‍👧‍👦</span>
              Parents Overview - Communication Status
            </h2>
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Parent Name</th>
                    <th style={thStyle}>Child Name</th>
                    <th style={thStyle}>Child Performance</th>
                    <th style={thStyle}>Unread Messages</th>
                    <th style={thStyle}>Last Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {parentOverview.map((parent) => (
                    <tr 
                      key={parent.id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkMode ? 'rgba(45, 93, 123, 0.2)' : 'rgba(45, 93, 123, 0.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={tdStyle}>{parent.name}</td>
                      <td style={tdStyle}>{parent.childName}</td>
                      <td style={tdStyle}>
                        <span style={performanceBadgeStyle(parent.performance)}>
                          {parent.performance}
                        </span>
                      </td>
                      <td style={tdStyle}>
                        {parent.unreadMessages > 0 ? (
                          <span style={messageBadgeStyle}>
                            {parent.unreadMessages}
                          </span>
                        ) : (
                          'None'
                        )}
                      </td>
                      <td style={tdStyle}>1 day ago</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            backgroundColor: darkMode ? '#1e293b' : '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            border: '2px solid #2D5D7B',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(45, 93, 123, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
          onClick={handleStudentDetails}
          >
            <div style={{fontSize: '3rem', marginBottom: '10px'}}>👨‍🎓</div>
            <h3 style={{color: '#2D5D7B', margin: '10px 0'}}>Manage Students</h3>
            <p style={{color: darkMode ? '#94a3b8' : '#666', fontSize: '0.9rem'}}>View detailed student information, performance metrics, and communication history</p>
          </div>

          <div style={{
            backgroundColor: darkMode ? '#1e293b' : '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            border: '2px solid #A62D69',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(166, 45, 105, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
          onClick={handleParentDetails}
          >
            <div style={{fontSize: '3rem', marginBottom: '10px'}}>👨‍👩‍👧‍👦</div>
            <h3 style={{color: '#A62D69', margin: '10px 0'}}>Manage Parents</h3>
            <p style={{color: darkMode ? '#94a3b8' : '#666', fontSize: '0.9rem'}}>Communicate with parents, share progress reports, and address concerns</p>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setShowProfile(false)}
        >
          <div
            style={{
              background: darkMode ? "#1e293b" : "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              padding: "2rem",
              minWidth: "320px",
              maxWidth: "90vw",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
              color: darkMode ? "#e2e8f0" : '#222831'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: darkMode ? "#e2e8f0" : '#222831'
              }}
              onClick={() => setShowProfile(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{fontSize: '4rem', marginBottom: '10px'}}>👨‍🏫</div>
              <div>
                <h3 style={{ margin: "0.5rem 0" }}>Sarah Wilson</h3>
                <p style={{ margin: 0, color: darkMode ? "#94a3b8" : "#666" }}>Teacher</p>
              </div>
            </div>

            <div style={{ marginTop: "1rem", lineHeight: "1.6" }}>
              <p>
                <strong>Email:</strong> sarah.wilson@novya.com
              </p>
              <p>
                <strong>Contact:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Department:</strong> Science & Mathematics
              </p>
              <p>
                <strong>Students:</strong> 45 Active Students
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1.5rem" }}>
              <button
                onClick={() => setShowProfile(false)}
                style={{
                  padding: "0.5rem 1rem",
                  background: darkMode ? "#334155" : "#f1f5f9",
                  color: darkMode ? "#e2e8f0" : '#222831',
                  border: `1px solid ${darkMode ? "#475569" : "#ddd"}`,
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;