// // ////old code
// // import React, { useState, useEffect } from 'react';
// // import { useTranslation } from 'react-i18next';
// // import { Users, FileText, BookOpen, Star, Award } from 'lucide-react';

// // const Practice = () => {
// //   const { t } = useTranslation();
// //   const [animatedStats, setAnimatedStats] = useState({
// //     totalTests: 0,
// //     studentsEnrolled: 0
// //   });

// //   useEffect(() => {
// //     document.title = "Practice | NOVYA - Your Smart Learning Platform";

// //     const animateValue = (start, end, duration, callback) => {
// //       let startTimestamp = null;
// //       const step = (timestamp) => {
// //         if (!startTimestamp) startTimestamp = timestamp;
// //         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
// //         const current = Math.floor(progress * (end - start) + start);
// //         callback(current);
// //         if (progress < 1) window.requestAnimationFrame(step);
// //       };
// //       window.requestAnimationFrame(step);
// //     };

// //     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
// //     animateValue(0, 850, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));
// //   }, []);

// //   return (
// //     <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
// //       <style>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //         }
// //         @keyframes slideInLeft {
// //           from { opacity: 0; transform: translateX(-50px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }
// //         @keyframes slideInRight {
// //           from { opacity: 0; transform: translateX(50px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }
// //         @keyframes slideInUp {
// //           from { opacity: 0; transform: translateY(30px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         @keyframes fadeIn {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }
// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); }
// //           50% { transform: scale(1.05); }
// //         }
// //         @keyframes bounce {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-10px); }
// //         }
// //       `}</style>

// //       {/* Hero Section */}
// //       <section
// //         style={{
// //           background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
// //           position: 'relative',
// //           overflow: 'hidden',
// //           paddingTop: '80px',
// //           paddingBottom: '80px'
// //         }}
// //       >
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: '-50%',
// //             right: '-20%',
// //             width: '800px',
// //             height: '800px',
// //             background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
// //             borderRadius: '50%',
// //             animation: 'float 6s ease-in-out infinite'
// //           }}
// //         />
// //         <div
// //           style={{
// //             position: 'absolute',
// //             top: '20%',
// //             left: '-10%',
// //             width: '400px',
// //             height: '400px',
// //             background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
// //             borderRadius: '50%',
// //             animation: 'float 8s ease-in-out infinite reverse'
// //           }}
// //         />

// //         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
// //           <div
// //             style={{
// //               display: 'flex',
// //               flexDirection: 'row',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               flexWrap: 'wrap',
// //               position: 'relative',
// //               zIndex: 1
// //             }}
// //           >
// //             <div 
// //               style={{ 
// //                 flex: '1 1 350px', 
// //                 minWidth: 260,
// //                 paddingTop: '100px'
// //               }}
// //             >
// //               <h1 style={{ 
// //                 fontSize: 'clamp(2rem, 5vw, 3.5rem)',
// //                 fontWeight: '800',
// //                 color: '#1F2937',
// //                 marginBottom: '24px',
// //                 lineHeight: '1.2',
// //                 animation: 'slideInLeft 1s ease-out'
// //               }}>
// //                 {t('masterSubject')}
// //                 <span style={{ 
// //                   background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
// //                   WebkitBackgroundClip: 'text',
// //                   WebkitTextFillColor: 'transparent',
// //                   display: 'block'
// //                 }}>
// //                   {t('smartPractice')}
// //                 </span>
// //               </h1>

// //               <p
// //                 style={{ 
// //                   fontSize: '1.125rem',
// //                   color: '#6B7280',
// //                   marginBottom: '40px',
// //                   lineHeight: '1.8',
// //                   animation: 'slideInLeft 1s ease-out 0.2s both'
// //                 }}
// //               >
// //                 {t('challengeDescription')}
// //               </p>

// //               <div style={{ 
// //                 display: 'grid',
// //                 gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
// //                 gap: '20px',
// //                 marginTop: '40px',
// //                 animation: 'slideInUp 1s ease-out 0.4s both'
// //               }}>
// //                 <div style={{
// //                   background: '#FFFFFF',
// //                   borderRadius: '16px',
// //                   padding: '20px',
// //                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '12px'
// //                 }}>
// //                   <div style={{
// //                     background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
// //                     borderRadius: '12px',
// //                     padding: '10px',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center'
// //                   }}>
// //                     <FileText size={20} color="#FFFFFF" />
// //                   </div>
// //                   <div>
// //                     <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
// //                       {animatedStats.totalTests.toLocaleString()}+
// //                     </div>
// //                     <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('practiceTests')}</div>
// //                   </div>
// //                 </div>
// //                 <div style={{
// //                   background: '#FFFFFF',
// //                   borderRadius: '16px',
// //                   padding: '20px',
// //                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '12px'
// //                 }}>
// //                   <div style={{
// //                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
// //                     borderRadius: '12px',
// //                     padding: '10px',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center'
// //                   }}>
// //                     <Users size={20} color="#FFFFFF" />
// //                   </div>
// //                   <div>
// //                     <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
// //                       {animatedStats.studentsEnrolled.toLocaleString()}+
// //                     </div>
// //                     <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('studentsLearning')}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div
// //               style={{
// //                 flex: '1 1 320px',
// //                 maxWidth: 420,
// //                 minWidth: 220,
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 alignItems: 'center',
// //                 margin: '40px auto 0',
// //                 animation: 'slideInRight 1s ease-out 0.3s both'
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   width: '100%',
// //                   maxWidth: '320px',
// //                   height: '240px',
// //                   background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
// //                   borderRadius: '24px',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   position: 'relative',
// //                   boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.25)',
// //                   animation: 'pulse 4s ease-in-out infinite',
// //                   marginBottom: '18px'
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     fontSize: '80px',
// //                     color: '#FFFFFF',
// //                     opacity: 0.9,
// //                     animation: 'bounce 2s infinite'
// //                   }}
// //                 >
// //                   👨‍🎓
// //                 </div>
// //                 <div
// //                   style={{
// //                     position: 'absolute',
// //                     top: '20px',
// //                     right: '20px',
// //                     background: 'rgba(255, 255, 255, 0.2)',
// //                     borderRadius: '12px',
// //                     padding: '8px',
// //                     animation: 'float 3s ease-in-out infinite'
// //                   }}
// //                 >
// //                   <BookOpen size={24} color="#FFFFFF" />
// //                 </div>
// //                 <div
// //                   style={{
// //                     position: 'absolute',
// //                     bottom: '20px',
// //                     left: '20px',
// //                     background: 'rgba(255, 255, 255, 0.2)',
// //                     borderRadius: '12px',
// //                     padding: '8px',
// //                     animation: 'float 3s ease-in-out infinite 1s'
// //                   }}
// //                 >
// //                   <Star size={20} color="#FFFFFF" />
// //                 </div>
// //                 <div
// //                   style={{
// //                     position: 'absolute',
// //                     top: '50%',
// //                     left: '15px',
// //                     background: 'rgba(255, 255, 255, 0.2)',
// //                     borderRadius: '50%',
// //                     padding: '6px',
// //                     animation: 'float 3s ease-in-out infinite 2s'
// //                   }}
// //                 >
// //                   <Award size={18} color="#FFFFFF" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
// //             <h2 style={{ 
// //               fontSize: '2.5rem', 
// //               fontWeight: '700', 
// //               color: '#1F2937',
// //               marginBottom: '16px',
// //               animation: 'fadeIn 1s ease-out'
// //             }}>
// //               {t('whyChoose')}
// //             </h2>
// //             <p style={{ 
// //               fontSize: '1.125rem', 
// //               color: '#6B7280', 
// //               maxWidth: '600px', 
// //               margin: '0 auto',
// //               animation: 'fadeIn 1s ease-out 0.2s both'
// //             }}>
// //               {t('revolutionaryExperience')}
// //             </p>
// //           </div>

