














































































// // import { useState, useEffect } from "react";
// // import './MockTest.css';
// // import Navbar from "./Navbarrr";
// // import { useQuiz } from "./QuizContext";
// // import { useNavigate } from "react-router-dom";
// // import { useTranslation } from 'react-i18next';
 
// // function MockTest() {
// //   const { t, i18n } = useTranslation();
// //   const { updateMockTestResults } = useQuiz();
// //   const navigate = useNavigate();
// //   const [classes, setClasses] = useState([]);
// //   const [subjects, setSubjects] = useState([]);
// //   const [chapters, setChapters] = useState([]);
// //   const [selectedChapter, setSelectedChapter] = useState(null);
// //   const [quiz, setQuiz] = useState([]);
// //   const [currentQ, setCurrentQ] = useState(0);
// //   const [selected, setSelected] = useState(null);
// //   const [score, setScore] = useState(0);
// //   const [isFinished, setIsFinished] = useState(false);
// //   const [selectedClass, setSelectedClass] = useState(null);
// //   const [selectedSubject, setSelectedSubject] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [showAnswer, setShowAnswer] = useState(false);
// //   const [timeLeft, setTimeLeft] = useState(20 * 60);
// //   const [skippedQuestions, setSkippedQuestions] = useState([]);
// //   const [userAnswers, setUserAnswers] = useState([]);
// //   const [showInstructions, setShowInstructions] = useState(true);
// //   const [isFullScreen, setIsFullScreen] = useState(false);
// //   const [showReviewPopup, setShowReviewPopup] = useState(false);
// //   const [isPassed, setIsPassed] = useState(false);
// //   const [warningCount, setWarningCount] = useState(0);
// //   const [showWarning, setShowWarning] = useState(false);
// //   const [showAnswerKey, setShowAnswerKey] = useState(false);
// //   const [selectedLanguage, setSelectedLanguage] = useState("English");
 
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const classIcons = ["🏫", "📚", "🎓", "💼", "🔬", "📊"];
// //   const subjectIcons = ["📖", "🧮", "🔭", "🧪", "🌍", "📜", "💻", "🎨"];
// //   const chapterIcons = ["📝", "🔍", "💡", "⚡", "🌟", "🎯", "📊", "🔬"];
 
// //   // Hide chatbot widget
// //   useEffect(() => {
// //     const chatWidget = document.querySelector('iframe[src*="tawk"], iframe[src*="crisp"], iframe[src*="chat"], iframe[src*="bot"], iframe[src*="dialogflow"]');
// //     if (chatWidget) {
// //       chatWidget.style.display = "none";
// //     }
 
// //     const chatButton = document.querySelector('div[style*="z-index"][style*="bottom"][style*="right"]');
// //     if (chatButton && chatButton.querySelector("svg, img")) {
// //       chatButton.style.display = "none";
// //     }
 
// //     return () => {
// //       if (chatWidget) {
// //         chatWidget.style.display = "block";
// //       }
// //       if (chatButton) {
// //         chatButton.style.display = "block";
// //       }
// //     };
// //   }, []);
 
// //   // Fetch classes
// //   useEffect(() => {
// //     fetch("http://127.0.0.1:8000/classes")
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch classes");
// //         return res.json();
// //       })
// //       .then(data => setClasses(data.classes || []))
// //       .catch(() => setError("Failed to load classes"));
// //   }, []);
 
// //   // Handle visibility change
// //   useEffect(() => {
// //     if (!quiz.length || isFinished || showInstructions) return;
 
// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setWarningCount((prev) => {
// //           const newCount = prev + 1;
// //           if (newCount >= 3) {
// //             setIsFinished(true);
// //             const passed = score > 20;
// //             setIsPassed(passed);
// //             updateMockTestResults(score, quiz.length, passed, selectedClass, selectedSubject, selectedChapter);
// //             exitFullScreen();
// //             setShowWarning(false);
// //             return newCount;
// //           } else {
// //             setShowWarning(true);
// //             return newCount;
// //           }
// //         });
// //       }
// //     };
 
// //     document.addEventListener("visibilitychange", handleVisibilityChange);
// //     return () => {
// //       document.removeEventListener("visibilitychange", handleVisibilityChange);
// //     };
// //   }, [quiz, isFinished, showInstructions, score, updateMockTestResults, selectedClass, selectedSubject, selectedChapter]);
 
// //   // Handle full-screen change
// //   useEffect(() => {
// //     const handleFullScreenChange = () => {
// //       const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
// //       setIsFullScreen(isCurrentlyFullScreen);
 
// //       if (!isCurrentlyFullScreen && quiz.length > 0 && !isFinished && !showInstructions) {
// //         setWarningCount((prev) => {
// //           const newCount = prev + 1;
// //           if (newCount >= 3) {
// //             setIsFinished(true);
// //             const passed = score > 20;
// //             setIsPassed(passed);
// //             updateMockTestResults(score, quiz.length, passed, selectedClass, selectedSubject, selectedChapter);
// //             exitFullScreen();
// //             setShowWarning(false);
// //             return newCount;
// //           } else {
// //             setShowWarning(true);
// //             enterFullScreen();
// //             return newCount;
// //           }
// //         });
// //       }
// //     };
 
// //     document.addEventListener("fullscreenchange", handleFullScreenChange);
// //     document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
// //     document.addEventListener("mozfullscreenchange", handleFullScreenChange);
// //     document.addEventListener("MSFullscreenChange", handleFullScreenChange);
 
// //     return () => {
// //       document.removeEventListener("fullscreenchange", handleFullScreenChange);
// //       document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
// //       document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
// //       document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
// //     };
// //   }, [quiz, isFinished, showInstructions, score, updateMockTestResults, selectedClass, selectedSubject, selectedChapter]);
 
// //   // Auto-hide warning
// //   useEffect(() => {
// //     if (showWarning) {
// //       const timer = setTimeout(() => {
// //         setShowWarning(false);
// //       }, 3000);
// //       return () => clearTimeout(timer);
// //     };
// //   }, [showWarning]);
 
// //   // Timer for quiz
// //   useEffect(() => {
// //     if (quiz.length > 0 && !isFinished && timeLeft > 0) {
// //       const timer = setInterval(() => {
// //         setTimeLeft(prev => {
// //           if (prev <= 1) {
// //             clearInterval(timer);
// //             setIsFinished(true);
// //             const passed = score > 20;
// //             setIsPassed(passed);
// //             updateMockTestResults(score, quiz.length, passed, selectedClass, selectedSubject, selectedChapter);
// //             exitFullScreen();
// //             return 0;
// //           }
// //           return prev - 1;
// //         });
// //       }, 1000);
// //       return () => clearInterval(timer);
// //     }
// //   }, [quiz, isFinished, timeLeft, score, updateMockTestResults, selectedClass, selectedSubject, selectedChapter]);
 
// //   const fetchSubjects = (className) => {
// //     setLoading(true);
// //     setError(null);
// //     fetch(`http://127.0.0.1:8000/mock_subjects?class_name=${className}`)
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch subjects");
// //         return res.json();
// //       })
// //       .then(data => {
// //         setSubjects(data.subjects || []);
// //         setChapters([]);
// //         setSelectedSubject(null);
// //         setSelectedChapter(null);
// //         setQuiz([]);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError("Failed to load subjects: " + err.message);
// //         setLoading(false);
// //       });
// //   };
 
// //   const fetchChapters = (className, subject) => {
// //     setLoading(true);
// //     setError(null);
// //     fetch(`http://127.0.0.1:8000/mock_chapters?class_name=${className}&subject=${encodeURIComponent(subject)}`)
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch chapters");
// //         return res.json();
// //       })
// //       .then(data => {
// //         const chaptersData = Array.isArray(data.chapters) ? data.chapters : [];
// //         setChapters(chaptersData);
// //         setSelectedChapter(null);
// //         setQuiz([]);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError("Failed to load chapters: " + err.message);
// //         setChapters([]);
// //         setLoading(false);
// //       });
// //   };
 
