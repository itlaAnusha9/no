 
import { createContext, useContext, useState } from 'react';
 
const QuizContext = createContext();
 
export const QuizProvider = ({ children }) => {
  const [quizResults, setQuizResults] = useState({
    totalQuizzes: 0,
    totalScore: 0,
    totalQuestions: 0,
    byLevel: {},
  });
 
  const [mockTestResults, setMockTestResults] = useState({
    totalTests: 0,
    totalScore: 0,
    totalQuestions: 0,
  });
 
  // History arrays for detailed tracking
  const [quizHistory, setQuizHistory] = useState([]);
  const [mockHistory, setMockHistory] = useState([]);
 
  // Track if quiz is active
  const [isQuizActive, setIsQuizActive] = useState(false);
 
  const updateQuizResults = (score, totalQuestions, level, className, subject, subtopic) => {
    setQuizResults(prev => ({
      totalQuizzes: prev.totalQuizzes + 1,
      totalScore: prev.totalScore + score,
      totalQuestions: prev.totalQuestions + totalQuestions,
      byLevel: {
        ...prev.byLevel,
        [level]: (prev.byLevel[level] || 0) + 1,
      },
    }));
 
    // Add to history
    const historyItem = {
      id: Date.now(),
      class: className,
      subject,
      topic: subtopic,
      score: Math.round((score / totalQuestions) * 100),
      questions: totalQuestions,
      date: new Date().toISOString().split('T')[0]
    };
    setQuizHistory(prev => [...prev, historyItem]);
  };
 
  const getQuizHistory = () => {
    return quizHistory;
  };
 
  const updateMockTestResults = (score, totalQuestions, className, subject, chapter) => {
    setMockTestResults(prev => ({
      totalTests: prev.totalTests + 1,
      totalScore: prev.totalScore + score,
      totalQuestions: prev.totalQuestions + totalQuestions,
    }));
 
    // Add to history
    const historyItem = {
      id: Date.now(),
      class: className,
      subject,
      topic: chapter,
      score: Math.round((score / totalQuestions) * 100),
      questions: totalQuestions,
      date: new Date().toISOString().split('T')[0]
    };
    setMockHistory(prev => [...prev, historyItem]);
  };
 
  const getMockHistory = () => {
    return mockHistory;
  };
 
  const startQuiz = () => setIsQuizActive(true);
  const endQuiz = () => setIsQuizActive(false);
 
  return (
    <QuizContext.Provider
      value={{
        quizResults,
        mockTestResults,
        updateQuizResults,
        updateMockTestResults,
        getQuizHistory,
        getMockHistory,
        isQuizActive,
        startQuiz,
        endQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
 
export const useQuiz = () => useContext(QuizContext);
 
 