// //           <div style={{ 
// //             display: 'grid', 
// //             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
// //             gap: '30px',
// //             marginTop: '40px'
// //           }}>
// //             {[
// //               {
// //                 icon: '🎯',
// //                 title: 'personalizedLearning',
// //                 description: 'personalizedLearning',
// //                 delay: '0s'
// //               },
// //               {
// //                 icon: '⚡',
// //                 title: 'instantFeedback',
// //                 description: 'instantFeedback',
// //                 delay: '0.1s'
// //               },
// //               {
// //                 icon: '📊',
// //                 title: 'progressAnalytics',
// //                 description: 'progressAnalytics',
// //                 delay: '0.2s'
// //               },
// //               {
// //                 icon: '🏆',
// //                 title: 'gamifiedExperience',
// //                 description: 'gamifiedExperience',
// //                 delay: '0.3s'
// //               },
// //               {
// //                 icon: '📚',
// //                 title: 'vastQuestionBank',
// //                 description: 'vastQuestionBank',
// //                 delay: '0.4s'
// //               },
// //               {
// //                 icon: '🎓',
// //                 title: 'expertCrafted',
// //                 description: 'expertCrafted',
// //                 delay: '0.5s'
// //               }
// //             ].map((feature, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
// //                   borderRadius: '20px',
// //                   padding: '32px',
// //                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
// //                   transition: 'all 0.3s ease',
// //                   cursor: 'pointer',
// //                   animation: `slideInUp 0.6s ease-out ${feature.delay} both`,
// //                   border: '1px solid #E5E7EB'
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(-8px)';
// //                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(0)';
// //                   e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
// //                 }}
// //               >
// //                 <div style={{
// //                   fontSize: '48px',
// //                   marginBottom: '16px',
// //                   animation: 'bounce 2s infinite'
// //                 }}>
// //                   {feature.icon}
// //                 </div>
// //                 <h3 style={{
// //                   fontSize: '1.25rem',
// //                   fontWeight: '600',
// //                   color: '#1F2937',
// //                   marginBottom: '12px'
// //                 }}>
// //                   {t(`features.${feature.title}`)}
// //                 </h3>
// //                 <p style={{
// //                   fontSize: '0.95rem',
// //                   color: '#6B7280',
// //                   lineHeight: '1.6'
// //                 }}>
// //                   {t(`featureDescriptions.${feature.description}`)}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Subject Categories */}
// //       <section style={{ 
// //         padding: '80px 20px', 
// //         background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' 
// //       }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
// //             <h2 style={{ 
// //               fontSize: '2.5rem', 
// //               fontWeight: '700', 
// //               color: '#1F2937',
// //               marginBottom: '16px'
// //             }}>
// //               {t('exploreCategories')}
// //             </h2>
// //             <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
// //               {t('chooseSubjects')}
// //             </p>
// //           </div>

// //           <div style={{
// //             display: 'grid',
// //             gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
// //             gap: '24px',
// //             maxWidth: '900px',
// //             margin: '0 auto'
// //           }}>
// //             {[
// //               { name: 'English', icon: '📖', color: '#F59E0B', tests: 420 },
// //               { name: 'Telugu', icon: '🔤', color: '#EC4899', tests: 380 },
// //               { name: 'Mathematics', icon: '🔢', color: '#3B82F6', tests: 450 },
// //               { name: 'Social', icon: '🌏', color: '#8B5CF6', tests: 340 },
// //               { name: 'Science', icon: '🔬', color: '#10B981', tests: 390 },
// //               { name: 'Computers', icon: '💻', color: '#6366F1', tests: 310 }
// //             ].map((subject, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   background: '#FFFFFF',
// //                   borderRadius: '16px',
// //                   padding: '28px',
// //                   textAlign: 'center',
// //                   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //                   transition: 'all 0.3s ease',
// //                   cursor: 'pointer',
// //                   animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
// //                   border: '2px solid transparent'
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = 'scale(1.05)';
// //                   e.currentTarget.style.borderColor = subject.color;
// //                   e.currentTarget.style.boxShadow = `0 8px 24px ${subject.color}40`;
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = 'scale(1)';
// //                   e.currentTarget.style.borderColor = 'transparent';
// //                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
// //                 }}
// //               >
// //                 <div style={{ 
// //                   fontSize: '56px', 
// //                   marginBottom: '12px',
// //                   animation: 'float 3s ease-in-out infinite'
// //                 }}>
// //                   {subject.icon}
// //                 </div>
// //                 <h3 style={{
// //                   fontSize: '1.25rem',
// //                   fontWeight: '600',
// //                   color: '#1F2937',
// //                   marginBottom: '8px'
// //                 }}>
// //                   {t(`subjects.${subject.name}`)}
// //                 </h3>
// //                 <p style={{ fontSize: '0.875rem', color: subject.color, fontWeight: '500' }}>
// //                   {subject.tests} {t('practiceTestsCount')}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* How It Works */}
// //       <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
// //             <h2 style={{ 
// //               fontSize: '2.5rem', 
// //               fontWeight: '700', 
// //               color: '#1F2937',
// //               marginBottom: '16px'
// //             }}>
// //               {t('howItWorks')}
// //             </h2>
// //             <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
// //               {t('getStarted')}
// //             </p>
// //           </div>

// //           <div style={{ 
// //             display: 'flex', 
// //             flexDirection: 'column', 
// //             gap: '40px',
// //             maxWidth: '900px',
// //             margin: '0 auto'
// //           }}>
// //             {[
// //               {
// //                 step: '01',
// //                 title: 'chooseSubject',
// //                 description: 'chooseSubject',
// //                 icon: '📚',
// //                 color: '#3B82F6'
// //               },
// //               {
// //                 step: '02',
// //                 title: 'startPracticing',
// //                 description: 'startPracticing',
// //                 icon: '✍️',
// //                 color: '#10B981'
// //               },
// //               {
// //                 step: '03',
// //                 title: 'trackProgress',
// //                 description: 'trackProgress',
// //                 icon: '📈',
// //                 color: '#F59E0B'
// //               }
// //             ].map((item, index) => (
// //               <div
// //                 key={index}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '30px',
// //                   animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`,
// //                   flexWrap: 'wrap'
// //                 }}
// //               >
// //                 <div style={{
// //                   minWidth: '80px',
// //                   height: '80px',
// //                   borderRadius: '50%',
// //                   background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   fontSize: '36px',
// //                   boxShadow: `0 8px 16px ${item.color}40`,
// //                   animation: 'pulse 2s ease-in-out infinite'
// //                 }}>
// //                   {item.icon}
// //                 </div>
// //                 <div style={{ flex: 1, minWidth: '250px' }}>
// //                   <div style={{
// //                     fontSize: '3rem',
// //                     fontWeight: '700',
// //                     color: '#E5E7EB',
// //                     marginBottom: '-10px'
// //                   }}>
// //                     {item.step}
// //                   </div>
// //                   <h3 style={{
// //                     fontSize: '1.5rem',
// //                     fontWeight: '600',
// //                     color: '#1F2937',
// //                     marginBottom: '8px'
// //                   }}>
// //                     {t(`steps.${item.title}`)}
// //                   </h3>
// //                   <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.6' }}>
// //                     {t(`stepDescriptions.${item.description}`)}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section style={{
// //         padding: '80px 20px',
// //         background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
// //         position: 'relative',
// //         overflow: 'hidden'
// //       }}>
// //         <div style={{
// //           position: 'absolute',
// //           top: '-100px',
// //           right: '-100px',
// //           width: '300px',
// //           height: '300px',
// //           background: 'rgba(255, 255, 255, 0.1)',
// //           borderRadius: '50%',
// //           animation: 'float 8s ease-in-out infinite'
// //         }} />
// //         <div style={{
// //           position: 'absolute',
// //           bottom: '-50px',
// //           left: '-50px',
// //           width: '200px',
// //           height: '200px',
// //           background: 'rgba(255, 255, 255, 0.1)',
// //           borderRadius: '50%',
// //           animation: 'float 6s ease-in-out infinite reverse'
// //         }} />
        