// //   const fetchMockTest = (chapter, difficulty = "normal", retry = false) => {
// //     setLoading(true);
// //     setError(null);
// //     setShowInstructions(false);
// //     setTimeLeft(20 * 60);
// //     setSkippedQuestions([]);
// //     setUserAnswers(Array(50).fill(null));
   
// //     fetch(
// //       `http://127.0.0.1:8000/mock_test?class_name=${selectedClass}&subject=${encodeURIComponent(
// //         selectedSubject
// //       )}&chapter=${encodeURIComponent(chapter)}&difficulty=${difficulty}&retry=${retry}&language=${encodeURIComponent(selectedLanguage)}&num_questions=50`
// //     )
// //       .then(res => {
// //         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
// //         return res.json();
// //       })
// //       .then(data => {
// //         let questions = [];
       
// //         if (Array.isArray(data)) {
// //           questions = data;
// //         } else if (data && Array.isArray(data.questions)) {
// //           questions = data.questions;
// //         } else if (data && Array.isArray(data.quiz)) {
// //           questions = data.quiz;
// //         } else if (data && data.questions) {
// //           questions = Object.values(data.questions);
// //         } else {
// //           throw new Error("Invalid response format: " + JSON.stringify(data));
// //         }
       
// //         if (questions.length === 0) {
// //           throw new Error("No questions received from server");
// //         }
 
// //         const validQuestions = questions
// //           .filter(q => q && q.question && q.answer && q.options)
// //           .map((q, index) => ({
// //             id: index,
// //             question: q.question.trim(),
// //             options: q.options,
// //             answer: q.answer
// //           }))
// //           .slice(0, 50);
 
// //         while (validQuestions.length < 50) {
// //           validQuestions.push({
// //             id: validQuestions.length,
// //             question: `Placeholder Question ${validQuestions.length + 1}`,
// //             options: { A: "Option A", B: "Option B", C: "Option C", D: "Option D" },
// //             answer: "A"
// //           });
// //         }
 
// //         setQuiz(validQuestions);
// //         setCurrentQ(0);
// //         setSelected(null);
// //         setScore(0);
// //         setIsFinished(false);
// //         setIsPassed(false);
// //         setShowAnswer(false);
// //         setShowReviewPopup(false);
// //         setWarningCount(0);
// //         setShowWarning(false);
// //         setShowAnswerKey(false);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Fetch error:", err);
// //         setError("Failed to load mock test: " + err.message);
// //         setLoading(false);
// //         setQuiz([]);
// //         setShowInstructions(true);
// //       });
// //   };
 
// //   const handleClassClick = (className) => {
// //     setSelectedClass(className);
// //     setSelectedSubject(null);
// //     setSelectedChapter(null);
// //     setSubjects([]);
// //     setChapters([]);
// //     setQuiz([]);
// //     setShowInstructions(true);
// //     fetchSubjects(className);
// //   };
 
// //   const handleSubjectClick = (subject) => {
// //     setSelectedSubject(subject);
// //     setSelectedChapter(null);
// //     setChapters([]);
// //     setQuiz([]);
// //     setShowInstructions(true);
// //     fetchChapters(selectedClass, subject);
// //   };
 
// //   const handleChapterClick = (chapter) => {
// //     setSelectedChapter(chapter);
// //     setShowInstructions(true);
// //   };
 
// //   const startQuiz = () => {
// //     setShowInstructions(false);
// //     if (quiz.length === 0) {
// //       fetchMockTest(selectedChapter);
// //       enterFullScreen();
// //     }
// //   };
 
// //   const handleAnswer = (label) => {
// //     setSelected(label);
// //     const newUserAnswers = [...userAnswers];
// //     newUserAnswers[currentQ] = label;
// //     setUserAnswers(newUserAnswers);
 
// //     const newSkipped = skippedQuestions.filter(q => q !== currentQ);
// //     setSkippedQuestions(newSkipped);
 
// //     if (label === quiz[currentQ]?.answer) {
// //       setScore(score + 1);
// //     }
// //   };
 
// //   const handleAnswerKeyClick = (correctAnswer) => {
// //     setSelected(correctAnswer);
// //     const newUserAnswers = [...userAnswers];
// //     newUserAnswers[currentQ] = correctAnswer;
// //     setUserAnswers(newUserAnswers);
 
// //     const newSkipped = skippedQuestions.filter(q => q !== currentQ);
// //     setSkippedQuestions(newSkipped);
 
// //     if (correctAnswer === quiz[currentQ]?.answer) {
// //       setScore(score + 1);
// //     }
// //   };
 
// //   const nextQuestion = () => {
// //     if (currentQ < quiz.length - 1) {
// //       setCurrentQ(currentQ + 1);
// //       setSelected(userAnswers[currentQ + 1] || null);
// //       setShowAnswer(false);
// //       setShowAnswerKey(false);
// //     } else {
// //       const passed = score > 20;
// //       setIsPassed(passed);
// //       setIsFinished(true);
// //       updateMockTestResults(score, quiz.length, selectedClass, selectedSubject, selectedChapter, passed);
// //       exitFullScreen();
// //     }
// //   };
 
// //   const prevQuestion = () => {
// //     if (currentQ > 0) {
// //       setCurrentQ(currentQ - 1);
// //       setSelected(userAnswers[currentQ - 1] || null);
// //       setShowAnswer(false);
// //       setShowAnswerKey(false);
// //     }
// //   };
 
// //   const skipQuestion = () => {
// //     const newSkipped = [...skippedQuestions];
// //     if (!newSkipped.includes(currentQ)) {
// //       newSkipped.push(currentQ);
// //       setSkippedQuestions(newSkipped);
// //     }
   
// //     const newUserAnswers = [...userAnswers];
// //     newUserAnswers[currentQ] = null;
// //     setUserAnswers(newUserAnswers);
// //     setSelected(null);
   
// //     nextQuestion();
// //   };
 
// //   const goToQuestion = (index) => {
// //     setCurrentQ(index);
// //     setSelected(userAnswers[index] || null);
// //     setShowAnswer(false);
// //     setShowAnswerKey(false);
// //   };
 
// //   const retryQuiz = () => {
// //     setWarningCount(0);
// //     setShowWarning(false);
// //     fetchMockTest(selectedChapter, "normal", true);
// //     enterFullScreen();
// //   };
 
// //   const nextLevel = () => {
// //     if (isPassed) {
// //       setWarningCount(0);
// //       setShowWarning(false);
// //       fetchMockTest(selectedChapter, "hard");
// //       enterFullScreen();
// //     }
// //   };
 
// //   const backToChapters = () => {
// //     setSelectedChapter(null);
// //     setQuiz([]);
// //     setCurrentQ(0);
// //     setSelected(null);
// //     setScore(0);
// //     setIsFinished(false);
// //     setIsPassed(false);
// //     setShowAnswer(false);
// //     setUserAnswers([]);
// //     setShowInstructions(true);
// //     setShowReviewPopup(false);
// //     setWarningCount(0);
// //     setShowWarning(false);
// //     setShowAnswerKey(false);
// //     exitFullScreen();
// //   };
 
// //   const backToSubjects = () => {
// //     setSelectedSubject(null);
// //     setSelectedChapter(null);
// //     setChapters([]);
// //     setQuiz([]);
// //     setShowInstructions(true);
// //   };
 
// //   const backToClasses = () => {
// //     setSelectedClass(null);
// //     setSelectedSubject(null);
// //     setSelectedChapter(null);
// //     setSubjects([]);
// //     setChapters([]);
// //     setQuiz([]);
// //     setShowInstructions(true);
// //   };
 
// //   const backToPractice = () => {
// //     navigate('/practice');
// //   };
 
