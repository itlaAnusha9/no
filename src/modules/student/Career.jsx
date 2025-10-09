








// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   ArrowUpRight, BarChart2, BookOpen, Briefcase, Clock, Compass,
//   Globe, GraduationCap, Rocket, Star, Target, TrendingUp, Users, X,
//   Bookmark, Award, Code, Music, Palette, Mic
// } from 'lucide-react';
// import { useTranslation } from 'react-i18next';
// import './career.css';
// import { useQuiz } from './QuizContext';
// import Navbar from './Navbarrr';
 
// const Career = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const { quizResults, mockTestResults } = useQuiz();
 
//   useEffect(() => {
//     document.title = `${t('performance.title')} | NOVYA - Your Smart Learning Platform`;
//   }, [t]);
 
//   const [animatedStats, setAnimatedStats] = useState({
//     students: 0,
//     successRate: 0,
//     careers: 0,
//     universities: 0
//   });
//   const [showDetails, setShowDetails] = useState(null);
//   const [heroAnimation, setHeroAnimation] = useState(false);
 
//   const metricsRef = useRef(null);
//   const futureRef = useRef(null);
 
//   useEffect(() => {
//     const animateValue = (start, end, duration, callback) => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         const current = Math.floor(progress * (end - start) + start);
//         callback(current);
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     };
 
//     animateValue(0, 12500, 2000, (val) => setAnimatedStats(prev => ({...prev, students: val})));
//     animateValue(0, 92, 1800, (val) => setAnimatedStats(prev => ({...prev, successRate: val})));
//     animateValue(0, 350, 2200, (val) => setAnimatedStats(prev => ({...prev, careers: val})));
//     animateValue(0, 2800, 2500, (val) => setAnimatedStats(prev => ({...prev, universities: val})));
 
//     setTimeout(() => {
//       setHeroAnimation(true);
//     }, 500);
//   }, []);
 
//   const scrollToMetrics = () => {
//     metricsRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };
 
//   const navigateToHome = () => {
//     navigate('/student/dashboard');
//   };
 
//   const quizAverage = quizResults.totalQuestions > 0
//     ? ((quizResults.totalScore / quizResults.totalQuestions) * 100).toFixed(1)
//     : 0;
//   const mockAverage = mockTestResults.totalQuestions > 0
//     ? ((mockTestResults.totalScore / mockTestResults.totalQuestions) * 100).toFixed(1)
//     : 0;
 
//   const performanceMetrics = [
//     {
//       id: 'academic',
//       title: t('performance.academic'),
//       icon: <GraduationCap size={24} />,
//       metrics: [
//         { name: t('metrics.gpa'), value: 3.8, max: 4.0, trend: 'up' },
//         { name: t('metrics.testScores'), value: 92, max: 100, trend: 'steady' },
//         { name: t('metrics.courseRigor'), value: 4, max: 5, trend: 'up' }
//       ],
//       details: {
//         description: t('academic.description'),
//         strengths: [
//           t('academic.strengths.0'),
//           t('academic.strengths.1'),
//           t('academic.strengths.2')
//         ],
//         recommendations: [
//           t('academic.recommendations.0'),
//           t('academic.recommendations.1'),
//           t('academic.recommendations.2')
//         ],
//         chartData: {
//           labels: [
//             t('academic.chart.labels.math'),
//             t('academic.chart.labels.science'),
//             t('academic.chart.labels.english'),
//             t('academic.chart.labels.history'),
//             t('academic.chart.labels.foreignLang')
//           ],
//           datasets: [
//             {
//               label: t('academic.chart.datasets.yourScores'),
//               data: [95, 93, 88, 85, 80],
//               backgroundColor: 'rgba(102, 126, 234, 0.6)'
//             },
//             {
//               label: t('academic.chart.datasets.classAverage'),
//               data: [82, 81, 85, 78, 75],
//               backgroundColor: 'rgba(200, 200, 200, 0.6)'
//             }
//           ]
//         }
//       }
//     },
//     {
//       id: 'quiz',
//       title: t('performance.quiz'),
//       icon: <BookOpen size={24} />,
//       metrics: [
//         { name: t('metrics.totalQuizzes'), value: quizResults.totalQuizzes, trend: 'up' },
//         { name: t('metrics.averageScore'), value: parseFloat(quizAverage), unit: '%', max: 100, trend: 'up' },
//         { name: t('metrics.totalQuestions'), value: quizResults.totalQuestions, trend: 'steady' }
//       ],
//       details: {
//         description: t('quiz.description'),
//         strengths: [
//           t('quiz.strengths.0'),
//           t('quiz.strengths.1', { count: Object.keys(quizResults.byLevel).length }),
//           t('quiz.strengths.2')
//         ],
//         recommendations: [
//           t('quiz.recommendations.0'),
//           t('quiz.recommendations.1'),
//           t('quiz.recommendations.2')
//         ],
//         chartData: {
//           labels: Object.keys(quizResults.byLevel).length > 0
//             ? Object.keys(quizResults.byLevel)
//             : [t('quiz.chart.noData') || 'No Data'],
//           datasets: [
//             {
//               label: t('quiz.chart.label'),
//               data: Object.keys(quizResults.byLevel).length > 0
//                 ? Object.values(quizResults.byLevel)
//                 : [0],
//               backgroundColor: 'rgba(102, 126, 234, 0.6)'
//             }
//           ]
//         }
//       }
//     },
//     {
//       id: 'mock',
//       title: t('performance.mock'),
//       icon: <Clock size={24} />,
//       metrics: [
//         { name: t('metrics.totalTests'), value: mockTestResults.totalTests, trend: 'up' },
//         { name: t('metrics.averageScore'), value: parseFloat(mockAverage), unit: '%', max: 100, trend: 'up' },
//         { name: t('metrics.totalQuestions'), value: mockTestResults.totalQuestions, trend: 'steady' }
//       ],
//       details: {
//         description: t('mock.description'),
//         strengths: [
//           t('mock.strengths.0'),
//           t('mock.strengths.1'),
//           t('mock.strengths.2')
//         ],
//         recommendations: [
//           t('mock.recommendations.0'),
//           t('mock.recommendations.1'),
//           t('mock.recommendations.2')
//         ],
//         chartData: {
//           labels: [t('mock.chart.label')],
//           datasets: [
//             {
//               label: t('performance.title'),
//               data: [parseFloat(mockAverage) || 0],
//               backgroundColor: 'rgba(75, 192, 192, 0.6)'
//             }
//           ]
//         }
//       }
//     }
//   ];
 
//   // Compute translations safely before assigning to studentDetails
//   const interestsList = t('profile.interestsList', { returnObjects: true });
//   const hobbiesList = t('profile.hobbies', { returnObjects: true });
//   const recentAchievementsList = t('profile.recentAchievements', { returnObjects: true });
 
//   const studentDetails = {
//     name: "Alex Johnson",
//     grade: t('profile.grade'),
//     school: "Maplewood Middle School",
//     avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
//     interests: Array.isArray(interestsList) ? interestsList : [],
//     strengths: [
//       { name: t('profile.strengthsList.0'), icon: <Bookmark size={16} /> },
//       { name: t('profile.strengthsList.1'), icon: <Award size={16} /> },
//       { name: t('profile.strengthsList.2'), icon: <Code size={16} /> }
//     ],
//     hobbies: Array.isArray(hobbiesList) ? hobbiesList.map((name, i) => ({
//       name,
//       icon: [Code, Music, Palette, Mic][i % 4] // Use modulo to prevent index out of bounds
//     })) : [],
//     recentAchievements: Array.isArray(recentAchievementsList) ? recentAchievementsList : []
//   };
 
//   const openDetails = (category) => {
//     setShowDetails(category);
//     document.body.style.overflow = 'hidden';
//   };
 
//   const closeDetails = () => {
//     setShowDetails(null);
//     document.body.style.overflow = 'auto';
//   };
 
//   return (
//     <div className="career-container">
//       <Navbar isFullScreen={false} />
//       <div className="bg-elements">
//         <div className="floating-shape shape-1"></div>
//         <div className="floating-shape shape-2"></div>
//         <div className="floating-shape shape-3"></div>
//         <div className="floating-shape shape-4"></div>
//         <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '15%', left: '5%' }}>
//           <Rocket size={24} />
//         </div>
//         <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '25%', right: '8%', animationDelay: '0.3s' }}>
//           <BookOpen size={24} />
//         </div>
//         <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '70%', left: '10%', animationDelay: '0.6s' }}>
//           <Briefcase size={24} />
//         </div>
//         <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ bottom: '20%', right: '12%', animationDelay: '0.9s' }}>
//           <Globe size={24} />
//         </div>
//       </div>
 
//       <section className="career-hero" ref={futureRef}>
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="hero-title">
//               <span className={`title-word ${heroAnimation ? 'animate' : ''}`}>{t('hero.title.shape')}</span>{' '}
//               <span className={`title-word ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>{t('hero.title.your')}</span>{' '}
//               <span className={`gradient-text ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>{t('hero.title.future')}</span>
//             </h1>
//             <p className={`hero-subtitle ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
//               {t('hero.subtitle')}
//             </p>
           
//             <div className={`hero-cta ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
//               <button className="cta-btn primary" onClick={scrollToMetrics}>
//                 <BarChart2 size={20} />
//                 {t('hero.cta.viewDashboard')}
//               </button>
//             </div>
//           </div>
         
//           <div className={`hero-visual ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '1s' }}>
//             <div className="performance-scale">
//               <div className="scale-item scale-excellent">
//                 <Star size={32} />
//                 <span>{t('scale.excellent')}</span>
//                 <div className="scale-pulse"></div>
//               </div>
//               <div className="scale-item scale-good">
//                 <TrendingUp size={32} />
//                 <span>{t('scale.good')}</span>
//                 <div className="scale-pulse"></div>
//               </div>
//               <div className="scale-item scale-average">
//                 <BarChart2 size={32} />
//                 <span>{t('scale.average')}</span>
//                 <div className="scale-pulse"></div>
//               </div>
//               <div className="scale-item scale-needs-improvement">
//                 <Compass size={32} />
//                 <span>{t('scale.needsWork')}</span>
//                 <div className="scale-pulse"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
 