// //         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
// //           <h2 style={{
// //             fontSize: '2.5rem',
// //             fontWeight: '700',
// //             color: '#FFFFFF',
// //             marginBottom: '20px',
// //             animation: 'fadeIn 1s ease-out'
// //           }}>
// //             {t('readyToExcel')}
// //           </h2>
// //           <p style={{
// //             fontSize: '1.25rem',
// //             color: 'rgba(255, 255, 255, 0.9)',
// //             marginBottom: '40px',
// //             animation: 'fadeIn 1s ease-out 0.2s both'
// //           }}>
// //             {t('joinStudents')}
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Practice;















// import React, { useState, useRef, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Users, FileText } from 'lucide-react';
// import { Wheel } from 'react-custom-roulette';
// import './practice.css';

// // Flying Reward Component
// const FlyingReward = ({ reward, onComplete }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [scale, setScale] = useState(1);
//   const [opacity, setOpacity] = useState(1);
//   const rewardRef = useRef(null);

//   useEffect(() => {
//     if (rewardRef.current) {
//       const wheelRect = document.querySelector('.wheel-wrapper')?.getBoundingClientRect();
//       const navbarReward = document.querySelector('.reward-points-display')?.getBoundingClientRect();
      
//       if (wheelRect && navbarReward) {
//         const startX = wheelRect.left + wheelRect.width / 2;
//         const startY = wheelRect.top + wheelRect.height / 2;
//         const endX = navbarReward.left + navbarReward.width / 2;
//         const endY = navbarReward.top + navbarReward.height / 2;

//         setPosition({ x: startX, y: startY });
        
//         // Animate to navbar
//         setTimeout(() => {
//           setPosition({ x: endX, y: endY });
//           setScale(0.3);
//         }, 100);

//         // Fade out and complete
//         setTimeout(() => {
//           setOpacity(0);
//         }, 800);

//         // Complete animation
//         setTimeout(() => {
//           if (onComplete) onComplete();
//         }, 1000);
//       }
//     }
//   }, [onComplete]);

//   return (
//     <div
//       ref={rewardRef}
//       style={{
//         position: 'fixed',
//         left: position.x,
//         top: position.y,
//         transform: `translate(-50%, -50%) scale(${scale})`,
//         background: reward.color,
//         color: 'white',
//         padding: '8px 16px',
//         borderRadius: '20px',
//         fontSize: '14px',
//         fontWeight: 'bold',
//         zIndex: 10000,
//         pointerEvents: 'none',
//         transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
//         whiteSpace: 'nowrap',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//         opacity: opacity
//       }}
//     >
//       {reward.name}
//     </div>
//   );
// };

// // Spin Wheel Component with React-Custom-Roulette
// const SpinWheel = ({ onRewardWon }) => {
//   const [mustSpin, setMustSpin] = useState(false);
//   const [prizeNumber, setPrizeNumber] = useState(0);
//   const [reward, setReward] = useState(null);
//   const [spinsLeft, setSpinsLeft] = useState(3);

//   const data = [
//     { option: '10 Points', style: { backgroundColor: '#FF6B6B', textColor: 'white' } },
//     { option: '20 Points', style: { backgroundColor: '#4ECDC4', textColor: 'white' } },
//     { option: '05 Points', style: { backgroundColor: '#45B7D1', textColor: 'white' } },
//     { option: 'Bonus Spin', style: { backgroundColor: '#96CEB4', textColor: 'white' } },
//     { option: '15 Points', style: { backgroundColor: '#FFEAA7', textColor: 'black' } },
//     { option: 'Better luck', style: { backgroundColor: '#DDA0DD', textColor: 'white' } },
//   ];

//   const rewardMap = {
//     0: { id: 1, name: '10 Points', color: '#FF6B6B', value: 10 },
//     1: { id: 2, name: '20 Points', color: '#4ECDC4', value: 20 },
//     2: { id: 3, name: '05 Points', color: '#45B7D1', value: 5 },
//     3: { id: 4, name: 'Bonus Spin', color: '#96CEB4', value: 1 },
//     4: { id: 5, name: '15 Points', color: '#FFEAA7', value: 15 },
//     5: { id: 6, name: 'Better luck', color: '#DDA0DD', value: 0 },
//   };

//   // Initialize spins from localStorage
//   useEffect(() => {
//     initializeSpins();
//   }, []);

//   const initializeSpins = () => {
//     const today = new Date().toDateString();
//     const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
    
//     if (spinData.date !== today) {
//       // Reset spins for new day
//       const newSpinData = {
//         date: today,
//         spinsUsed: 0,
//         totalSpins: 3
//       };
//       localStorage.setItem('spinData', JSON.stringify(newSpinData));
//       setSpinsLeft(3);
//     } else {
//       // Use existing spins
//       const remainingSpins = 3 - (spinData.spinsUsed || 0);
//       setSpinsLeft(Math.max(0, remainingSpins));
//     }
//   };

//   const updateSpins = () => {
//     const today = new Date().toDateString();
//     const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
    
//     if (spinData.date !== today) {
//       // Reset for new day
//       const newSpinData = {
//         date: today,
//         spinsUsed: 1,
//         totalSpins: 3
//       };
//       localStorage.setItem('spinData', JSON.stringify(newSpinData));
//       setSpinsLeft(2);
//     } else {
//       // Update existing day
//       const updatedSpinsUsed = (spinData.spinsUsed || 0) + 1;
//       const newSpinData = {
//         ...spinData,
//         spinsUsed: updatedSpinsUsed
//       };
//       localStorage.setItem('spinData', JSON.stringify(newSpinData));
//       setSpinsLeft(3 - updatedSpinsUsed);
//     }
//   };

//   const updateUserPoints = (rewardValue) => {
//     if (rewardValue > 0) {
//       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//       const newPoints = currentPoints + rewardValue;
      
//       localStorage.setItem('rewardPoints', newPoints.toString());
      
//       // Dispatch event for navbar update
//       window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
//         detail: { rewardPoints: newPoints, addedPoints: rewardValue } 
//       }));
      
//       return newPoints;
//     }
//     return parseInt(localStorage.getItem('rewardPoints') || '0');
//   };

//   const handleSpinClick = () => {
//     if (mustSpin || spinsLeft <= 0) return;

//     const newPrizeNumber = Math.floor(Math.random() * data.length);
//     setPrizeNumber(newPrizeNumber);
//     setMustSpin(true);
//     updateSpins();
//   };

//   const handleStopSpinning = () => {
//     setMustSpin(false);
//     const wonReward = rewardMap[prizeNumber];
//     setReward(wonReward);
    
//     // Save reward to localStorage
//     const userRewards = JSON.parse(localStorage.getItem('userRewards') || '[]');
//     const rewardWithId = {
//       ...wonReward,
//       id: Date.now() + Math.random(),
//       date: new Date().toISOString()
//     };
//     userRewards.push(rewardWithId);
//     localStorage.setItem('userRewards', JSON.stringify(userRewards));

