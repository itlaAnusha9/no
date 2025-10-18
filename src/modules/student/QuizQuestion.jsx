//  ////old code
// // import { 
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Typography,
// //   LinearProgress,
// //   Chip,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Paper,
// //   Container,
// //   Alert,
// //   Fade,
// //   Zoom,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions
// // } from '@mui/material';
// // import {
// //   CheckCircle,
// //   RadioButtonUnchecked,
// //   NavigateNext,
// //   NavigateBefore,
// //   Replay,
// //   EmojiEvents,
// //   Psychology,
// //   MenuBook
// // } from '@mui/icons-material';
// // import { keyframes } from '@emotion/react';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';

// // // Animation keyframes
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;

// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;

// // const slideIn = keyframes`
// //   from { opacity: 0; transform: translateX(-20px); }
// //   to { opacity: 1; transform: translateX(0); }
// // `;

// // function QuizQuestion({
// //   quiz,
// //   currentQ,
// //   selected,
// //   showAnswer,
// //   score,
// //   isFinished,
// //   handleAnswer,
// //   nextQuestion,
// //   prevQuestion,
// //   retryQuiz,
// //   nextLevel,
// //   backToChapters,
// //   currentLevel,
// //   userAnswers = [],
// //   handlePause
// // }) {
// //   const { t } = useTranslation();
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const passed = score >= 5;
// //   const [exitDialogOpen, setExitDialogOpen] = useState(false);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (document.fullscreenEnabled) {
// //       document.documentElement.requestFullscreen().catch(() => {});
// //     }

// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleKeyDown = (e) => {
// //       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
// //         e.preventDefault();
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleFullscreenChange = () => {
// //       if (!document.fullscreenElement) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     document.addEventListener('visibilitychange', handleVisibilityChange);
// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('fullscreenchange', handleFullscreenChange);

// //     return () => {
// //       document.removeEventListener('visibilitychange', handleVisibilityChange);
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('fullscreenchange', handleFullscreenChange);
// //     };
// //   }, [handlePause]);

// //   const handleExitConfirm = () => {
// //     setExitDialogOpen(false);
// //     if (backToChapters) {
// //       backToChapters();
// //     } else {
// //       navigate("/chapters");
// //     }
// //   };

// //   const handleExitCancel = () => {
// //     setExitDialogOpen(false);
// //     if (document.fullscreenEnabled) {
// //       document.documentElement.requestFullscreen().catch(() => {});
// //     }
// //   };

// //   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4 }}>
// //         <Fade in={true}>
// //           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
// //             <Typography variant="h4" gutterBottom color="text.primary">
// //               {t('quiz_not_available')}
// //             </Typography>
// //             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// //               {t('quiz_data_issue')}
// //             </Typography>
// //             <Button
// //               variant="contained"
// //               size="large"
// //               onClick={retryQuiz}
// //               startIcon={<Replay />}
// //               sx={{
// //                 borderRadius: 2,
// //                 px: 4,
// //                 py: 1.5,
// //                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)'
// //               }}
// //             >
// //               {t('retry_quiz')}
// //             </Button>
// //           </Paper>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   if (isFinished) {
// //     const percentage = Math.round((score / quiz.length) * 100);
// //     const isPerfectScore = score === quiz.length;

// //     return (
// //       <Container maxWidth="lg" sx={{ py: 4 }}>
// //         <Fade in={true}>
// //           <Box>
// //             <Paper 
// //               elevation={4} 
// //               sx={{ 
// //                 p: 4, 
// //                 textAlign: 'center', 
// //                 borderRadius: 3,
// //                 background: passed 
// //                   ? isPerfectScore 
// //                     ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'
// //                     : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)'
// //                   : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
// //                 color: 'white',
// //                 mb: 4
// //               }}
// //             >
// //               <Zoom in={true}>
// //                 <Box>
// //                   {passed && isPerfectScore && (
// //                     <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
// //                   )}
// //                   <Typography variant="h3" gutterBottom fontWeight="bold">
// //                     {t('level')} {currentLevel} {passed ? t('completed') : t('failed')}
// //                   </Typography>
// //                   <Typography variant="h6" sx={{ mb: 2 }}>
// //                     {passed 
// //                       ? (isPerfectScore ? t('perfect_score') : t('great_job')) 
// //                       : t('minimum score', { score })}
// //                   </Typography>

// //                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
// //                     <Chip 
// //                       label={`${score}/${quiz.length}`} 
// //                       sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} 
// //                     />
// //                     <Chip 
// //                       label={`${percentage}%`} 
// //                       sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} 
// //                     />
// //                     <Chip 
// //                       label={passed ? t('passed') : t('failed')} 
// //                       color={passed ? "success" : "error"}
// //                       sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} 
// //                     />
// //                   </Box>

// //                   {!passed && (
// //                     <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
// //                       {t('score_warning')}
// //                     </Alert>
// //                   )}
// //                 </Box>
// //               </Zoom>
// //             </Paper>

// //             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
// //               {t('Review Questions & Answers')}
// //             </Typography>

// //             <List sx={{ mb: 4 }}>
// //               {quiz.map((q, i) => {
// //                 const isCorrect = userAnswers[i] === q?.answer;
// //                 return (
// //                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
// //                       <CardContent sx={{ p: 3 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
// //                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
// //                             {q?.question || t('question_not_available')}
// //                           </Typography>
// //                         </Box>

// //                         <List dense>
// //                           {q?.options?.map((opt, j) => {
// //                             const isSelected = userAnswers[i] === opt;
// //                             const isAnswer = opt === q.answer;
// //                             return (
// //                               <ListItem key={j} sx={{ 
// //                                 background: isAnswer 
// //                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
// //                                   : isSelected && !isAnswer
// //                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
// //                                   : 'transparent',
// //                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
// //                                 borderRadius: 1,
// //                                 mb: 0.5,
// //                                 animation: `${fadeIn} 0.3s ease-out`
// //                               }}>
// //                                 <ListItemIcon sx={{ minWidth: 40 }}>
// //                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
// //                                 </ListItemIcon>
// //                                 <ListItemText
// //                                   primary={`${optionLabels[j]}. ${opt}`}
// //                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
// //                                 />
// //                               </ListItem>
// //                             );
// //                           })}
// //                         </List>

// //                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
// //                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
// //                         </Box>
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 );
// //               })}
// //             </List>

// //             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={() => backToChapters && backToChapters()}
// //                 startIcon={<MenuBook />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('back_to_subjects')}
// //               </Button>

// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={retryQuiz}
// //                 startIcon={<Replay />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('retry level', { level: currentLevel })}
// //               </Button>

// //               {passed && (
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   onClick={nextLevel}
// //                   endIcon={<NavigateNext />}
// //                   sx={{
// //                     borderRadius: 2,
// //                     px: 4,
// //                     py: 1.5,
// //                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #229954, #27ae60)',
// //                       animation: `${pulse} 0.5s ease-in-out`
// //                     }
// //                   }}
// //                 >
// //                   {t('go_to_level', { level: currentLevel + 1 })}
// //                 </Button>
// //               )}
// //             </Box>
// //           </Box>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   const question = quiz[currentQ];
// //   if (!question) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4 }}>
// //         <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //           <Typography variant="h4" gutterBottom color="error">
// //             {t('question_not_found')}
// //           </Typography>
// //           <Button variant="contained" size="large" onClick={retryQuiz} sx={{ mt: 2, borderRadius: 2, px: 4 }}>
// //             {t('restart_level', { level: currentLevel })}
// //           </Button>
// //         </Paper>
// //       </Container>
// //     );
// //   }

// //   const progress = ((currentQ + 1) / quiz.length) * 100;

// //   return (
// //     <Container maxWidth="md" sx={{ py: 4 }}>
// //       <Fade in={true}>
// //         <Box>
// //           {/* Progress */}
// //           <Box sx={{ mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //               <Typography variant="body2" color="text.secondary">
// //                 {t('question_of_total', { current: currentQ + 1, total: quiz.length })}
// //               </Typography>
// //               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
// //             </Box>
// //             <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4, background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)', '& .MuiLinearProgress-bar': { background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)', borderRadius: 4 }}} />
// //           </Box>

// //           {/* Question Card */}
// //           <Card elevation={4} sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', mb: 3, animation: `${fadeIn} 0.5s ease-out` }}>
// //             <CardContent sx={{ p: 4 }}>
// //               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
// //                 {currentQ + 1}. {question.question}
// //               </Typography>
// //             </CardContent>
// //           </Card>

// //           {/* Options */}
// //           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
// //             {question.options?.map((opt, i) => {
// //               const isSelected = selected === opt;
// //               return (
// //                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                   <Button
// //                     fullWidth
// //                     variant={isSelected ? "contained" : "outlined"}
// //                     onClick={() => handleAnswer(opt)}
// //                     startIcon={
// //                       <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: isSelected ? 'white' : 'primary.main', color: isSelected ? 'primary.main' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', border: isSelected ? '2px solid' : 'none', borderColor: isSelected ? 'primary.main' : 'transparent' }}>
// //                         {optionLabels[i]}
// //                       </Box>
// //                     }
// //                     sx={{
// //                       py: 2.5,
// //                       borderRadius: 2,
// //                       borderWidth: isSelected ? 0 : 2,
// //                       textTransform: 'none',
// //                       justifyContent: 'flex-start',
// //                       fontSize: '1rem',
// //                       fontWeight: 600,
// //                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
// //                       color: isSelected ? 'white' : 'text.primary',
// //                       '&:hover': {
// //                         borderWidth: 2,
// //                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
// //                       },
// //                       transition: 'all 0.3s ease',
// //                       animation: `${fadeIn} 0.3s ease-out`
// //                     }}
// //                   >
// //                     {opt}
// //                   </Button>
// //                 </Zoom>
// //               );
// //             })}
// //           </Box>

// //           {/* Navigation */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
// //             <Button variant="outlined" size="large" onClick={prevQuestion} disabled={currentQ === 0} startIcon={<NavigateBefore />} sx={{ borderRadius: 2, px: 4, py: 1.5, minWidth: '140px', borderWidth: 2, '&:hover': { borderWidth: 2 }, '&:disabled': { opacity: 0.5, borderColor: 'rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.26)' } }}>
// //               {t('previous')}
// //             </Button>
// //             <Button variant="contained" size="large" onClick={nextQuestion} endIcon={<NavigateNext />} sx={{ borderRadius: 2, px: 6, py: 1.5, minWidth: '140px', fontSize: '1.1rem', background: 'linear-gradient(45deg, #00b894, #00cec9)', '&:hover': { background: 'linear-gradient(45deg, #00a085, #00b894)', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(0, 184, 148, 0.3)' }, transition: 'all 0.3s ease', animation: showAnswer ? `${pulse} 2s infinite` : 'none' }}>
// //               {currentQ < quiz.length - 1 ? t('next') : t('finish')}
// //             </Button>
// //           </Box>

// //           {/* Exit Dialog */}
// //           <Dialog open={exitDialogOpen}>
// //             <DialogTitle>{t('exit_test')}</DialogTitle>
// //             <DialogContent>
// //               <Typography>{t('exit_test_warning')}</Typography>
// //             </DialogContent>
// //             <DialogActions>
// //               <Button onClick={handleExitCancel} variant="outlined">{t('cancel')}</Button>
// //               <Button onClick={handleExitConfirm} variant="contained" color="error">{t('exit')}</Button>
// //             </DialogActions>
// //           </Dialog>
// //         </Box>
// //       </Fade>
// //     </Container>
// //   );
// // }

