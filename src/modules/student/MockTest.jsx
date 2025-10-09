




// import { useState, useEffect } from "react";
// import './MockTest.css';
// import Navbar from "./Navbarrr";
// import { useQuiz } from "./QuizContext";
// import { useNavigate } from "react-router-dom";

// function MockTest() {
//   const { updateMockTestResults } = useQuiz();
//   const navigate = useNavigate();
//   const [classes, setClasses] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [chapters, setChapters] = useState([]);
//   const [selectedChapter, setSelectedChapter] = useState(null);
//   const [quiz, setQuiz] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(20 * 60);
//   const [skippedQuestions, setSkippedQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [showInstructions, setShowInstructions] = useState(true);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [showReviewPopup, setShowReviewPopup] = useState(false);
//   const [isPassed, setIsPassed] = useState(false);
//   const [warningCount, setWarningCount] = useState(0); // Track warnings
//   const [showWarning, setShowWarning] = useState(false); // Show warning message

//   const optionLabels = ["A", "B", "C", "D"];
//   const classIcons = ["🏫", "📚", "🎓", "💼", "🔬", "📊"];
//   const subjectIcons = ["📖", "🧮", "🔭", "🧪", "🌍", "📜", "💻", "🎨"];
//   const chapterIcons = ["📝", "🔍", "💡", "⚡", "🌟", "🎯", "📊", "🔬"];

//   // Fetch classes
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/classes")
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch classes");
//         return res.json();
//       })
//       .then(data => setClasses(data.classes || []))
//       .catch(() => setError("Failed to load classes"));
//   }, []);

//   // Handle visibility change (tab switch or minimization)
//   useEffect(() => {
//     if (!quiz.length || isFinished || showInstructions) return; // Only active during quiz

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         // User switched tabs or minimized
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             // End quiz after 3 warnings
//             setIsFinished(true);
//             const passed = score > 20;
//             setIsPassed(passed);
//             updateMockTestResults(score, quiz.length, passed);
//             exitFullScreen();
//             setShowWarning(false);
//             return newCount;
//           } else {
//             // Show warning
//             setShowWarning(true);
//             return newCount;
//           }
//         });
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [quiz, isFinished, showInstructions, score, updateMockTestResults]);

//   // Handle full-screen change (exit full-screen)
//   useEffect(() => {
//     const handleFullScreenChange = () => {
//       const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
//       setIsFullScreen(isCurrentlyFullScreen);

//       if (!isCurrentlyFullScreen && quiz.length > 0 && !isFinished && !showInstructions) {
//         // User exited full-screen during quiz
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             // End quiz after 3 warnings
//             setIsFinished(true);
//             const passed = score > 20;
//             setIsPassed(passed);
//             updateMockTestResults(score, quiz.length, passed);
//             exitFullScreen();
//             setShowWarning(false);
//             return newCount;
//           } else {
//             // Show warning and re-enter full-screen
//             setShowWarning(true);
//             enterFullScreen();
//             return newCount;
//           }
//         });
//       }
//     };

//     document.addEventListener("fullscreenchange", handleFullScreenChange);
//     document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
//     document.addEventListener("mozfullscreenchange", handleFullScreenChange);
//     document.addEventListener("MSFullscreenChange", handleFullScreenChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullScreenChange);
//       document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
//       document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
//       document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
//     };
//   }, [quiz, isFinished, showInstructions, score, updateMockTestResults]);

//   // Auto-hide warning after 3 seconds
//   useEffect(() => {
//     if (showWarning) {
//       const timer = setTimeout(() => {
//         setShowWarning(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showWarning]);

//   // Timer for quiz
//   useEffect(() => {
//     if (quiz.length > 0 && !isFinished && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(prev => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             setIsFinished(true);
//             const passed = score > 20;
//             setIsPassed(passed);
//             updateMockTestResults(score, quiz.length, passed);
//             exitFullScreen();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [quiz, isFinished, timeLeft, score, updateMockTestResults]);

//   const fetchSubjects = (className) => {
//     setLoading(true);
//     setError(null);
//     fetch(`http://127.0.0.1:8000/mock_subjects?class_name=${className}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch subjects");
//         return res.json();
//       })
//       .then(data => {
//         setSubjects(data.subjects || []);
//         setChapters([]);
//         setSelectedSubject(null);
//         setSelectedChapter(null);
//         setQuiz([]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load subjects: " + err.message);
//         setLoading(false);
//       });
//   };

//   const fetchChapters = (className, subject) => {
//     setLoading(true);
//     setError(null);
//     fetch(`http://127.0.0.1:8000/mock_chapters?class_name=${className}&subject=${encodeURIComponent(subject)}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch chapters");
//         return res.json();
//       })
//       .then(data => {
//         const chaptersData = Array.isArray(data.chapters) ? data.chapters : [];
//         setChapters(chaptersData);
//         setSelectedChapter(null);
//         setQuiz([]);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to load chapters: " + err.message);
//         setChapters([]);
//         setLoading(false);
//       });
//   };

//   const fetchMockTest = (chapter, difficulty = "normal", retry = false) => {
//     setLoading(true);
//     setError(null);
//     setShowInstructions(false);
//     setTimeLeft(20 * 60);
//     setSkippedQuestions([]);
//     setUserAnswers(Array(50).fill(null));
    
//     fetch(
//       `http://127.0.0.1:8000/mock_test?class_name=${selectedClass}&subject=${encodeURIComponent(
//         selectedSubject
//       )}&chapter=${encodeURIComponent(chapter)}&difficulty=${difficulty}&retry=${retry}&num_questions=50`
//     )
//       .then(res => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
//         let questions = [];
        
//         if (Array.isArray(data)) {
//           questions = data;
//         } else if (data && Array.isArray(data.questions)) {
//           questions = data.questions;
//         } else if (data && Array.isArray(data.quiz)) {
//           questions = data.quiz;
//         } else if (data && data.questions) {
//           questions = Object.values(data.questions);
//         } else {
//           throw new Error("Invalid response format: " + JSON.stringify(data));
//         }
        
