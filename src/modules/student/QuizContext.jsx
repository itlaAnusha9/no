 
// import { createContext, useContext, useState } from 'react';
 
// const QuizContext = createContext();
 
// export const QuizProvider = ({ children }) => {
//   const [quizResults, setQuizResults] = useState({
//     totalQuizzes: 0,
//     totalScore: 0,
//     totalQuestions: 0,
//     byLevel: {},
//   });
 
//   const [mockTestResults, setMockTestResults] = useState({
//     totalTests: 0,
//     totalScore: 0,
//     totalQuestions: 0,
//   });
 
//   // History arrays for detailed tracking
//   const [quizHistory, setQuizHistory] = useState([]);
//   const [mockHistory, setMockHistory] = useState([]);
 
//   // Track if quiz is active
//   const [isQuizActive, setIsQuizActive] = useState(false);
 
//   const updateQuizResults = (score, totalQuestions, level, className, subject, subtopic) => {
//     setQuizResults(prev => ({
//       totalQuizzes: prev.totalQuizzes + 1,
//       totalScore: prev.totalScore + score,
//       totalQuestions: prev.totalQuestions + totalQuestions,
//       byLevel: {
//         ...prev.byLevel,
//         [level]: (prev.byLevel[level] || 0) + 1,
//       },
//     }));
 
//     // Add to history
//     const historyItem = {
//       id: Date.now(),
//       class: className,
//       subject,
//       topic: subtopic,
//       score: Math.round((score / totalQuestions) * 100),
//       questions: totalQuestions,
//       date: new Date().toISOString().split('T')[0]
//     };
//     setQuizHistory(prev => [...prev, historyItem]);
//   };
 
//   const getQuizHistory = () => {
//     return quizHistory;
//   };
 
//   const updateMockTestResults = (score, totalQuestions, className, subject, chapter) => {
//     setMockTestResults(prev => ({
//       totalTests: prev.totalTests + 1,
//       totalScore: prev.totalScore + score,
//       totalQuestions: prev.totalQuestions + totalQuestions,
//     }));
 
//     // Add to history
//     const historyItem = {
//       id: Date.now(),
//       class: className,
//       subject,
//       topic: chapter,
//       score: Math.round((score / totalQuestions) * 100),
//       questions: totalQuestions,
//       date: new Date().toISOString().split('T')[0]
//     };
//     setMockHistory(prev => [...prev, historyItem]);
//   };
 
//   const getMockHistory = () => {
//     return mockHistory;
//   };
 
//   const startQuiz = () => setIsQuizActive(true);
//   const endQuiz = () => setIsQuizActive(false);
 
//   return (
//     <QuizContext.Provider
//       value={{
//         quizResults,
//         mockTestResults,
//         updateQuizResults,
//         updateMockTestResults,
//         getQuizHistory,
//         getMockHistory,
//         isQuizActive,
//         startQuiz,
//         endQuiz,
//       }}
//     >
//       {children}
//     </QuizContext.Provider>
//   );
// };
 
// export const useQuiz = () => useContext(QuizContext);
 
 






// QuizContext.js
import React, { createContext, useContext, useState } from "react";
 
// 1️⃣ Create Context
const QuizContext = createContext();
 
// 2️⃣ Provider Component
export const QuizProvider = ({ children }) => {
  // Global reward points
  const [rewardPoints, setRewardPoints] = useState(
    parseInt(localStorage.getItem("rewardPoints")) || 0
  );
 
  // Current quiz state
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
 
  // ✅ Start a new quiz
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setUserAnswers([]);
    setScore(0);
    setCurrentQ(0);
    setIsFinished(false);
  };
 
  // ✅ Update reward points globally
  const updateRewardPoints = (points) => {
    setRewardPoints(points);
    localStorage.setItem("rewardPoints", points);
  };
 
  // ✅ Handle user answer selection
  const updateQuizResults = (answer) => {
    if (!currentQuiz) return;
 
    const correctAnswer = currentQuiz[currentQ]?.answer;
 
    // Save user answer
    const newAnswers = [...userAnswers];
    newAnswers[currentQ] = answer;
    setUserAnswers(newAnswers);
 
    // Update score if correct
    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };
 
  // ✅ Move to next question
  const nextQuestion = () => {
    if (!currentQuiz) return;
 
    if (currentQ + 1 < currentQuiz.length) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };
 
  // ✅ Move to previous question
  const prevQuestion = () => {
    if (currentQ > 0) setCurrentQ((prev) => prev - 1);
  };
 
  // ✅ Retry quiz (restart current quiz)
  const retryQuiz = () => {
    if (!currentQuiz) return;
    startQuiz(currentQuiz);
  };
 
  return (
    <QuizContext.Provider
      value={{
        rewardPoints,
        updateRewardPoints,
        startQuiz,
        updateQuizResults,
        currentQuiz,
        userAnswers,
        score,
        currentQ,
        isFinished,
        nextQuestion,
        prevQuestion,
        retryQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
 
// 3️⃣ Custom hook
export const useQuiz = () => useContext(QuizContext);
 
 