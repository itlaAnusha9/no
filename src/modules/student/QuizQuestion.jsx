







// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   LinearProgress,
//   Chip,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Paper,
//   Container,
//   Alert,
//   Fade,
//   Zoom,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Menu,
//   MenuItem,
//   IconButton,
//   CircularProgress
// } from '@mui/material';
// import {
//   CheckCircle,
//   RadioButtonUnchecked,
//   NavigateNext,
//   NavigateBefore,
//   Replay,
//   EmojiEvents,
//   Psychology,
//   MenuBook,
//   Lightbulb,
//   Share,
//   Download,
//   WhatsApp,
//   Email,
//   Telegram,
//   Instagram
// } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';
// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useQuiz } from './QuizContext';
// import html2canvas from 'html2canvas';
// import { FaSnapchat } from 'react-icons/fa';

// // Animation keyframes
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const slideIn = keyframes`
//   from { opacity: 0; transform: translateX(-20px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// function QuizQuestion({
//   quiz,
//   currentQ,
//   selected,
//   showAnswer,
//   score,
//   isFinished,
//   handleAnswer,
//   nextQuestion,
//   prevQuestion,
//   retryQuiz,
//   nextLevel,
//   backToChapters,
//   currentLevel,
//   userAnswers = [],
//   handlePause,
//   selectedLanguage,
//   selectedSubtopic,
//   classLevel,
//   subject,
//   chapter
// }) {
//   const { t } = useTranslation();
//   const optionLabels = ["A", "B", "C", "D"];
//   const passed = score >= 5;
//   const [exitDialogOpen, setExitDialogOpen] = useState(false);
//   const [hintsUsed, setHintsUsed] = useState({});
//   const [hintContent, setHintContent] = useState({});
//   const [loadingHint, setLoadingHint] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
//   const [shareAnchorEl, setShareAnchorEl] = useState(null);
//   const [generatingImage, setGeneratingImage] = useState(false);
//   const [explanations, setExplanations] = useState([]);
//   const [loadingExplanations, setLoadingExplanations] = useState(false);
//   const resultRef = useRef(null);
  
//   const {
//     rewardPoints,
//     updateRewardPoints,
//     calculateEarnedPoints,
//     earnedPoints: contextEarnedPoints,
//     resetPointsAwarded,
//     hasAwardedPoints
//   } = useQuiz();
  
//   const [showPointsMessage, setShowPointsMessage] = useState(false);

//   const navigate = useNavigate();

//   // Show snackbar notification
//   const showSnackbar = (message, severity = 'info') => {
//     setSnackbar({ open: true, message, severity });
//   };

//   // Handle hint usage for current question
//   const handleHint = async () => {
//     if (rewardPoints < 5) {
//       showSnackbar(t('not_enough_points'), 'warning');
//       return;
//     }

//     const currentQuestion = quiz[currentQ];
//     if (!currentQuestion) return;

//     // If hint is already used for this question, just show it
//     if (hintsUsed[currentQ]) {
//       return;
//     }

//     setLoadingHint(true);
//     try {
//       // Mark hint as used for this question
//       setHintsUsed(prev => ({
//         ...prev,
//         [currentQ]: true
//       }));

//       // Store the hint content
//       if (currentQuestion.hint) {
//         setHintContent(prev => ({
//           ...prev,
//           [currentQ]: currentQuestion.hint
//         }));
//       }

//       // Use global updateRewardPoints to deduct points
//       const newPoints = rewardPoints - 5;
//       updateRewardPoints(newPoints);
     
//       showSnackbar(t('hint_unlocked'), 'success');
     
//     } catch (error) {
//       console.error('Error using hint:', error);
//       showSnackbar(t('hint_error'), 'error');
//       // Revert hint usage if there was an error
//       setHintsUsed(prev => {
//         const newHints = { ...prev };
//         delete newHints[currentQ];
//         return newHints;
//       });
//     } finally {
//       setLoadingHint(false);
//     }
//   };

//   // Check if hint is used for current question
//   const isHintUsed = hintsUsed[currentQ] || false;
//   const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;

//   // Reset hints when retrying quiz
//   useEffect(() => {
//     if (isFinished && retryQuiz) {
//       setHintsUsed({});
//       setHintContent({});
//       resetPointsAwarded();
//     }
//   }, [isFinished, retryQuiz, resetPointsAwarded]);

//   // Handle next question
//   const handleNextQuestion = () => {
//     nextQuestion();
//   };

//   // Show points message only once when quiz is finished
//   useEffect(() => {
//     if (isFinished && passed && !showPointsMessage) {
//       const percentage = Math.round((score / quiz.length) * 100);
      
//       // Show success message with points breakdown
//       let pointsMessage = `🎉 ${t('quiz_passed_points', { points: contextEarnedPoints.basePoints })}`;
//       if (contextEarnedPoints.bonusPoints > 0) {
//         pointsMessage += ` + ${t('above_80_bonus_points', { points: contextEarnedPoints.bonusPoints })}`;
//       }
//       pointsMessage += ` = ${contextEarnedPoints.totalPoints} ${t('total_points')}!`;
      
//       showSnackbar(pointsMessage, 'success');
//       setShowPointsMessage(true);
//     }
//   }, [isFinished, passed, score, quiz.length, contextEarnedPoints, t, showPointsMessage]);

//   // Fetch explanations when quiz is finished
//   useEffect(() => {
//     if (isFinished && quiz.length > 0 && !loadingExplanations && explanations.length === 0) {
//       fetchExplanations();
//     }
//   }, [isFinished, quiz, loadingExplanations, explanations.length]);

//   // Fetch explanations from API
//   const fetchExplanations = async () => {
//     setLoadingExplanations(true);
//     try {
//       // Prepare questions data for explanation API
//       const questionsData = quiz.map((q, index) => ({
//         question: q.question,
//         correct_answer: q.answer,
//         user_answer: userAnswers[index] || '',
//         options: q.options || []
//       }));

//       const response = await fetch('http://localhost:8000/generate-explanations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           questions: questionsData,
//           class_level: classLevel,
//           subject: subject,
//           chapter: chapter
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch explanations');
//       }

//       const data = await response.json();
      
//       if (data.success && data.explanations) {
//         setExplanations(data.explanations);
//         showSnackbar(t('explanations_loaded'), 'success');
//       } else {
//         throw new Error('No explanations received');
//       }
//     } catch (error) {
//       console.error('Error fetching explanations:', error);
//       showSnackbar(t('explanations_error'), 'error');
//       // Create fallback explanations
//       const fallbackExplanations = quiz.map((q, index) => ({
//         question_index: index,
//         question: q.question,
//         correct_answer: q.answer,
//         user_answer: userAnswers[index] || '',
//         explanation: t('explanation_not_available'),
//         is_correct: userAnswers[index] === q.answer
//       }));
//       setExplanations(fallbackExplanations);
//     } finally {
//       setLoadingExplanations(false);
//     }
//   };

//   // Sync reward points from localStorage and other components
//   useEffect(() => {
//     const savedPoints = parseInt(localStorage.getItem('rewardPoints')) || 0;
//     if (savedPoints !== rewardPoints) {
//       console.log(`Syncing points from localStorage: ${savedPoints}`);
//       updateRewardPoints(savedPoints);
//     }

//     // Listen for reward points updates from other components
//     const handleRewardPointsUpdate = (event) => {
//       if (event.detail && event.detail.rewardPoints !== undefined) {
//         console.log(`Received points update from event: ${event.detail.rewardPoints}`);
//         updateRewardPoints(event.detail.rewardPoints);
//       }
//     };

//     window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);

//     return () => {
//       window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
//     };
//   }, [updateRewardPoints, rewardPoints]);

//   useEffect(() => {
//     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
//         e.preventDefault();
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement) {
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('fullscreenchange', handleFullscreenChange);

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, [handlePause]);

//   const handleExitConfirm = () => {
//     setExitDialogOpen(false);
//     if (backToChapters) backToChapters();
//     else navigate("/chapters");
//   };

//   const handleExitCancel = () => {
//     setExitDialogOpen(false);
//     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
//   };

//   // Generate result image - ONLY the result card
//   const generateResultImage = async () => {
//     if (!resultRef.current) return null;
    
//     setGeneratingImage(true);
//     try {
//       const canvas = await html2canvas(resultRef.current, {
//         scale: 2,
//         backgroundColor: passed ?
//           (score === quiz.length ? '#27ae60' : '#6c5ce7') :
//           '#e74c3c',
//         useCORS: true,
//         allowTaint: true,
//         logging: false
//       });
      
//       return canvas.toDataURL('image/png');
//     } catch (error) {
//       console.error('Error generating image:', error);
//       showSnackbar(t('image_generation_error'), 'error');
//       return null;
//     } finally {
//       setGeneratingImage(false);
//     }
//   };

//   // Direct share functionality - opens native share dialog
//   const handleShare = async () => {
//     try {
//       setGeneratingImage(true);
//       showSnackbar('Generating result card...', 'info');
      
//       const imageDataUrl = await generateResultImage();
//       if (!imageDataUrl) {
//         showSnackbar('Failed to generate result card', 'error');
//         return;
//       }

//       // Convert data URL to blob
//       const response = await fetch(imageDataUrl);
//       const blob = await response.blob();
      
//       const percentage = Math.round((score / quiz.length) * 100);
//       const fileName = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
//       const file = new File([blob], fileName, { type: 'image/png' });
      
//       const shareText = `🎯 I scored ${score}/${quiz.length} (${percentage}%) in Level ${currentLevel} Quiz! 🚀`;
      
//       // Use native Web Share API
//       if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
//         try {
//           await navigator.share({
//             title: `Quiz Result - Level ${currentLevel}`,
//             text: shareText,
//             files: [file]
//           });
//           showSnackbar(t('result_shared'), 'success');
//           return;
//         } catch (err) {
//           console.warn('Native share failed:', err);
//           // Fallback to download if native share fails
//           downloadImage(imageDataUrl);
//           showSnackbar('Image downloaded. You can now share it manually!', 'info');
//         }
//       } else {
//         // Fallback for browsers that don't support file sharing
//         downloadImage(imageDataUrl);
//         showSnackbar('Native sharing not supported. Image downloaded. You can now share it manually!', 'info');
//       }
      
//     } catch (error) {
//       console.error('Error sharing result:', error);
//       showSnackbar(t('share_error'), 'error');
//     } finally {
//       setGeneratingImage(false);
//     }
//   };

//   // Download image functionality
//   const downloadImage = async (imageDataUrl = null) => {
//     try {
//       const dataUrl = imageDataUrl || await generateResultImage();
//       if (!dataUrl) return;

//       const link = document.createElement('a');
//       link.download = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
//       link.href = dataUrl;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       showSnackbar(t('result_downloaded'), 'success');
//     } catch (error) {
//       console.error('Error downloading image:', error);
//       showSnackbar(t('download_error'), 'error');
//     }
//   };

//   // Download text report functionality
//   const downloadTextReport = () => {
//     const percentage = Math.round((score / quiz.length) * 100);
//     const isPerfectScore = score === quiz.length;
    
//     let content = `QUIZ RESULT REPORT\n`;
//     content += `==================\n\n`;
//     content += `Level: ${currentLevel}\n`;
//     content += `Date: ${new Date().toLocaleDateString()}\n`;
//     content += `Time: ${new Date().toLocaleTimeString()}\n\n`;
//     content += `📊 PERFORMANCE SUMMARY\n`;
//     content += `-------------------\n`;
//     content += `Score: ${score}/${quiz.length}\n`;
//     content += `Percentage: ${percentage}%\n`;
//     content += `Status: ${passed ? 'PASSED' : 'FAILED'}\n`;
//     content += `Total Reward Points: ${rewardPoints}\n\n`;
    
//     if (passed) {
//       content += `🪙 POINTS BREAKDOWN\n`;
//       content += `-----------------\n`;
//       content += `Correct Answers: ${score} × 1 point = ${contextEarnedPoints.basePoints} points\n`;
//       if (contextEarnedPoints.bonusPoints > 0) {
//         content += `Above 80% Bonus: +${contextEarnedPoints.bonusPoints} points\n`;
//       }
//       content += `Total Earned: ${contextEarnedPoints.totalPoints} points\n\n`;
//     }
    
//     content += `📝 QUESTION REVIEW\n`;
//     content += `-----------------\n\n`;
    
//     quiz.forEach((q, i) => {
//       const isCorrect = userAnswers[i] === q?.answer;
//       const wasHintUsed = hintsUsed[i];
//       const explanation = explanations[i]?.explanation || 'Explanation not available';
      
//       content += `Q${i + 1}: ${q?.question || 'Question not available'}\n`;
//       content += `Your Answer: ${userAnswers[i] || 'Not answered'} ${isCorrect ? '✓' : '✗'}\n`;
//       content += `Correct Answer: ${q?.answer || 'Not available'}\n`;
//       content += `Status: ${isCorrect ? 'CORRECT' : 'INCORRECT'}\n`;
//       content += `Explanation: ${explanation}\n`;
//       if (wasHintUsed) {
//         content += `Hint Used: Yes\n`;
//         if (q?.hint) {
//           content += `Hint: ${q.hint}\n`;
//         }
//       }
//       content += `\n`;
//     });
    
//     content += `\nKeep learning and improving! 🚀`;
    
//     // Create and download file
//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `quiz_result_level_${currentLevel}_${new Date().getTime()}.txt`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
    
//     showSnackbar(t('report_downloaded'), 'success');
//   };

//   // Hidden result component for image generation - ONLY the result card
//   const ResultImageComponent = () => (
//     <Box
//       ref={resultRef}
//       sx={{
//         position: 'absolute',
//         left: '-9999px',
//         top: '-9999px',
//         width: '400px',
//         minHeight: '300px',
//         p: 4,
//         background: passed ?
//           (score === quiz.length ? 
//             'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 
//             'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
//           'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
//         color: 'white',
//         borderRadius: 3,
//         textAlign: 'center',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       {/* Main Title */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: '2rem', mb: 2 }}>
//         🎯 Quiz Result
//       </Typography>
      
//       {/* Level and Status */}
//       <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.5rem', mb: 3 }}>
//         Level {currentLevel} {passed ? 'Completed' : 'Failed'}
//       </Typography>

//       {/* Perfect Score Badge */}
//       {passed && score === quiz.length && (
//         <Typography variant="h6" gutterBottom sx={{ fontSize: '1.2rem', mb: 2, color: '#FFD700' }}>
//           🏆 Perfect Score!
//         </Typography>
//       )}

//       {/* Score and Percentage */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, my: 3, width: '100%' }}>
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
//             {score}/{quiz.length}
//           </Typography>
//           <Typography variant="h6" sx={{ fontSize: '1rem' }}>Score</Typography>
//         </Box>
        
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
//             {Math.round((score / quiz.length) * 100)}%
//           </Typography>
//           <Typography variant="h6" sx={{ fontSize: '1rem' }}>Percentage</Typography>
//         </Box>
//       </Box>

//       {/* Reward Points Section */}
//       <Box sx={{ 
//         background: 'rgba(255,255,255,0.2)', 
//         p: 2, 
//         borderRadius: 2, 
//         my: 2, 
//         width: '100%',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', mb: 2 }}>
//           ⭐ Reward Points: {rewardPoints}
//         </Typography>
        
//         {passed && (
//           <Box sx={{ textAlign: 'left', pl: 1 }}>
//             <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
//               ✅ Correct Answers: {score} × 1 = {contextEarnedPoints.basePoints} points
//             </Typography>
//             {contextEarnedPoints.bonusPoints > 0 && (
//               <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
//                 🎁 Bonus Points: +{contextEarnedPoints.bonusPoints} points
//               </Typography>
//             )}
//             <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '1rem' }}>
//               💰 Total Earned: {contextEarnedPoints.totalPoints} points
//             </Typography>
//           </Box>
//         )}
//       </Box>

//       {/* Generated Date */}
//       <Typography variant="body2" sx={{ mt: 2, opacity: 0.9, fontSize: '0.8rem' }}>
//         Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
//       </Typography>
//     </Box>
//   );

//   // Top-right reward points and action buttons display
//   const RewardPointsDisplay = () => (
//     <Box sx={{ position: 'absolute', top: 30, right: 100, display: 'flex', alignItems: 'center', gap: 1 }}>
//       <Chip
//         label={`${t('⭐')}: ${rewardPoints}`}
//         color="secondary"
//         sx={{
//           fontWeight: 'bold',
//           px: 2,
//           py: 1,
//           fontSize: '1rem',
//           background: 'linear-gradient(45deg, #D4AF37, #f6bf09ff)',
//           color: 'black',
//           animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
//         }}
//       />
      
//       {isFinished && (
//         <>
//           <IconButton
//             onClick={handleShare}
//             disabled={generatingImage}
//             sx={{
//               background: 'linear-gradient(45deg, #25D366, #128C7E)',
//               color: 'white',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #128C7E, #25D366)',
//                 transform: 'scale(1.1)'
//               },
//               '&:disabled': {
//                 opacity: 0.6
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <Share />
//           </IconButton>
          
//           <IconButton
//             onClick={() => downloadImage()}
//             disabled={generatingImage}
//             sx={{
//               background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
//               color: 'white',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #FF8E53, #FF6B35)',
//                 transform: 'scale(1.1)'
//               },
//               '&:disabled': {
//                 opacity: 0.6
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <Download />
//           </IconButton>
//         </>
//       )}
//     </Box>
//   );

//   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
//     return (
//       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
//         <RewardPointsDisplay />
//         <Fade in={true}>
//           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
//             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
//             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
//             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
//             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
//               {t('retry_quiz')}
//             </Button>
//           </Paper>
//         </Fade>
//       </Container>
//     );
//   }

//   if (isFinished) {
//     const percentage = Math.round((score / quiz.length) * 100);
//     const isPerfectScore = score === quiz.length;
//     const hasBonus = contextEarnedPoints.bonusPoints > 0;

//     return (
//       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
//         <RewardPointsDisplay />
        
//         {/* Hidden result component for image generation - ONLY the result card */}
//         <ResultImageComponent />
        
//         {generatingImage && (
//           <Alert severity="info" sx={{ mb: 2 }}>
//             Generating result card image... Please wait.
//           </Alert>
//         )}

//         <Fade in={true}>
//           <Box>
//             {/* Main Result Card - This is what gets shared as image */}
//             <Paper elevation={4} sx={{
//               p: 4,
//               textAlign: 'center',
//               borderRadius: 3,
//               background: passed ?
//                 (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
//                 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
//               color: 'white',
//               mb: 4
//             }}>
//               <Zoom in={true}>
//                 <Box>
//                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
//                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
//                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
//                   </Box>

//                   {passed && (
//                     <Box sx={{ mt: 2, mb: 2 }}>
//                       <Typography variant="h6" sx={{ mb: 1 }}>
//                         🪙 {t('reward_points')}
//                       </Typography>
//                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
//                         <Chip
//                           label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${contextEarnedPoints.basePoints} ${t('points')}`}
//                           sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
//                         />
//                         {hasBonus && (
//                           <Chip
//                             label={`${t('above_80_percent_bonus')}: +${contextEarnedPoints.bonusPoints} ${t('points')}`}
//                             sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
//                           />
//                         )}
//                         <Chip
//                           label={`${t('total_earned')}: ${contextEarnedPoints.totalPoints} ${t('points')}`}
//                           sx={{ background: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
//                         />
//                       </Box>
//                     </Box>
//                   )}