//         if (questions.length === 0) {
//           throw new Error("No questions received from server");
//         }

//         const validQuestions = questions
//           .filter(q => q && q.question && q.answer && q.options)
//           .map((q, index) => ({
//             id: index,
//             question: q.question.trim(),
//             options: q.options,
//             answer: q.answer
//           }))
//           .slice(0, 50);

//         while (validQuestions.length < 50) {
//           validQuestions.push({
//             id: validQuestions.length,
//             question: `Placeholder Question ${validQuestions.length + 1}`,
//             options: { A: "Option A", B: "Option B", C: "Option C", D: "Option D" },
//             answer: "A"
//           });
//         }

//         setQuiz(validQuestions);
//         setCurrentQ(0);
//         setSelected(null);
//         setScore(0);
//         setIsFinished(false);
//         setIsPassed(false);
//         setShowAnswer(false);
//         setShowReviewPopup(false);
//         setWarningCount(0); // Reset warnings
//         setShowWarning(false);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setError("Failed to load mock test: " + err.message);
//         setLoading(false);
//         setQuiz([]);
//         setShowInstructions(true);
//       });
//   };

//   const handleClassClick = (className) => {
//     setSelectedClass(className);
//     setSelectedSubject(null);
//     setSelectedChapter(null);
//     setSubjects([]);
//     setChapters([]);
//     setQuiz([]);
//     setShowInstructions(true);
//     fetchSubjects(className);
//   };

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setSelectedChapter(null);
//     setChapters([]);
//     setQuiz([]);
//     setShowInstructions(true);
//     fetchChapters(selectedClass, subject);
//   };

//   const handleChapterClick = (chapter) => {
//     setSelectedChapter(chapter);
//     setShowInstructions(true);
//   };

//   const startMockTest = () => {
//     if (selectedChapter) {
//       fetchMockTest(selectedChapter);
//       enterFullScreen();
//     } else {
//       setError("Please select a chapter to start the mock test");
//     }
//   };

//   const startQuiz = () => {
//     setShowInstructions(false);
//     if (quiz.length === 0) {
//       fetchMockTest(selectedChapter);
//       enterFullScreen();
//     }
//   };

//   const handleAnswer = (label) => {
//     setSelected(label);
//     const newUserAnswers = [...userAnswers];
//     newUserAnswers[currentQ] = label;
//     setUserAnswers(newUserAnswers);

//     if (label === quiz[currentQ]?.answer) {
//       setScore(score + 1);
//     }
//   };

//   const nextQuestion = () => {
//     if (currentQ < quiz.length - 1) {
//       setCurrentQ(currentQ + 1);
//       setSelected(userAnswers[currentQ + 1] || null);
//       setShowAnswer(false);
//     } else {
//       const passed = score > 20;
//       setIsPassed(passed);
//       setIsFinished(true);
//       updateMockTestResults(score, quiz.length, passed);
//       exitFullScreen();
//     }
//   };

//   const prevQuestion = () => {
//     if (currentQ > 0) {
//       setCurrentQ(currentQ - 1);
//       setSelected(userAnswers[currentQ - 1] || null);
//       setShowAnswer(false);
//     }
//   };

//   const skipQuestion = () => {
//     const newSkipped = [...skippedQuestions];
//     if (!newSkipped.includes(currentQ)) {
//       newSkipped.push(currentQ);
//       setSkippedQuestions(newSkipped);
//     }
//     nextQuestion();
//   };

//   const goToQuestion = (index) => {
//     setCurrentQ(index);
//     setSelected(userAnswers[index] || null);
//     setShowAnswer(false);
//   };

//   const retryQuiz = () => {
//     setWarningCount(0); // Reset warnings
//     setShowWarning(false);
//     fetchMockTest(selectedChapter, "normal", true);
//     enterFullScreen();
//   };

//   const nextLevel = () => {
//     if (isPassed) {
//       setWarningCount(0); // Reset warnings
//       setShowWarning(false);
//       fetchMockTest(selectedChapter, "hard");
//       enterFullScreen();
//     }
//   };

//   const backToChapters = () => {
//     setSelectedChapter(null);
//     setQuiz([]);
//     setCurrentQ(0);
//     setSelected(null);
//     setScore(0);
//     setIsFinished(false);
//     setIsPassed(false);
//     setShowAnswer(false);
//     setUserAnswers([]);
//     setShowInstructions(true);
//     setShowReviewPopup(false);
//     setWarningCount(0);
//     setShowWarning(false);
//     exitFullScreen();
//   };

//   const backToSubjects = () => {
//     setSelectedSubject(null);
//     setSelectedChapter(null);
//     setChapters([]);
//     setQuiz([]);
//     setShowInstructions(true);
//   };

//   const backToClasses = () => {
//     setSelectedClass(null);
//     setSelectedSubject(null);
//     setSelectedChapter(null);
//     setSubjects([]);
//     setChapters([]);
//     setQuiz([]);
//     setShowInstructions(true);
//   };

//   const backToPractice = () => {
//     navigate('/practice'); // Navigate back to practice page
//   };

