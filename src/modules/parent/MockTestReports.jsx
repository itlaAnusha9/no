import React from 'react';
import { 
  FaChartLine, FaMedal, FaExclamationTriangle, FaArrowUp 
} from 'react-icons/fa';
import { Table } from 'react-bootstrap';

// Data
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

// Helper
const getStatusConfig = (status) => {
  switch (status) {
    case 'Excellent':
      return {
        bgColor: 'linear-gradient(45deg, #28a745, #5dd28e)',
        border: '#28a745',
        textColor: '#fff',
        icon: <FaMedal style={{ marginRight: 6 }} />,
      };
    case 'Improved':
      return {
        bgColor: 'linear-gradient(45deg, #17a2b8, #5ecdd3)',
        border: '#17a2b8',
        textColor: '#fff',
        icon: <FaArrowUp style={{ marginRight: 6 }} />,
      };
    case 'Needs Attention':
      return {
        bgColor: 'linear-gradient(45deg, #ffc107, #ffd65b)',
        border: '#ffc107',
        textColor: '#000',
        icon: <FaExclamationTriangle style={{ marginRight: 6 }} />,
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
  // Header stats
  const testCount = mockTestData.length;
  const upTests = mockTestData.filter(t => t.trend === 'up').length;
  const avgScore = Math.round(
    mockTestData.reduce((a, b) => a + b.score, 0) / testCount
  );
  const excTests = mockTestData.filter(t => t.status === 'Excellent').length;

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Custom CSS for animation & responsiveness */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @media (max-width: 768px) {
          .responsive-title { font-size: 1rem !important; }
          .responsive-sub { font-size: 0.8rem !important; }
          .responsive-padding { padding: 1rem !important; }
          .table th, .table td { font-size: 0.95rem !important; padding: 0.7rem !important; }
        }
        @media (max-width: 480px) {
          .responsive-title { font-size: 0.85rem !important; }
          .responsive-sub { font-size: 0.65rem !important; }
          .table th, .table td { font-size: 0.8rem !important; padding: 0.55rem !important; }
        }
      `}</style>
      <div style={{ 
        minHeight: '100vh', 
          background: ' #e9eaf0ff ',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        padding: '2rem 0'
      }}>
        <div className="container">
          {/* Header Stats */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="text-white text-center mb-4">
                <h1 className="display-6 fw-bold mb-2 text-dark">Mock Test Reports</h1>
                <p className="mb-0 opacity-75 text-grey">
                  Performance summary based on recent mock tests
                </p>
              </div>
              <div className="row g-4">
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.11)'
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#28a74520', width: 'fit-content' }}>
                        <FaMedal size={24} style={{ color: '#28a745' }} />
                      </div>
                      <h3 className="fw-bold mb-1" style={{ color: '#28a745' }}>{excTests}</h3>
                      <p className="text-muted small mb-0">Excellent Scores</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.11)'
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#4facfe20', width: 'fit-content' }}>
                        <FaChartLine size={24} style={{ color: '#4facfe' }} />
                      </div>
                      <h3 className="fw-bold mb-1" style={{ color: '#4facfe' }}>
                        {avgScore}%
                      </h3>
                      <p className="text-muted small mb-0">Average Score</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.11)'
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#17a2b820', width: 'fit-content' }}>
                        <FaArrowUp size={24} style={{ color: '#17a2b8' }} />
                      </div>
                      <h3 className="fw-bold mb-1" style={{ color: '#17a2b8' }}>
                        {upTests}/{testCount}
                      </h3>
                      <p className="text-muted small mb-0">Tests Improved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table Card */}
          <div className="row">
            <div className="col-12">
              <div 
                className="card border-0"
                style={{
                  background: 'rgba(255,255,255,0.93)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.09)'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="p-2 rounded-circle me-3" style={{ backgroundColor: '#667eea20' }}>
                      <FaChartLine size={24} style={{ color: '#667eea' }} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Detailed Test Summary</h5>
                      <p className="text-muted small mb-0">Progress, scores and status for each subject</p>
                    </div>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <Table responsive style={{ marginBottom: 0 }}>
                      <thead style={{ backgroundColor: '#2d5d7b', color: '#fff' }}>
                        <tr>
                          <th className="text-center py-3">Date</th>
                          <th className="text-center py-3">Subject</th>
                          <th className="text-center py-3">Score</th>
                          <th className="text-center py-3">Progress</th>
                          <th className="text-center py-3">Status</th>
                          <th className="text-center py-3">Trend</th>
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
                                <div className="d-flex align-items-center justify-content-center" style={{ minWidth: 140 }}>
                                  <div style={{
                                    flex: 1,
                                    marginRight: '8px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: '#e9ecef'
                                  }}>
                                    <div style={{
                                      width: `${percentage}%`,
                                      height: '100%',
                                      backgroundColor: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
                                      transition: 'width 0.5s',
                                      borderRadius: '5px'
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
                                  padding: '5px 14px',
                                  borderRadius: '20px',
                                  fontWeight: 500,
                                  fontSize: '0.85rem',
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
                              <td className="text-center fw-bold" style={{ color: isUp ? '#28a745' : '#dc3545', fontSize: '1.1rem' }}>
                                {isUp ? '↑' : '↓'} {test.improvement}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockTestReports;
