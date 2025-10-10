// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { 
//   CheckCircle, 
//   FileText, 
//   MessageCircle, 
//   X,
//   AlertCircle,
//   Play,
//   Send,
//   Bot,
//   User,
//   Calendar,
//   StickyNote,
//   Plus,
//   Trash2,
//   MoreHorizontal,
//   Clock,
//   Copy,
//   Check
// } from 'lucide-react';

// const LessonPage = () => {
//   const { class: classNumber, subject, chapterNumber } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const videoRef = useRef(null);
//   const chatContainerRef = useRef(null);
//   const textareaRef = useRef(null);
//   const [isVideoCompleted, setIsVideoCompleted] = useState(false);
//   const [showPdf, setShowPdf] = useState(false);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [quizScore, setQuizScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [remainingChances, setRemainingChances] = useState(3);
  
//   // AI Assistant States
//   const [chatMessages, setChatMessages] = useState([]);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showQuickActions, setShowQuickActions] = useState(true);
//   const [copiedMessageId, setCopiedMessageId] = useState(null);

//   // Sticky Notes States
//   const [stickyNotes, setStickyNotes] = useState([]);
//   const [activeNoteId, setActiveNoteId] = useState(null);
//   const [showNotesList, setShowNotesList] = useState(false);
//   const [savedMessage, setSavedMessage] = useState(false);

//   // Active Tab State
//   const [activeTab, setActiveTab] = useState('chat');
//   const [showHistory, setShowHistory] = useState(false);

//   // Centralized state for the checklist
//   const [checklistStatus, setChecklistStatus] = useState({
//     videoWatched: false,
//     practiceAttempted: false,
//     quizPassed: false
//   });

//   const queryParams = new URLSearchParams(location.search);
//   const chapterTitle = queryParams.get('chapterTitle') || `Chapter ${chapterNumber}`;
//   const subtopicName = queryParams.get('subtopic');

//   const getChapterKey = () => `quiz_chances_${classNumber}_${subject}_${chapterNumber}`;
//   const getChapterDateKey = () => `quiz_date_${classNumber}_${subject}_${chapterNumber}`;
//   const getNotesKey = () => `sticky_notes_${classNumber}_${subject}_${chapterNumber}`;
//   const getHistoryKey = () => `chat_history_${classNumber}_${subject}_${chapterNumber}`;

//   useEffect(() => {
//     const today = new Date().toDateString();
//     const chapterKey = getChapterKey();
//     const chapterDateKey = getChapterDateKey();
    
//     const storedDate = sessionStorage.getItem(chapterDateKey);
//     const storedChances = sessionStorage.getItem(chapterKey);
    
//     if (storedDate === today) {
//       setRemainingChances(parseInt(storedChances) || 3);
//     } else {
//       setRemainingChances(3);
//       sessionStorage.setItem(chapterKey, '3');
//       sessionStorage.setItem(chapterDateKey, today);
//     }

//     const savedNotes = sessionStorage.getItem(getNotesKey());
//     if (savedNotes) {
//       const parsed = JSON.parse(savedNotes);
//       setStickyNotes(parsed.length > 0 ? parsed : [{ id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() }]);
//       if (parsed.length > 0) {
//         setActiveNoteId(parsed[0].id);
//       }
//     } else {
//       const initialNote = { id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() };
//       setStickyNotes([initialNote]);
//       setActiveNoteId(initialNote.id);
//     }

//     // Load chat history
//     const savedHistory = sessionStorage.getItem(getHistoryKey());
//     if (savedHistory) {
//       setChatHistory(JSON.parse(savedHistory));
//     }
//   }, [classNumber, subject, chapterNumber]);

//   useEffect(() => {
//     if (isVideoCompleted) {
//       setChecklistStatus(prev => ({ ...prev, videoWatched: true }));
//     }
//   }, [isVideoCompleted]);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatMessages, isLoading]);

//   const currentLesson = {
//     title: chapterTitle,
//     subtopic: subtopicName,
//     file: `/videos/${subject}/chapter-${chapterNumber}.mp4`,
//     pdf: `/pdfs/${subject}/chapter-${chapterNumber}.pdf`,
//     about: `Learn about ${subject} concepts in ${chapterTitle}${subtopicName ? ` - ${subtopicName}` : ''}. This ${subtopicName ? 'subtopic' : 'chapter'} covers important topics that will help you build a strong foundation.`
//   };

//   const checklistItems = [
//     { id: 1, task: `Watch full video of ${currentLesson.title}`, status: checklistStatus.videoWatched ? "completed" : "in-progress" },
//     { id: 2, task: "Attempt practice quiz", status: checklistStatus.practiceAttempted ? "completed" : "pending" },
//   ];

//   const practiceQuestions = [
//     { id: 1, question: `Practice questions for ${currentLesson.title}` },
//   ];

//   const handleVideoEnd = () => {
//     setIsVideoCompleted(true);
//   };

//   const handleStartQuiz = () => {
//     if (remainingChances > 0) {
//       setShowQuiz(true);
//       setCurrentQuestionIndex(0);
//       setSelectedAnswer(null);
//       setQuizScore(0);
//       setQuizCompleted(false);
//     }
//   };

//   const handleAnswerSelect = (index) => {
//     setSelectedAnswer(index);
//   };

//   const handleNextQuestion = () => {
//     if (selectedAnswer === 0) {
//       setQuizScore(prevScore => prevScore + 1);
//     }
//     if (currentQuestionIndex < 2) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null);
//     } else {
//       setQuizCompleted(true);
//       const newChances = remainingChances - 1;
//       setRemainingChances(newChances);
      
//       const chapterKey = getChapterKey();
//       sessionStorage.setItem(chapterKey, newChances.toString());
      
//       const isPassed = quizScore >= 2;
//       setChecklistStatus(prev => ({
//         ...prev,
//         practiceAttempted: true,
//         quizPassed: isPassed
//       }));
//     }
//   };

//   const handleCloseQuiz = () => {
//     setShowQuiz(false);
//   };

//   const handleRetryQuiz = () => {
//     if (remainingChances > 0) {
//       setCurrentQuestionIndex(0);
//       setSelectedAnswer(null);
//       setQuizScore(0);
//       setQuizCompleted(false);
//     }
//   };

//   const sendMessage = async () => {
//     if (!userInput.trim() || isLoading) return;

//     const userMessage = {
//       id: Date.now(),
//       type: 'user',
//       content: userInput.trim(),
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setChatMessages(prev => [...prev, userMessage]);
//     setUserInput('');
//     setIsLoading(true);
//     setShowQuickActions(false);