// // export default QuizQuestion;

















//  ////half working
// // import {
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Typography,
// //   LinearProgress,
// //   Chip,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Paper,
// //   Container,
// //   Alert,
// //   Fade,
// //   Zoom,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions
// // } from '@mui/material';
// // import {
// //   CheckCircle,
// //   RadioButtonUnchecked,
// //   NavigateNext,
// //   NavigateBefore,
// //   Replay,
// //   EmojiEvents,
// //   Psychology,
// //   MenuBook,
// //   Lightbulb
// // } from '@mui/icons-material';
// // import { keyframes } from '@emotion/react';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import { useQuiz } from './QuizContext';
 
// // // Animation keyframes
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;
 
// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;
 
// // const slideIn = keyframes`
// //   from { opacity: 0; transform: translateX(-20px); }
// //   to { opacity: 1; transform: translateX(0); }
// // `;
 
// // function QuizQuestion({
// //   quiz,
// //   currentQ,
// //   selected,
// //   showAnswer,
// //   score,
// //   isFinished,
// //   handleAnswer,
// //   nextQuestion,
// //   prevQuestion,
// //   retryQuiz,
// //   nextLevel,
// //   backToChapters,
// //   currentLevel,
// //   userAnswers = [],
// //   handlePause
// // }) {
// //   const { t } = useTranslation();
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const passed = score >= 2;
// //   const [exitDialogOpen, setExitDialogOpen] = useState(false);
// //   const [hintsUsed, setHintsUsed] = useState({}); // Track hints used per question
// //   const { rewardPoints, updateRewardPoints } = useQuiz();
 
// //   const navigate = useNavigate();
 
// //   // Calculate earned points based on score
// //   const calculateEarnedPoints = () => {
// //     if (!passed) return 0;
// //     const percentage = (score / quiz.length) * 100;
   
// //     if (percentage === 100) return 10; // Perfect score
// //     if (percentage >= 80) return 8;    // Excellent
// //     if (percentage >= 60) return 6;    // Good
// //     if (percentage >= 40) return 4;    // Average
// //     return 2; // Just passed
// //   };
 
// //   // Handle hint usage for current question
// //   const handleHint = () => {
// //     if (rewardPoints >= 5) {
// //       // Mark hint as used for this question
// //       setHintsUsed(prev => ({
// //         ...prev,
// //         [currentQ]: true
// //       }));
// //       // Deduct 5 points when hint is used
// //       const newPoints = rewardPoints - 5;
// //       updateRewardPoints && updateRewardPoints(newPoints);
// //     } else {
// //       alert(t('not_enough_points'));
// //     }
// //   };
 
// //   // Check if hint is used for current question
// //   const isHintUsed = hintsUsed[currentQ] || false;
 
// //   // Reset hints when retrying quiz
// //   useEffect(() => {
// //     if (isFinished && retryQuiz) {
// //       setHintsUsed({});
// //     }
// //   }, [isFinished, retryQuiz]);
 
// //   // Update reward points when quiz is finished
// //   useEffect(() => {
// //     if (isFinished && passed) {
// //       const earnedPoints = calculateEarnedPoints();
// //       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || rewardPoints || 0);
// //       const newTotalPoints = currentPoints + earnedPoints;
     
// //       // Update global reward points
// //       updateRewardPoints && updateRewardPoints(newTotalPoints);
// //     }
// //   }, [isFinished, passed, score, quiz.length]);
 
// //   useEffect(() => {
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
 
// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     const handleKeyDown = (e) => {
// //       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
// //         e.preventDefault();
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     const handleFullscreenChange = () => {
// //       if (!document.fullscreenElement) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     document.addEventListener('visibilitychange', handleVisibilityChange);
// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('fullscreenchange', handleFullscreenChange);
 
// //     return () => {
// //       document.removeEventListener('visibilitychange', handleVisibilityChange);
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('fullscreenchange', handleFullscreenChange);
// //     };
// //   }, [handlePause]);
 
// //   const handleExitConfirm = () => {
// //     setExitDialogOpen(false);
// //     if (backToChapters) backToChapters();
// //     else navigate("/chapters");
// //   };
 
// //   const handleExitCancel = () => {
// //     setExitDialogOpen(false);
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
// //   };
 
// //   // Top-right reward points display
// //   const RewardPointsDisplay = () => (
// //     <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
// //       <Chip label={`${t('reward_points')}: ${rewardPoints}`} color="secondary" sx={{ fontWeight: 'bold', px: 2, py: 1 }} />
// //     </Box>
// //   );
 
// //   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
// //             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
// //             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
// //             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
// //               {t('retry_quiz')}
// //             </Button>
// //           </Paper>
// //         </Fade>
// //       </Container>
// //     );
// //   }
 
// //   if (isFinished) {
// //     const percentage = Math.round((score / quiz.length) * 100);
// //     const isPerfectScore = score === quiz.length;
// //     const earnedPoints = calculateEarnedPoints();
 
// //     return (
// //       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Box>
// //             <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3, background: passed ? (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', color: 'white', mb: 4 }}>
// //               <Zoom in={true}>
// //                 <Box>
// //                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
// //                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
// //                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
// //                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
// //                   </Box>
 
// //                   {/* Show Reward Points Earned */}
// //                   {passed && (
// //                     <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
// //                       🪙 {t('you_earned')} {earnedPoints} {t('reward_points')}!
// //                     </Typography>
// //                   )}
 
// //                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
// //                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                   </Box>
                 
// //                   <Chip
// //                     label={`${t('total_reward_points')}: ${rewardPoints}`}
// //                     color="secondary"
// //                     sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.1rem' }}
// //                   />
                 
// //                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
// //                 </Box>
// //               </Zoom>
// //             </Paper>
 
// //             {/* Review Questions & Answers */}
// //             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
// //               {t('review_questions_answers')}
// //             </Typography>
 
// //             <List sx={{ mb: 4 }}>
// //               {quiz.map((q, i) => {
// //                 const isCorrect = userAnswers[i] === q?.answer;
// //                 const wasHintUsed = hintsUsed[i];
// //                 return (
// //                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
// //                       <CardContent sx={{ p: 3 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
// //                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
// //                             {q?.question || t('question_not_available')}
// //                           </Typography>
// //                           {wasHintUsed && (
// //                             <Chip
// //                               icon={<Lightbulb />}
// //                               label="Hint Used"
// //                               color="info"
// //                               size="small"
// //                               variant="outlined"
// //                             />
// //                           )}
// //                         </Box>
 
// //                         <List dense>
// //                           {q?.options?.map((opt, j) => {
// //                             const isSelected = userAnswers[i] === opt;
// //                             const isAnswer = opt === q.answer;
// //                             return (
// //                               <ListItem key={j} sx={{
// //                                 background: isAnswer
// //                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
// //                                   : isSelected && !isAnswer
// //                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
// //                                   : 'transparent',
// //                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
// //                                 borderRadius: 1,
// //                                 mb: 0.5,
// //                                 animation: `${fadeIn} 0.3s ease-out`
// //                               }}>
// //                                 <ListItemIcon sx={{ minWidth: 40 }}>
// //                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
// //                                 </ListItemIcon>
// //                                 <ListItemText
// //                                   primary={`${optionLabels[j]}. ${opt}`}
// //                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
// //                                 />
// //                               </ListItem>
// //                             );
// //                           })}
// //                         </List>
 
// //                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
// //                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
// //                           {wasHintUsed && (
// //                             <Chip
// //                               label={`${t('hint_used')}`}
// //                               color="info"
// //                               variant="outlined"
// //                               icon={<Lightbulb />}
// //                             />
// //                           )}
// //                         </Box>
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 );
// //               })}
// //             </List>
 
// //             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={() => backToChapters && backToChapters()}
// //                 startIcon={<MenuBook />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('back_to_subjects')}
// //               </Button>
 
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={retryQuiz}
// //                 startIcon={<Replay />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('retry_level', { level: currentLevel })}
// //               </Button>
 
// //               {passed && (
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   onClick={nextLevel}
// //                   endIcon={<NavigateNext />}
// //                   sx={{
// //                     borderRadius: 2,
// //                     px: 4,
// //                     py: 1.5,
// //                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #229954, #27ae60)',
// //                       animation: `${pulse} 0.5s ease-in-out`
// //                     }
// //                   }}
// //                 >
// //                   {t('go_to_level', { level: currentLevel + 1 })}
// //                 </Button>
// //               )}
// //             </Box>
// //           </Box>
// //         </Fade>
// //       </Container>
// //     );
// //   }
 
// //   // Question page rendering
// //   const question = quiz[currentQ];
// //   if (!question) return null;
 
// //   const progress = ((currentQ + 1) / quiz.length) * 100;
 
// //   return (
// //     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //       <RewardPointsDisplay />
// //       <Fade in={true}>
// //         <Box>
// //           {/* Progress */}
// //           <Box sx={{ mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //               <Typography variant="body2" color="text.secondary">{t('question_of_total', { current: currentQ + 1, total: quiz.length })}</Typography>
// //               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
// //             </Box>
// //             <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4, background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)', '& .MuiLinearProgress-bar': { background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)', borderRadius: 4 }}} />
// //           </Box>
 
// //           {/* Question Card */}
// //           <Card elevation={4} sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', mb: 3, animation: `${fadeIn} 0.5s ease-out` }}>
// //             <CardContent sx={{ p: 4 }}>
// //               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
// //                 {currentQ + 1}. {question.question}
// //               </Typography>
             
// //               {/* Hint Section - Available for all questions */}
// //               {!isHintUsed ? (
// //                 <Box sx={{ mt: 2 }}>
// //                   <Button
// //                     variant="outlined"
// //                     startIcon={<Lightbulb />}
// //                     onClick={handleHint}
// //                     disabled={rewardPoints < 5}
// //                     sx={{
// //                       mb: 1,
// //                       '&:disabled': {
// //                         opacity: 0.6,
// //                         color: 'text.disabled'
// //                       }
// //                     }}
// //                   >
// //                     {t('use_hint_for_5_points')}
// //                   </Button>
// //                   {rewardPoints < 5 && (
// //                     <Typography variant="body2" color="error" sx={{ ml: 1 }}>
// //                       {t('not_enough_points_for_hint')}
// //                     </Typography>
// //                   )}
// //                 </Box>
// //               ) : (
// //                 <Alert severity="info" sx={{ mt: 2 }}>
// //                   <strong>💡 Hint:</strong> {question.hint}
// //                 </Alert>
// //               )}
// //             </CardContent>
// //           </Card>
 
