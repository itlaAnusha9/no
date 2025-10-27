import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Studentresults from './Studentresults';
import Sidebar from './Sidebar';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showExportConfirm, setShowExportConfirm] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentView, setCurrentView] = useState('list');

  // Color variables using your exact codes
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

  // Mock student data
  const studentsData = [
    {
      id: 1, initials: "JD", name: "John Doe", email: "john@example.com",
      enrollmentDate: "2024-01-15", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 85, total: 100, status: "complete", timeSpent: "45 mins" },
        english: { score: 92, total: 100, status: "complete", timeSpent: "40 mins" },
        socialStudies: { score: 88, total: 100, status: "complete", timeSpent: "55 mins" },
        science: { score: 78, total: 100, status: "complete", timeSpent: "50 mins" },
        computer: { score: 95, total: 100, status: "complete", timeSpent: "35 mins" }
      },
      quiz: { status: "complete", score: 85, total: 100, timeSpent: "45 mins", date: "2024-03-15", attempts: 1 },
      mocktest: { status: "pending" }
    },
    {
      id: 2, initials: "JS", name: "Jane Smith", email: "jane@example.com",
      enrollmentDate: "2024-01-20", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 92, total: 100, status: "complete", timeSpent: "38 mins" },
        english: { score: 88, total: 100, status: "complete", timeSpent: "48 mins" },
        socialStudies: { score: 76, total: 100, status: "complete", timeSpent: "52 mins" },
        science: { score: 85, total: 100, status: "complete", timeSpent: "48 mins" },
        computer: { score: 90, total: 100, status: "complete", timeSpent: "32 mins" }
      },
      quiz: { status: "complete", score: 92, total: 100, timeSpent: "38 mins", date: "2024-03-16", attempts: 1 },
      mocktest: { status: "complete", score: 78, total: 100, timeSpent: "120 mins", date: "2024-03-18", attempts: 2 }
    },
    {
      id: 3, initials: "MJ", name: "Mike Johnson", email: "mike@example.com",
      enrollmentDate: "2024-02-01", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 65, total: 100, status: "complete", timeSpent: "60 mins" },
        english: { score: 82, total: 100, status: "complete", timeSpent: "45 mins" },
        socialStudies: { score: 90, total: 100, status: "complete", timeSpent: "50 mins" },
        science: { score: 72, total: 100, status: "complete", timeSpent: "55 mins" },
        computer: { score: 68, total: 100, status: "complete", timeSpent: "65 mins" }
      },
      quiz: { status: "pending" },
      mocktest: { status: "pending" }
    },
    {
      id: 4, initials: "SW", name: "Sarah Wilson", email: "sarah@example.com",
      enrollmentDate: "2024-01-25", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 88, total: 100, status: "complete", timeSpent: "42 mins" },
        english: { score: 94, total: 100, status: "complete", timeSpent: "38 mins" },
        socialStudies: { score: 81, total: 100, status: "complete", timeSpent: "48 mins" },
        science: { score: 79, total: 100, status: "complete", timeSpent: "52 mins" },
        computer: { score: 91, total: 100, status: "complete", timeSpent: "30 mins" }
      },
      quiz: { status: "complete", score: 88, total: 100, timeSpent: "42 mins", date: "2024-03-17", attempts: 1 },
      mocktest: { status: "complete", score: 82, total: 100, timeSpent: "115 mins", date: "2024-03-19", attempts: 1 }
    },
    {
      id: 5, initials: "TB", name: "Tom Brown", email: "tom@example.com",
      enrollmentDate: "2024-02-05", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 72, total: 100, status: "complete", timeSpent: "58 mins" },
        english: { score: 85, total: 100, status: "complete", timeSpent: "44 mins" },
        socialStudies: { score: 78, total: 100, status: "complete", timeSpent: "53 mins" },
        science: { score: 81, total: 100, status: "complete", timeSpent: "49 mins" },
        computer: { score: 76, total: 100, status: "complete", timeSpent: "62 mins" }
      },
      quiz: { status: "complete", score: 72, total: 100, timeSpent: "58 mins", date: "2024-03-20", attempts: 2 },
      mocktest: { status: "pending" }
    },
    {
      id: 6, initials: "ED", name: "Emma Davis", email: "emma@example.com",
      enrollmentDate: "2024-02-10", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 95, total: 100, status: "complete", timeSpent: "35 mins" },
        english: { score: 89, total: 100, status: "complete", timeSpent: "41 mins" },
        socialStudies: { score: 92, total: 100, status: "complete", timeSpent: "46 mins" },
        science: { score: 87, total: 100, status: "complete", timeSpent: "43 mins" },
        computer: { score: 98, total: 100, status: "complete", timeSpent: "28 mins" }
      },
      quiz: { status: "complete", score: 95, total: 100, timeSpent: "35 mins", date: "2024-03-21", attempts: 1 },
      mocktest: { status: "complete", score: 90, total: 100, timeSpent: "110 mins", date: "2024-03-23", attempts: 1 }
    },
    {
      id: 7, initials: "AM", name: "Alex Miller", email: "alex@example.com",
      enrollmentDate: "2024-02-15", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 58, total: 100, status: "complete", timeSpent: "70 mins" },
        english: { score: 62, total: 100, status: "complete", timeSpent: "65 mins" },
        socialStudies: { score: 71, total: 100, status: "complete", timeSpent: "60 mins" },
        science: { score: 55, total: 100, status: "complete", timeSpent: "75 mins" },
        computer: { score: 64, total: 100, status: "complete", timeSpent: "68 mins" }
      },
      quiz: { status: "pending" },
      mocktest: { status: "pending" }
    },
    {
      id: 8, initials: "LG", name: "Lisa Garcia", email: "lisa@example.com",
      enrollmentDate: "2024-02-20", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 83, total: 100, status: "complete", timeSpent: "47 mins" },
        english: { score: 91, total: 100, status: "complete", timeSpent: "39 mins" },
        socialStudies: { score: 86, total: 100, status: "complete", timeSpent: "51 mins" },
        science: { score: 88, total: 100, status: "complete", timeSpent: "46 mins" },
        computer: { score: 84, total: 100, status: "complete", timeSpent: "44 mins" }
      },
      quiz: { status: "complete", score: 83, total: 100, timeSpent: "47 mins", date: "2024-03-22", attempts: 1 },
      mocktest: { status: "complete", score: 79, total: 100, timeSpent: "118 mins", date: "2024-03-24", attempts: 2 }
    },
    {
      id: 9, initials: "KM", name: "Kevin Martinez", email: "kevin@example.com",
      enrollmentDate: "2024-02-25", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 75, total: 100, status: "complete", timeSpent: "52 mins" },
        english: { score: 80, total: 100, status: "complete", timeSpent: "48 mins" },
        socialStudies: { score: 82, total: 100, status: "complete", timeSpent: "55 mins" },
        science: { score: 77, total: 100, status: "complete", timeSpent: "50 mins" },
        computer: { score: 85, total: 100, status: "complete", timeSpent: "42 mins" }
      },
      quiz: { status: "pending" },
      mocktest: { status: "pending" }
    },
    {
      id: 10, initials: "AR", name: "Amy Robinson", email: "amy@example.com",
      enrollmentDate: "2024-03-01", course: "General", avatarColor: "avatar-blue",
      subjects: {
        mathematics: { score: 91, total: 100, status: "complete", timeSpent: "38 mins" },
        english: { score: 87, total: 100, status: "complete", timeSpent: "42 mins" },
        socialStudies: { score: 89, total: 100, status: "complete", timeSpent: "47 mins" },
        science: { score: 84, total: 100, status: "complete", timeSpent: "45 mins" },
        computer: { score: 93, total: 100, status: "complete", timeSpent: "33 mins" }
      },
      quiz: { status: "complete", score: 91, total: 100, timeSpent: "38 mins", date: "2024-03-25", attempts: 1 },
      mocktest: { status: "complete", score: 86, total: 100, timeSpent: "112 mins", date: "2024-03-27", attempts: 1 }
    }
  ];

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  // Calculate summary statistics
  const calculateSummaryStats = () => {
    const totalStudents = studentsData.length;
    
    const quizCompleted = studentsData.filter(student => student.quiz.status === 'complete').length;
    const quizPending = totalStudents - quizCompleted;
    
    const mocktestCompleted = studentsData.filter(student => student.mocktest.status === 'complete').length;
    const mocktestPending = totalStudents - mocktestCompleted;
    
    const totalQuizScore = studentsData
      .filter(student => student.quiz.status === 'complete')
      .reduce((sum, student) => sum + student.quiz.score, 0);
    const averageQuizScore = quizCompleted > 0 ? Math.round(totalQuizScore / quizCompleted) : 0;
    
    const allSubjectScores = studentsData.flatMap(student => 
      Object.values(student.subjects)
        .filter(subject => subject.status === 'complete')
        .map(subject => subject.score)
    );
    const classAverage = allSubjectScores.length > 0 
      ? Math.round(allSubjectScores.reduce((sum, score) => sum + score, 0) / allSubjectScores.length)
      : 0;

    return {
      totalStudents,
      quizCompleted,
      quizPending,
      mocktestCompleted,
      mocktestPending,
      averageQuizScore,
      classAverage
    };
  };

  const summaryStats = calculateSummaryStats();

  // SummaryCards Component
  const SummaryCards = () => {
    const containerStyle = {
      padding: '0px 30px 20px 30px'
    };

    const cardsGridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginBottom: '20px'
    };

    const cardStyle = {
      background: colors.white,
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: `1px solid ${colors.borderColor}`,
      textAlign: 'center'
    };

    const summaryData = [
      {
        value: summaryStats.totalStudents,
        label: 'Total Students',
        description: 'Enrolled in the course',
        color: colors.primary,
        icon: '👥'
      },
      {
        value: `${summaryStats.quizCompleted}/${summaryStats.totalStudents}`,
        label: 'Quiz Completed',
        description: 'Students finished quiz',
        color: colors.success,
        icon: '📝'
      },
      {
        value: `${summaryStats.mocktestCompleted}/${summaryStats.totalStudents}`,
        label: 'Mock Tests Completed',
        description: 'Students finished mock test',
        color: colors.info,
        icon: '🎯'
      }
    ];

    return (
      <div style={containerStyle}>
        <div style={cardsGridStyle}>
          {summaryData.map((item, index) => (
            <div key={index} style={cardStyle}>
              <div style={{fontSize: '2rem', marginBottom: '15px', color: item.color}}>
                {item.icon}
              </div>
              <div style={{fontSize: '2.2rem', fontWeight: '700', margin: '0 0 8px 0', color: item.color}}>
                {item.value}
              </div>
              <p style={{fontSize: '0.9rem', color: colors.muted, fontWeight: '500', margin: 0}}>
                {item.label}
              </p>
              <p style={{fontSize: '0.75rem', color: colors.muted, margin: '5px 0 0 0', fontStyle: 'italic'}}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ContentHeader Component
  const ContentHeader = () => {
    const contentHeaderStyle = {
      background: 'transparent',
      padding: '20px 30px 0px 30px',
      marginTop: '20px'
    };

    const headerContentStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%'
    };

    const titleStyle = {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: colors.dark,
      margin: 0
    };

    const subtitleStyle = {
      fontSize: '0.9rem',
      color: colors.muted,
      margin: '4px 0 0 0'
    };

    const buttonsContainerStyle = {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    };

    const buttonStyle = {
      padding: '12px 20px',
      backgroundColor: colors.primary,
      color: colors.white,
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '600',
      minWidth: '140px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };

    const backButtonStyle = {
      ...buttonStyle,
      marginBottom: '15px'
    };

    return (
      <div style={contentHeaderStyle}>
        {currentView === 'details' && selectedStudent ? (
          <div style={{width: '100%'}}>
            <button style={backButtonStyle} onClick={handleBackToList}>
              ← Back to Students List
            </button>
            <div style={headerContentStyle}>
              <div>
                <h1 style={titleStyle}>Student Details</h1>
                <p style={subtitleStyle}>Viewing details for {selectedStudent.name}</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={headerContentStyle}>
            <div>
              <h1 style={titleStyle}>Student Results</h1>
              <p style={subtitleStyle}>Comprehensive overview of student performance and assessments</p>
            </div>
            {currentView !== 'details' && (
              <div style={buttonsContainerStyle}>
                <button 
                  style={buttonStyle}
                  onClick={() => setShowExportConfirm(true)}
                >
                  📥 Export Results
                </button>
                <button 
                  style={{
                    ...buttonStyle,
                    backgroundColor: showAnalytics ? colors.accent : colors.primary
                  }}
                  onClick={() => setShowAnalytics(!showAnalytics)}
                >
                  📈 {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // AnalyticsView Component
  const AnalyticsView = () => {
    // Calculate subject-wise average scores
    const calculateSubjectAverages = () => {
      const subjects = ['mathematics', 'english', 'socialStudies', 'science', 'computer'];
      const averages = {};
      
      subjects.forEach(subject => {
        const scores = studentsData
          .filter(student => student.subjects[subject]?.status === 'complete')
          .map(student => student.subjects[subject].score);
        
        if (scores.length > 0) {
          const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
          averages[subject] = Math.round(average);
        } else {
          averages[subject] = 0;
        }
      });
      
      return averages;
    };

    // Calculate top performing student
    const calculateTopStudent = () => {
      const studentsWithAverage = studentsData.map(student => {
        const subjectScores = Object.values(student.subjects)
          .filter(subject => subject.status === 'complete')
          .map(subject => subject.score);
        
        const averageScore = subjectScores.length > 0 
          ? subjectScores.reduce((sum, score) => sum + score, 0) / subjectScores.length
          : 0;
        
        return {
          ...student,
          averageScore: Math.round(averageScore)
        };
      });

      return studentsWithAverage.reduce((topStudent, currentStudent) => {
        return currentStudent.averageScore > topStudent.averageScore ? currentStudent : topStudent;
      }, { averageScore: 0 });
    };

    // Calculate overall class average
    const calculateClassAverage = () => {
      const allSubjectScores = studentsData.flatMap(student => 
        Object.values(student.subjects)
          .filter(subject => subject.status === 'complete')
          .map(subject => subject.score)
      );

      if (allSubjectScores.length === 0) return 0;
      
      const totalScore = allSubjectScores.reduce((sum, score) => sum + score, 0);
      return Math.round(totalScore / allSubjectScores.length);
    };

    const subjectAverages = calculateSubjectAverages();
    const topStudent = calculateTopStudent();
    const classAverage = calculateClassAverage();
    
    // Subject display names with icons
    const subjectData = {
      mathematics: { name: 'Mathematics', icon: '🧮', color: '#EF5350' },
      english: { name: 'English', icon: '📚', color: '#4DD0E1' },
      socialStudies: { name: 'Social Studies', icon: '🌍', color: '#3CB371' },
      science: { name: 'Science', icon: '🔬', color: '#FFA726' },
      computer: { name: 'Computer Science', icon: '💻', color: '#A62D69' }
    };

    const containerStyle = {
      padding: '20px 30px',
      backgroundColor: colors.light,
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    };

    const headerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    };

    const titleStyle = {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: colors.dark,
      margin: 0
    };

    const closeButtonStyle = {
      padding: '10px 20px',
      backgroundColor: colors.danger,
      color: colors.white,
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500',
      fontFamily: 'Inter, sans-serif',
      transition: 'all 0.3s ease'
    };

    const cardStyle = {
      background: colors.white,
      padding: '25px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: `1px solid ${colors.borderColor}`,
      marginBottom: '25px'
    };

    const cardTitleStyle = {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: colors.primary,
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    };

    // Calculate overall statistics
    const totalStudents = studentsData.length;
    const quizCompleted = studentsData.filter(student => student.quiz.status === 'complete').length;
    const mocktestCompleted = studentsData.filter(student => student.mocktest.status === 'complete').length;
    const totalQuizScore = studentsData
      .filter(student => student.quiz.status === 'complete')
      .reduce((sum, student) => sum + student.quiz.score, 0);
    const averageQuizScore = quizCompleted > 0 ? Math.round(totalQuizScore / quizCompleted) : 0;

    // Stats card style
    const statCardStyle = {
      textAlign: 'center',
      padding: '25px 20px',
      backgroundColor: colors.white,
      borderRadius: '12px',
      border: `1px solid ${colors.borderColor}`,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    };

    const statValueStyle = {
      fontSize: '2.2rem',
      fontWeight: '800',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #2D5D7B, #79B3D7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };

    const statLabelStyle = {
      fontSize: '0.85rem',
      color: colors.muted,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    };

    // Subject Performance Cards
    const subjectCardStyle = {
      background: colors.white,
      padding: '20px',
      borderRadius: '12px',
      border: `1px solid ${colors.borderColor}`,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer'
    };

    const progressBarContainerStyle = {
      width: '100%',
      height: '8px',
      backgroundColor: colors.primaryLight,
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '12px'
    };

    const getProgressBarStyle = (percentage, color) => ({
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: color,
      borderRadius: '10px',
      transition: 'width 0.8s ease',
      position: 'relative'
    });

    const getGradeColor = (percentage) => {
      if (percentage >= 90) return colors.success;
      if (percentage >= 80) return '#4CAF50';
      if (percentage >= 70) return '#8BC34A';
      if (percentage >= 60) return colors.warning;
      return colors.danger;
    };

    const getGradeText = (percentage) => {
      if (percentage >= 90) return 'Excellent';
      if (percentage >= 80) return 'Very Good';
      if (percentage >= 70) return 'Good';
      if (percentage >= 60) return 'Average';
      return 'Needs Improvement';
    };

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>📊 Student Analytics Dashboard</h1>
          <button 
            style={closeButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.danger}
            onClick={() => setShowAnalytics(false)}
          >
            ✕ Close Analytics
          </button>
        </div>

        {/* Overall Statistics */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>📈 Overall Performance Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={statCardStyle}>
              <div style={{...statValueStyle}}>
                {totalStudents}
              </div>
              <div style={statLabelStyle}>Total Students</div>
            </div>
            <div style={statCardStyle}>
              <div style={{...statValueStyle}}>
                {quizCompleted}
              </div>
              <div style={statLabelStyle}>Quiz Completed</div>
            </div>
            <div style={statCardStyle}>
              <div style={{...statValueStyle}}>
                {mocktestCompleted}
              </div>
              <div style={statLabelStyle}>Mock Tests Completed</div>
            </div>
            <div style={statCardStyle}>
              <div style={{...statValueStyle}}>
                {averageQuizScore}%
              </div>
              <div style={statLabelStyle}>Average Quiz Score</div>
            </div>
          </div>
        </div>

        {/* Subject-wise Performance Cards */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>🎯 Subject-wise Performance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {Object.entries(subjectAverages).map(([subject, averageScore]) => {
              const subjectInfo = subjectData[subject];
              const gradeColor = getGradeColor(averageScore);
              const gradeText = getGradeText(averageScore);
              
              return (
                <div 
                  key={subject} 
                  style={subjectCardStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        fontSize: '1.5rem',
                        background: `linear-gradient(135deg, ${subjectInfo.color}, ${subjectInfo.color}99)`,
                        borderRadius: '10px',
                        padding: '8px'
                      }}>
                        {subjectInfo.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', color: colors.dark, fontSize: '1rem' }}>
                          {subjectInfo.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: colors.muted, marginTop: '2px' }}>
                          {gradeText}
                        </div>
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: '700', 
                      color: gradeColor,
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {averageScore}%
                    </div>
                  </div>
                  
                  <div style={progressBarContainerStyle}>
                    <div style={getProgressBarStyle(averageScore, gradeColor)}></div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: colors.muted }}>0%</span>
                    <span style={{ fontSize: '0.75rem', color: colors.muted }}>100%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Distribution */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>📊 Performance Distribution</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Quiz Performance */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: colors.primary, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📝 Quiz Completion
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ minWidth: '100px', fontWeight: '500', color: colors.dark, fontSize: '0.9rem' }}>
                    Completed
                  </div>
                  <div style={{ flex: 1, height: '12px', backgroundColor: colors.primaryLight, borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${(quizCompleted / totalStudents) * 100}%`, 
                      backgroundColor: colors.success,
                      borderRadius: '10px'
                    }}></div>
                  </div>
                  <div style={{ minWidth: '40px', textAlign: 'right', fontWeight: '600', color: colors.dark, fontSize: '0.9rem' }}>
                    {quizCompleted}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ minWidth: '100px', fontWeight: '500', color: colors.dark, fontSize: '0.9rem' }}>
                    Pending
                  </div>
                  <div style={{ flex: 1, height: '12px', backgroundColor: colors.primaryLight, borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${((totalStudents - quizCompleted) / totalStudents) * 100}%`, 
                      backgroundColor: colors.muted,
                      borderRadius: '10px'
                    }}></div>
                  </div>
                  <div style={{ minWidth: '40px', textAlign: 'right', fontWeight: '600', color: colors.dark, fontSize: '0.9rem' }}>
                    {totalStudents - quizCompleted}
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Test Performance */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: colors.primary, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🎯 Mock Test Completion
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ minWidth: '100px', fontWeight: '500', color: colors.dark, fontSize: '0.9rem' }}>
                    Completed
                  </div>
                  <div style={{ flex: 1, height: '12px', backgroundColor: colors.primaryLight, borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${(mocktestCompleted / totalStudents) * 100}%`, 
                      backgroundColor: colors.info,
                      borderRadius: '10px'
                    }}></div>
                  </div>
                  <div style={{ minWidth: '40px', textAlign: 'right', fontWeight: '600', color: colors.dark, fontSize: '0.9rem' }}>
                    {mocktestCompleted}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ minWidth: '100px', fontWeight: '500', color: colors.dark, fontSize: '0.9rem' }}>
                    Pending
                  </div>
                  <div style={{ flex: 1, height: '12px', backgroundColor: colors.primaryLight, borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${((totalStudents - mocktestCompleted) / totalStudents) * 100}%`, 
                      backgroundColor: colors.muted,
                      borderRadius: '10px'
                    }}></div>
                  </div>
                  <div style={{ minWidth: '40px', textAlign: 'right', fontWeight: '600', color: colors.dark, fontSize: '0.9rem' }}>
                    {totalStudents - mocktestCompleted}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Insights */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>🌟 Performance Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            <div style={{ 
              padding: '20px', 
              background: 'linear-gradient(135deg, rgba(166, 45, 105, 0.1), rgba(166, 45, 105, 0.05))',
              borderRadius: '12px',
              border: `1px solid ${colors.accent}20`
            }}>
              <h4 style={{ color: colors.accent, margin: '0 0 12px 0', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🏆 Top Performing Student
              </h4>
              <p style={{ margin: 0, color: colors.dark, fontWeight: '600', fontSize: '1.1rem' }}>
                {topStudent.name || 'N/A'}
              </p>
              <p style={{ margin: '8px 0 0 0', color: colors.muted, fontSize: '0.9rem' }}>
                Average Score: <span style={{ color: colors.accent, fontWeight: '600' }}>{topStudent.averageScore || 0}%</span>
              </p>
              <p style={{ margin: '4px 0 0 0', color: colors.muted, fontSize: '0.8rem' }}>
                Email: {topStudent.email || 'N/A'}
              </p>
            </div>
            <div style={{ 
              padding: '20px', 
              background: 'linear-gradient(135deg, rgba(45, 93, 123, 0.1), rgba(45, 93, 123, 0.05))',
              borderRadius: '12px',
              border: `1px solid ${colors.primary}20`
            }}>
              <h4 style={{ color: colors.primary, margin: '0 0 12px 0', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📊 Overall Class Average
              </h4>
              <p style={{ margin: 0, color: colors.dark, fontWeight: '600', fontSize: '1.8rem' }}>
                {classAverage}%
              </p>
              <p style={{ margin: '8px 0 0 0', color: colors.muted, fontSize: '0.9rem' }}>
                Across all subjects and students
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // StudentList Component
  const StudentList = () => {
    const containerStyle = {
      padding: '0px 30px 20px 30px',
      backgroundColor: colors.light,
      minHeight: 'calc(100vh - 200px)'
    };

    const controlsStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      gap: '15px'
    };

    const searchInputStyle = {
      padding: '12px 15px',
      border: `1px solid ${colors.borderColor}`,
      borderRadius: '8px',
      fontSize: '0.9rem',
      width: '300px'
    };

    const filterSelectStyle = {
      padding: '12px 15px',
      border: `1px solid ${colors.borderColor}`,
      borderRadius: '8px',
      fontSize: '0.9rem',
      backgroundColor: colors.white
    };

    const tableStyle = {
      width: '100%',
      backgroundColor: colors.white,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      border: `1px solid ${colors.borderColor}`
    };

    const tableHeaderStyle = {
      backgroundColor: colors.primary,
      color: colors.white,
      padding: '15px 20px',
      textAlign: 'left',
      fontWeight: '600',
      fontSize: '0.9rem'
    };

    const tableCellStyle = {
      padding: '15px 20px',
      fontSize: '0.85rem',
      color: colors.dark
    };

    const avatarStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.white,
      fontWeight: 'bold',
      fontSize: '0.9rem',
      marginRight: '10px'
    };

    const studentInfoStyle = {
      display: 'flex',
      alignItems: 'center'
    };

    const statusStyle = (status) => ({
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
      backgroundColor: status === 'complete' ? colors.success + '20' : colors.warning + '20',
      color: status === 'complete' ? colors.success : colors.warning
    });

    const viewDetailsButtonStyle = {
      padding: '8px 16px',
      backgroundColor: colors.primary,
      color: colors.white,
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.8rem',
      fontWeight: '600',
      minWidth: '100px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };

    const filteredStudents = studentsData.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' ||
                           (filterStatus === 'quiz' && student.quiz.status === 'complete') ||
                           (filterStatus === 'mocktest' && student.mocktest.status === 'complete') ||
                           (filterStatus === 'pending' && (student.quiz.status === 'pending' || student.mocktest.status === 'pending'));
      return matchesSearch && matchesFilter;
    });

    return (
      <div style={containerStyle}>
        <div style={controlsStyle}>
          <input
            type="text"
            placeholder="Search students by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={filterSelectStyle}
          >
            <option value="all">All Students</option>
            <option value="quiz">Quiz Completed</option>
            <option value="mocktest">Mock Test Completed</option>
            <option value="pending">Pending Tests</option>
          </select>
        </div>

        <div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ ...tableHeaderStyle, width: '5%' }}>S.No</th>
                <th style={{ ...tableHeaderStyle, width: '25%' }}>Student</th>
                <th style={{ ...tableHeaderStyle, width: '15%' }}>Quiz Status</th>
                <th style={{ ...tableHeaderStyle, width: '15%' }}>Mock Test Status</th>
                <th style={{ ...tableHeaderStyle, width: '15%' }}>Average Score</th>
                <th style={{ ...tableHeaderStyle, width: '15%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => {
                const averageScore = Object.values(student.subjects).reduce((acc, subject) => acc + subject.score, 0) / Object.keys(student.subjects).length;
                
                return (
                  <tr key={student.id} style={{ borderBottom: `1px solid ${colors.borderColor}` }}>
                    <td style={tableCellStyle}><strong>{index + 1}</strong></td>
                    <td style={tableCellStyle}>
                      <div style={studentInfoStyle}>
                        <div style={avatarStyle}>{student.initials}</div>
                        <div>
                          <div style={{fontWeight: '600', marginBottom: '2px'}}>{student.name}</div>
                          <div style={{fontSize: '0.75rem', color: colors.muted}}>{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <span style={statusStyle(student.quiz.status)}>
                        {student.quiz.status === 'complete' ? `Completed (${student.quiz.score}%)` : 'Pending'}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <span style={statusStyle(student.mocktest.status)}>
                        {student.mocktest.status === 'complete' ? `Completed (${student.mocktest.score}%)` : 'Pending'}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <strong style={{ color: colors.primary, fontSize: '0.9rem' }}>
                        {averageScore.toFixed(1)}%
                      </strong>
                    </td>
                    <td style={tableCellStyle}>
                      <button
                        style={viewDetailsButtonStyle}
                        onClick={() => handleViewDetails(student)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: colors.muted }}>
            No students found matching your search criteria.
          </div>
        )}
      </div>
    );
  };

  // ExportModal Component
  const ExportModal = () => {
    if (!showExportConfirm) return null;

    const overlayStyle = {
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
    };

    const modalStyle = {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      maxWidth: '500px',
      width: '90%'
    };

    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h3 style={{ marginTop: 0 }}>Export Student Results</h3>
          <p>You are about to export student records.</p>
          <p>This will include all assessment data and subject scores.</p>
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <button
              style={{ padding: '10px 20px', margin: '0 10px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
              onClick={() => setShowExportConfirm(false)}
            >
              Cancel
            </button>
            <button
              style={{ padding: '10px 20px', margin: '0 10px', border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: colors.primary, color: 'white' }}
              onClick={() => {
                alert('Exporting student records...');
                setShowExportConfirm(false);
              }}
            >
              Confirm Export
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main container with responsive layout
  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: colors.light
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0px', // Desktop: sidebar width
    width: 'calc(100% - 240px)', // Desktop: remaining space
    minWidth: 'calc(100% - 240px)',
    overflowX: 'auto',
    '@media (max-width: 768px)': {
      marginLeft: '0px', // Mobile: full width
      width: '100%', // Mobile: full width
      minWidth: '100%'
    }
  };

  return (
    <div style={containerStyle}>
      <ExportModal />
      <Sidebar />
      
      <div style={mainContentStyle}>
        {currentView !== 'details' && !showAnalytics && (
          <>
            <ContentHeader />
            <SummaryCards />
          </>
        )}

        {showAnalytics ? (
          <AnalyticsView />
        ) : (
          <>
            {currentView === 'details' ? (
              <Studentresults 
                selectedStudent={selectedStudent} 
                handleBackToList={handleBackToList} 
              />
            ) : !showAnalytics && (
              <StudentList />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;