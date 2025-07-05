import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
// import "../../module/student/learn.css";
import './learn.css';
const Learn = () => {
  useEffect(() => {
      document.title = "Learning-Dashboard | NOVYA - Your Smart Learning Platform";
    }, []);
  const subjects = {
    Mathematics: {
      icon: "📐",
      color: "#4CAF50",
      chapters: {
        "7th Grade": ["Integers", "Fractions", "Decimals", "Basic Geometry","Algebra"],
        "8th Grade": ["Rational Numbers", "Linear Equations", "Algebra Basics", "Geometry Introduction"],
        "9th Grade": ["Quadratic Equations", "Trigonometry", "Coordinate Geometry", "Statistics"],
        "10th Grade": ["Polynomials", "Probability", "Circles", "Surface Areas"],
        "11th Grade": ["Sets", "Relations", "Calculus", "Mathematical Reasoning"],
        "12th Grade": ["Matrices", "Vectors", "Probability", "Linear Programming"]
      },
    },
    Physics: {
      icon: "⚛️",
      color: "#2196F3",
      chapters: {
        "7th Grade": ["Motion", "Heat", "Light", "Electricity Basics"],
        "8th Grade": ["Force and Pressure", "Sound", "Light", "Stars and Solar System"],
        "9th Grade": ["Motion", "Gravitation", "Work and Energy", "Sound"],
        "10th Grade": ["Electricity", "Magnetism", "Light Reflection", "Human Eye"],
        "11th Grade": ["Physical World", "Units", "Motion in Plane", "Laws of Motion"],
        "12th Grade": ["Electrostatics", "Current Electricity", "Magnetism", "Optics"]
      },
    },
    Chemistry: {
      icon: "🧪",
      color: "#FF5722",
      chapters: {
        "7th Grade": ["Matter Basics", "Elements", "Mixtures", "Acids & Bases"],
        "8th Grade": ["Matter", "Atoms and Molecules", "Chemical Reactions", "Metals and Non-metals"],
        "9th Grade": ["Structure of Atom", "Periodic Table", "Chemical Bonding", "States of Matter"],
        "10th Grade": ["Acids Bases", "Carbon Compounds", "Periodic Classification", "Chemical Reactions"],
        "11th Grade": ["Basic Concepts", "Structure", "Classification", "States of Matter"],
        "12th Grade": ["Solutions", "Electrochemistry", "Chemical Kinetics", "Biomolecules"]
      },
    },
    Biology: {
      icon: "🧬",
      color: "#8BC34A",
      chapters: {
        "7th Grade": ["Cell Basics", "Plants", "Animals", "Human Body"],
        "8th Grade": ["Cell Structure", "Microorganisms", "Conservation", "Reproduction"],
        "9th Grade": ["Tissues", "Diversity", "Natural Resources", "Improvement"],
        "10th Grade": ["Life Processes", "Control Coordination", "Heredity", "Environment"],
        "11th Grade": ["Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom"],
        "12th Grade": ["Reproduction", "Genetics", "Biotechnology", "Ecology"]
      },
    },
    History: {
      icon: "🏛️",
      color: "#795548",
      chapters: {
        "7th Grade": ["Ancient India", "Medieval Kingdoms", "New Empires", "Cultural Developments"],
        "8th Grade": ["Ancient Civilizations", "Medieval Period", "Colonization", "Independence"],
        "9th Grade": ["French Revolution", "Nazism", "Forest Society", "Pastoralists"],
        "10th Grade": ["Nationalism", "Industrialization", "Print Culture", "Globalization"],
        "11th Grade": ["Early Societies", "Empires", "Changing Traditions", "Industrial Revolution"],
        "12th Grade": ["Colonialism", "Freedom Struggle", "Partition", "Modern World"]
      },
    },
    Geography: {
      icon: "🌍",
      color: "#009688",
      chapters: {
        "7th Grade": ["Environment", "Inside Earth", "Our Changing Earth", "Air"],
        "8th Grade": ["Resources", "Agriculture", "Industries", "Human Resources"],
        "9th Grade": ["India Size", "Physical Features", "Drainage", "Climate"],
        "10th Grade": ["Resources Development", "Water Resources", "Agriculture", "Minerals"],
        "11th Grade": ["Geography as Discipline", "Earth", "Landforms", "Climate"],
        "12th Grade": ["Human Geography", "Population", "Human Settlements", "Resources"]
      },
    },
    English: {
      icon: "📖",
      color: "#9C27B0",
      chapters: {
        "7th Grade": ["Grammar Fundamentals", "Reading Skills", "Writing Basics", "Poetry"],
        "8th Grade": ["Grammar Basics", "Comprehension", "Writing Skills", "Poetry"],
        "9th Grade": ["Tenses", "Modals", "Reported Speech", "Story Writing"],
        "10th Grade": ["Formal Letters", "Articles", "Debate Writing", "Narratives"],
        "11th Grade": ["Reading Comprehension", "Writing Skills", "Grammar", "Literature"],
        "12th Grade": ["Advanced Writing", "Flamingo", "Vistas", "Creative Writing"]
      },
    },
    Computer: {
      icon: "💻",
      color: "#607D8B",
      chapters: {
        "7th Grade": ["Computer Fundamentals", "Internet Basics", "MS Office", "Scratch"],
        "8th Grade": ["Computer Basics", "Internet", "Cyber Safety", "HTML"],
        "9th Grade": ["Programming", "Data Handling", "Database", "Networking"],
        "10th Grade": ["Python", "SQL", "Cyber Ethics", "Web Applications"],
        "11th Grade": ["Computer Systems", "Python Programming", "Database", "Boolean Logic"],
        "12th Grade": ["Advanced Python", "Data Structures", "Computer Networks", "Cyber Security"]
      },
    },
    Economics: {
      icon: "💰",
      color: "#FFC107",
      chapters: {
        "7th Grade": ["Basic Economics", "Money Basics", "Goods & Services", "Trade"],
        "8th Grade": ["Basic Concepts", "Money", "Banking", "Government"],
        "9th Grade": ["People as Resource", "Poverty", "Food Security", "Development"],
        "10th Grade": ["Development", "Sectors", "Money Credit", "Globalization"],
        "11th Grade": ["Indian Economy", "Liberalization", "Poverty", "Human Capital"],
        "12th Grade": ["Macroeconomics", "National Income", "Money & Banking", "Government Budget"]
      },
    },
    Civics: {
      icon: "⚖️",
      color: "#F44336",
      chapters: {
        "7th Grade": ["Democracy", "Government", "Equality", "State Government"],
        "8th Grade": ["Indian Constitution", "Parliament", "Judiciary", "Marginalization"],
        "9th Grade": ["Democracy", "Constitutional Design", "Electoral Politics", "Working Institutions"],
        "10th Grade": ["Power Sharing", "Federalism", "Gender Religion", "Political Parties"],
        "11th Grade": ["Political Theory", "Rights", "Election System", "Legislature"],
        "12th Grade": ["Contemporary Politics", "Globalization", "Environment", "Social Movements"]
      },
    },
    Art: {
      icon: "🎨",
      color: "#E91E63",
      chapters: {
        "7th Grade": ["Drawing", "Color Wheel", "Shapes", "Perspective"],
        "8th Grade": ["Drawing Basics", "Color Theory", "Perspective", "Art History"],
        "9th Grade": ["Painting", "Sculpture", "Printmaking", "Digital Art"],
        "10th Grade": ["Portfolio Development", "Art Criticism", "Contemporary Art", "Exhibition"],
        "11th Grade": ["Art History", "Advanced Techniques", "Mixed Media", "Art Portfolio"],
        "12th Grade": ["Professional Practice", "Art Exhibition", "Advanced Portfolio", "Art Business"]
      },
    },
    "Physical Education": {
      icon: "🏃",
      color: "#3F51B5",
      chapters: {
        "7th Grade": ["Fitness", "Sports Basics", "Health", "Yoga Basics"],
        "8th Grade": ["Fitness Basics", "Team Sports", "Yoga", "Nutrition"],
        "9th Grade": ["Athletics", "Swimming", "First Aid", "Sports Psychology"],
        "10th Grade": ["Advanced Training", "Sports Medicine", "Leadership", "Career Options"],
        "11th Grade": ["Physiology", "Sports Training", "Psychology", "Biomechanics"],
        "12th Grade": ["Sports Management", "Sports Technology", "Sports Marketing", "Professional Sports"]
      },
    }
    // ... (other subjects remain the same)
  };

  const chapterContent = {
    "Rational Numbers": {
      content: ["This chapter content is loaded directly from Google Drive"],
      examples: [],
      difficulty: "Easy",
      timeToRead: "15 min",
      recordings: [
        { title: "Introduction to Rational Numbers", url: "https://www.youtube.com/embed/d3AQICu8_OQ" }
      ],
      googleDocId: "1Eppdp0KaJpDxenFRWYNW206xfPE5aLzz",
      quiz: [
        {
          question: "Which of the following is a rational number?",
          options: ["√2", "π", "3/4", "e"],
          answer: 2
        }
      ]
    }
  };

  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [selectedGrade, setSelectedGrade] = useState("7th Grade");
  const [selectedChapter, setSelectedChapter] = useState("Integers");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const getDriveEmbedUrl = (docId) => {
    return `https://drive.google.com/file/d/${docId}/preview`;
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedChapter]);

  const grades = Object.keys(subjects[selectedSubject]?.chapters || {});
  const chapters = subjects[selectedSubject]?.chapters[selectedGrade]?.filter((ch) =>
    ch.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const content = chapterContent[selectedChapter] || {
    content: ["No details available for this chapter yet."],
    examples: [],
    difficulty: "N/A",
    timeToRead: "0 min",
    recordings: [],
    quiz: []
  };

  const handleSubjectClick = (subj) => {
    setSelectedSubject(subj);
    const grades = Object.keys(subjects[subj].chapters);
    setSelectedGrade(grades[0]);
    setSelectedChapter(subjects[subj].chapters[grades[0]][0]);
    setSearchTerm("");
    setActiveTab("content");
    setMobileNavOpen(false);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setSelectedChapter(subjects[selectedSubject].chapters[grade][0]);
    setSearchTerm("");
    setActiveTab("content");
    setMobileNavOpen(false);
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };

  const submitQuiz = () => {
    let score = 0;
    content.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const generatePdf = () => {
    if (selectedChapter === "Rational Numbers" && chapterContent[selectedChapter]?.googleDocId) {
      window.open(`https://docs.google.com/document/d/${chapterContent[selectedChapter].googleDocId}/export?format=pdf`, '_blank');
      return;
    }
    
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(selectedChapter, 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Subject: ${selectedSubject}`, 20, 30);
    doc.text(`Grade: ${selectedGrade}`, 20, 37);
    doc.setFontSize(14);
    doc.text("Content:", 20, 50);
    doc.setFontSize(12);
    
    let yPosition = 60;
    content.content.forEach((paragraph, index) => {
      if (index > 0 && paragraph.startsWith("-")) {
        doc.setFontSize(10);
        doc.text("• " + paragraph.substring(1), 25, yPosition);
        yPosition += 7;
      } else {
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(paragraph, 170);
        doc.text(splitText, 20, yPosition);
        yPosition += splitText.length * 7;
      }
      yPosition += 5;
    });
    
    if (content.examples.length > 0) {
      doc.setFontSize(14);
      doc.text("Examples:", 20, yPosition + 10);
      yPosition += 20;
      
      doc.setFontSize(10);
      content.examples.forEach((example) => {
        const splitExample = doc.splitTextToSize(example, 170);
        doc.text(splitExample, 25, yPosition);
        yPosition += splitExample.length * 7 + 5;
      });
    }
    
    doc.save(`${selectedChapter.replace(/\s+/g, '_')}_Notes.pdf`);
  };

  return (
    <div className="learn-container">
      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Mobile Navigation Toggle */}
      <button 
        className="mobile-nav-toggle" 
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? "✕" : "☰"}
      </button>
      
      {/* Compact Vertical Navbar */}
      <nav className={`main-nav ${mobileNavOpen ? 'open' : ''}`}>
        <div className="nav-header">
          <h3>Subjects</h3>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search chapters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="subject-list">
          {Object.keys(subjects).map((subj) => (
            <div key={subj} className="subject-item">
            <button
              className={`subject-btn ${selectedSubject === subj ? 'active' : ''}`}
              style={{ borderLeft: `4px solid ${subjects[subj].color}` }}
              onClick={() => handleSubjectClick(subj)}
            >
              <span className="subject-icon" style={{ fontSize: '1rem' }}>{subjects[subj].icon}</span>
              <span className="subject-name">{subj}</span>
            </button>
              
              {selectedSubject === subj && (
                <div className="grade-list">
                  {Object.keys(subjects[subj].chapters).map((grade) => (
                    <button
                      key={grade}
                      className={`grade-btn ${selectedGrade === grade ? 'active' : ''}`}
                      onClick={() => handleGradeClick(grade)}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              )}
              
              {selectedSubject === subj && (
                <div className="chapter-list">
                  {subjects[subj].chapters[selectedGrade].map((chapter) => (
                    <button
                      key={chapter}
                      className={`chapter-btn ${selectedChapter === chapter ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedChapter(chapter);
                        setActiveTab("content");
                        setMobileNavOpen(false);
                      }}
                    >
                      {chapter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <main className="content-area">
        {isLoading ? (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p>Loading content...</p>
          </div>
        ) : (
          <div className="chapter-content-container">
            <div className="chapter-header">
              <h1>{selectedChapter}</h1>
              <div className="chapter-meta">
                <span className="subject-tag" style={{ backgroundColor: subjects[selectedSubject].color }}>
                  {subjects[selectedSubject].icon} {selectedSubject}
                </span>
                <span className="grade-tag">{selectedGrade}</span>
                <span className={`difficulty-tag ${
                  content.difficulty.toLowerCase() === 'easy' ? 'easy' : 
                  content.difficulty.toLowerCase() === 'medium' ? 'medium' : 'hard'
                }`}>
                  {content.difficulty}
                </span>
                <span className="time-tag">⏱️ {content.timeToRead}</span>
              </div>
            </div>
            
            <div className="content-tabs">
              <button 
                className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
                onClick={() => setActiveTab('content')}
              >
                Content
              </button>
              <button 
                className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
                disabled={content.quiz.length === 0}
              >
                Quiz {content.quiz.length > 0 && <span className="badge">{content.quiz.length}</span>}
              </button>
              <button 
                className={`tab-btn ${activeTab === 'recordings' ? 'active' : ''}`}
                onClick={() => setActiveTab('recordings')}
                disabled={content.recordings.length === 0}
              >
                Recordings {content.recordings.length > 0 && <span className="badge">{content.recordings.length}</span>}
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === "content" && (
                <div className="content-section">
                  {selectedChapter === "Rational Numbers" && chapterContent[selectedChapter]?.googleDocId ? (
                    <div className="drive-content">
                      <div className="embed-container">
                        <iframe
                          src={getDriveEmbedUrl(chapterContent[selectedChapter].googleDocId)}
                          title="Google Drive Document Viewer"
                        ></iframe>
                      </div>
                      <a 
                        href={`https://docs.google.com/document/d/${chapterContent[selectedChapter].googleDocId}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-docs-link"
                      >
                        Open in Google Docs
                      </a>
                    </div>
                  ) : (
                    <div className="text-content">
                      {content.content.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph.startsWith("-") ? (
                            <span className="list-item">• {paragraph.substring(1)}</span>
                          ) : (
                            paragraph
                          )}
                        </p>
                      ))}
                    </div>
                  )}

                  {content.examples.length > 0 && (
                    <div className="examples-section">
                      <h3>Examples</h3>
                      <ul className="examples-list">
                        {content.examples.map((ex, idx) => (
                          <li key={idx}>
                            <code>{ex}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === "quiz" && (
                <div className="quiz-section">
                  {!quizSubmitted ? (
                    <>
                      <h2>Quiz: {selectedChapter}</h2>
                      <p className="quiz-description">Test your knowledge with these {content.quiz.length} questions.</p>
                      
                      <div className="quiz-questions">
                        {content.quiz.map((q, qIndex) => (
                          <div key={qIndex} className="question-card">
                            <h3>Question {qIndex + 1}</h3>
                            <p>{q.question}</p>
                            
                            <div className="options-list">
                              {q.options.map((option, oIndex) => (
                                <div 
                                  key={oIndex} 
                                  className={`option ${quizAnswers[qIndex] === oIndex ? 'selected' : ''}`}
                                  onClick={() => handleQuizAnswer(qIndex, oIndex)}
                                >
                                  <div className="option-selector">
                                    <div className={`selector-dot ${quizAnswers[qIndex] === oIndex ? 'active' : ''}`}></div>
                                  </div>
                                  <div className="option-text">{option}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        className="submit-quiz-btn"
                        onClick={submitQuiz}
                        disabled={Object.keys(quizAnswers).length < content.quiz.length}
                      >
                        Submit Quiz
                      </button>
                    </>
                  ) : (
                    <div className="quiz-results">
                      <div className="result-icon">
                        {quizScore >= content.quiz.length * 0.7 ? (
                          <span className="success-icon">✓</span>
                        ) : (
                          <span className="error-icon">✕</span>
                        )}
                      </div>
                      <h2>
                        {quizScore >= content.quiz.length * 0.7 ? "Great Job!" : "Keep Practicing!"}
                      </h2>
                      <p className="score-display">
                        You scored {quizScore} out of {content.quiz.length} ({Math.round((quizScore / content.quiz.length) * 100)}%)
                      </p>
                      
                      <div className="score-bar">
                        <div 
                          className={`progress ${quizScore >= content.quiz.length * 0.7 ? 'high-score' : 'low-score'}`} 
                          style={{ width: `${(quizScore / content.quiz.length) * 100}%` }}
                        ></div>
                      </div>
                      
                      <div className="result-actions">
                        <button 
                          className="try-again-btn"
                          onClick={resetQuiz}
                        >
                          Try Again
                        </button>
                        <button 
                          className="back-to-content"
                          onClick={() => setActiveTab('content')}
                        >
                          Back to Content
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === "recordings" && (
                <div className="recordings-section">
                  <h2>Recording Sessions: {selectedChapter}</h2>
                  <p className="recordings-description">Watch these recorded lectures to reinforce your learning.</p>
                  
                  <div className="videos-grid">
                    {content.recordings.map((recording, index) => (
                      <div key={index} className="video-card">
                        <h3>{recording.title}</h3>
                        <div className="video-container">
                          <iframe 
                            src={recording.url} 
                            title={recording.title}
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="video-footer">
                          <span>Session {index + 1} of {content.recordings.length}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="back-btn"
                    onClick={() => setActiveTab('content')}
                  >
                    ← Back to Content
                  </button>
                </div>
              )}
            </div>
            
            <div className="action-buttons">
              <button 
                className="action-btn quiz"
                onClick={() => setActiveTab('quiz')}
                disabled={content.quiz.length === 0}
              >
                Take Quiz
              </button>
              <button 
                className="action-btn download"
                onClick={generatePdf}
              >
                Download PDF
              </button>
              <button 
                className="action-btn recordings"
                onClick={() => setActiveTab('recordings')}
                disabled={content.recordings.length === 0}
              >
                Recordings
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Learn;