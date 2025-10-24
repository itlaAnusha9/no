import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Color variables
const colors = {
  primary: '#2D5D7B',
  primaryLight: 'rgba(45, 93, 123, 0.1)',
  secondary: '#79B3D7',
  accent: '#A62D69',
  accentLight: 'rgba(166, 45, 105, 0.1)',
  light: '#F4F8FB',
  dark: '#222831',
  success: '#3CB371',
  warning: '#FFC107',
  danger: '#DC3545',
  info: '#4DD0E1',
  muted: '#B0BEC5',
  white: '#FFFFFF',
  borderColor: 'rgba(0, 0, 0, 0.1)'
};

// Student Service Functions
const generateMockStudents = () => {
  const courses = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English'];
  const firstNames = ['Aarav', 'Vihaan', 'Aditya', 'Sanya', 'Ananya', 'Reyansh', 'Ishaan', 'Myra', 'Sai', 'Diya'];
  const lastNames = ['Sharma', 'Patel', 'Singh', 'Reddy', 'Kumar', 'Gupta', 'Joshi', 'Desai', 'Iyer', 'Choudhary'];
  
  return Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    serialNo: index + 1,
    name: `${firstNames[index % firstNames.length]} ${lastNames[index % lastNames.length]}`,
    email: `student${index + 1}@novya.com`,
    phone: `+1 (555) ${String(index + 100).padStart(3, '0')}-${String(index + 1000).padStart(4, '0')}`,
    course: courses[index % courses.length],
    status: 'Active',
    enrollmentDate: new Date(2024, index % 12, (index % 28) + 1).toISOString().split('T')[0],
    parentId: index + 1,
    marks: generateStudentMarks()
  }));
};

const generateStudentMarks = () => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English'];
  return subjects.map(subject => ({
    subject,
    marks: Math.floor(Math.random() * 41) + 60,
    total: 100
  }));
};

// Remove t parameter from getPerformanceStatus and use direct translations
const getPerformanceStatus = (percentage) => {
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 80) return 'Good';
  if (percentage >= 70) return 'Average';
  return 'Needs Improvement';
};

// Mock message data
const generateMockMessages = (studentId) => {
  const messageTemplates = [
    { text: "Hello! How are you doing with your studies?", sender: 'teacher', timestamp: new Date(Date.now() - 3600000) },
    { text: "I'm doing well, thank you for asking. I have a question about the last assignment.", sender: 'student', timestamp: new Date(Date.now() - 1800000) },
    { text: "Sure, what would you like to know?", sender: 'teacher', timestamp: new Date(Date.now() - 1200000) },
    { text: "I'm confused about question 3 in the mathematics assignment.", sender: 'student', timestamp: new Date(Date.now() - 600000) },
    { text: "Let me explain that to you. It's about quadratic equations...", sender: 'teacher', timestamp: new Date(Date.now() - 300000) }
  ];

  return messageTemplates.map(msg => ({
    id: Math.random().toString(36).substr(2, 9),
    text: msg.text,
    sender: msg.sender,
    timestamp: msg.timestamp,
    studentId: studentId,
    read: true
  }));
};

// Message Service
const messageService = {
  getMessages: (studentId) => {
    try {
      const key = `novya_messages_${studentId}`;
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
      const mockMessages = generateMockMessages(studentId);
      localStorage.setItem(key, JSON.stringify(mockMessages));
      return mockMessages;
    } catch (error) {
      console.error('Error loading messages:', error);
      return generateMockMessages(studentId);
    }
  },

  sendMessage: (studentId, text, sender = 'teacher') => {
    try {
      const key = `novya_messages_${studentId}`;
      const currentMessages = messageService.getMessages(studentId);
      const newMessage = {
        id: Math.random().toString(36).substr(2, 9),
        text,
        sender,
        timestamp: new Date(),
        studentId,
        read: sender === 'teacher'
      };

      const updatedMessages = [...currentMessages, newMessage];
      localStorage.setItem(key, JSON.stringify(updatedMessages));
      return updatedMessages;
    } catch (error) {
      console.error('Error sending message:', error);
      return [];
    }
  },

  markAsRead: (studentId, messageId) => {
    try {
      const key = `novya_messages_${studentId}`;
      const messages = messageService.getMessages(studentId);
      const updatedMessages = messages.map(msg =>
        msg.id === messageId ? { ...msg, read: true } : msg
      );
      localStorage.setItem(key, JSON.stringify(updatedMessages));
      return updatedMessages;
    } catch (error) {
      console.error('Error marking message as read:', error);
      return [];
    }
  }
};