//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
//                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                   </Box>
                 
//                   <Chip
//                     label={`${t('total_RewardPoints')}: ${rewardPoints}`}
//                     color="secondary"
//                     sx={{
//                       mt: 2,
//                       fontWeight: 'bold',
//                       fontSize: '1.1rem',
//                       background: 'linear-gradient(45deg, #FFD700, #FFA500)',
//                       color: 'black'
//                     }}
//                   />
                 
//                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
//                 </Box>
//               </Zoom>
//             </Paper>

//             {/* Questions and Answers Review Section - This part is NOT shared */}
//             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
//               {t('review_questions_answers')}
//             </Typography>

//             {loadingExplanations && (
//               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
//                 <CircularProgress sx={{ mr: 2 }} />
//                 <Typography variant="h6">
//                   {t('loading_explanations')}
//                 </Typography>
//               </Box>
//             )}

//             <List sx={{ mb: 4 }}>
//               {quiz.map((q, i) => {
//                 const isCorrect = userAnswers[i] === q?.answer;
//                 const wasHintUsed = hintsUsed[i];
//                 const explanation = explanations[i]?.explanation || '';

//                 return (
//                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
//                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
//                       <CardContent sx={{ p: 3 }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
//                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
//                             {q?.question || t('question_not_available')}
//                           </Typography>
//                           {wasHintUsed && (
//                             <Chip
//                               icon={<Lightbulb />}
//                               label="Hint Used"
//                               color="info"
//                               size="small"
//                               variant="outlined"
//                             />
//                           )}
//                         </Box>

//                         <List dense>
//                           {q?.options?.map((opt, j) => {
//                             const isSelected = userAnswers[i] === opt;
//                             const isAnswer = opt === q.answer;
//                             return (
//                               <ListItem key={j} sx={{
//                                 background: isAnswer
//                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
//                                   : isSelected && !isAnswer
//                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
//                                   : 'transparent',
//                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
//                                 borderRadius: 1,
//                                 mb: 0.5,
//                                 animation: `${fadeIn} 0.3s ease-out`
//                               }}>
//                                 <ListItemIcon sx={{ minWidth: 40 }}>
//                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
//                                 </ListItemIcon>
//                                 <ListItemText
//                                   primary={`${optionLabels[j]}. ${opt}`}
//                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
//                                 />
//                               </ListItem>
//                             );
//                           })}
//                         </List>

//                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
//                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
//                           {wasHintUsed && (
//                             <Chip
//                               label={`${t('hint_used')}`}
//                               color="info"
//                               variant="outlined"
//                               icon={<Lightbulb />}
//                             />
//                           )}
//                         </Box>