//     try {
//       const response = await fetch('http://localhost:8000/ai-assistant/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           class_level: `Class ${classNumber}`,
//           subject: subject,
//           chapter: currentLesson.title,
//           student_question: userInput,
//           chat_history: chatMessages
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         const aiMessage = {
//           id: Date.now() + 1,
//           type: 'assistant',
//           content: data.response,
//           messageType: data.type,
//           timestamp: new Date().toLocaleTimeString()
//         };
//         setChatMessages(prev => {
//           const newMessages = [...prev, aiMessage];
//           // Save to history
//           const historyEntry = {
//             id: Date.now(),
//             userMessage: userMessage.content,
//             aiResponse: aiMessage.content,
//             timestamp: new Date().toLocaleString()
//           };
//           const updatedHistory = [historyEntry, ...chatHistory];
//           setChatHistory(updatedHistory);
//           sessionStorage.setItem(getHistoryKey(), JSON.stringify(updatedHistory));
//           return newMessages;
//         });
//       } else {
//         throw new Error('Failed to get response');
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       const errorMessage = {
//         id: Date.now() + 1,
//         type: 'assistant',
//         content: "I'm sorry, I'm having trouble responding right now. Please try again later.",
//         messageType: 'error',
//         timestamp: new Date().toLocaleTimeString()
//       };
//       setChatMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleQuickAction = async (actionType) => {
//     const topicText = subtopicName ? ` - ${subtopicName}` : '';
//     const messages = {
//       study_plan: `Can you create a study plan with topics for ${currentLesson.title}${topicText} in ${subject}?`,
//       notes: `Please provide comprehensive notes on ${currentLesson.title}${topicText} in ${subject}`,
//     };

//     const message = messages[actionType];
//     setUserInput(message);
//     setTimeout(() => {
//       sendMessage();
//     }, 100);
//   };

//   const clearChat = () => {
//     setChatMessages([]);
//     setShowQuickActions(true);
//   };

//   const copyToClipboard = async (content, messageId) => {
//     try {
//       await navigator.clipboard.writeText(content);
//       setCopiedMessageId(messageId);
//       setTimeout(() => setCopiedMessageId(null), 2000);
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   const addNewNote = () => {
//     const newNote = {
//       id: Date.now(),
//       content: '',
//       color: getRandomColor(),
//       timestamp: new Date().toLocaleString()
//     };
//     setStickyNotes(prev => [...prev, newNote]);
//     setActiveNoteId(newNote.id);
//     setShowNotesList(false);
//   };

//   const deleteNote = (id) => {
//     if (stickyNotes.length === 1) {
//       const newNote = { id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() };
//       setStickyNotes([newNote]);
//       setActiveNoteId(newNote.id);
//       sessionStorage.setItem(getNotesKey(), JSON.stringify([newNote]));
//     } else {
//       const updatedNotes = stickyNotes.filter(note => note.id !== id);
//       setStickyNotes(updatedNotes);
//       if (activeNoteId === id) {
//         setActiveNoteId(updatedNotes[0].id);
//       }
//       sessionStorage.setItem(getNotesKey(), JSON.stringify(updatedNotes));
//     }
//   };

//   const updateNoteContent = (id, content) => {
//     setStickyNotes(prev => prev.map(note => 
//       note.id === id ? { ...note, content, timestamp: new Date().toLocaleString() } : note
//     ));
//   };

//   const saveNote = () => {
//     sessionStorage.setItem(getNotesKey(), JSON.stringify(stickyNotes));
//     setSavedMessage(true);
//     setTimeout(() => setSavedMessage(false), 2000);
//   };

//   const selectNote = (id) => {
//     setActiveNoteId(id);
//     setShowNotesList(false);
//   };

//   const getRandomColor = () => {
//     const colors = ['#fef3c7', '#fecaca', '#ddd6fe', '#bfdbfe', '#a7f3d0', '#fecdd3', '#fed7aa'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const formatResponse = (content) => {
//     return content.split('\n').map((line, index) => {
//       if (line.startsWith('# ')) {
//         return <h4 key={index} className="ai-response-heading">{line.replace('# ', '')}</h4>;
//       } else if (line.startsWith('## ')) {
//         return <h5 key={index} className="ai-response-subheading">{line.replace('## ', '')}</h5>;
//       } else if (line.startsWith('- ') || line.startsWith('• ')) {
//         return <div key={index} className="ai-response-list-item">• {line.replace(/^[-•]\s*/, '')}</div>;
//       } else if (line.trim() === '') {
//         return <br key={index} />;
//       } else {
//         return <div key={index} className="ai-response-text">{line}</div>;
//       }
//     });
//   };

//   const demoQuestions = [
//     {
//       question: `What is the main topic covered in ${currentLesson.title}?`,
//       options: ["Basic Concepts", "Advanced Applications", "Historical Context", "All of the above"],
//       correctAnswer: 3
//     },
//     {
//       question: "Which of the following best describes the learning objectives?",
//       options: ["Memorization", "Conceptual Understanding", "Practical Application", "Both B and C"],
//       correctAnswer: 3
//     },
//     {
//       question: "What should you focus on while studying this chapter?",
//       options: ["Key Definitions", "Problem Solving", "Real-world Applications", "All of the above"],
//       correctAnswer: 3
//     }
//   ];

//   const activeNote = stickyNotes.find(note => note.id === activeNoteId);

//   return (
//     <>
//       <style>
//         {`
//           * {
//             box-sizing: border-box;
//           }
          
//           .lesson-content {
//             display: flex;
//             gap: 24px;
//             padding: 24px;
//           }
//           .lesson-left {
//             flex: 2;
//             min-width: 0;
//           }
//           .lesson-right {
//             width: 500px;
//             min-width: 500px;
//           }
//           @media (max-width: 1200px) {
//             .lesson-content {
//               flex-direction: column;
//               gap: 0;
//               padding: 12px;
//             }
//             .lesson-left,
//             .lesson-right {
//               width: 100%;
//               min-width: 0;
//             }
//             .lesson-right {
//               margin-top: 20px;
//             }
//           }
//           video::-webkit-media-controls-download-button {
//             display: none;
//           }
//           video {
//             controlsList: "nodownload";
//           }
//           @keyframes bounce {
//             0%, 80%, 100% { transform: scale(0); }
//             40% { transform: scale(1); }
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           @keyframes fadeOut {
//             from { opacity: 1; }
//             to { opacity: 0; }
//           }
//           .lesson-pdf-frame {
//             width: 100% !important;
//             min-height: 400px !important;
//             max-height: 75vh !important;
//             border: 1px solid #e5e7eb !important;
//             border-radius: 8px !important;
//             background: white !important;
//           }
//           .lesson-header-subtitle {
//             font-size: 14px;
//             color: #6b7280;
//             margin-top: 4px;
//             font-weight: 500;
//           }
//           .lesson-header-title {
//             display: flex;
//             flex-direction: column;
//             gap: 2px;
//           }

//           .ai-assistant-container {
//             background: white;
//             border-radius: 12px;
//             box-shadow: 0 2px 12px rgba(0,0,0,0.08);
//             border: 1px solid #e5e7eb;
//             height: 700px;
//             display: flex;
//             flex-direction: column;
//             overflow: hidden;
//           }

//           .tab-navigation {
//             display: flex;
//             border-bottom: 2px solid #f1f5f9;
//             background: #fafbfc;
//           }

//           .tab-button {
//             flex: 1;
//             padding: 16px 20px;
//             background: none;
//             border: none;
//             border-bottom: 3px solid transparent;
//             color: #64748b;
//             font-size: 14px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.2s;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 8px;
//           }

//           .tab-button.active {
//             color: #0f766e;
//             border-bottom-color: #0f766e;
//             background: white;
//           }

//           .tab-button:hover {
//             background: #f8fafc;
//           }

//           .ai-chat-container {
//             flex: 1;
//             overflow-y: auto;
//             padding: 16px;
//             background: #fafbfc;
//             display: flex;
//             flex-direction: column;
//             gap: 16px;
//           }

//           .ai-chat-welcome {
//             text-align: center;
//             padding: 30px 20px;
//             color: #64748b;
//           }

//           .ai-chat-message {
//             display: flex;
//             gap: 12px;
//             max-width: 100%;
//           }

//           .ai-chat-message.user {
//             flex-direction: row-reverse;
//           }

//           .ai-avatar {
//             width: 36px;
//             height: 36px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-shrink: 0;
//           }

//           .ai-avatar.user {
//             background: #0f766e;
//           }

//           .ai-avatar.assistant {
//             background: #ec4899;
//           }

//           .ai-message-bubble {
//             max-width: 85%;
//             padding: 14px 18px;
//             border-radius: 18px;
//             line-height: 1.5;
//             font-size: 14px;
//             box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//             position: relative;
//           }

//           .ai-message-bubble.user {
//             background: #0f766e;
//             color: white;
//             border-bottom-right-radius: 6px;
//           }

//           .ai-message-bubble.assistant {
//             background: white;
//             color: #1e293b;
//             border: 1px solid #e2e8f0;
//             border-bottom-left-radius: 6px;
//           }

//           .ai-message-timestamp {
//             font-size: 11px;
//             margin-top: 6px;
//             opacity: 0.7;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//           }

//           .copy-btn {
//             background: none;
//             border: none;
//             cursor: pointer;
//             padding: 4px;
//             display: flex;
//             align-items: center;
//             gap: 4px;
//             color: inherit;
//             opacity: 0.7;
//             transition: opacity 0.2s;
//             font-size: 11px;
//           }

//           .copy-btn:hover {
//             opacity: 1;
//           }

//           .copy-btn.copied {
//             color: #10b981;
//             opacity: 1;
//           }

//           .ai-quick-actions {
//             padding: 16px 20px;
//             border-top: 1px solid #f1f5f9;
//             background: white;
//           }

//           .ai-quick-actions-title {
//             font-size: 13px;
//             color: #64748b;
//             margin-bottom: 12px;
//             font-weight: 500;
//           }

//           .ai-quick-actions-grid {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 8px;
//           }

//           .ai-quick-action-btn {
//             display: flex;
//             align-items: center;
//             gap: 6px;
//             padding: 10px 12px;
//             background: #f8fafc;
//             color: #0f766e;
//             border: 1px solid #e2e8f0;
//             border-radius: 8px;
//             font-size: 12px;
//             cursor: pointer;
//             transition: all 0.2s;
//             font-weight: 500;
//           }

//           .ai-quick-action-btn:hover {
//             background: #f0fdfa;
//             border-color: #0f766e;
//             transform: translateY(-1px);
//           }

//           .ai-input-container {
//             padding: 16px 20px;
//             border-top: 1px solid #f1f5f9;
//             background: white;
//           }

//           .ai-input-wrapper {
//             display: flex;
//             gap: 12px;
//             align-items: flex-end;
//           }

//           .ai-textarea {
//             flex: 1;
//             border: 1px solid #d1d5db;
//             border-radius: 12px;
//             padding: 12px 16px;
//             font-size: 14px;
//             resize: none;
//             font-family: inherit;
//             line-height: 1.5;
//             background: #fafafa;
//             transition: all 0.2s;
//             min-height: 44px;
//             max-height: 120px;
//           }

//           .ai-textarea:focus {
//             outline: none;
//             border-color: #0f766e;
//             background: white;
//             box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1);
//           }

//           .ai-send-btn {
//             background: #0f766e;
//             color: white;
//             border: none;
//             border-radius: 10px;
//             padding: 12px 16px;
//             cursor: pointer;
//             display: flex;
//             align-items: center;
//             gap: 6px;
//             font-size: 14px;
//             font-weight: 500;
//             transition: all 0.2s;
//             min-height: 44px;
//           }

//           .ai-send-btn:hover:not(:disabled) {
//             background: #0d645e;
//             transform: translateY(-1px);
//           }

//           .ai-send-btn:disabled {
//             background: #9ca3af;
//             cursor: not-allowed;
//           }

//           .ai-response-heading {
//             color: #0f766e;
//             margin: 8px 0;
//             font-size: 15px;
//             font-weight: 600;
//           }

//           .ai-response-subheading {
//             color: #0f766e;
//             margin: 6px 0;
//             font-size: 14px;
//             font-weight: 600;
//           }

//           .ai-response-list-item {
//             margin: 4px 0;
//             padding-left: 16px;
//           }

//           .ai-response-text {
//             margin: 4px 0;
//             line-height: 1.5;
//           }

//           .ai-typing-indicator {
//             display: flex;
//             align-items: center;
//             gap: 12px;
//           }

//           .ai-typing-dots {
//             display: flex;
//             gap: 4px;
//           }

//           .ai-typing-dot {
//             width: 8px;
//             height: 8px;
//             border-radius: 50%;
//             background: #9ca3af;
//             animation: bounce 1.4s infinite ease-in-out;
//           }

//           .ai-typing-dot:nth-child(1) { animation-delay: -0.32s; }
//           .ai-typing-dot:nth-child(2) { animation-delay: -0.16s; }

//           .sticky-notes-wrapper {
//             flex: 1;
//             display: flex;
//             flex-direction: column;
//             overflow: hidden;
//             position: relative;
//           }

//           .sticky-note-header {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 12px 16px;
//             border-bottom: 1px solid rgba(0,0,0,0.1);
//           }

//           .note-add-btn {
//             background: none;
//             border: none;
//             cursor: pointer;
//             padding: 6px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 4px;
//             transition: background 0.2s;
//           }

//           .note-add-btn:hover {
//             background: rgba(0,0,0,0.05);
//           }

//           .note-menu-btn {
//             background: none;
//             border: none;
//             cursor: pointer;
//             padding: 6px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 4px;
//             transition: background 0.2s;
//             position: relative;
//           }

//           .note-menu-btn:hover {
//             background: rgba(0,0,0,0.05);
//           }

//           .note-close-btn {
//             background: none;
//             border: none;
//             cursor: pointer;
//             padding: 6px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 4px;
//             transition: background 0.2s;
//             color: #6b7280;
//           }

//           .note-close-btn:hover {
//             background: rgba(220, 38, 38, 0.1);
//             color: #dc2626;
//           }

//           .sticky-note-content-wrapper {
//             flex: 1;
//             padding: 16px;
//             overflow-y: auto;
//           }

//           .sticky-note-textarea {
//             width: 100%;
//             height: 100%;
//             border: none;
//             outline: none;
//             background: transparent;
//             resize: none;
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             font-size: 14px;
//             line-height: 1.6;
//             color: #1f2937;
//           }

//           .sticky-note-textarea::placeholder {
//             color: rgba(0,0,0,0.3);
//           }

//           .saved-message {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             background: rgba(16, 185, 129, 0.95);
//             color: white;
//             padding: 12px 24px;
//             border-radius: 8px;
//             font-size: 14px;
//             font-weight: 500;
//             animation: fadeIn 0.3s, fadeOut 0.3s 1.7s;
//             z-index: 10;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//           }

//           .notes-list-modal {
//             position: absolute;
//             top: 50px;
//             right: 16px;
//             background: white;
//             border-radius: 8px;
//             box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//             border: 1px solid #e5e7eb;
//             width: 300px;
//             max-height: 400px;
//             overflow-y: auto;
//             z-index: 100;
//           }

//           .notes-list-header {
//             padding: 12px 16px;
//             border-bottom: 1px solid #e5e7eb;
//             font-weight: 600;
//             color: #1f2937;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//           }

//           .note-list-item {
//             padding: 12px 16px;
//             border-bottom: 1px solid #f3f4f6;
//             cursor: pointer;
//             transition: background 0.2s;
//           }

//           .note-list-item:hover {
//             background: #f9fafb;
//           }

//           .note-list-item.active {
//             background: #f0fdfa;
//             border-left: 3px solid #0f766e;
//           }

//           .note-preview {
//             font-size: 13px;
//             color: #4b5563;
//             margin-bottom: 4px;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }

//           .note-timestamp {
//             font-size: 11px;
//             color: #9ca3af;
//             display: flex;
//             align-items: center;
//             gap: 4px;
//           }

//           .clear-chat-btn {
//             background: none;
//             border: none;
//             color: #64748b;
//             fontSize: 12px;
//             cursor: pointer;
//             textDecoration: underline;
//             fontWeight: 500;
//             padding: 8px 16px;
//           }

//           .clear-chat-btn:hover {
//             color: #0f766e;
//           }

//           .history-modal {
//             position: fixed;
//             top: 120px;
//             right: 20px;
//             background: white;
//             border-radius: 8px;
//             box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//             border: 1px solid #e5e7eb;
//             width: 400px;
//             max-height: 500px;
//             overflow-y: auto;
//             z-index: 1001;
//           }

//           .history-header {
//             padding: 16px;
//             border-bottom: 1px solid #e5e7eb;
//             font-weight: 600;
//             color: #1f2937;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//           }

//           .history-item {
//             padding: 12px 16px;
//             border-bottom: 1px solid #f3f4f6;
//             cursor: pointer;
//             transition: background 0.2s;
//           }

//           .history-item:hover {
//             background: #f9fafb;
//           }

//           .history-question {
//             font-size: 13px;
//             color: #1f2937;
//             font-weight: 500;
//             margin-bottom: 6px;
//           }

//           .history-answer {
//             font-size: 12px;
//             color: #6b7280;
//             margin-bottom: 6px;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//           }

//           .history-time {
//             font-size: 11px;
//             color: #9ca3af;
//           }
//         `}
//       </style>
      
//       <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//         <div style={{ 
//           backgroundColor: 'white', 
//           padding: '100px 32px', 
//           borderBottom: '1px solid #e5e7eb',
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           gap: '16px' 
//         }}>
//           <div className="lesson-header-title" style={{ textAlign: 'center' }}>
//             <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
//               {subject} • {currentLesson.title}
//             </h1>
//             {currentLesson.subtopic && (
//               <div className="lesson-header-subtitle">
//                 Topic: {currentLesson.subtopic}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="lesson-content">
//           <div className="lesson-left">
//             <div style={{ marginBottom: '24px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
//                 {currentLesson.subtopic ? `Video: ${currentLesson.subtopic}` : `Video: ${currentLesson.title}`}
//               </h2>
//               <video
//                 ref={videoRef}
//                 src={currentLesson.file}
//                 controls
//                 controlsList="nodownload"
//                 width="100%"
//                 style={{ borderRadius: "8px", backgroundColor: "#000", marginTop: "12px" }}
//                 onEnded={handleVideoEnd}
//               />
//             </div>

//             <div style={{ 
//               backgroundColor: "white", 
//               padding: "16px", 
//               borderRadius: "8px", 
//               marginBottom: "20px", 
//               border: "1px solid #e5e7eb" 
//             }}>
//               <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px", color: "#1f2937" }}>
//                 📘 About {currentLesson.subtopic ? 'this Topic' : 'this Chapter'}
//               </h3>
//               <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6" }}>
//                 {currentLesson.about}
//               </p>
//             </div>



//             <div style={{ display: 'flex', gap: '24px', marginTop: "24px", flexWrap: 'wrap' }}>
//               <div style={{
//                 flex: 1,
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
//                 padding: '20px',
//                 border: '1px solid #e5e7eb',
//                 marginBottom: '20px'
//               }}>
//                 <h3 style={{ 
//                   fontSize: '18px', 
//                   fontWeight: '600', 
//                   color: '#1f2937', 
//                   marginBottom: '16px', 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: '8px' 
//                 }}>
//                   <FileText size={20}/> Lesson Checklist
//                 </h3>
//                 {checklistItems.map((item) => (
//                   <div key={item.id} style={{ 
//                     padding: '12px 0', 
//                     borderBottom: '1px solid #f3f4f6', 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center' 
//                   }}>
//                     <span style={{ fontSize: '14px', color: '#4b5563' }}>{item.task}</span>
//                     <span style={{ 
//                       fontSize: '12px', 
//                       padding: '4px 8px', 
//                       borderRadius: '12px',
//                       background: item.status === "completed" ? "#10b981" : 
//                                  item.status === "in-progress" ? "#ec4899" : "#e5e7eb",
//                       color: item.status === "completed" || item.status === "in-progress" ? "white" : "#6b7280" 
//                     }}>
//                       {item.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div style={{
//                 flex: 1,
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
//                 padding: '20px',
//                 border: '1px solid #e5e7eb',
//                 marginBottom: '20px'
//               }}>
//                 <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
//                   Quick Practice
//                 </h3>
//                 <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <AlertCircle size={16} color="#f59e0b" />
//                   <span style={{ fontSize: '14px', color: '#f59e0b' }}>
//                     {remainingChances} {remainingChances === 1 ? 'chance' : 'chances'} remaining for this chapter
//                   </span>
//                 </div>
//                 {practiceQuestions.map((q) => (
//                   <div key={q.id} style={{ 
//                     padding: '12px 0', 
//                     borderBottom: '1px solid #f3f4f6', 
//                     display: 'flex', 
//                     justifyContent: 'space-between', 
//                     alignItems: 'center' 
//                   }}>
//                     <span style={{ fontSize: '14px', color: '#4b5563' }}>{q.question}</span>
//                     <button 
//                       onClick={handleStartQuiz}
//                       disabled={remainingChances <= 0}
//                       style={{ 
//                         backgroundColor: remainingChances > 0 ? "#0f766e" : "#9ca3af", 
//                         color: "white", 
//                         border: "none", 
//                         borderRadius: "4px", 
//                         padding: "6px 12px",
//                         cursor: remainingChances > 0 ? "pointer" : "not-allowed",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "4px"
//                       }}
//                     >
//                       <Play size={14} />
//                       {remainingChances > 0 ? "Start" : "No chances"}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="lesson-right">
//             <div className="ai-assistant-container">
//               <div className="tab-navigation">
//                 <button 
//                   className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('chat')}
//                 >
//                   <MessageCircle size={18} />
//                   AI Assistant
//                 </button>
//                 <button 
//                   className={`tab-button ${activeTab === 'notes' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('notes')}
//                 >
//                   <StickyNote size={18} />
//                   Sticky Notes ({stickyNotes.length})
//                 </button>
//               </div>

//               {activeTab === 'chat' && (
//                 <>
//                   {showHistory && (
//                     <div className="history-modal">
//                       <div className="history-header">
//                         <span>Search History ({chatHistory.length})</span>
//                         <button 
//                           onClick={() => setShowHistory(false)}
//                           style={{ 
//                             background: 'none', 
//                             border: 'none', 
//                             cursor: 'pointer',
//                             padding: '4px',
//                             display: 'flex'
//                           }}
//                         >
//                           <X size={16} />
//                         </button>
//                       </div>
//                       {chatHistory.length === 0 ? (
//                         <div style={{ padding: '20px', textAlign: 'center', color: '#9ca3af' }}>
//                           No search history yet
//                         </div>
//                       ) : (
//                         chatHistory.map((item) => (
//                           <div key={item.id} className="history-item">
//                             <div className="history-question">Q: {item.userMessage}</div>
//                             <div className="history-answer">A: {item.aiResponse.substring(0, 100)}...</div>
//                             <div className="history-time">{item.timestamp}</div>
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   )}

//                   <div 
//                     ref={chatContainerRef}
//                     className="ai-chat-container"
//                   >
//                     {chatMessages.length === 0 ? (
//                       <div className="ai-chat-welcome">
//                         <div className="ai-chat-welcome-icon">
//                           <Bot size={40} />
//                         </div>
//                         <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '500' }}>
//                           Hello! I'm your AI Learning Assistant
//                         </p>
//                         <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
//                           Ask me anything about this lesson, request study plans and notes.
//                         </p>
//                         <button
//                           onClick={() => setShowHistory(true)}
//                           style={{
//                             marginTop: '16px',
//                             padding: '8px 16px',
//                             background: '#f0fdfa',
//                             border: '1px solid #0f766e',
//                             borderRadius: '6px',
//                             color: '#0f766e',
//                             cursor: 'pointer',
//                             fontSize: '13px',
//                             fontWeight: '500'
//                           }}
//                         >
//                           View History ({chatHistory.length})
//                         </button>
//                       </div>
//                     ) : (
//                       <>
//                         {chatMessages.map((message) => (
//                           <div
//                             key={message.id}
//                             className={`ai-chat-message ${message.type}`}
//                           >
//                             <div className={`ai-avatar ${message.type}`}>
//                               {message.type === 'user' ? <User size={18} /> : <Bot size={18} />}
//                             </div>
//                             <div className={`ai-message-bubble ${message.type}`}>
//                               <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
//                                 {message.type === 'assistant' ? formatResponse(message.content) : message.content}
//                               </div>
//                               <div className="ai-message-timestamp">
//                                 <span>{message.timestamp}</span>
//                                 {message.type === 'assistant' && (
//                                   <button
//                                     className={`copy-btn ${copiedMessageId === message.id ? 'copied' : ''}`}
//                                     onClick={() => copyToClipboard(message.content, message.id)}
//                                   >
//                                     {copiedMessageId === message.id ? (
//                                       <>
//                                         <Check size={12} />
//                                         Copied
//                                       </>
//                                     ) : (
//                                       <>
//                                         <Copy size={12} />
//                                         Copy
//                                       </>
//                                     )}
//                                   </button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </>
//                     )}
                    
//                     {isLoading && (
//                       <div className="ai-chat-message">
//                         <div className="ai-avatar assistant">
//                           <Bot size={18} />
//                         </div>
//                         <div className="ai-message-bubble assistant">
//                           <div className="ai-typing-indicator">
//                             <div className="ai-typing-dots">
//                               <div className="ai-typing-dot"></div>
//                               <div className="ai-typing-dot"></div>
//                               <div className="ai-typing-dot"></div>
//                             </div>
//                             <span style={{ fontSize: '13px', color: '#64748b' }}>AI is thinking...</span>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {showQuickActions && chatMessages.length === 0 && (
//                     <div className="ai-quick-actions">
//                       <div className="ai-quick-actions-title">Try asking:</div>
//                       <div className="ai-quick-actions-grid">
//                         <button
//                           onClick={() => handleQuickAction('study_plan')}
//                           className="ai-quick-action-btn"
//                         >
//                           <Calendar size={14} />
//                           Study Plan
//                         </button>
//                         <button
//                           onClick={() => handleQuickAction('notes')}
//                           className="ai-quick-action-btn"
//                         >
//                           <FileText size={14} />
//                           Get Notes
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {chatMessages.length > 0 && (
//                     <div style={{ 
//                       padding: '12px 20px', 
//                       borderTop: '1px solid #f1f5f9',
//                       background: '#fafbfc',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center'
//                     }}>
//                       <button 
//                         onClick={() => setShowHistory(true)}
//                         style={{
//                           background: 'none',
//                           border: 'none',
//                           color: '#64748b',
//                           fontSize: '12px',
//                           cursor: 'pointer',
//                           textDecoration: 'underline',
//                           fontWeight: '500',
//                           padding: '8px 16px'
//                         }}
//                       >
//                         View History ({chatHistory.length})
//                       </button>
//                       <button 
//                         onClick={clearChat}
//                         className="clear-chat-btn"
//                       >
//                         Clear Chat
//                       </button>
//                     </div>
//                   )}

//                   <div className="ai-input-container">
//                     <div className="ai-input-wrapper">
//                       <textarea
//                         value={userInput}
//                         onChange={(e) => setUserInput(e.target.value)}
//                         onKeyPress={(e) => {
//                           if (e.key === 'Enter' && !e.shiftKey) {
//                             e.preventDefault();
//                             sendMessage();
//                           }
//                         }}
//                         placeholder="Ask about study plans, notes..."
//                         className="ai-textarea"
//                         rows={1}
//                       />
//                       <button 
//                         onClick={sendMessage}
//                         disabled={isLoading || !userInput.trim()}
//                         className="ai-send-btn"
//                       >
//                         <Send size={16} />
//                         Send
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {activeTab === 'notes' && (
//                 <div className="sticky-notes-wrapper" style={{ backgroundColor: activeNote?.color || '#fef3c7' }}>
//                   {savedMessage && (
//                     <div className="saved-message">
//                       ✓ Note saved successfully!
//                     </div>
//                   )}

//                   {showNotesList && (
//                     <div className="notes-list-modal">
//                       <div className="notes-list-header">
//                         <span>All Notes ({stickyNotes.length})</span>
//                         <button 
//                           onClick={() => setShowNotesList(false)}
//                           style={{ 
//                             background: 'none', 
//                             border: 'none', 
//                             cursor: 'pointer',
//                             padding: '4px',
//                             display: 'flex'
//                           }}
//                         >
//                           <X size={16} />
//                         </button>
//                       </div>
//                       {stickyNotes.map((note) => (
//                         <div 
//                           key={note.id}
//                           className={`note-list-item ${note.id === activeNoteId ? 'active' : ''}`}
//                           onClick={() => selectNote(note.id)}
//                         >
//                           <div className="note-preview">
//                             {note.content.substring(0, 50) || 'Empty note'}
//                             {note.content.length > 50 && '...'}
//                           </div>
//                           <div className="note-timestamp">
//                             <Clock size={10} />
//                             {note.timestamp}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   <div className="sticky-note-header">
//                     <button onClick={addNewNote} className="note-add-btn" title="Add new note">
//                       <Plus size={20} color="#1f2937" />
//                     </button>
//                     <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
//                       <button 
//                         onClick={() => setShowNotesList(!showNotesList)} 
//                         className="note-menu-btn" 
//                         title="View all notes"
//                       >
//                         <MoreHorizontal size={20} color="#1f2937" />
//                       </button>
//                       <button 
//                         onClick={() => activeNote && deleteNote(activeNote.id)} 
//                         className="note-close-btn" 
//                         title="Delete note"
//                       >
//                         <X size={20} />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="sticky-note-content-wrapper">
//                     <textarea
//                       ref={textareaRef}
//                       value={activeNote?.content || ''}
//                       onChange={(e) => activeNote && updateNoteContent(activeNote.id, e.target.value)}
//                       placeholder="Take a note..."
//                       className="sticky-note-textarea"
//                     />
//                   </div>

//                   <div style={{ 
//                     padding: '12px 16px', 
//                     borderTop: '1px solid rgba(0,0,0,0.1)',
//                     background: 'rgba(255,255,255,0.5)',
//                     display: 'flex',
//                     justifyContent: 'flex-end'
//                   }}>
//                     <button 
//                       style={{
//                         background: '#0f766e',
//                         color: 'white',
//                         border: 'none',
//                         padding: '8px 16px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         fontWeight: '500',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '6px'
//                       }}
//                       onClick={saveNote}
//                     >
//                       Save Note
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {showQuiz && (
//           <div style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 1000
//           }}>
//             <div style={{
//               backgroundColor: 'white',
//               borderRadius: '8px',
//               padding: '24px',
//               width: '90%',
//               maxWidth: '600px',
//               maxHeight: '90vh',
//               overflow: 'auto',
//               position: 'relative'
//             }}>
//               <button 
//                 onClick={handleCloseQuiz}
//                 style={{
//                   position: 'absolute',
//                   top: '16px',
//                   right: '16px',
//                   background: 'none',
//                   border: 'none',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <X size={20} color="#6b7280" />
//               </button>
//               {!quizCompleted ? (
//                 <>
//                   <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
//                     Question {currentQuestionIndex + 1} of {demoQuestions.length}
//                   </h2>
//                   <p style={{ fontSize: '18px', marginBottom: '24px', fontWeight: '500' }}>
//                     {demoQuestions[currentQuestionIndex]?.question}
//                   </p>
//                   <div style={{ marginBottom: '24px' }}>
//                     {demoQuestions[currentQuestionIndex]?.options.map((option, index) => (
//                       <div 
//                         key={index}
//                         onClick={() => handleAnswerSelect(index)}
//                         style={{
//                           padding: '12px 16px',
//                           border: `2px solid ${selectedAnswer === index ? '#0f766e' : '#e5e7eb'}`,
//                           borderRadius: '8px',
//                           marginBottom: '12px',
//                           cursor: 'pointer',
//                           backgroundColor: selectedAnswer === index ? '#f0fdfa' : 'white',
//                           transition: 'all 0.2s'
//                         }}
//                       >
//                         {option}
//                       </div>
//                     ))}
//                   </div>
//                   <button 
//                     onClick={handleNextQuestion}
//                     disabled={selectedAnswer === null}
//                     style={{
//                       width: '100%',
//                       padding: '12px',
//                       backgroundColor: selectedAnswer !== null ? '#0f766e' : '#9ca3af',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '6px',
//                       fontSize: '16px',
//                       fontWeight: '600',
//                       cursor: selectedAnswer !== null ? 'pointer' : 'not-allowed'
//                     }}
//                   >
//                     {currentQuestionIndex === demoQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
//                     Quiz Completed!
//                   </h2>
//                   <div style={{ 
//                     textAlign: 'center', 
//                     padding: '24px', 
//                     backgroundColor: '#f0fdfa', 
//                     borderRadius: '8px',
//                     marginBottom: '24px'
//                   }}>
//                     <p style={{ fontSize: '18px', marginBottom: '8px' }}>
//                       Your score: {quizScore} out of {demoQuestions.length}
//                     </p>
//                     <p style={{ fontSize: '16px', color: '#4b5563' }}>
//                       {quizScore >= Math.ceil(demoQuestions.length * 0.8) 
//                         ? 'Congratulations! You passed the quiz.' 
//                         : 'Keep studying and try again.'}
//                     </p>
//                   </div>
//                   <div style={{ display: 'flex', gap: '12px' }}>
//                     <button 
//                       onClick={handleCloseQuiz}
//                       style={{
//                         flex: 1,
//                         padding: '12px',
//                         backgroundColor: '#e5e7eb',
//                         color: '#4b5563',
//                         border: 'none',
//                         borderRadius: '6px',
//                         fontSize: '16px',
//                         fontWeight: '600',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Close
//                     </button>
//                     {remainingChances > 0 && quizScore < Math.ceil(demoQuestions.length * 0.8) && (
//                       <button 
//                         onClick={handleRetryQuiz}
//                         style={{
//                           flex: 1,
//                           padding: '12px',
//                           backgroundColor: '#0f766e',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '6px',
//                           fontSize: '16px',
//                           fontWeight: '600',
//                           cursor: 'pointer'
//                         }}
//                       >
//                         Try Again ({remainingChances} left)
//                       </button>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default LessonPage;






import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  FileText, 
  MessageCircle, 
  X,
  AlertCircle,
  Play,
  Send,
  Bot,
  User,
  Calendar,
  StickyNote,
  Plus,
  Trash2,
  MoreHorizontal,
  Clock,
  Copy,
  Check
} from 'lucide-react';

const LessonPage = () => {
  const { class: classNumber, subject, chapterNumber } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef(null);
  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [remainingChances, setRemainingChances] = useState(3);
  
  // AI Assistant States
  const [chatMessages, setChatMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [copiedMessageId, setCopiedMessageId] = useState(null);

  // Sticky Notes States
  const [stickyNotes, setStickyNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [showNotesList, setShowNotesList] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  // Active Tab State
  const [activeTab, setActiveTab] = useState('overview');
  const [showHistory, setShowHistory] = useState(false);

  // Centralized state for the checklist
  const [checklistStatus, setChecklistStatus] = useState({
    videoWatched: false,
    practiceAttempted: false,
    quizPassed: false
  });

  const queryParams = new URLSearchParams(location.search);
  const chapterTitle = queryParams.get('chapterTitle') || `Chapter ${chapterNumber}`;
  const subtopicName = queryParams.get('subtopic');

  const getChapterKey = () => `quiz_chances_${classNumber}_${subject}_${chapterNumber}`;
  const getChapterDateKey = () => `quiz_date_${classNumber}_${subject}_${chapterNumber}`;
  const getNotesKey = () => `sticky_notes_${classNumber}_${subject}_${chapterNumber}`;
  const getHistoryKey = () => `chat_history_${classNumber}_${subject}_${chapterNumber}`;

  useEffect(() => {
    const today = new Date().toDateString();
    const chapterKey = getChapterKey();
    const chapterDateKey = getChapterDateKey();
    
    const storedDate = sessionStorage.getItem(chapterDateKey);
    const storedChances = sessionStorage.getItem(chapterKey);
    
    if (storedDate === today) {
      setRemainingChances(parseInt(storedChances) || 3);
    } else {
      setRemainingChances(3);
      sessionStorage.setItem(chapterKey, '3');
      sessionStorage.setItem(chapterDateKey, today);
    }

    const savedNotes = sessionStorage.getItem(getNotesKey());
    if (savedNotes) {
      const parsed = JSON.parse(savedNotes);
      setStickyNotes(parsed.length > 0 ? parsed : [{ id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() }]);
      if (parsed.length > 0) {
        setActiveNoteId(parsed[0].id);
      }
    } else {
      const initialNote = { id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() };
      setStickyNotes([initialNote]);
      setActiveNoteId(initialNote.id);
    }

    // Load chat history
    const savedHistory = sessionStorage.getItem(getHistoryKey());
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, [classNumber, subject, chapterNumber]);

  useEffect(() => {
    if (isVideoCompleted) {
      setChecklistStatus(prev => ({ ...prev, videoWatched: true }));
    }
  }, [isVideoCompleted]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isLoading]);

  const currentLesson = {
    title: chapterTitle,
    subtopic: subtopicName,
    file: `/videos/${subject}/chapter-${chapterNumber}.mp4`,
    pdf: `/pdfs/${subject}/chapter-${chapterNumber}.pdf`,
    about: `Learn about ${subject} concepts in ${chapterTitle}${subtopicName ? ` - ${subtopicName}` : ''}. This ${subtopicName ? 'subtopic' : 'chapter'} covers important topics that will help you build a strong foundation.`
  };

  const checklistItems = [
    { id: 1, task: `Watch full video of ${currentLesson.title}`, status: checklistStatus.videoWatched ? "completed" : "in-progress" },
    { id: 2, task: "Attempt practice quiz", status: checklistStatus.practiceAttempted ? "completed" : "pending" },
  ];

  const practiceQuestions = [
    { id: 1, question: `Practice questions for ${currentLesson.title}` },
  ];

  const handleVideoEnd = () => {
    setIsVideoCompleted(true);
  };

  const handleStartQuiz = () => {
    if (remainingChances > 0) {
      setShowQuiz(true);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setQuizScore(0);
      setQuizCompleted(false);
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === 0) {
      setQuizScore(prevScore => prevScore + 1);
    }
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      const newChances = remainingChances - 1;
      setRemainingChances(newChances);
      
      const chapterKey = getChapterKey();
      sessionStorage.setItem(chapterKey, newChances.toString());
      
      const isPassed = quizScore >= 2;
      setChecklistStatus(prev => ({
        ...prev,
        practiceAttempted: true,
        quizPassed: isPassed
      }));
    }
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  const handleRetryQuiz = () => {
    if (remainingChances > 0) {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setQuizScore(0);
      setQuizCompleted(false);
    }
  };

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userInput.trim(),
      timestamp: new Date().toLocaleTimeString()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setShowQuickActions(false);

    try {
      const response = await fetch('http://localhost:8000/ai-assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          class_level: `Class ${classNumber}`,
          subject: subject,
          chapter: currentLesson.title,
          student_question: userInput,
          chat_history: chatMessages
        }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMessage = {
          id: Date.now() + 1,
          type: 'assistant',
          content: data.response,
          messageType: data.type,
          timestamp: new Date().toLocaleTimeString()
        };
        setChatMessages(prev => {
          const newMessages = [...prev, aiMessage];
          // Save to history
          const historyEntry = {
            id: Date.now(),
            userMessage: userMessage.content,
            aiResponse: aiMessage.content,
            timestamp: new Date().toLocaleString()
          };
          const updatedHistory = [historyEntry, ...chatHistory];
          setChatHistory(updatedHistory);
          sessionStorage.setItem(getHistoryKey(), JSON.stringify(updatedHistory));
          return newMessages;
        });
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "I'm sorry, I'm having trouble responding right now. Please try again later.",
        messageType: 'error',
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (actionType) => {
    const topicText = subtopicName ? ` - ${subtopicName}` : '';
    const messages = {
      study_plan: `Can you create a study plan with topics for ${currentLesson.title}${topicText} in ${subject}?`,
      notes: `Please provide comprehensive notes on ${currentLesson.title}${topicText} in ${subject}`,
    };

    const message = messages[actionType];
    setUserInput(message);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  const clearChat = () => {
    setChatMessages([]);
    setShowQuickActions(true);
  };

  const copyToClipboard = async (content, messageId) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      content: '',
      color: getRandomColor(),
      timestamp: new Date().toLocaleString()
    };
    setStickyNotes(prev => [...prev, newNote]);
    setActiveNoteId(newNote.id);
    setShowNotesList(false);
  };

  const deleteNote = (id) => {
    if (stickyNotes.length === 1) {
      const newNote = { id: Date.now(), content: '', color: '#fef3c7', timestamp: new Date().toLocaleString() };
      setStickyNotes([newNote]);
      setActiveNoteId(newNote.id);
      sessionStorage.setItem(getNotesKey(), JSON.stringify([newNote]));
    } else {
      const updatedNotes = stickyNotes.filter(note => note.id !== id);
      setStickyNotes(updatedNotes);
      if (activeNoteId === id) {
        setActiveNoteId(updatedNotes[0].id);
      }
      sessionStorage.setItem(getNotesKey(), JSON.stringify(updatedNotes));
    }
  };

  const updateNoteContent = (id, content) => {
    setStickyNotes(prev => prev.map(note => 
      note.id === id ? { ...note, content, timestamp: new Date().toLocaleString() } : note
    ));
  };

  const saveNote = () => {
    sessionStorage.setItem(getNotesKey(), JSON.stringify(stickyNotes));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2000);
  };

  const selectNote = (id) => {
    setActiveNoteId(id);
    setShowNotesList(false);
  };

  const getRandomColor = () => {
    const colors = ['#fef3c7', '#fecaca', '#ddd6fe', '#bfdbfe', '#a7f3d0', '#fecdd3', '#fed7aa'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const formatResponse = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h4 key={index} className="ai-response-heading">{line.replace('# ', '')}</h4>;
      } else if (line.startsWith('## ')) {
        return <h5 key={index} className="ai-response-subheading">{line.replace('## ', '')}</h5>;
      } else if (line.startsWith('- ') || line.startsWith('• ')) {
        return <div key={index} className="ai-response-list-item">• {line.replace(/^[-•]\s*/, '')}</div>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <div key={index} className="ai-response-text">{line}</div>;
      }
    });
  };

  const demoQuestions = [
    {
      question: `What is the main topic covered in ${currentLesson.title}?`,
      options: ["Basic Concepts", "Advanced Applications", "Historical Context", "All of the above"],
      correctAnswer: 3
    },
    {
      question: "Which of the following best describes the learning objectives?",
      options: ["Memorization", "Conceptual Understanding", "Practical Application", "Both B and C"],
      correctAnswer: 3
    },
    {
      question: "What should you focus on while studying this chapter?",
      options: ["Key Definitions", "Problem Solving", "Real-world Applications", "All of the above"],
      correctAnswer: 3
    }
  ];

  const activeNote = stickyNotes.find(note => note.id === activeNoteId);

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          .ai-response-heading {
            color: #0f766e;
            margin: 8px 0;
            font-size: 15px;
            font-weight: 600;
          }

          .ai-response-subheading {
            color: #0f766e;
            margin: 6px 0;
            font-size: 14px;
            font-weight: 600;
          }

          .ai-response-list-item {
            margin: 4px 0;
            padding-left: 16px;
          }

          .ai-response-text {
            margin: 4px 0;
            line-height: 1.5;
          }

          video::-webkit-media-controls-download-button {
            display: none;
          }
          video {
            controlsList: "nodownload";
          }
        `}
      </style>
      
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Header - Fixed with proper spacing */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '110px 32px 20px 32px', 
          borderBottom: '1px solid #e5e7eb',
          textAlign: 'center',
          marginTop: '0'
        }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            {subject} • {currentLesson.title}
          </h1>
          {currentLesson.subtopic && (
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px', fontWeight: '500' }}>
              Topic: {currentLesson.subtopic}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          {/* Video Section - Made more compact */}
          <div style={{ 
            marginBottom: '20px',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#1f2937', 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Play size={18} />
              {currentLesson.subtopic ? `Video: ${currentLesson.subtopic}` : `Video: ${currentLesson.title}`}
            </h2>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '0',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#000'
            }}>
              <video
                ref={videoRef}
                src={currentLesson.file}
                controls
                controlsList="nodownload"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                onEnded={handleVideoEnd}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '12px 12px 0 0',
            border: '1px solid #e5e7eb',
            borderBottom: 'none',
            display: 'flex',
            gap: '0',
            overflowX: 'auto'
          }}>
            {[
              { id: 'overview', label: 'Overview', icon: null },
              { id: 'checklist', label: 'Lesson Checklist', icon: FileText },
              { id: 'practice', label: 'Quick Practice', icon: Play },
              { id: 'ai-assistant', label: 'AI Assistant', icon: Bot },
              { id: 'notes', label: `Notes (${stickyNotes.length})`, icon: StickyNote }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === tab.id ? '#0f766e' : '#6b7280',
                  padding: '14px 20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  borderBottom: activeTab === tab.id ? '3px solid #0f766e' : '3px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {tab.icon && <tab.icon size={16} />}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ 
            backgroundColor: 'white', 
            border: '1px solid #e5e7eb',
            borderRadius: '0 0 12px 12px',
            padding: '20px',
            minHeight: '400px'
          }}>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>
                  📘 About {currentLesson.subtopic ? 'this Topic' : 'this Chapter'}
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>
                  {currentLesson.about}
                </p>
              </div>
            )}

            {/* Checklist Tab */}
            {activeTab === 'checklist' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={18}/> Lesson Checklist
                </h3>
                {checklistItems.map((item) => (
                  <div key={item.id} style={{ 
                    padding: '12px 0', 
                    borderBottom: '1px solid #f3f4f6', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <span style={{ fontSize: '14px', color: '#4b5563' }}>{item.task}</span>
                    <span style={{ 
                      fontSize: '12px', 
                      padding: '4px 8px', 
                      borderRadius: '12px',
                      background: item.status === "completed" ? "#10b981" : 
                                 item.status === "in-progress" ? "#ec4899" : "#e5e7eb",
                      color: item.status === "completed" || item.status === "in-progress" ? "white" : "#6b7280" 
                    }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Practice Tab */}
            {activeTab === 'practice' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                  Quick Practice
                </h3>
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={16} color="#f59e0b" />
                  <span style={{ fontSize: '14px', color: '#f59e0b' }}>
                    {remainingChances} {remainingChances === 1 ? 'chance' : 'chances'} remaining for this chapter
                  </span>
                </div>
                {practiceQuestions.map((q) => (
                  <div key={q.id} style={{ 
                    padding: '14px 16px', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    marginBottom: '12px',
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    backgroundColor: '#fafafa'
                  }}>
                    <span style={{ fontSize: '14px', color: '#4b5563', fontWeight: '500' }}>{q.question}</span>
                    <button 
                      onClick={handleStartQuiz}
                      disabled={remainingChances <= 0}
                      style={{ 
                        backgroundColor: remainingChances > 0 ? "#0f766e" : "#9ca3af", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "6px", 
                        padding: "8px 16px",
                        cursor: remainingChances > 0 ? "pointer" : "not-allowed",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Play size={14} />
                      {remainingChances > 0 ? "Start Quiz" : "No chances"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* AI Assistant Tab */}
            {activeTab === 'ai-assistant' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
                {showHistory && (
                  <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    border: '1px solid #e5e7eb',
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '500px',
                    overflow: 'hidden',
                    zIndex: 1001
                  }}>
                    <div style={{
                      padding: '16px',
                      borderBottom: '1px solid #e5e7eb',
                      fontWeight: '600',
                      color: '#1f2937',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span>Search History ({chatHistory.length})</span>
                      <button 
                        onClick={() => setShowHistory(false)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          padding: '4px',
                          display: 'flex'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div style={{ maxHeight: '400px', overflow: 'auto' }}>
                      {chatHistory.length === 0 ? (
                        <div style={{ padding: '20px', textAlign: 'center', color: '#9ca3af' }}>
                          No search history yet
                        </div>
                      ) : (
                        chatHistory.map((item) => (
                          <div key={item.id} style={{
                            padding: '12px 16px',
                            borderBottom: '1px solid #f3f4f6',
                            cursor: 'pointer'
                          }}>
                            <div style={{ fontSize: '13px', color: '#1f2937', fontWeight: '500', marginBottom: '6px' }}>
                              Q: {item.userMessage}
                            </div>
                            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              A: {item.aiResponse.substring(0, 100)}...
                            </div>
                            <div style={{ fontSize: '11px', color: '#9ca3af' }}>{item.timestamp}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                <div 
                  ref={chatContainerRef}
                  style={{ flex: 1, overflow: 'auto', padding: '16px', backgroundColor: '#fafbfc', borderRadius: '8px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  {chatMessages.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
                      <Bot size={40} style={{ marginBottom: '12px', opacity: 0.5 }} />
                      <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '500' }}>
                        Hello! I'm your AI Learning Assistant
                      </p>
                      <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>
                        Ask me anything about this lesson, request study plans and notes.
                      </p>
                      <button
                        onClick={() => setShowHistory(true)}
                        style={{
                          marginTop: '16px',
                          padding: '8px 16px',
                          background: '#f0fdfa',
                          border: '1px solid #0f766e',
                          borderRadius: '6px',
                          color: '#0f766e',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}
                      >
                        View History ({chatHistory.length})
                      </button>
                    </div>
                  ) : (
                    <>
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          style={{
                            display: 'flex',
                            gap: '10px',
                            flexDirection: message.type === 'user' ? 'row-reverse' : 'row'
                          }}
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            backgroundColor: message.type === 'user' ? '#0f766e' : '#ec4899'
                          }}>
                            {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                          </div>
                          <div style={{
                            maxWidth: '85%',
                            padding: '12px 16px',
                            borderRadius: '16px',
                            lineHeight: '1.5',
                            fontSize: '14px',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                            backgroundColor: message.type === 'user' ? '#0f766e' : 'white',
                            color: message.type === 'user' ? 'white' : '#1e293b',
                            border: message.type === 'assistant' ? '1px solid #e2e8f0' : 'none',
                            borderBottomRightRadius: message.type === 'user' ? '6px' : '16px',
                            borderBottomLeftRadius: message.type === 'assistant' ? '6px' : '16px'
                          }}>
                            <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                              {message.type === 'assistant' ? formatResponse(message.content) : message.content}
                            </div>
                            <div style={{ fontSize: '11px', marginTop: '6px', opacity: 0.7, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span>{message.timestamp}</span>
                              {message.type === 'assistant' && (
                                <button
                                  onClick={() => copyToClipboard(message.content, message.id)}
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: copiedMessageId === message.id ? '#10b981' : 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '4px',
                                    opacity: 0.7,
                                    transition: 'opacity 0.2s'
                                  }}
                                >
                                  {copiedMessageId === message.id ? (
                                    <>
                                      <Check size={12} />
                                      Copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={12} />
                                      Copy
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                  
                  {isLoading && (
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: '#ec4899'
                      }}>
                        <Bot size={16} />
                      </div>
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: '16px',
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        gap: '6px',
                        alignItems: 'center'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1.4s infinite ease-in-out' }}></div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '-0.16s' }}></div>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#9ca3af', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '-0.32s' }}></div>
                        <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '8px' }}>AI is thinking...</span>
                      </div>
                    </div>
                  )}
                </div>

                {showQuickActions && chatMessages.length === 0 && (
                  <div style={{ padding: '16px', borderTop: '1px solid #f1f5f9', backgroundColor: 'white', borderRadius: '8px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px', fontWeight: '500' }}>
                      Try asking:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button
                        onClick={() => handleQuickAction('study_plan')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '10px 12px',
                          backgroundColor: '#f8fafc',
                          color: '#0f766e',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontWeight: '500'
                        }}
                      >
                        <Calendar size={14} />
                        Study Plan
                      </button>
                      <button
                        onClick={() => handleQuickAction('notes')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '10px 12px',
                          backgroundColor: '#f8fafc',
                          color: '#0f766e',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          fontWeight: '500'
                        }}
                      >
                        <FileText size={14} />
                        Get Notes
                      </button>
                    </div>
                  </div>
                )}

                {chatMessages.length > 0 && (
                  <div style={{ 
                    padding: '12px 16px', 
                    borderTop: '1px solid #f1f5f9',
                    backgroundColor: '#fafbfc',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <button 
                      onClick={() => setShowHistory(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        fontSize: '12px',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: '500',
                        padding: '6px 12px'
                      }}
                    >
                      View History ({chatHistory.length})
                    </button>
                    <button 
                      onClick={clearChat}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        fontSize: '12px',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: '500',
                        padding: '6px 12px'
                      }}
                    >
                      Clear Chat
                    </button>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Ask about study plans, notes..."
                    style={{
                      flex: 1,
                      border: '1px solid #d1d5db',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      resize: 'none',
                      fontFamily: 'inherit',
                      lineHeight: '1.5',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.2s',
                      minHeight: '44px',
                      maxHeight: '100px',
                      outline: 'none'
                    }}
                    rows={1}
                  />
                  <button 
                    onClick={sendMessage}
                    disabled={isLoading || !userInput.trim()}
                    style={{
                      backgroundColor: (userInput.trim() && !isLoading) ? '#0f766e' : '#9ca3af',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      cursor: (userInput.trim() && !isLoading) ? 'pointer' : 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s',
                      minHeight: '44px'
                    }}
                  >
                    <Send size={16} />
                    Send
                  </button>
                </div>
              </div>
            )}

            {/* Notes Tab */}
            {activeTab === 'notes' && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '400px', backgroundColor: activeNote?.color || '#fef3c7', borderRadius: '8px', position: 'relative' }}>
                {savedMessage && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(16, 185, 129, 0.95)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    animation: 'fadeIn 0.3s, fadeOut 0.3s 1.7s',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}>
                    ✓ Note saved successfully!
                  </div>
                )}

                {showNotesList && (
                  <div style={{
                    position: 'absolute',
                    top: '50px',
                    right: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    border: '1px solid #e5e7eb',
                    width: '280px',
                    maxHeight: '350px',
                    overflow: 'auto',
                    zIndex: 100
                  }}>
                    <div style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #e5e7eb',
                      fontWeight: '600',
                      color: '#1f2937',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span>All Notes ({stickyNotes.length})</span>
                      <button 
                        onClick={() => setShowNotesList(false)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          padding: '4px',
                          display: 'flex'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    {stickyNotes.map((note) => (
                      <div 
                        key={note.id}
                        onClick={() => selectNote(note.id)}
                        style={{
                          padding: '12px 16px',
                          borderBottom: '1px solid #f3f4f6',
                          cursor: 'pointer',
                          transition: 'background 0.2s',
                          backgroundColor: note.id === activeNoteId ? '#f0fdfa' : 'transparent',
                          borderLeft: note.id === activeNoteId ? '3px solid #0f766e' : 'none'
                        }}
                      >
                        <div style={{
                          fontSize: '13px',
                          color: '#4b5563',
                          marginBottom: '4px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {note.content.substring(0, 50) || 'Empty note'}
                          {note.content.length > 50 && '...'}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          color: '#9ca3af',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Clock size={10} />
                          {note.timestamp}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}>
                  <button 
                    onClick={addNewNote} 
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      transition: 'background 0.2s'
                    }}
                    title="Add new note"
                  >
                    <Plus size={18} color="#1f2937" />
                  </button>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button 
                      onClick={() => setShowNotesList(!showNotesList)} 
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        transition: 'background 0.2s'
                      }}
                      title="View all notes"
                    >
                      <MoreHorizontal size={18} color="#1f2937" />
                    </button>
                    <button 
                      onClick={() => activeNote && deleteNote(activeNote.id)} 
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        transition: 'background 0.2s',
                        color: '#6b7280'
                      }}
                      title="Delete note"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div style={{ flex: 1, padding: '16px', overflow: 'auto' }}>
                  <textarea
                    ref={textareaRef}
                    value={activeNote?.content || ''}
                    onChange={(e) => activeNote && updateNoteContent(activeNote.id, e.target.value)}
                    placeholder="Take a note..."
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      resize: 'none',
                      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#1f2937'
                    }}
                  />
                </div>

                <div style={{ 
                  padding: '12px 16px', 
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <button 
                    onClick={saveNote}
                    style={{
                      background: '#0f766e',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Save Note
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              width: '90%',
              maxWidth: '500px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative'
            }}>
              <button 
                onClick={handleCloseQuiz}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <X size={20} color="#6b7280" />
              </button>
              {!quizCompleted ? (
                <>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
                    Question {currentQuestionIndex + 1} of {demoQuestions.length}
                  </h2>
                  <p style={{ fontSize: '16px', marginBottom: '20px', fontWeight: '500' }}>
                    {demoQuestions[currentQuestionIndex]?.question}
                  </p>
                  <div style={{ marginBottom: '20px' }}>
                    {demoQuestions[currentQuestionIndex]?.options.map((option, index) => (
                      <div 
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        style={{
                          padding: '12px 16px',
                          border: `2px solid ${selectedAnswer === index ? '#0f766e' : '#e5e7eb'}`,
                          borderRadius: '8px',
                          marginBottom: '10px',
                          cursor: 'pointer',
                          backgroundColor: selectedAnswer === index ? '#f0fdfa' : 'white',
                          transition: 'all 0.2s'
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: selectedAnswer !== null ? '#0f766e' : '#9ca3af',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: selectedAnswer !== null ? 'pointer' : 'not-allowed'
                    }}
                  >
                    {currentQuestionIndex === demoQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </button>
                </>
              ) : (
                <>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
                    Quiz Completed!
                  </h2>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    backgroundColor: '#f0fdfa', 
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}>
                    <p style={{ fontSize: '16px', marginBottom: '8px' }}>
                      Your score: {quizScore} out of {demoQuestions.length}
                    </p>
                    <p style={{ fontSize: '14px', color: '#4b5563' }}>
                      {quizScore >= Math.ceil(demoQuestions.length * 0.8) 
                        ? 'Congratulations! You passed the quiz.' 
                        : 'Keep studying and try again.'}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      onClick={handleCloseQuiz}
                      style={{
                        flex: 1,
                        padding: '12px',
                        backgroundColor: '#e5e7eb',
                        color: '#4b5563',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Close
                    </button>
                    {remainingChances > 0 && quizScore < Math.ceil(demoQuestions.length * 0.8) && (
                      <button 
                        onClick={handleRetryQuiz}
                        style={{
                          flex: 1,
                          padding: '12px',
                          backgroundColor: '#0f766e',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Try Again ({remainingChances} left)
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LessonPage;