// //           {/* Options */}
// //           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
// //             {question.options?.map((opt, i) => {
// //               const isSelected = selected === opt;
// //               return (
// //                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                   <Button
// //                     fullWidth
// //                     variant={isSelected ? "contained" : "outlined"}
// //                     onClick={() => handleAnswer(opt)}
// //                     startIcon={<Box sx={{ width: 30, height: 30, borderRadius: '50%', background: isSelected ? 'white' : 'primary.main', color: isSelected ? 'primary.main' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', border: isSelected ? '2px solid' : 'none', borderColor: isSelected ? 'primary.main' : 'transparent' }}>{optionLabels[i]}</Box>}
// //                     sx={{ py: 2.5, borderRadius: 2, borderWidth: isSelected ? 0 : 2, textTransform: 'none', justifyContent: 'flex-start', fontSize: '1rem', fontWeight: 600, background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent', color: isSelected ? 'white' : 'text.primary', '&:hover': { borderWidth: 2, background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)' }, transition: 'all 0.3s ease', animation: `${fadeIn} 0.3s ease-out` }}
// //                   >
// //                     {opt}
// //                   </Button>
// //                 </Zoom>
// //               );
// //             })}
// //           </Box>
 
// //           {/* Navigation */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
// //             <Button variant="outlined" size="large" onClick={prevQuestion} disabled={currentQ === 0} startIcon={<NavigateBefore />} sx={{ borderRadius: 2, px: 4, py: 1.5, minWidth: '140px', borderWidth: 2, '&:hover': { borderWidth: 2 }, '&:disabled': { opacity: 0.5, borderColor: 'rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.26)' } }}>
// //               {t('previous')}
// //             </Button>
// //             <Button variant="contained" size="large" onClick={nextQuestion} endIcon={<NavigateNext />} sx={{ borderRadius: 2, px: 6, py: 1.5, minWidth: '140px', fontSize: '1.1rem', background: 'linear-gradient(45deg, #00b894, #00cec9)', '&:hover': { background: 'linear-gradient(45deg, #00a085, #00b894)', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' } }}>
// //               {t('next')}
// //             </Button>
// //           </Box>
// //         </Box>
// //       </Fade>
 
// //       {/* Exit Confirmation Dialog */}
// //       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
// //         <DialogTitle>{t('exit_quiz')}</DialogTitle>
// //         <DialogContent>
// //           <Typography>{t('exit_quiz_confirmation')}</Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
// //           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // }
 
// // export default QuizQuestion;
 










// // ////points not working
// // import { 
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Typography,
// //   LinearProgress,
// //   Chip,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Paper,
// //   Container,
// //   Alert,
// //   Fade,
// //   Zoom,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Snackbar
// // } from '@mui/material';
// // import {
// //   CheckCircle,
// //   RadioButtonUnchecked,
// //   NavigateNext,
// //   NavigateBefore,
// //   Replay,
// //   EmojiEvents,
// //   Psychology,
// //   MenuBook,
// //   Lightbulb
// // } from '@mui/icons-material';
// // import { keyframes } from '@emotion/react';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import { useQuiz } from './QuizContext';

// // // Animation keyframes
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;

// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;

// // const slideIn = keyframes`
// //   from { opacity: 0; transform: translateX(-20px); }
// //   to { opacity: 1; transform: translateX(0); }
// // `;

// // function QuizQuestion({
// //   quiz,
// //   currentQ,
// //   selected,
// //   showAnswer,
// //   score,
// //   isFinished,
// //   handleAnswer,
// //   nextQuestion,
// //   prevQuestion,
// //   retryQuiz,
// //   nextLevel,
// //   backToChapters,
// //   currentLevel,
// //   userAnswers = [],
// //   handlePause,
// //   selectedLanguage,
// //   selectedSubtopic
// // }) {
// //   const { t } = useTranslation();
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const passed = score >= 5;
// //   const [exitDialogOpen, setExitDialogOpen] = useState(false);
// //   const [hintsUsed, setHintsUsed] = useState({});
// //   const [hintContent, setHintContent] = useState({});
// //   const [loadingHint, setLoadingHint] = useState(false);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
// //   const { rewardPoints, updateRewardPoints } = useQuiz();

// //   const navigate = useNavigate();

// //   // Show snackbar notification
// //   const showSnackbar = (message, severity = 'info') => {
// //     setSnackbar({ open: true, message, severity });
// //   };

// //   // Handle hint usage for current question
// //   const handleHint = async () => {
// //     if (rewardPoints < 5) {
// //       showSnackbar(t('not_enough_points'), 'warning');
// //       return;
// //     }

// //     const currentQuestion = quiz[currentQ];
// //     if (!currentQuestion) return;

// //     // If hint is already used for this question, just show it
// //     if (hintsUsed[currentQ]) {
// //       return;
// //     }

// //     setLoadingHint(true);
// //     try {
// //       // Mark hint as used for this question
// //       setHintsUsed(prev => ({
// //         ...prev,
// //         [currentQ]: true
// //       }));

// //       // Store the hint content
// //       if (currentQuestion.hint) {
// //         setHintContent(prev => ({
// //           ...prev,
// //           [currentQ]: currentQuestion.hint
// //         }));
// //       }

// //       // Deduct 5 points when hint is used
// //       const newPoints = rewardPoints - 5;
// //       updateRewardPoints && updateRewardPoints(newPoints);
      
// //       showSnackbar(t('hint_unlocked'), 'success');
      
// //     } catch (error) {
// //       console.error('Error using hint:', error);
// //       showSnackbar(t('hint_error'), 'error');
// //       // Revert hint usage if there was an error
// //       setHintsUsed(prev => {
// //         const newHints = { ...prev };
// //         delete newHints[currentQ];
// //         return newHints;
// //       });
// //     } finally {
// //       setLoadingHint(false);
// //     }
// //   };

// //   // Check if hint is used for current question
// //   const isHintUsed = hintsUsed[currentQ] || false;
// //   const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;

// //   // Reset hints when retrying quiz
// //   useEffect(() => {
// //     if (isFinished && retryQuiz) {
// //       setHintsUsed({});
// //       setHintContent({});
// //     }
// //   }, [isFinished, retryQuiz]);

// //   // Calculate earned points based on score
// //   const calculateEarnedPoints = () => {
// //     if (!passed) return 0;
// //     const percentage = (score / quiz.length) * 100;
    
// //     if (percentage === 100) return 10;
// //     if (percentage >= 80) return 8;
// //     if (percentage >= 60) return 6;
// //     if (percentage >= 40) return 4;
// //     return 2;
// //   };

// //   // Update reward points when quiz is finished
// //   useEffect(() => {
// //     if (isFinished && passed) {
// //       const earnedPoints = calculateEarnedPoints();
// //       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || rewardPoints || 0);
// //       const newTotalPoints = currentPoints + earnedPoints;
      
// //       updateRewardPoints && updateRewardPoints(newTotalPoints);
// //     }
// //   }, [isFinished, passed, score, quiz.length]);

// //   useEffect(() => {
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});

// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleKeyDown = (e) => {
// //       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
// //         e.preventDefault();
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleFullscreenChange = () => {
// //       if (!document.fullscreenElement) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     document.addEventListener('visibilitychange', handleVisibilityChange);
// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('fullscreenchange', handleFullscreenChange);

// //     return () => {
// //       document.removeEventListener('visibilitychange', handleVisibilityChange);
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('fullscreenchange', handleFullscreenChange);
// //     };
// //   }, [handlePause]);

// //   const handleExitConfirm = () => {
// //     setExitDialogOpen(false);
// //     if (backToChapters) backToChapters();
// //     else navigate("/chapters");
// //   };

// //   const handleExitCancel = () => {
// //     setExitDialogOpen(false);
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
// //   };

// //   // Top-right reward points display
// //   const RewardPointsDisplay = () => (
// //     <Box sx={{ position: 'absolute', top: 16, right: 100 }}>
// //       <Chip 
// //         label={`${t('reward_points')}: ${rewardPoints}`} 
// //         color="secondary" 
// //         sx={{ fontWeight: 'bold', px: 2, py: 1 }} 
// //       />
// //     </Box>
// //   );

// //   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
// //             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
// //             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
// //             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
// //               {t('retry_quiz')}
// //             </Button>
// //           </Paper>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   if (isFinished) {
// //     const percentage = Math.round((score / quiz.length) * 100);
// //     const isPerfectScore = score === quiz.length;
// //     const earnedPoints = calculateEarnedPoints();

// //     return (
// //       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Box>
// //             <Paper elevation={4} sx={{ 
// //               p: 4, 
// //               textAlign: 'center', 
// //               borderRadius: 3, 
// //               background: passed ? 
// //                 (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') : 
// //                 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', 
// //               color: 'white', 
// //               mb: 4 
// //             }}>
// //               <Zoom in={true}>
// //                 <Box>
// //                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
// //                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
// //                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
// //                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
// //                   </Box>

// //                   {passed && (
// //                     <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
// //                       🪙 {t('you_earned')} {earnedPoints} {t('reward_points')}!
// //                     </Typography>
// //                   )}

// //                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
// //                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                   </Box>
                  
// //                   <Chip 
// //                     label={`${t('total_reward_points')}: ${rewardPoints}`} 
// //                     color="secondary" 
// //                     sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.1rem' }} 
// //                   />
                  
// //                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
// //                 </Box>
// //               </Zoom>
// //             </Paper>

// //             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
// //               {t('review_questions_answers')}
// //             </Typography>

// //             <List sx={{ mb: 4 }}>
// //               {quiz.map((q, i) => {
// //                 const isCorrect = userAnswers[i] === q?.answer;
// //                 const wasHintUsed = hintsUsed[i];
// //                 return (
// //                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
// //                       <CardContent sx={{ p: 3 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
// //                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
// //                             {q?.question || t('question_not_available')}
// //                           </Typography>
// //                           {wasHintUsed && (
// //                             <Chip 
// //                               icon={<Lightbulb />} 
// //                               label="Hint Used" 
// //                               color="info" 
// //                               size="small" 
// //                               variant="outlined"
// //                             />
// //                           )}
// //                         </Box>

// //                         <List dense>
// //                           {q?.options?.map((opt, j) => {
// //                             const isSelected = userAnswers[i] === opt;
// //                             const isAnswer = opt === q.answer;
// //                             return (
// //                               <ListItem key={j} sx={{ 
// //                                 background: isAnswer 
// //                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
// //                                   : isSelected && !isAnswer
// //                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
// //                                   : 'transparent',
// //                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
// //                                 borderRadius: 1,
// //                                 mb: 0.5,
// //                                 animation: `${fadeIn} 0.3s ease-out`
// //                               }}>
// //                                 <ListItemIcon sx={{ minWidth: 40 }}>
// //                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
// //                                 </ListItemIcon>
// //                                 <ListItemText
// //                                   primary={`${optionLabels[j]}. ${opt}`}
// //                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
// //                                 />
// //                               </ListItem>
// //                             );
// //                           })}
// //                         </List>

// //                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
// //                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
// //                           {wasHintUsed && (
// //                             <Chip 
// //                               label={`${t('hint_used')}`} 
// //                               color="info" 
// //                               variant="outlined" 
// //                               icon={<Lightbulb />}
// //                             />
// //                           )}
// //                         </Box>

// //                         {wasHintUsed && q?.hint && (
// //                           <Alert severity="info" sx={{ mt: 2 }}>
// //                             <strong>💡 {t('hint')}:</strong> {q.hint}
// //                           </Alert>
// //                         )}
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 );
// //               })}
// //             </List>