//     // Update user points if reward has value
//     if (wonReward.value > 0) {
//       updateUserPoints(wonReward.value);
//     }

//     // Handle bonus spin
//     if (wonReward.id === 4) { // Bonus Spin
//       const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
//       const today = new Date().toDateString();
      
//       if (spinData.date === today) {
//         const updatedSpinsUsed = Math.max(0, (spinData.spinsUsed || 0) - 1);
//         const newSpinData = {
//           ...spinData,
//           spinsUsed: updatedSpinsUsed
//         };
//         localStorage.setItem('spinData', JSON.stringify(newSpinData));
//         setSpinsLeft(3 - updatedSpinsUsed);
//       }
//     }

//     // Trigger flying animation with reward data
//     if (onRewardWon) {
//       onRewardWon(rewardWithId);
//     }
//   };

//   return (
//     <div style={{
//       background: 'transparent',
//       textAlign: 'center',
//       maxWidth: '280px',
//       width: '100%'
//     }}>
//       {/* Spin Wheel Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '12px',
//         padding: '8px 12px',
//         background: 'rgba(255, 255, 255, 0.9)',
//         borderRadius: '12px',
//         backdropFilter: 'blur(10px)',
//         border: '1px solid rgba(255, 255, 255, 0.2)'
//       }}>
//         <h3 style={{
//           margin: 0,
//           fontSize: '1.1rem',
//           fontWeight: '700',
//           color: '#1F2937'
//         }}>
//           🎯 Daily Rewards
//         </h3>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '4px',
//           background: 'rgba(249, 250, 251, 0.8)',
//           padding: '4px 8px',
//           borderRadius: '8px',
//           border: '1px solid rgba(229, 231, 235, 0.5)'
//         }}>
//           <span style={{
//             fontSize: '0.7rem',
//             color: '#6B7280',
//             fontWeight: '500'
//           }}>
//             Spins:
//           </span>
//           <span style={{
//             fontSize: '0.7rem',
//             fontWeight: '700',
//             color: spinsLeft > 0 ? '#10B981' : '#EF4444'
//           }}>
//             {spinsLeft}/3
//           </span>
//         </div>
//       </div>

//       {/* Wheel Container */}
//       <div style={{
//         position: 'relative',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: '10px 0',
//         padding: '10px'
//       }}>
//         <Wheel
//           mustStartSpinning={mustSpin}
//           prizeNumber={prizeNumber}
//           data={data}
//           onStopSpinning={handleStopSpinning}
//           backgroundColors={['#3e3e3e', '#df3428']}
//           textColors={['#ffffff']}
//           fontSize={10}
//           outerBorderColor="#333"
//           outerBorderWidth={2}
//           innerBorderColor="#333"
//           innerRadius={0.4}
//           innerBorderWidth={1}
//           radiusLineColor="#333"
//           radiusLineWidth={1}
//           spinDuration={0.6}
//           pointerProps={{
//             src: '',
//             style: {
//               display: 'none'
//             }
//           }}
//           radius={100} // Even smaller radius
//         />
//         {/* Custom Pointer */}
//         <div style={{
//           position: 'absolute',
//           top: '-6px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           width: '20px',
//           height: '26px',
//           backgroundColor: '#333',
//           clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
//           zIndex: 10,
//           filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
//         }} />
        
//         {/* Center Circle */}
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: '35px',
//           height: '35px',
//           backgroundColor: 'white',
//           border: '2px solid #333',
//           borderRadius: '50%',
//           zIndex: 5,
//           boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
//         }} />
//       </div>

//       {/* Spin Button */}
//       <button 
//         onClick={handleSpinClick}
//         disabled={mustSpin || spinsLeft <= 0}
//         style={{
//           width: '100%',
//           padding: '10px 16px',
//           fontSize: '0.9rem',
//           fontWeight: '700',
//           color: 'white',
//           background: mustSpin 
//             ? '#9CA3AF' 
//             : spinsLeft <= 0 
//             ? '#EF4444'
//             : 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//           border: 'none',
//           borderRadius: '8px',
//           cursor: mustSpin || spinsLeft <= 0 ? 'not-allowed' : 'pointer',
//           transition: 'all 0.3s ease',
//           opacity: mustSpin || spinsLeft <= 0 ? 0.7 : 1,
//           boxShadow: mustSpin || spinsLeft <= 0 
//             ? 'none' 
//             : '0 4px 12px rgba(102, 126, 234, 0.4)',
//           marginTop: '6px',
//           backdropFilter: 'blur(10px)'
//         }}
//         onMouseEnter={(e) => {
//           if (!mustSpin && spinsLeft > 0) {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 6px 18px rgba(102, 126, 234, 0.6)';
//           }
//         }}
//         onMouseLeave={(e) => {
//           if (!mustSpin && spinsLeft > 0) {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
//           }
//         }}
//       >
//         {mustSpin ? 'Spinning...' : spinsLeft <= 0 ? 'Come Back Tomorrow' : 'SPIN & GET REWARD'}
//       </button>

//       {/* Reward Popup */}
//       {reward && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 1000,
//           padding: '20px'
//         }}>
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '24px',
//             maxWidth: '300px',
//             width: '100%',
//             textAlign: 'center',
//             boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
//             animation: 'scaleIn 0.3s ease-out'
//           }}>
//             <div style={{
//               fontSize: '2.5rem',
//               marginBottom: '12px',
//               animation: 'bounce 0.6s ease-in-out'
//             }}>
//               🎉
//             </div>
//             <h3 style={{
//               fontSize: '1.1rem',
//               fontWeight: '700',
//               color: '#1F2937',
//               marginBottom: '10px'
//             }}>
//               Congratulations!
//             </h3>
//             <p style={{
//               fontSize: '0.9rem',
//               color: '#6B7280',
//               marginBottom: '12px'
//             }}>
//               You won: <strong style={{ color: reward.color }}>{reward.name}</strong>
//             </p>
//             {reward.value > 0 && (
//               <p style={{
//                 fontSize: '0.8rem',
//                 color: '#10B981',
//                 fontWeight: '600',
//                 marginBottom: '12px',
//                 padding: '6px 12px',
//                 background: '#ECFDF5',
//                 borderRadius: '6px',
//                 display: 'inline-block'
//               }}>
//                 +{reward.value} points added to your account!
//               </p>
//             )}
//             {reward.id === 4 && (
//               <p style={{
//                 fontSize: '0.8rem',
//                 color: '#F59E0B',
//                 fontWeight: '600',
//                 marginBottom: '12px',
//                 padding: '6px 12px',
//                 background: '#FFFBEB',
//                 borderRadius: '6px',
//                 display: 'inline-block'
//               }}>
//                 You earned an extra spin!
//               </p>
//             )}
//             <button 
//               onClick={() => setReward(null)}
//               style={{
//                 padding: '8px 16px',
//                 fontSize: '0.8rem',
//                 fontWeight: '600',
//                 color: 'white',
//                 background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 marginTop: '6px'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 4px 10px rgba(102, 126, 234, 0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = 'none';
//               }}
//             >
//               Awesome!
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main Practice Component
// const Practice = () => {
//   const { t } = useTranslation();
//   const [animatedStats, setAnimatedStats] = useState({
//     totalTests: 0,
//     studentsEnrolled: 0
//   });
//   const [flyingRewards, setFlyingRewards] = useState([]);

//   useEffect(() => {
//     document.title = "Practice | NOVYA - Your Smart Learning Platform";

//     // Listen for points updates (keeping for navbar updates)
//     const handlePointsUpdate = (event) => {
//       // This is handled by navbar component
//     };

//     window.addEventListener('rewardPointsUpdated', handlePointsUpdate);