const studentService = {
  getStudents: () => {
    try {
      const stored = localStorage.getItem('novya_students');
      if (stored) {
        const students = JSON.parse(stored);
        return students.map(student => ({
          ...student,
          marks: student.marks || generateStudentMarks()
        }));
      }
      const mockStudents = generateMockStudents();
      localStorage.setItem('novya_students', JSON.stringify(mockStudents));
      return mockStudents;
    } catch (error) {
      console.error('Error loading students:', error);
      return generateMockStudents();
    }
  },

  getStudentPerformance: (studentId) => {
    const students = studentService.getStudents();
    const student = students.find(s => s.id === studentId);
    if (!student || !student.marks || student.marks.length === 0) {
      return {
        overallPercentage: 0,
        performanceStatus: 'No Data',
        marks: []
      };
    }

    const totalMarks = student.marks.reduce((sum, subject) => sum + subject.marks, 0);
    const totalPossible = student.marks.length * 100;
    const overallPercentage = (totalMarks / totalPossible) * 100;
    
    return {
      overallPercentage: Math.round(overallPercentage),
      performanceStatus: getPerformanceStatus(overallPercentage),
      marks: student.marks
    };
  },

  getAllStudentsWithPerformance: () => {
    const students = studentService.getStudents();
    return students.map(student => {
      const performance = studentService.getStudentPerformance(student.id);
      return {
        ...student,
        performance: performance
      };
    });
  }
};

