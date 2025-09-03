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

  {
    subject: 'Computer',
    date: '2025-06-25',
    score: 62,
    total: 100,
    status: 'Improved',
    trend: 'down',
    improvement: '-5%',
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
        
        /* Responsive card style */
        .responsive-card {
          background: rgba(255,255,255,0.95) !important;
          backdrop-filter: blur(15px);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.11);
          margin-bottom: 1rem;
        }

        .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .status-badge {
          background: #667eea;
          color: white;
          padding: 5px 14px;
          border-radius: 20px;
          font-weight: 500;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          gap: 6px;
        }

        .progress-container {
          display: flex;
          align-items: center;
          min-width: 120px;
        }

        .progress-bar-wrapper {
          flex: 1;
          margin-right: 8px;
          height: 10px;
          border-radius: 5px;
          background-color: #e9ecef;
        }

        .progress-bar {
          height: 100%;
          transition: width 0.5s;
          border-radius: 5px;
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .responsive-title { 
            font-size: 1.5rem !important; 
            text-align: center;
          }
          
          .responsive-sub { 
            font-size: 0.9rem !important; 
            text-align: center;
          }
          
          .card-body {
            padding: 0.6rem !important;
          }
          
          .table th, .table td { 
            font-size: 0.8rem !important; 
            padding: 0.4rem !important;
            white-space: nowrap;
          }
          
          .status-badge {
            font-size: 0.7rem;
            padding: 3px 8px;
          }
          
          .progress-container {
            min-width: 90px;
          }
          
          .progress-percentage {
            min-width: 30px;
            font-size: 0.7rem;
          }
        }
        
        @media (max-width: 480px) {
          .responsive-title { 
            font-size: 1.2rem !important; 
          }
          
          .responsive-sub { 
            font-size: 0.8rem !important; 
          }
          
          .table th, .table td { 
            font-size: 0.7rem !important; 
            padding: 0.3rem !important;
          }
          
          .status-badge {
            font-size: 0.65rem;
            padding: 2px 6px;
          }
          
          .icon-sm {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>

      {/* Page Container */}
      <div style={{ 
        minHeight: '100vh', 
        background: '#e9eaf0',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        padding: '1rem 0'
      }}>
        <div className="container-fluid">
          {/* Header Stats */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="text-white text-center mb-4">
                <h1 className="display-6 fw-bold mb-2 text-dark responsive-title">Mock Test Reports</h1>
                <p className="mb-0 opacity-75 text-secondary responsive-sub">
                  Performance summary based on recent mock tests
                </p>
              </div>
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <div className="card border-0 responsive-card">
                    <div className="card-body p-3 text-center">
                      <div className="p-2 rounded-circle mx-auto mb-2" style={{ backgroundColor: '#28a74520', width: 'fit-content' }}>
                        <FaMedal className="icon-sm" style={{ color: '#28a745', width: 20, height: 20 }} />
                      </div>
                      <h5 className="fw-bold mb-1" style={{ color: '#28a745' }}>{excTests}</h5>
                      <p className="text-muted small mb-0">Excellent Scores</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 responsive-card">
                    <div className="card-body p-3 text-center">
                      <div className="p-2 rounded-circle mx-auto mb-2" style={{ backgroundColor: '#4facfe20', width: 'fit-content' }}>
                        <FaChartLine className="icon-sm" style={{ color: '#4facfe', width: 20, height: 20 }} />
                      </div>
                      <h5 className="fw-bold mb-1" style={{ color: '#4facfe' }}>
                        {avgScore}%
                      </h5>
                      <p className="text-muted small mb-0">Average Score</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 responsive-card">
                    <div className="card-body p-3 text-center">
                      <div className="p-2 rounded-circle mx-auto mb-2" style={{ backgroundColor: '#17a2b820', width: 'fit-content' }}>
                        <FaArrowUp className="icon-sm" style={{ color: '#17a2b8', width: 20, height: 20 }} />
                      </div>
                      <h5 className="fw-bold mb-1" style={{ color: '#17a2b8' }}>
                        {upTests}/{testCount}
                      </h5>
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
              <div className="card border-0 responsive-card">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 rounded-circle me-2" style={{ backgroundColor: '#667eea20' }}>
                      <FaChartLine className="icon-sm" style={{ color: '#667eea', width: 20, height: 20 }} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Detailed Test Summary</h6>
                      <p className="text-muted small mb-0">Progress, scores and status for each subject</p>
                    </div>
                  </div>
                  <div className="table-container">
                    <Table responsive="sm" style={{ marginBottom: 0 }}>
                      <thead style={{ backgroundColor: '#2d5d7b', color: '#fff' }}>
                        <tr>
                          <th className="text-center py-2">Date</th>
                          <th className="text-center py-2">Subject</th>
                          <th className="text-center py-2">Score</th>
                          <th className="text-center py-2">Progress</th>
                          <th className="text-center py-2">Status</th>
                          <th className="text-center py-2">Trend</th>
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
                                <div className="progress-container justify-content-center">
                                  <div className="progress-bar-wrapper">
                                    <div className="progress-bar" style={{
                                      width: `${percentage}%`,
                                      backgroundColor: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545',
                                    }} />
                                  </div>
                                  <span className="progress-percentage fw-bold" style={{
                                    color: percentage >= 80 ? '#28a745' : percentage >= 60 ? '#ffc107' : '#dc3545'
                                  }}>
                                    {Math.round(percentage)}%
                                  </span>
                                </div>
                              </td>
                              <td className="text-center">
                                <div className="status-badge" style={{
                                  background: status.bgColor,
                                  color: status.textColor,
                                  border: `1px solid ${status.border}`,
                                }}>
                                  {status.icon}
                                  {test.status}
                                </div>
                              </td>
                              <td className="text-center fw-bold" style={{ color: isUp ? '#28a745' : '#dc3545', fontSize: '0.9rem' }}>
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