//     const animateValue = (start, end, duration, callback) => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         const current = Math.floor(progress * (end - start) + start);
//         callback(current);
//         if (progress < 1) window.requestAnimationFrame(step);
//       };
//       window.requestAnimationFrame(step);
//     };

//     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
//     animateValue(0, 850, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));

//     return () => {
//       window.removeEventListener('rewardPointsUpdated', handlePointsUpdate);
//     };
//   }, []);

//   const handleRewardWon = (reward) => {
//     const flyingReward = {
//       id: Date.now() + Math.random(),
//       reward: reward
//     };
    
//     setFlyingRewards(prev => [...prev, flyingReward]);
//   };

//   const handleFlyingComplete = (rewardId) => {
//     setFlyingRewards(prev => prev.filter(r => r.id !== rewardId));
//   };

//   return (
//     <div className="practice-full-container" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-10px); }
//           60% { transform: translateY(-5px); }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//       `}</style>

//       {/* Render flying rewards */}
//       {flyingRewards.map((flyingReward) => (
//         <FlyingReward
//           key={flyingReward.id}
//           reward={flyingReward.reward}
//           onComplete={() => handleFlyingComplete(flyingReward.id)}
//         />
//       ))}

//       {/* Hero Section */}
//       <section
//         className="practice-hero"
//         style={{
//           background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
//           position: 'relative',
//           overflow: 'hidden',
//           paddingTop: '80px',
//           paddingBottom: '80px'
//         }}
//       >
//         <div
//           className="hero-bg-1"
//           style={{
//             position: 'absolute',
//             top: '-50%',
//             right: '-20%',
//             width: '800px',
//             height: '800px',
//             background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
//             borderRadius: '50%',
//             animation: 'float 6s ease-in-out infinite'
//           }}
//         />
//         <div
//           className="hero-bg-2"
//           style={{
//             position: 'absolute',
//             top: '20%',
//             left: '-10%',
//             width: '400px',
//             height: '400px',
//             background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
//             borderRadius: '50%',
//             animation: 'float 8s ease-in-out infinite reverse'
//           }}
//         />

//         <div className="hero-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
//           <div
//             className="hero-content-wrapper"
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               flexWrap: 'wrap',
//               position: 'relative',
//               zIndex: 1
//             }}
//           >
//             <div 
//               className="hero-text"
//               style={{ 
//                 flex: '1 1 350px', 
//                 minWidth: 260,
//                 paddingTop: '100px'
//               }}
//             >
//               <h1 style={{ 
//                 fontSize: 'clamp(2rem, 5vw, 3.5rem)',
//                 fontWeight: '800',
//                 color: '#1F2937',
//                 marginBottom: '24px',
//                 lineHeight: '1.2',
//                 animation: 'slideInLeft 1s ease-out'
//               }}>
//                 {t('masterSubject')}
//                 <span style={{ 
//                   background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   display: 'block'
//                 }}>
//                   {t('smartPractice')}
//                 </span>
//               </h1>

//               <p
//                 style={{ 
//                   fontSize: '1.125rem',
//                   color: '#6B7280',
//                   marginBottom: '40px',
//                   lineHeight: '1.8',
//                   animation: 'slideInLeft 1s ease-out 0.2s both'
//                 }}
//               >
//                 {t('challengeDescription')}
//               </p>

//               <div style={{ 
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
//                 gap: '20px',
//                 marginTop: '40px',
//                 animation: 'slideInUp 1s ease-out 0.4s both'
//               }}>
//                 <div className="stat-card" style={{
//                   background: '#FFFFFF',
//                   borderRadius: '16px',
//                   padding: '20px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px'
//                 }}>
//                   <div style={{
//                     background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//                     borderRadius: '12px',
//                     padding: '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <FileText size={20} color="#FFFFFF" />
//                   </div>
//                   <div>
//                     <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
//                       {animatedStats.totalTests.toLocaleString()}+
//                     </div>
//                     <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('practiceTests')}</div>
//                   </div>
//                 </div>
//                 <div className="stat-card" style={{
//                   background: '#FFFFFF',
//                   borderRadius: '16px',
//                   padding: '20px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px'
//                 }}>
//                   <div style={{
//                     background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//                     borderRadius: '12px',
//                     padding: '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}>
//                     <Users size={20} color="#FFFFFF" />
//                   </div>
//                   <div>
//                     <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
//                       {animatedStats.studentsEnrolled.toLocaleString()}+
//                     </div>
//                     <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('studentsLearning')}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Spin Wheel Section */}
//             <div
//               className="spin-wheel-section"
//               style={{
//                 flex: '1 1 280px',
//                 maxWidth: 280,
//                 minWidth: 220,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 margin: '40px auto 0',
//                 animation: 'slideInRight 1s ease-out 0.3s both'
//               }}
//             >
//               {/* Spin Wheel Component */}
//               <SpinWheel onRewardWon={handleRewardWon} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//             <h2 style={{ 
//               fontSize: '2.5rem', 
//               fontWeight: '700', 
//               color: '#1F2937',
//               marginBottom: '16px',
//               animation: 'fadeIn 1s ease-out'
//             }}>
//               {t('whyChoose')}
//             </h2>
//             <p style={{ 
//               fontSize: '1.125rem', 
//               color: '#6B7280', 
//               maxWidth: '600px', 
//               margin: '0 auto',
//               animation: 'fadeIn 1s ease-out 0.2s both'
//             }}>
//               {t('revolutionaryExperience')}
//             </p>
//           </div>

//           <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
//             gap: '30px',
//             marginTop: '40px'
//           }}>
//             {[
//               {
//                 icon: '🎯',
//                 title: 'personalizedLearning',
//                 description: 'personalizedLearning',
//                 delay: '0s'
//               },
//               {
//                 icon: '⚡',
//                 title: 'instantFeedback',
//                 description: 'instantFeedback',
//                 delay: '0.1s'
//               },
//               {
//                 icon: '📊',
//                 title: 'progressAnalytics',
//                 description: 'progressAnalytics',
//                 delay: '0.2s'
//               },
//               {
//                 icon: '🏆',
//                 title: 'gamifiedExperience',
//                 description: 'gamifiedExperience',
//                 delay: '0.3s'
//               },
//               {
//                 icon: '📚',
//                 title: 'vastQuestionBank',
//                 description: 'vastQuestionBank',
//                 delay: '0.4s'
//               },
//               {
//                 icon: '🎓',
//                 title: 'expertCrafted',
//                 description: 'expertCrafted',
//                 delay: '0.5s'
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
//                   borderRadius: '20px',
//                   padding: '32px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   animation: `slideInUp 0.6s ease-out ${feature.delay} both`,
//                   border: '1px solid #E5E7EB'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-8px)';
//                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
//                 }}
//               >
//                 <div style={{
//                   fontSize: '48px',
//                   marginBottom: '16px',
//                   animation: 'bounce 2s infinite'
//                 }}>
//                   {feature.icon}
//                 </div>
//                 <h3 style={{
//                   fontSize: '1.25rem',
//                   fontWeight: '600',
//                   color: '#1F2937',
//                   marginBottom: '12px'
//                 }}>
//                   {t(`features.${feature.title}`)}
//                 </h3>
//                 <p style={{
//                   fontSize: '0.95rem',
//                   color: '#6B7280',
//                   lineHeight: '1.6'
//                 }}>
//                   {t(`featureDescriptions.${feature.description}`)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subject Categories */}
//       <section style={{ 
//         padding: '80px 20px', 
//         background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' 
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//             <h2 style={{ 
//               fontSize: '2.5rem', 
//               fontWeight: '700', 
//               color: '#1F2937',
//               marginBottom: '16px'
//             }}>
//               {t('exploreCategories')}
//             </h2>
//             <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
//               {t('chooseSubjects')}
//             </p>
//           </div>