//                         {wasHintUsed && q?.hint && (
//                           <Alert severity="info" sx={{ mt: 2 }}>
//                             <strong>💡 {t('hint')}:</strong> {q.hint}
//                           </Alert>
//                         )}

//                         {/* Explanation Section - Always Visible */}
//                         {explanation && (
//                           <Box sx={{ mt: 2 }}>
//                             <Typography 
//                               variant="h6" 
//                               component="div" 
//                               sx={{ 
//                                 mb: 1, 
//                                 color: 'primary.main',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1
//                               }}
//                             >
//                                {t('Explanation')}
//                             </Typography>
                            
//                             <Alert 
//                               severity="info" 
//                               sx={{ 
//                                 background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
//                                 border: '1px solid #90caf9',
//                                 borderRadius: 2,
//                                 animation: `${fadeIn} 0.5s ease-out`
//                               }}
//                             >
//                               <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                                 {explanation}
//                               </Typography>
//                             </Alert>
//                           </Box>
//                         )}

//                         {/* Show loading for explanation if still loading */}
//                         {loadingExplanations && !explanation && (
//                           <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <CircularProgress size={20} />
//                             <Typography variant="body2" color="text.secondary">
//                               {t('loading_explanation')}
//                             </Typography>
//                           </Box>
//                         )}
//                       </CardContent>
//                     </Card>
//                   </Zoom>
//                 );
//               })}
//             </List>

//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={() => backToChapters && backToChapters()}
//                 startIcon={<MenuBook />}
//                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
//               >
//                 {t('back_to_subjects')}
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={retryQuiz}
//                 startIcon={<Replay />}
//                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
//               >
//                 {t('retry_level', { level: currentLevel })}
//               </Button>

//               {passed && (
//                 <Button
//                   variant="contained"
//                   size="large"
//                   onClick={nextLevel}
//                   endIcon={<NavigateNext />}
//                   sx={{
//                     borderRadius: 2,
//                     px: 4,
//                     py: 1.5,
//                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
//                     '&:hover': {
//                       background: 'linear-gradient(45deg, #229954, #27ae60)',
//                       animation: `${pulse} 0.5s ease-in-out`
//                     }
//                   }}
//                 >
//                   {t('go_to_level', { level: currentLevel + 1 })}
//                 </Button>
//               )}
//             </Box>
//           </Box>
//         </Fade>
//       </Container>
//     );
//   }

//   // Question page rendering
//   const question = quiz[currentQ];
//   if (!question) return null;

//   const progress = ((currentQ + 1) / quiz.length) * 100;

//   return (
//     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
//       <RewardPointsDisplay />
//       <Fade in={true}>
//         <Box>
//           {/* Progress */}
//           <Box sx={{ mb: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//               <Typography variant="body2" color="text.secondary">{t('questions of total 10', { current: currentQ + 1, total: quiz.length })}</Typography>
//               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
//             </Box>
//             <LinearProgress variant="determinate" value={progress} sx={{
//               height: 8,
//               borderRadius: 4,
//               background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)',
//               '& .MuiLinearProgress-bar': {
//                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
//                 borderRadius: 4
//               }
//             }} />
//           </Box>

//           {/* Question Card */}
//           <Card elevation={4} sx={{
//             borderRadius: 3,
//             background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//             mb: 3,
//             animation: `${fadeIn} 0.5s ease-out`
//           }}>
//             <CardContent sx={{ p: 4 }}>
//               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
//                 {currentQ + 1}. {question.question}
//               </Typography>
             
//               {/* Hint Section */}
//               <Box sx={{ mt: 2 }}>
//                 {!isHintUsed ? (
//                   <Box>
//                     <Button
//                       variant="outlined"
//                       startIcon={<Lightbulb />}
//                       onClick={handleHint}
//                       disabled={rewardPoints < 5 || loadingHint}
//                       sx={{
//                         mb: 1,
//                         '&:disabled': {
//                           opacity: 0.6,
//                           color: 'text.disabled'
//                         }
//                       }}
//                     >
//                       {loadingHint ? t('loading_hint') : t('use hint for 5 points')}
//                     </Button>
//                     {rewardPoints < 5 && (
//                       <Typography variant="body2" color="error" sx={{ ml: 1 }}>
//                         {t('not_enough_points_for_hint')}
//                       </Typography>
//                     )}
//                   </Box>
//                 ) : (
//                   <Alert severity="info" sx={{ mt: 2 }}>
//                     <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
//                   </Alert>
//                 )}
//               </Box>
//             </CardContent>
//           </Card>

//           {/* Options */}
//           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
//             {question.options?.map((opt, i) => {
//               const isSelected = selected === opt;
//               return (
//                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
//                   <Button
//                     fullWidth
//                     variant={isSelected ? "contained" : "outlined"}
//                     onClick={() => handleAnswer(opt)}
//                     startIcon={<Box sx={{
//                       width: 30,
//                       height: 30,
//                       borderRadius: '50%',
//                       background: isSelected ? 'white' : 'primary.main',
//                       color: isSelected ? 'primary.main' : 'white',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '0.9rem',
//                       fontWeight: 'bold',
//                       border: isSelected ? '2px solid' : 'none',
//                       borderColor: isSelected ? 'primary.main' : 'transparent'
//                     }}>{optionLabels[i]}</Box>}
//                     sx={{
//                       py: 2.5,
//                       borderRadius: 2,
//                       borderWidth: isSelected ? 0 : 2,
//                       textTransform: 'none',
//                       justifyContent: 'flex-start',
//                       fontSize: '1rem',
//                       fontWeight: 600,
//                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
//                       color: isSelected ? 'white' : 'text.primary',
//                       '&:hover': {
//                         borderWidth: 2,
//                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
//                       },
//                       transition: 'all 0.3s ease',
//                       animation: `${fadeIn} 0.3s ease-out`
//                     }}
//                   >
//                     {opt}
//                   </Button>
//                 </Zoom>
//               );
//             })}
//           </Box>

//           {/* Navigation */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
//             <Button
//               variant="outlined"
//               size="large"
//               onClick={prevQuestion}
//               disabled={currentQ === 0}
//               startIcon={<NavigateBefore />}
//               sx={{
//                 borderRadius: 2,
//                 px: 4,
//                 py: 1.5,
//                 minWidth: '140px',
//                 borderWidth: 2,
//                 '&:hover': { borderWidth: 2 },
//                 '&:disabled': {
//                   opacity: 0.5,
//                   borderColor: 'rgba(0, 0, 0, 0.12)',
//                   color: 'rgba(0, 0, 0, 0.26)'
//                 }
//               }}
//             >
//               {t('previous')}
//             </Button>
//             <Button
//               variant="contained"
//               size="large"
//               onClick={handleNextQuestion}
//               endIcon={<NavigateNext />}
//               sx={{
//                 borderRadius: 2,
//                 px: 6,
//                 py: 1.5,
//                 minWidth: '140px',
//                 fontSize: '1.1rem',
//                 background: 'linear-gradient(45deg, #00b894, #00cec9)',
//                 '&:hover': {
//                   background: 'linear-gradient(45deg, #00a085, #00b894)',
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
//                 }
//               }}
//             >
//               {currentQ + 1 === quiz.length ? t('submit') : t('next')}
//             </Button>
//           </Box>
//         </Box>
//       </Fade>

//       {/* Exit Confirmation Dialog */}
//       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
//         <DialogTitle>{t('exit_quiz')}</DialogTitle>
//         <DialogContent>
//           <Typography>{t('exit_quiz_confirmation')}</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
//           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         message={snackbar.message}
//       />
//     </Container>
//   );
// }

// export default QuizQuestion;














// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   LinearProgress,
//   Chip,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Paper,
//   Container,
//   Alert,
//   Fade,
//   Zoom,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Menu,
//   MenuItem,
//   IconButton,
//   CircularProgress
// } from '@mui/material';
// import {
//   CheckCircle,
//   RadioButtonUnchecked,
//   NavigateNext,
//   NavigateBefore,
//   Replay,
//   EmojiEvents,
//   Psychology,
//   MenuBook,
//   Lightbulb,
//   Share,
//   Download,
//   WhatsApp,
//   Email,
//   Telegram,
//   Instagram
// } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';
// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useQuiz } from './QuizContext';
// import html2canvas from 'html2canvas';
// import { FaSnapchat } from 'react-icons/fa';

// // Animation keyframes
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const slideIn = keyframes`
//   from { opacity: 0; transform: translateX(-20px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// function QuizQuestion({
//   quiz,
//   currentQ,
//   selected,
//   showAnswer,
//   score,
//   isFinished,
//   handleAnswer,
//   nextQuestion,
//   prevQuestion,
//   retryQuiz,
//   nextLevel,
//   backToChapters,
//   currentLevel,
//   userAnswers = [],
//   handlePause,
//   selectedLanguage,
//   selectedSubtopic,
//   classLevel,
//   subject,
//   chapter
// }) {
//   const { t } = useTranslation();
//   const optionLabels = ["A", "B", "C", "D"];
//   const passed = score >= 5;
//   const [exitDialogOpen, setExitDialogOpen] = useState(false);
//   const [hintsUsed, setHintsUsed] = useState({});
//   const [hintContent, setHintContent] = useState({});
//   const [loadingHint, setLoadingHint] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
//   const [shareAnchorEl, setShareAnchorEl] = useState(null);
//   const [generatingImage, setGeneratingImage] = useState(false);
//   const [explanations, setExplanations] = useState([]);
//   const [loadingExplanations, setLoadingExplanations] = useState(false);
//   const resultRef = useRef(null);
  
//   const {
//     rewardPoints,
//     updateRewardPoints,
//     calculateEarnedPoints,
//     earnedPoints: contextEarnedPoints,
//     resetPointsAwarded,
//     hasAwardedPoints
//   } = useQuiz();
  
//   const [showPointsMessage, setShowPointsMessage] = useState(false);
//   // MARK: ADDED - Track if quiz points have been awarded in this session
//   const [quizPointsAwarded, setQuizPointsAwarded] = useState(false);

//   const navigate = useNavigate();

//   // MARK: ADDED - Function to add reward points with history tracking
//   const addRewardPointsWithHistory = (points, reason, source = 'system') => {
//     const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//     const newPoints = currentPoints + points;
    
//     // Update points in localStorage
//     localStorage.setItem('rewardPoints', newPoints.toString());
//     updateRewardPoints(newPoints);
    
//     // Add to history
//     const historyEntry = {
//       id: `reward_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//       points: points,
//       totalPoints: newPoints,
//       reason: reason,
//       source: source,
//       timestamp: new Date().toISOString()
//     };
    
//     const existingHistory = JSON.parse(localStorage.getItem('rewardsHistory') || '[]');
//     const updatedHistory = [historyEntry, ...existingHistory];
//     localStorage.setItem('rewardsHistory', JSON.stringify(updatedHistory));
    
//     // Dispatch event to update other components
//     window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
//       detail: { rewardPoints: newPoints } 
//     }));
    