// //             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={() => backToChapters && backToChapters()}
// //                 startIcon={<MenuBook />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('back_to_subjects')}
// //               </Button>

// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={retryQuiz}
// //                 startIcon={<Replay />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('retry_level', { level: currentLevel })}
// //               </Button>

// //               {passed && (
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   onClick={nextLevel}
// //                   endIcon={<NavigateNext />}
// //                   sx={{
// //                     borderRadius: 2,
// //                     px: 4,
// //                     py: 1.5,
// //                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #229954, #27ae60)',
// //                       animation: `${pulse} 0.5s ease-in-out`
// //                     }
// //                   }}
// //                 >
// //                   {t('go_to_level', { level: currentLevel + 1 })}
// //                 </Button>
// //               )}
// //             </Box>
// //           </Box>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   // Question page rendering
// //   const question = quiz[currentQ];
// //   if (!question) return null;

// //   const progress = ((currentQ + 1) / quiz.length) * 100;

// //   return (
// //     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //       <RewardPointsDisplay />
// //       <Fade in={true}>
// //         <Box>
// //           {/* Progress */}
// //           <Box sx={{ mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //               <Typography variant="body2" color="text.secondary">{t('question_of_total', { current: currentQ + 1, total: quiz.length })}</Typography>
// //               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
// //             </Box>
// //             <LinearProgress variant="determinate" value={progress} sx={{ 
// //               height: 8, 
// //               borderRadius: 4, 
// //               background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)', 
// //               '& .MuiLinearProgress-bar': { 
// //                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)', 
// //                 borderRadius: 4 
// //               }
// //             }} />
// //           </Box>

// //           {/* Question Card */}
// //           <Card elevation={4} sx={{ 
// //             borderRadius: 3, 
// //             background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
// //             mb: 3, 
// //             animation: `${fadeIn} 0.5s ease-out` 
// //           }}>
// //             <CardContent sx={{ p: 4 }}>
// //               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
// //                 {currentQ + 1}. {question.question}
// //               </Typography>
              
// //               {/* Hint Section */}
// //               <Box sx={{ mt: 2 }}>
// //                 {!isHintUsed ? (
// //                   <Box>
// //                     <Button 
// //                       variant="outlined" 
// //                       startIcon={<Lightbulb />} 
// //                       onClick={handleHint}
// //                       disabled={rewardPoints < 5 || loadingHint}
// //                       sx={{ 
// //                         mb: 1,
// //                         '&:disabled': {
// //                           opacity: 0.6,
// //                           color: 'text.disabled'
// //                         }
// //                       }}
// //                     >
// //                       {loadingHint ? t('loading_hint') : t('use_hint_for_5_points')}
// //                     </Button>
// //                     {rewardPoints < 5 && (
// //                       <Typography variant="body2" color="error" sx={{ ml: 1 }}>
// //                         {t('not_enough_points_for_hint')}
// //                       </Typography>
// //                     )}
// //                   </Box>
// //                 ) : (
// //                   <Alert severity="info" sx={{ mt: 2 }}>
// //                     <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
// //                   </Alert>
// //                 )}
// //               </Box>
// //             </CardContent>
// //           </Card>

// //           {/* Options */}
// //           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
// //             {question.options?.map((opt, i) => {
// //               const isSelected = selected === opt;
// //               return (
// //                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                   <Button
// //                     fullWidth
// //                     variant={isSelected ? "contained" : "outlined"}
// //                     onClick={() => handleAnswer(opt)}
// //                     startIcon={<Box sx={{ 
// //                       width: 30, 
// //                       height: 30, 
// //                       borderRadius: '50%', 
// //                       background: isSelected ? 'white' : 'primary.main', 
// //                       color: isSelected ? 'primary.main' : 'white', 
// //                       display: 'flex', 
// //                       alignItems: 'center', 
// //                       justifyContent: 'center', 
// //                       fontSize: '0.9rem', 
// //                       fontWeight: 'bold', 
// //                       border: isSelected ? '2px solid' : 'none', 
// //                       borderColor: isSelected ? 'primary.main' : 'transparent' 
// //                     }}>{optionLabels[i]}</Box>}
// //                     sx={{ 
// //                       py: 2.5, 
// //                       borderRadius: 2, 
// //                       borderWidth: isSelected ? 0 : 2, 
// //                       textTransform: 'none', 
// //                       justifyContent: 'flex-start', 
// //                       fontSize: '1rem', 
// //                       fontWeight: 600, 
// //                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent', 
// //                       color: isSelected ? 'white' : 'text.primary', 
// //                       '&:hover': { 
// //                         borderWidth: 2, 
// //                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)' 
// //                       }, 
// //                       transition: 'all 0.3s ease', 
// //                       animation: `${fadeIn} 0.3s ease-out` 
// //                     }}
// //                   >
// //                     {opt}
// //                   </Button>
// //                 </Zoom>
// //               );
// //             })}
// //           </Box>

// //           {/* Navigation */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
// //             <Button 
// //               variant="outlined" 
// //               size="large" 
// //               onClick={prevQuestion} 
// //               disabled={currentQ === 0} 
// //               startIcon={<NavigateBefore />} 
// //               sx={{ 
// //                 borderRadius: 2, 
// //                 px: 4, 
// //                 py: 1.5, 
// //                 minWidth: '140px', 
// //                 borderWidth: 2, 
// //                 '&:hover': { borderWidth: 2 }, 
// //                 '&:disabled': { 
// //                   opacity: 0.5, 
// //                   borderColor: 'rgba(0, 0, 0, 0.12)', 
// //                   color: 'rgba(0, 0, 0, 0.26)' 
// //                 } 
// //               }}
// //             >
// //               {t('previous')}
// //             </Button>
// //             <Button 
// //               variant="contained" 
// //               size="large" 
// //               onClick={nextQuestion} 
// //               endIcon={<NavigateNext />} 
// //               sx={{ 
// //                 borderRadius: 2, 
// //                 px: 6, 
// //                 py: 1.5, 
// //                 minWidth: '140px', 
// //                 fontSize: '1.1rem', 
// //                 background: 'linear-gradient(45deg, #00b894, #00cec9)', 
// //                 '&:hover': { 
// //                   background: 'linear-gradient(45deg, #00a085, #00b894)', 
// //                   transform: 'translateY(-2px)', 
// //                   boxShadow: '0 8px 25px rgba(0,0,0,0.15)' 
// //                 } 
// //               }}
// //             >
// //               {t('next')}
// //             </Button>
// //           </Box>
// //         </Box>
// //       </Fade>

// //       {/* Exit Confirmation Dialog */}
// //       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
// //         <DialogTitle>{t('exit_quiz')}</DialogTitle>
// //         <DialogContent>
// //           <Typography>{t('exit_quiz_confirmation')}</Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
// //           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Snackbar for notifications */}
// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={4000}
// //         onClose={() => setSnackbar({ ...snackbar, open: false })}
// //         message={snackbar.message}
// //       />
// //     </Container>
// //   );
// // }

// // export default QuizQuestion;










// //  import {
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Typography,
// //   LinearProgress,
// //   Chip,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Paper,
// //   Container,
// //   Alert,
// //   Fade,
// //   Zoom,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Snackbar
// // } from '@mui/material';
// // import {
// //   CheckCircle,
// //   RadioButtonUnchecked,
// //   NavigateNext,
// //   NavigateBefore,
// //   Replay,
// //   EmojiEvents,
// //   Psychology,
// //   MenuBook,
// //   Lightbulb
// // } from '@mui/icons-material';
// // import { keyframes } from '@emotion/react';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import { useQuiz } from './QuizReward';

// // // Animation keyframes
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;

// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;

// // const slideIn = keyframes`
// //   from { opacity: 0; transform: translateX(-20px); }
// //   to { opacity: 1; transform: translateX(0); }
// // `;

// // function QuizQuestion({
// //   quiz,
// //   currentQ,
// //   selected,
// //   showAnswer,
// //   score,
// //   isFinished,
// //   handleAnswer,
// //   nextQuestion,
// //   prevQuestion,
// //   retryQuiz,
// //   nextLevel,
// //   backToChapters,
// //   currentLevel,
// //   userAnswers = [],
// //   handlePause,
// //   selectedLanguage,
// //   selectedSubtopic
// // }) {
// //   const { t } = useTranslation();
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const passed = score >= 5;
// //   const [exitDialogOpen, setExitDialogOpen] = useState(false);
// //   const [hintsUsed, setHintsUsed] = useState({});
// //   const [hintContent, setHintContent] = useState({});
// //   const [loadingHint, setLoadingHint] = useState(false);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  
// //   // Use the QuizReward context
// //   const {
// //     rewardPoints,
// //     updateRewardPoints,
// //     calculateEarnedPoints,
// //     pointsAwarded,
// //     earnedPoints: contextEarnedPoints
// //   } = useQuiz();
  
// //   const [localEarnedPoints, setLocalEarnedPoints] = useState({ basePoints: 0, bonusPoints: 0, totalPoints: 0 });

// //   const navigate = useNavigate();

// //   // Show snackbar notification
// //   const showSnackbar = (message, severity = 'info') => {
// //     setSnackbar({ open: true, message, severity });
// //   };

// //   // Handle hint usage for current question
// //   const handleHint = async () => {
// //     if (rewardPoints < 5) {
// //       showSnackbar(t('not_enough_points'), 'warning');
// //       return;
// //     }

// //     const currentQuestion = quiz[currentQ];
// //     if (!currentQuestion) return;

// //     // If hint is already used for this question, just show it
// //     if (hintsUsed[currentQ]) {
// //       return;
// //     }

// //     setLoadingHint(true);
// //     try {
// //       // Mark hint as used for this question
// //       setHintsUsed(prev => ({
// //         ...prev,
// //         [currentQ]: true
// //       }));

// //       // Store the hint content
// //       if (currentQuestion.hint) {
// //         setHintContent(prev => ({
// //           ...prev,
// //           [currentQ]: currentQuestion.hint
// //         }));
// //       }

// //       // Deduct 5 points when hint is used
// //       const newPoints = rewardPoints - 5;
// //       updateRewardPoints(newPoints);
     
// //       showSnackbar(t('hint_unlocked'), 'success');
     
// //     } catch (error) {
// //       console.error('Error using hint:', error);
// //       showSnackbar(t('hint_error'), 'error');
// //       // Revert hint usage if there was an error
// //       setHintsUsed(prev => {
// //         const newHints = { ...prev };
// //         delete newHints[currentQ];
// //         return newHints;
// //       });
// //     } finally {
// //       setLoadingHint(false);
// //     }
// //   };

// //   // Check if hint is used for current question
// //   const isHintUsed = hintsUsed[currentQ] || false;
// //   const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;

// //   // Reset hints when retrying quiz
// //   useEffect(() => {
// //     if (isFinished && retryQuiz) {
// //       setHintsUsed({});
// //       setHintContent({});
// //     }
// //   }, [isFinished, retryQuiz]);

// //   // Handle next question with points calculation
// //   const handleNextQuestion = () => {
// //     const earnedPointsResult = nextQuestion();
// //     if (earnedPointsResult) {
// //       setLocalEarnedPoints(earnedPointsResult);
     
