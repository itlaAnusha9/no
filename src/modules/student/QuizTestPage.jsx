import React, { useEffect, useContext } from 'react';
import { useQuiz } from './QuizContext';
 
const QuizTestPage = () => {
  const { startQuiz, endQuiz } = useQuiz();
 
  // useEffect(() => {
  //   startQuiz(); // Hide navbar on quiz load/start
 
  //   return () => {
  //     endQuiz(); // Show navbar when leaving quiz
  //   };
  // }, [startQuiz, endQuiz]);
 
  return (
    <div>
      <h1>Quiz Test Page</h1>
      {/* Quiz content goes here */}
    </div>
  );
};
 
export default QuizTestPage;