//     // Also dispatch storage event for cross-tab synchronization
//     window.dispatchEvent(new StorageEvent('storage', {
//       key: 'rewardPoints',
//       newValue: newPoints.toString(),
//       oldValue: currentPoints.toString()
//     }));
    
//     return historyEntry;
//   };

//   // Show snackbar notification
//   const showSnackbar = (message, severity = 'info') => {
//     setSnackbar({ open: true, message, severity });
//   };

//   // Handle hint usage for current question
//   const handleHint = async () => {
//     if (rewardPoints < 5) {
//       showSnackbar(t('not_enough_points'), 'warning');
//       return;
//     }

//     const currentQuestion = quiz[currentQ];
//     if (!currentQuestion) return;

//     // If hint is already used for this question, just show it
//     if (hintsUsed[currentQ]) {
//       return;
//     }

//     setLoadingHint(true);
//     try {
//       // Mark hint as used for this question
//       setHintsUsed(prev => ({
//         ...prev,
//         [currentQ]: true
//       }));

//       // Store the hint content
//       if (currentQuestion.hint) {
//         setHintContent(prev => ({
//           ...prev,
//           [currentQ]: currentQuestion.hint
//         }));
//       }

//       // MARK: UPDATED - Use the centralized function to deduct points with history
//       addRewardPointsWithHistory(-5, "Hint used in quiz", 'quiz_hint');
     
//       showSnackbar(t('hint_unlocked'), 'success');
     
//     } catch (error) {
//       console.error('Error using hint:', error);
//       showSnackbar(t('hint_error'), 'error');
//       // Revert hint usage if there was an error
//       setHintsUsed(prev => {
//         const newHints = { ...prev };
//         delete newHints[currentQ];
//         return newHints;
//       });
//     } finally {
//       setLoadingHint(false);
//     }
//   };

//   // Check if hint is used for current question
//   const isHintUsed = hintsUsed[currentQ] || false;
//   const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;

//   // Reset hints when retrying quiz
//   useEffect(() => {
//     if (isFinished && retryQuiz) {
//       setHintsUsed({});
//       setHintContent({});
//       resetPointsAwarded();
//       setQuizPointsAwarded(false); // MARK: ADDED - Reset quiz points flag on retry
//     }
//   }, [isFinished, retryQuiz, resetPointsAwarded]);

//   // Handle next question
//   const handleNextQuestion = () => {
//     nextQuestion();
//   };

//   // MARK: FIXED - Show points message with proper history tracking
//   useEffect(() => {
//     if (isFinished && passed && !showPointsMessage && !quizPointsAwarded) {
//       const percentage = Math.round((score / quiz.length) * 100);
      
//       // MARK: FIXED - Always add points to history when quiz is completed successfully
//       if (contextEarnedPoints.totalPoints > 0) {
//         console.log(`🎯 Adding quiz points to history: ${contextEarnedPoints.totalPoints}`);
//         addRewardPointsWithHistory(
//           contextEarnedPoints.totalPoints, 
//           `Quiz completed: ${score}/${quiz.length} correct answers (Level ${currentLevel})`, 
//           'quiz_completion'
//         );
//         setQuizPointsAwarded(true); // MARK: ADDED - Mark as awarded
//       }
      
//       // Show success message with points breakdown
//       let pointsMessage = `🎉 ${t('quiz_passed_points', { points: contextEarnedPoints.basePoints })}`;
//       if (contextEarnedPoints.bonusPoints > 0) {
//         pointsMessage += ` + ${t('above_80_bonus_points', { points: contextEarnedPoints.bonusPoints })}`;
//       }
//       pointsMessage += ` = ${contextEarnedPoints.totalPoints} ${t('total_points')}!`;
      
//       showSnackbar(pointsMessage, 'success');
//       setShowPointsMessage(true);
//     }
//   }, [isFinished, passed, score, quiz.length, contextEarnedPoints, t, showPointsMessage, currentLevel, quizPointsAwarded]);

//   // Fetch explanations when quiz is finished
//   useEffect(() => {
//     if (isFinished && quiz.length > 0 && !loadingExplanations && explanations.length === 0) {
//       fetchExplanations();
//     }
//   }, [isFinished, quiz, loadingExplanations, explanations.length]);

//   // Fetch explanations from API
//   const fetchExplanations = async () => {
//     setLoadingExplanations(true);
//     try {
//       // Prepare questions data for explanation API
//       const questionsData = quiz.map((q, index) => ({
//         question: q.question,
//         correct_answer: q.answer,
//         user_answer: userAnswers[index] || '',
//         options: q.options || []
//       }));

//       const response = await fetch('http://localhost:8000/generate-explanations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           questions: questionsData,
//           class_level: classLevel,
//           subject: subject,
//           chapter: chapter
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch explanations');
//       }

//       const data = await response.json();
      
//       if (data.success && data.explanations) {
//         setExplanations(data.explanations);
//         showSnackbar(t('explanations_loaded'), 'success');
//       } else {
//         throw new Error('No explanations received');
//       }
//     } catch (error) {
//       console.error('Error fetching explanations:', error);
//       showSnackbar(t('explanations_error'), 'error');
//       // Create fallback explanations
//       const fallbackExplanations = quiz.map((q, index) => ({
//         question_index: index,
//         question: q.question,
//         correct_answer: q.answer,
//         user_answer: userAnswers[index] || '',
//         explanation: t('explanation_not_available'),
//         is_correct: userAnswers[index] === q.answer
//       }));
//       setExplanations(fallbackExplanations);
//     } finally {
//       setLoadingExplanations(false);
//     }
//   };

//   // MARK: UPDATED - Sync reward points from localStorage and other components
//   useEffect(() => {
//     const savedPoints = parseInt(localStorage.getItem('rewardPoints')) || 0;
//     if (savedPoints !== rewardPoints) {
//       console.log(`Syncing points from localStorage: ${savedPoints}`);
//       updateRewardPoints(savedPoints);
//     }

//     // Listen for reward points updates from other components
//     const handleRewardPointsUpdate = (event) => {
//       if (event.detail && event.detail.rewardPoints !== undefined) {
//         console.log(`Received points update from event: ${event.detail.rewardPoints}`);
//         updateRewardPoints(event.detail.rewardPoints);
//       }
//     };

//     window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);

//     return () => {
//       window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
//     };
//   }, [updateRewardPoints, rewardPoints]);

//   useEffect(() => {
//     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});

//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
//         e.preventDefault();
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement) {
//         setExitDialogOpen(true);
//         handlePause && handlePause();
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('fullscreenchange', handleFullscreenChange);

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, [handlePause]);

//   const handleExitConfirm = () => {
//     setExitDialogOpen(false);
//     if (backToChapters) backToChapters();
//     else navigate("/chapters");
//   };

//   const handleExitCancel = () => {
//     setExitDialogOpen(false);
//     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
//   };

//   // Generate result image - ONLY the result card
//   const generateResultImage = async () => {
//     if (!resultRef.current) return null;
    
//     setGeneratingImage(true);
//     try {
//       const canvas = await html2canvas(resultRef.current, {
//         scale: 2,
//         backgroundColor: passed ?
//           (score === quiz.length ? '#27ae60' : '#6c5ce7') :
//           '#e74c3c',
//         useCORS: true,
//         allowTaint: true,
//         logging: false
//       });
      
//       return canvas.toDataURL('image/png');
//     } catch (error) {
//       console.error('Error generating image:', error);
//       showSnackbar(t('image_generation_error'), 'error');
//       return null;
//     } finally {
//       setGeneratingImage(false);
//     }
//   };

//   // Direct share functionality - opens native share dialog
//   const handleShare = async () => {
//     try {
//       setGeneratingImage(true);
//       showSnackbar('Generating result card...', 'info');
      
//       const imageDataUrl = await generateResultImage();
//       if (!imageDataUrl) {
//         showSnackbar('Failed to generate result card', 'error');
//         return;
//       }

//       // Convert data URL to blob
//       const response = await fetch(imageDataUrl);
//       const blob = await response.blob();
      
//       const percentage = Math.round((score / quiz.length) * 100);
//       const fileName = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
//       const file = new File([blob], fileName, { type: 'image/png' });
      
//       const shareText = `🎯 I scored ${score}/${quiz.length} (${percentage}%) in Level ${currentLevel} Quiz! 🚀`;
      
//       // Use native Web Share API
//       if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
//         try {
//           await navigator.share({
//             title: `Quiz Result - Level ${currentLevel}`,
//             text: shareText,
//             files: [file]
//           });
//           showSnackbar(t('result_shared'), 'success');
//           return;
//         } catch (err) {
//           console.warn('Native share failed:', err);
//           // Fallback to download if native share fails
//           downloadImage(imageDataUrl);
//           showSnackbar('Image downloaded. You can now share it manually!', 'info');
//         }
//       } else {
//         // Fallback for browsers that don't support file sharing
//         downloadImage(imageDataUrl);
//         showSnackbar('Native sharing not supported. Image downloaded. You can now share it manually!', 'info');
//       }
      
//     } catch (error) {
//       console.error('Error sharing result:', error);
//       showSnackbar(t('share_error'), 'error');
//     } finally {
//       setGeneratingImage(false);
//     }
//   };

//   // Download image functionality
//   const downloadImage = async (imageDataUrl = null) => {
//     try {
//       const dataUrl = imageDataUrl || await generateResultImage();
//       if (!dataUrl) return;

//       const link = document.createElement('a');
//       link.download = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
//       link.href = dataUrl;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       showSnackbar(t('result_downloaded'), 'success');
//     } catch (error) {
//       console.error('Error downloading image:', error);
//       showSnackbar(t('download_error'), 'error');
//     }
//   };

//   // Download text report functionality
//   const downloadTextReport = () => {
//     const percentage = Math.round((score / quiz.length) * 100);
//     const isPerfectScore = score === quiz.length;
    
//     let content = `QUIZ RESULT REPORT\n`;
//     content += `==================\n\n`;
//     content += `Level: ${currentLevel}\n`;
//     content += `Date: ${new Date().toLocaleDateString()}\n`;
//     content += `Time: ${new Date().toLocaleTimeString()}\n\n`;
//     content += `📊 PERFORMANCE SUMMARY\n`;
//     content += `-------------------\n`;
//     content += `Score: ${score}/${quiz.length}\n`;
//     content += `Percentage: ${percentage}%\n`;
//     content += `Status: ${passed ? 'PASSED' : 'FAILED'}\n`;
//     content += `Total Reward Points: ${rewardPoints}\n\n`;
    
//     if (passed) {
//       content += `🪙 POINTS BREAKDOWN\n`;
//       content += `-----------------\n`;
//       content += `Correct Answers: ${score} × 1 point = ${contextEarnedPoints.basePoints} points\n`;
//       if (contextEarnedPoints.bonusPoints > 0) {
//         content += `Above 80% Bonus: +${contextEarnedPoints.bonusPoints} points\n`;
//       }
//       content += `Total Earned: ${contextEarnedPoints.totalPoints} points\n\n`;
//     }
    
//     content += `📝 QUESTION REVIEW\n`;
//     content += `-----------------\n\n`;
    