//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//             gap: '24px',
//             maxWidth: '900px',
//             margin: '0 auto'
//           }}>
//             {[
//               { name: 'English', icon: '📖', color: '#F59E0B', tests: 420 },
//               { name: 'Telugu', icon: '🔤', color: '#EC4899', tests: 380 },
//               { name: 'Mathematics', icon: '🔢', color: '#3B82F6', tests: 450 },
//               { name: 'Social', icon: '🌏', color: '#8B5CF6', tests: 340 },
//               { name: 'Science', icon: '🔬', color: '#10B981', tests: 390 },
//               { name: 'Computers', icon: '💻', color: '#6366F1', tests: 310 }
//             ].map((subject, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: '#FFFFFF',
//                   borderRadius: '16px',
//                   padding: '28px',
//                   textAlign: 'center',
//                   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                   animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
//                   border: '2px solid transparent'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.borderColor = subject.color;
//                   e.currentTarget.style.boxShadow = `0 8px 24px ${subject.color}40`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.borderColor = 'transparent';
//                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
//                 }}
//               >
//                 <div style={{ 
//                   fontSize: '56px', 
//                   marginBottom: '12px',
//                   animation: 'float 3s ease-in-out infinite'
//                 }}>
//                   {subject.icon}
//                 </div>
//                 <h3 style={{
//                   fontSize: '1.25rem',
//                   fontWeight: '600',
//                   color: '#1F2937',
//                   marginBottom: '8px'
//                 }}>
//                   {t(`subjects.${subject.name}`)}
//                 </h3>
//                 <p style={{ fontSize: '0.875rem', color: subject.color, fontWeight: '500' }}>
//                   {subject.tests} {t('practiceTestsCount')}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//             <h2 style={{ 
//               fontSize: '2.5rem', 
//               fontWeight: '700', 
//               color: '#1F2937',
//               marginBottom: '16px'
//             }}>
//               {t('howItWorks')}
//             </h2>
//             <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
//               {t('getStarted')}
//             </p>
//           </div>

//           <div style={{ 
//             display: 'flex', 
//             flexDirection: 'column', 
//             gap: '40px',
//             maxWidth: '900px',
//             margin: '0 auto'
//           }}>
//             {[
//               {
//                 step: '01',
//                 title: 'chooseSubject',
//                 description: 'chooseSubject',
//                 icon: '📚',
//                 color: '#3B82F6'
//               },
//               {
//                 step: '02',
//                 title: 'startPracticing',
//                 description: 'startPracticing',
//                 icon: '✍️',
//                 color: '#10B981'
//               },
//               {
//                 step: '03',
//                 title: 'trackProgress',
//                 description: 'trackProgress',
//                 icon: '📈',
//                 color: '#F59E0B'
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '30px',
//                   animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`,
//                   flexWrap: 'wrap'
//                 }}
//               >
//                 <div style={{
//                   minWidth: '80px',
//                   height: '80px',
//                   borderRadius: '50%',
//                   background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '36px',
//                   boxShadow: `0 8px 16px ${item.color}40`,
//                   animation: 'pulse 2s ease-in-out infinite'
//                 }}>
//                   {item.icon}
//                 </div>
//                 <div style={{ flex: 1, minWidth: '250px' }}>
//                   <div style={{
//                     fontSize: '3rem',
//                     fontWeight: '700',
//                     color: '#E5E7EB',
//                     marginBottom: '-10px'
//                   }}>
//                     {item.step}
//                   </div>
//                   <h3 style={{
//                     fontSize: '1.5rem',
//                     fontWeight: '600',
//                     color: '#1F2937',
//                     marginBottom: '8px'
//                   }}>
//                     {t(`steps.${item.title}`)}
//                   </h3>
//                   <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.6' }}>
//                     {t(`stepDescriptions.${item.description}`)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section style={{
//         padding: '80px 20px',
//         background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div style={{
//           position: 'absolute',
//           top: '-100px',
//           right: '-100px',
//           width: '300px',
//           height: '300px',
//           background: 'rgba(255, 255, 255, 0.1)',
//           borderRadius: '50%',
//           animation: 'float 8s ease-in-out infinite'
//         }} />
//         <div style={{
//           position: 'absolute',
//           bottom: '-50px',
//           left: '-50px',
//           width: '200px',
//           height: '200px',
//           background: 'rgba(255, 255, 255, 0.1)',
//           borderRadius: '50%',
//           animation: 'float 6s ease-in-out infinite reverse'
//         }} />
        
//         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
//           <h2 style={{
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             color: '#FFFFFF',
//             marginBottom: '20px',
//             animation: 'fadeIn 1s ease-out'
//           }}>
//             {t('readyToExcel')}
//           </h2>
//           <p style={{
//             fontSize: '1.25rem',
//             color: 'rgba(255, 255, 255, 0.9)',
//             marginBottom: '40px',
//             animation: 'fadeIn 1s ease-out 0.2s both'
//           }}>
//             {t('joinStudents')}
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Practice;






import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, FileText } from 'lucide-react';
import { Wheel } from 'react-custom-roulette';
import './practice.css';

// Flying Reward Component
const FlyingReward = ({ reward, onComplete }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const rewardRef = useRef(null);

  useEffect(() => {
    if (rewardRef.current) {
      const wheelRect = document.querySelector('.wheel-wrapper')?.getBoundingClientRect();
      const navbarReward = document.querySelector('.reward-points-display')?.getBoundingClientRect();
      
      if (wheelRect && navbarReward) {
        const startX = wheelRect.left + wheelRect.width / 2;
        const startY = wheelRect.top + wheelRect.height / 2;
        const endX = navbarReward.left + navbarReward.width / 2;
        const endY = navbarReward.top + navbarReward.height / 2;

        setPosition({ x: startX, y: startY });
        
        // Animate to navbar
        setTimeout(() => {
          setPosition({ x: endX, y: endY });
          setScale(0.3);
        }, 100);

        // Fade out and complete
        setTimeout(() => {
          setOpacity(0);
        }, 800);

        // Complete animation
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }
  }, [onComplete]);

  return (
    <div
      ref={rewardRef}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        background: reward.color,
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 10000,
        pointerEvents: 'none',
        transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        opacity: opacity
      }}
    >
      {reward.name}
    </div>
  );
};