const exportToExcel = (students, filename = 'novya_students') => {
  try {
    const headers = ['Serial No', 'Name', 'Email', 'Phone Number', 'Course', 'Status', 'Enrollment Date'];
    
    const csvContent = [
      headers.join(','),
      ...students.map(student => [
        student.serialNo,
        `"${student.name.replace(/"/g, '""')}"`,
        student.email,
        `"${student.phone}"`,
        `"${student.course.replace(/"/g, '""')}"`,
        student.status,
        student.enrollmentDate
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    return false;
  }
};

// Results Modal Component
const ResultsModal = ({ student, onClose, t }) => {
  const performance = studentService.getStudentPerformance(student.id);

  // Performance status translation mapping
  const performanceStatusMap = {
    'Excellent': t('performance.excellent', 'Excellent'),
    'Good': t('performance.good', 'Good'),
    'Average': t('performance.average', 'Average'),
    'Needs Improvement': t('performance.needsImprovement', 'Needs Improvement'),
    'No Data': t('resultsModal.noData', 'No Data')
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: colors.white,
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  };

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: `1px solid ${colors.borderColor}`
  };

  const modalTitleStyle = {
    margin: 0,
    color: colors.dark,
    fontSize: '20px',
    fontWeight: '600'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: colors.muted,
    padding: '4px',
    borderRadius: '4px',
    transition: 'background 0.2s'
  };

  const performanceCardStyle = {
    backgroundColor: colors.light,
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const percentageStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: colors.primary,
    margin: '8px 0'
  };

  const performanceStatusStyle = {
    fontSize: '16px',
    color: colors.muted,
    fontWeight: '600'
  };

  const marksTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '16px'
  };

  const marksHeaderStyle = {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '12px',
    textAlign: 'left',
    fontWeight: '600'
  };

  const marksRowStyle = {
    borderBottom: `1px solid ${colors.borderColor}`
  };

  const marksCellStyle = {
    padding: '12px',
    textAlign: 'left'
  };

  const subjectCellStyle = {
    fontWeight: '600',
    color: colors.dark
  };

  const marksValueStyle = {
    color: colors.primary,
    fontWeight: '600'
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>
            {t('resultsModal.title', { name: student.name, defaultValue: "{{name}}'s Results" })}
          </h2>
          <button 
            style={closeButtonStyle}
            onClick={onClose}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryLight}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            ×
          </button>
        </div>

        <div style={performanceCardStyle}>
          <div style={{ color: colors.muted, fontSize: '14px' }}>
            {t('resultsModal.overallPerformance', 'Overall Performance')}
          </div>
          <div style={percentageStyle}>{performance.overallPercentage}%</div>
          <div style={{
            ...performanceStatusStyle,
            color: performance.overallPercentage >= 80 ? colors.success : 
                   performance.overallPercentage >= 70 ? colors.warning : colors.danger
          }}>
            {performanceStatusMap[performance.performanceStatus] || performance.performanceStatus}
          </div>
        </div>

        <h3 style={{ color: colors.dark, marginBottom: '16px' }}>
          {t('resultsModal.subjectWiseMarks', 'Subject-wise Marks')}
        </h3>
        <table style={marksTableStyle}>
          <thead>
            <tr>
              <th style={marksHeaderStyle}>{t('resultsModal.subject', 'Subject')}</th>
              <th style={marksHeaderStyle}>{t('resultsModal.marks', 'Marks')}</th>
              <th style={marksHeaderStyle}>{t('resultsModal.total', 'Total')}</th>
              <th style={marksHeaderStyle}>{t('resultsModal.percentage', 'Percentage')}</th>
            </tr>
          </thead>
          <tbody>
            {performance.marks.map((subject, index) => (
              <tr key={index} style={marksRowStyle}>
                <td style={{ ...marksCellStyle, ...subjectCellStyle }}>{subject.subject}</td>
                <td style={marksCellStyle}>
                  <span style={marksValueStyle}>{subject.marks}</span>
                </td>
                <td style={marksCellStyle}>{subject.total}</td>
                <td style={marksCellStyle}>
                  <span style={marksValueStyle}>{Math.round((subject.marks / subject.total) * 100)}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Message Component
const MessageInterface = ({ student, onClose, onSendMessage, t }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadMessages();
  }, [student]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = () => {
    setIsLoading(true);
    setTimeout(() => {
      const studentMessages = messageService.getMessages(student.id);
      setMessages(studentMessages);
      setIsLoading(false);
    }, 500);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const messageText = newMessage.trim();
    setNewMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const updatedMessages = messageService.sendMessage(student.id, messageText, 'teacher');
      setMessages(updatedMessages);
      setIsLoading(false);

      setTimeout(() => {
        const studentReplies = [
          t('messageInterface.thanksMessage', "Thanks for your message! I'll work on that."),
          t('messageInterface.understandMessage', "I understand, thank you for explaining."),
          t('messageInterface.detailsMessage', "Could you please provide more details?"),
          t('messageInterface.completionMessage', "I'll complete the assignment by tomorrow."),
          t('messageInterface.guidanceMessage', "Thank you for your guidance!")
        ];
        const randomReply = studentReplies[Math.floor(Math.random() * studentReplies.length)];
        const finalMessages = messageService.sendMessage(student.id, randomReply, 'student');
        setMessages(finalMessages);
        
        if (onSendMessage) {
          onSendMessage(student.id, randomReply);
        }
      }, 2000);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (timestamp, t) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const messageDate = new Date(timestamp);
    
    if (messageDate.toDateString() === today.toDateString()) {
      return t('messageInterface.today', 'Today');
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return t('messageInterface.yesterday', 'Yesterday');
    } else {
      return messageDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  const isSameDay = (date1, date2) => {
    return new Date(date1).toDateString() === new Date(date2).toDateString();
  };

  // Message Interface Styles
  const messageOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const messageInterfaceStyle = {
    width: '100%',
    maxWidth: '800px',
    height: '80vh',
    backgroundColor: colors.white,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  };

  const messageHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: `1px solid ${colors.borderColor}`,
    backgroundColor: colors.light,
    borderRadius: '12px 12px 0 0'
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const backButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background 0.2s'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '14px'
  };

  const contactDetailsStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const contactNameStyle = {
    margin: 0,
    fontSize: '16px',
    color: colors.dark,
    fontWeight: '600'
  };

  const contactSubtitleStyle = {
    margin: '2px 0 0 0',
    fontSize: '12px',
    color: colors.muted
  };

  const messageActionsStyle = {
    display: 'flex',
    gap: '8px'
  };

  const actionButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.2s'
  };

  const messagesContainerStyle = {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    backgroundColor: '#e5ddd5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
  };

  const loadingMessagesStyle = {
    textAlign: 'center',
    padding: '20px',
    color: colors.muted
  };

  const messagesListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const dateSeparatorStyle = {
    textAlign: 'center',
    margin: '16px 0',
    color: colors.muted,
    fontSize: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '4px 12px',
    borderRadius: '12px',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const messageBubbleBaseStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '4px',
    maxWidth: '70%'
  };

  const messageContentStyle = {
    padding: '8px 12px',
    borderRadius: '12px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  };

  const messageTimeStyle = {
    fontSize: '10px',
    color: colors.muted,
    float: 'right',
    marginLeft: '8px'
  };

  const messageStatusStyle = {
    fontSize: '10px',
    color: colors.muted
  };

  const messageInputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderTop: `1px solid ${colors.borderColor}`,
    backgroundColor: colors.light,
    borderRadius: '0 0 12px 12px',
    gap: '8px'
  };

  const messageInputActionsStyle = {
    display: 'flex',
    gap: '4px'
  };

  const inputActionButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.2s'
  };

  const messageInputWrapperStyle = {
    flex: 1
  };

  const messageInputStyle = {
    width: '100%',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    backgroundColor: colors.white,
    resize: 'none',
    fontFamily: 'inherit',
    fontSize: '14px',
    maxHeight: '100px',
    outline: 'none',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  };

  const sendButtonStyle = {
    background: colors.primary,
    border: 'none',
    color: colors.white,
    padding: '8px 16px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.2s',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={messageOverlayStyle}>
      <div style={messageInterfaceStyle}>
        {/* Header */}
        <div style={messageHeaderStyle}>
          <div style={contactInfoStyle}>
            <button 
              style={backButtonStyle}
              onClick={onClose}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryLight}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ←
            </button>
            <div style={avatarStyle}>
              {student.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div style={contactDetailsStyle}>
              <h3 style={contactNameStyle}>{student.name}</h3>
              <p style={contactSubtitleStyle}>{student.course} • {student.status}</p>
            </div>
          </div>
          <div style={messageActionsStyle}>
            <button 
              style={actionButtonStyle}
              title={t('messageInterface.moreOptions', 'More options')}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryLight}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >⋯</button>
          </div>
        </div>

        {/* Messages Container */}
        <div style={messagesContainerStyle}>
          {isLoading && messages.length === 0 ? (
            <div style={loadingMessagesStyle}>
              {t('messageInterface.loadingMessages', 'Loading messages...')}
            </div>
          ) : (
            <div style={messagesListStyle}>
              {messages.map((message, index) => {
                const showDate = index === 0 || !isSameDay(message.timestamp, messages[index - 1].timestamp);
                const isSent = message.sender === 'teacher';
                
                return (
                  <React.Fragment key={message.id}>
                    {showDate && (
                      <div style={dateSeparatorStyle}>
                        {formatDate(message.timestamp, t)}
                      </div>
                    )}
                    <div style={{
                      ...messageBubbleBaseStyle,
                      alignSelf: isSent ? 'flex-end' : 'flex-start',
                      flexDirection: isSent ? 'row-reverse' : 'row'
                    }}>
                      <div style={{
                        ...messageContentStyle,
                        backgroundColor: isSent ? '#dcf8c6' : colors.white,
                        borderBottomRightRadius: isSent ? '4px' : '12px',
                        borderBottomLeftRadius: isSent ? '12px' : '4px'
                      }}>
                        <p style={{ margin: '0 0 4px 0', wordWrap: 'break-word' }}>{message.text}</p>
                        <span style={messageTimeStyle}>
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      {isSent && (
                        <span style={messageStatusStyle}>
                          {message.read ? '✓✓' : '✓'}
                        </span>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Message Input */}
        <div style={messageInputContainerStyle}>
          <div style={messageInputActionsStyle}>
            <button 
              style={inputActionButtonStyle}
              title={t('messageInterface.emoji', 'Emoji')}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryLight}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >😊</button>
          </div>
          <div style={messageInputWrapperStyle}>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('messageInterface.typeMessage', 'Type a message...')}
              style={messageInputStyle}
              rows="1"
            />
          </div>
          <button 
            style={{
              ...sendButtonStyle,
              backgroundColor: !newMessage.trim() || isLoading ? colors.muted : colors.primary
            }}
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isLoading}
            onMouseOver={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor = '#1a3d52';
              }
            }}
            onMouseOut={(e) => {
              if (!e.target.disabled) {
                e.target.style.backgroundColor = colors.primary;
              }
            }}
          >
            {isLoading ? '⏳' : '➤'}
          </button>
        </div>
      </div>
    </div>
  );
};

const StudentDetails = ({ onViewChange }) => {
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedStudentForResults, setSelectedStudentForResults] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [students, searchTerm, statusFilter]);

  const loadStudents = () => {
    setLoading(true);
    setTimeout(() => {
      const studentData = studentService.getAllStudentsWithPerformance();
      setStudents(studentData);
      setLoading(false);
    }, 500);
  };

  const filterStudents = () => {
    let filtered = students;

    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.includes(searchTerm)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(student => student.status === statusFilter);
    }

    setFilteredStudents(filtered);
  };

  const handleMessage = (student) => {
    setSelectedStudent(student);
    setShowMessages(true);
  };

  const handleCloseMessages = () => {
    setShowMessages(false);
    setSelectedStudent(null);
  };

  const handleViewResults = (student) => {
    // Navigate to StudentResults component
    if (onViewChange) {
      onViewChange('results');
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSelectedStudentForResults(null);
  };

  const handleSendMessage = (studentId, message) => {
    console.log(`Message sent to student ${studentId}: ${message}`);
  };

  const handleExport = () => {
    const success = exportToExcel(filteredStudents);
    if (success) {
      alert(t('studentDetails.exportSuccess', 'Student data exported successfully!'));
    } else {
      alert(t('studentDetails.exportFailed', 'Failed to export student data. Please try again.'));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
  };

  const getStatusCounts = () => {
    const active = students.filter(s => s.status === 'Active').length;
    const inactive = students.filter(s => s.status === 'Inactive').length;
    return { active, inactive, total: students.length };
  };

  const statusCounts = getStatusCounts();

  // Main Container Styles
  const containerStyle = {
    padding: '24px',
    backgroundColor: colors.light,
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '32px',
    flexWrap: 'wrap',
    gap: '16px',
    width: '100%'
  };

  const headerContentStyle = {
    flex: 1,
    minWidth: '300px'
  };

  const titleStyle = {
    margin: '0 0 8px 0',
    color: colors.dark,
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    margin: 0,
    color: colors.muted,
    fontSize: '16px',
    lineHeight: '1.4'
  };

  const exportButtonStyle = {
    padding: '12px 24px',
    backgroundColor: colors.primary,
    color: colors.white,
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
    minWidth: '140px'
  };

  const statsCardsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '32px',
    width: '100%'
  };

  const statCardStyle = {
    backgroundColor: colors.white,
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease'
  };

  const statNumberStyle = {
    display: 'block',
    fontSize: '32px',
    fontWeight: '700',
    marginTop: '8px',
    lineHeight: '1.1'
  };

  const searchFiltersStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%'
  };

  const searchBoxStyle = {
    position: 'relative',
    flex: '1',
    minWidth: '300px',
    maxWidth: '500px'
  };

  const searchInputStyle = {
    width: '100%',
    padding: '12px 40px 12px 16px',
    border: `1px solid ${colors.borderColor}`,
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    transition: 'all 0.2s ease'
  };

  const searchIconStyle = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.muted
  };

  const filterControlsStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const filterSelectStyle = {
    padding: '12px 16px',
    border: `1px solid ${colors.borderColor}`,
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: colors.white,
    color: colors.dark,
    minWidth: '150px',
    boxSizing: 'border-box'
  };

  const clearFiltersButtonStyle = {
    padding: '12px 16px',
    backgroundColor: 'transparent',
    color: colors.accent,
    border: `1px solid ${colors.accent}`,
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flexShrink: 0
  };

  const resultsInfoStyle = {
    marginBottom: '16px',
    color: colors.muted,
    fontSize: '14px',
    width: '100%'
  };

  const tableContainerStyle = {
    backgroundColor: colors.white,
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    width: '100%',
    boxSizing: 'border-box'
  };

  const tableWrapperStyle = {
    overflowX: 'auto',
    width: '100%'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '800px'
  };

  const tableHeaderStyle = {
    backgroundColor: colors.light,
    borderBottom: `1px solid ${colors.borderColor}`
  };

  const tableHeaderCellStyle = {
    padding: '16px',
    textAlign: 'left',
    fontWeight: '600',
    color: colors.dark,
    fontSize: '14px',
    whiteSpace: 'nowrap'
  };

  const tableRowStyle = {
    borderBottom: `1px solid ${colors.borderColor}`,
    transition: 'background-color 0.2s ease'
  };

  const tableCellStyle = {
    padding: '16px',
    fontSize: '14px',
    color: colors.dark,
    verticalAlign: 'middle'
  };

  const nameAvatarStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minWidth: '200px'
  };

  const smallAvatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '12px',
    flexShrink: 0
  };

  const nameInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    flex: 1
  };

  const nameMainStyle = {
    fontWeight: '600',
    color: colors.dark,
    lineHeight: '1.3'
  };

  const nameEmailMobileStyle = {
    fontSize: '12px',
    color: colors.muted,
    lineHeight: '1.2',
    wordBreak: 'break-word'
  };

  const statusBadgeStyle = {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'capitalize',
    display: 'inline-block',
    minWidth: '70px',
    textAlign: 'center'
  };

  const messageButtonStyle = {
    padding: '8px 16px',
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    whiteSpace: 'nowrap'
  };

  const resultsButtonStyle = {
    padding: '8px 16px',
    backgroundColor: colors.accentLight,
    color: colors.accent,
    border: 'none',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    whiteSpace: 'nowrap'
  };

  const noStudentsStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    color: colors.muted,
    width: '100%'
  };

  const noDataIconStyle = {
    fontSize: '48px',
    marginBottom: '16px'
  };

  const loadingSpinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    color: colors.muted,
    fontSize: '16px',
    width: '100%'
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={loadingSpinnerStyle}>
          {t('studentDetails.loading', 'Loading students...')}
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {showMessages && selectedStudent && (
        <MessageInterface
          student={selectedStudent}
          onClose={handleCloseMessages}
          onSendMessage={handleSendMessage}
          t={t}
        />
      )}
      
      {showResults && selectedStudentForResults && (
        <ResultsModal
          student={selectedStudentForResults}
          onClose={handleCloseResults}
          t={t}
        />
      )}
      
      <div style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={titleStyle}>
            {t('studentDetails.title', 'Student Details')}
          </h1>
          <p style={subtitleStyle}>
            {t('studentDetails.subtitle', 'Manage and view all student information')}
          </p>
        </div>
        <button 
          style={exportButtonStyle}
          onClick={handleExport}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#245267';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          📊 {t('studentDetails.exportExcel', 'Export to Excel')}
        </button>
      </div>

      {/* Stats Cards */}
      <div style={statsCardsStyle}>
        <div style={statCardStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <h3 style={{ margin: 0, color: colors.muted, fontSize: '14px' }}>
            {t('studentDetails.totalStudents', 'Total Students')}
          </h3>
          <span style={{ ...statNumberStyle, color: colors.primary }}>{statusCounts.total}</span>
        </div>
        <div style={statCardStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <h3 style={{ margin: 0, color: colors.muted, fontSize: '14px' }}>
            {t('studentDetails.active', 'Active')}
          </h3>
          <span style={{ ...statNumberStyle, color: colors.success }}>{statusCounts.active}</span>
        </div>
        <div style={statCardStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <h3 style={{ margin: 0, color: colors.muted, fontSize: '14px' }}>
            {t('studentDetails.inactive', 'Inactive')}
          </h3>
          <span style={{ ...statNumberStyle, color: colors.danger }}>{statusCounts.inactive}</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div style={searchFiltersStyle}>
        <div style={searchBoxStyle}>
          <input
            type="text"
            placeholder={t('studentDetails.searchPlaceholder', 'Search students by name, email, course, or phone...')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = colors.primary;
              e.target.style.boxShadow = `0 0 0 2px ${colors.primaryLight}`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.borderColor;
              e.target.style.boxShadow = 'none';
            }}
          />
          <span style={searchIconStyle}>🔍</span>
        </div>
        
        <div style={filterControlsStyle}>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            style={filterSelectStyle}
          >
            <option value="all">{t('studentDetails.allStatus', 'All Status')}</option>
            <option value="Active">{t('studentDetails.active', 'Active')}</option>
            <option value="Inactive">{t('studentDetails.inactive', 'Inactive')}</option>
          </select>
          
          {(searchTerm || statusFilter !== 'all') && (
            <button 
              style={clearFiltersButtonStyle}
              onClick={clearFilters}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentLight;
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t('studentDetails.clearFilters', 'Clear Filters')}
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div style={resultsInfoStyle}>
        <p>
          {t('studentDetails.showing', 'Showing {{count}} of {{total}} students', {
            count: filteredStudents.length,
            total: students.length
          })}
          {(searchTerm || statusFilter !== 'all') && (
            <span style={{ color: colors.accent }}>
              {' '}{t('studentDetails.filtered', '(filtered)')}
            </span>
          )}
        </p>
      </div>

      {/* Students Table */}
      <div style={tableContainerStyle}>
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead style={tableHeaderStyle}>
              <tr>
                <th style={tableHeaderCellStyle}>{t('studentDetails.serialNo', 'Serial No')}</th>
                <th style={tableHeaderCellStyle}>{t('studentDetails.name', 'Name')}</th>
                <th style={{ ...tableHeaderCellStyle, display: window.innerWidth < 768 ? 'none' : 'table-cell' }}>
                  {t('studentDetails.registeredMail', 'Registered Mail ID')}
                </th>
                <th style={{ ...tableHeaderCellStyle, display: window.innerWidth < 1024 ? 'none' : 'table-cell' }}>
                  {t('studentDetails.phoneNumber', 'Phone Number')}
                </th>
                <th style={tableHeaderCellStyle}>{t('studentDetails.course', 'Course')}</th>
                <th style={tableHeaderCellStyle}>{t('studentDetails.status', 'Status')}</th>
                <th style={tableHeaderCellStyle}>{t('studentDetails.results', 'Results')}</th>
                <th style={tableHeaderCellStyle}>{t('studentDetails.message', 'Message')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr 
                  key={student.id} 
                  style={{
                    ...tableRowStyle,
                    backgroundColor: student.status === 'Inactive' ? colors.light : colors.white
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primaryLight;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = student.status === 'Inactive' ? colors.light : colors.white;
                  }}
                >
                  <td style={tableCellStyle}>{student.serialNo}</td>
                  <td style={tableCellStyle}>
                    <div style={nameAvatarStyle}>
                      <span style={smallAvatarStyle}>
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                      <div style={nameInfoStyle}>
                        <div style={nameMainStyle}>{student.name}</div>
                        <div style={nameEmailMobileStyle}>{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ ...tableCellStyle, display: window.innerWidth < 768 ? 'none' : 'table-cell' }}>{student.email}</td>
                  <td style={{ ...tableCellStyle, display: window.innerWidth < 1024 ? 'none' : 'table-cell' }}>{student.phone}</td>
                  <td style={tableCellStyle}>{student.course}</td>
                  <td style={tableCellStyle}>
                    <span style={{
                      ...statusBadgeStyle,
                      backgroundColor: student.status === 'Active' ? 'rgba(60, 179, 113, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                      color: student.status === 'Active' ? colors.success : colors.danger
                    }}>
                      {student.status}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <button 
                      style={resultsButtonStyle}
                      onClick={() => handleViewResults(student)}
                      title={t('studentDetails.viewResults', 'View results for {{name}}', { name: student.name })}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = colors.accent;
                        e.currentTarget.style.color = colors.white;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = colors.accentLight;
                        e.currentTarget.style.color = colors.accent;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>📊</span>
                      <span style={{ display: window.innerWidth < 480 ? 'none' : 'inline' }}>
                        {t('studentDetails.viewResults', 'View Results')}
                      </span>
                    </button>
                  </td>
                  <td style={tableCellStyle}>
                    <button 
                      style={messageButtonStyle}
                      onClick={() => handleMessage(student)}
                      title={t('studentDetails.sendMessage', 'Send message to {{name}}', { name: student.name })}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primary;
                        e.currentTarget.style.color = colors.white;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primaryLight;
                        e.currentTarget.style.color = colors.primary;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>💬</span>
                      <span style={{ display: window.innerWidth < 480 ? 'none' : 'inline' }}>
                        {t('studentDetails.sendMessage', 'Message')}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredStudents.length === 0 && (
          <div style={noStudentsStyle}>
            <div style={noDataIconStyle}>👨‍🎓</div>
            <h3 style={{ color: colors.dark, marginBottom: '8px' }}>
              {t('studentDetails.noStudents', 'No Students Found')}
            </h3>
            <p style={{ marginBottom: '20px' }}>
              {searchTerm || statusFilter !== 'all' 
                ? t('studentDetails.noStudentsMessage', 'No students match your search criteria. Try adjusting your filters.')
                : t('studentDetails.noStudentsDefault', 'There are no students registered in the system yet.')
              }
            </p>
            {(searchTerm || statusFilter !== 'all') && (
              <button 
                style={{ ...clearFiltersButtonStyle, padding: '12px 24px' }}
                onClick={clearFilters}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentLight;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('studentDetails.clearAllFilters', 'Clear All Filters')}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
export { studentService, getPerformanceStatus, messageService };