//     quiz.forEach((q, i) => {
//       const isCorrect = userAnswers[i] === q?.answer;
//       const wasHintUsed = hintsUsed[i];
//       const explanation = explanations[i]?.explanation || 'Explanation not available';
      
//       content += `Q${i + 1}: ${q?.question || 'Question not available'}\n`;
//       content += `Your Answer: ${userAnswers[i] || 'Not answered'} ${isCorrect ? '✓' : '✗'}\n`;
//       content += `Correct Answer: ${q?.answer || 'Not available'}\n`;
//       content += `Status: ${isCorrect ? 'CORRECT' : 'INCORRECT'}\n`;
//       content += `Explanation: ${explanation}\n`;
//       if (wasHintUsed) {
//         content += `Hint Used: Yes\n`;
//         if (q?.hint) {
//           content += `Hint: ${q.hint}\n`;
//         }
//       }
//       content += `\n`;
//     });
    
//     content += `\nKeep learning and improving! 🚀`;
    
//     // Create and download file
//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `quiz_result_level_${currentLevel}_${new Date().getTime()}.txt`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
    
//     showSnackbar(t('report_downloaded'), 'success');
//   };

//   // Hidden result component for image generation - ONLY the result card
//   const ResultImageComponent = () => (
//     <Box
//       ref={resultRef}
//       sx={{
//         position: 'absolute',
//         left: '-9999px',
//         top: '-9999px',
//         width: '400px',
//         minHeight: '300px',
//         p: 4,
//         background: passed ?
//           (score === quiz.length ? 
//             'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 
//             'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
//           'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
//         color: 'white',
//         borderRadius: 3,
//         textAlign: 'center',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       {/* Main Title */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: '2rem', mb: 2 }}>
//         🎯 Quiz Result
//       </Typography>
      
//       {/* Level and Status */}
//       <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.5rem', mb: 3 }}>
//         Level {currentLevel} {passed ? 'Completed' : 'Failed'}
//       </Typography>

//       {/* Perfect Score Badge */}
//       {passed && score === quiz.length && (
//         <Typography variant="h6" gutterBottom sx={{ fontSize: '1.2rem', mb: 2, color: '#FFD700' }}>
//           🏆 Perfect Score!
//         </Typography>
//       )}

//       {/* Score and Percentage */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, my: 3, width: '100%' }}>
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
//             {score}/{quiz.length}
//           </Typography>
//           <Typography variant="h6" sx={{ fontSize: '1rem' }}>Score</Typography>
//         </Box>
        
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
//             {Math.round((score / quiz.length) * 100)}%
//           </Typography>
//           <Typography variant="h6" sx={{ fontSize: '1rem' }}>Percentage</Typography>
//         </Box>
//       </Box>

//       {/* Reward Points Section */}
//       <Box sx={{ 
//         background: 'rgba(255,255,255,0.2)', 
//         p: 2, 
//         borderRadius: 2, 
//         my: 2, 
//         width: '100%',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', mb: 2 }}>
//           ⭐ Reward Points: {rewardPoints}
//         </Typography>
        
//         {passed && (
//           <Box sx={{ textAlign: 'left', pl: 1 }}>
//             <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
//               ✅ Correct Answers: {score} × 1 = {contextEarnedPoints.basePoints} points
//             </Typography>
//             {contextEarnedPoints.bonusPoints > 0 && (
//               <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
//                 🎁 Bonus Points: +${contextEarnedPoints.bonusPoints} points
//               </Typography>
//             )}
//             <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '1rem' }}>
//               💰 Total Earned: {contextEarnedPoints.totalPoints} points
//             </Typography>
//           </Box>
//         )}
//       </Box>

//       {/* Generated Date */}
//       <Typography variant="body2" sx={{ mt: 2, opacity: 0.9, fontSize: '0.8rem' }}>
//         Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
//       </Typography>
//     </Box>
//   );

//   // Top-right reward points and action buttons display
//   const RewardPointsDisplay = () => (
//     <Box sx={{ position: 'absolute', top: 30, right: 100, display: 'flex', alignItems: 'center', gap: 1 }}>
//       <Chip
//         label={`${t('⭐')}: ${rewardPoints}`}
//         color="secondary"
//         sx={{
//           fontWeight: 'bold',
//           px: 2,
//           py: 1,
//           fontSize: '1rem',
//           background: 'linear-gradient(45deg, #D4AF37, #f6bf09ff)',
//           color: 'black',
//           animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
//         }}
//       />
      
//       {isFinished && (
//         <>
//           <IconButton
//             onClick={handleShare}
//             disabled={generatingImage}
//             sx={{
//               background: 'linear-gradient(45deg, #25D366, #128C7E)',
//               color: 'white',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #128C7E, #25D366)',
//                 transform: 'scale(1.1)'
//               },
//               '&:disabled': {
//                 opacity: 0.6
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <Share />
//           </IconButton>
          
//           <IconButton
//             onClick={() => downloadImage()}
//             disabled={generatingImage}
//             sx={{
//               background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
//               color: 'white',
//               '&:hover': {
//                 background: 'linear-gradient(45deg, #FF8E53, #FF6B35)',
//                 transform: 'scale(1.1)'
//               },
//               '&:disabled': {
//                 opacity: 0.6
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <Download />
//           </IconButton>
//         </>
//       )}
//     </Box>
//   );

//   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
//     return (
//       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
//         <RewardPointsDisplay />
//         <Fade in={true}>
//           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
//             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
//             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
//             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
//             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
//               {t('retry_quiz')}
//             </Button>
//           </Paper>
//         </Fade>
//       </Container>
//     );
//   }

//   if (isFinished) {
//     const percentage = Math.round((score / quiz.length) * 100);
//     const isPerfectScore = score === quiz.length;
//     const hasBonus = contextEarnedPoints.bonusPoints > 0;

//     return (
//       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
//         <RewardPointsDisplay />
        
//         {/* Hidden result component for image generation - ONLY the result card */}
//         <ResultImageComponent />
        
//         {generatingImage && (
//           <Alert severity="info" sx={{ mb: 2 }}>
//             Generating result card image... Please wait.
//           </Alert>
//         )}

//         <Fade in={true}>
//           <Box>
//             {/* Main Result Card - This is what gets shared as image */}
//             <Paper elevation={4} sx={{
//               p: 4,
//               textAlign: 'center',
//               borderRadius: 3,
//               background: passed ?
//                 (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
//                 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
//               color: 'white',
//               mb: 4
//             }}>
//               <Zoom in={true}>
//                 <Box>
//                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
//                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
//                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
//                   </Box>

//                   {passed && (
//                     <Box sx={{ mt: 2, mb: 2 }}>
//                       <Typography variant="h6" sx={{ mb: 1 }}>
//                         🪙 {t('reward_points')}
//                       </Typography>
//                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
//                         <Chip
//                           label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${contextEarnedPoints.basePoints} ${t('points')}`}
//                           sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
//                         />
//                         {hasBonus && (
//                           <Chip
//                             label={`${t('above_80_percent_bonus')}: +${contextEarnedPoints.bonusPoints} ${t('points')}`}
//                             sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
//                           />
//                         )}
//                         <Chip
//                           label={`${t('total_earned')}: ${contextEarnedPoints.totalPoints} ${t('points')}`}
//                           sx={{ background: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
//                         />
//                       </Box>
//                     </Box>
//                   )}

//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
//                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
//                   </Box>
                 
//                   <Chip
//                     label={`${t('total_RewardPoints')}: ${rewardPoints}`}
//                     color="secondary"
//                     sx={{
//                       mt: 2,
//                       fontWeight: 'bold',
//                       fontSize: '1.1rem',
//                       background: 'linear-gradient(45deg, #FFD700, #FFA500)',
//                       color: 'black'
//                     }}
//                   />
                 
//                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
//                 </Box>
//               </Zoom>
//             </Paper>

//             {/* Questions and Answers Review Section - This part is NOT shared */}
//             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
//               {t('review_questions_answers')}
//             </Typography>

//             {loadingExplanations && (
//               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
//                 <CircularProgress sx={{ mr: 2 }} />
//                 <Typography variant="h6">
//                   {t('loading_explanations')}
//                 </Typography>
//               </Box>
//             )}

//             <List sx={{ mb: 4 }}>
//               {quiz.map((q, i) => {
//                 const isCorrect = userAnswers[i] === q?.answer;
//                 const wasHintUsed = hintsUsed[i];
//                 const explanation = explanations[i]?.explanation || '';

//                 return (
//                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
//                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
//                       <CardContent sx={{ p: 3 }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
//                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
//                             {q?.question || t('question_not_available')}
//                           </Typography>
//                           {wasHintUsed && (
//                             <Chip
//                               icon={<Lightbulb />}
//                               label="Hint Used"
//                               color="info"
//                               size="small"
//                               variant="outlined"
//                             />
//                           )}
//                         </Box>

//                         <List dense>
//                           {q?.options?.map((opt, j) => {
//                             const isSelected = userAnswers[i] === opt;
//                             const isAnswer = opt === q.answer;
//                             return (
//                               <ListItem key={j} sx={{
//                                 background: isAnswer
//                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
//                                   : isSelected && !isAnswer
//                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
//                                   : 'transparent',
//                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
//                                 borderRadius: 1,
//                                 mb: 0.5,
//                                 animation: `${fadeIn} 0.3s ease-out`
//                               }}>
//                                 <ListItemIcon sx={{ minWidth: 40 }}>
//                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
//                                 </ListItemIcon>
//                                 <ListItemText
//                                   primary={`${optionLabels[j]}. ${opt}`}
//                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
//                                 />
//                               </ListItem>
//                             );
//                           })}
//                         </List>

//                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
//                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
//                           {wasHintUsed && (
//                             <Chip
//                               label={`${t('hint_used')}`}
//                               color="info"
//                               variant="outlined"
//                               icon={<Lightbulb />}
//                             />
//                           )}
//                         </Box>

//                         {wasHintUsed && q?.hint && (
//                           <Alert severity="info" sx={{ mt: 2 }}>
//                             <strong>💡 {t('hint')}:</strong> {q.hint}
//                           </Alert>
//                         )}

//                         {/* Explanation Section - Always Visible */}
//                         {explanation && (
//                           <Box sx={{ mt: 2 }}>
//                             <Typography 
//                               variant="h6" 
//                               component="div" 
//                               sx={{ 
//                                 mb: 1, 
//                                 color: 'primary.main',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: 1
//                               }}
//                             >
//                                {t('Explanation')}
//                             </Typography>
                            
//                             <Alert 
//                               severity="info" 
//                               sx={{ 
//                                 background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
//                                 border: '1px solid #90caf9',
//                                 borderRadius: 2,
//                                 animation: `${fadeIn} 0.5s ease-out`
//                               }}
//                             >
//                               <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
//                                 {explanation}
//                               </Typography>
//                             </Alert>
//                           </Box>
//                         )}

//                         {/* Show loading for explanation if still loading */}
//                         {loadingExplanations && !explanation && (
//                           <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
//                             <CircularProgress size={20} />
//                             <Typography variant="body2" color="text.secondary">
//                               {t('loading_explanation')}
//                             </Typography>
//                           </Box>
//                         )}
//                       </CardContent>
//                     </Card>
//                   </Zoom>
//                 );
//               })}
//             </List>