//   const enterFullScreen = () => {
//     const elem = document.documentElement;
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen().catch(() => {});
//     } else if (elem.mozRequestFullScreen) {
//       elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) {
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) {
//       elem.msRequestFullscreen();
//     }
//     setIsFullScreen(true);
//   };

//   const exitFullScreen = () => {
//     if (document.exitFullscreen) {
//       document.exitFullscreen().catch(() => {});
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) {
//       document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) {
//       document.msExitFullscreen();
//     }
//     setIsFullScreen(false);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const toggleReviewPopup = () => {
//     setShowReviewPopup(!showReviewPopup);
//   };

//   // Determine back button text and action based on current screen
//   const getBackButtonConfig = () => {
//     // If we're in quiz or finished state, no back button
//     if (quiz.length > 0 && !isFinished && !showInstructions) {
//       return null;
//     }

//     // If we're in instructions screen with chapter selected
//     if (showInstructions && selectedChapter) {
//       // return {
//       //   text: "Back to Chapters",
//       //   action: backToChapters
//       // };
//     }
    
//     // If we're in chapter selection
//     if (selectedSubject && !selectedChapter) {
//       return {
//         text: "Back to Subjects",
//         action: backToSubjects
//       };
//     }
    
//     // If we're in subject selection
//     if (selectedClass && !selectedSubject) {
//       return {
//         text: "Back to Classes",
//         action: backToClasses
//       };
//     }
    
//     // If we're in class selection
//     if (!selectedClass) {
//       return {
//         text: "Back to Practice",
//         action: backToPractice
//       };
//     }

//     // Default fallback
//     // return {
//     //   text: "Back to Practice",
//     //   action: backToPractice
//     // };
//   };

//   const backButtonConfig = getBackButtonConfig();

//   if (loading) return (
//     <div className="loading-container">
//       <div className="edu-loader">
//         <span role="img" aria-label="book" className="edu-icon">📚</span>
//         <span role="img" aria-label="graduation" className="edu-icon">🎓</span>
//         <span role="img" aria-label="lightbulb" className="edu-icon">💡</span>
//       </div>
//       <p>Preparing your test...</p>
//     </div>
//   );

//   return (
//     <>
//       <Navbar isFullScreen={isFullScreen && quiz.length > 0 && !showInstructions} />
      
//       {/* Global Back Button - Just below the navbar */}
//       {!isFullScreen && backButtonConfig && (
//         <div className="navbar-back-wrapper">
//           <div className="navbar-back-container">
//             <button 
//               className="navbar-back-button"
//               onClick={backButtonConfig.action}
//             >
//               <span className="back-arrow">←</span>
//               {backButtonConfig.text}
//             </button>
//           </div>
//         </div>
//       )}
      
//       {error && !showInstructions && (
//         <div className="error-container">
//           <div className="error-icon">⚠️</div>
//           <p>{error}</p>
//           <button className="retry-btn" onClick={() => window.location.reload()}>
//             Try Again
//           </button>
//         </div>
//       )}
//       {showWarning && !isFinished && (
//         <div className="warning-container">
//           <div className="warning-icon">⚠️</div>
//           <p>
//             Warning {warningCount} of 3: Please stay on the test tab or in full-screen mode. The test will end after 3 warnings.
//           </p>
//         </div>
//       )}
//       {!selectedClass && !error && (
//         <div className="selection-container">
//           <div className="header">
//             <h2>Select Your Class</h2>
//             <p>Choose your academic level to begin</p>
//           </div>
//           <div className="cards-grid">
//             {classes.map((cl, i) => (
//               <div 
//                 key={i} 
//                 className="selection-card"
//                 onClick={() => handleClassClick(cl)}
//               >
//                 <div className="card-icon">{classIcons[i % classIcons.length]}</div>
//                 <h3>{cl}</h3>
//                 <p>Start your learning journey</p>
//                 <div className="card-hover"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {!selectedSubject && selectedClass && !error && (
//         <div className="selection-container">
//           <div className="header">
//             <h2>Select Subject</h2>
//             <p>Choose a subject for {selectedClass}</p>
//           </div>
//           <div className="cards-grid">
//             {subjects.map((sub, i) => (
//               <div 
//                 key={i} 
//                 className="selection-card subject-card"
//                 onClick={() => handleSubjectClick(sub)}
//               >
//                 <div className="card-icon">{subjectIcons[i % subjectIcons.length]}</div>
//                 <h3>{sub}</h3>
//                 <p>Explore chapters and topics</p>
//                 <div className="card-hover"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {!selectedChapter && selectedSubject && !error && (
//         <div className="selection-container chapter-select">
//           <div className="header">
//             <h2>Select Chapter</h2>
//             <p>Choose a chapter from {selectedSubject}</p>
//           </div>
//           <div className="cards-grid">
//             {Array.isArray(chapters) && chapters.map((chap, i) => (
//               <div 
//                 key={i} 
//                 className={`selection-card chapter-card ${selectedChapter === chap ? 'selected' : ''}`}
//                 onClick={() => handleChapterClick(chap)}
//               >
//                 <div className="card-icon">{chapterIcons[i % chapterIcons.length]}</div>
//                 <h3>{chap}</h3>
//                 <p>{selectedChapter === chap ? 'Selected' : 'Click to select'}</p>
//                 <div className="card-hover"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {(quiz.length === 0 || showInstructions) && !error && selectedChapter && (
//         <div className="instructions-container">
//           <div className="instructions-card">
//             <div className="instructions-icon">📋</div>
//             <h2>Mock Test Instructions</h2>
//             <div className="instructions-content">
//               <div className="instruction-item">
//                 <span className="instruction-icon">⏱️</span>
//                 <div>
//                   <h3>Time Limit</h3>
//                   <p>20 minutes for 50 questions</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">❓</span>
//                 <div>
//                   <h3>Question Format</h3>
//                   <p>Multiple choice questions with 4 options each</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">📊</span>
//                 <div>
//                   <h3>Passing Criteria</h3>
//                   <p>Score more than 20 to pass and unlock next level</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">⏭️</span>
//                 <div>
//                   <h3>Skipping Questions</h3>
//                   <p>You can skip questions and come back to them later</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">📝</span>
//                 <div>
//                   <h3>Scoring</h3>
//                   <p>1 point for each correct answer. No negative marking.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="test-details">
//               <h3>Test Details:</h3>
//               <p><strong>Class:</strong> {selectedClass}</p>
//               <p><strong>Subject:</strong> {selectedSubject}</p>
//               <p><strong>Chapter:</strong> {selectedChapter}</p>
//               <p><strong>Total Questions:</strong> 50</p>
//               <p><strong>Passing Score:</strong> 21/50 or more</p>
//             </div>
//             <div className="instructions-actions">
//               <button className="back-button" onClick={backToChapters}>
//                 ← Back to Chapters
//               </button>
//               <button className="start-quiz-btn" onClick={startQuiz}>
//                 Start Test Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {isFinished && !error && (
//         <div className={`finished-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
//           <div className="result-card">
//             <div className={`result-icon ${isPassed ? 'pass' : 'fail'}`}>
//               {isPassed ? '🎉' : '😔'}
//             </div>
//             <h2>{isPassed ? 'Congratulations! You Passed!' : 'Quiz Completed - Try Again'}</h2>
            
//             <div className={`status-badge ${isPassed ? 'pass-badge' : 'fail-badge'}`}>
//               {isPassed ? 'PASS' : 'FAIL'}
//             </div>
            
//             <div className="score-display">
//               <div className={`score-circle ${isPassed ? 'pass-score' : 'fail-score'}`}>
//                 <span className="score">{score}</span>
//                 <span className="total">/{quiz.length}</span>
//               </div>
//               <p>{Math.round((score / quiz.length) * 100)}% Correct</p>
//               <p className={`pass-fail-text ${isPassed ? 'pass-text' : 'fail-text'}`}>
//                 {isPassed 
//                   ? `You scored ${score} which is greater than 20. You are eligible for next level!` 
//                   : `You scored ${score} which is less than or equal to 20. Please retry the same level.`}
//               </p>
//             </div>
            
//             <div className="time-result">
//               <p>Time Taken: {formatTime(20 * 60 - timeLeft)}</p>
//             </div>
            
//             <div className="result-actions">
//               <button className="review-btn" onClick={toggleReviewPopup}>
//                 📋 Review Questions & Answers
//               </button>
//               <button className="retry-btn" onClick={retryQuiz}>
//                 🔄 Retry Same Level
//               </button>
//               {isPassed && (
//                 <button className="next-btn" onClick={nextLevel}>
//                   🚀 Next Level
//                 </button>
//               )}
//               <button className="chapters-btn" onClick={backToChapters}>
//                 📚 Back to Chapters
//               </button>
//             </div>
            
//             <div className="answers-section">
//               <h3>Quick Review:</h3>
//               <div className="answers-grid">
//                 {quiz.slice(0, 10).map((q, i) => (
//                   <div key={i} className={`answer-item ${userAnswers[i] === q.answer ? 'correct' : 'incorrect'}`}>
//                     <span className="q-number">Q{i + 1}</span>
//                     <span className="correct-answer">{q.answer}</span>
//                     <span className="user-answer">{userAnswers[i] || 'Skipped'}</span>
//                   </div>
//                 ))}
//               </div>
//               <button className="view-all-btn" onClick={toggleReviewPopup}>
//                 View All Questions & Answers
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {quiz.length > 0 && !isFinished && !showInstructions && !error && (
//         <div className={`quiz-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
//           <div className="quiz-header">
//             <div className="quiz-info">
//               <div className="progress-bar">
//                 <div 
//                   className="progress-fill" 
//                   style={{width: `${((currentQ + 1) / quiz.length) * 100}%`}}
//                 ></div>
//               </div>
//               <div className="quiz-stats">
//                 <span>Question {currentQ + 1} of {quiz.length}</span>
//                 <span className="timer">⏱️ {formatTime(timeLeft)}</span>
//               </div>
//             </div>
//           </div>
//           <div className="question-nav">
//             {quiz.map((_, index) => (
//               <button
//                 key={index}
//                 className={`nav-dot ${index === currentQ ? 'active' : ''} ${
//                   userAnswers[index] ? 'answered' : ''
//                 } ${skippedQuestions.includes(index) ? 'skipped' : ''}`}
//                 onClick={() => goToQuestion(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//           <div className="question-section">
//             <h3 className="question">{currentQ + 1}. {quiz[currentQ].question}</h3>
//             <div className="options-grid">
//               {quiz[currentQ].options && Object.entries(quiz[currentQ].options).map(([label, opt]) => (
//                 <button
//                   key={label}
//                   className={`option-card ${
//                     selected === label ? 'selected' : ''
//                   } ${showAnswer ? (label === quiz[currentQ].answer ? 'correct-answer' : '') : ''}`}
//                   onClick={() => handleAnswer(label)}
//                   disabled={showAnswer}
//                 >
//                   <span className="option-label">{label}</span>
//                   <span className="option-text">{opt}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="quiz-navigation">
//             <button 
//               className="nav-btn prev-btn" 
//               onClick={prevQuestion}
//               disabled={currentQ === 0}
//             >
//               ← Previous
//             </button>
//             <button 
//               className="nav-btn skip-btn" 
//               onClick={skipQuestion}
//               disabled={currentQ === quiz.length - 1}
//             >
//               Skip →
//             </button>
//             <button 
//               className="nav-btn next-btn" 
//               onClick={nextQuestion}
//               disabled={!selected && !skippedQuestions.includes(currentQ)}
//             >
//               {currentQ < quiz.length - 1 ? 'Next →' : 'Finish'}
//             </button>
//           </div>
//         </div>
//       )}
//       {showReviewPopup && (
//         <div className="popup-overlay">
//           <div className="review-popup">
//             <div className="popup-header">
//               <h2>Questions & Answers Review</h2>
//               <button className="close-popup" onClick={toggleReviewPopup}>×</button>
//             </div>
//             <div className="popup-content">
//               <div className="review-summary">
//                 <p><strong>Class:</strong> {selectedClass} | <strong>Subject:</strong> {selectedSubject} | <strong>Chapter:</strong> {selectedChapter}</p>
//                 <p><strong>Score:</strong> {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)</p>
//                 <p><strong>Status:</strong> <span className={isPassed ? 'pass-text' : 'fail-text'}>{isPassed ? 'PASSED' : 'FAILED'}</span></p>
//               </div>
//               <div className="questions-review">
//                 {quiz.map((q, index) => (
//                   <div key={index} className="question-review-item">
//                     <div className="question-review-header">
//                       <span className="question-number">Question {index + 1}:</span>
//                       <span className={`answer-status ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}>
//                         {userAnswers[index] === q.answer ? '✓ Correct' : userAnswers[index] ? '✗ Incorrect' : '⏭️ Skipped'}
//                       </span>
//                     </div>
//                     <p className="review-question">{q.question}</p>
//                     <div className="review-options">
//                       {Object.entries(q.options).map(([label, option]) => (
//                         <div 
//                           key={label}
//                           className={`review-option ${
//                             label === q.answer ? 'correct-answer' : 
//                             label === userAnswers[index] && label !== q.answer ? 'user-incorrect' : ''
//                           }`}
//                         >
//                           <span className="option-label">{label}:</span>
//                           <span className="option-text">{option}</span>
//                           {label === q.answer && <span className="correct-mark"> ✓ Correct Answer</span>}
//                           {label === userAnswers[index] && label !== q.answer && <span className="incorrect-mark"> ✗ Your Answer</span>}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="popup-actions">
//               <button className="popup-close-btn" onClick={toggleReviewPopup}>
//                 Close Review
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MockTest;





import { useState, useEffect } from "react";
import './MockTest.css';
import Navbar from "./Navbarrr";
import { useQuiz } from "./QuizContext";
import { useNavigate } from "react-router-dom";

function MockTest() {
  const { updateMockTestResults } = useQuiz();
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const optionLabels = ["A", "B", "C", "D"];
  const classIcons = ["🏫", "📚", "🎓", "💼", "🔬", "📊"];
  const subjectIcons = ["📖", "🧮", "🔭", "🧪", "🌍", "📜", "💻", "🎨"];
  const chapterIcons = ["📝", "🔍", "💡", "⚡", "🌟", "🎯", "📊", "🔬"];

  // 🧹 Hide chatbot widget on this page
  useEffect(() => {
    const chatWidget = document.querySelector('iframe[src*="tawk"], iframe[src*="crisp"], iframe[src*="chat"], iframe[src*="bot"], iframe[src*="dialogflow"]');
    if (chatWidget) {
      chatWidget.style.display = "none";
    }

    const chatButton = document.querySelector('div[style*="z-index"][style*="bottom"][style*="right"]');
    if (chatButton && chatButton.querySelector("svg, img")) {
      chatButton.style.display = "none";
    }

    return () => {
      if (chatWidget) {
        chatWidget.style.display = "block";
      }
      if (chatButton) {
        chatButton.style.display = "block";
      }
    };
  }, []);

  // Fetch classes
  useEffect(() => {
    fetch("http://127.0.0.1:8000/classes")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch classes");
        return res.json();
      })
      .then(data => setClasses(data.classes || []))
      .catch(() => setError("Failed to load classes"));
  }, []);

  // Handle visibility change
  useEffect(() => {
    if (!quiz.length || isFinished || showInstructions) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarningCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setIsFinished(true);
            const passed = score > 20;
            setIsPassed(passed);
            updateMockTestResults(score, quiz.length, passed);
            exitFullScreen();
            setShowWarning(false);
            return newCount;
          } else {
            setShowWarning(true);
            return newCount;
          }
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [quiz, isFinished, showInstructions, score, updateMockTestResults]);

  // Handle full-screen change
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
      setIsFullScreen(isCurrentlyFullScreen);

      if (!isCurrentlyFullScreen && quiz.length > 0 && !isFinished && !showInstructions) {
        setWarningCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            setIsFinished(true);
            const passed = score > 20;
            setIsPassed(passed);
            updateMockTestResults(score, quiz.length, passed);
            exitFullScreen();
            setShowWarning(false);
            return newCount;
          } else {
            setShowWarning(true);
            enterFullScreen();
            return newCount;
          }
        });
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
    };
  }, [quiz, isFinished, showInstructions, score, updateMockTestResults]);

  // Auto-hide warning
  useEffect(() => {
    if (showWarning) {
      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWarning]);

  // Timer for quiz
  useEffect(() => {
    if (quiz.length > 0 && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsFinished(true);
            const passed = score > 20;
            setIsPassed(passed);
            updateMockTestResults(score, quiz.length, passed);
            exitFullScreen();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quiz, isFinished, timeLeft, score, updateMockTestResults]);

  const fetchSubjects = (className) => {
    setLoading(true);
    setError(null);
    fetch(`http://127.0.0.1:8000/mock_subjects?class_name=${className}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch subjects");
        return res.json();
      })
      .then(data => {
        setSubjects(data.subjects || []);
        setChapters([]);
        setSelectedSubject(null);
        setSelectedChapter(null);
        setQuiz([]);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load subjects: " + err.message);
        setLoading(false);
      });
  };

  const fetchChapters = (className, subject) => {
    setLoading(true);
    setError(null);
    fetch(`http://127.0.0.1:8000/mock_chapters?class_name=${className}&subject=${encodeURIComponent(subject)}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch chapters");
        return res.json();
      })
      .then(data => {
        const chaptersData = Array.isArray(data.chapters) ? data.chapters : [];
        setChapters(chaptersData);
        setSelectedChapter(null);
        setQuiz([]);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load chapters: " + err.message);
        setChapters([]);
        setLoading(false);
      });
  };

  const fetchMockTest = (chapter, difficulty = "normal", retry = false) => {
    setLoading(true);
    setError(null);
    setShowInstructions(false);
    setTimeLeft(20 * 60);
    setSkippedQuestions([]);
    setUserAnswers(Array(50).fill(null));
    
    fetch(
      `http://127.0.0.1:8000/mock_test?class_name=${selectedClass}&subject=${encodeURIComponent(
        selectedSubject
      )}&chapter=${encodeURIComponent(chapter)}&difficulty=${difficulty}&retry=${retry}&num_questions=50`
    )
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        let questions = [];
        
        if (Array.isArray(data)) {
          questions = data;
        } else if (data && Array.isArray(data.questions)) {
          questions = data.questions;
        } else if (data && Array.isArray(data.quiz)) {
          questions = data.quiz;
        } else if (data && data.questions) {
          questions = Object.values(data.questions);
        } else {
          throw new Error("Invalid response format: " + JSON.stringify(data));
        }
        
        if (questions.length === 0) {
          throw new Error("No questions received from server");
        }

        const validQuestions = questions
          .filter(q => q && q.question && q.answer && q.options)
          .map((q, index) => ({
            id: index,
            question: q.question.trim(),
            options: q.options,
            answer: q.answer
          }))
          .slice(0, 50);

        while (validQuestions.length < 50) {
          validQuestions.push({
            id: validQuestions.length,
            question: `Placeholder Question ${validQuestions.length + 1}`,
            options: { A: "Option A", B: "Option B", C: "Option C", D: "Option D" },
            answer: "A"
          });
        }

        setQuiz(validQuestions);
        setCurrentQ(0);
        setSelected(null);
        setScore(0);
        setIsFinished(false);
        setIsPassed(false);
        setShowAnswer(false);
        setShowReviewPopup(false);
        setWarningCount(0);
        setShowWarning(false);
        setShowAnswerKey(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load mock test: " + err.message);
        setLoading(false);
        setQuiz([]);
        setShowInstructions(true);
      });
  };

  const handleClassClick = (className) => {
    setSelectedClass(className);
    setSelectedSubject(null);
    setSelectedChapter(null);
    setSubjects([]);
    setChapters([]);
    setQuiz([]);
    setShowInstructions(true);
    fetchSubjects(className);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setChapters([]);
    setQuiz([]);
    setShowInstructions(true);
    fetchChapters(selectedClass, subject);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    setShowInstructions(true);
  };

  const startMockTest = () => {
    if (selectedChapter) {
      fetchMockTest(selectedChapter);
      enterFullScreen();
    } else {
      setError("Please select a chapter to start the mock test");
    }
  };

  const startQuiz = () => {
    setShowInstructions(false);
    if (quiz.length === 0) {
      fetchMockTest(selectedChapter);
      enterFullScreen();
    }
  };

  const handleAnswer = (label) => {
    setSelected(label);
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQ] = label;
    setUserAnswers(newUserAnswers);

    // Remove from skipped questions if it was previously skipped
    const newSkipped = skippedQuestions.filter(q => q !== currentQ);
    setSkippedQuestions(newSkipped);

    if (label === quiz[currentQ]?.answer) {
      setScore(score + 1);
    }
  };

  const handleAnswerKeyClick = (correctAnswer) => {
    setSelected(correctAnswer);
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQ] = correctAnswer;
    setUserAnswers(newUserAnswers);

    // Remove from skipped questions if it was previously skipped
    const newSkipped = skippedQuestions.filter(q => q !== currentQ);
    setSkippedQuestions(newSkipped);

    if (correctAnswer === quiz[currentQ]?.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(userAnswers[currentQ + 1] || null);
      setShowAnswer(false);
      setShowAnswerKey(false);
    } else {
      const passed = score > 20;
      setIsPassed(passed);
      setIsFinished(true);
      updateMockTestResults(score, quiz.length, passed);
      exitFullScreen();
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(userAnswers[currentQ - 1] || null);
      setShowAnswer(false);
      setShowAnswerKey(false);
    }
  };

  const skipQuestion = () => {
    const newSkipped = [...skippedQuestions];
    if (!newSkipped.includes(currentQ)) {
      newSkipped.push(currentQ);
      setSkippedQuestions(newSkipped);
    }
    
    // Clear any selected answer for this question
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQ] = null;
    setUserAnswers(newUserAnswers);
    setSelected(null);
    
    nextQuestion();
  };

  const goToQuestion = (index) => {
    setCurrentQ(index);
    setSelected(userAnswers[index] || null);
    setShowAnswer(false);
    setShowAnswerKey(false);
  };

  const retryQuiz = () => {
    setWarningCount(0);
    setShowWarning(false);
    fetchMockTest(selectedChapter, "normal", true);
    enterFullScreen();
  };

  const nextLevel = () => {
    if (isPassed) {
      setWarningCount(0);
      setShowWarning(false);
      fetchMockTest(selectedChapter, "hard");
      enterFullScreen();
    }
  };

  const backToChapters = () => {
    setSelectedChapter(null);
    setQuiz([]);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setIsFinished(false);
    setIsPassed(false);
    setShowAnswer(false);
    setUserAnswers([]);
    setShowInstructions(true);
    setShowReviewPopup(false);
    setWarningCount(0);
    setShowWarning(false);
    setShowAnswerKey(false);
    exitFullScreen();
  };

  const backToSubjects = () => {
    setSelectedSubject(null);
    setSelectedChapter(null);
    setChapters([]);
    setQuiz([]);
    setShowInstructions(true);
  };

  const backToClasses = () => {
    setSelectedClass(null);
    setSelectedSubject(null);
    setSelectedChapter(null);
    setSubjects([]);
    setChapters([]);
    setQuiz([]);
    setShowInstructions(true);
  };

  const backToPractice = () => {
    navigate('/practice');
  };

  const enterFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestfullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleReviewPopup = () => {
    setShowReviewPopup(!showReviewPopup);
  };

  const toggleAnswerKey = () => {
    setShowAnswerKey(!showAnswerKey);
  };

  // Determine back button text and action based on current screen
  const getBackButtonConfig = () => {
    if (quiz.length > 0 && !isFinished && !showInstructions) {
        return null;
    }

    if (showInstructions && selectedChapter) {
        // return {
        //   text: "Back to Chapters",
        //   action: backToChapters
        // };
    }
    
    if (selectedSubject && !selectedChapter) {
        return {
            text: "Back to Subjects",
            action: backToSubjects
        };
    }
    
    if (selectedClass && !selectedSubject) {
        return {
            text: "Back to Classes",
            action: backToClasses
        };
    }
    
    if (!selectedClass) {
        return {
            text: "Back to Practice",
            action: backToPractice
        };
    }
};