// //       // Show success message with points breakdown
// //       const percentage = Math.round((score / quiz.length) * 100);
// //       let pointsMessage = `🎉 ${t('quiz_passed_points', { points: earnedPointsResult.basePoints })}`;
// //       if (earnedPointsResult.bonusPoints > 0) {
// //         pointsMessage += ` + ${t('above_80_bonus_points', { points: earnedPointsResult.bonusPoints })}`;
// //       }
// //       pointsMessage += ` = ${earnedPointsResult.totalPoints} ${t('total_points')}!`;
// //       showSnackbar(pointsMessage, 'success');
// //     }
// //   };

// //   // Calculate earned points for display
// //   useEffect(() => {
// //     if (isFinished && passed && calculateEarnedPoints) {
// //       const calculatedPoints = calculateEarnedPoints(score, quiz.length);
// //       setLocalEarnedPoints(calculatedPoints);

// //       // ✅ Instantly add earned points to total
// //       updateRewardPoints(prev => {
// //         const total = prev + calculatedPoints.totalPoints;
// //         localStorage.setItem("rewardPoints", total);
// //         return total;
// //       });

// //       // ✅ Sync with context (for Navbar and Result)
// //       if (typeof window !== "undefined") {
// //         localStorage.setItem("rewardPoints", rewardPoints + calculatedPoints.totalPoints);
// //       }

// //       // ✅ Also update via context method (if defined)
// //       if (typeof calculateEarnedPoints === "function") {
// //         if (typeof updateRewardPoints === "function") {
// //           updateRewardPoints(rewardPoints + calculatedPoints.totalPoints);
// //         }
// //       }
// //     }
// //   }, [isFinished, passed, score, quiz.length, calculateEarnedPoints, updateRewardPoints, rewardPoints]);

// //   useEffect(() => {
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});

// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleKeyDown = (e) => {
// //       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
// //         e.preventDefault();
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     const handleFullscreenChange = () => {
// //       if (!document.fullscreenElement) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };

// //     document.addEventListener('visibilitychange', handleVisibilityChange);
// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('fullscreenchange', handleFullscreenChange);

// //     return () => {
// //       document.removeEventListener('visibilitychange', handleVisibilityChange);
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('fullscreenchange', handleFullscreenChange);
// //     };
// //   }, [handlePause]);

// //   const handleExitConfirm = () => {
// //     setExitDialogOpen(false);
// //     if (backToChapters) backToChapters();
// //     else navigate("/chapters");
// //   };

// //   const handleExitCancel = () => {
// //     setExitDialogOpen(false);
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
// //   };

// //   // Top-right reward points display
// //   const RewardPointsDisplay = () => (
// //     <Box sx={{ position: 'absolute', top: 16, right: 100 }}>
// //       <Chip
// //         label={`${t('reward_points_breakdown')}: ${rewardPoints}`}
// //         color="secondary"
// //         sx={{
// //           fontWeight: 'bold',
// //           px: 2,
// //           py: 1,
// //           fontSize: '1rem',
// //           background: 'linear-gradient(45deg, #FFD700, #FFA500)',
// //           color: 'black',
// //           animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
// //         }}
// //       />
// //     </Box>
// //   );

// //   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
// //             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
// //             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
// //             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
// //               {t('retry_quiz')}
// //             </Button>
// //           </Paper>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   if (isFinished) {
// //     const percentage = Math.round((score / quiz.length) * 100);
// //     const isPerfectScore = score === quiz.length;
// //     const hasBonus = localEarnedPoints.bonusPoints > 0;
// //     const displayEarnedPoints = contextEarnedPoints.totalPoints > 0 ? contextEarnedPoints : localEarnedPoints;

// //     return (
// //       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Box>
// //             <Paper elevation={4} sx={{
// //               p: 4,
// //               textAlign: 'center',
// //               borderRadius: 3,
// //               background: passed ?
// //                 (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
// //                 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
// //               color: 'white',
// //               mb: 4
// //             }}>
// //               <Zoom in={true}>
// //                 <Box>
// //                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
// //                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
// //                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
// //                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
// //                   </Box>

// //                   {passed && (
// //                     <Box sx={{ mt: 2, mb: 2 }}>
// //                       <Typography variant="h6" sx={{ mb: 1 }}>
// //                         🪙 {t('reward_points')}
// //                       </Typography>
// //                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
// //                         <Chip
// //                           label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${displayEarnedPoints.basePoints} ${t('points')}`}
// //                           sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
// //                         />
// //                         {hasBonus && (
// //                           <Chip
// //                             label={`${t('above_80_percent_bonus')}: +${displayEarnedPoints.bonusPoints} ${t('points')}`}
// //                             sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
// //                           />
// //                         )}
// //                         <Chip
// //                           label={`${t('total_earned')}: ${displayEarnedPoints.totalPoints} ${t('points')}`}
// //                           sx={{ background: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   )}

// //                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
// //                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                   </Box>
                 
// //                   <Chip
// //                     label={`${t('total_RewardPoints')}: ${rewardPoints}`}
// //                     color="secondary"
// //                     sx={{
// //                       mt: 2,
// //                       fontWeight: 'bold',
// //                       fontSize: '1.1rem',
// //                       background: 'linear-gradient(45deg, #FFD700, #FFA500)',
// //                       color: 'black'
// //                     }}
// //                   />
                 
// //                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
// //                 </Box>
// //               </Zoom>
// //             </Paper>

// //             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
// //               {t('review_questions_answers')}
// //             </Typography>

// //             <List sx={{ mb: 4 }}>
// //               {quiz.map((q, i) => {
// //                 const isCorrect = userAnswers[i] === q?.answer;
// //                 const wasHintUsed = hintsUsed[i];
// //                 return (
// //                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
// //                       <CardContent sx={{ p: 3 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
// //                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
// //                             {q?.question || t('question_not_available')}
// //                           </Typography>
// //                           {wasHintUsed && (
// //                             <Chip
// //                               icon={<Lightbulb />}
// //                               label="Hint Used"
// //                               color="info"
// //                               size="small"
// //                               variant="outlined"
// //                             />
// //                           )}
// //                         </Box>

// //                         <List dense>
// //                           {q?.options?.map((opt, j) => {
// //                             const isSelected = userAnswers[i] === opt;
// //                             const isAnswer = opt === q.answer;
// //                             return (
// //                               <ListItem key={j} sx={{
// //                                 background: isAnswer
// //                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
// //                                   : isSelected && !isAnswer
// //                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
// //                                   : 'transparent',
// //                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
// //                                 borderRadius: 1,
// //                                 mb: 0.5,
// //                                 animation: `${fadeIn} 0.3s ease-out`
// //                               }}>
// //                                 <ListItemIcon sx={{ minWidth: 40 }}>
// //                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
// //                                 </ListItemIcon>
// //                                 <ListItemText
// //                                   primary={`${optionLabels[j]}. ${opt}`}
// //                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
// //                                 />
// //                               </ListItem>
// //                             );
// //                           })}
// //                         </List>

// //                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
// //                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
// //                           {wasHintUsed && (
// //                             <Chip
// //                               label={`${t('hint_used')}`}
// //                               color="info"
// //                               variant="outlined"
// //                               icon={<Lightbulb />}
// //                             />
// //                           )}
// //                         </Box>

// //                         {wasHintUsed && q?.hint && (
// //                           <Alert severity="info" sx={{ mt: 2 }}>
// //                             <strong>💡 {t('hint')}:</strong> {q.hint}
// //                           </Alert>
// //                         )}
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 );
// //               })}
// //             </List>

// //             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={() => backToChapters && backToChapters()}
// //                 startIcon={<MenuBook />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('back_to_subjects')}
// //               </Button>

// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={retryQuiz}
// //                 startIcon={<Replay />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('retry_level', { level: currentLevel })}
// //               </Button>

// //               {passed && (
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   onClick={nextLevel}
// //                   endIcon={<NavigateNext />}
// //                   sx={{
// //                     borderRadius: 2,
// //                     px: 4,
// //                     py: 1.5,
// //                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #229954, #27ae60)',
// //                       animation: `${pulse} 0.5s ease-in-out`
// //                     }
// //                   }}
// //                 >
// //                   {t('go_to_level', { level: currentLevel + 1 })}
// //                 </Button>
// //               )}
// //             </Box>
// //           </Box>
// //         </Fade>
// //       </Container>
// //     );
// //   }

// //   // Question page rendering
// //   const question = quiz[currentQ];
// //   if (!question) return null;

// //   const progress = ((currentQ + 1) / quiz.length) * 100;

// //   return (
// //     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //       <RewardPointsDisplay />
// //       <Fade in={true}>
// //         <Box>
// //           {/* Progress */}
// //           <Box sx={{ mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //               <Typography variant="body2" color="text.secondary">{t('question_of_total', { current: currentQ + 1, total: quiz.length })}</Typography>
// //               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
// //             </Box>
// //             <LinearProgress variant="determinate" value={progress} sx={{
// //               height: 8,
// //               borderRadius: 4,
// //               background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)',
// //               '& .MuiLinearProgress-bar': {
// //                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
// //                 borderRadius: 4
// //               }
// //             }} />
// //           </Box>

// //           {/* Question Card */}
// //           <Card elevation={4} sx={{
// //             borderRadius: 3,
// //             background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
// //             mb: 3,
// //             animation: `${fadeIn} 0.5s ease-out`
// //           }}>
// //             <CardContent sx={{ p: 4 }}>
// //               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
// //                 {currentQ + 1}. {question.question}
// //               </Typography>
             
// //               {/* Hint Section */}
// //               <Box sx={{ mt: 2 }}>
// //                 {!isHintUsed ? (
// //                   <Box>
// //                     <Button
// //                       variant="outlined"
// //                       startIcon={<Lightbulb />}
// //                       onClick={handleHint}
// //                       disabled={rewardPoints < 5 || loadingHint}
// //                       sx={{
// //                         mb: 1,
// //                         '&:disabled': {
// //                           opacity: 0.6,
// //                           color: 'text.disabled'
// //                         }
// //                       }}
// //                     >
// //                       {loadingHint ? t('loading_hint') : t('use_hint_for_5_points')}
// //                     </Button>
// //                     {rewardPoints < 5 && (
// //                       <Typography variant="body2" color="error" sx={{ ml: 1 }}>
// //                         {t('not_enough_points_for_hint')}
// //                       </Typography>
// //                     )}
// //                   </Box>
// //                 ) : (
// //                   <Alert severity="info" sx={{ mt: 2 }}>
// //                     <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
// //                   </Alert>
// //                 )}
// //               </Box>
// //             </CardContent>
// //           </Card>