//       <section className="stats-section">
//         <div className="stats-container">
//           <div className="stat-item">
//             <div className="stat-icon">
//               <Users size={32} />
//             </div>
//             <div className="stat-number">{animatedStats.students.toLocaleString()}+</div>
//             <div className="stat-label">{t('stats.studentsTracked')}</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-icon">
//               <Star size={32} />
//             </div>
//             <div className="stat-number">{animatedStats.successRate}%</div>
//             <div className="stat-label">{t('stats.improvementRate')}</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-icon">
//               <Target size={32} />
//             </div>
//             <div className="stat-number">{animatedStats.careers}+</div>
//             <div className="stat-label">{t('stats.metricsTracked')}</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-icon">
//               <Clock size={32} />
//             </div>
//             <div className="stat-number">{animatedStats.universities.toLocaleString()}+</div>
//             <div className="stat-label">{t('stats.hoursAnalyzed')}</div>
//           </div>
//         </div>
//       </section>
 
//       <section className="performance-section" ref={metricsRef}>
//         <h2 className="section-title">{t('performance.title')}</h2>
//         <p className="section-subtitle">
//           {t('performance.subtitle')}
//         </p>
       
//         <div className="metrics-grid">
//           {performanceMetrics.map((category) => (
//             <div key={category.id} className="metric-card">
//               <div className="metric-header">
//                 <div className="metric-icon">
//                   {category.icon}
//                 </div>
//                 <h3 className="metric-title">{category.title}</h3>
//               </div>
             
//               <div className="metric-items">
//                 {category.metrics.map((metric, index) => (
//                   <div key={index} className="metric-item">
//                     <div className="metric-info">
//                       <span className="metric-name">{metric.name}</span>
//                       <span className="metric-value">
//                         {typeof metric.value === 'number' && metric.value % 1 !== 0
//                           ? metric.value.toFixed(1)
//                           : metric.value}
//                         {metric.unit ? metric.unit : (metric.max ? ` / ${metric.max}` : '')}
//                       </span>
//                     </div>
//                     {metric.max && (
//                       <div className="metric-bar">
//                         <div
//                           className="bar-fill"
//                           style={{
//                             width: `${(metric.value / metric.max) * 100}%`,
//                             backgroundColor: getMetricColor(metric.value, metric.max)
//                           }}
//                         ></div>
//                       </div>
//                     )}
//                     <div className="metric-trend">
//                       {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
//                       {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
//                       {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
//                     </div>
//                   </div>
//                 ))}
//               </div>
             
//               <button className="metric-btn" onClick={() => openDetails(category)}>
//                 {t('viewDetails')}
//                 <ArrowUpRight size={16} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
 
//       <section className="scale-section">
//         <h2 className="section-title" style={{ textAlign: "center", width: "45%" }}>
//           {t('scale.title')}
//         </h2>
//         <p className="section-subtitle">
//           {t('scale.subtitle')}
//         </p>
       
//         <div className="scale-container">
//           <div className="scale-level">
//             <div className="scale-label" style={{ backgroundColor: '#4CAF50' }}>
//               <span>{t('scale.excellent')}</span>
//               <span>{t('scale.excellentPercent')}</span>
//             </div>
//             <div className="scale-description">
//               {t('scale.excellentDesc')}
//             </div>
//           </div>
         
//           <div className="scale-level">
//             <div className="scale-label" style={{ backgroundColor: '#8BC34A' }}>
//               <span>{t('scale.good')}</span>
//               <span>{t('scale.goodPercent')}</span>
//             </div>
//             <div className="scale-description">
//               {t('scale.goodDesc')}
//             </div>
//           </div>
         
//           <div className="scale-level">
//             <div className="scale-label" style={{ backgroundColor: '#FFC107' }}>
//               <span>{t('scale.average')}</span>
//               <span>{t('scale.averagePercent')}</span>
//             </div>
//             <div className="scale-description">
//               {t('scale.averageDesc')}
//             </div>
//           </div>
         
//           <div className="scale-level">
//             <div className="scale-label" style={{ backgroundColor: '#FF9800' }}>
//               <span>{t('scale.developing')}</span>
//               <span>{t('scale.developingPercent')}</span>
//             </div>
//             <div className="scale-description">
//               {t('scale.developingDesc')}
//             </div>
//           </div>
         
//           <div className="scale-level">
//             <div className="scale-label" style={{ backgroundColor: '#F44336' }}>
//               <span>{t('scale.needsWork')}</span>
//               <span>{t('scale.needsWorkPercent')}</span>
//             </div>
//             <div className="scale-description">
//               {t('scale.needsWorkDesc')}
//             </div>
//           </div>
//         </div>
//       </section>
 
//       <section className="career-cta">
//         <div className="cta-content">
//           <h2>{t('cta.title')}</h2>
//           <p>
//             {t('cta.subtitle')}
//           </p>
//           <div className="cta-buttons">
//             <button className="cta-btn primary" onClick={scrollToMetrics}>
//               <BarChart2 size={20} />
//               {t('cta.viewReport')}
//             </button>
//           </div>
//         </div>
//       </section>
 
//       {showDetails && (
//         <div className="details-modal">
//           <div className="modal-overlay" onClick={closeDetails}></div>
//           <div className="modal-content">
//             <button className="modal-close" onClick={closeDetails}>
//               <X size={24} />
//             </button>
           
//             <div className="modal-header">
//               <div className="modal-icon">
//                 {showDetails.icon}
//               </div>
//               <h2>{showDetails.title}</h2>
//               <p>{showDetails.details.description}</p>
//             </div>
           
//             <div className="modal-grid">
//               <div className="student-profile">
//                 <div className="profile-header">
//                   <img src={studentDetails.avatar} alt="Student" className="profile-avatar" />
//                   <div>
//                     <h3>{studentDetails.name}</h3>
//                     <p>{studentDetails.grade} • {studentDetails.school}</p>
//                   </div>
//                 </div>
               
//                 <div className="profile-section">
//                   <h4>{t('profile.interests')}</h4>
//                   <div className="interests-list">
//                     {studentDetails.interests.map((interest, index) => (
//                       <span key={index} className="interest-tag">{interest}</span>
//                     ))}
//                   </div>
//                 </div>
               
//                 <div className="profile-section">
//                   <h4>{t('modal.strengths')}</h4>
//                   <ul className="strengths-list">
//                     {studentDetails.strengths.map((strength, index) => (
//                       <li key={index}>
//                         {strength.icon}
//                         <span>{strength.name}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
               
//                 <div className="profile-section">
//                   <h4>{t('profile.achievements')}</h4>
//                   <ul className="achievements-list">
//                     {studentDetails.recentAchievements.map((achievement, index) => (
//                       <li key={index}>
//                         <Award size={16} />
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
             
//               <div className="performance-details">
//                 <div className="detail-section">
//                   <h3>{t('modal.keyMetrics')}</h3>
//                   <div className="detail-metrics">
//                     {showDetails.metrics.map((metric, index) => (
//                       <div key={index} className="detail-metric">
//                         <div className="metric-label">
//                           {metric.name}
//                           <span className="metric-trend">
//                             {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
//                             {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
//                             {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
//                           </span>
//                         </div>
//                         <div className="metric-value">
//                           {typeof metric.value === 'number' && metric.value % 1 !== 0
//                             ? metric.value.toFixed(1)
//                             : metric.value}
//                           {metric.unit ? metric.unit : (metric.max ? ` / ${metric.max}` : '')}
//                         </div>
//                         {metric.max && (
//                           <div className="metric-bar">
//                             <div
//                               className="bar-fill"
//                               style={{
//                                 width: `${(metric.value / metric.max) * 100}%`,
//                                 backgroundColor: getMetricColor(metric.value, metric.max)
//                               }}
//                             ></div>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
               
//                 <div className="detail-section">
//                   <h3>{t('modal.strengths')}</h3>
//                   <ul className="strengths-list">
//                     {showDetails.details.strengths.map((strength, index) => (
//                       <li key={index}>
//                         <Award size={16} color="#4CAF50" />
//                         <span>{strength}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
               
//                 <div className="detail-section">
//                   <h3>{t('modal.recommendations')}</h3>
//                   <ul className="recommendations-list">
//                     {showDetails.details.recommendations.map((recommendation, index) => (
//                       <li key={index}>
//                         <Compass size={16} color="#667eea" />
//                         <span>{recommendation}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
 
// const getMetricColor = (value, max) => {
//   if (!max) return '#667eea';
//   const percentage = (value / max) * 100;
//   if (percentage >= 90) return '#4CAF50';
//   if (percentage >= 75) return '#8BC34A';
//   if (percentage >= 50) return '#FFC107';
//   if (percentage >= 25) return '#FF9800';
//   return '#F44336';
// };
 
// export default Career;























import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, BarChart2, BookOpen, Briefcase, Clock, Compass,
  Globe, GraduationCap, Rocket, Star, Target, TrendingUp, Users, X,
  Bookmark, Award, Code, Music, Palette, Mic
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './career.css';
import { useQuiz } from './QuizContext';
import Navbar from './Navbarrr';