// //   const enterFullScreen = () => {
// //     const elem = document.documentElement;
// //     if (elem.requestFullscreen) {
// //       elem.requestFullscreen().catch(() => {});
// //     } else if (elem.mozRequestFullScreen) {
// //       elem.mozRequestFullScreen();
// //     } else if (elem.webkitRequestFullscreen) {
// //       elem.webkitRequestFullscreen();
// //     } else if (elem.msRequestFullscreen) {
// //       elem.msRequestFullscreen();
// //     }
// //     setIsFullScreen(true);
// //   };
 
// //   const exitFullScreen = () => {
// //     if (document.exitFullscreen) {
// //       document.exitFullscreen().catch(() => {});
// //     } else if (document.mozCancelFullScreen) {
// //       document.mozCancelFullScreen();
// //     } else if (document.webkitExitFullscreen) {
// //       document.webkitExitFullscreen();
// //     } else if (document.msExitFullscreen) {
// //       document.msExitFullscreen();
// //     }
// //     setIsFullScreen(false);
// //   };
 
// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
// //   };
 
// //   const toggleReviewPopup = () => {
// //     setShowReviewPopup(!showReviewPopup);
// //   };
 
// //   const toggleAnswerKey = () => {
// //     setShowAnswerKey(!showAnswerKey);
// //   };
 
// //   const getBackButtonConfig = () => {
// //     if (quiz.length > 0 && !isFinished && !showInstructions) {
// //         return null;
// //     }
   
// //     if (selectedSubject && !selectedChapter) {
// //         return {
// //             text: t('backToSubjects'),
// //             action: backToSubjects
// //         };
// //     }
   
// //     if (selectedClass && !selectedSubject) {
// //         return {
// //             text: t('backToClasses'),
// //             action: backToClasses
// //         };
// //     }
   
// //     if (!selectedClass) {
// //         return {
// //             text: t('backToPractice'),
// //             action: backToPractice
// //         };
// //     }
// //   };
 
// //   const backButtonConfig = getBackButtonConfig();
 
// //   if (loading) return (
// //     <div className="loading-container">
// //       <div className="edu-loader">
// //         <span role="img" aria-label="book" className="edu-icon">📚</span>
// //         <span role="img" aria-label="graduation" className="edu-icon">🎓</span>
// //         <span role="img" aria-label="lightbulb" className="edu-icon">💡</span>
// //       </div>
// //       {/* <p> Preparing your test in {selectedLanguage}...</p> */}
// //       <p style={{ color: "black" }}>
// //   Preparing your test in {selectedLanguage}...
// // </p>

// //     </div>
// //   );
 
// //   return (
// //     <>
// //       <Navbar isFullScreen={isFullScreen && quiz.length > 0 && !showInstructions} />
     
