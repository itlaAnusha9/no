import { useState, useEffect } from "react";
import QuizGrade from "./QuizGrade";
import QuizSubject from "./QuizSubject";
import QuizQuestion from "./QuizQuestion";
import Navbar from "./Navbarrr";
import { useQuiz } from "./QuizContext";
import "./Quiz.css";
 
function Quiz() {
  const { updateQuizResults } = useQuiz();
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subtopics, setSubtopics] = useState({});
  const [quiz, setQuiz] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
 
  // Fetch classes
  useEffect(() => {
    fetch("http://127.0.0.1:8000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data.classes))
      .catch(() => setError("Failed to load classes"));
  }, []);
 
  const fetchSubjects = (className) => {
    if (!className) return;
    setLoading(true);
    fetch(`http://127.0.0.1:8000/chapters?class_name=${className}`)
      .then((res) => res.json())
      .then((data) => {
        setSubjects(data.chapters || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load subjects");
        setLoading(false);
      });
  };
 
  const fetchSubtopics = (className, subject) => {
    if (!className || !subject) return;
    setLoading(true);
    fetch(`http://127.0.0.1:8000/subtopics?class_name=${className}&subject=${subject}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.subtopics)) {
          setSubtopics({ "Chapter 1": data.subtopics });
        } else if (typeof data.subtopics === "object" && data.subtopics !== null) {
          setSubtopics(data.subtopics);
        } else {
          setSubtopics({});
          setError("Invalid subtopics data format");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load subtopics");
        setLoading(false);
      });
  };
 
  const fetchQuiz = (subtopic, level = 1, retry = false) => {
    if (!subtopic) return;
    setLoading(true);
    fetch(
      `http://127.0.0.1:8000/quiz?subtopic=${encodeURIComponent(
        subtopic
      )}&currentLevel=${level}&retry=${retry}`
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.error) setError(data.error);
        else {
          const cleanedQuiz = data.quiz.map((q) => {
            q.options = q.options.map((opt) => opt.replace(/^[A-D][).]\s*/, ""));
            q.answer = q.answer.replace(/^[A-D][).]\s*/, "");
            return q;
          });
          setQuiz(cleanedQuiz);
          setCurrentLevel(data.currentLevel || level);
          setCurrentQ(0);
          setSelected(null);
          setScore(0);
          setIsFinished(false);
          setShowAnswer(false);
          setUserAnswers([]);
          setError(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(`Failed to load quiz: ${error.message}`);
        setLoading(false);
      });
  };
 
  const handleClassClick = (className) => {
    setSelectedClass(className);
    setSelectedSubject(null);
    setSelectedSubtopic(null);
    fetchSubjects(className);
  };
 
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedSubtopic(null);
    fetchSubtopics(selectedClass, subject);
  };
 
  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
    setCurrentLevel(1);
    enterFullScreen();
    fetchQuiz(subtopic, 1);
  };
 
  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
 
    const newAnswers = [...userAnswers];
    newAnswers[currentQ] = option;
    setUserAnswers(newAnswers);
 
    if (option === quiz[currentQ].answer) setScore(score + 1);
  };
 
  const nextQuestion = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
      updateQuizResults(score, quiz.length, currentLevel);
      exitFullScreen();
    }
  };
 
  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelected(userAnswers[currentQ - 1] || null);
      setShowAnswer(false);
    }
  };
 
  const backToChapters = () => {
    // Only reset quiz and subtopic, keep subjects and class to avoid blinking
    setSelectedSubtopic(null);
    setQuiz([]);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setIsFinished(false);
    setShowAnswer(false);
    setUserAnswers([]);
    exitFullScreen();
  };
 
  const retryQuiz = () => {
    enterFullScreen();
    fetchQuiz(selectedSubtopic, currentLevel, true);
  };
 
  const nextLevel = () => {
    const nextLvl = currentLevel + 1;
    setCurrentLevel(nextLvl);
    fetchQuiz(selectedSubtopic, nextLvl);
    enterFullScreen();
  };
 
  const enterFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    setIsFullScreen(true);
  };
 
  const exitFullScreen = () => {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    setIsFullScreen(false);
  };
 
  if (loading)
    return (
      <div className="loading-container">
        <div className="edu-loader">
          <span role="img" aria-label="books" className="edu-icon">
            📚
          </span>
          <span role="img" aria-label="pencil" className="edu-icon">
            ✏️
          </span>
          <span role="img" aria-label="globe" className="edu-icon">
            🌍
          </span>
        </div>
        <p>Preparing your Quiz...</p>
      </div>
    );
 
  return (
    <>
      {error && (
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <p>{error}</p>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      )}
 
      {/* Grade Selection */}
      {!selectedClass && !error && (
        <QuizGrade classes={classes} onClassClick={handleClassClick} />
      )}
 
      {/* Subject / Subtopic Selection */}
      {selectedClass && !selectedSubtopic && !error && (
        <QuizSubject
          subjects={subjects}
          subtopics={subtopics}
          selectedSubject={selectedSubject}
          selectedClass={selectedClass}
          onClassClick={() => setSelectedClass(null)} // smooth back to grades
          onSubjectClick={handleSubjectClick}
          onSubtopicClick={handleSubtopicClick}
        />
      )}
 
      {/* Quiz Page */}
      {selectedSubtopic && !error && (
        <QuizQuestion
          quiz={quiz}
          currentQ={currentQ}
          selected={selected}
          showAnswer={showAnswer}
          score={score}
          isFinished={isFinished}
          handleAnswer={handleAnswer}
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          retryQuiz={retryQuiz}
          nextLevel={nextLevel}
          backToChapters={backToChapters}
          currentLevel={currentLevel}
          userAnswers={userAnswers}
        />
      )}
    </>
  );
}
 
export default Quiz;
// import { useState, useEffect } from "react";
// import QuizGrade from "./QuizGrade";
// import QuizSubject from "./QuizSubject";
// import QuizQuestion from "./QuizQuestion";
// import Navbar from "./Navbarrr";
// import { useQuiz } from "./QuizContext";
// import "./Quiz.css";

// function Quiz() {
//   const { updateQuizResults } = useQuiz();
//   const [classes, setClasses] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [subtopics, setSubtopics] = useState({});
//   const [quiz, setQuiz] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedSubtopic, setSelectedSubtopic] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [currentLevel, setCurrentLevel] = useState(1);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [warningCount, setWarningCount] = useState(0); // Track warnings
//   const [showWarning, setShowWarning] = useState(false); // Show warning message

//   // Fetch classes
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/classes")
//       .then((res) => res.json())
//       .then((data) => setClasses(data.classes))
//       .catch(() => setError("Failed to load classes"));
//   }, []);

//   // Handle visibility change (tab switch or minimization)
//   useEffect(() => {
//     if (!selectedSubtopic || isFinished) return; // Only active during quiz

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         // User switched tabs or minimized
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             // End quiz after 3 warnings
//             setIsFinished(true);
//             updateQuizResults(score, quiz.length, currentLevel);
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
//   }, [selectedSubtopic, isFinished, score, quiz.length, currentLevel]);

//   // Handle full-screen change (exit full-screen and auto-re-enter)
//   useEffect(() => {
//     if (!selectedSubtopic || isFinished) return; // Only active during quiz

//     const handleFullScreenChange = () => {
//       const isCurrentlyFullScreen = !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
//       setIsFullScreen(isCurrentlyFullScreen);

//       if (!isCurrentlyFullScreen && !isFinished) {
//         // User exited full-screen during quiz (e.g., via ESC)
//         setWarningCount((prev) => {
//           const newCount = prev + 1;
//           if (newCount >= 3) {
//             // End quiz after 3 warnings
//             setIsFinished(true);
//             updateQuizResults(score, quiz.length, currentLevel);
//             exitFullScreen();
//             setShowWarning(false);
//             return newCount;
//           } else {
//             // Show warning and auto-re-enter full-screen
//             setShowWarning(true);
//             enterFullScreen(); // Automatically re-enter full-screen
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
//   }, [selectedSubtopic, isFinished, score, quiz.length, currentLevel]);

//   // Auto-hide warning after 3 seconds
//   useEffect(() => {
//     if (showWarning) {
//       const timer = setTimeout(() => {
//         setShowWarning(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showWarning]);

//   const fetchSubjects = (className) => {
//     setLoading(true);
//     fetch(`http://127.0.0.1:8000/chapters?class_name=${className}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setSubjects(data.chapters);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load subjects");
//         setLoading(false);
//       });
//   };

//   const fetchSubtopics = (className, subject) => {
//     setLoading(true);
//     fetch(`http://127.0.0.1:8000/subtopics?class_name=${className}&subject=${subject}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Ensure subtopics is an object with chapters as keys and arrays as values
//         if (Array.isArray(data.subtopics)) {
//           // If API returns a flat array, group under a default chapter
//           setSubtopics({ "Chapter 1": data.subtopics });
//         } else if (typeof data.subtopics === "object" && data.subtopics !== null) {
//           // If API returns an object, use it directly
//           setSubtopics(data.subtopics);
//         } else {
//           setSubtopics({}); // Default to empty object if data is invalid
//           setError("Invalid subtopics data format");
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load subtopics");
//         setLoading(false);
//       });
//   };

//   const fetchQuiz = (subtopic, level = 1, retry = false) => {
//     setLoading(true);
//     fetch(
//       `http://127.0.0.1:8000/quiz?subtopic=${encodeURIComponent(
//         subtopic
//       )}&currentLevel=${level}&retry=${retry}`
//     )
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           return res.text().then((text) => {
//             throw new Error(`Expected JSON but got: ${text.substring(0, 100)}...`);
//           });
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (data.error) setError(data.error);
//         else {
//           const cleanedQuiz = data.quiz.map((q) => {
//             q.options = q.options.map((opt) => opt.replace(/^[A-D][).]\s*/, ""));
//             q.answer = q.answer.replace(/^[A-D][).]\s*/, "");
//             return q;
//           });
//           setQuiz(cleanedQuiz);
//           setCurrentLevel(data.currentLevel || level);
//           setCurrentQ(0);
//           setSelected(null);
//           setScore(0);
//           setIsFinished(false);
//           setShowAnswer(false);
//           setUserAnswers([]);
//           setError(null);
//           setWarningCount(0); // Reset warnings on new quiz
//           setShowWarning(false);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setError(`Failed to load quiz: ${error.message}`);
//         setLoading(false);
//       });
//   };

//   const handleClassClick = (className) => {
//     setSelectedClass(className);
//     setSelectedSubject(null);
//     setSelectedSubtopic(null);
//     setSubjects([]);
//     setSubtopics({});
//     fetchSubjects(className);
//   };

//   const handleSubjectClick = (subject) => {
//     setSelectedSubject(subject);
//     setSelectedSubtopic(null);
//     setSubtopics({});
//     fetchSubtopics(selectedClass, subject);
//   };

//   const handleSubtopicClick = (subtopic) => {
//     setSelectedSubtopic(subtopic);
//     setCurrentLevel(1);
//     setWarningCount(0); // Reset warnings
//     setShowWarning(false);
//     enterFullScreen();
//     fetchQuiz(subtopic, 1);
//   };

//   const handleAnswer = (option) => {
//     setSelected(option);
//     setShowAnswer(true);

//     const newAnswers = [...userAnswers];
//     newAnswers[currentQ] = option;
//     setUserAnswers(newAnswers);

//     if (option === quiz[currentQ].answer) setScore(score + 1);
//   };

//   const nextQuestion = () => {
//     if (currentQ < quiz.length - 1) {
//       setCurrentQ(currentQ + 1);
//       setSelected(null);
//       setShowAnswer(false);
//     } else {
//       setIsFinished(true);
//       updateQuizResults(score, quiz.length, currentLevel);
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

//   const backToChapters = () => {
//     setSelectedSubtopic(null);
//     setSelectedSubject(null);
//     setQuiz([]);
//     setCurrentQ(0);
//     setSelected(null);
//     setScore(0);
//     setIsFinished(false);
//     setShowAnswer(false);
//     setUserAnswers([]);
//     setWarningCount(0);
//     setShowWarning(false);
//     exitFullScreen();
//   };

//   const retryQuiz = () => {
//     setWarningCount(0); // Reset warnings
//     setShowWarning(false);
//     enterFullScreen();
//     fetchQuiz(selectedSubtopic, currentLevel, true);
//   };

//   const nextLevel = () => {
//     const nextLvl = currentLevel + 1;
//     setCurrentLevel(nextLvl);
//     setWarningCount(0); // Reset warnings
//     setShowWarning(false);
//     fetchQuiz(selectedSubtopic, nextLvl);
//     enterFullScreen();
//   };

//   const enterFullScreen = () => {
//     const elem = document.documentElement;
//     if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});
//     else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
//     else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
//     else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
//     setIsFullScreen(true);
//   };

//   const exitFullScreen = () => {
//     if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
//     else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//     else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
//     else if (document.msExitFullscreen) document.msExitFullscreen();
//     setIsFullScreen(false);
//   };

//   if (loading)
//     return (
//       <div className="loading-container">
//         <div className="edu-loader">
//           <span role="img" aria-label="books" className="edu-icon">
//             📚
//           </span>
//           <span role="img" aria-label="pencil" className="edu-icon">
//             ✏️
//           </span>
//           <span role="img" aria-label="globe" className="edu-icon">
//             🌍
//           </span>
//         </div>
//         <p>Preparing your Quiz...</p>
//       </div>
//     );

//   return (
//     <>
//       <Navbar isFullScreen={isFullScreen && selectedSubtopic} />
//       {error && (
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
//             Warning {warningCount} of 3: Please stay on the quiz tab or in full-screen mode. The quiz will end after 3 warnings.
//           </p>
//         </div>
//       )}
//       {!selectedClass && !error && <QuizGrade classes={classes} onClassClick={handleClassClick} />}
//       {!selectedSubtopic && selectedClass && !error && (
//         <QuizSubject
//           subjects={subjects}
//           subtopics={subtopics}
//           selectedSubject={selectedSubject}
//           onSubjectClick={handleSubjectClick}
//           onSubtopicClick={handleSubtopicClick}
//         />
//       )}
//       {selectedSubtopic && !error && (
//         <div className={`quiz-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
//           <QuizQuestion
//             quiz={quiz}
//             currentQ={currentQ}
//             selected={selected}
//             showAnswer={showAnswer}
//             score={score}
//             isFinished={isFinished}
//             handleAnswer={handleAnswer}
//             nextQuestion={nextQuestion}
//             prevQuestion={prevQuestion}
//             retryQuiz={retryQuiz}
//             nextLevel={nextLevel}
//             backToChapters={backToChapters}
//             currentLevel={currentLevel}
//             userAnswers={userAnswers}
//           />
//         </div>
//       )}
//       {!selectedClass && !error && (
//   <div className="quiz-grade-container">
//     <QuizGrade classes={classes} onClassClick={handleClassClick} />
//   </div>
// )}

// {!selectedSubtopic && selectedClass && !error && (
//   <div className="quiz-subject-container">
//     <QuizSubject
//       subjects={subjects}
//       subtopics={subtopics}
//       selectedSubject={selectedSubject}
//       onSubjectClick={handleSubjectClick}
//       onSubtopicClick={handleSubtopicClick}
//     />
//   </div>
// )}

// {selectedSubtopic && !error && (
//   <div className={`quiz-container ${isFullScreen ? "fullscreen-mode" : ""}`}>
//     <QuizQuestion
//       quiz={quiz}
//       currentQ={currentQ}
//       selected={selected}
//       showAnswer={showAnswer}
//       score={score}
//       isFinished={isFinished}
//       handleAnswer={handleAnswer}
//       nextQuestion={nextQuestion}
//       prevQuestion={prevQuestion}
//       retryQuiz={retryQuiz}
//       nextLevel={nextLevel}
//       backToChapters={backToChapters}
//       currentLevel={currentLevel}
//       userAnswers={userAnswers}
//     />
//   </div>
// )}
//     </>
//   );
// }

// export default Quiz;