// Translation dictionary for Career component
const careerTranslations = {
  en: {
    // Hero Section
    hero: {
      title: {
        shape: "Shape",
        your: "Your",
        future: "Future"
      },
      subtitle: "Discover your potential, track your progress, and unlock career paths tailored to your unique strengths and performance.",
      cta: {
        viewDashboard: "View Performance Dashboard"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "Students Tracked",
      improvementRate: "Improvement Rate",
      metricsTracked: "Metrics Tracked", 
      hoursAnalyzed: "Hours Analyzed"
    },

    // Performance Section
    performance: {
      title: "Performance Overview",
      subtitle: "Comprehensive analysis of your academic and testing performance across different metrics",
      academic: "Academic Performance",
      quiz: "Quiz Performance", 
      mock: "Mock Test Performance"
    },

    // Metrics
    metrics: {
      gpa: "GPA Score",
      testScores: "Test Scores",
      courseRigor: "Course Rigor",
      totalQuizzes: "Total Quizzes",
      averageScore: "Average Score",
      totalQuestions: "Total Questions",
      totalTests: "Total Tests"
    },

    // Scale Section
    scale: {
      title: "Performance Scale",
      subtitle: "Understand your performance levels and areas for improvement",
      excellent: "Excellent",
      good: "Good",
      average: "Average", 
      developing: "Developing",
      needsWork: "Needs Work",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "Outstanding performance with consistent excellence",
      goodDesc: "Strong performance with good understanding",
      averageDesc: "Satisfactory performance with room for growth",
      developingDesc: "Developing skills that need attention",
      needsWorkDesc: "Requires significant improvement and focus"
    },

    // CTA Section
    cta: {
      title: "Ready to Transform Your Learning Journey?",
      subtitle: "Join thousands of students who have discovered their true potential and achieved remarkable success with personalized insights.",
      viewReport: "View Detailed Report"
    },

    // Modal & Details
    viewDetails: "View Details",
    modal: {
      strengths: "Key Strengths",
      recommendations: "Recommendations",
      keyMetrics: "Key Metrics"
    },

    // Academic Details
    academic: {
      description: "Strong academic foundation with consistent performance across subjects.",
      strengths: [
        "Excellent problem-solving skills in mathematics",
        "Strong analytical thinking in science subjects",
        "Consistent performance improvement over time"
      ],
      recommendations: [
        "Focus on advanced mathematics concepts",
        "Enhance scientific writing skills",
        "Explore interdisciplinary projects"
      ],
      chart: {
        labels: {
          math: "Mathematics",
          science: "Science", 
          english: "English",
          history: "History",
          foreignLang: "Foreign Language"
        },
        datasets: {
          yourScores: "Your Scores",
          classAverage: "Class Average"
        }
      }
    },

    // Quiz Details  
    quiz: {
      description: "Consistent quiz performance showing good understanding of concepts.",
      strengths: [
        "Strong retention of learned concepts",
        "Good performance across {{count}} difficulty levels",
        "Quick adaptation to different question formats"
      ],
      recommendations: [
        "Practice time management for quizzes",
        "Focus on weak areas identified",
        "Attempt more advanced level quizzes"
      ],
      chart: {
        noData: "No Data",
        label: "Quiz Performance"
      }
    },

    // Mock Test Details
    mock: {
      description: "Solid mock test performance with good exam temperament.",
      strengths: [
        "Good time management during tests",
        "Consistent performance under pressure",
        "Effective revision strategies"
      ],
      recommendations: [
        "Practice full-length tests regularly",
        "Work on speed and accuracy balance",
        "Analyze mistakes thoroughly"
      ],
      chart: {
        label: "Mock Test Average"
      }
    },

    // Profile
    profile: {
      grade: "Grade 8 Student",
      interests: "Interests",
      achievements: "Recent Achievements",
      interestsList: ["Mathematics", "Science", "Programming", "Robotics"],
      strengthsList: [
        "Analytical Thinking",
        "Problem Solving", 
        "Logical Reasoning"
      ],
      hobbies: ["Coding", "Music", "Art", "Public Speaking"],
      recentAchievements: [
        "Math Olympiad Regional Finalist",
        "Science Fair 1st Prize",
        "Coding Competition Winner"
      ]
    }
  },

  hi: {
    // Hero Section
    hero: {
      title: {
        shape: "आकार",
        your: "दें",
        future: "भविष्य"
      },
      subtitle: "अपनी क्षमता की खोज करें, अपनी प्रगति को ट्रैक करें, और अपनी अनूठी शक्तियों और प्रदर्शन के अनुरूप करियर पथ खोलें।",
      cta: {
        viewDashboard: "प्रदर्शन डैशबोर्ड देखें"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "छात्र ट्रैक किए",
      improvementRate: "सुधार दर",
      metricsTracked: "मैट्रिक्स ट्रैक किए",
      hoursAnalyzed: "घंटे विश्लेषित"
    },

    // Performance Section
    performance: {
      title: "प्रदर्शन अवलोकन",
      subtitle: "विभिन्न मैट्रिक्स में आपके शैक्षणिक और परीक्षण प्रदर्शन का व्यापक विश्लेषण",
      academic: "शैक्षणिक प्रदर्शन",
      quiz: "क्विज प्रदर्शन",
      mock: "मॉक टेस्ट प्रदर्शन"
    },

    // Metrics
    metrics: {
      gpa: "जीपीए स्कोर",
      testScores: "टेस्ट स्कोर",
      courseRigor: "कोर्स कठोरता",
      totalQuizzes: "कुल क्विज़",
      averageScore: "औसत स्कोर",
      totalQuestions: "कुल प्रश्न",
      totalTests: "कुल टेस्ट"
    },

    scale: {
      title: "प्रदर्शन स्केल",
      subtitle: "अपने प्रदर्शन स्तरों और सुधार के क्षेत्रों को समझें",
      excellent: "उत्कृष्ट",
      good: "अच्छा",
      average: "औसत",
      developing: "विकासशील",
      needsWork: "सुधार की आवश्यकता",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "लगातार उत्कृष्टता के साथ उत्कृष्ट प्रदर्शन",
      goodDesc: "अच्छी समझ के साथ मजबूत प्रदर्शन",
      averageDesc: "विकास के लिए जगह के साथ संतोषजनक प्रदर्शन",
      developingDesc: "ध्यान देने की आवश्यकता वाले विकासशील कौशल",
      needsWorkDesc: "काफी सुधार और ध्यान देने की आवश्यकता"
    },

    cta: {
      title: "अपनी लर्निंग जर्नी को बदलने के लिए तैयार हैं?",
      subtitle: "हजारों छात्रों में शामिल हों जिन्होंने व्यक्तिगत अंतर्दृष्टि के साथ अपनी वास्तविक क्षमता की खोज की और उल्लेखनीय सफलता हासिल की।",
      viewReport: "विस्तृत रिपोर्ट देखें"
    },

    viewDetails: "विवरण देखें",
    modal: {
      strengths: "मुख्य शक्तियाँ",
      recommendations: "सिफारिशें",
      keyMetrics: "मुख्य मैट्रिक्स"
    },

    academic: {
      description: "विषयों में लगातार प्रदर्शन के साथ मजबूत शैक्षणिक आधार।",
      strengths: [
        "गणित में उत्कृष्ट समस्या-समाधान कौशल",
        "विज्ञान विषयों में मजबूत विश्लेषणात्मक सोच",
        "समय के साथ लगातार प्रदर्शन में सुधार"
      ],
      recommendations: [
        "उन्नत गणित अवधारणाओं पर ध्यान दें",
        "वैज्ञानिक लेखन कौशल बढ़ाएँ",
        "अंतःविषय परियोजनाओं का अन्वेषण करें"
      ],
      chart: {
        labels: {
          math: "गणित",
          science: "विज्ञान",
          english: "अंग्रेजी",
          history: "इतिहास",
          foreignLang: "विदेशी भाषा"
        },
        datasets: {
          yourScores: "आपके स्कोर",
          classAverage: "कक्षा औसत"
        }
      }
    },

    quiz: {
      description: "अवधारणाओं की अच्छी समझ दिखाते हुए लगातार क्विज प्रदर्शन।",
      strengths: [
        "सीखी गई अवधारणाओं की मजबूत धारण",
        "{{count}} कठिनाई स्तरों में अच्छा प्रदर्शन",
        "विभिन्न प्रश्न प्रारूपों के लिए त्वरित अनुकूलन"
      ],
      recommendations: [
        "क्विज़ के लिए समय प्रबंधन का अभ्यास करें",
        "पहचाने गए कमजोर क्षेत्रों पर ध्यान दें",
        "अधिक उन्नत स्तर की क्विज़ का प्रयास करें"
      ],
      chart: {
        noData: "कोई डेटा नहीं",
        label: "क्विज प्रदर्शन"
      }
    },

    mock: {
      description: "अच्छे परीक्षा स्वभाव के साथ ठोस मॉक टेस्ट प्रदर्शन।",
      strengths: [
        "टेस्ट के दौरान अच्छा समय प्रबंधन",
        "दबाव में लगातार प्रदर्शन",
        "प्रभावी संशोधन रणनीतियाँ"
      ],
      recommendations: [
        "नियमित रूप से पूर्ण लंबाई वाले टेस्ट का अभ्यास करें",
        "गति और सटीकता संतुलन पर काम करें",
        "गलतियों का पूरी तरह से विश्लेषण करें"
      ],
      chart: {
        label: "मॉक टेस्ट औसत"
      }
    },

    profile: {
      grade: "कक्षा 8 छात्र",
      interests: "रुचियाँ",
      achievements: "हाल की उपलब्धियाँ",
      interestsList: ["गणित", "विज्ञान", "प्रोग्रामिंग", "रोबोटिक्स"],
      strengthsList: [
        "विश्लेषणात्मक सोच",
        "समस्या समाधान",
        "तार्किक तर्क"
      ],
      hobbies: ["कोडिंग", "संगीत", "कला", "सार्वजनिक बोल"],
      recentAchievements: [
        "गणित ओलंपियाड क्षेत्रीय फाइनलिस्ट",
        "विज्ञान मेला प्रथम पुरस्कार",
        "कोडिंग प्रतियोगिता विजेता"
      ]
    }
  },

  te: {
    // Hero Section
    hero: {
      title: {
        shape: "ఆకారం",
        your: "మీ",
        future: "భవిష్యత్తు"
      },
      subtitle: "మీ సామర్థ్యాన్ని కనుగొనండి, మీ పురోగతిని ట్రాక్ చేయండి, మరియు మీ ప్రత్యేక బలాలు మరియు పనితీరుకు అనుగుణంగా కెరీర్ మార్గాలను అన్లాక్ చేయండి.",
      cta: {
        viewDashboard: "పనితీరు డాష్బోర్డ్ చూడండి"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "విద్యార్థులు ట్రాక్ చేయబడ్డారు",
      improvementRate: "మెరుగుదల రేటు",
      metricsTracked: "మెట్రిక్స్ ట్రాక్ చేయబడ్డాయి",
      hoursAnalyzed: "గంటలు విశ్లేషించబడ్డాయి"
    },

    // Performance Section
    performance: {
      title: "పనితీరు అవలోకనం",
      subtitle: "వివిధ మెట్రిక్స్లలో మీ అకడమిక్ మరియు టెస్టింగ్ పనితీరు యొక్క సమగ్ర విశ్లేషణ",
      academic: "అకడమిక్ పనితీరు",
      quiz: "క్విజ్ పనితీరు",
      mock: "మాక్ టెస్ట్ పనితీరు"
    },

    // Metrics
    metrics: {
      gpa: "GPA స్కోర్",
      testScores: "టెస్ట్ స్కోర్లు",
      courseRigor: "కోర్సు కఠినత",
      totalQuizzes: "మొత్తం క్విజ్లు",
      averageScore: "సగటు స్కోర్",
      totalQuestions: "మొత్తం ప్రశ్నలు",
      totalTests: "మొత్తం టెస్ట్లు"
    },

    scale: {
      title: "పనితీరు స్కేల్",
      subtitle: "మీ పనితీరు స్థాయిలు మరియు మెరుగుదల కోసం ప్రాంతాలను అర్థం చేసుకోండి",
      excellent: "అద్భుతమైన",
      good: "మంచి",
      average: "సగటు",
      developing: "అభివృద్ధి చెందుతున్న",
      needsWork: "పని కావాలి",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "స్థిరమైన శ్రేష్ఠతతో అద్భుతమైన పనితీరు",
      goodDesc: "మంచి అవగాహనతో బలమైన పనితీరు",
      averageDesc: "వృద్ధి కోసం స్థలంతో సంతృప్తికరమైన పనితీరు",
      developingDesc: "శ్రద్ధ అవసరమయ్యే అభివృద్ధి చెందుతున్న నైపుణ్యాలు",
      needsWorkDesc: "గణనీయమైన మెరుగుదల మరియు ఫోకస్ అవసరం"
    },

    cta: {
      title: "మీ లెర్నింగ్ జర్నీని మార్చడానికి సిద్ధంగా ఉన్నారా?",
      subtitle: "వ్యక్తిగతీకరించిన అంతర్దృష్టులతో తమ నిజమైన సామర్థ్యాన్ని కనుగొని అద్భుతమైన విజయాన్ని సాధించిన వేలాది విద్యార్థులలో చేరండి.",
      viewReport: "వివరణాత్మక నివేదిక చూడండి"
    },

    viewDetails: "వివరాలు చూడండి",
    modal: {
      strengths: "ప్రధాన బలాలు",
      recommendations: "సిఫార్సులు",
      keyMetrics: "ప్రధాన మెట్రిక్స్"
    },

    academic: {
      description: "విషయాల్లో స్థిరమైన పనితీరుతో బలమైన అకడమిక్ పునాది.",
      strengths: [
        "గణితంలో అద్భుతమైన ప్రాబ్లెమ్ సాల్వింగ్ నైపుణ్యాలు",
        "సైన్స్ విషయాలలో బలమైన విశ్లేషణాత్మక ఆలోచన",
        "కాలక్రమేణా స్థిరమైన పనితీరు మెరుగుదల"
      ],
      recommendations: [
        "అడ్వాన్స్డ్ మ్యాథమెటిక్స్ కాన్సెప్ట్స్పై ఫోకస్ చేయండి",
        "సైంటిఫిక్ రైటింగ్ స్కిల్స్ను మెరుగుపరచండి",
        "ఇంటర్డిసిప్లినరీ ప్రాజెక్ట్లను అన్వేషించండి"
      ],
      chart: {
        labels: {
          math: "గణితం",
          science: "సైన్స్",
          english: "ఇంగ్లీష్",
          history: "చరిత్ర",
          foreignLang: "విదేశీ భాష"
        },
        datasets: {
          yourScores: "మీ స్కోర్లు",
          classAverage: "క్లాస్ సగటు"
        }
      }
    },

    quiz: {
      description: "కాన్సెప్ట్స్ యొక్క మంచి అవగాహనను చూపిస్తున్న స్థిరమైన క్విజ్ పనితీరు.",
      strengths: [
        "నేర్చుకున్న కాన్సెప్ట్స్ యొక్క బలమైన రిటెన్షన్",
        "{{count}} డిఫికల్టీ లెవల్స్లో మంచి పనితీరు",
        "విభిన్న ప్రశ్న ఫార్మాట్లకు త్వరిత అడాప్టేషన్"
      ],
      recommendations: [
        "క్విజ్ల కోసం టైమ్ మేనేజ్మెంట్ ప్రాక్టీస్ చేయండి",
        "గుర్తించబడిన బలహీనమైన ప్రాంతాలపై దృష్టి పెట్టండి",
        "మరిన్ని అడ్వాన్స్డ్ లెవల్ క్విజ్లను ప్రయత్నించండి"
      ],
      chart: {
        noData: "డేటా లేదు",
        label: "క్విజ్ పనితీరు"
      }
    },

    mock: {
      description: "మంచి ఎగ్జామ్ టెంపరమెంట్తో ఘనమైన మాక్ టెస్ట్ పనితీరు.",
      strengths: [
        "టెస్ట్ల సమయంలో మంచి టైమ్ మేనేజ్మెంట్",
        "ఒత్తిడిలో స్థిరమైన పనితీరు",
        "ప్రభావవంతమైన రివిజన్ వ్యూహాలు"
      ],
      recommendations: [
        "నియమితంగా ఫుల్-లెంగ్త్ టెస్ట్లను ప్రాక్టీస్ చేయండి",
        "స్పీడ్ మరియు యాక్యూరసీ బ్యాలెన్స్పై పని చేయండి",
        "తప్పులను సంపూర్ణంగా విశ్లేషించండి"
      ],
      chart: {
        label: "మాక్ టెస్ట్ సగటు"
      }
    },

    profile: {
      grade: "గ్రేడ్ 8 విద్యార్థి",
      interests: "ఆసక్తులు",
      achievements: "ఇటీవలి విజయాలు",
      interestsList: ["గణితం", "సైన్స్", "ప్రోగ్రామింగ్", "రోబోటిక్స్"],
      strengthsList: [
        "విశ్లేషణాత్మక ఆలోచన",
        "సమస్య పరిష్కారం",
        "తార్కిక తార్కికం"
      ],
      hobbies: ["కోడింగ్", "సంగీతం", "కళ", "పబ్లిక్ స్పీకింగ్"],
      recentAchievements: [
        "గణిత ఒలింపియాడ్ రీజినల్ ఫైనలిస్ట్",
        "సైన్స్ ఫెయిర్ 1వ బహుమతి",
        "కోడింగ్ పోటీ విజేత"
      ]
    }
  },

  ta: {
    // Hero Section
    hero: {
      title: {
        shape: "வடிவமைக்க",
        your: "உங்கள்",
        future: "எதிர்காலம்"
      },
      subtitle: "உங்கள் திறன்களைக் கண்டறியவும், உங்கள் முன்னேற்றத்தைக் கண்காணிக்கவும், உங்கள் தனித்துவமான பலங்கள் மற்றும் செயல்திறனுக்கு ஏற்ற வாழ்க்கைப் பாதைகளைத் திறக்கவும்.",
      cta: {
        viewDashboard: "செயல்திறன் டாஷ்போர்டு காண்க"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "மாணவர்கள் கண்காணிக்கப்பட்டனர்",
      improvementRate: "மேம்பாடு விகிதம்",
      metricsTracked: "மெட்ரிக்ஸ் கண்காணிக்கப்பட்டது",
      hoursAnalyzed: "மணிநேரம் பகுப்பாய்வு செய்யப்பட்டது"
    },

    // Performance Section
    performance: {
      title: "செயல்திறன் கண்ணோட்டம்",
      subtitle: "வெவ்வேறு மெட்ரிக்ஸ்களில் உங்கள் கல்வி மற்றும் சோதனை செயல்திறனின் விரிவான பகுப்பாய்வு",
      academic: "கல்வி செயல்திறன்",
      quiz: "வினாடி வினா செயல்திறன்",
      mock: "பயிற்சி சோதனை செயல்திறன்"
    },

    // Metrics
    metrics: {
      gpa: "GPA மதிப்பெண்",
      testScores: "சோதனை மதிப்பெண்கள்",
      courseRigor: "பாடம் கடினத்தன்மை",
      totalQuizzes: "மொத்த வினாடி வினாக்கள்",
      averageScore: "சராசரி மதிப்பெண்",
      totalQuestions: "மொத்த கேள்விகள்",
      totalTests: "மொத்த சோதனைகள்"
    },

    // Scale Section
    scale: {
      title: "செயல்திறன் அளவுகோல்",
      subtitle: "உங்கள் செயல்திறன் நிலைகள் மற்றும் மேம்பாட்டுக்கான பகுதிகளைப் புரிந்து கொள்ளுங்கள்",
      excellent: "சிறந்த",
      good: "நல்ல",
      average: "சராசரி",
      developing: "வளர்ச்சியடைவது",
      needsWork: "மேம்பாடு தேவை",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "தொடர்ச்சியான சிறந்த செயல்திறனுடன் கூடிய சிறந்த செயல்திறன்",
      goodDesc: "நல்ல புரிதலுடன் கூடிய வலுவான செயல்திறன்",
      averageDesc: "வளர்ச்சிக்கான இடத்துடன் கூடிய திருப்திகரமான செயல்திறன்",
      developingDesc: "கவனம் தேவைப்படும் வளரும் திறன்கள்",
      needsWorkDesc: "கணிசமான மேம்பாடு மற்றும் கவனம் தேவை"
    },

    // CTA Section
    cta: {
      title: "உங்கள் கற்றல் பயணத்தை மாற்ற தயாரா?",
      subtitle: "தனிப்பயனாக்கப்பட்ட நுண்ணறிவுகளுடன் அவர்களின் உண்மையான திறனைக் கண்டறிந்து குறிப்பிடத்தக்க வெற்றியை அடைந்த ஆயிரக்கணக்கான மாணவர்களில் சேருங்கள்.",
      viewReport: "விரிவான அறிக்கையைக் காண்க"
    },

    // Modal & Details
    viewDetails: "விவரங்களைக் காண்க",
    modal: {
      strengths: "முக்கிய பலங்கள்",
      recommendations: "பரிந்துரைகள்",
      keyMetrics: "முக்கிய மெட்ரிக்ஸ்"
    },

    // Academic Details
    academic: {
      description: "பாடங்களில் தொடர்ச்சியான செயல்திறனுடன் கூடிய வலுவான கல்வி அடித்தளம்.",
      strengths: [
        "கணிதத்தில் சிறந்த சிக்கல் தீர்க்கும் திறன்கள்",
        "அறிவியல் பாடங்களில் வலுவான பகுப்பாய்வு சிந்தனை",
        "காலப்போக்கில் தொடர்ச்சியான செயல்திறன் மேம்பாடு"
      ],
      recommendations: [
        "மேம்பட்ட கணிதக் கருத்துகளில் கவனம் செலுத்துங்கள்",
        "அறிவியல் எழுத்துத் திறன்களை மேம்படுத்துங்கள்",
        "இடைப்பாடத் திட்டங்களை ஆராயுங்கள்"
      ],
      chart: {
        labels: {
          math: "கணிதம்",
          science: "அறிவியல்",
          english: "ஆங்கிலம்",
          history: "வரலாறு",
          foreignLang: "வெளிநாட்டு மொழி"
        },
        datasets: {
          yourScores: "உங்கள் மதிப்பெண்கள்",
          classAverage: "வகுப்பு சராசரி"
        }
      }
    },

    // Quiz Details
    quiz: {
      description: "கருத்துகளின் நல்ல புரிதலைக் காட்டும் தொடர்ச்சியான வினாடி வினா செயல்திறன்.",
      strengths: [
        "கற்றுக்கொண்ட கருத்துகளின் வலுவான நினைவாற்றல்",
        "{{count}} சிரம அளவுகளில் நல்ல செயல்திறன்",
        "வெவ்வேறு கேள்வி வடிவங்களுக்கு விரைவான தகவமைப்பு"
      ],
      recommendations: [
        "வினாடி வினாக்களுக்கான நேர மேலாண்மை பயிற்சி செய்யுங்கள்",
        "அடையாளம் காணப்பட்ட பலவீனமான பகுதிகளில் கவனம் செலுத்துங்கள்",
        "மேம்பட்ட நிலை வினாடி வினாக்களை முயற்சிக்கவும்"
      ],
      chart: {
        noData: "தரவு இல்லை",
        label: "வினாடி வினா செயல்திறன்"
      }
    },

    // Mock Test Details
    mock: {
      description: "நல்ல தேர்வு மனோபாவத்துடன் கூடிய திடமான பயிற்சி சோதனை செயல்திறன்.",
      strengths: [
        "சோதனைகளின் போது நல்ல நேர மேலாண்மை",
        "அழுத்தத்தின் கீழ் தொடர்ச்சியான செயல்திறன்",
        "பயனுள்ள மறுபரிசீலனை உத்திகள்"
      ],
      recommendations: [
        "வழக்கமாக முழு நீள சோதனைகளை பயிற்சி செய்யுங்கள்",
        "வேகம் மற்றும் துல்லிய சமநிலையில் வேலை செய்யுங்கள்",
        "தவறுகளை முழுமையாக பகுப்பாய்வு செய்யுங்கள்"
      ],
      chart: {
        label: "பயிற்சி சோதனை சராசரி"
      }
    },

    // Profile
    profile: {
      grade: "தரம் 8 மாணவர்",
      interests: "விருப்பங்கள்",
      achievements: "சமீபத்திய சாதனைகள்",
      interestsList: ["கணிதம்", "அறிவியல்", "நிரலாக்கம்", "ரோபாட்டிக்ஸ்"],
      strengthsList: [
        "பகுப்பாய்வு சிந்தனை",
        "சிக்கல் தீர்த்தல்",
        "தர்க்கரீதியான பகுத்தறிவு"
      ],
      hobbies: ["கோடிங்", "இசை", "கலை", "பொது உரையாற்றல்"],
      recentAchievements: [
        "கணித ஒலிம்பியாட் பிராந்திய இறுதிப் போட்டியாளர்",
        "அறிவியல் கண்காட்சி முதல் பரிசு",
        "கோடிங் போட்டி வெற்றியாளர்"
      ]
    }
  },

  ml: {
    // Hero Section
    hero: {
      title: {
        shape: "രൂപപ്പെടുത്തുക",
        your: "നിങ്ങളുടെ",
        future: "ഭാവി"
      },
      subtitle: "നിങ്ങളുടെ സാധ്യതകൾ കണ്ടെത്തുക, നിങ്ങളുടെ പുരോഗതി ട്രാക്ക് ചെയ്യുക, നിങ്ങളുടെ അദ്വിതീയ ശക്തികൾക്കും പ്രകടനത്തിനും അനുയോജ്യമായ കരിയർ പാതകൾ അൺലോക്ക് ചെയ്യുക.",
      cta: {
        viewDashboard: "പ്രകടന ഡാഷ്ബോർഡ് കാണുക"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "വിദ്യാർത്ഥികൾ ട്രാക്ക് ചെയ്തു",
      improvementRate: "മെച്ചപ്പെടുത്തൽ നിരക്ക്",
      metricsTracked: "മെട്രിക്സ് ട്രാക്ക് ചെയ്തു",
      hoursAnalyzed: "മണിക്കൂറുകൾ വിശകലനം ചെയ്തു"
    },

    // Performance Section
    performance: {
      title: "പ്രകടന അവലോകനം",
      subtitle: "വിവിധ മെട്രിക്സുകളിലുടനീളം നിങ്ങളുടെ അക്കാദമിക്, ടെസ്റ്റിംഗ് പ്രകടനത്തിന്റെ സമഗ്രമായ വിശകലനം",
      academic: "അക്കാദമിക് പ്രകടനം",
      quiz: "ക്വിസ് പ്രകടനം",
      mock: "മോക്ക് ടെസ്റ്റ് പ്രകടനം"
    },

    // Metrics
    metrics: {
      gpa: "GPA സ്കോർ",
      testScores: "ടെസ്റ്റ് സ്കോറുകൾ",
      courseRigor: "കോഴ്സ് കഠിനത",
      totalQuizzes: "ആകെ ക്വിസുകൾ",
      averageScore: "ശരാശരി സ്കോർ",
      totalQuestions: "ആകെ ചോദ്യങ്ങൾ",
      totalTests: "ആകെ ടെസ്റ്റുകൾ"
    },

    // Scale Section
    scale: {
      title: "പ്രകടന സ്കെയിൽ",
      subtitle: "നിങ്ങളുടെ പ്രകടന ലെവലുകളും മെച്ചപ്പെടുത്തൽ മേഖലകളും മനസ്സിലാക്കുക",
      excellent: "മികച്ച",
      good: "നല്ല",
      average: "ശരാശരി",
      developing: "വികസിപ്പിക്കുന്ന",
      needsWork: "മെച്ചപ്പെടുത്തൽ ആവശ്യമാണ്",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "സ്ഥിരമായ മികവോടെ മികച്ച പ്രകടനം",
      goodDesc: "നല്ല ധാരണയോടെ ശക്തമായ പ്രകടനം",
      averageDesc: "വളർച്ചയ്ക്കുള്ള സ്ഥലത്തോടെ തൃപ്തികരമായ പ്രകടനം",
      developingDesc: "ശ്രദ്ധ ആവശ്യമുള്ള വികസിപ്പിക്കുന്ന കഴിവുകൾ",
      needsWorkDesc: "കണക്കാക്കാവുന്ന മെച്ചപ്പെടുത്തലും ഫോക്കസും ആവശ്യമാണ്"
    },

    // CTA Section
    cta: {
      title: "നിങ്ങളുടെ ലേണിംഗ് ജേർണി രൂപാന്തരപ്പെടുത്താൻ തയ്യാറാണോ?",
      subtitle: "വ്യക്തിഗത ഉൾദർശനങ്ങൾ ഉപയോഗിച്ച് അവരുടെ യഥാർത്ഥ സാധ്യതകൾ കണ്ടെത്തി ശ്രദ്ധേയമായ വിജയം നേടിയ ആയിരക്കണക്കിന് വിദ്യാർത്ഥികളിൽ ചേരുക.",
      viewReport: "വിശദമായ റിപ്പോർട്ട് കാണുക"
    },

    // Modal & Details
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    modal: {
      strengths: "പ്രധാന ശക്തികൾ",
      recommendations: "ശുപാർശകൾ",
      keyMetrics: "പ്രധാന മെട്രിക്സ്"
    },

    // Academic Details
    academic: {
      description: "വിഷയങ്ങളിലുടനീളം സ്ഥിരമായ പ്രകടനത്തോടെ ശക്തമായ അക്കാദമിക് അടിത്തറ.",
      strengths: [
        "ഗണിതശാസ്ത്രത്തിൽ മികച്ച പ്രശ്നപരിഹാര കഴിവുകൾ",
        "സയൻസ് വിഷയങ്ങളിൽ ശക്തമായ അനലിറ്റിക്കൽ ചിന്ത",
        "കാലക്രമേണ സ്ഥിരമായ പ്രകടന മെച്ചപ്പെടുത്തൽ"
      ],
      recommendations: [
        "അഡ്വാൻസ്ഡ് മാത്തമാറ്റിക്കൽ ആശയങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക",
        "സയന്റിഫിക് റൈറ്റിംഗ് സ്കില്ലുകൾ മെച്ചപ്പെടുത്തുക",
        "ഇന്റർഡിസിപ്ലിനറി പ്രോജക്ടുകൾ പര്യവേക്ഷണം ചെയ്യുക"
      ],
      chart: {
        labels: {
          math: "ഗണിതം",
          science: "സയൻസ്",
          english: "ഇംഗ്ലീഷ്",
          history: "ചരിത്രം",
          foreignLang: "വിദേശ ഭാഷ"
        },
        datasets: {
          yourScores: "നിങ്ങളുടെ സ്കോറുകൾ",
          classAverage: "ക്ലാസ് ശരാശരി"
        }
      }
    },

    // Quiz Details
    quiz: {
      description: "ആശയങ്ങളുടെ നല്ല ധാരണ കാണിക്കുന്ന സ്ഥിരമായ ക്വിസ് പ്രകടനം.",
      strengths: [
        "പഠിച്ച ആശയങ്ങളുടെ ശക്തമായ റിട്ടൻഷൻ",
        "{{count}} ഡിഫികൾറ്റി ലെവലുകളിൽ നല്ല പ്രകടനം",
        "വ്യത്യസ്ത ചോദ്യ ഫോർമാറ്റുകളിലേക്ക് വേഗത്തിൽ അഡാപ്റ്റ് ചെയ്യൽ"
      ],
      recommendations: [
        "ക്വിസുകൾക്കായി ടൈം മാനേജ്മെന്റ് പരിശീലിക്കുക",
        "അടയാളപ്പെടുത്തിയ ദുർബലമായ മേഖലകളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക",
        "കൂടുതൽ അഡ്വാൻസ്ഡ് ലെവൽ ക്വിസുകൾ ശ്രമിക്കുക"
      ],
      chart: {
        noData: "ഡാറ്റ ഇല്ല",
        label: "ക്വിസ് പ്രകടനം"
      }
    },

    // Mock Test Details
    mock: {
      description: "നല്ല പരീക്ഷാ സ്വഭാവത്തോടെ ദൃഢമായ മോക്ക് ടെസ്റ്റ് പ്രകടനം.",
      strengths: [
        "ടെസ്റ്റുകളിൽ നല്ല ടൈം മാനേജ്മെന്റ്",
        "സമ്മർദ്ദത്തിൽ സ്ഥിരമായ പ്രകടനം",
        "ഫലപ്രദമായ റിവിഷൻ തന്ത്രങ്ങൾ"
      ],
      recommendations: [
        "നിയമിതമായി ഫുൾ-ലെങ്ത് ടെസ്റ്റുകൾ പരിശീലിക്കുക",
        "സ്പീഡ്, അക്യൂറസി ബാലൻസിൽ പ്രവർത്തിക്കുക",
        "തെറ്റുകൾ സമഗ്രമായി വിശകലനം ചെയ്യുക"
      ],
      chart: {
        label: "മോക്ക് ടെസ്റ്റ് ശരാശരി"
      }
    },

    // Profile
    profile: {
      grade: "ഗ്രേഡ് 8 വിദ്യാർത്ഥി",
      interests: "താൽപ്പര്യങ്ങൾ",
      achievements: "സമീപകാല നേട്ടങ്ങൾ",
      interestsList: ["ഗണിതം", "സയൻസ്", "പ്രോഗ്രാമിംഗ്", "റോബോട്ടിക്സ്"],
      strengthsList: [
        "വിശകലന ചിന്ത",
        "പ്രശ്നപരിഹാരം",
        "ലോജിക്കൽ റീസണിംഗ്"
      ],
      hobbies: ["കോഡിംഗ്", "സംഗീതം", "കല", "പബ്ലിക് സ്പീക്കിംഗ്"],
      recentAchievements: [
        "മാത്ത് ഒളിമ്പ്യാഡ് റീജിയണൽ ഫൈനലിസ്റ്റ്",
        "സയൻസ് ഫെയർ ഫസ്റ്റ് പ്രൈസ്",
        "കോഡിംഗ് കമ്പറ്റിഷൻ വിജയി"
      ]
    }
  },

  kn: {
    // Hero Section
    hero: {
      title: {
        shape: "ರೂಪಿಸಿ",
        your: "ನಿಮ್ಮ",
        future: "ಭವಿಷ್ಯ"
      },
      subtitle: "ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ, ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ, ಮತ್ತು ನಿಮ್ಮ ಅನನ್ಯ ಶಕ್ತಿಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಗೆ ಅನುಗುಣವಾದ ವೃತ್ತಿ ಮಾರ್ಗಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ.",
      cta: {
        viewDashboard: "ಕಾರ್ಯಕ್ಷಮತೆ ಡ್ಯಾಶ್ಬೋರ್ಡ್ ವೀಕ್ಷಿಸಿ"
      }
    },

    // Stats Section
    stats: {
      studentsTracked: "ವಿದ್ಯಾರ್ಥಿಗಳು ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
      improvementRate: "ಮೆಜಾರು ದರ",
      metricsTracked: "ಮೆಟ್ರಿಕ್ಸ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ",
      hoursAnalyzed: "ಗಂಟೆಗಳು ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ"
    },

    // Performance Section
    performance: {
      title: "ಕಾರ್ಯಕ್ಷಮತೆ ಅವಲೋಕನ",
      subtitle: "ವಿವಿಧ ಮೆಟ್ರಿಕ್ಸ್‌ಗಳಾದ್ಯಂತ ನಿಮ್ಮ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಪರೀಕ್ಷಾ ಕಾರ್ಯಕ್ಷಮತೆಯ ಸಮಗ್ರ ವಿಶ್ಲೇಷಣೆ",
      academic: "ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ಷಮತೆ",
      quiz: "ಕ್ವಿಜ್ ಕಾರ್ಯಕ್ಷಮತೆ",
      mock: "ಮಾಕ್ ಟೆಸ್ಟ್ ಕಾರ್ಯಕ್ಷಮತೆ"
    },

    // Metrics
    metrics: {
      gpa: "GPA ಸ್ಕೋರ್",
      testScores: "ಪರೀಕ್ಷಾ ಸ್ಕೋರ್‌ಗಳು",
      courseRigor: "ಕೋರ್ಸ್ ಕಠಿಣತೆ",
      totalQuizzes: "ಒಟ್ಟು ಕ್ವಿಜ್‌ಗಳು",
      averageScore: "ಸರಾಸರಿ ಸ್ಕೋರ್",
      totalQuestions: "ಒಟ್ಟು ಪ್ರಶ್ನೆಗಳು",
      totalTests: "ಒಟ್ಟು ಪರೀಕ್ಷೆಗಳು"
    },

    // Scale Section
    scale: {
      title: "ಕಾರ್ಯಕ್ಷಮತೆ ಸ್ಕೇಲ್",
      subtitle: "ನಿಮ್ಮ ಕಾರ್ಯಕ್ಷಮತೆ ಮಟ್ಟಗಳು ಮತ್ತು ಮೆಜಾರು ಮಾಡಬೇಕಾದ ಪ್ರದೇಶಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
      excellent: "ಅತ್ಯುತ್ತಮ",
      good: "ಉತ್ತಮ",
      average: "ಸರಾಸರಿ",
      developing: "ಅಭಿವೃದ್ಧಿ ಹಂತದಲ್ಲಿ",
      needsWork: "ಮೆಜಾರು ಅಗತ್ಯವಿದೆ",
      excellentPercent: "90-100%",
      goodPercent: "75-89%",
      averagePercent: "50-74%",
      developingPercent: "25-49%",
      needsWorkPercent: "0-24%",
      excellentDesc: "ಸ್ಥಿರವಾದ ಶ್ರೇಷ್ಠತೆಯೊಂದಿಗೆ ಅತ್ಯುತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆ",
      goodDesc: "ಉತ್ತಮ ತಿಳುವಳಿಕೆಯೊಂದಿಗೆ ಬಲವಾದ ಕಾರ್ಯಕ್ಷಮತೆ",
      averageDesc: "ವೃದ್ಧಿಗೆ ಸ್ಥಳದೊಂದಿಗೆ ತೃಪ್ತಿಕರ ಕಾರ್ಯಕ್ಷಮತೆ",
      developingDesc: "ಗಮನ ಬೇಕಾದ ಅಭಿವೃದ್ಧಿ ಹಂತದ ಕೌಶಲ್ಯಗಳು",
      needsWorkDesc: "ಗಮನಾರ್ಹ ಮೆಜಾರು ಮತ್ತು ಫೋಕಸ್ ಅಗತ್ಯವಿದೆ"
    },

    // CTA Section
    cta: {
      title: "ನಿಮ್ಮ ಕಲಿಕೆ ಪ್ರಯಾಣವನ್ನು ರೂಪಾಂತರಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
      subtitle: "ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಒಳನೋಟಗಳೊಂದಿಗೆ ತಮ್ಮ ನಿಜವಾದ ಸಾಮರ್ಥ್ಯವನ್ನು ಕಂಡುಹಿಡಿದು ಗಮನಾರ್ಹ ಯಶಸ್ಸನ್ನು ಸಾಧಿಸಿದ ಸಾವಿರಾರು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸೇರಿಕೊಳ್ಳಿ.",
      viewReport: "ವಿವರವಾದ ವರದಿ ವೀಕ್ಷಿಸಿ"
    },

    // Modal & Details
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    modal: {
      strengths: "ಪ್ರಮುಖ ಶಕ್ತಿಗಳು",
      recommendations: "ಶಿಫಾರಸುಗಳು",
      keyMetrics: "ಪ್ರಮುಖ ಮೆಟ್ರಿಕ್ಸ್"
    },

    // Academic Details
    academic: {
      description: "ವಿಷಯಗಳಾದ್ಯಂತ ಸ್ಥಿರವಾದ ಕಾರ್ಯಕ್ಷಮತೆಯೊಂದಿಗೆ ಬಲವಾದ ಶೈಕ್ಷಣಿಕ ಅಡಿಪಾಯ.",
      strengths: [
        "ಗಣಿತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಸಮಸ್ಯೆ ಪರಿಹಾರ ಕೌಶಲ್ಯಗಳು",
        "ವಿಜ್ಞಾನ ವಿಷಯಗಳಲ್ಲಿ ಬಲವಾದ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಚಿಂತನೆ",
        "ಕಾಲಾನಂತರದಲ್ಲಿ ಸ್ಥಿರವಾದ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಜಾರು"
      ],
      recommendations: [
        "ಸುಧಾರಿತ ಗಣಿತ ಪರಿಕಲ್ಪನೆಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿ",
        "ವೈಜ್ಞಾನಿಕ ಬರವಣಿಗೆ ಕೌಶಲ್ಯಗಳನ್ನು ಮೆರಗುಗೊಳಿಸಿ",
        "ಅಂತರಶಿಸ್ತೀಯ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"
      ],
      chart: {
        labels: {
          math: "ಗಣಿತ",
          science: "ವಿಜ್ಞಾನ",
          english: "ಇಂಗ್ಲಿಷ್",
          history: "ಇತಿಹಾಸ",
          foreignLang: "ವಿದೇಶಿ ಭಾಷೆ"
        },
        datasets: {
          yourScores: "ನಿಮ್ಮ ಸ್ಕೋರ್‌ಗಳು",
          classAverage: "ವರ್ಗ ಸರಾಸರಿ"
        }
      }
    },

    // Quiz Details
    quiz: {
      description: "ಪರಿಕಲ್ಪನೆಗಳ ಉತ್ತಮ ತಿಳುವಳಿಕೆಯನ್ನು ತೋರಿಸುವ ಸ್ಥಿರವಾದ ಕ್ವಿಜ್ ಕಾರ್ಯಕ್ಷಮತೆ.",
      strengths: [
        "ಕಲಿತ ಪರಿಕಲ್ಪನೆಗಳ ಬಲವಾದ ಧಾರಣ ಶಕ್ತಿ",
        "{{count}} ಕಠಿಣತೆ ಮಟ್ಟಗಳಲ್ಲಿ ಉತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆ",
        "ವಿಭಿನ್ನ ಪ್ರಶ್ನೆ ಸ್ವರೂಪಗಳಿಗೆ ತ್ವರಿತ ಹೊಂದಾಣಿಕೆ"
      ],
      recommendations: [
        "ಕ್ವಿಜ್‌ಗಳಿಗೆ ಸಮಯ ನಿರ್ವಹಣೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ",
        "ಗುರುತಿಸಲಾದ ದುರ್ಬಲ ಪ್ರದೇಶಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿ",
        "ಹೆಚ್ಚು ಸುಧಾರಿತ ಮಟ್ಟದ ಕ್ವಿಜ್‌ಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ"
      ],
      chart: {
        noData: "ಡೇಟಾ ಇಲ್ಲ",
        label: "ಕ್ವಿಜ್ ಕಾರ್ಯಕ್ಷಮತೆ"
      }
    },

    // Mock Test Details
    mock: {
      description: "ಉತ್ತಮ ಪರೀಕ್ಷಾ ಸ್ವಭಾವದೊಂದಿಗೆ ಘನವಾದ ಮಾಕ್ ಟೆಸ್ಟ್ ಕಾರ್ಯಕ್ಷಮತೆ.",
      strengths: [
        "ಪರೀಕ್ಷೆಗಳ ಸಮಯದಲ್ಲಿ ಉತ್ತಮ ಸಮಯ ನಿರ್ವಹಣೆ",
        "ಒತ್ತಡದಲ್ಲಿ ಸ್ಥಿರವಾದ ಕಾರ್ಯಕ್ಷಮತೆ",
        "ಪರಿಣಾಮಕಾರಿ ಪುನರಾವಲೋಕನ ತಂತ್ರಗಳು"
      ],
      recommendations: [
        "ನಿಯಮಿತವಾಗಿ ಪೂರ್ಣ-ಉದ್ದದ ಪರೀಕ್ಷೆಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ",
        "ವೇಗ ಮತ್ತು ನಿಖರತೆ ಸಮತೋಲನದ ಮೇಲೆ ಕೆಲಸ ಮಾಡಿ",
        "ತಪ್ಪುಗಳನ್ನು ಸಮಗ್ರವಾಗಿ ವಿಶ್ಲೇಷಿಸಿ"
      ],
      chart: {
        label: "ಮಾಕ್ ಟೆಸ್ಟ್ ಸರಾಸರಿ"
      }
    },

    // Profile
    profile: {
      grade: "ಗ್ರೇಡ್ 8 ವಿದ್ಯಾರ್ಥಿ",
      interests: "ಆಸಕ್ತಿಗಳು",
      achievements: "ಇತ್ತೀಚಿನ ಸಾಧನೆಗಳು",
      interestsList: ["ಗಣಿತ", "ವಿಜ್ಞಾನ", "ಪ್ರೋಗ್ರಾಮಿಂಗ್", "ರೋಬೋಟಿಕ್ಸ್"],
      strengthsList: [
        "ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಚಿಂತನೆ",
        "ಸಮಸ್ಯೆ ಪರಿಹಾರ",
        "ತಾರ್ಕಿಕ ತಾರ್ಕಿಕತೆ"
      ],
      hobbies: ["ಕೋಡಿಂಗ್", "ಸಂಗೀತ", "ಕಲೆ", "ಸಾರ್ವಜನಿಕ ಮಾತನಾಡುವಿಕೆ"],
      recentAchievements: [
        "ಗಣಿತ ಒಲಿಂಪಿಯಾಡ್ ಪ್ರಾದೇಶಿಕ ಫೈನಲಿಸ್ಟ್",
        "ವಿಜ್ಞಾನ ಮೇಳ ಮೊದಲ ಬಹುಮಾನ",
        "ಕೋಡಿಂಗ್ ಸ್ಪರ್ಧೆ ವಿಜೇತ"
      ]
    }
  }
};

const Career = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { quizResults, mockTestResults } = useQuiz();

  // Custom translation function for Career component
  const ct = (key) => {
    const keys = key.split('.');
    let value = careerTranslations[i18n.language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || careerTranslations.en[key] || key;
  };

  useEffect(() => {
    document.title = `${ct('performance.title')} | NOVYA - Your Smart Learning Platform`;
  }, [ct]);

  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    successRate: 0,
    careers: 0,
    universities: 0
  });
  const [showDetails, setShowDetails] = useState(null);
  const [heroAnimation, setHeroAnimation] = useState(false);

  const metricsRef = useRef(null);
  const futureRef = useRef(null);

  useEffect(() => {
    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        callback(current);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 12500, 2000, (val) => setAnimatedStats(prev => ({...prev, students: val})));
    animateValue(0, 92, 1800, (val) => setAnimatedStats(prev => ({...prev, successRate: val})));
    animateValue(0, 350, 2200, (val) => setAnimatedStats(prev => ({...prev, careers: val})));
    animateValue(0, 2800, 2500, (val) => setAnimatedStats(prev => ({...prev, universities: val})));

    setTimeout(() => {
      setHeroAnimation(true);
    }, 500);
  }, []);

  const scrollToMetrics = () => {
    metricsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToHome = () => {
    navigate('/student/dashboard');
  };

  const quizAverage = quizResults.totalQuestions > 0
    ? ((quizResults.totalScore / quizResults.totalQuestions) * 100).toFixed(1)
    : 0;
  const mockAverage = mockTestResults.totalQuestions > 0
    ? ((mockTestResults.totalScore / mockTestResults.totalQuestions) * 100).toFixed(1)
    : 0;

  const performanceMetrics = [
    {
      id: 'academic',
      title: ct('performance.academic'),
      icon: <GraduationCap size={24} />,
      metrics: [
        { name: ct('metrics.gpa'), value: 3.8, max: 4.0, trend: 'up' },
        { name: ct('metrics.testScores'), value: 92, max: 100, trend: 'steady' },
        { name: ct('metrics.courseRigor'), value: 4, max: 5, trend: 'up' }
      ],
      details: {
        description: ct('academic.description'),
        strengths: [
          ct('academic.strengths.0'),
          ct('academic.strengths.1'),
          ct('academic.strengths.2')
        ],
        recommendations: [
          ct('academic.recommendations.0'),
          ct('academic.recommendations.1'),
          ct('academic.recommendations.2')
        ],
        chartData: {
          labels: [
            ct('academic.chart.labels.math'),
            ct('academic.chart.labels.science'),
            ct('academic.chart.labels.english'),
            ct('academic.chart.labels.history'),
            ct('academic.chart.labels.foreignLang')
          ],
          datasets: [
            {
              label: ct('academic.chart.datasets.yourScores'),
              data: [95, 93, 88, 85, 80],
              backgroundColor: 'rgba(102, 126, 234, 0.6)'
            },
            {
              label: ct('academic.chart.datasets.classAverage'),
              data: [82, 81, 85, 78, 75],
              backgroundColor: 'rgba(200, 200, 200, 0.6)'
            }
          ]
        }
      }
    },
    {
      id: 'quiz',
      title: ct('performance.quiz'),
      icon: <BookOpen size={24} />,
      metrics: [
        { name: ct('metrics.totalQuizzes'), value: quizResults.totalQuizzes, trend: 'up' },
        { name: ct('metrics.averageScore'), value: parseFloat(quizAverage), unit: '%', max: 100, trend: 'up' },
        { name: ct('metrics.totalQuestions'), value: quizResults.totalQuestions, trend: 'steady' }
      ],
      details: {
        description: ct('quiz.description'),
        strengths: [
          ct('quiz.strengths.0'),
          ct('quiz.strengths.1', { count: Object.keys(quizResults.byLevel).length }),
          ct('quiz.strengths.2')
        ],
        recommendations: [
          ct('quiz.recommendations.0'),
          ct('quiz.recommendations.1'),
          ct('quiz.recommendations.2')
        ],
        chartData: {
          labels: Object.keys(quizResults.byLevel).length > 0
            ? Object.keys(quizResults.byLevel)
            : [ct('quiz.chart.noData')],
          datasets: [
            {
              label: ct('quiz.chart.label'),
              data: Object.keys(quizResults.byLevel).length > 0
                ? Object.values(quizResults.byLevel)
                : [0],
              backgroundColor: 'rgba(102, 126, 234, 0.6)'
            }
          ]
        }
      }
    },
    {
      id: 'mock',
      title: ct('performance.mock'),
      icon: <Clock size={24} />,
      metrics: [
        { name: ct('metrics.totalTests'), value: mockTestResults.totalTests, trend: 'up' },
        { name: ct('metrics.averageScore'), value: parseFloat(mockAverage), unit: '%', max: 100, trend: 'up' },
        { name: ct('metrics.totalQuestions'), value: mockTestResults.totalQuestions, trend: 'steady' }
      ],
      details: {
        description: ct('mock.description'),
        strengths: [
          ct('mock.strengths.0'),
          ct('mock.strengths.1'),
          ct('mock.strengths.2')
        ],
        recommendations: [
          ct('mock.recommendations.0'),
          ct('mock.recommendations.1'),
          ct('mock.recommendations.2')
        ],
        chartData: {
          labels: [ct('mock.chart.label')],
          datasets: [
            {
              label: ct('performance.title'),
              data: [parseFloat(mockAverage) || 0],
              backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
          ]
        }
      }
    }
  ];

  // Compute translations safely before assigning to studentDetails
  const interestsList = ct('profile.interestsList');
  const hobbiesList = ct('profile.hobbies');
  const recentAchievementsList = ct('profile.recentAchievements');

  const studentDetails = {
    name: "Alex Johnson",
    grade: ct('profile.grade'),
    school: "Maplewood Middle School",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    interests: Array.isArray(interestsList) ? interestsList : [],
    strengths: [
      { name: ct('profile.strengthsList.0'), icon: <Bookmark size={16} /> },
      { name: ct('profile.strengthsList.1'), icon: <Award size={16} /> },
      { name: ct('profile.strengthsList.2'), icon: <Code size={16} /> }
    ],
    hobbies: Array.isArray(hobbiesList) ? hobbiesList.map((name, i) => ({
      name,
      icon: [Code, Music, Palette, Mic][i % 4]
    })) : [],
    recentAchievements: Array.isArray(recentAchievementsList) ? recentAchievementsList : []
  };

  const openDetails = (category) => {
    setShowDetails(category);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setShowDetails(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="career-container">
      <Navbar isFullScreen={false} />
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '15%', left: '5%' }}>
          <Rocket size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '25%', right: '8%', animationDelay: '0.3s' }}>
          <BookOpen size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ top: '70%', left: '10%', animationDelay: '0.6s' }}>
          <Briefcase size={24} />
        </div>
        <div className={`floating-icon ${heroAnimation ? 'animate' : ''}`} style={{ bottom: '20%', right: '12%', animationDelay: '0.9s' }}>
          <Globe size={24} />
        </div>
      </div>

      <section className="career-hero" ref={futureRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className={`title-word ${heroAnimation ? 'animate' : ''}`}>{ct('hero.title.shape')}</span>{' '}
              <span className={`title-word ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>{ct('hero.title.your')}</span>{' '}
              <span className={`gradient-text ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>{ct('hero.title.future')}</span>
            </h1>
            <p className={`hero-subtitle ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              {ct('hero.subtitle')}
            </p>
           
            <div className={`hero-cta ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
              <button className="cta-btn primary" onClick={scrollToMetrics}>
                <BarChart2 size={20} />
                {ct('hero.cta.viewDashboard')}
              </button>
            </div>
          </div>
         
          <div className={`hero-visual ${heroAnimation ? 'animate' : ''}`} style={{ animationDelay: '1s' }}>
            <div className="performance-scale">
              <div className="scale-item scale-excellent">
                <Star size={32} />
                <span>{ct('scale.excellent')}</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-good">
                <TrendingUp size={32} />
                <span>{ct('scale.good')}</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-average">
                <BarChart2 size={32} />
                <span>{ct('scale.average')}</span>
                <div className="scale-pulse"></div>
              </div>
              <div className="scale-item scale-needs-improvement">
                <Compass size={32} />
                <span>{ct('scale.needsWork')}</span>
                <div className="scale-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <Users size={32} />
            </div>
            <div className="stat-number">{animatedStats.students.toLocaleString()}+</div>
            <div className="stat-label">{ct('stats.studentsTracked')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Star size={32} />
            </div>
            <div className="stat-number">{animatedStats.successRate}%</div>
            <div className="stat-label">{ct('stats.improvementRate')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Target size={32} />
            </div>
            <div className="stat-number">{animatedStats.careers}+</div>
            <div className="stat-label">{ct('stats.metricsTracked')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Clock size={32} />
            </div>
            <div className="stat-number">{animatedStats.universities.toLocaleString()}+</div>
            <div className="stat-label">{ct('stats.hoursAnalyzed')}</div>
          </div>
        </div>
      </section>

      <section className="performance-section" ref={metricsRef}>
        <h2 className="section-title">{ct('performance.title')}</h2>
        <p className="section-subtitle">
          {ct('performance.subtitle')}
        </p>
       
        <div className="metrics-grid">
          {performanceMetrics.map((category) => (
            <div key={category.id} className="metric-card">
              <div className="metric-header">
                <div className="metric-icon">
                  {category.icon}
                </div>
                <h3 className="metric-title">{category.title}</h3>
              </div>
             
              <div className="metric-items">
                {category.metrics.map((metric, index) => (
                  <div key={index} className="metric-item">
                    <div className="metric-info">
                      <span className="metric-name">{metric.name}</span>
                      <span className="metric-value">
                        {typeof metric.value === 'number' && metric.value % 1 !== 0
                          ? metric.value.toFixed(1)
                          : metric.value}
                        {metric.unit ? metric.unit : (metric.max ? ` / ${metric.max}` : '')}
                      </span>
                    </div>
                    {metric.max && (
                      <div className="metric-bar">
                        <div
                          className="bar-fill"
                          style={{
                            width: `${(metric.value / metric.max) * 100}%`,
                            backgroundColor: getMetricColor(metric.value, metric.max)
                          }}
                        ></div>
                      </div>
                    )}
                    <div className="metric-trend">
                      {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
                      {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
                      {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
                    </div>
                  </div>
                ))}
              </div>
             
              <button className="metric-btn" onClick={() => openDetails(category)}>
                {ct('viewDetails')}
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="scale-section">
        <h2 className="section-title" style={{ textAlign: "center", width: "45%" }}>
          {ct('scale.title')}
        </h2>
        <p className="section-subtitle">
          {ct('scale.subtitle')}
        </p>
       
        <div className="scale-container">
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#4CAF50' }}>
              <span>{ct('scale.excellent')}</span>
              <span>{ct('scale.excellentPercent')}</span>
            </div>
            <div className="scale-description">
              {ct('scale.excellentDesc')}
            </div>
          </div>
         
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#8BC34A' }}>
              <span>{ct('scale.good')}</span>
              <span>{ct('scale.goodPercent')}</span>
            </div>
            <div className="scale-description">
              {ct('scale.goodDesc')}
            </div>
          </div>
         
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#FFC107' }}>
              <span>{ct('scale.average')}</span>
              <span>{ct('scale.averagePercent')}</span>
            </div>
            <div className="scale-description">
              {ct('scale.averageDesc')}
            </div>
          </div>
         
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#FF9800' }}>
              <span>{ct('scale.developing')}</span>
              <span>{ct('scale.developingPercent')}</span>
            </div>
            <div className="scale-description">
              {ct('scale.developingDesc')}
            </div>
          </div>
         
          <div className="scale-level">
            <div className="scale-label" style={{ backgroundColor: '#F44336' }}>
              <span>{ct('scale.needsWork')}</span>
              <span>{ct('scale.needsWorkPercent')}</span>
            </div>
            <div className="scale-description">
              {ct('scale.needsWorkDesc')}
            </div>
          </div>
        </div>
      </section>

      <section className="career-cta">
        <div className="cta-content">
          <h2>{ct('cta.title')}</h2>
          <p>
            {ct('cta.subtitle')}
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={scrollToMetrics}>
              <BarChart2 size={20} />
              {ct('cta.viewReport')}
            </button>
          </div>
        </div>
      </section>

      {showDetails && (
        <div className="details-modal">
          <div className="modal-overlay" onClick={closeDetails}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeDetails}>
              <X size={24} />
            </button>
           
            <div className="modal-header">
              <div className="modal-icon">
                {showDetails.icon}
              </div>
              <h2>{showDetails.title}</h2>
              <p>{showDetails.details.description}</p>
            </div>
           
            <div className="modal-grid">
              <div className="student-profile">
                <div className="profile-header">
                  <img src={studentDetails.avatar} alt="Student" className="profile-avatar" />
                  <div>
                    <h3>{studentDetails.name}</h3>
                    <p>{studentDetails.grade} • {studentDetails.school}</p>
                  </div>
                </div>
               
                <div className="profile-section">
                  <h4>{ct('profile.interests')}</h4>
                  <div className="interests-list">
                    {studentDetails.interests.map((interest, index) => (
                      <span key={index} className="interest-tag">{interest}</span>
                    ))}
                  </div>
                </div>
               
                <div className="profile-section">
                  <h4>{ct('modal.strengths')}</h4>
                  <ul className="strengths-list">
                    {studentDetails.strengths.map((strength, index) => (
                      <li key={index}>
                        {strength.icon}
                        <span>{strength.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               
                <div className="profile-section">
                  <h4>{ct('profile.achievements')}</h4>
                  <ul className="achievements-list">
                    {studentDetails.recentAchievements.map((achievement, index) => (
                      <li key={index}>
                        <Award size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
             
              <div className="performance-details">
                <div className="detail-section">
                  <h3>{ct('modal.keyMetrics')}</h3>
                  <div className="detail-metrics">
                    {showDetails.metrics.map((metric, index) => (
                      <div key={index} className="detail-metric">
                        <div className="metric-label">
                          {metric.name}
                          <span className="metric-trend">
                            {metric.trend === 'up' && <TrendingUp size={16} color="#4CAF50" />}
                            {metric.trend === 'down' && <TrendingUp size={16} color="#F44336" style={{ transform: 'rotate(180deg)' }} />}
                            {metric.trend === 'steady' && <TrendingUp size={16} color="#FFC107" style={{ transform: 'rotate(90deg)' }} />}
                          </span>
                        </div>
                        <div className="metric-value">
                          {typeof metric.value === 'number' && metric.value % 1 !== 0
                            ? metric.value.toFixed(1)
                            : metric.value}
                          {metric.unit ? metric.unit : (metric.max ? ` / ${metric.max}` : '')}
                        </div>
                        {metric.max && (
                          <div className="metric-bar">
                            <div
                              className="bar-fill"
                              style={{
                                width: `${(metric.value / metric.max) * 100}%`,
                                backgroundColor: getMetricColor(metric.value, metric.max)
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
               
                <div className="detail-section">
                  <h3>{ct('modal.strengths')}</h3>
                  <ul className="strengths-list">
                    {showDetails.details.strengths.map((strength, index) => (
                      <li key={index}>
                        <Award size={16} color="#4CAF50" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               
                <div className="detail-section">
                  <h3>{ct('modal.recommendations')}</h3>
                  <ul className="recommendations-list">
                    {showDetails.details.recommendations.map((recommendation, index) => (
                      <li key={index}>
                        <Compass size={16} color="#667eea" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getMetricColor = (value, max) => {
  if (!max) return '#667eea';
  const percentage = (value / max) * 100;
  if (percentage >= 90) return '#4CAF50';
  if (percentage >= 75) return '#8BC34A';
  if (percentage >= 50) return '#FFC107';
  if (percentage >= 25) return '#FF9800';
  return '#F44336';
};

export default Career;