// Spin Wheel Component with React-Custom-Roulette
const SpinWheel = ({ onRewardWon }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [reward, setReward] = useState(null);
  const [spinsLeft, setSpinsLeft] = useState(3);

  // Define wheel data in correct order
  const data = [
    { option: '10 Points', style: { backgroundColor: '#FF6B6B', textColor: 'white' } },
    { option: '20 Points', style: { backgroundColor: '#4ECDC4', textColor: 'white' } },
    { option: '05 Points', style: { backgroundColor: '#45B7D1', textColor: 'white' } },
    { option: 'Bonus Spin', style: { backgroundColor: '#96CEB4', textColor: 'white' } },
    { option: '15 Points', style: { backgroundColor: '#FFEAA7', textColor: 'black' } },
    { option: 'Better luck', style: { backgroundColor: '#DDA0DD', textColor: 'white' } },
  ];

  // Reward mapping that correctly matches the wheel segments
  const getRewardForSegment = (segmentIndex) => {
    const rewards = [
      { id: 1, name: '10 Points', color: '#FF6B6B', value: 10 },
      { id: 2, name: '20 Points', color: '#4ECDC4', value: 20 },
      { id: 3, name: '05 Points', color: '#45B7D1', value: 5 },
      { id: 4, name: 'Bonus Spin', color: '#96CEB4', value: 1 },
      { id: 5, name: '15 Points', color: '#FFEAA7', value: 15 },
      { id: 6, name: 'Better luck', color: '#DDA0DD', value: 0 },
    ];
    return rewards[segmentIndex];
  };

  // Initialize spins from localStorage
  useEffect(() => {
    initializeSpins();
  }, []);

  const initializeSpins = () => {
    const today = new Date().toDateString();
    const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
    
    if (spinData.date !== today) {
      // Reset spins for new day
      const newSpinData = {
        date: today,
        spinsUsed: 0,
        totalSpins: 3
      };
      localStorage.setItem('spinData', JSON.stringify(newSpinData));
      setSpinsLeft(3);
    } else {
      // Use existing spins
      const remainingSpins = 3 - (spinData.spinsUsed || 0);
      setSpinsLeft(Math.max(0, remainingSpins));
    }
  };

  const updateSpins = () => {
    const today = new Date().toDateString();
    const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
    
    if (spinData.date !== today) {
      // Reset for new day
      const newSpinData = {
        date: today,
        spinsUsed: 1,
        totalSpins: 3
      };
      localStorage.setItem('spinData', JSON.stringify(newSpinData));
      setSpinsLeft(2);
    } else {
      // Update existing day
      const updatedSpinsUsed = (spinData.spinsUsed || 0) + 1;
      const newSpinData = {
        ...spinData,
        spinsUsed: updatedSpinsUsed
      };
      localStorage.setItem('spinData', JSON.stringify(newSpinData));
      setSpinsLeft(3 - updatedSpinsUsed);
    }
  };

  const updateUserPoints = (rewardValue) => {
    if (rewardValue > 0) {
      const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
      const newPoints = currentPoints + rewardValue;
      
      localStorage.setItem('rewardPoints', newPoints.toString());
      
      // Dispatch event for navbar update
      window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
        detail: { rewardPoints: newPoints, addedPoints: rewardValue } 
      }));
      
      return newPoints;
    }
    return parseInt(localStorage.getItem('rewardPoints') || '0');
  };

  const handleSpinClick = () => {
    if (mustSpin || spinsLeft <= 0) return;

    // Generate random prize number
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    console.log('Spinning to prize number:', newPrizeNumber, 'which is:', data[newPrizeNumber]?.option);
    
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    updateSpins();
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    
    // Get the actual reward based on the prize number
    const wonReward = getRewardForSegment(prizeNumber);
    console.log('Won reward:', wonReward, 'for prize number:', prizeNumber);
    
    setReward(wonReward);
    
    // Save reward to localStorage
    const userRewards = JSON.parse(localStorage.getItem('userRewards') || '[]');
    const rewardWithId = {
      ...wonReward,
      id: Date.now() + Math.random(),
      date: new Date().toISOString()
    };
    userRewards.push(rewardWithId);
    localStorage.setItem('userRewards', JSON.stringify(userRewards));

    // Update user points if reward has value
    if (wonReward.value > 0) {
      updateUserPoints(wonReward.value);
    }

    // Handle bonus spin
    if (wonReward.id === 4) { // Bonus Spin
      const spinData = JSON.parse(localStorage.getItem('spinData') || '{}');
      const today = new Date().toDateString();
      
      if (spinData.date === today) {
        const updatedSpinsUsed = Math.max(0, (spinData.spinsUsed || 0) - 1);
        const newSpinData = {
          ...spinData,
          spinsUsed: updatedSpinsUsed
        };
        localStorage.setItem('spinData', JSON.stringify(newSpinData));
        setSpinsLeft(3 - updatedSpinsUsed);
      }
    }

    // Trigger flying animation with reward data
    if (onRewardWon) {
      onRewardWon(rewardWithId);
    }
  };

  return (
    <div style={{
      background: 'transparent',
      textAlign: 'center',
      maxWidth: '280px',
      width: '100%'
    }}>
      {/* Spin Wheel Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        padding: '8px 12px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#1F2937'
        }}>
          🎯 Daily Rewards
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(249, 250, 251, 0.8)',
          padding: '4px 8px',
          borderRadius: '8px',
          border: '1px solid rgba(229, 231, 235, 0.5)'
        }}>
          <span style={{
            fontSize: '0.7rem',
            color: '#6B7280',
            fontWeight: '500'
          }}>
            Spins:
          </span>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: '700',
            color: spinsLeft > 0 ? '#10B981' : '#EF4444'
          }}>
            {spinsLeft}/3
          </span>
        </div>
      </div>

      {/* Wheel Container */}
      <div className="wheel-wrapper" style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0',
        padding: '10px'
      }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          fontSize={10}
          outerBorderColor="#333"
          outerBorderWidth={2}
          innerBorderColor="#333"
          innerRadius={0.4}
          innerBorderWidth={1}
          radiusLineColor="#333"
          radiusLineWidth={1}
          spinDuration={0.6}
          pointerProps={{
            src: '',
            style: {
              display: 'none'
            }
          }}
          perpendicularText={false}
          radius={100}
        />
        {/* Custom Pointer */}
        <div style={{
          position: 'absolute',
          top: '-6px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '26px',
          backgroundColor: '#333',
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
          zIndex: 10,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
        }} />
        
        {/* Center Circle */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '35px',
          height: '35px',
          backgroundColor: 'white',
          border: '2px solid #333',
          borderRadius: '50%',
          zIndex: 5,
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }} />
      </div>

      {/* Current Wheel Segments Display for Debugging */}
      <div style={{
        marginTop: '10px',
        padding: '8px',
        background: 'rgba(0,0,0,0.05)',
        borderRadius: '8px',
        fontSize: '10px',
        color: '#666'
      }}>
        Wheel Segments: {data.map((item, index) => `${index}:${item.option}`).join(' | ')}
      </div>

      {/* Spin Button */}
      <button 
        onClick={handleSpinClick}
        disabled={mustSpin || spinsLeft <= 0}
        style={{
          width: '100%',
          padding: '10px 16px',
          fontSize: '0.9rem',
          fontWeight: '700',
          color: 'white',
          background: mustSpin 
            ? '#9CA3AF' 
            : spinsLeft <= 0 
            ? '#EF4444'
            : 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
          border: 'none',
          borderRadius: '8px',
          cursor: mustSpin || spinsLeft <= 0 ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          opacity: mustSpin || spinsLeft <= 0 ? 0.7 : 1,
          boxShadow: mustSpin || spinsLeft <= 0 
            ? 'none' 
            : '0 4px 12px rgba(102, 126, 234, 0.4)',
          marginTop: '6px',
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          if (!mustSpin && spinsLeft > 0) {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 18px rgba(102, 126, 234, 0.6)';
          }
        }}
        onMouseLeave={(e) => {
          if (!mustSpin && spinsLeft > 0) {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
          }
        }}
      >
        {mustSpin ? 'Spinning...' : spinsLeft <= 0 ? 'Come Back Tomorrow' : 'SPIN & GET REWARD'}
      </button>

      {/* Reward Popup */}
      {reward && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '300px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            animation: 'scaleIn 0.3s ease-out'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '12px',
              animation: 'bounce 0.6s ease-in-out'
            }}>
              🎉
            </div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '10px'
            }}>
              Congratulations!
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#6B7280',
              marginBottom: '12px'
            }}>
              You won: <strong style={{ color: reward.color }}>{reward.name}</strong>
            </p>
            {reward.value > 0 && (
              <p style={{
                fontSize: '0.8rem',
                color: '#10B981',
                fontWeight: '600',
                marginBottom: '12px',
                padding: '6px 12px',
                background: '#ECFDF5',
                borderRadius: '6px',
                display: 'inline-block'
              }}>
                +{reward.value} points added to your account!
              </p>
            )}
            {reward.id === 4 && (
              <p style={{
                fontSize: '0.8rem',
                color: '#F59E0B',
                fontWeight: '600',
                marginBottom: '12px',
                padding: '6px 12px',
                background: '#FFFBEB',
                borderRadius: '6px',
                display: 'inline-block'
              }}>
                You earned an extra spin!
              </p>
            )}
            <button 
              onClick={() => setReward(null)}
              style={{
                padding: '8px 16px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 10px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Practice Component
const Practice = () => {
  const { t } = useTranslation();
  const [animatedStats, setAnimatedStats] = useState({
    totalTests: 0,
    studentsEnrolled: 0
  });
  const [flyingRewards, setFlyingRewards] = useState([]);

  useEffect(() => {
    document.title = "Practice | NOVYA - Your Smart Learning Platform";

    // Listen for points updates (keeping for navbar updates)
    const handlePointsUpdate = (event) => {
      // This is handled by navbar component
    };

    window.addEventListener('rewardPointsUpdated', handlePointsUpdate);

    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        callback(current);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
    animateValue(0, 850, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));

    return () => {
      window.removeEventListener('rewardPointsUpdated', handlePointsUpdate);
    };
  }, []);

  const handleRewardWon = (reward) => {
    const flyingReward = {
      id: Date.now() + Math.random(),
      reward: reward
    };
    
    setFlyingRewards(prev => [...prev, flyingReward]);
  };

  const handleFlyingComplete = (rewardId) => {
    setFlyingRewards(prev => prev.filter(r => r.id !== rewardId));
  };

  return (
    <div className="practice-full-container" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Render flying rewards */}
      {flyingRewards.map((flyingReward) => (
        <FlyingReward
          key={flyingReward.id}
          reward={flyingReward.reward}
          onComplete={() => handleFlyingComplete(flyingReward.id)}
        />
      ))}

      {/* Hero Section */}
      <section
        className="practice-hero"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div
          className="hero-bg-1"
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div
          className="hero-bg-2"
          style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />

        <div className="hero-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            className="hero-content-wrapper"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div 
              className="hero-text"
              style={{ 
                flex: '1 1 350px', 
                minWidth: 260,
                paddingTop: '100px'
              }}
            >
              <h1 style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#1F2937',
                marginBottom: '24px',
                lineHeight: '1.2',
                animation: 'slideInLeft 1s ease-out'
              }}>
                {t('masterSubject')}
                <span style={{ 
                  background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block'
                }}>
                  {t('smartPractice')}
                </span>
              </h1>

              <p
                style={{ 
                  fontSize: '1.125rem',
                  color: '#6B7280',
                  marginBottom: '40px',
                  lineHeight: '1.8',
                  animation: 'slideInLeft 1s ease-out 0.2s both'
                }}
              >
                {t('challengeDescription')}
              </p>

              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '20px',
                marginTop: '40px',
                animation: 'slideInUp 1s ease-out 0.4s both'
              }}>
                <div className="stat-card" style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                    borderRadius: '12px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FileText size={20} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
                      {animatedStats.totalTests.toLocaleString()}+
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('practiceTests')}</div>
                  </div>
                </div>
                <div className="stat-card" style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '20px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    borderRadius: '12px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Users size={20} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1F2937' }}>
                      {animatedStats.studentsEnrolled.toLocaleString()}+
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{t('studentsLearning')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spin Wheel Section */}
            <div
              className="spin-wheel-section"
              style={{
                flex: '1 1 280px',
                maxWidth: 280,
                minWidth: 220,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '40px auto 0',
                animation: 'slideInRight 1s ease-out 0.3s both'
              }}
            >
              {/* Spin Wheel Component */}
              <SpinWheel onRewardWon={handleRewardWon} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#1F2937',
              marginBottom: '16px',
              animation: 'fadeIn 1s ease-out'
            }}>
              {t('whyChoose')}
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#6B7280', 
              maxWidth: '600px', 
              margin: '0 auto',
              animation: 'fadeIn 1s ease-out 0.2s both'
            }}>
              {t('revolutionaryExperience')}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: '🎯',
                title: 'personalizedLearning',
                description: 'personalizedLearning',
                delay: '0s'
              },
              {
                icon: '⚡',
                title: 'instantFeedback',
                description: 'instantFeedback',
                delay: '0.1s'
              },
              {
                icon: '📊',
                title: 'progressAnalytics',
                description: 'progressAnalytics',
                delay: '0.2s'
              },
              {
                icon: '🏆',
                title: 'gamifiedExperience',
                description: 'gamifiedExperience',
                delay: '0.3s'
              },
              {
                icon: '📚',
                title: 'vastQuestionBank',
                description: 'vastQuestionBank',
                delay: '0.4s'
              },
              {
                icon: '🎓',
                title: 'expertCrafted',
                description: 'expertCrafted',
                delay: '0.5s'
              }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `slideInUp 0.6s ease-out ${feature.delay} both`,
                  border: '1px solid #E5E7EB'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  animation: 'bounce 2s infinite'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '12px'
                }}>
                  {t(`features.${feature.title}`)}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6B7280',
                  lineHeight: '1.6'
                }}>
                  {t(`featureDescriptions.${feature.description}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Categories */}
      <section style={{ 
        padding: '80px 20px', 
        background: 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#1F2937',
              marginBottom: '16px'
            }}>
              {t('exploreCategories')}
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              {t('chooseSubjects')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              { name: 'English', icon: '📖', color: '#F59E0B', tests: 420 },
              { name: 'Telugu', icon: '🔤', color: '#EC4899', tests: 380 },
              { name: 'Mathematics', icon: '🔢', color: '#3B82F6', tests: 450 },
              { name: 'Social', icon: '🌏', color: '#8B5CF6', tests: 340 },
              { name: 'Science', icon: '🔬', color: '#10B981', tests: 390 },
              { name: 'Computers', icon: '💻', color: '#6366F1', tests: 310 }
            ].map((subject, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '28px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = subject.color;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${subject.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{ 
                  fontSize: '56px', 
                  marginBottom: '12px',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  {subject.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1F2937',
                  marginBottom: '8px'
                }}>
                  {t(`subjects.${subject.name}`)}
                </h3>
                <p style={{ fontSize: '0.875rem', color: subject.color, fontWeight: '500' }}>
                  {subject.tests} {t('practiceTestsCount')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#1F2937',
              marginBottom: '16px'
            }}>
              {t('howItWorks')}
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              {t('getStarted')}
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '40px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              {
                step: '01',
                title: 'chooseSubject',
                description: 'chooseSubject',
                icon: '📚',
                color: '#3B82F6'
              },
              {
                step: '02',
                title: 'startPracticing',
                description: 'startPracticing',
                icon: '✍️',
                color: '#10B981'
              },
              {
                step: '03',
                title: 'trackProgress',
                description: 'trackProgress',
                icon: '📈',
                color: '#F59E0B'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`,
                  flexWrap: 'wrap'
                }}
              >
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  boxShadow: `0 8px 16px ${item.color}40`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#E5E7EB',
                    marginBottom: '-10px'
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1F2937',
                    marginBottom: '8px'
                  }}>
                    {t(`steps.${item.title}`)}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: '1.6' }}>
                    {t(`stepDescriptions.${item.description}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '20px',
            animation: 'fadeIn 1s ease-out'
          }}>
            {t('readyToExcel')}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            animation: 'fadeIn 1s ease-out 0.2s both'
          }}>
            {t('joinStudents')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Practice;