const backButtonConfig = getBackButtonConfig();

// In your JSX/HTML:
{backButtonConfig && (
    <div className="p-3">
        <button 
            className="btn btn-outline-primary mb-3"
            onClick={backButtonConfig.action}
            style={{ 
                padding: "10px 25px", 
                margin: "10px 0",
                borderRadius: "6px",
                fontWeight: "500",
                border: "2px solid #007bff",
                transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#007bff";
            }}
        >
            ← {backButtonConfig.text}
        </button>
    </div>
)}
  if (loading) return (
    <div className="loading-container">
      <div className="edu-loader">
        <span role="img" aria-label="book" className="edu-icon">📚</span>
        <span role="img" aria-label="graduation" className="edu-icon">🎓</span>
        <span role="img" aria-label="lightbulb" className="edu-icon">💡</span>
      </div>
      <p>Preparing your test...</p>
    </div>
  );

  return (
    <>
      <Navbar isFullScreen={isFullScreen && quiz.length > 0 && !showInstructions} />
      
      {/* Global Back Button - Below the navbar */}
      {!isFullScreen && backButtonConfig && (
        <div className="navbar-back-wrapper">
          <div className="navbar-back-container">
            <button 
              className="navbar-back-button"
              onClick={backButtonConfig.action}
            >
              <span className="back-arrow">←</span>
              {backButtonConfig.text}
            </button>
          </div>
        </div>
      )}
      
      {error && !showInstructions && (
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <p>{error}</p>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      )}
      {showWarning && !isFinished && (
        <div className="warning-container">
          <div className="warning-icon">⚠️</div>
          <p>
            Warning {warningCount} of 3: Please stay on the test tab or in full-screen mode. The test will end after 3 warnings.
          </p>
        </div>
      )}
      {!selectedClass && !error && (
        <div className="selection-container">
          <div className="header">
            <h2>Select Your Class</h2>
            <p>Choose your academic level to begin</p>
          </div>
          <div className="cards-grid">
            {classes.map((cl, i) => (
              <div 
                key={i} 
                className="selection-card"
                onClick={() => handleClassClick(cl)}
              >
                <div className="card-icon">{classIcons[i % classIcons.length]}</div>
                <h3>{cl}</h3>
                <p>Start your learning journey</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!selectedSubject && selectedClass && !error && (
        <div className="selection-container">
          <div className="header">
            <h2>Select Subject</h2>
            <p>Choose a subject for {selectedClass}</p>
          </div>
          <div className="cards-grid">
            {subjects.map((sub, i) => (
              <div 
                key={i} 
                className="selection-card subject-card"
                onClick={() => handleSubjectClick(sub)}
              >
                <div className="card-icon">{subjectIcons[i % subjectIcons.length]}</div>
                <h3>{sub}</h3>
                <p>Explore chapters and topics</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!selectedChapter && selectedSubject && !error && (
        <div className="selection-container chapter-select">
          <div className="header">
            <h2>Select Chapter</h2>
            <p>Choose a chapter from {selectedSubject}</p>
          </div>
          <div className="cards-grid">
            {Array.isArray(chapters) && chapters.map((chap, i) => (
              <div 
                key={i} 
                className={`selection-card chapter-card ${selectedChapter === chap ? 'selected' : ''}`}
                onClick={() => handleChapterClick(chap)}
              >
                <div className="card-icon">{chapterIcons[i % chapterIcons.length]}</div>
                <h3>{chap}</h3>
                <p>{selectedChapter === chap ? 'Selected' : 'Click to select'}</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {(quiz.length === 0 || showInstructions) && !error && selectedChapter && (
        <div className="instructions-container">
          <div className="instructions-card">
            <div className="instructions-icon">📋</div>
            <h2>Mock Test Instructions</h2>
            <div className="instructions-content">
              <div className="instruction-item">
                <span className="instruction-icon">⏱️</span>
                <div>
                  <h3>Time Limit</h3>
                  <p>20 minutes for 50 questions</p>
                </div>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">❓</span>
                <div>
                  <h3>Question Format</h3>
                  <p>Multiple choice questions with 4 options each</p>
                </div>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">📊</span>
                <div>
                  <h3>Passing Criteria</h3>
                  <p>Score more than 20 to pass and unlock next level</p>
                </div>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">⏭️</span>
                <div>
                  <h3>Skipping Questions</h3>
                  <p>You can skip questions and come back to them later</p>
                </div>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">📝</span>
                <div>
                  <h3>Scoring</h3>
                  <p>1 point for each correct answer. No negative marking.</p>
                </div>
              </div>
              <div className="instruction-item">
                <span className="instruction-icon">🔑</span>
                <div>
                  <h3>Answer Key</h3>
                  <p>Click the 'Show Answer Key' button to reveal the correct answer for any question</p>
                </div>
              </div>
            </div>
            <div className="test-details">
              <h3>Test Details:</h3>
              <p><strong>Class:</strong> {selectedClass}</p>
              <p><strong>Subject:</strong> {selectedSubject}</p>
              <p><strong>Chapter:</strong> {selectedChapter}</p>
              <p><strong>Total Questions:</strong> 50</p>
              <p><strong>Passing Score:</strong> 21/50 or more</p>
            </div>
            <div className="instructions-actions">
              <button className="back-button" onClick={backToChapters}>
                ← Back to Chapters
              </button>
              <button className="start-quiz-btn" onClick={startQuiz}>
                Start Test Now
              </button>
            </div>
          </div>
        </div>
      )}
      {isFinished && !error && (
        <div className={`finished-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
          <div className="result-card">
            <div className={`result-icon ${isPassed ? 'pass' : 'fail'}`}>
              {isPassed ? '🎉' : '😔'}
            </div>
            <h2>{isPassed ? 'Congratulations! You Passed!' : 'Quiz Completed - Try Again'}</h2>
            
            <div className={`status-badge ${isPassed ? 'pass-badge' : 'fail-badge'}`}>
              {isPassed ? 'PASS' : 'FAIL'}
            </div>
            
            <div className="score-display">
              <div className={`score-circle ${isPassed ? 'pass-score' : 'fail-score'}`}>
                <span className="score">{score}</span>
                <span className="total">/{quiz.length}</span>
              </div>
              <p>{Math.round((score / quiz.length) * 100)}% Correct</p>
              <p className={`pass-fail-text ${isPassed ? 'pass-text' : 'fail-text'}`}>
                {isPassed 
                  ? `You scored ${score} which is greater than 20. You are eligible for next level!` 
                  : `You scored ${score} which is less than or equal to 20. Please retry the same level.`}
              </p>
            </div>
            
            <div className="time-result">
              <p>Time Taken: {formatTime(20 * 60 - timeLeft)}</p>
            </div>
            
            <div className="result-actions">
              <button className="review-btn" onClick={toggleReviewPopup}>
                📋 Review Questions & Answers
              </button>
              <button className="retry-btn" onClick={retryQuiz}>
                🔄 Retry Same Level
              </button>
              {isPassed && (
                <button className="next-btn" onClick={nextLevel}>
                  🚀 Next Level
                </button>
              )}
              <button className="chapters-btn" onClick={backToChapters}>
                📚 Back to Chapters
              </button>
            </div>
            
            <div className="answers-section">
              <h3>Quick Review:</h3>
              <div className="answers-grid">
                {quiz.slice(0, 10).map((q, i) => (
                  <div key={i} className={`answer-item ${userAnswers[i] === q.answer ? 'correct' : 'incorrect'}`}>
                    <span className="q-number">Q{i + 1}</span>
                    <span className="correct-answer">{q.answer}</span>
                    <span className="user-answer">{userAnswers[i] || 'Skipped'}</span>
                  </div>
                ))}
              </div>
              <button className="view-all-btn" onClick={toggleReviewPopup}>
                View All Questions & Answers
              </button>
            </div>
          </div>
        </div>
      )}
      {quiz.length > 0 && !isFinished && !showInstructions && !error && (
        <div className={`quiz-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
          <div className="quiz-header">
            <div className="quiz-info">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${((currentQ + 1) / quiz.length) * 100}%`}}
                ></div>
              </div>
              <div className="quiz-stats">
                <span>Question {currentQ + 1} of {quiz.length}</span>
                <span className="timer">⏱️ {formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="answer-key-section">
              <button 
                className={`answer-key-btn ${showAnswerKey ? 'active' : ''}`}
                onClick={toggleAnswerKey}
              >
                {showAnswerKey ? 'Hide Answer Key' : 'Show Answer Key'}
              </button>
              {showAnswerKey && (
                <div className="answer-key-display">
                  <span className="correct-answer-label">Correct Answer: {quiz[currentQ].answer}</span>
                  <button 
                    className="use-answer-btn"
                    onClick={() => handleAnswerKeyClick(quiz[currentQ].answer)}
                  >
                    Mark This Answer
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="question-nav">
            {quiz.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentQ ? 'active' : ''} ${
                  userAnswers[index] ? 'answered' : ''
                } ${skippedQuestions.includes(index) ? 'skipped' : ''}`}
                onClick={() => goToQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="question-section">
            <h3 className="question">{currentQ + 1}. {quiz[currentQ].question}</h3>
            <div className="options-grid">
              {quiz[currentQ].options && Object.entries(quiz[currentQ].options).map(([label, opt]) => (
                <button
                  key={label}
                  className={`option-card ${
                    selected === label ? 'selected' : ''
                  } ${showAnswer || showAnswerKey ? (label === quiz[currentQ].answer ? 'correct-answer' : '') : ''}`}
                  onClick={() => handleAnswer(label)}
                  disabled={showAnswer}
                >
                  <span className="option-label">{label}</span>
                  <span className="option-text">{opt}</span>
                  {(showAnswer || showAnswerKey) && label === quiz[currentQ].answer && (
                    <span className="correct-indicator">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="quiz-navigation">
            <button 
              className="nav-btn prev-btn" 
              onClick={prevQuestion}
              disabled={currentQ === 0}
            >
              ← Previous
            </button>
            <button 
              className="nav-btn skip-btn" 
              onClick={skipQuestion}
            >
              Skip →
            </button>
            <button 
              className="nav-btn next-btn" 
              onClick={nextQuestion}
            >
              {currentQ < quiz.length - 1 ? 'Next →' : 'Finish'}
            </button>
          </div>
        </div>
      )}
      {showReviewPopup && (
        <div className="popup-overlay">
          <div className="review-popup">
            <div className="popup-header">
              <h2>Questions & Answers Review</h2>
              <button className="close-popup" onClick={toggleReviewPopup}>×</button>
            </div>
            <div className="popup-content">
              <div className="review-summary">
                <p><strong>Class:</strong> {selectedClass} | <strong>Subject:</strong> {selectedSubject} | <strong>Chapter:</strong> {selectedChapter}</p>
                <p><strong>Score:</strong> {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)</p>
                <p><strong>Status:</strong> <span className={isPassed ? 'pass-text' : 'fail-text'}>{isPassed ? 'PASSED' : 'FAILED'}</span></p>
              </div>
              <div className="questions-review">
                {quiz.map((q, index) => (
                  <div key={index} className="question-review-item">
                    <div className="question-review-header">
                      <span className="question-number">Question {index + 1}:</span>
                      <span className={`answer-status ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}>
                        {userAnswers[index] === q.answer ? '✓ Correct' : userAnswers[index] ? '✗ Incorrect' : '⏭️ Skipped'}
                      </span>
                    </div>
                    <p className="review-question">{q.question}</p>
                    <div className="review-options">
                      {Object.entries(q.options).map(([label, option]) => (
                        <div 
                          key={label}
                          className={`review-option ${
                            label === q.answer ? 'correct-answer' : 
                            label === userAnswers[index] && label !== q.answer ? 'user-incorrect' : ''
                          }`}
                        >
                          <span className="option-label">{label}:</span>
                          <span className="option-text">{option}</span>
                          {label === q.answer && <span className="correct-mark"> ✓ Correct Answer</span>}
                          {label === userAnswers[index] && label !== q.answer && <span className="incorrect-mark"> ✗ Your Answer</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="popup-actions">
              <button className="popup-close-btn" onClick={toggleReviewPopup}>
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MockTest;