// //           {/* Options */}
// //           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
// //             {question.options?.map((opt, i) => {
// //               const isSelected = selected === opt;
// //               return (
// //                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                   <Button
// //                     fullWidth
// //                     variant={isSelected ? "contained" : "outlined"}
// //                     onClick={() => handleAnswer(opt)}
// //                     startIcon={<Box sx={{
// //                       width: 30,
// //                       height: 30,
// //                       borderRadius: '50%',
// //                       background: isSelected ? 'white' : 'primary.main',
// //                       color: isSelected ? 'primary.main' : 'white',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       fontSize: '0.9rem',
// //                       fontWeight: 'bold',
// //                       border: isSelected ? '2px solid' : 'none',
// //                       borderColor: isSelected ? 'primary.main' : 'transparent'
// //                     }}>{optionLabels[i]}</Box>}
// //                     sx={{
// //                       py: 2.5,
// //                       borderRadius: 2,
// //                       borderWidth: isSelected ? 0 : 2,
// //                       textTransform: 'none',
// //                       justifyContent: 'flex-start',
// //                       fontSize: '1rem',
// //                       fontWeight: 600,
// //                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
// //                       color: isSelected ? 'white' : 'text.primary',
// //                       '&:hover': {
// //                         borderWidth: 2,
// //                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
// //                       },
// //                       transition: 'all 0.3s ease',
// //                       animation: `${fadeIn} 0.3s ease-out`
// //                     }}
// //                   >
// //                     {opt}
// //                   </Button>
// //                 </Zoom>
// //               );
// //             })}
// //           </Box>

// //           {/* Navigation */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
// //             <Button
// //               variant="outlined"
// //               size="large"
// //               onClick={prevQuestion}
// //               disabled={currentQ === 0}
// //               startIcon={<NavigateBefore />}
// //               sx={{
// //                 borderRadius: 2,
// //                 px: 4,
// //                 py: 1.5,
// //                 minWidth: '140px',
// //                 borderWidth: 2,
// //                 '&:hover': { borderWidth: 2 },
// //                 '&:disabled': {
// //                   opacity: 0.5,
// //                   borderColor: 'rgba(0, 0, 0, 0.12)',
// //                   color: 'rgba(0, 0, 0, 0.26)'
// //                 }
// //               }}
// //             >
// //               {t('previous')}
// //             </Button>
// //             <Button
// //               variant="contained"
// //               size="large"
// //               onClick={handleNextQuestion}
// //               endIcon={<NavigateNext />}
// //               sx={{
// //                 borderRadius: 2,
// //                 px: 6,
// //                 py: 1.5,
// //                 minWidth: '140px',
// //                 fontSize: '1.1rem',
// //                 background: 'linear-gradient(45deg, #00b894, #00cec9)',
// //                 '&:hover': {
// //                   background: 'linear-gradient(45deg, #00a085, #00b894)',
// //                   transform: 'translateY(-2px)',
// //                   boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
// //                 }
// //               }}
// //             >
// //               {currentQ + 1 === quiz.length ? t('submit') : t('next')}
// //             </Button>
// //           </Box>
// //         </Box>
// //       </Fade>

// //       {/* Exit Confirmation Dialog */}
// //       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
// //         <DialogTitle>{t('exit_quiz')}</DialogTitle>
// //         <DialogContent>
// //           <Typography>{t('exit_quiz_confirmation')}</Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
// //           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Snackbar for notifications */}
// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={4000}
// //         onClose={() => setSnackbar({ ...snackbar, open: false })}
// //         message={snackbar.message}
// //       />
// //     </Container>
// //   );
// // }

// // export default QuizQuestion;














 

 
// // import {
// //   Box,
// //   Button,
// //   Card,
// //   CardContent,
// //   Typography,
// //   LinearProgress,
// //   Chip,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Paper,
// //   Container,
// //   Alert,
// //   Fade,
// //   Zoom,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Snackbar
// // } from '@mui/material';
// // import {
// //   CheckCircle,
// //   RadioButtonUnchecked,
// //   NavigateNext,
// //   NavigateBefore,
// //   Replay,
// //   EmojiEvents,
// //   Psychology,
// //   MenuBook,
// //   Lightbulb
// // } from '@mui/icons-material';
// // import { keyframes } from '@emotion/react';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import { useQuiz } from './QuizContext';
 
