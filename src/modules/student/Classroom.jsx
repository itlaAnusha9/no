
import React, { useState, useEffect } from 'react';
import './classroom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarCheck, faVideo, faTasks, faArrowRight, faClock, 
  faHourglassHalf, faPlay, faEye, faLightbulb, faBook, 
  faQuestion, faLaptop, faBookOpen, faFileWord, faLink, 
  faDownload, faExternalLinkAlt, faArrowLeft, faCheckCircle, 
  faExclamationCircle, faChevronRight, faTimes, faFileAlt
} from '@fortawesome/free-solid-svg-icons';

const Classroom = () => {
  useEffect(() => {
      document.title = "Classroom | NOVYA - Your Smart Learning Platform";
    }, []);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeAssignment, setActiveAssignment] = useState(null);
  const [assignmentResponses, setAssignmentResponses] = useState({});
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sample data with working links
  const upcomingSessions = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      class: "9th Grade",
      time: "10:00 AM",
      duration: "60 mins",
      teacher: "Mr. Sharma",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/3d18435936754863905d5b8f7a555802.webp",
      joinLink: "https://meet.google.com",
      description: "Learn the basics of algebraic expressions, equations, and inequalities. We'll cover variables, coefficients, and how to solve linear equations."
    },
    {
      id: 2,
      title: "Chemical Reactions",
      class: "10th Grade",
      time: "02:00 PM",
      duration: "45 mins",
      teacher: "Dr. Patel",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/2607f3b3022b4749a9d03ff7a1e37a01.webp",
      joinLink: "https://meet.google.com",
      description: "Explore different types of chemical reactions including synthesis, decomposition, and combustion reactions with live demonstrations."
    },
    {
      id: 3,
      title: "English Literature",
      class: "8th Grade",
      time: "11:30 AM",
      duration: "50 mins",
      teacher: "Ms. Gupta",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/b77e7b452de649ceae536d4f8cebf88a.webp",
      joinLink: "https://meet.google.com",
      description: "Discussion on Shakespeare's sonnets with focus on themes of love and time. Bring your annotated copies for group analysis."
    },
    {
      id: 4,
      title: "Geometry Basics",
      class: "9th Grade",
      time: "09:00 AM",
      duration: "55 mins",
      teacher: "Mr. Kapoor",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/93139ac6d7444c51ac2e0a4e2e07a649.webp",
      joinLink: "https://meet.google.com",
      description: "Introduction to geometric shapes, angles, and properties. Hands-on activities with protractors and compasses."
    }
  ];

  const recordedSessions = [
    {
      id: 1,
      title: "Trigonometry Basics",
      class: "10th Grade",
      duration: "55 mins",
      views: 124,
      teacher: "Mr. Sharma",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/8e43e79accb6473eb1c0ca39c53fb3ac.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Comprehensive lesson on trigonometric ratios (sine, cosine, tangent) and their applications in right-angled triangles."
    },
    {
      id: 2,
      title: "Physics: Motion",
      class: "9th Grade",
      duration: "48 mins",
      views: 89,
      teacher: "Dr. Singh",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/2b039c67468245a6b873cd3071541f7d.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Understanding Newton's laws of motion with real-world examples and problem-solving techniques."
    },
    {
      id: 3,
      title: "History: Independence",
      class: "8th Grade",
      duration: "40 mins",
      views: 156,
      teacher: "Ms. Kapoor",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/94bdd38e2b7b47ca9d6ed21784b8483c.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Detailed analysis of the Indian independence movement focusing on key events from 1857 to 1947."
    },
    {
      id: 4,
      title: "Biology: Cell Structure",
      class: "10th Grade",
      duration: "52 mins",
      views: 78,
      teacher: "Dr. Reddy",
      thumbnail: "https://images.piclumen.com/normal/20250703/14/cd8054afdcbb4773bafc46800c08f9ac.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "In-depth look at cell organelles, their functions, and differences between plant and animal cells."
    },
    {
      id: 5,
      title: "Maths: Data Handling",
      class: "7th Grade",
      duration: "38 mins",
      views: 92,
      teacher: "Ms. Verma",
      thumbnail: "https://images.piclumen.com/normal/20250819/19/ba810201000d49868db0a80ee171e9d5.webp",
      videoLink: "https://1drv.ms/v/c/6e49ee6821164b12/EYUSJx0B0S5BkWVa6EceMtsB02JKxkrM9Lb5XT-b4vmRBg",
      description: "Introduction to data collection, organization and representation through bar graphs, pie charts and histograms."
    },
    {
      id: 6,
      title: "Maths: Integers",
      class: "7th Grade",
      duration: "42 mins",
      views: 105,
      teacher: "Mr. Kumar",
      thumbnail: "https://images.piclumen.com/normal/20250819/19/5d89b574746d4bc6829716206c1dbbfd.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Understanding positive and negative numbers, their operations and real-life applications of integers."
    },
    {
      id: 7,
      title: "Maths: Fractions and Decimals",
      class: "7th Grade",
      duration: "45 mins",
      views: 87,
      teacher: "Ms. Singh",
      thumbnail: "https://images.piclumen.com/normal/20250819/19/1f4e38d52574494ba082eaaed3964043.webp",
      videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Converting between fractions and decimals, operations with fractions, and decimal place value concepts."
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Math Homework",
      class: "9th Grade",
      dueDate: "2023-11-20",
      status: "Pending",
      points: 20,
      description: "Complete exercises 1-10 from chapter 3 on algebraic expressions. Show all your work and submit as a PDF.",
      questions: [
        "Solve for x: 2x + 5 = 15",
        "Factor the expression: x² - 4",
        "Simplify: (3x²y³)²"
      ]
    },
    {
      id: 2,
      title: "Science Project",
      class: "10th Grade",
      dueDate: "2023-11-25",
      status: "In Progress",
      points: 50,
      description: "Create a presentation on chemical reactions in everyday life. Include at least 5 examples with images and explanations.",
      questions: [
        "What is the chemical reaction behind baking soda and vinegar?",
        "Explain rust formation with a chemical equation",
        "Describe photosynthesis as a chemical reaction"
      ]
    },
    {
      id: 3,
      title: "English Essay",
      class: "8th Grade",
      dueDate: "2023-11-18",
      status: "Completed",
      points: 30,
      description: "Write a 500-word essay on 'The Importance of Reading'. Include examples from at least two books we've studied.",
      questions: [
        "What are the main benefits of reading?",
        "How does reading improve vocabulary?",
        "Why is reading important for personal growth?"
      ]
    },
    {
      id: 4,
      title: "History Timeline",
      class: "9th Grade",
      dueDate: "2023-11-22",
      status: "Pending",
      points: 25,
      description: "Create a timeline of major events during the Indian independence movement from 1857 to 1947.",
      questions: [
        "What were the key events of the 1857 revolt?",
        "How did the Non-Cooperation Movement impact the freedom struggle?",
        "What was the significance of the Quit India Movement?"
      ]
    }
  ];

  const handleJoinSession = (link) => {
    window.open(link, '_blank');
  };

  const handleWatchVideo = (video) => {
    // Handle OneDrive links differently
    if (video.videoLink.includes('1drv.ms')) {
      window.open(video.videoLink, '_blank');
    } else {
      setSelectedVideo(video);
    }
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleOpenAssignment = (assignment) => {
    setActiveAssignment(assignment);
    if (!assignmentResponses[assignment.id]) {
      setAssignmentResponses(prev => ({
        ...prev,
        [assignment.id]: Array(assignment.questions.length).fill('')
      }));
    }
  };

  const handleResponseChange = (assignmentId, questionIndex, value) => {
    setAssignmentResponses(prev => ({
      ...prev,
      [assignmentId]: prev[assignmentId].map((response, idx) => 
        idx === questionIndex ? value : response
      )
    }));
  };

  const handleSubmitAssignment = (assignmentId) => {
    setSubmittedAssignments(prev => [...prev, assignmentId]);
    setActiveAssignment(null);
  };

  // Calculate assignment stats based on submissions
  const getAssignmentStats = () => {
    const total = assignments.length;
    const completed = assignments.filter(a => 
      submittedAssignments.includes(a.id) || a.status === 'Completed'
    ).length;
    const inProgress = assignments.filter(a => 
      !submittedAssignments.includes(a.id) && a.status === 'In Progress'
    ).length;
    const pending = assignments.filter(a => 
      !submittedAssignments.includes(a.id) && a.status === 'Pending'
    ).length;

    return { total, completed, inProgress, pending };
  };

  const assignmentStats = getAssignmentStats();

  const renderUpcomingSessions = () => (
    <div className="tab-content">
      <div className="content-header">
        <h2>Upcoming Live Sessions</h2>
        <p>Join these interactive classes to learn with your teachers and classmates</p>
      </div>
      
      <div className="sessions-grid">
        {upcomingSessions.map(session => (
          <div 
            key={session.id} 
            className={`session-card ${hoveredCard === `upcoming-${session.id}` ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(`upcoming-${session.id}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="session-thumbnail">
              <img src={session.thumbnail} alt={session.title} />
              <div className="session-badge pulse">Upcoming</div>
              <div className="session-overlay">
                <p>{session.description}</p>
              </div>
            </div>
            <div className="session-details">
              <h3>{session.title}</h3>
              <p className="session-meta">
                <span>{session.class}</span> • 
                <span>{session.teacher}</span>
              </p>
              <div className="session-time">
                <div>
                  <FontAwesomeIcon icon={faClock} />
                  <span>{session.time}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHourglassHalf} />
                  <span>{session.duration}</span>
                </div>
              </div>
              <button 
                className="join-button"
                onClick={() => handleJoinSession(session.joinLink)}
              >
                Join Session <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="quick-tips">
        <h3><FontAwesomeIcon icon={faLightbulb} /> Preparation Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <FontAwesomeIcon icon={faBook} />
            <h4>Review Materials</h4>
            <p>Read the assigned chapters and notes before class</p>
          </div>
          <div className="tip-card">
            <FontAwesomeIcon icon={faQuestion} />
            <h4>Prepare Questions</h4>
            <p>Write down any questions you have about the topic</p>
          </div>
          <div className="tip-card">
            <FontAwesomeIcon icon={faLaptop} />
            <h4>Tech Check</h4>
            <p>Test your microphone and camera before joining</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecordedSessions = () => (
    <div className="tab-content">
      {selectedVideo ? (
        <div className="video-modal">
          <div className="video-modal-header">
            <button onClick={handleCloseVideo} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h3>{selectedVideo.title}</h3>
          </div>
          <div className="video-container">
            <iframe 
              src={selectedVideo.videoLink} 
              title={selectedVideo.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-details">
            <p><strong>Class:</strong> {selectedVideo.class}</p>
            <p><strong>Teacher:</strong> {selectedVideo.teacher}</p>
            <p><strong>Duration:</strong> {selectedVideo.duration}</p>
            <p>{selectedVideo.description}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="content-header">
            <h2>Recorded Sessions</h2>
            <p>Revisit past classes or catch up on ones you missed</p>
          </div>
          
          <div className="sessions-grid">
            {recordedSessions.map(session => (
              <div 
                key={session.id} 
                className={`session-card ${hoveredCard === `recorded-${session.id}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(`recorded-${session.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="session-thumbnail">
                  <img src={session.thumbnail} alt={session.title} />
                  <div 
                    className="play-button"
                    onClick={() => handleWatchVideo(session)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <div className="session-badge recorded">Recorded</div>
                  <div className="session-overlay">
                    <p>{session.description}</p>
                  </div>
                </div>
                <div className="session-details">
                  <h3>{session.title}</h3>
                  <p className="session-meta">
                    <span>{session.class}</span> • 
                    <span>{session.teacher}</span>
                  </p>
                  <div className="session-time">
                    <div>
                      <FontAwesomeIcon icon={faHourglassHalf} />
                      <span>{session.duration}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faEye} />
                      <span>{session.views} views</span>
                    </div>
                  </div>
                  <button 
                    className="watch-button"
                    onClick={() => handleWatchVideo(session)}
                  >
                    Watch Now <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="study-resources">
            <h3><FontAwesomeIcon icon={faBookOpen} /> Related Study Materials</h3>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">
                  <FontAwesomeIcon icon={faFileWord} />
                </div>
                <div className="resource-info">
                  <h4>Lecture Notes</h4>
                  <p>DOCX • 1.2 MB</p>
                </div>
                <button className="download-btn">
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div className="resource-info">
                  <h4>Physics Simulations</h4>
                  <p>Interactive Website</p>
                </div>
                <button className="download-btn">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <FontAwesomeIcon icon={faVideo} />
                </div>
                <div className="resource-info">
                  <h4>History Documentary</h4>
                  <p>Video • 45 mins</p>
                </div>
                <button className="download-btn">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const renderAssignments = () => {
    if (activeAssignment) {
      return (
        <div className="assignment-detail-container">
          <button 
            className="back-button"
            onClick={() => setActiveAssignment(null)}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Assignments
          </button>
          
          <div className="assignment-detail-card">
            <h2>{activeAssignment.title}</h2>
            <p className="assignment-class">{activeAssignment.class}</p>
            <p className="assignment-due">Due: {activeAssignment.dueDate}</p>
            <p className="assignment-points">{activeAssignment.points} points</p>
            
            <div className="assignment-description">
              <h3>Description</h3>
              <p>{activeAssignment.description}</p>
            </div>
            
            <div className="assignment-questions">
              <h3>Questions</h3>
              {activeAssignment.questions.map((question, index) => (
                <div key={index} className="question-item">
                  <p className="question-text">{index + 1}. {question}</p>
                  <textarea
                    className="response-input"
                    value={assignmentResponses[activeAssignment.id]?.[index] || ''}
                    onChange={(e) => handleResponseChange(activeAssignment.id, index, e.target.value)}
                    placeholder="Type your answer here..."
                    rows={3}
                  />
                </div>
              ))}
            </div>
            
            <div className="assignment-actions">
              {submittedAssignments.includes(activeAssignment.id) ? (
                <div className="submitted-badge">
                  <FontAwesomeIcon icon={faCheckCircle} /> Submitted
                </div>
              ) : (
                <button 
                  className="submit-button"
                  onClick={() => handleSubmitAssignment(activeAssignment.id)}
                >
                  Submit Assignment
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="tab-content">
        <div className="content-header">
          <h2>Your Assignments</h2>
          <p>Complete these tasks to reinforce your learning</p>
        </div>
        
        <div className="assignments-list">
          {assignments.map(assignment => {
            const isSubmitted = submittedAssignments.includes(assignment.id);
            const status = isSubmitted ? 'Completed' : assignment.status;
            
            return (
              <div 
                key={assignment.id} 
                className={`assignment-card ${hoveredCard === `assignment-${assignment.id}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(`assignment-${assignment.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleOpenAssignment(assignment)}
              >
                <div className="assignment-icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <div className="assignment-info">
                  <h3>{assignment.title}</h3>
                  <p className="assignment-meta">
                    <span>{assignment.class}</span> • 
                    <span>Due: {assignment.dueDate}</span>
                  </p>
                  <div className={`status-badge ${status.toLowerCase().replace(' ', '-')}`}>
                    {status}
                  </div>
                </div>
                <div className="assignment-points">
                  <span>{assignment.points} pts</span>
                  <button className="view-button">
                    View <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="assignment-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faTasks} />
            </div>
            <div className="stat-info">
              <h3>{assignmentStats.total}</h3>
              <p>Total Assignments</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="stat-info">
              <h3>{assignmentStats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faHourglassHalf} />
            </div>
            <div className="stat-info">
              <h3>{assignmentStats.inProgress}</h3>
              <p>In Progress</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </div>
            <div className="stat-info">
              <h3>{assignmentStats.pending}</h3>
              <p>Pending</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return renderUpcomingSessions();
      case 'recorded':
        return renderRecordedSessions();
      case 'assignments':
        return renderAssignments();
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="book">
            <div className="inner">
              <div className="left"></div>
              <div className="middle"></div>
              <div className="right"></div>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <h3>Loading Classroom...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="classroom-container">
      <div className="classroom-header">
        <h1>My Classroom</h1>
        <p>Welcome back! Here's what's happening in your classes.</p>
        
        {isMobile ? (
          <select 
            className="mobile-tab-selector"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="upcoming">Upcoming Sessions</option>
            <option value="recorded">Recorded Sessions</option>
            <option value="assignments">Assignments</option>
          </select>
        ) : (
          <div className="tab-buttons">
            <button 
              className={activeTab === 'upcoming' ? 'active' : ''}
              onClick={() => setActiveTab('upcoming')}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Upcoming Sessions
            </button>
            <button 
              className={activeTab === 'recorded' ? 'active' : ''}
              onClick={() => setActiveTab('recorded')}
            >
              <FontAwesomeIcon icon={faVideo} /> Recorded Sessions
            </button>
            <button 
              className={activeTab === 'assignments' ? 'active' : ''}
              onClick={() => setActiveTab('assignments')}
            >
              <FontAwesomeIcon icon={faTasks} /> Assignments
            </button>
          </div>
        )}
      </div>
      
      <div className="classroom-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Classroom;