//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={() => backToChapters && backToChapters()}
//                 startIcon={<MenuBook />}
//                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
//               >
//                 {t('back_to_subjects')}
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={retryQuiz}
//                 startIcon={<Replay />}
//                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
//               >
//                 {t('retry_level', { level: currentLevel })}
//               </Button>

//               {passed && (
//                 <Button
//                   variant="contained"
//                   size="large"
//                   onClick={nextLevel}
//                   endIcon={<NavigateNext />}
//                   sx={{
//                     borderRadius: 2,
//                     px: 4,
//                     py: 1.5,
//                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
//                     '&:hover': {
//                       background: 'linear-gradient(45deg, #229954, #27ae60)',
//                       animation: `${pulse} 0.5s ease-in-out`
//                     }
//                   }}
//                 >
//                   {t('go_to_level', { level: currentLevel + 1 })}
//                 </Button>
//               )}
//             </Box>
//           </Box>
//         </Fade>
//       </Container>
//     );
//   }

//   // Question page rendering
//   const question = quiz[currentQ];
//   if (!question) return null;

//   const progress = ((currentQ + 1) / quiz.length) * 100;

//   return (
//     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
//       <RewardPointsDisplay />
//       <Fade in={true}>
//         <Box>
//           {/* Progress */}
//           <Box sx={{ mb: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//               <Typography variant="body2" color="text.secondary">{t('questions of total 10', { current: currentQ + 1, total: quiz.length })}</Typography>
//               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
//             </Box>
//             <LinearProgress variant="determinate" value={progress} sx={{
//               height: 8,
//               borderRadius: 4,
//               background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)',
//               '& .MuiLinearProgress-bar': {
//                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
//                 borderRadius: 4
//               }
//             }} />
//           </Box>

//           {/* Question Card */}
//           <Card elevation={4} sx={{
//             borderRadius: 3,
//             background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//             mb: 3,
//             animation: `${fadeIn} 0.5s ease-out`
//           }}>
//             <CardContent sx={{ p: 4 }}>
//               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
//                 {currentQ + 1}. {question.question}
//               </Typography>
             
//               {/* Hint Section */}
//               <Box sx={{ mt: 2 }}>
//                 {!isHintUsed ? (
//                   <Box>
//                     <Button
//                       variant="outlined"
//                       startIcon={<Lightbulb />}
//                       onClick={handleHint}
//                       disabled={rewardPoints < 5 || loadingHint}
//                       sx={{
//                         mb: 1,
//                         '&:disabled': {
//                           opacity: 0.6,
//                           color: 'text.disabled'
//                         }
//                       }}
//                     >
//                       {loadingHint ? t('loading_hint') : t('use hint for 5 points')}
//                     </Button>
//                     {rewardPoints < 5 && (
//                       <Typography variant="body2" color="error" sx={{ ml: 1 }}>
//                         {t('not_enough_points_for_hint')}
//                       </Typography>
//                     )}
//                   </Box>
//                 ) : (
//                   <Alert severity="info" sx={{ mt: 2 }}>
//                     <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
//                   </Alert>
//                 )}
//               </Box>
//             </CardContent>
//           </Card>

//           {/* Options */}
//           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
//             {question.options?.map((opt, i) => {
//               const isSelected = selected === opt;
//               return (
//                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
//                   <Button
//                     fullWidth
//                     variant={isSelected ? "contained" : "outlined"}
//                     onClick={() => handleAnswer(opt)}
//                     startIcon={<Box sx={{
//                       width: 30,
//                       height: 30,
//                       borderRadius: '50%',
//                       background: isSelected ? 'white' : 'primary.main',
//                       color: isSelected ? 'primary.main' : 'white',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '0.9rem',
//                       fontWeight: 'bold',
//                       border: isSelected ? '2px solid' : 'none',
//                       borderColor: isSelected ? 'primary.main' : 'transparent'
//                     }}>{optionLabels[i]}</Box>}
//                     sx={{
//                       py: 2.5,
//                       borderRadius: 2,
//                       borderWidth: isSelected ? 0 : 2,
//                       textTransform: 'none',
//                       justifyContent: 'flex-start',
//                       fontSize: '1rem',
//                       fontWeight: 600,
//                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
//                       color: isSelected ? 'white' : 'text.primary',
//                       '&:hover': {
//                         borderWidth: 2,
//                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
//                       },
//                       transition: 'all 0.3s ease',
//                       animation: `${fadeIn} 0.3s ease-out`
//                     }}
//                   >
//                     {opt}
//                   </Button>
//                 </Zoom>
//               );
//             })}
//           </Box>

//           {/* Navigation */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
//             <Button
//               variant="outlined"
//               size="large"
//               onClick={prevQuestion}
//               disabled={currentQ === 0}
//               startIcon={<NavigateBefore />}
//               sx={{
//                 borderRadius: 2,
//                 px: 4,
//                 py: 1.5,
//                 minWidth: '140px',
//                 borderWidth: 2,
//                 '&:hover': { borderWidth: 2 },
//                 '&:disabled': {
//                   opacity: 0.5,
//                   borderColor: 'rgba(0, 0, 0, 0.12)',
//                   color: 'rgba(0, 0, 0, 0.26)'
//                 }
//               }}
//             >
//               {t('previous')}
//             </Button>
//             <Button
//               variant="contained"
//               size="large"
//               onClick={handleNextQuestion}
//               endIcon={<NavigateNext />}
//               sx={{
//                 borderRadius: 2,
//                 px: 6,
//                 py: 1.5,
//                 minWidth: '140px',
//                 fontSize: '1.1rem',
//                 background: 'linear-gradient(45deg, #00b894, #00cec9)',
//                 '&:hover': {
//                   background: 'linear-gradient(45deg, #00a085, #00b894)',
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
//                 }
//               }}
//             >
//               {currentQ + 1 === quiz.length ? t('submit') : t('next')}
//             </Button>
//           </Box>
//         </Box>
//       </Fade>

//       {/* Exit Confirmation Dialog */}
//       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
//         <DialogTitle>{t('exit_quiz')}</DialogTitle>
//         <DialogContent>
//           <Typography>{t('exit_quiz_confirmation')}</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
//           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         message={snackbar.message}
//       />
//     </Container>
//   );
// }

// export default QuizQuestion;






















import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Container,
  Alert,
  Fade,
  Zoom,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Menu,
  MenuItem,
  IconButton,
  CircularProgress
} from '@mui/material';
import {
  CheckCircle,
  RadioButtonUnchecked,
  NavigateNext,
  NavigateBefore,
  Replay,
  EmojiEvents,
  Psychology,
  MenuBook,
  Lightbulb,
  Share,
  Download,
  WhatsApp,
  Email,
  Telegram,
  Instagram
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuiz } from './QuizContext';
import html2canvas from 'html2canvas';
import { FaSnapchat } from 'react-icons/fa';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