// // // Animation keyframes
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(20px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;
 
// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;
 
// // const slideIn = keyframes`
// //   from { opacity: 0; transform: translateX(-20px); }
// //   to { opacity: 1; transform: translateX(0); }
// // `;
 
// // function QuizQuestion({
// //   quiz,
// //   currentQ,
// //   selected,
// //   showAnswer,
// //   score,
// //   isFinished,
// //   handleAnswer,
// //   nextQuestion,
// //   prevQuestion,
// //   retryQuiz,
// //   nextLevel,
// //   backToChapters,
// //   currentLevel,
// //   userAnswers = [],
// //   handlePause,
// //   selectedLanguage,
// //   selectedSubtopic
// // }) {
// //   const { t } = useTranslation();
// //   const optionLabels = ["A", "B", "C", "D"];
// //   const passed = score >= 5;
// //   const [exitDialogOpen, setExitDialogOpen] = useState(false);
// //   const [hintsUsed, setHintsUsed] = useState({});
// //   const [hintContent, setHintContent] = useState({});
// //   const [loadingHint, setLoadingHint] = useState(false);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
// //   const {
// //     rewardPoints,
// //     updateRewardPoints,
// //     calculateEarnedPoints,
// //     pointsAwarded,
// //     earnedPoints: contextEarnedPoints
// //   } = useQuiz();
// //   const [localEarnedPoints, setLocalEarnedPoints] = useState({ basePoints: 0, bonusPoints: 0, totalPoints: 0 });
 
// //   const navigate = useNavigate();
 
// //   // Show snackbar notification
// //   const showSnackbar = (message, severity = 'info') => {
// //     setSnackbar({ open: true, message, severity });
// //   };
 
// //   // Handle hint usage for current question
// //   const handleHint = async () => {
// //     if (rewardPoints < 5) {
// //       showSnackbar(t('not_enough_points'), 'warning');
// //       return;
// //     }
 
// //     const currentQuestion = quiz[currentQ];
// //     if (!currentQuestion) return;
 
// //     // If hint is already used for this question, just show it
// //     if (hintsUsed[currentQ]) {
// //       return;
// //     }
 
// //     setLoadingHint(true);
// //     try {
// //       // Mark hint as used for this question
// //       setHintsUsed(prev => ({
// //         ...prev,
// //         [currentQ]: true
// //       }));
 
// //       // Store the hint content
// //       if (currentQuestion.hint) {
// //         setHintContent(prev => ({
// //           ...prev,
// //           [currentQ]: currentQuestion.hint
// //         }));
// //       }
 
// //       // Deduct 5 points when hint is used
// //       const newPoints = rewardPoints - 5;
// //       updateRewardPoints(newPoints);
     
// //       showSnackbar(t('hint_unlocked'), 'success');
     
// //     } catch (error) {
// //       console.error('Error using hint:', error);
// //       showSnackbar(t('hint_error'), 'error');
// //       // Revert hint usage if there was an error
// //       setHintsUsed(prev => {
// //         const newHints = { ...prev };
// //         delete newHints[currentQ];
// //         return newHints;
// //       });
// //     } finally {
// //       setLoadingHint(false);
// //     }
// //   };
 
// //   // Check if hint is used for current question
// //   const isHintUsed = hintsUsed[currentQ] || false;
// //   const currentHint = hintContent[currentQ] || quiz[currentQ]?.hint;
 
// //   // Reset hints when retrying quiz
// //   useEffect(() => {
// //     if (isFinished && retryQuiz) {
// //       setHintsUsed({});
// //       setHintContent({});
// //     }
// //   }, [isFinished, retryQuiz]);
 
// //   // Handle next question with points calculation
// //   const handleNextQuestion = () => {
// //     const earnedPointsResult = nextQuestion();
// //     if (earnedPointsResult) {
// //       setLocalEarnedPoints(earnedPointsResult);
     
// //       // Show success message with points breakdown
// //       const percentage = Math.round((score / quiz.length) * 100);
// //       let pointsMessage = `🎉 ${t('quiz_passed_points', { points: earnedPointsResult.basePoints })}`;
// //       if (earnedPointsResult.bonusPoints > 0) {
// //         pointsMessage += ` + ${t('above_80_bonus_points', { points: earnedPointsResult.bonusPoints })}`;
// //       }
// //       pointsMessage += ` = ${earnedPointsResult.totalPoints} ${t('total_points')}!`;
// //       showSnackbar(pointsMessage, 'success');
// //     }
// //   };
 
// //   // Calculate earned points for display
// //   useEffect(() => {
// //   if (isFinished && passed && calculateEarnedPoints) {
// //     const calculatedPoints = calculateEarnedPoints(score, quiz.length);
// //     setLocalEarnedPoints(calculatedPoints);
 
// //     // ✅ Instantly add earned points to total
// //     updateRewardPoints(prev => {
// //       const total = prev + calculatedPoints.totalPoints;
// //       localStorage.setItem("rewardPoints", total);
// //       return total;
// //     });
 
// //     // ✅ Sync with context (for Navbar and Result)
// //     if (typeof window !== "undefined") {
// //       localStorage.setItem("rewardPoints", rewardPoints + calculatedPoints.totalPoints);
// //     }
 
// //     // ✅ Also update via context method (if defined)
// //     if (typeof calculateEarnedPoints === "function") {
// //       if (typeof updateRewardPoints === "function") {
// //         updateRewardPoints(rewardPoints + calculatedPoints.totalPoints);
// //       }
// //     }
// //   }
// // }, [isFinished, passed, score, quiz.length]);
 
 
// //   useEffect(() => {
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
 
// //     const handleVisibilityChange = () => {
// //       if (document.hidden) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     const handleKeyDown = (e) => {
// //       if (e.key === 'Escape' || e.key === 'F12' || (e.ctrlKey && e.key === 't')) {
// //         e.preventDefault();
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     const handleFullscreenChange = () => {
// //       if (!document.fullscreenElement) {
// //         setExitDialogOpen(true);
// //         handlePause && handlePause();
// //       }
// //     };
 
// //     document.addEventListener('visibilitychange', handleVisibilityChange);
// //     document.addEventListener('keydown', handleKeyDown);
// //     document.addEventListener('fullscreenchange', handleFullscreenChange);
 
// //     return () => {
// //       document.removeEventListener('visibilitychange', handleVisibilityChange);
// //       document.removeEventListener('keydown', handleKeyDown);
// //       document.removeEventListener('fullscreenchange', handleFullscreenChange);
// //     };
// //   }, [handlePause]);
 
// //   const handleExitConfirm = () => {
// //     setExitDialogOpen(false);
// //     if (backToChapters) backToChapters();
// //     else navigate("/chapters");
// //   };
 
// //   const handleExitCancel = () => {
// //     setExitDialogOpen(false);
// //     if (document.fullscreenEnabled) document.documentElement.requestFullscreen().catch(() => {});
// //   };
 
// //   // Top-right reward points display
// //   const RewardPointsDisplay = () => (
// //     <Box sx={{ position: 'absolute', top: 16, right: 100 }}>
// //       <Chip
// //         label={`${t('reward_points_breakdown')}: ${rewardPoints}`}
// //         color="secondary"
// //         sx={{
// //           fontWeight: 'bold',
// //           px: 2,
// //           py: 1,
// //           fontSize: '1rem',
// //           background: 'linear-gradient(45deg, #FFD700, #FFA500)',
// //           color: 'black',
// //           animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
// //         }}
// //       />
// //     </Box>
// //   );
 
// //   if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
// //     return (
// //       <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
// //             <Psychology sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
// //             <Typography variant="h4" gutterBottom color="text.primary">{t('quiz_not_available')}</Typography>
// //             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{t('quiz_data_issue')}</Typography>
// //             <Button variant="contained" size="large" onClick={retryQuiz} startIcon={<Replay />} sx={{ borderRadius: 2, px: 4, py: 1.5, background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)' }}>
// //               {t('retry_quiz')}
// //             </Button>
// //           </Paper>
// //         </Fade>
// //       </Container>
// //     );
// //   }
 
// //   if (isFinished) {
// //     const percentage = Math.round((score / quiz.length) * 100);
// //     const isPerfectScore = score === quiz.length;
// //     const hasBonus = localEarnedPoints.bonusPoints > 0;
// //     const displayEarnedPoints = contextEarnedPoints.totalPoints > 0 ? contextEarnedPoints : localEarnedPoints;
 
// //     return (
// //       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
// //         <RewardPointsDisplay />
// //         <Fade in={true}>
// //           <Box>
// //             <Paper elevation={4} sx={{
// //               p: 4,
// //               textAlign: 'center',
// //               borderRadius: 3,
// //               background: passed ?
// //                 (isPerfectScore ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)') :
// //                 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
// //               color: 'white',
// //               mb: 4
// //             }}>
// //               <Zoom in={true}>
// //                 <Box>
// //                   {passed && isPerfectScore && <EmojiEvents sx={{ fontSize: 80, mb: 2, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />}
// //                   <Typography variant="h3" gutterBottom fontWeight="bold">{t('level')} {currentLevel} {passed ? t('completed') : t('failed')}</Typography>
// //                   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
// //                     <Typography variant="h6">{passed ? (isPerfectScore ? t('perfect_score') : t('great_job')) : t('minimum_score', { score })}</Typography>
// //                   </Box>
 
// //                   {passed && (
// //                     <Box sx={{ mt: 2, mb: 2 }}>
// //                       <Typography variant="h6" sx={{ mb: 1 }}>
// //                         🪙 {t('reward_points')}
// //                       </Typography>
// //                       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
// //                         <Chip
// //                           label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${displayEarnedPoints.basePoints} ${t('points')}`}
// //                           sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
// //                         />
// //                         {hasBonus && (
// //                           <Chip
// //                             label={`${t('above_80_percent_bonus')}: +${displayEarnedPoints.bonusPoints} ${t('points')}`}
// //                             sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
// //                           />
// //                         )}
// //                         <Chip
// //                           label={`${t('total_earned')}: ${displayEarnedPoints.totalPoints} ${t('points')}`}
// //                           sx={{ background: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}
// //                         />
// //                       </Box>
// //                     </Box>
// //                   )}
 
// //                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
// //                     <Chip label={`${score}/${quiz.length}`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={`${percentage}%`} sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '1.5rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                     <Chip label={passed ? t('passed') : t('failed')} color={passed ? "success" : "error"} sx={{ fontSize: '1rem', height: '50px', '& .MuiChip-label': { px: 3 } }} />
// //                   </Box>
                 
// //                   <Chip
// //                     label={`${t('total_RewardPoints')}: ${rewardPoints}`}
// //                     color="secondary"
// //                     sx={{
// //                       mt: 2,
// //                       fontWeight: 'bold',
// //                       fontSize: '1.1rem',
// //                       background: 'linear-gradient(45deg, #FFD700, #FFA500)',
// //                       color: 'black'
// //                     }}
// //                   />
                 
// //                   {!passed && <Alert severity="warning" sx={{ background: 'rgba(255,255,255,0.2)', color: 'white', mt: 2 }}>{t('score_warning')}</Alert>}
// //                 </Box>
// //               </Zoom>
// //             </Paper>
 
// //             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
// //               {t('review_questions_answers')}
// //             </Typography>
 
// //             <List sx={{ mb: 4 }}>
// //               {quiz.map((q, i) => {
// //                 const isCorrect = userAnswers[i] === q?.answer;
// //                 const wasHintUsed = hintsUsed[i];
// //                 return (
// //                   <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                     <Card sx={{ mb: 2, border: isCorrect ? '2px solid #27ae60' : '2px solid #e74c3c', animation: `${slideIn} 0.5s ease-out` }}>
// //                       <CardContent sx={{ p: 3 }}>
// //                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                           <Chip label={`Q${i + 1}`} color={isCorrect ? "success" : "error"} size="small" />
// //                           <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
// //                             {q?.question || t('question_not_available')}
// //                           </Typography>
// //                           {wasHintUsed && (
// //                             <Chip
// //                               icon={<Lightbulb />}
// //                               label="Hint Used"
// //                               color="info"
// //                               size="small"
// //                               variant="outlined"
// //                             />
// //                           )}
// //                         </Box>
 
// //                         <List dense>
// //                           {q?.options?.map((opt, j) => {
// //                             const isSelected = userAnswers[i] === opt;
// //                             const isAnswer = opt === q.answer;
// //                             return (
// //                               <ListItem key={j} sx={{
// //                                 background: isAnswer
// //                                   ? 'linear-gradient(45deg, #27ae60, #2ecc71)'
// //                                   : isSelected && !isAnswer
// //                                   ? 'linear-gradient(45deg, #e74c3c, #c0392b)'
// //                                   : 'transparent',
// //                                 color: isAnswer || (isSelected && !isAnswer) ? 'white' : 'text.primary',
// //                                 borderRadius: 1,
// //                                 mb: 0.5,
// //                                 animation: `${fadeIn} 0.3s ease-out`
// //                               }}>
// //                                 <ListItemIcon sx={{ minWidth: 40 }}>
// //                                   {isAnswer ? <CheckCircle sx={{ color: 'white' }} /> : <RadioButtonUnchecked />}
// //                                 </ListItemIcon>
// //                                 <ListItemText
// //                                   primary={`${optionLabels[j]}. ${opt}`}
// //                                   primaryTypographyProps={{ fontWeight: isAnswer ? 'bold' : 'normal' }}
// //                                 />
// //                               </ListItem>
// //                             );
// //                           })}
// //                         </List>
 
// //                         <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                           <Chip label={`${t('your_answer')}: ${userAnswers[i] || t('not_answered')}`} color={isCorrect ? "success" : "error"} variant="outlined" />
// //                           <Chip label={`${t('correct_answer')}: ${q?.answer || t('not_available')}`} color="success" variant="outlined" />
// //                           {wasHintUsed && (
// //                             <Chip
// //                               label={`${t('hint_used')}`}
// //                               color="info"
// //                               variant="outlined"
// //                               icon={<Lightbulb />}
// //                             />
// //                           )}
// //                         </Box>
 
// //                         {wasHintUsed && q?.hint && (
// //                           <Alert severity="info" sx={{ mt: 2 }}>
// //                             <strong>💡 {t('hint')}:</strong> {q.hint}
// //                           </Alert>
// //                         )}
// //                       </CardContent>
// //                     </Card>
// //                   </Zoom>
// //                 );
// //               })}
// //             </List>
 
// //             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={() => backToChapters && backToChapters()}
// //                 startIcon={<MenuBook />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('back_to_subjects')}
// //               </Button>
 
// //               <Button
// //                 variant="outlined"
// //                 size="large"
// //                 onClick={retryQuiz}
// //                 startIcon={<Replay />}
// //                 sx={{ borderRadius: 2, px: 4, py: 1.5, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
// //               >
// //                 {t('retry_level', { level: currentLevel })}
// //               </Button>
 
// //               {passed && (
// //                 <Button
// //                   variant="contained"
// //                   size="large"
// //                   onClick={nextLevel}
// //                   endIcon={<NavigateNext />}
// //                   sx={{
// //                     borderRadius: 2,
// //                     px: 4,
// //                     py: 1.5,
// //                     background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
// //                     '&:hover': {
// //                       background: 'linear-gradient(45deg, #229954, #27ae60)',
// //                       animation: `${pulse} 0.5s ease-in-out`
// //                     }
// //                   }}
// //                 >
// //                   {t('go_to_level', { level: currentLevel + 1 })}
// //                 </Button>
// //               )}
// //             </Box>
// //           </Box>
// //         </Fade>
// //       </Container>
// //     );
// //   }
 
// //   // Question page rendering
// //   const question = quiz[currentQ];
// //   if (!question) return null;
 
// //   const progress = ((currentQ + 1) / quiz.length) * 100;
 
 
 
 
// //   return (
// //     <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
// //       <RewardPointsDisplay />
// //       <Fade in={true}>
// //         <Box>
// //           {/* Progress */}
// //           <Box sx={{ mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
// //               <Typography variant="body2" color="text.secondary">{t('question_of_total', { current: currentQ + 1, total: quiz.length })}</Typography>
// //               <Chip label={`${t('level')} ${currentLevel}`} color="primary" variant="outlined" />
// //             </Box>
// //             <LinearProgress variant="determinate" value={progress} sx={{
// //               height: 8,
// //               borderRadius: 4,
// //               background: 'linear-gradient(45deg, #dfe6e9, #b2bec3)',
// //               '& .MuiLinearProgress-bar': {
// //                 background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
// //                 borderRadius: 4
// //               }
// //             }} />
// //           </Box>
 
// //           {/* Question Card */}
// //           <Card elevation={4} sx={{
// //             borderRadius: 3,
// //             background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
// //             mb: 3,
// //             animation: `${fadeIn} 0.5s ease-out`
// //           }}>
// //             <CardContent sx={{ p: 4 }}>
// //               <Typography variant="h5" component="div" gutterBottom fontWeight="bold" sx={{ lineHeight: 1.4, color: '#2d3436' }}>
// //                 {currentQ + 1}. {question.question}
// //               </Typography>
             
// //               {/* Hint Section */}
// //               <Box sx={{ mt: 2 }}>
// //                 {!isHintUsed ? (
// //                   <Box>
// //                     <Button
// //                       variant="outlined"
// //                       startIcon={<Lightbulb />}
// //                       onClick={handleHint}
// //                       disabled={rewardPoints < 5 || loadingHint}
// //                       sx={{
// //                         mb: 1,
// //                         '&:disabled': {
// //                           opacity: 0.6,
// //                           color: 'text.disabled'
// //                         }
// //                       }}
// //                     >
// //                       {loadingHint ? t('loading_hint') : t('use_hint_for_5_points')}
// //                     </Button>
// //                     {rewardPoints < 5 && (
// //                       <Typography variant="body2" color="error" sx={{ ml: 1 }}>
// //                         {t('not_enough_points_for_hint')}
// //                       </Typography>
// //                     )}
// //                   </Box>
// //                 ) : (
// //                   <Alert severity="info" sx={{ mt: 2 }}>
// //                     <strong>💡 {t('hint')}:</strong> {currentHint || t('no_hint_available')}
// //                   </Alert>
// //                 )}
// //               </Box>
// //             </CardContent>
// //           </Card>
 
// //           {/* Options */}
// //           <Box sx={{ display: 'grid', gap: 2, mb: 4 }}>
// //             {question.options?.map((opt, i) => {
// //               const isSelected = selected === opt;
// //               return (
// //                 <Zoom in={true} key={i} style={{ transitionDelay: `${i * 100}ms` }}>
// //                   <Button
// //                     fullWidth
// //                     variant={isSelected ? "contained" : "outlined"}
// //                     onClick={() => handleAnswer(opt)}
// //                     startIcon={<Box sx={{
// //                       width: 30,
// //                       height: 30,
// //                       borderRadius: '50%',
// //                       background: isSelected ? 'white' : 'primary.main',
// //                       color: isSelected ? 'primary.main' : 'white',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       fontSize: '0.9rem',
// //                       fontWeight: 'bold',
// //                       border: isSelected ? '2px solid' : 'none',
// //                       borderColor: isSelected ? 'primary.main' : 'transparent'
// //                     }}>{optionLabels[i]}</Box>}
// //                     sx={{
// //                       py: 2.5,
// //                       borderRadius: 2,
// //                       borderWidth: isSelected ? 0 : 2,
// //                       textTransform: 'none',
// //                       justifyContent: 'flex-start',
// //                       fontSize: '1rem',
// //                       fontWeight: 600,
// //                       background: isSelected ? 'linear-gradient(45deg, #6c5ce7, #a29bfe)' : 'transparent',
// //                       color: isSelected ? 'white' : 'text.primary',
// //                       '&:hover': {
// //                         borderWidth: 2,
// //                         background: isSelected ? 'linear-gradient(45deg, #5b4cd8, #9188fd)' : 'rgba(108, 92, 231, 0.04)'
// //                       },
// //                       transition: 'all 0.3s ease',
// //                       animation: `${fadeIn} 0.3s ease-out`
// //                     }}
// //                   >
// //                     {opt}
// //                   </Button>
// //                 </Zoom>
// //               );
// //             })}
// //           </Box>
 
// //           {/* Navigation */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
// //             <Button
// //               variant="outlined"
// //               size="large"
// //               onClick={prevQuestion}
// //               disabled={currentQ === 0}
// //               startIcon={<NavigateBefore />}
// //               sx={{
// //                 borderRadius: 2,
// //                 px: 4,
// //                 py: 1.5,
// //                 minWidth: '140px',
// //                 borderWidth: 2,
// //                 '&:hover': { borderWidth: 2 },
// //                 '&:disabled': {
// //                   opacity: 0.5,
// //                   borderColor: 'rgba(0, 0, 0, 0.12)',
// //                   color: 'rgba(0, 0, 0, 0.26)'
// //                 }
// //               }}
// //             >
// //               {t('previous')}
// //             </Button>
// //             <Button
// //               variant="contained"
// //               size="large"
// //               onClick={handleNextQuestion}
// //               endIcon={<NavigateNext />}
// //               sx={{
// //                 borderRadius: 2,
// //                 px: 6,
// //                 py: 1.5,
// //                 minWidth: '140px',
// //                 fontSize: '1.1rem',
// //                 background: 'linear-gradient(45deg, #00b894, #00cec9)',
// //                 '&:hover': {
// //                   background: 'linear-gradient(45deg, #00a085, #00b894)',
// //                   transform: 'translateY(-2px)',
// //                   boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
// //                 }
// //               }}
// //             >
// //               {currentQ + 1 === quiz.length ? t('submit') : t('next')}
// //             </Button>
// //           </Box>
// //         </Box>
// //       </Fade>
 
// //       {/* Exit Confirmation Dialog */}
// //       <Dialog open={exitDialogOpen} onClose={handleExitCancel}>
// //         <DialogTitle>{t('exit_quiz')}</DialogTitle>
// //         <DialogContent>
// //           <Typography>{t('exit_quiz_confirmation')}</Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleExitCancel}>{t('cancel')}</Button>
// //           <Button onClick={handleExitConfirm} color="error">{t('exit')}</Button>
// //         </DialogActions>
// //       </Dialog>
 
// //       {/* Snackbar for notifications */}
// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={4000}
// //         onClose={() => setSnackbar({ ...snackbar, open: false })}
// //         message={snackbar.message}
// //       />
// //     </Container>
// //   );
// // }
 
// // export default QuizQuestion;
 




















 

 
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
//   Snackbar
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
//   Lightbulb
// } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useQuiz } from './QuizContext';
 
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
//   selectedSubtopic
// }) {
//   const { t } = useTranslation();
//   const optionLabels = ["A", "B", "C", "D"];
//   const passed = score >= 5;
//   const [exitDialogOpen, setExitDialogOpen] = useState(false);
//   const [hintsUsed, setHintsUsed] = useState({});
//   const [hintContent, setHintContent] = useState({});
//   const [loadingHint, setLoadingHint] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
//   const {
//     rewardPoints,
//     updateRewardPoints,
//     calculateEarnedPoints,
//     pointsAwarded,
//     earnedPoints: contextEarnedPoints
//   } = useQuiz();
//   const [localEarnedPoints, setLocalEarnedPoints] = useState({ basePoints: 0, bonusPoints: 0, totalPoints: 0 });
 
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
 
//       // Deduct 5 points when hint is used
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
//     }
//   }, [isFinished, retryQuiz]);
 
//   // Handle next question with points calculation
//   const handleNextQuestion = () => {
//     const earnedPointsResult = nextQuestion();
//     if (earnedPointsResult) {
//       setLocalEarnedPoints(earnedPointsResult);
     
//       // Show success message with points breakdown
//       const percentage = Math.round((score / quiz.length) * 100);
//       let pointsMessage = `🎉 ${t('quiz_passed_points', { points: earnedPointsResult.basePoints })}`;
//       if (earnedPointsResult.bonusPoints > 0) {
//         pointsMessage += ` + ${t('above_80_bonus_points', { points: earnedPointsResult.bonusPoints })}`;
//       }
//       pointsMessage += ` = ${earnedPointsResult.totalPoints} ${t('total_points')}!`;
//       showSnackbar(pointsMessage, 'success');
//     }
//   };
 
//   // Calculate earned points for display
//   useEffect(() => {
//   if (isFinished && passed && calculateEarnedPoints) {
//     const calculatedPoints = calculateEarnedPoints(score, quiz.length);
//     setLocalEarnedPoints(calculatedPoints);
 
//     // ✅ Instantly add earned points to total
//     updateRewardPoints(prev => {
//       const total = prev + calculatedPoints.totalPoints;
//       localStorage.setItem("rewardPoints", total);
//       return total;
//     });
 
//     // ✅ Sync with context (for Navbar and Result)
//     if (typeof window !== "undefined") {
//       localStorage.setItem("rewardPoints", rewardPoints + calculatedPoints.totalPoints);
//     }
 
//     // ✅ Also update via context method (if defined)
//     if (typeof calculateEarnedPoints === "function") {
//       if (typeof updateRewardPoints === "function") {
//         updateRewardPoints(rewardPoints + calculatedPoints.totalPoints);
//       }
//     }
//   }
// }, [isFinished, passed, score, quiz.length]);
 
 
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
 
//   // Top-right reward points display
//   const RewardPointsDisplay = () => (
//     <Box sx={{ position: 'absolute', top: 16, right: 100 }}>
//       <Chip
//         label={`${t('Reward points')}: ${rewardPoints}`}
//         color="secondary"
//         sx={{
//           fontWeight: 'bold',
//           px: 2,
//           py: 1,
//           fontSize: '1rem',
//           background: 'linear-gradient(45deg, #FFD700, #FFA500)',
//           color: 'black',
//           animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
//         }}
//       />
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
//     const hasBonus = localEarnedPoints.bonusPoints > 0;
//     const displayEarnedPoints = contextEarnedPoints.totalPoints > 0 ? contextEarnedPoints : localEarnedPoints;
 
//     return (
//       <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
//         <RewardPointsDisplay />
//         <Fade in={true}>
//           <Box>
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
//                           label={`${t('correct_answers')}: ${score} × 1 ${t('point')} = ${displayEarnedPoints.basePoints} ${t('points')}`}
//                           sx={{ background: 'rgba(255,255,255,0.3)', color: 'white' }}
//                         />
//                         {hasBonus && (
//                           <Chip
//                             label={`${t('above_80_percent_bonus')}: +${displayEarnedPoints.bonusPoints} ${t('points')}`}
//                             sx={{ background: 'rgba(255,215,0,0.3)', color: 'gold' }}
//                           />
//                         )}
//                         <Chip
//                           label={`${t('total_earned')}: ${displayEarnedPoints.totalPoints} ${t('points')}`}
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
 
//             <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
//               {t('review_questions_answers')}
//             </Typography>
 
//             <List sx={{ mb: 4 }}>
//               {quiz.map((q, i) => {
//                 const isCorrect = userAnswers[i] === q?.answer;
//                 const wasHintUsed = hintsUsed[i];
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
  Snackbar
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
  Lightbulb
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuiz } from './QuizContext';
 
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
  selectedSubtopic
}) {
  const { t } = useTranslation();
  const optionLabels = ["A", "B", "C", "D"];
  const passed = score >= 5;
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [hintsUsed, setHintsUsed] = useState({});
  const [hintContent, setHintContent] = useState({});
  const [loadingHint, setLoadingHint] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const {
    rewardPoints,
    updateRewardPoints,
    calculateEarnedPoints,
    earnedPoints: contextEarnedPoints,
    resetPointsAwarded,
    hasAwardedPoints
  } = useQuiz();
  
  const [showPointsMessage, setShowPointsMessage] = useState(false);
 
  const navigate = useNavigate();
 
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
 
      // Use global updateRewardPoints to deduct points
      const newPoints = rewardPoints - 5;
      updateRewardPoints(newPoints);
     
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
    }
  }, [isFinished, retryQuiz, resetPointsAwarded]);
 
  // Handle next question
  const handleNextQuestion = () => {
    nextQuestion();
  };
 
  // Show points message only once when quiz is finished
  useEffect(() => {
    if (isFinished && passed && !showPointsMessage) {
      const percentage = Math.round((score / quiz.length) * 100);
      
      // Show success message with points breakdown
      let pointsMessage = `🎉 ${t('quiz_passed_points', { points: contextEarnedPoints.basePoints })}`;
      if (contextEarnedPoints.bonusPoints > 0) {
        pointsMessage += ` + ${t('above_80_bonus_points', { points: contextEarnedPoints.bonusPoints })}`;
      }
      pointsMessage += ` = ${contextEarnedPoints.totalPoints} ${t('total_points')}!`;
      
      showSnackbar(pointsMessage, 'success');
      setShowPointsMessage(true);
    }
  }, [isFinished, passed, score, quiz.length, contextEarnedPoints, t, showPointsMessage]);

  // Sync reward points from localStorage and other components
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
 
  // Top-right reward points display
  const RewardPointsDisplay = () => (
    <Box sx={{ position: 'absolute', top: 16, right: 100 }}>
      <Chip
        label={`${t('⭐')}: ${rewardPoints}`}
        color="secondary"
        sx={{
          fontWeight: 'bold',
          px: 2,
          py: 1,
          fontSize: '1rem',
          background: 'linear-gradient(45deg, #5900ffff, #3700ffff)',
          color: 'black',
          animation: rewardPoints > 0 ? `${pulse} 2s infinite` : 'none'
        }}
      />
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
        <Fade in={true}>
          <Box>
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
 
            <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
              {t('review_questions_answers')}
            </Typography>
 
            <List sx={{ mb: 4 }}>
              {quiz.map((q, i) => {
                const isCorrect = userAnswers[i] === q?.answer;
                const wasHintUsed = hintsUsed[i];
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