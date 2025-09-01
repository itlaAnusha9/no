import React, { useState } from 'react';
import { 
  GraduationCap,
  Clock,
  CheckCircle,
  Circle,
  Calendar,
  BookOpen,
  Video,
  X,
  Target,
  TrendingUp
} from 'lucide-react';

const StudyPlanner = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [planner] = useState([
    {
      id: 1,
      date: '2025-07-01',
      subject: 'Mathematics',
      topic: 'Fractions & Decimals',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: true,
      duration: '45 mins',
      difficulty: 'Medium',
      priority: 'High',
      color: '#f4a468ff',
    },
    {
      id: 2,
      date: '2025-07-02',
      subject: 'Science',
      topic: 'Water Cycle Process',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: false,
      duration: '60 mins',
      difficulty: 'Easy',
      priority: 'Medium',
      color: '#f4a468ff',
    },
    {
      id: 3,
      date: '2025-07-03',
      subject: 'English',
      topic: 'Essay Writing Techniques',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: false,
      duration: '90 mins',
      difficulty: 'Hard',
      priority: 'High',
      color: '#f4a468ff',
    },
    {
      id: 4,
      date: '2025-07-04',
      subject: 'Social Studies',
      topic: 'Types of Government',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: true,
      duration: '30 mins',
      difficulty: 'Easy',
      priority: 'Low',
      color: '#f4a468ff',
    },
    {
      id: 5,
      date: '2025-07-05',
      subject: 'Hindi',
      topic: 'Grammar & Literature',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: false,
      duration: '50 mins',
      difficulty: 'Medium',
      priority: 'Medium',
      color: '#f4a468ff',
    }
  ]);

  const handleVideoClick = (videoUrl, plan) => {
    setCurrentVideo(videoUrl);
    setSelectedPlan(plan);
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    setCurrentVideo('');
    setSelectedPlan(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#28a745';
      case 'medium': return '#ffc107';
      case 'hard': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const completedCount = planner.filter(item => item.completed).length;
  const totalHours = planner.reduce((total, item) => {
    const hours = parseInt(item.duration.split(' ')[0]);
    return total + hours;
  }, 0);

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8f9fa',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        padding: '2rem 0'
      }}>
        <div className="container">
          {/* Header Stats */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="text-center mb-4">
                <h1 className="display-6 fw-bold mb-2 text-dark">Study Planner</h1>
                <p className="mb-0 text-muted">Your personalized learning schedule</p>
              </div>
              <div className="row g-4">
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#FFE6E6', width: 'fit-content' }}>
                        <Target size={24} style={{ color: '#FF6B6B' }} />
                      </div>
                      <h3 className="fw-bold mb-1 text-dark">{completedCount}/{planner.length}</h3>
                      <p className="text-muted small mb-0">Tasks Completed</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#E0F7F6', width: 'fit-content' }}>
                        <Clock size={24} style={{ color: '#4ECDC4' }} />
                      </div>
                      <h3 className="fw-bold mb-1 text-dark">{totalHours}h</h3>
                      <p className="text-muted small mb-0">Total Study Time</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div 
                    className="card border-0"
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div className="card-body p-4 text-center">
                      <div className="p-3 rounded-circle mx-auto mb-3" style={{ backgroundColor: '#FFF6E0', width: 'fit-content' }}>
                        <TrendingUp size={24} style={{ color: '#FFD166' }} />
                      </div>
                      <h3 className="fw-bold mb-1 text-dark">{Math.round((completedCount/planner.length)*100)}%</h3>
                      <p className="text-muted small mb-0">Progress Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Plan Cards */}
          <div className="row">
            <div className="col-12">
              <div 
                className="card border-0"
                style={{
                  background: 'rgba(255,255,255,0.96)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  border: '2px solid #f4a468'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="p-2 rounded-circle me-3" style={{ backgroundColor: '#ffd699' }}>
                      <GraduationCap size={24} style={{ color: '#f4a468' }} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Daily Study Schedule</h5>
                      <p className="text-muted small mb-0">Click on video links to start learning</p>
                    </div>
                  </div>
                  <div className="row g-4">
                    {planner.map((item) => (
                      <div key={item.id} className="col-12 col-lg-6">
                        <div 
                          className="p-4 rounded-4 h-100 position-relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}10, #fff)`,
                            border: `2px solid ${item.color}`,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {/* Task Header */}
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <div 
                                className="p-2 rounded-circle me-3"
                                style={{ backgroundColor: item.color + '40' }}
                              >
                                <BookOpen size={20} style={{ color: item.color }} />
                              </div>
                              <div>
                                <h6 className="fw-bold mb-0" style={{ color: item.color }}>{item.subject}</h6>
                                <div className="d-flex align-items-center text-muted small">
                                  <Calendar size={12} className="me-1" />
                                  {item.date}
                                </div>
                              </div>
                            </div>
                            {/* Only indicate incomplete status here */}
                            {!item.completed && (
                              <Circle size={20} className="text-muted" />
                            )}
                          </div>
                          {/* Topic */}
                          <h6 className="fw-semibold mb-3 text-dark">{item.topic}</h6>
                          {/* Details */}
                          <div className="row g-3 mb-3">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <Clock size={16} className="text-muted me-2" />
                                <small className="text-muted fw-medium">{item.duration}</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <span 
                                className="badge rounded-pill px-3 py-2 small"
                                style={{ 
                                  backgroundColor: getDifficultyColor(item.difficulty) + '20',
                                  color: getDifficultyColor(item.difficulty),
                                  border: `1px solid ${getDifficultyColor(item.difficulty)}40`
                                }}
                              >
                                {item.difficulty}
                              </span>
                            </div>
                          </div>
                          {/* Actions */}
                          <div className="d-flex align-items-center justify-content-between">
                            <button
                              className="btn btn-sm d-flex align-items-center"
                              style={{
                                backgroundColor: item.color,
                                color: 'white',
                                border: 'none',
                                borderRadius: '25px',
                                padding: '8px 16px',
                                fontSize: '0.85rem',
                                fontWeight: '500'
                              }}
                              onClick={() => handleVideoClick(item.videoLink, item)}
                            >
                              <Video size={14} className="me-2" />
                              Watch Video
                            </button>
                            <span 
                              className="badge rounded-pill px-3 py-2 small"
                              style={{ 
                                backgroundColor: getPriorityColor(item.priority) + '20',
                                color: getPriorityColor(item.priority),
                                border: `1px solid ${getPriorityColor(item.priority)}40`
                              }}
                            >
                              {item.priority} Priority
                            </span>
                          </div>
                          {/* Completed Overlay (single green tick) */}
                          {item.completed && (
                            <div 
                              className="position-absolute top-0 end-0 p-2"
                              style={{
                                background: 'linear-gradient(135deg, #28a74520, #28a74510)',
                                borderRadius: '0 1rem 0 1rem'
                              }}
                            >
                              <CheckCircle size={16} className="text-success" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={handleCloseModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div 
              className="modal-content border-0"
              style={{ 
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="modal-header border-0 p-4">
                <div className="d-flex align-items-center">
                  {selectedPlan && (
                    <div 
                      className="p-2 rounded-circle me-3"
                      style={{ backgroundColor: selectedPlan.color + '20' }}
                    >
                      <Video size={20} style={{ color: selectedPlan.color }} />
                    </div>
                  )}
                  <div>
                    <h5 className="modal-title fw-bold mb-0">
                      {selectedPlan ? selectedPlan.subject : 'Study Video'}
                    </h5>
                    {selectedPlan && (
                      <p className="small text-muted mb-0">{selectedPlan.topic}</p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    opacity: 0.8
                  }}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body p-0">
                {currentVideo && (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={currentVideo}
                      title="Study Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudyPlanner;