function QuizQuestion({
  quiz,
  currentQ,
  selected,
  showAnswer,
  score,
  isFinished,
  handleAnswer,
  nextQuestion,
  prevQuestion,
  retryQuiz,
  nextLevel,
  backToChapters,
  currentLevel,
  userAnswers = [],
  handlePause,
  selectedLanguage,
  selectedSubtopic,
  classLevel,
  subject,
  chapter
}) {
  const { t } = useTranslation();
  const optionLabels = ["A", "B", "C", "D"];
  const passed = score >= 5;
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [hintsUsed, setHintsUsed] = useState({});
  const [hintContent, setHintContent] = useState({});
  const [loadingHint, setLoadingHint] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [loadingExplanations, setLoadingExplanations] = useState(false);
  const resultRef = useRef(null);
  
  const {
    rewardPoints,
    updateRewardPoints,
    calculateEarnedPoints,
    earnedPoints: contextEarnedPoints,
    resetPointsAwarded,
    hasAwardedPoints
  } = useQuiz();
  
  const [showPointsMessage, setShowPointsMessage] = useState(false);
  // MARK: ADDED - Track if quiz points have been awarded in this session
  const [quizPointsAwarded, setQuizPointsAwarded] = useState(false);

  const navigate = useNavigate();

  // MARK: ADDED - Function to add reward points with history tracking
  const addRewardPointsWithHistory = (points, reason, source = 'system') => {
    const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
    const newPoints = currentPoints + points;
    
    // Update points in localStorage
    localStorage.setItem('rewardPoints', newPoints.toString());
    updateRewardPoints(newPoints);
    
    // Add to history
    const historyEntry = {
      id: `reward_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      points: points,
      totalPoints: newPoints,
      reason: reason,
      source: source,
      timestamp: new Date().toISOString()
    };
    
    const existingHistory = JSON.parse(localStorage.getItem('rewardsHistory') || '[]');
    const updatedHistory = [historyEntry, ...existingHistory];
    localStorage.setItem('rewardsHistory', JSON.stringify(updatedHistory));
    
    // Dispatch event to update other components
    window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
      detail: { rewardPoints: newPoints } 
    }));
    
    // Also dispatch storage event for cross-tab synchronization
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'rewardPoints',
      newValue: newPoints.toString(),
      oldValue: currentPoints.toString()
    }));
    
    return historyEntry;
  };

  // Show snackbar notification
  const showSnackbar = (message, severity = 'info') => {
    setSnackbar({ open: true, message, severity });
  };

  // Handle hint usage for current question
  const handleHint = async () => {
    if (rewardPoints < 5) {
      showSnackbar(t('not_enough_points'), 'warning');
      return;
    }

    const currentQuestion = quiz[currentQ];
    if (!currentQuestion) return;

    // If hint is already used for this question, just show it
    if (hintsUsed[currentQ]) {
      return;
    }

    setLoadingHint(true);
    try {
      // Mark hint as used for this question
      setHintsUsed(prev => ({
        ...prev,
        [currentQ]: true
      }));

      // Store the hint content
      if (currentQuestion.hint) {
        setHintContent(prev => ({
          ...prev,
          [currentQ]: currentQuestion.hint
        }));
      }

      // MARK: UPDATED - Use the centralized function to deduct points with history
      addRewardPointsWithHistory(-5, "Hint used in quiz", 'quiz_hint');
     
      showSnackbar(t('hint_unlocked'), 'success');
     
    } catch (error) {
      console.error('Error using hint:', error);
      showSnackbar(t('hint_error'), 'error');
      // Revert hint usage if there was an error
      setHintsUsed(prev => {
        const newHints = { ...prev };
        delete newHints[currentQ];
        return newHints;
      });
    } finally {
      setLoadingHint(false);
    }
  };

  // Check if hint is used for current question
  const isHintUsed = hintsUsed[currentQ] || false;
  const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;

  // Reset hints when retrying quiz
  useEffect(() => {
    if (isFinished && retryQuiz) {
      setHintsUsed({});
      setHintContent({});
      resetPointsAwarded();
      setQuizPointsAwarded(false); // MARK: ADDED - Reset quiz points flag on retry
    }
  }, [isFinished, retryQuiz, resetPointsAwarded]);

  // Handle next question
  const handleNextQuestion = () => {
    nextQuestion();
  };

  // MARK: FIXED - Show points message with proper history tracking
  useEffect(() => {
    if (isFinished && passed && !showPointsMessage && !quizPointsAwarded) {
      const percentage = Math.round((score / quiz.length) * 100);
      
      // MARK: FIXED - Always add points to history when quiz is completed successfully
      if (contextEarnedPoints.totalPoints > 0) {
        console.log(`🎯 Adding quiz points to history: ${contextEarnedPoints.totalPoints}`);
        addRewardPointsWithHistory(
          contextEarnedPoints.totalPoints, 
          `Quiz completed: ${score}/${quiz.length} correct answers (Level ${currentLevel})`, 
          'quiz_completion'
        );
        setQuizPointsAwarded(true); // MARK: ADDED - Mark as awarded
      }
      
      // Show success message with points breakdown
      let pointsMessage = `🎉 ${t('quiz_passed_points', { points: contextEarnedPoints.basePoints })}`;
      if (contextEarnedPoints.bonusPoints > 0) {
        pointsMessage += ` + ${t('above_80_bonus_points', { points: contextEarnedPoints.bonusPoints })}`;
      }
      pointsMessage += ` = ${contextEarnedPoints.totalPoints} ${t('total_points')}!`;
      
      showSnackbar(pointsMessage, 'success');
      setShowPointsMessage(true);
    }
  }, [isFinished, passed, score, quiz.length, contextEarnedPoints, t, showPointsMessage, currentLevel, quizPointsAwarded]);

  // Fetch explanations when quiz is finished
  useEffect(() => {
    if (isFinished && quiz.length > 0 && !loadingExplanations && explanations.length === 0) {
      fetchExplanations();
    }
  }, [isFinished, quiz, loadingExplanations, explanations.length]);

  // Fetch explanations from API
  const fetchExplanations = async () => {
    setLoadingExplanations(true);
    try {
      // Prepare questions data for explanation API
      const questionsData = quiz.map((q, index) => ({
        question: q.question,
        correct_answer: q.answer,
        user_answer: userAnswers[index] || '',
        options: q.options || []
      }));

      const response = await fetch('http://localhost:8000/generate-explanations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questions: questionsData,
          class_level: classLevel,
          subject: subject,
          chapter: chapter
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch explanations');
      }

      const data = await response.json();
      
      if (data.success && data.explanations) {
        setExplanations(data.explanations);
        showSnackbar(t('explanations_loaded'), 'success');
      } else {
        throw new Error('No explanations received');
      }
    } catch (error) {
      console.error('Error fetching explanations:', error);
      showSnackbar(t('explanations_error'), 'error');
      // Create fallback explanations
      const fallbackExplanations = quiz.map((q, index) => ({
        question_index: index,
        question: q.question,
        correct_answer: q.answer,
        user_answer: userAnswers[index] || '',
        explanation: t('explanation_not_available'),
        is_correct: userAnswers[index] === q.answer
      }));
      setExplanations(fallbackExplanations);
    } finally {
      setLoadingExplanations(false);
    }
  };

  // MARK: UPDATED - Sync reward points from localStorage and other components
  useEffect(() => {
    const savedPoints = parseInt(localStorage.getItem('rewardPoints')) || 0;
    if (savedPoints !== rewardPoints) {
      console.log(`Syncing points from localStorage: ${savedPoints}`);
      updateRewardPoints(savedPoints);
    }

    // Listen for reward points updates from other components
    const handleRewardPointsUpdate = (event) => {
      if (event.detail && event.detail.rewardPoints !== undefined) {
        console.log(`Received points update from event: ${event.detail.rewardPoints}`);
        updateRewardPoints(event.detail.rewardPoints);
      }
    };

    window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);

    return () => {
      window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
    };
  }, [updateRewardPoints, rewardPoints]);

  useEffect(() => {
    if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setExitDialogOpen(true);
        handlePause && handlePause();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
        e.preventDefault();
        setExitDialogOpen(true);
        handlePause && handlePause();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setExitDialogOpen(true);
        handlePause && handlePause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handlePause]);

  const handleExitConfirm = () => {
    setExitDialogOpen(false);
    if (backToChapters) backToChapters();
    else navigate("/chapters");
  };

  const handleExitCancel = () => {
    setExitDialogOpen(false);
    if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
  };

  // Generate result image - ONLY the result card
  const generateResultImage = async () => {
    if (!resultRef.current) return null;
    
    setGeneratingImage(true);
    try {
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        backgroundColor: passed ?
          (score === quiz.length ? '#27ae60' : '#6c5ce7') :
          '#e74c3c',
        useCORS: true,
        allowTaint: true,
        logging: false
      });
      
      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error('Error generating image:', error);
      showSnackbar(t('image_generation_error'), 'error');
      return null;
    } finally {
      setGeneratingImage(false);
    }
  };

  // Updated handleShare for direct image sharing to WhatsApp via Web Share API
  const handleShare = async () => {
    try {
      setGeneratingImage(true);
      showSnackbar('Generating result card...', 'info');
      
      const imageDataUrl = await generateResultImage();
      if (!imageDataUrl) {
        showSnackbar('Failed to generate result card', 'error');
        return;
      }

      // Convert data URL to blob
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      
      const percentage = Math.round((score / quiz.length) * 100);
      const fileName = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
      const file = new File([blob], fileName, { type: 'image/png' });
      
      const shareText = `🎯 I scored ${score}/${quiz.length} (${percentage}%) in Level ${currentLevel} Quiz! 🚀`;
      
      // Use native Web Share API for direct sharing with image
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: `Quiz Result - Level ${currentLevel}`,
            text: shareText,
            files: [file]
          });
          showSnackbar('Result shared successfully! Select WhatsApp to send.', 'success');
          return;
        } catch (err) {
          console.warn('Native share failed:', err);
          // Fallback: Download image and open WhatsApp with text
          const link = document.createElement('a');
          link.download = fileName;
          link.href = imageDataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
          window.open(whatsappUrl, '_blank');
          
          showSnackbar('Image downloaded and WhatsApp opened. Please attach the image manually.', 'info');
        }
      } else {
        // Fallback for browsers that don't support file sharing: Download and open WhatsApp
        const link = document.createElement('a');
        link.download = fileName;
        link.href = imageDataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, '_blank');
        
        showSnackbar('Native sharing not supported. Image downloaded and WhatsApp opened. Please attach the image manually.', 'info');
      }
      
    } catch (error) {
      console.error('Error sharing result:', error);
      showSnackbar(t('share_error'), 'error');
    } finally {
      setGeneratingImage(false);
    }
  };

  // Download image functionality
  const downloadImage = async (imageDataUrl = null) => {
    try {
      const dataUrl = imageDataUrl || await generateResultImage();
      if (!dataUrl) return;

      const link = document.createElement('a');
      link.download = `quiz-result-level-${currentLevel}-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showSnackbar(t('result_downloaded'), 'success');
    } catch (error) {
      console.error('Error downloading image:', error);
      showSnackbar(t('download_error'), 'error');
    }
  };

  // Download text report functionality
  const downloadTextReport = () => {
    const percentage = Math.round((score / quiz.length) * 100);
    const isPerfectScore = score === quiz.length;
    
    let content = `QUIZ RESULT REPORT\n`;
    content += `==================\n\n`;
    content += `Level: ${currentLevel}\n`;
    content += `Date: ${new Date().toLocaleDateString()}\n`;
    content += `Time: ${new Date().toLocaleTimeString()}\n\n`;
    content += `📊 PERFORMANCE SUMMARY\n`;
    content += `-------------------\n`;
    content += `Score: ${score}/${quiz.length}\n`;
    content += `Percentage: ${percentage}%\n`;
    content += `Status: ${passed ? 'PASSED' : 'FAILED'}\n`;
    content += `Total Reward Points: ${rewardPoints}\n\n`;
    
    if (passed) {
      content += `🪙 POINTS BREAKDOWN\n`;
      content += `-----------------\n`;
      content += `Correct Answers: ${score} × 1 point = ${contextEarnedPoints.basePoints} points\n`;
      if (contextEarnedPoints.bonusPoints > 0) {
        content += `Above 80% Bonus: +${contextEarnedPoints.bonusPoints} points\n`;
      }
      content += `Total Earned: ${contextEarnedPoints.totalPoints} points\n\n`;
    }
    
    content += `📝 QUESTION REVIEW\n`;
    content += `-----------------\n\n`;
    
    quiz.forEach((q, i) => {
      const isCorrect = userAnswers[i] === q?.answer;
      const wasHintUsed = hintsUsed[i];
      const explanation = explanations[i]?.explanation || 'Explanation not available';
      
      content += `Q${i + 1}: ${q?.question || 'Question not available'}\n`;
      content += `Your Answer: ${userAnswers[i] || 'Not answered'} ${isCorrect ? '✓' : '✗'}\n`;
      content += `Correct Answer: ${q?.answer || 'Not available'}\n`;
      content += `Status: ${isCorrect ? 'CORRECT' : 'INCORRECT'}\n`;
      content += `Explanation: ${explanation}\n`;
      if (wasHintUsed) {
        content += `Hint Used: Yes\n`;
        if (q?.hint) {
          content += `Hint: ${q.hint}\n`;
        }
      }
      content += `\n`;
    });
    
    content += `\nKeep learning and improving! 🚀`;
    
    // Create and download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz_result_level_${currentLevel}_${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showSnackbar(t('report_downloaded'), 'success');
  };

  // Hidden result component for image generation - ONLY the result card
  const ResultImageComponent = () => (
    <Box
      ref={resultRef}
      sx={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '400px',
        minHeight: '300px',
        p: 4,
        background: passed ?
          (score === quiz.length ? 
            'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 
            'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
          'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
        color: 'white',
        borderRadius: 3,
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* Main Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: '2rem', mb: 2 }}>
        🎯 Quiz Result
      </Typography>
      
      {/* Level and Status */}
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: '1.5rem', mb: 3 }}>
        Level {currentLevel} {passed ? 'Completed' : 'Failed'}
      </Typography>

      {/* Perfect Score Badge */}
      {passed && score === quiz.length && (
        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.2rem', mb: 2, color: '#FFD700' }}>
          🏆 Perfect Score!
        </Typography>
      )}

      {/* Score and Percentage */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, my: 3, width: '100%' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
            {score}/{quiz.length}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>Score</Typography>
        </Box>
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
            {Math.round((score / quiz.length) * 100)}%
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>Percentage</Typography>
        </Box>
      </Box>

      {/* Reward Points Section */}
      <Box sx={{ 
        background: 'rgba(255,255,255,0.2)', 
        p: 2, 
        borderRadius: 2, 
        my: 2, 
        width: '100%',
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', mb: 2 }}>
          ⭐ Reward Points: {rewardPoints}
        </Typography>
        
        {passed && (
          <Box sx={{ textAlign: 'left', pl: 1 }}>
            <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
              ✅ Correct Answers: {score} × 1 = {contextEarnedPoints.basePoints} points
            </Typography>
            {contextEarnedPoints.bonusPoints > 0 && (
              <Typography variant="body1" sx={{ fontSize: '0.9rem', mb: 0.5 }}>
                🎁 Bonus Points: +${contextEarnedPoints.bonusPoints} points
              </Typography>
            )}
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '1rem' }}>
              💰 Total Earned: {contextEarnedPoints.totalPoints} points
            </Typography>
          </Box>
        )}
      </Box>

      {/* Generated Date */}
      <Typography variant="body2" sx={{ mt: 2, opacity: 0.9, fontSize: '0.8rem' }}>
        Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
      </Typography>
    </Box>
  );

  // Top-right reward points and action buttons display
  const RewardPointsDisplay = () => (
    <Box sx={{ position: 'absolute', top: 30, right: 100, display: 'flex', alignItems: 'center', gap: 1 }}>
      <Chip
        label={`${t('⭐')}: ${rewardPoints}`}
        color="secondary"
        sx={{
          fontWeight: 'bold',
          px: 2,
          py: 1,
          fontSize: '1rem',
          background: 'linear-gradient(45deg, #D4AF37, #f6bf09ff)',
          color: 'black',
          animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
        }}
      />
      
      {isFinished && (
        <>
          <IconButton
            onClick={handleShare}
            disabled={generatingImage}
            sx={{
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #128C7E, #25D366)',
                transform: 'scale(1.1)'
              },
              '&:disabled': {
                opacity: 0.6
              },
              transition: 'all 0.3s ease'
            }}
          >
            <WhatsApp />
          </IconButton>
          
          <IconButton
            onClick={() => downloadImage()}
            disabled={generatingImage}
            sx={{
              background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #FF8E53, #FF6B35)',
                transform: 'scale(1.1)'
              },
              '&:disabled': {
                opacity: 0.6
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Download />
          </IconButton>
        </>
      )}
    </Box>
  );

  if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
        <RewardPointsDisplay />
        <Fade in={true}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
            <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
            <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
              {t('retry_quiz')}
            </Button>
          </Paper>
        </Fade>
      </Container>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / quiz.length) * 100);
    const isPerfectScore = score === quiz.length;
    const hasBonus = contextEarnedPoints.bonusPoints > 0;

    return (
      <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
        <RewardPointsDisplay />
        
        {/* Hidden result component for image generation - ONLY the result card */}
        <ResultImageComponent />
        
        {generatingImage && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Generating result card image... Please wait.
          </Alert>
        )}

        <Fade in={true}>
          <Box>
            {/* Main Result Card - This is what gets shared as image */}
            <Paper elevation={4} sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
              background: passed ?
                (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
                'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
              color: 'white',
              mb: 4
            }}>
              <Zoom in={true}>
                <Box>
                  {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
                  <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
                  </Box>

                  {passed && (
                    <Box sx={{ mt: 2, mb: 2 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        🪙 {t('reward_points')}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                        <Chip
                          label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${contextEarnedPoints.basePoints} ${t('points')}`}
                          sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
                        />
                        {hasBonus && (
                          <Chip
                            label={`${t('above_80_percent_bonus')}: +${contextEarnedPoints.bonusPoints} ${t('points')}`}
                            sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
                          />
                        )}
                        <Chip
                          label={`${t('total_earned')}: ${contextEarnedPoints.totalPoints} ${t('points')}`}
                          sx={{ background: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
                        />
                      </Box>
                    </Box>
                  )}

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                    <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
                    <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
                    <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
                  </Box>
                 
                  <Chip
                    label={`${t('total_RewardPoints')}: ${rewardPoints}`}
                    color="secondary"
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      color: 'black'
                    }}
                  />
                 
                  {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
                </Box>
              </Zoom>
            </Paper>

            {/* Questions and Answers Review Section - This part is NOT shared */}
            <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              {t('review_questions_answers')}
            </Typography>

            {loadingExplanations && (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                <CircularProgress sx={{ mr: 2 }} />
                <Typography variant="h6">
                  {t('loading_explanations')}
                </Typography>
              </Box>
            )}

            <List sx={{ mb: 4 }}>
              {quiz.map((q, i) => {
                const isCorrect = userAnswers[i] === q?.answer;
                const wasHintUsed = hintsUsed[i];
                const explanation = explanations[i]?.explanation || '';

                return (
                  <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                    <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
                          <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
                            {q?.question || t('question_not_available')}
                          </Typography>
                          {wasHintUsed && (
                            <Chip
                              icon={<Lightbulb />}
                              label="Hint Used"
                              color="info"
                              size="small"
                              variant="outlined"
                            />
                          )}
                        </Box>

                        <List dense>
                          {q?.options?.map((opt, j) => {
                            const isSelected = userAnswers[i] === opt;
                            const isAnswer = opt === q.answer;
                            return (
                              <ListItem key={j} sx={{
                                background: isAnswer
                                  ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
                                  : isSelected && !isAnswer
                                  ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
                                  : 'transparent',
                                color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
                                borderRadius: 1,
                                mb: 0.5,
                                animation: `${fadeIn} 0.3s ease-out`
                              }}>
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                  {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
                                </ListItemIcon>
                                <ListItemText
                                  primary={`${optionLabels[j]}. ${opt}`}
                                  primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
                                />
                              </ListItem>
                            );
                          })}
                        </List>

                        <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                          <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
                          <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
                          {wasHintUsed && (
                            <Chip
                              label={`${t('hint_used')}`}
                              color="info"
                              variant="outlined"
                              icon={<Lightbulb />}
                            />
                          )}
                        </Box>

                        {wasHintUsed && q?.hint && (
                          <Alert severity="info" sx={{ mt: 2 }}>
                            <strong>💡 {t('hint')}:</strong> {q.hint}
                          </Alert>
                        )}

                        {/* Explanation Section - Always Visible */}
                        {explanation && (
                          <Box sx={{ mt: 2 }}>
                            <Typography 
                              variant="h6" 
                              component="div" 
                              sx={{ 
                                mb: 1, 
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}
                            >
                               {t('Explanation')}
                            </Typography>
                            
                            <Alert 
                              severity="info" 
                              sx={{ 
                                background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
                                border: '1px solid #90caf9',
                                borderRadius: 2,
                                animation: `${fadeIn} 0.5s ease-out`
                              }}
                            >
                              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                {explanation}
                              </Typography>
                            </Alert>
                          </Box>
                        )}

                        {/* Show loading for explanation if still loading */}
                        {loadingExplanations && !explanation && (
                          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CircularProgress size={20} />
                            <Typography variant="body2" color="text.secondary">
                              {t('loading_explanation')}
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Zoom>
                );
              })}
            </List>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => backToChapters && backToChapters()}
                startIcon={<MenuBook />}
                sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                {t('back_to_subjects')}
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={retryQuiz}
                startIcon={<Replay />}
                sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                {t('retry_level', { level: currentLevel })}
              </Button>

              {passed && (
                <Button
                  variant="contained"
                  size="large"
                  onClick={nextLevel}
                  endIcon={<NavigateNext />}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #229954, #27ae60)',
                      animation: `${pulse} 0.5s ease-in-out`
                    }
                  }}
                >
                  {t('go_to_level', { level: currentLevel + 1 })}
                </Button>
              )}
            </Box>
          </Box>
        </Fade>
      </Container>
    );
  }

  // Question page rendering
  const question = quiz[currentQ];
  if (!question) return null;

  const progress = ((currentQ + 1) / quiz.length) * 100;

  return (
    <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
      <RewardPointsDisplay />
      <Fade in={true}>
        <Box>
          {/* Progress */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">{t('questions of total 10', { current: currentQ + 1, total: quiz.length })}</Typography>
              <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
            </Box>
            <LinearProgress variant="determinate" value={progress} sx={{
              height: 8,
              borderRadius: 4,
              background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
                borderRadius: 4
              }
            }} />
          </Box>

          {/* Question Card */}
          <Card elevation={4} sx={{
            borderRadius: 3,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            mb: 3,
            animation: `${fadeIn} 0.5s ease-out`
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
                {currentQ + 1}. {question.question}
              </Typography>
             
              {/* Hint Section */}
              <Box sx={{ mt: 2 }}>
                {!isHintUsed ? (
                  <Box>
                    <Button
                      variant="outlined"
                      startIcon={<Lightbulb />}
                      onClick={handleHint}
                      disabled={rewardPoints < 5 || loadingHint}
                      sx={{
                        mb: 1,
                        '&:disabled': {
                          opacity: 0.6,
                          color: 'text.disabled'
                        }
                      }}
                    >
                      {loadingHint ? t('loading_hint') : t('use hint for 5 points')}
                    </Button>
                    {rewardPoints < 5 && (
                      <Typography variant="body2" color="error" sx={{ ml: 1 }}>
                        {t('not_enough_points_for_hint')}
                      </Typography>
                    )}
                  </Box>
                ) : (
                  <Alert severity="info" sx={{ mt: 2 }}>
                    <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
                  </Alert>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* Options */}
          <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
            {question.options?.map((opt, i) => {
              const isSelected = selected === opt;
              return (
                <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                  <Button
                    fullWidth
                    variant={isSelected ? "contained" : "outlined"}
                    onClick={() => handleAnswer(opt)}
                    startIcon={<Box sx={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: isSelected ? 'white' : 'primary.main',
                      color: isSelected ? 'primary.main' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      border: isSelected ? '2px solid' : 'none',
                      borderColor: isSelected ? 'primary.main' : 'transparent'
                    }}>{optionLabels[i]}</Box>}
                    sx={{
                      py: 2.5,
                      borderRadius: 2,
                      borderWidth: isSelected ? 0 : 2,
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
                      color: isSelected ? 'white' : 'text.primary',
                      '&:hover': {
                        borderWidth: 2,
                        background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
                      },
                      transition: 'all 0.3s ease',
                      animation: `${fadeIn} 0.3s ease-out`
                    }}
                  >
                    {opt}
                  </Button>
                </Zoom>
              );
            })}
          </Box>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={prevQuestion}
              disabled={currentQ === 0}
              startIcon={<NavigateBefore />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                minWidth: '140px',
                borderWidth: 2,
                '&:hover': { borderWidth: 2 },
                '&:disabled': {
                  opacity: 0.5,
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                  color: 'rgba(0, 0, 0, 0.26)'
                }
              }}
            >
              {t('previous')}
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={handleNextQuestion}
              endIcon={<NavigateNext />}
              sx={{
                borderRadius: 2,
                px: 6,
                py: 1.5,
                minWidth: '140px',
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #00b894, #00cec9)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00a085, #00b894)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}
            >
              {currentQ + 1 === quiz.length ? t('submit') : t('next')}
            </Button>
          </Box>
        </Box>
      </Fade>

      {/* Exit Confirmation Dialog */}
      <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
        <DialogTitle>{t('exit_quiz')}</DialogTitle>
        <DialogContent>
          <Typography>{t('exit_quiz_confirmation')}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExitCancel}>{t('cancel')}</Button>
          <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Container>
  );
}

export default QuizQuestion;