// //       {!isFullScreen && backButtonConfig && (
// //         <div className="navbar-back-wrapper">
// //           <div className="navbar-back-container">
// //             <button
// //               className="navbar-back-button"
// //               onClick={backButtonConfig.action}
// //             >
// //               <span className="back-arrow">←</span>
// //               {backButtonConfig.text}
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* {!isFullScreen && backButtonConfig && (
// //   <div className="navbar-back-wrapper">
// //     <div className="navbar-back-container">
// //       <button
// //         className="navbar-back-button"
// //         onClick={backButtonConfig.action}
// //       >
// //         <span className="back-arrow">←</span>
// //         {backButtonConfig.text}
// //       </button>
// //     </div>
// //   </div>
// // )} */}
     
// //       {error && !showInstructions && (
// //         <div className="error-container">
// //           <div className="error-icon">⚠️</div>
// //           <p>{error}</p>
// //           <button className="retry-btn" onClick={() => window.location.reload()}>
// //             Try Again
// //           </button>
// //         </div>
// //       )}
// //       {showWarning && !isFinished && (
// //         <div className="warning-container">
// //           <div className="warning-icon">⚠️</div>
// //           <p>
// //             Warning {warningCount} of 3: Please stay on the test tab or in full-screen mode. The test will end after 3 warnings.
// //           </p>
// //         </div>
// //       )}
// //       {!selectedClass && !error && (
// //         <div className="selection-container">
// //           <div className="header">
// //             <h2>{t('selectClassTitle')}</h2>
// //             <p>{t('selectClassSubtitle')}</p>
// //           </div>
// //           <div className="cards-grid">
// //             {classes.map((cl, i) => (
// //               <div
// //                 key={i}
// //                 className="selection-card"
// //                 onClick={() => handleClassClick(cl)}
// //               >
// //                 <div className="card-icon">{classIcons[i % classIcons.length]}</div>
// //                 <h3>{t(`classes.${cl}`)}</h3>
// //                 <p>{t('classCardDesc')}</p>
// //                 <div className="card-hover"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //       {!selectedSubject && selectedClass && !error && (
// //         <div className="selection-container">
// //           <div className="header">
// //             <h2>{t('selectSubjectTitle')}</h2>
// //             <p>{t('selectSubjectSubtitle', { class: t(`classes.${selectedClass}`) })}</p>
// //           </div>
// //           <div className="cards-grid">
// //             {subjects.map((sub, i) => (
// //               <div
// //                 key={i}
// //                 className="selection-card subject-card"
// //                 onClick={() => handleSubjectClick(sub)}
// //               >
// //                 <div className="card-icon">{subjectIcons[i % subjectIcons.length]}</div>
// //                 <h3>{t(`${sub.toLowerCase()}`)}</h3>
               
 
 
// //                 <p>{t('subjectCardDesc')}</p>
// //                 <div className="card-hover"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //       {!selectedChapter && selectedSubject && !error && (
// //         <div className="selection-container chapter-select">
// //           <div className="header">
// //             <h2>{t('selectChapterTitle')}</h2>
// //             <p>{t('selectChapterSubtitle', { selectedSubject: t(`subjects.${selectedSubject.toLowerCase()}`) })}</p>
// //           </div>
// //           <div className="cards-grid">
// //             {Array.isArray(chapters) && chapters.map((chap, i) => (
// //               <div
// //                 key={i}
// //                 className={`selection-card chapter-card ${selectedChapter === chap ? 'selected' : ''}`}
// //                 onClick={() => handleChapterClick(chap)}
// //               >
// //                 <div className="card-icon">{chapterIcons[i % chapterIcons.length]}</div>
// //                 <h3>{chap}</h3>
// //                 <p>{selectedChapter === chap ? t('chapterSelected') : t('chapterCardDesc')}</p>
// //                 <div className="card-hover"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //       {(quiz.length === 0 || showInstructions) && !error && selectedChapter && (
// //         <div className="instructions-container">
// //           <div className="instructions-card">
// //             <div className="instructions-icon">📋</div>
// //             <h2>{t('instructionsTitle')}</h2>
// //     <div className="instructions-content">
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">⏱️</span>
// //                 <div>
// //                   <h3>{t('timeLimitTitle')}</h3>
// //                   <p>{t('timeLimitDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">❓</span>
// //                 <div>
// //                   <h3>{t('questionFormatTitle')}</h3>
// //                   <p>{t('questionFormatDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">📊</span>
// //                 <div>
// //                   <h3>{t('passingCriteriaTitle')}</h3>
// //                   <p>{t('passingCriteriaDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">⏭️</span>
// //                 <div>
// //                   <h3>{t('skippingQuestionsTitle')}</h3>
// //                   <p>{t('skippingQuestionsDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">📝</span>
// //                 <div>
// //                   <h3>{t('scoringTitle')}</h3>
// //                   <p>{t('scoringDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">🔑</span>
// //                 <div>
// //                   <h3>{t('answerKeyTitle')}</h3>
// //                   <p>{t('answerKeyDesc')}</p>
// //                 </div>
// //               </div>
// //               <div className="instruction-item">
// //                 <span className="instruction-icon">🌐</span>
// //                 <div>
// //                   <h3>{t('languageTitle')}</h3>
// //                   <p>{t('languageDesc')}</p>
// //                 </div>
// //               </div>
// //             </div>
 
// //             <div className="test-details">
// //               <h3>{t('testDetailsTitle')}</h3>
// //               <p><strong>{t('testClass')}</strong> {t(`classes.${selectedClass}`)}</p>
// //               <p><strong>{t('testSubject')}</strong> {t(`subjects.${selectedSubject.toLowerCase()}`)}</p>
// //               <p><strong>{t('testChapter')}</strong> {selectedChapter}</p>
// //               <p><strong>{t('testTotalQuestions')}</strong> 50</p>
// //               <p><strong>{t('testPassingScore')}</strong></p>
// //               <p><strong>{t('testLanguage')}</strong> {selectedLanguage}</p>
// //             </div>
 
// //             <div className="language-select">
// //               <label htmlFor="language" style={{ fontWeight: '600', marginRight: '8px', fontSize: '16px' }}>
// //                 {t('languageSelectLabel')}
// //               </label>
// //               <select
// //                 id="language"
// //                 value={selectedLanguage}
// //                 onChange={(e) => setSelectedLanguage(e.target.value)}
// //                 className="language-dropdown"
// //                 style={{
// //                   padding: '10px 15px',
// //                   fontSize: '15px',
// //                   borderRadius: '8px',
// //                   border: '2px solid #007bff',
// //                   backgroundColor: 'white',
// //                   cursor: 'pointer',
// //                   minWidth: '180px',
// //                   fontWeight: '500'
// //                 }}
// //               >
// //                 <option value="English">English</option>
// //                 <option value="Telugu">తెలుగు (Telugu)</option>
// //                 <option value="Hindi">हिंदी (Hindi)</option>
// //                 <option value="Tamil">தமிழ் (Tamil)</option>
// //                 <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
// //                 <option value="Malayalam">മലയാളം (Malayalam)</option>
// //               </select>
// //             </div>
 
// //             <div className="instructions-actions">
// //               <button className="back-button" onClick={backToChapters}>
// //                 {t('backToChapters')}
// //               </button>
// //               <button className="start-quiz-btn" onClick={startQuiz}>
// //                 {t('startTestNow')}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
 
// //       {isFinished && !error && (
// //         <div className={`finished-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
// //           <div className="result-card">
// //             <div className={`result-icon ${isPassed ? 'pass' : 'fail'}`}>
// //               {isPassed ? '🎉' : '😔'}
// //             </div>
// //             <h2>{isPassed ? 'Congratulations! You Passed!' : 'Quiz Completed - Try Again'}</h2>
           
// //             <div className={`status-badge ${isPassed ? 'pass-badge' : 'fail-badge'}`}>
// //               {isPassed ? 'PASS' : 'FAIL'}
// //             </div>
           
// //             <div className="score-display">
// //               <div className={`score-circle ${isPassed ? 'pass-score' : 'fail-score'}`}>
// //                 <span className="score">{score}</span>
// //                 <span className="total">/{quiz.length}</span>
// //               </div>
// //               <p>{Math.round((score / quiz.length) * 100)}% Correct</p>
// //               <p className={`pass-fail-text ${isPassed ? 'pass-text' : 'fail-text'}`}>
// //                 {isPassed
// //                   ? `You scored ${score} which is greater than 20. You are eligible for next level!`
// //                   : `You scored ${score} which is less than or equal to 20. Please retry the same level.`}
// //               </p>
// //               <p className="language-info">Test taken in: <strong>{selectedLanguage}</strong></p>
// //             </div>
           
// //             <div className="time-result">
// //               <p>Time Taken: {formatTime(20 * 60 - timeLeft)}</p>
// //             </div>
           
// //             <div className="result-actions">
// //               <button className="review-btn" onClick={toggleReviewPopup}>
// //                 📋 Review Questions & Answers
// //               </button>
// //               <button className="retry-btn" onClick={retryQuiz}>
// //                 🔄 Retry Same Level
// //               </button>
// //               {isPassed && (
// //                 <button className="next-btn" onClick={nextLevel}>
// //                   🚀 Next Level
// //                 </button>
// //               )}
// //               <button className="chapters-btn" onClick={backToChapters}>
// //                 📚 Back to Chapters
// //               </button>
// //             </div>
           
// //             <div className="answers-section">
// //               <h3>Quick Review:</h3>
// //               <div className="answers-grid">
// //                 {quiz.slice(0, 10).map((q, i) => (
// //                   <div key={i} className={`answer-item ${userAnswers[i] === q.answer ? 'correct' : 'incorrect'}`}>
// //                     <span className="q-number">Q{i + 1}</span>
// //                     <span className="correct-answer">{q.answer}</span>
// //                     <span className="user-answer">{userAnswers[i] || 'Skipped'}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //               <button className="view-all-btn" onClick={toggleReviewPopup}>
// //                 View All Questions & Answers
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       {quiz.length > 0 && !isFinished && !showInstructions && !error && (
// //         <div className={`quiz-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
// //           <div className="quiz-header">
// //             <div className="quiz-info">
// //               <div className="progress-bar">
// //                 <div
// //                   className="progress-fill"
// //                   style={{width: `${((currentQ + 1) / quiz.length) * 100}%`}}
// //                 ></div>
// //               </div>
// //               <div className="quiz-stats">
// //                 <span>Question {currentQ + 1} of {quiz.length}</span>
// //                 <span className="timer">⏱️ {formatTime(timeLeft)}</span>
// //                 <span className="language-badge">🌐 {selectedLanguage}</span>
// //               </div>
// //             </div>
           
// //           </div>
// //           <div className="question-nav">
// //             {quiz.map((_, index) => (
// //               <button
// //                 key={index}
// //                 className={`nav-dot ${index === currentQ ? 'active' : ''} ${
// //                   userAnswers[index] ? 'answered' : ''
// //                 } ${skippedQuestions.includes(index) ? 'skipped' : ''}`}
// //                 onClick={() => goToQuestion(index)}
// //               >
// //                 {index + 1}
// //               </button>
// //             ))}
// //           </div>
// //           <div className="question-section">
// //             <h3 className="question">{currentQ + 1}. {quiz[currentQ].question}</h3>
// //             <div className="options-grid">
// //               {quiz[currentQ].options && Object.entries(quiz[currentQ].options).map(([label, opt]) => (
// //                 <button
// //                   key={label}
// //                   className={`option-card ${
// //                     selected === label ? 'selected' : ''
// //                   } ${showAnswer || showAnswerKey ? (label === quiz[currentQ].answer ? 'correct-answer' : '') : ''}`}
// //                   onClick={() => handleAnswer(label)}
// //                   disabled={showAnswer}
// //                 >
// //                   {/* <span className="option-label">{label}</span>
// //                   <span className="option-text">{opt}</span> */}
// //                   <span className="option-text">{opt}</span>
// //                   {(showAnswer || showAnswerKey) && label === quiz[currentQ].answer && (
// //                     <span className="correct-indicator">✓</span>
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="quiz-navigation">
// //             <button
// //               className="nav-btn prev-btn"
// //               onClick={prevQuestion}
// //               disabled={currentQ === 0}
// //             >
// //               ← Previous
// //             </button>
// //             <button
// //               className="nav-btn skip-btn"
// //               onClick={skipQuestion}
// //             >
// //               Skip →
// //             </button>
// //             <button
// //               className="nav-btn next-btn"
// //               onClick={nextQuestion}
// //             >
// //               {currentQ < quiz.length - 1 ? 'Next →' : 'Finish'}
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       {showReviewPopup && (
// //         <div className="popup-overlay">
// //           <div className="review-popup">
// //             <div className="popup-header">
// //               <h2>Questions & Answers Review</h2>
// //               <button className="close-popup" onClick={toggleReviewPopup}>×</button>
// //             </div>
// //             <div className="popup-content">
// //               <div className="review-summary">
// //                 <p><strong>Class:</strong> {selectedClass} | <strong>Subject:</strong> {selectedSubject} | <strong>Chapter:</strong> {selectedChapter}</p>
// //                 <p><strong>Language:</strong> {selectedLanguage}</p>
// //                 <p><strong>Score:</strong> {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)</p>
// //                 <p><strong>Status:</strong> <span className={isPassed ? 'pass-text' : 'fail-text'}>{isPassed ? 'PASSED' : 'FAILED'}</span></p>
// //               </div>
// //               <div className="questions-review">
// //                 {quiz.map((q, index) => (
// //                   <div key={index} className="question-review-item">
// //                     <div className="question-review-header">
// //                       <span className="question-number">Question {index + 1}:</span>
// //                       <span className={`answer-status ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}>
// //                         {userAnswers[index] === q.answer ? '✓ Correct' : userAnswers[index] ? '✗ Incorrect' : '⏭️ Skipped'}
// //                       </span>
// //                     </div>
// //                     <p className="review-question">{q.question}</p>
// //                     <div className="review-options">
// //                       {Object.entries(q.options).map(([label, option]) => (
// //                         <div
// //                           key={label}
// //                           className={`review-option ${
// //                             label === q.answer ? 'correct-answer' :
// //                             label === userAnswers[index] && label !== q.answer ? 'user-incorrect' : ''
// //                           }`}
// //                         >
// //                           <span className="option-label">{label}:</span>
// //                           <span className="option-text">{option}</span>
// //                           {label === q.answer && <span className="correct-mark"> ✓ Correct Answer</span>}
// //                           {label === userAnswers[index] && label !== q.answer && <span className="incorrect-mark"> ✗ Your Answer</span>}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="popup-actions">
// //               <button className="popup-close-btn" onClick={toggleReviewPopup}>
// //                 Close Review
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }
 
// // export default MockTest;
 




// import { useState, useEffect } from "react";
// import './MockTest.css';
// import Navbar from "./Navbarrr";
// import { useQuiz } from "./QuizContext";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
 
// function MockTest() {
//   const { t, i18n } = useTranslation();
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
//   const [warningCount, setWarningCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const [showAnswerKey, setShowAnswerKey] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [rewardPoints, setRewardPoints] = useState(0);
//   const [showHint, setShowHint] = useState(false);
//   const [currentHint, setCurrentHint] = useState('');
 
//   const optionLabels = ["A", "B", "C", "D"];
//   const classIcons = ["🏫", "📚", "🎓", "💼", "🔬", "📊"];
//   const subjectIcons = ["📖", "🧮", "🔭", "🧪", "🌍", "📜", "💻", "🎨"];
//   const chapterIcons = ["📝", "🔍", "💡", "⚡", "🌟", "🎯", "📊", "🔬"];
 
//   // Load reward points from localStorage
//   useEffect(() => {
//     const savedPoints = localStorage.getItem('rewardPoints');
//     if (savedPoints) {
//       setRewardPoints(parseInt(savedPoints, 10));
//     }
//   }, []);

//   // Save reward points to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('rewardPoints', rewardPoints.toString());
//   }, [rewardPoints]);
 
//   // Hide chatbot widget
//   useEffect(() => {
//     const chatWidget = document.querySelector('iframe[src*="tawk"], iframe[src*="crisp"], iframe[src*="chat"], iframe[src*="bot"], iframe[src*="dialogflow"]');
//     if (chatWidget) {
//       chatWidget.style.display = "none";
//     }
 
//     const chatButton = document.querySelector('div[style*="z-index"][style*="bottom"][style*="right"]');
//     if (chatButton && chatButton.querySelector("svg, img")) {
//       chatButton.style.display = "none";
//     }
 
//     return () => {
//       if (chatWidget) {
//         chatWidget.style.display = "block";
//       }
//       if (chatButton) {
//         chatButton.style.display = "block";
//       }
//     };
//   }, []);
 
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
 
//   // Handle visibility change
//   useEffect(() => {
//     if (!quiz.length || isFinished || showInstructions) return;
 
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             finishQuiz();
//             return newCount;
//           } else {
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
//   }, [quiz, isFinished, showInstructions]);
 
//   // Handle full-screen change
//   useEffect(() => {
//     const handleFullScreenChange = () => {
//       const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
//       setIsFullScreen(isCurrentlyFullScreen);
 
//       if (!isCurrentlyFullScreen && quiz.length > 0 && !isFinished && !showInstructions) {
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             finishQuiz();
//             return newCount;
//           } else {
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
//   }, [quiz, isFinished, showInstructions]);
 
//   // Auto-hide warning
//   useEffect(() => {
//     if (showWarning) {
//       const timer = setTimeout(() => {
//         setShowWarning(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     };
//   }, [showWarning]);
 
//   // Timer for quiz
//   useEffect(() => {
//     if (quiz.length > 0 && !isFinished && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(prev => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             finishQuiz();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [quiz, isFinished, timeLeft]);
 
//   const finishQuiz = () => {
//     const passed = score > 20;
//     setIsPassed(passed);
//     setIsFinished(true);
//     updateMockTestResults(score, quiz.length, passed, selectedClass, selectedSubject, selectedChapter);
//     // Award reward points: 2 marks = 1 reward point
//     const additionalPoints = Math.floor(score / 2);
//     setRewardPoints(prev => prev + additionalPoints);
//     exitFullScreen();
//     setShowWarning(false);
//   };

//   const handleHint = () => {
//     if (rewardPoints > 0) {
//       // Generate a simple hint (in real scenario, fetch from backend or precompute)
//       const hintText = `Hint: The answer relates to ${quiz[currentQ].answer.toLowerCase()}. Focus on key concepts in the question.`;
//       setCurrentHint(hintText);
//       setShowHint(true);
//       setRewardPoints(prev => prev - 1);
//     } else {
//       alert('No reward points available for hint!');
//     }
//   };
 
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
//     setShowHint(false);
//     setCurrentHint('');
   
//     fetch(
//       `http://127.0.0.1:8000/mock_test?class_name=${selectedClass}&subject=${encodeURIComponent(
//         selectedSubject
//       )}&chapter=${encodeURIComponent(chapter)}&difficulty=${difficulty}&retry=${retry}&language=${encodeURIComponent(selectedLanguage)}&num_questions=50`
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
//         setWarningCount(0);
//         setShowWarning(false);
//         setShowAnswerKey(false);
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
 
//     const newSkipped = skippedQuestions.filter(q => q !== currentQ);
//     setSkippedQuestions(newSkipped);
 
//     if (label === quiz[currentQ]?.answer) {
//       setScore(score + 1);
//     }
//   };
 
//   const handleAnswerKeyClick = (correctAnswer) => {
//     setSelected(correctAnswer);
//     const newUserAnswers = [...userAnswers];
//     newUserAnswers[currentQ] = correctAnswer;
//     setUserAnswers(newUserAnswers);
 
//     const newSkipped = skippedQuestions.filter(q => q !== currentQ);
//     setSkippedQuestions(newSkipped);
 
//     if (correctAnswer === quiz[currentQ]?.answer) {
//       setScore(score + 1);
//     }
//   };
 
//   const nextQuestion = () => {
//     setShowHint(false);
//     setCurrentHint('');
//     if (currentQ < quiz.length - 1) {
//       setCurrentQ(currentQ + 1);
//       setSelected(userAnswers[currentQ + 1] || null);
//       setShowAnswer(false);
//       setShowAnswerKey(false);
//     } else {
//       finishQuiz();
//     }
//   };
 
//   const prevQuestion = () => {
//     setShowHint(false);
//     setCurrentHint('');
//     if (currentQ > 0) {
//       setCurrentQ(currentQ - 1);
//       setSelected(userAnswers[currentQ - 1] || null);
//       setShowAnswer(false);
//       setShowAnswerKey(false);
//     }
//   };
 
//   const skipQuestion = () => {
//     const newSkipped = [...skippedQuestions];
//     if (!newSkipped.includes(currentQ)) {
//       newSkipped.push(currentQ);
//       setSkippedQuestions(newSkipped);
//     }
   
//     const newUserAnswers = [...userAnswers];
//     newUserAnswers[currentQ] = null;
//     setUserAnswers(newUserAnswers);
//     setSelected(null);
   
//     nextQuestion();
//   };
 
//   const goToQuestion = (index) => {
//     setShowHint(false);
//     setCurrentHint('');
//     setCurrentQ(index);
//     setSelected(userAnswers[index] || null);
//     setShowAnswer(false);
//     setShowAnswerKey(false);
//   };
 
//   const retryQuiz = () => {
//     setWarningCount(0);
//     setShowWarning(false);
//     fetchMockTest(selectedChapter, "normal", true);
//     enterFullScreen();
//   };
 
//   const nextLevel = () => {
//     if (isPassed) {
//       setWarningCount(0);
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
//     setShowAnswerKey(false);
//     setShowHint(false);
//     setCurrentHint('');
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
//     navigate('/practice');
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
 
//   const toggleAnswerKey = () => {
//     setShowAnswerKey(!showAnswerKey);
//   };
 
//   const getBackButtonConfig = () => {
//     if (quiz.length > 0 && !isFinished && !showInstructions) {
//         return null;
//     }
   
//     if (selectedSubject && !selectedChapter) {
//         return {
//             text: t('backToSubjects'),
//             action: backToSubjects
//         };
//     }
   
//     if (selectedClass && !selectedSubject) {
//         return {
//             text: t('backToClasses'),
//             action: backToClasses
//         };
//     }
   
//     if (!selectedClass) {
//         return {
//             text: t('backToPractice'),
//             action: backToPractice
//         };
//     }
//   };
 
//   const backButtonConfig = getBackButtonConfig();
 
//   if (loading) return (
//     <div className="loading-container">
//       <div className="edu-loader">
//         <span role="img" aria-label="book" className="edu-icon">📚</span>
//         <span role="img" aria-label="graduation" className="edu-icon">🎓</span>
//         <span role="img" aria-label="lightbulb" className="edu-icon">💡</span>
//       </div>
//       <p style={{ color: "black" }}>
//   Preparing your test in {selectedLanguage}...
// </p>

//     </div>
//   );
 
//   return (
//     <>
//       <Navbar isFullScreen={isFullScreen && quiz.length > 0 && !showInstructions} />
     
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

//       {/* {!isFullScreen && backButtonConfig && (
//   <div className="navbar-back-wrapper">
//     <div className="navbar-back-container">
//       <button
//         className="navbar-back-button"
//         onClick={backButtonConfig.action}
//       >
//         <span className="back-arrow">←</span>
//         {backButtonConfig.text}
//       </button>
//     </div>
//   </div>
// )} */}
     
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
//             <h2>{t('selectClassTitle')}</h2>
//             <p>{t('selectClassSubtitle')}</p>
//           </div>
//           <div className="cards-grid">
//             {classes.map((cl, i) => (
//               <div
//                 key={i}
//                 className="selection-card"
//                 onClick={() => handleClassClick(cl)}
//               >
//                 <div className="card-icon">{classIcons[i % classIcons.length]}</div>
//                 <h3>{t(`classes.${cl}`)}</h3>
//                 <p>{t('classCardDesc')}</p>
//                 <div className="card-hover"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {!selectedSubject && selectedClass && !error && (
//         <div className="selection-container">
//           <div className="header">
//             <h2>{t('selectSubjectTitle')}</h2>
//             <p>{t('selectSubjectSubtitle', { class: t(`classes.${selectedClass}`) })}</p>
//           </div>
//           <div className="cards-grid">
//             {subjects.map((sub, i) => (
//               <div
//                 key={i}
//                 className="selection-card subject-card"
//                 onClick={() => handleSubjectClick(sub)}
//               >
//                 <div className="card-icon">{subjectIcons[i % subjectIcons.length]}</div>
//                 <h3>{t(`${sub.toLowerCase()}`)}</h3>
               
 
 
//                 <p>{t('subjectCardDesc')}</p>
//                 <div className="card-hover"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {!selectedChapter && selectedSubject && !error && (
//         <div className="selection-container chapter-select">
//           <div className="header">
//             <h2>{t('selectChapterTitle')}</h2>
//             <p>{t('selectChapterSubtitle', { selectedSubject: t(`subjects.${selectedSubject.toLowerCase()}`) })}</p>
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
//                 <p>{selectedChapter === chap ? t('chapterSelected') : t('chapterCardDesc')}</p>
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
//             <h2>{t('instructionsTitle')}</h2>
//     <div className="instructions-content">
//               <div className="instruction-item">
//                 <span className="instruction-icon">⏱️</span>
//                 <div>
//                   <h3>{t('timeLimitTitle')}</h3>
//                   <p>{t('timeLimitDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">❓</span>
//                 <div>
//                   <h3>{t('questionFormatTitle')}</h3>
//                   <p>{t('questionFormatDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">📊</span>
//                 <div>
//                   <h3>{t('passingCriteriaTitle')}</h3>
//                   <p>{t('passingCriteriaDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">⏭️</span>
//                 <div>
//                   <h3>{t('skippingQuestionsTitle')}</h3>
//                   <p>{t('skippingQuestionsDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">📝</span>
//                 <div>
//                   <h3>{t('scoringTitle')}</h3>
//                   <p>{t('scoringDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">🔑</span>
//                 <div>
//                   <h3>{t('answerKeyTitle')}</h3>
//                   <p>{t('answerKeyDesc')}</p>
//                 </div>
//               </div>
//               <div className="instruction-item">
//                 <span className="instruction-icon">🌐</span>
//                 <div>
//                   <h3>{t('languageTitle')}</h3>
//                   <p>{t('languageDesc')}</p>
//                 </div>
//               </div>
//             </div>
 
//             <div className="test-details">
//               <h3>{t('testDetailsTitle')}</h3>
//               <p><strong>{t('testClass')}</strong> {t(`classes.${selectedClass}`)}</p>
//               <p><strong>{t('testSubject')}</strong> {t(`subjects.${selectedSubject.toLowerCase()}`)}</p>
//               <p><strong>{t('testChapter')}</strong> {selectedChapter}</p>
//               <p><strong>{t('testTotalQuestions')}</strong> 50</p>
//               <p><strong>{t('testPassingScore')}</strong></p>
//               <p><strong>{t('testLanguage')}</strong> {selectedLanguage}</p>
//             </div>
 
//             <div className="language-select">
//               <label htmlFor="language" style={{ fontWeight: '600', marginRight: '8px', fontSize: '16px' }}>
//                 {t('languageSelectLabel')}
//               </label>
//               <select
//                 id="language"
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className="language-dropdown"
//                 style={{
//                   padding: '10px 15px',
//                   fontSize: '15px',
//                   borderRadius: '8px',
//                   border: '2px solid #007bff',
//                   backgroundColor: 'white',
//                   cursor: 'pointer',
//                   minWidth: '180px',
//                   fontWeight: '500'
//                 }}
//               >
//                 <option value="English">English</option>
//                 <option value="Telugu">తెలుగు (Telugu)</option>
//                 <option value="Hindi">हिंदी (Hindi)</option>
//                 <option value="Tamil">தமிழ் (Tamil)</option>
//                 <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
//                 <option value="Malayalam">മലയാളം (Malayalam)</option>
//               </select>
//             </div>
 
//             <div className="instructions-actions">
//               <button className="back-button" onClick={backToChapters}>
//                 {t('backToChapters')}
//               </button>
//               <button className="start-quiz-btn" onClick={startQuiz}>
//                 {t('startTestNow')}
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
//               <p className="language-info">Test taken in: <strong>{selectedLanguage}</strong></p>
//               <p className="reward-info">Reward Points Earned: <strong>{Math.floor(score / 2)}</strong> (2 marks = 1 point)</p>
//               <p className="total-reward">Total Reward Points: <strong>{rewardPoints}</strong></p>
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
//                 <span className="language-badge">🌐 {selectedLanguage}</span>
//                 <span className="reward-badge">⭐ {rewardPoints} pts</span>
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
//             {showHint && (
//               <div className="hint-box">
//                 <p><strong>Hint:</strong> {currentHint}</p>
//                 <button onClick={() => setShowHint(false)} className="close-hint-btn">Close Hint</button>
//               </div>
//             )}
//             <button className="hint-btn" onClick={handleHint} disabled={rewardPoints <= 0}>
//               💡 Hint ({rewardPoints > 0 ? '1 pt' : 'No pts'})
//             </button>
//             <div className="options-grid">
//               {quiz[currentQ].options && Object.entries(quiz[currentQ].options).map(([label, opt]) => (
//                 <button
//                   key={label}
//                   className={`option-card ${
//                     selected === label ? 'selected' : ''
//                   } ${showAnswer || showAnswerKey ? (label === quiz[currentQ].answer ? 'correct-answer' : '') : ''}`}
//                   onClick={() => handleAnswer(label)}
//                   disabled={showAnswer}
//                 >
//                   <span className="option-text">{opt}</span>
//                   {(showAnswer || showAnswerKey) && label === quiz[currentQ].answer && (
//                     <span className="correct-indicator">✓</span>
//                   )}
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
//             >
//               Skip →
//             </button>
//             <button
//               className="nav-btn next-btn"
//               onClick={nextQuestion}
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
//                 <p><strong>Language:</strong> {selectedLanguage}</p>
//                 <p><strong>Score:</strong> {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)</p>
//                 <p><strong>Status:</strong> <span className={isPassed ? 'pass-text' : 'fail-text'}>{isPassed ? 'PASSED' : 'FAILED'}</span></p>
//                 <p><strong>Total Reward Points:</strong> {rewardPoints}</p>
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
import { useTranslation } from 'react-i18next';
 
function MockTest() {
  const { t, i18n } = useTranslation();
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
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [rewardPoints, setRewardPoints] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState('');
 
  const optionLabels = ["A", "B", "C", "D"];
  const classIcons = ["🏫", "📚", "🎓", "💼", "🔬", "📊"];
  const subjectIcons = ["📖", "🧮", "🔭", "🧪", "🌍", "📜", "💻", "🎨"];
  const chapterIcons = ["📝", "🔍", "💡", "⚡", "🌟", "🎯", "📊", "🔬"];
 
  // Load reward points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('rewardPoints');
    if (savedPoints) {
      setRewardPoints(parseInt(savedPoints, 10));
    }
  }, []);

  // Save reward points to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('rewardPoints', rewardPoints.toString());
  }, [rewardPoints]);
 
  // Hide chatbot widget
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
            finishQuiz();
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
  }, [quiz, isFinished, showInstructions]);
 
  // Handle full-screen change
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
      setIsFullScreen(isCurrentlyFullScreen);
 
      if (!isCurrentlyFullScreen && quiz.length > 0 && !isFinished && !showInstructions) {
        setWarningCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            finishQuiz();
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
  }, [quiz, isFinished, showInstructions]);
 
  // Auto-hide warning
  useEffect(() => {
    if (showWarning) {
      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 3000);
      return () => clearTimeout(timer);
    };
  }, [showWarning]);
 
  // Timer for quiz
  useEffect(() => {
    if (quiz.length > 0 && !isFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quiz, isFinished, timeLeft]);
 
  const finishQuiz = () => {
    const passed = score > 20;
    setIsPassed(passed);
    setIsFinished(true);
    updateMockTestResults(score, quiz.length, passed, selectedClass, selectedSubject, selectedChapter);
    // Award reward points: 2 marks = 1 reward point
    const additionalPoints = Math.floor(score / 2);
    setRewardPoints(prev => prev + additionalPoints);
    exitFullScreen();
    setShowWarning(false);
  };

  const generateAIHint = (question, options, correctAnswer) => {
    // Analyze the question and generate a logical hint
    const questionText = question.toLowerCase();
    const subject = selectedSubject?.toLowerCase() || '';
    
    // Subject-specific hint strategies
    if (subject.includes('math') || subject.includes('calculus') || subject.includes('algebra')) {
      return "Think about the mathematical principles involved. Check your calculations step by step and look for patterns in the numbers.";
    }
    
    if (subject.includes('science') || subject.includes('physics')) {
      return "Consider the scientific concepts and laws that apply here. Think about cause-effect relationships and fundamental principles.";
    }
    
    if (subject.includes('chemistry')) {
      return "Focus on chemical properties, reactions, or periodic trends. Remember the basic rules of chemical behavior.";
    }
    
    if (subject.includes('history') || subject.includes('social')) {
      return "Think about the historical context, timeline, or significant events related to this topic. Consider cause and effect.";
    }
    
    if (subject.includes('english') || subject.includes('language')) {
      return "Pay attention to grammar rules, context clues, or literary devices. Read each option carefully for subtle differences.";
    }
    
    // General hint strategies based on question content
    if (questionText.includes('not') || questionText.includes('except')) {
      return "This is an exclusion question. Look for the option that doesn't fit the pattern or category of the others.";
    }
    
    if (questionText.includes('always') || questionText.includes('never') || questionText.includes('most')) {
      return "Look for absolute terms or superlatives. These often indicate key concepts that can help eliminate wrong options.";
    }
    
    if (Object.keys(options).length === 4) {
      return "Try eliminating obviously wrong answers first. Often, you can narrow it down to 2 possibilities, then analyze those carefully.";
    }
    
    // Default hint
    return "Analyze each option systematically. Look for keywords in the question that might match concepts in the correct answer. Eliminate options that contain factual errors or don't directly address the question.";
  };

  const handleHint = () => {
    if (rewardPoints >= 5) {
      const currentQuestion = quiz[currentQ];
      const hintText = generateAIHint(
        currentQuestion.question, 
        currentQuestion.options, 
        currentQuestion.answer
      );
      setCurrentHint(hintText);
      setShowHint(true);
      setRewardPoints(prev => prev - 5);
    } else {
      alert('Not enough reward points! You need 5 points to use a hint.');
    }
  };
 
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
    setShowHint(false);
    setCurrentHint('');
   
    fetch(
      `http://127.0.0.1:8000/mock_test?class_name=${selectedClass}&subject=${encodeURIComponent(
        selectedSubject
      )}&chapter=${encodeURIComponent(chapter)}&difficulty=${difficulty}&retry=${retry}&language=${encodeURIComponent(selectedLanguage)}&num_questions=50`
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
 
    const newSkipped = skippedQuestions.filter(q => q !== currentQ);
    setSkippedQuestions(newSkipped);
 
    if (correctAnswer === quiz[currentQ]?.answer) {
      setScore(score + 1);
    }
  };
 
  const nextQuestion = () => {
    setShowHint(false);
    setCurrentHint('');
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(userAnswers[currentQ + 1] || null);
      setShowAnswer(false);
      setShowAnswerKey(false);
    } else {
      finishQuiz();
    }
  };
 
  const prevQuestion = () => {
    setShowHint(false);
    setCurrentHint('');
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
   
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQ] = null;
    setUserAnswers(newUserAnswers);
    setSelected(null);
   
    nextQuestion();
  };
 
  const goToQuestion = (index) => {
    setShowHint(false);
    setCurrentHint('');
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
    setShowHint(false);
    setCurrentHint('');
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
      elem.webkitRequestFullscreen();
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
 
  const getBackButtonConfig = () => {
    if (quiz.length > 0 && !isFinished && !showInstructions) {
        return null;
    }
   
    if (selectedSubject && !selectedChapter) {
        return {
            text: t('backToSubjects'),
            action: backToSubjects
        };
    }
   
    if (selectedClass && !selectedSubject) {
        return {
            text: t('backToClasses'),
            action: backToClasses
        };
    }
   
    if (!selectedClass) {
        return {
            text: t('backToPractice'),
            action: backToPractice
        };
    }
  };
 
  const backButtonConfig = getBackButtonConfig();
 
  if (loading) return (
    <div className="loading-container">
      <div className="edu-loader">
        <span role="img" aria-label="book" className="edu-icon">📚</span>
        <span role="img" aria-label="graduation" className="edu-icon">🎓</span>
        <span role="img" aria-label="lightbulb" className="edu-icon">💡</span>
      </div>
      <p style={{ color: "black" }}>
  Preparing your test in {selectedLanguage}...
</p>

    </div>
  );
 
  return (
    <>
      <Navbar isFullScreen={isFullScreen && quiz.length > 0 && !showInstructions} />
     
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
            <h2>{t('selectClassTitle')}</h2>
            <p>{t('selectClassSubtitle')}</p>
          </div>
          <div className="cards-grid">
            {classes.map((cl, i) => (
              <div
                key={i}
                className="selection-card"
                onClick={() => handleClassClick(cl)}
              >
                <div className="card-icon">{classIcons[i % classIcons.length]}</div>
                <h3>{t(`classes.${cl}`)}</h3>
                <p>{t('classCardDesc')}</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!selectedSubject && selectedClass && !error && (
        <div className="selection-container">
          <div className="header">
            <h2>{t('selectSubjectTitle')}</h2>
            <p>{t('selectSubjectSubtitle', { class: t(`classes.${selectedClass}`) })}</p>
          </div>
          <div className="cards-grid">
            {subjects.map((sub, i) => (
              <div
                key={i}
                className="selection-card subject-card"
                onClick={() => handleSubjectClick(sub)}
              >
                <div className="card-icon">{subjectIcons[i % subjectIcons.length]}</div>
                <h3>{t(`${sub.toLowerCase()}`)}</h3>
                <p>{t('subjectCardDesc')}</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!selectedChapter && selectedSubject && !error && (
        <div className="selection-container chapter-select">
          <div className="header">
            <h2>{t('selectChapterTitle')}</h2>
            <p>{t('selectChapterSubtitle', { selectedSubject: t(`subjects.${selectedSubject.toLowerCase()}`) })}</p>
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
                <p>{selectedChapter === chap ? t('chapterSelected') : t('chapterCardDesc')}</p>
                <div className="card-hover"></div>
              </div>
            ))}
          </div>
        </div>
      )}
      

{(quiz.length === 0 || showInstructions) && !error && selectedChapter && (
  <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem"
  }}>
    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      width: "100%",
      margin: "2rem"
    }}>
      <div style={{
        textAlign: "center",
        fontSize: "4rem",
        marginBottom: "1rem"
      }}>📋</div>
     
      <h2 style={{
        textAlign: "center",
        color: "#2d3748",
        marginBottom: "2rem",
        fontSize: "2rem",
        fontWeight: "700"
      }}>{t('instructionsTitle')}</h2>
     
      <div style={{
        marginBottom: "2rem"
      }}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>⏱️</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('timeLimitTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('timeLimitDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>❓</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('questionFormatTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('questionFormatDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>📊</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('passingCriteriaTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('passingCriteriaDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>⏭️</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('skippingQuestionsTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('skippingQuestionsDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>📝</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('scoringTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('scoringDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>🔑</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('answerKeyTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('answerKeyDesc')}</p>
          </div>
        </div>
 
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          border: "1px solid #e2e8f0"
        }}>
          <span style={{
            fontSize: "1.5rem",
            marginRight: "1rem",
            marginTop: "0.25rem"
          }}>🌐</span>
          <div>
            <h3 style={{
              margin: "0 0 0.5rem 0",
              color: "#2d3748",
              fontWeight: "600"
            }}>{t('languageTitle')}</h3>
            <p style={{
              margin: "0",
              color: "#4a5568",
              lineHeight: "1.6"
            }}>{t('languageDesc')}</p>
          </div>
        </div>
      </div>
 
      <div style={{
        background: "#f7fafc",
        padding: "1.5rem",
        borderRadius: "12px",
        marginBottom: "2rem",
        border: "1px solid #e2e8f0"
      }}>
        <h3 style={{
          margin: "0 0 1rem 0",
          color: "#2d3748",
          fontWeight: "600"
        }}>{t('testDetailsTitle')}</h3>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testClass')}</strong> {t(`classes.${selectedClass}`)}
        </p>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testSubject')}</strong> {t(`subjects.${selectedSubject.toLowerCase()}`)}
        </p>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testChapter')}</strong> {selectedChapter}
        </p>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testTotalQuestions')}</strong> 50
        </p>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testPassingScore')}</strong>
        </p>
        <p style={{ margin: "0.5rem 0", color: "#4a5568" }}>
          <strong style={{ color: "#2d3748" }}>{t('testLanguage')}</strong> {selectedLanguage}
        </p>
      </div>
 
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        gap: "1rem"
      }}>
        <label htmlFor="language" style={{
          fontWeight: "600",
          fontSize: "16px",
          color: "#2d3748"
        }}>
          {t('languageSelectLabel')}
        </label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          style={{
            padding: "10px 15px",
            fontSize: "15px",
            borderRadius: "8px",
            border: "2px solid #007bff",
            backgroundColor: "white",
            cursor: "pointer",
            minWidth: "180px",
            fontWeight: "500"
          }}
        >
          <option value="English">English</option>
          <option value="Telugu">తెలుగు (Telugu)</option>
          <option value="Hindi">हिंदी (Hindi)</option>
          <option value="Tamil">தமிழ் (Tamil)</option>
          <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
          <option value="Malayalam">മലയാളം (Malayalam)</option>
        </select>
      </div>
 
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        <button
          onClick={backToChapters}
          style={{
            padding: "12px 24px",
            border: "2px solid #4a5568",
            background: "transparent",
            color: "#4a5568",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#4a5568";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#4a5568";
          }}
        >
          {t('backToChapters')}
        </button>
       
        <button
          onClick={startQuiz}
          style={{
            padding: "12px 24px",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 15px rgba(102, 126, 234, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
          }}
        >
          {t('startTestNow')}
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
              <p className="language-info">Test taken in: <strong>{selectedLanguage}</strong></p>
              <p className="reward-info">Reward Points Earned: <strong>{Math.floor(score / 2)}</strong> (2 marks = 1 point)</p>
              <p className="total-reward">Total Reward Points: <strong>{rewardPoints}</strong></p>
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
                <span className="language-badge">🌐 {selectedLanguage}</span>
                <span className="reward-badge">⭐ {rewardPoints} pts</span>
              </div>
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
            
            {/* Hint Box */}
            {showHint && (
              <div className="hint-box">
                <div className="hint-header">
                  <span className="hint-icon">💡</span>
                  <strong>AI Hint</strong>
                  <span className="hint-cost">-5 pts</span>
                </div>
                <p className="hint-text">{currentHint}</p>
                <button onClick={() => setShowHint(false)} className="close-hint-btn">
                  Close Hint
                </button>
              </div>
            )}
            
            {/* Hint Button */}
            <button 
              className={`hint-btn ${rewardPoints < 5 ? 'disabled' : ''}`} 
              onClick={handleHint} 
              disabled={rewardPoints < 5}
            >
              💡 Use Hint (-5 pts) {rewardPoints < 5 && '(Insufficient points)'}
            </button>

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
                <p><strong>Language:</strong> {selectedLanguage}</p>
                <p><strong>Score:</strong> {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)</p>
                <p><strong>Status:</strong> <span className={isPassed ? 'pass-text' : 'fail-text'}>{isPassed ? 'PASSED' : 'FAILED'}</span></p>
                <p><strong>Total Reward Points:</strong> {rewardPoints}</p>
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