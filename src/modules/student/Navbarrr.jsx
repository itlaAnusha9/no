// ///full working without translate
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FaUserCircle, 
//   FaChevronDown, 
//   FaGlobe, 
//   FaSignOutAlt, 
//   FaSearch, 
//   FaCoins, 
//   FaCalendarAlt,
//   FaBell,
//   FaCheck,
//   FaBook,
//   FaClock,
//   FaTimes
// } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import './Navbarrr.css';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const Navbar = ({ isFullScreen, rewardPoints = 0 }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [avatarOpen, setAvatarOpen] = useState(false);
//   const [classDropdownOpen, setClassDropdownOpen] = useState(false);
//   const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [calendarOpen, setCalendarOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);
  
//   // MARK: ADDED - Flying coins animation state
//   const [showFlyingCoins, setShowFlyingCoins] = useState(false);

//   const [avatar, setAvatar] = useState(null);
//   const [name, setName] = useState('');
//   const [currentRewardPoints, setCurrentRewardPoints] = useState(rewardPoints);
//   const [pointsChange, setPointsChange] = useState(0);
//   const [showPointsAnimation, setShowPointsAnimation] = useState(false);

//   // MARK: ADDED - Study plan and notifications state
//   const [studyPlans, setStudyPlans] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadNotifications, setUnreadNotifications] = useState(0);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const location = useLocation();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();

//   const languages = [
//     { code: 'en', label: 'English' },
//     { code: 'te', label: 'తెలుగు' },
//     { code: 'hi', label: 'హిందీ' },
//     { code: 'kn', label: 'ಕನ್ನಡ' },
//     { code: 'ta', label: 'தமிழ்' },
//     { code: 'ml', label: 'മലയാളം' },
//   ];

//   // MARK: UPDATED - Load study plans and notifications from localStorage with real-time updates
//   useEffect(() => {
//     loadStudyPlans();
//     loadNotifications();
    
//     // Listen for new study plans from lesson pages
//     const handleStudyPlanAdded = (event) => {
//       if (event.detail && event.detail.studyPlan) {
//         // Force reload study plans to get latest data
//         loadStudyPlans();
//         // Also create notification for the new study plan
//         createNotification(event.detail.studyPlan);
//       }
//     };

//     // Listen for new notifications
//     const handleNotificationAdded = (event) => {
//       if (event.detail && event.detail.notification) {
//         // Force reload notifications to get latest data
//         loadNotifications();
//       }
//     };

//     // MARK: ADDED - Listen for study plan updates
//     const handleStudyPlanUpdated = () => {
//       loadStudyPlans();
//     };

//     // MARK: ADDED - Listen for storage changes (for cross-tab updates)
//     const handleStorageChange = (e) => {
//       if (e.key === 'studyPlans') {
//         loadStudyPlans();
//       }
//       if (e.key === 'studyNotifications') {
//         loadNotifications();
//       }
//     };

//     window.addEventListener('studyPlanAdded', handleStudyPlanAdded);
//     window.addEventListener('notificationAdded', handleNotificationAdded);
//     window.addEventListener('studyPlanUpdated', handleStudyPlanUpdated);
//     window.addEventListener('storage', handleStorageChange);
    
//     // MARK: ADDED - Set up interval to check for updates
//     const interval = setInterval(() => {
//       loadStudyPlans();
//       loadNotifications();
//     }, 2000); // Check every 2 seconds for updates
    
//     return () => {
//       window.removeEventListener('studyPlanAdded', handleStudyPlanAdded);
//       window.removeEventListener('notificationAdded', handleNotificationAdded);
//       window.removeEventListener('studyPlanUpdated', handleStudyPlanUpdated);
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, []);

//   // MARK: UPDATED - Study plan functions with improved real-time loading
//   const loadStudyPlans = () => {
//     try {
//       const savedPlans = localStorage.getItem('studyPlans');
//       if (savedPlans) {
//         const plans = JSON.parse(savedPlans);
//         // Remove duplicates based on ID
//         const uniquePlans = plans.filter((plan, index, self) => 
//           index === self.findIndex(p => p.id === plan.id)
//         );
//         setStudyPlans(uniquePlans);
//       } else {
//         setStudyPlans([]);
//       }
//     } catch (error) {
//       console.error('Error loading study plans:', error);
//       setStudyPlans([]);
//     }
//   };

//   const loadNotifications = () => {
//     try {
//       const savedNotifications = localStorage.getItem('studyNotifications');
//       if (savedNotifications) {
//         const notifs = JSON.parse(savedNotifications);
//         // Remove duplicates based on ID
//         const uniqueNotifs = notifs.filter((notif, index, self) => 
//           index === self.findIndex(n => n.id === notif.id)
//         );
//         setNotifications(uniqueNotifs);
//         const unread = uniqueNotifs.filter(notif => !notif.read).length;
//         setUnreadNotifications(unread);
//       } else {
//         setNotifications([]);
//         setUnreadNotifications(0);
//       }
//     } catch (error) {
//       console.error('Error loading notifications:', error);
//       setNotifications([]);
//       setUnreadNotifications(0);
//     }
//   };

//   const addStudyPlan = (studyPlan) => {
//     const existingPlans = JSON.parse(localStorage.getItem('studyPlans') || '[]');
    
//     // Check for duplicates before adding
//     const isDuplicate = existingPlans.some(plan => plan.id === studyPlan.id);
//     if (isDuplicate) {
//       console.log('Study plan already exists, skipping duplicate');
//       return;
//     }

//     const updatedPlans = [...existingPlans, studyPlan];
//     localStorage.setItem('studyPlans', JSON.stringify(updatedPlans));
//     setStudyPlans(updatedPlans);
    
//     // MARK: ADDED - Dispatch event to notify other components
//     window.dispatchEvent(new CustomEvent('studyPlanUpdated'));
//   };

//   const addNotification = (notification) => {
//     const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
    
//     // Check for duplicates before adding
//     const isDuplicate = existingNotifications.some(notif => notif.id === notification.id);
//     if (isDuplicate) {
//       console.log('Notification already exists, skipping duplicate');
//       return;
//     }

//     const updatedNotifications = [notification, ...existingNotifications];
//     localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//     setNotifications(updatedNotifications);
//     setUnreadNotifications(prev => prev + 1);
    
//     // MARK: ADDED - Dispatch storage event for cross-tab sync
//     window.dispatchEvent(new StorageEvent('storage', {
//       key: 'studyNotifications',
//       newValue: JSON.stringify(updatedNotifications)
//     }));
//   };

//   const createNotification = (studyPlan) => {
//     const notificationId = `notif_${studyPlan.id}`;
    
//     // Check if notification already exists
//     const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
//     const isDuplicateNotification = existingNotifications.some(notif => notif.id === notificationId);
    
//     if (isDuplicateNotification) {
//       console.log('Notification already exists, skipping duplicate');
//       return;
//     }

//     const notification = {
//       id: notificationId,
//       type: 'study_plan_created',
//       title: 'New Study Plan Created',
//       message: `Study plan for ${studyPlan.title} has been added to your calendar`,
//       date: new Date().toISOString(),
//       read: false,
//       planId: studyPlan.id
//     };
//     addNotification(notification);
//   };

//   const markNotificationAsRead = (notificationId) => {
//     try {
//       const updatedNotifications = notifications.map(notif =>
//         notif.id === notificationId ? { ...notif, read: true } : notif
//       );
//       localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//       setNotifications(updatedNotifications);
//       const unread = updatedNotifications.filter(notif => !notif.read).length;
//       setUnreadNotifications(unread);
      
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: JSON.stringify(updatedNotifications)
//       }));
//     } catch (error) {
//       console.error('Error marking notification as read:', error);
//     }
//   };

//   const markAllNotificationsAsRead = () => {
//     try {
//       const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }));
//       localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//       setNotifications(updatedNotifications);
//       setUnreadNotifications(0);
      
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: JSON.stringify(updatedNotifications)
//       }));
//     } catch (error) {
//       console.error('Error marking all notifications as read:', error);
//     }
//   };

//   const clearAllNotifications = () => {
//     try {
//       localStorage.removeItem('studyNotifications');
//       setNotifications([]);
//       setUnreadNotifications(0);
      
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: null
//       }));
//     } catch (error) {
//       console.error('Error clearing notifications:', error);
//     }
//   };

//   // MARK: ADDED - Get today's study plans
//   const getTodaysStudyPlans = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const todaysPlans = [];
    
//     studyPlans.forEach(plan => {
//       plan.studySessions?.forEach(session => {
//         if (session.date === today && !session.completed) {
//           todaysPlans.push({
//             ...session,
//             planTitle: plan.title,
//             subject: plan.subject
//           });
//         }
//       });
//     });
    
//     return todaysPlans;
//   };

//   // MARK: ADDED - Calendar functions
//   const getDaysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const navigateMonth = (direction) => {
//     setCurrentMonth(prev => {
//       const newDate = new Date(prev);
//       newDate.setMonth(prev.getMonth() + direction);
//       return newDate;
//     });
//   };

//   const getStudyPlansForDate = (date) => {
//     const dateString = date.toISOString().split('T')[0];
//     const plansForDate = [];
    
//     studyPlans.forEach(plan => {
//       plan.studySessions?.forEach(session => {
//         if (session.date === dateString) {
//           plansForDate.push({
//             ...session,
//             planTitle: plan.title,
//             subject: plan.subject
//           });
//         }
//       });
//     });
    
//     return plansForDate;
//   };

//   const isToday = (date) => {
//     const today = new Date();
//     return date.getDate() === today.getDate() &&
//            date.getMonth() === today.getMonth() &&
//            date.getFullYear() === today.getFullYear();
//   };

//   const isSelectedDate = (date) => {
//     return date.getDate() === selectedDate.getDate() &&
//            date.getMonth() === selectedDate.getMonth() &&
//            date.getFullYear() === selectedDate.getFullYear();
//   };

//   const formatTime = (dateString) => {
//     return new Date(dateString).toLocaleTimeString('en-US', { 
//       hour: '2-digit', 
//       minute: '2-digit' 
//     });
//   };

//   // MARK: UPDATED - Flying coins animation trigger function with points
//   const triggerFlyingCoins = (pointsToAdd = 0) => {
//     setShowFlyingCoins(true);
//     if (pointsToAdd > 0) {
//       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//       const newPoints = currentPoints + pointsToAdd;
//       localStorage.setItem('rewardPoints', newPoints.toString());
//       setCurrentRewardPoints(newPoints);
      
//       // Dispatch event to update other components
//       window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
//         detail: { rewardPoints: newPoints } 
//       }));
//     }
//     setTimeout(() => {
//       setShowFlyingCoins(false);
//     }, 2000);
//   };

//   // MARK: UPDATED - Welcome coins animation for login with points
//   const triggerWelcomeCoins = () => {
//     // Check if welcome points were already awarded
//     const welcomeAwarded = sessionStorage.getItem('welcomePointsAwarded');
//     if (!welcomeAwarded) {
//       setShowFlyingCoins(true);
//       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//       const newPoints = currentPoints + 50; // 50 welcome points
//       localStorage.setItem('rewardPoints', newPoints.toString());
//       setCurrentRewardPoints(newPoints);
//       sessionStorage.setItem('welcomePointsAwarded', 'true');
      
//       // Dispatch event to update other components
//       window.dispatchEvent(new CustomEvent('rewardPointsUpdated', { 
//         detail: { rewardPoints: newPoints } 
//       }));
      
//       setTimeout(() => {
//         setShowFlyingCoins(false);
//       }, 3000);
//     }
//   };

//   // MARK: UPDATED - Sync reward points from localStorage and props
//   useEffect(() => {
//     const userRole = localStorage.getItem('userRole');
//     let storedData = null;

//     if (userRole === 'student') {
//       storedData = localStorage.getItem('studentData');
//     } else if (userRole === 'parent') {
//       storedData = localStorage.getItem('parentData');
//     }

//     if (storedData) {
//       const parsed = JSON.parse(storedData);
//       setAvatar(parsed.avatar || null);
//       setName(`${parsed.firstName || ''} ${parsed.lastName || ''}`);
//     }

//     // Load reward points from localStorage
//     const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
//     setCurrentRewardPoints(points);

//     // MARK: UPDATED - Check for login animation with proper timing
//     const justLoggedIn = sessionStorage.getItem('justLoggedIn');
//     if (justLoggedIn) {
//       setTimeout(() => {
//         triggerWelcomeCoins();
//         sessionStorage.removeItem('justLoggedIn');
//       }, 1000);
//     }
//   }, [rewardPoints]);

//   // MARK: UPDATED - Improved reward points update listener
//   useEffect(() => {
//     const handleRewardPointsUpdate = (event) => {
//       if (event.detail && event.detail.rewardPoints !== undefined) {
//         const newPoints = event.detail.rewardPoints;
//         const oldPoints = currentRewardPoints;
//         const pointsDiff = newPoints - oldPoints;
       
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
       
//         setCurrentRewardPoints(newPoints);
//       }
//     };

//     const handleStorageChange = (e) => {
//       if (e.key === 'rewardPoints') {
//         const points = parseInt(e.newValue) || 0;
//         const oldPoints = currentRewardPoints;
//         const pointsDiff = points - oldPoints;
       
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
       
//         setCurrentRewardPoints(points);
//       }
//     };

//     // Listen for custom events (same tab - video, mock tests)
//     window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
   
//     // Listen for storage events (other tabs)
//     window.addEventListener('storage', handleStorageChange);
   
//     // Also check for changes periodically
//     const interval = setInterval(() => {
//       const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
//       if (points !== currentRewardPoints) {
//         const pointsDiff = points - currentRewardPoints;
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
//         setCurrentRewardPoints(points);
//       }
//     }, 1000);

//     return () => {
//       window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, [currentRewardPoints]);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//     setAvatarOpen(false);
//     setClassDropdownOpen(false);
//     setPracticeDropdownOpen(false);
//     setLangDropdownOpen(false);

//     // Hide navbar in fullscreen mode during tests
//     if (isFullScreen) {
//       setShowNavbar(false);
//       return;
//     }

//     const hideNavbarRoutes = ['/mock-test', '/quick-practice'];
//     const shouldHideNavbar = hideNavbarRoutes.some(route =>
//       location.pathname.includes(route)
//     );

//     setShowNavbar(!shouldHideNavbar);
//   }, [location.pathname, isFullScreen]);

//   const handleLanguageChange = (code) => {
//     i18n.changeLanguage(code);
//     setLangDropdownOpen(false);
//   };

//   const handleLogout = () => {
//     // Clear all localStorage except rewardPoints to persist points after logout
//     const rewardPointsValue = localStorage.getItem('rewardPoints');
//     localStorage.clear();
//     if (rewardPointsValue) {
//       localStorage.setItem('rewardPoints', rewardPointsValue);
//     }
//     navigate('/');
//   };

//   const navLinks = [
//     { path: '/student/dashboard', name: t('home', 'Home') },
//     {
//       path: '/learn',
//       name: t('class_room', 'Class Room'),
//       hasDropdown: true,
//       dropdownItems: [
//         { path: '/learn', name: t('class_7', 'Class 7') },
//         { path: '/learn/class8', name: t('class_8', 'Class 8') },
//         { path: '/learn/class9', name: t('class_9', 'Class 9') },
//         { path: '/learn/class10', name: t('class_10', 'Class 10') },
//       ],
//     },
//     {
//       path: '/practice',
//       name: t('practice', 'Practice'),
//       hasDropdown: true,
//       dropdownItems: [
//         { path: '/quick-practice', name: t('quick_practice', 'Quick Practice') },
//         { path: '/mock-test', name: t('mock_test', 'Mock Test') },
//       ],
//     },
//     { path: '/career', name: t('career', 'Career') },
//     { path: '/study-room', name: t('studyRoom', 'Study Room') },
//   ];

//   if (!showNavbar) return null;

//   return (
//     <motion.nav
//       className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* MARK: ADDED - Flying Coins Animation Container */}
//       {showFlyingCoins && (
//         <div className="flying-coins-container" style={{ 
//           position: 'fixed', 
//           top: 0, 
//           left: 0, 
//           width: '100%', 
//           height: '100%', 
//           pointerEvents: 'none', 
//           zIndex: 9998 
//         }}>
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="flying-coin"
//               initial={{ 
//                 scale: 0,
//                 opacity: 1,
//                 x: Math.random() * window.innerWidth,
//                 y: window.innerHeight + 50
//               }}
//               animate={{
//                 scale: [0, 1, 0.8, 0],
//                 opacity: [1, 1, 1, 0],
//                 x: [
//                   Math.random() * window.innerWidth,
//                   Math.random() * window.innerWidth,
//                   Math.random() * window.innerWidth
//                 ],
//                 y: [
//                   window.innerHeight + 50,
//                   window.innerHeight * 0.3,
//                   -50
//                 ]
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeOut",
//                 delay: i * 0.15
//               }}
//               style={{
//                 position: 'absolute',
//                 fontSize: '20px',
//                 color: '#FFD700',
//                 zIndex: 9998,
//                 filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))'
//               }}
//             >
//               <FaCoins />
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <style>
//         {`
//           @keyframes shimmer {
//             0% { background-position: -200% 0; }
//             100% { background-position: 200% 0; }
//           }
         
//           @keyframes gradientText {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
         
//           @keyframes pointsPop {
//             0% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.2); opacity: 0.8; }
//             100% { transform: scale(1); opacity: 0; }
//           }
         
//           .reward-points-display:hover {
//             animation: pulse 1s infinite;
//           }
         
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//             100% { transform: scale(1); }
//           }
         
//           .points-animation {
//             animation: pointsPop 2s ease-out forwards;
//             position: absolute;
//             right: 0;
//             top: -20px;
//             background: linear-gradient(135deg, #10b981, #059669);
//             color: white;
//             padding: 4px 8px;
//             border-radius: 12px;
//             font-size: 12px;
//             font-weight: bold;
//             white-space: nowrap;
//             box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
//             z-index: 1001;
//           }

//           /* MARK: ADDED - Flying coins animation styles */
//           .flying-coins-container {
//             pointer-events: none;
//           }
         
//           .flying-coin {
//             pointer-events: none;
//           }

//           /* MARK: ADDED - Calendar and notification styles */
//           .calendar-grid {
//             display: grid;
//             grid-template-columns: repeat(7, 1fr);
//             gap: 4px;
//             margin-top: 12px;
//           }
         
//           .calendar-day {
//             width: 32px;
//             height: 32px;
//             display: flex;
//             align-items: 'center';
//             justify-content: 'center';
//             border-radius: 50%;
//             font-size: 12px;
//             cursor: pointer;
//             transition: all 0.2s;
//           }
         
//           .calendar-day:hover {
//             background-color: #f3f4f6;
//           }
         
//           .calendar-day.today {
//             background-color: #3b82f6;
//             color: white;
//           }
         
//           .calendar-day.selected {
//             background-color: #10b981;
//             color: white;
//           }
         
//           .calendar-day.has-plans {
//             position: relative;
//           }
         
//           .calendar-day.has-plans::after {
//             content: '';
//             position: absolute;
//             bottom: 2px;
//             left: 50%;
//             transform: translateX(-50%);
//             width: 4px;
//             height: 4px;
//             background-color: #ef4444;
//             border-radius: 50%;
//           }
         
//           .study-plan-dot {
//             width: 6px;
//             height: 6px;
//             border-radius: 50%;
//             background-color: #ef4444;
//             margin-left: 2px;
//           }
//         `}
//       </style>
     
//       <div className="navbar-container" style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%'
//       }}>
//         {/* Logo - Left Side */}
//         <div className="navbar-brand">
//           <Link
//             to="/student/dashboard"
//             className="navbar-logo-link"
//             style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
//           >
//             <img src={novyaLogo} alt="NOVYA Logo" style={{ height: '35px' }} />
//             <motion.span
//               style={{
//                 background: 'linear-gradient(90deg, #2D5D7B 0%, #4a8db7 25%, #FF6B6B 50%, #FFD166 75%, #2D5D7B 100%)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//                 fontWeight: '800',
//                 fontSize: '1.6rem',
//                 marginLeft: '10px',
//                 letterSpacing: '1px',
//                 fontFamily: "'Poppins', sans-serif",
//                 backgroundSize: '200% auto',
//                 animation: 'gradientText 3s ease infinite',
//               }}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               whileHover={{ backgroundPosition: 'right center', transition: { duration: 1.5 } }}
//             >
//               NOVYA
//             </motion.span>
//           </Link>
//         </div>

//         {/* Desktop Links - Center */}
//         <div className="navbar-desktop-links">
//           <ul style={{
//             display: 'flex',
//             alignItems: 'center',
//             margin: 0,
//             padding: 0,
//             listStyle: 'none',
//             gap: '20px'
//           }}>
//             {navLinks.map((link) => (
//               <li
//                 key={link.path}
//                 className={`nav-item ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''} ${link.hasDropdown ? 'has-dropdown' : ''}`}
//                 style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
//                 onMouseEnter={() => {
//                   if (link.path === '/learn') setClassDropdownOpen(true);
//                   if (link.path === '/practice') setPracticeDropdownOpen(true);
//                 }}
//                 onMouseLeave={() => {
//                   if (link.path === '/learn') setClassDropdownOpen(false);
//                   if (link.path === '/practice') setPracticeDropdownOpen(false);
//                 }}
//               >
//                 {link.hasDropdown ? (
//                   <div className="nav-link-wrapper" style={{ position: 'relative' }}>
//                     <Link
//                       to={link.path}
//                       className={`nav-link ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'nav-link-active' : ''}`}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '5px',
//                         textDecoration: 'none',
//                         color: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '#2D5D7B' : 'inherit',
//                         fontWeight: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '600' : '400',
//                         borderBottom: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '2px solid #2D5D7B' : 'none',
//                         padding: '8px 4px'
//                       }}
//                     >
//                       {link.name}
//                       <FaChevronDown size={10} />
//                     </Link>
//                     <AnimatePresence>
//                       {(link.path === '/learn' ? classDropdownOpen : practiceDropdownOpen) && (
//                         <motion.div
//                           className="nav-dropdown"
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           style={{
//                             position: 'absolute',
//                             top: '100%',
//                             left: 0,
//                             background: 'white',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                             minWidth: '160px',
//                             zIndex: 1000,
//                             padding: '10px 0'
//                           }}
//                         >
//                           <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
//                             {link.dropdownItems.map((dropdownItem) => (
//                               <li key={dropdownItem.path}>
//                                 <Link
//                                   to={dropdownItem.path}
//                                   className={`dropdown-link ${activeLink === dropdownItem.path ? 'dropdown-link-active' : ''}`}
//                                   style={{
//                                     display: 'block',
//                                     padding: '8px 16px',
//                                     textDecoration: 'none',
//                                     color: activeLink === dropdownItem.path ? '#2D5D7B' : '#333',
//                                     fontWeight: activeLink === dropdownItem.path ? '600' : '400',
//                                     background: activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent',
//                                     transition: 'background 0.3s, color 0.3s'
//                                   }}
//                                   onMouseEnter={(e) => {
//                                     if (activeLink !== dropdownItem.path) {
//                                       e.target.style.background = '#f5f5f5';
//                                     }
//                                   }}
//                                   onMouseLeave={(e) => {
//                                     if (activeLink !== dropdownItem.path) {
//                                       e.target.style.background = activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent';
//                                     }
//                                   }}
//                                 >
//                                   {dropdownItem.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link
//                     to={link.path}
//                     className={`nav-link ${activeLink === link.path ? 'nav-link-active' : ''}`}
//                     style={{
//                       display: 'block',
//                       textDecoration: 'none',
//                       color: activeLink === link.path ? '#2D5D7B' : 'inherit',
//                       fontWeight: activeLink === link.path ? '600' : '400',
//                       borderBottom: activeLink === link.path ? '2px solid #2D5D7B' : 'none',
//                       padding: '8px 4px',
//                       transition: 'all 0.3s ease'
//                     }}
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side - Calendar, Notifications, Language, Reward Points & Profile */}
//         <div className="navbar-end" style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '15px',
//           position: 'relative'
//         }}>

//           {/* MARK: ADDED - Calendar Icon */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => {
//                 // MARK: ADDED - Refresh study plans when hovering over calendar
//                 loadStudyPlans();
//                 setCalendarOpen(true);
//               }}
//               onMouseLeave={() => setCalendarOpen(false)}
//             >
//               <button
//                 className="calendar-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: 'auto',
//                   justifyContent: 'center',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaCalendarAlt size={14} />
//                 {getTodaysStudyPlans().length > 0 && (
//                   <span style={{
//                     position: 'absolute',
//                     top: '-5px',
//                     right: '-5px',
//                     width: '8px',
//                     height: '8px',
//                     backgroundColor: '#ef4444',
//                     borderRadius: '50%'
//                   }}></span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {calendarOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '12px',
//                       boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
//                       width: '320px',
//                       zIndex: 1000,
//                       padding: '16px',
//                       marginTop: '8px'
//                     }}
//                   >
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
//                       <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
//                         Study Calendar
//                       </h3>
//                       <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
//                         <button
//                           onClick={() => navigateMonth(-1)}
//                           style={{
//                             background: 'none',
//                             border: 'none',
//                             cursor: 'pointer',
//                             padding: '4px',
//                             borderRadius: '4px',
//                             fontSize: '12px'
//                           }}
//                         >
//                           ‹
//                         </button>
//                         <span style={{ fontSize: '14px', fontWeight: '500', minWidth: '120px', textAlign: 'center' }}>
//                           {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//                         </span>
//                         <button
//                           onClick={() => navigateMonth(1)}
//                           style={{
//                             background: 'none',
//                             border: 'none',
//                             cursor: 'pointer',
//                             padding: '4px',
//                             borderRadius: '4px',
//                             fontSize: '12px'
//                           }}
//                         >
//                           ›
//                         </button>
//                       </div>
//                     </div>

//                     {/* Calendar Header */}
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
//                       {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//                         <div key={day} style={{ textAlign: 'center', fontSize: '11px', color: '#6b7280', fontWeight: '500' }}>
//                           {day}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Calendar Grid */}
//                     <div className="calendar-grid">
//                       {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, index) => (
//                         <div key={`empty-${index}`} style={{ width: '32px', height: '32px' }} />
//                       ))}
                      
//                       {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, index) => {
//                         const day = index + 1;
//                         const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
//                         const hasPlans = getStudyPlansForDate(date).length > 0;
                        
//                         return (
//                           <div
//                             key={day}
//                             className={`calendar-day ${isToday(date) ? 'today' : ''} ${isSelectedDate(date) ? 'selected' : ''} ${hasPlans ? 'has-plans' : ''}`}
//                             onClick={() => setSelectedDate(date)}
//                             style={{
//                               backgroundColor: isToday(date) ? '#3b82f6' : isSelectedDate(date) ? '#10b981' : 'transparent',
//                               color: isToday(date) || isSelectedDate(date) ? 'white' : '#1f2937',
//                               fontWeight: isToday(date) || isSelectedDate(date) ? '600' : '400'
//                             }}
//                           >
//                             {day}
//                           </div>
//                         );
//                       })}
//                     </div>

//                     {/* Selected Date Study Plans */}
//                     <div style={{ marginTop: '16px', borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
//                       <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
//                         Study Plans for {selectedDate.toLocaleDateString()}
//                       </h4>
//                       {getStudyPlansForDate(selectedDate).length === 0 ? (
//                         <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center', margin: '12px 0' }}>
//                           No study plans scheduled
//                         </p>
//                       ) : (
//                         <div style={{ maxHeight: '120px', overflow: 'auto' }}>
//                           {getStudyPlansForDate(selectedDate).map((plan, index) => (
//                             <div key={index} style={{
//                               padding: '8px',
//                               backgroundColor: '#f8fafc',
//                               borderRadius: '6px',
//                               marginBottom: '6px',
//                               borderLeft: '3px solid #3b82f6'
//                             }}>
//                               <div style={{ fontSize: '12px', fontWeight: '500', color: '#1f2937' }}>
//                                 {plan.subject} - {plan.topic}
//                               </div>
//                               <div style={{ fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
//                                 <FaClock size={10} />
//                                 {plan.duration}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* MARK: ADDED - Notification Bell Icon */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => {
//                 // MARK: ADDED - Refresh notifications when hovering over bell icon
//                 loadNotifications();
//                 setNotificationsOpen(true);
//               }}
//               onMouseLeave={() => setNotificationsOpen(false)}
//             >
//               <button
//                 className="notification-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: 'auto',
//                   justifyContent: 'center',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaBell size={14} />
//                 {unreadNotifications > 0 && (
//                   <span style={{
//                     position: 'absolute',
//                     top: '-5px',
//                     right: '-5px',
//                     backgroundColor: '#ef4444',
//                     color: 'white',
//                     borderRadius: '50%',
//                     width: '16px',
//                     height: '16px',
//                     fontSize: '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 'bold'
//                   }}>
//                     {unreadNotifications}
//                   </span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {notificationsOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '12px',
//                       boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
//                       width: '320px',
//                       maxHeight: '400px',
//                       zIndex: 1000,
//                       padding: '0',
//                       marginTop: '8px',
//                       overflow: 'hidden'
//                     }}
//                   >
//                     <div style={{
//                       padding: '16px',
//                       borderBottom: '1px solid #e5e7eb',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center'
//                     }}>
//                       <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
//                         Notifications
//                       </h3>
//                       <div style={{ display: 'flex', gap: '8px' }}>
//                         {unreadNotifications > 0 && (
//                           <button
//                             onClick={markAllNotificationsAsRead}
//                             style={{
//                               background: 'none',
//                               border: 'none',
//                               color: '#3b82f6',
//                               fontSize: '12px',
//                               cursor: 'pointer',
//                               fontWeight: '500'
//                             }}
//                           >
//                             Mark all read
//                           </button>
//                         )}
//                         {notifications.length > 0 && (
//                           <button
//                             onClick={clearAllNotifications}
//                             style={{
//                               background: 'none',
//                               border: 'none',
//                               color: '#ef4444',
//                               fontSize: '12px',
//                               cursor: 'pointer',
//                               fontWeight: '500'
//                             }}
//                           >
//                             Clear all
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                     <div style={{ maxHeight: '300px', overflow: 'auto' }}>
//                       {notifications.length === 0 ? (
//                         <div style={{ padding: '32px 16px', textAlign: 'center', color: '#6b7280' }}>
//                           <FaBell size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
//                           <p style={{ margin: 0, fontSize: '14px' }}>No notifications yet</p>
//                           <p style={{ margin: '4px 0 0 0', fontSize: '12px' }}>Study plans will appear here</p>
//                         </div>
//                       ) : (
//                         notifications.map((notification) => (
//                           <div
//                             key={notification.id}
//                             style={{
//                               padding: '12px 16px',
//                               borderBottom: '1px solid #f3f4f6',
//                               backgroundColor: notification.read ? 'transparent' : '#f0f9ff',
//                               cursor: 'pointer',
//                               transition: 'background 0.2s'
//                             }}
//                             onClick={() => !notification.read && markNotificationAsRead(notification.id)}
//                             onMouseEnter={(e) => {
//                               e.target.style.backgroundColor = notification.read ? '#f9fafb' : '#e0f2fe';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.backgroundColor = notification.read ? 'transparent' : '#f0f9ff';
//                             }}
//                           >
//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
//                               <div style={{ fontSize: '13px', fontWeight: '600', color: '#1f2937' }}>
//                                 {notification.title}
//                               </div>
//                               {!notification.read && (
//                                 <div style={{
//                                   width: '8px',
//                                   height: '8px',
//                                   backgroundColor: '#3b82f6',
//                                   borderRadius: '50%',
//                                   flexShrink: 0,
//                                   marginLeft: '8px'
//                                 }} />
//                               )}
//                             </div>
//                             <div style={{ fontSize: '12px', color: '#4b5563', marginBottom: '4px' }}>
//                               {notification.message}
//                             </div>
//                             <div style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
//                               <FaClock size={10} />
//                               {new Date(notification.date).toLocaleDateString()} at {new Date(notification.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                             </div>
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Language Button */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => setLangDropdownOpen(true)}
//               onMouseLeave={() => setLangDropdownOpen(false)}
//             >
//               <button
//                 className="language-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: '90px',
//                   justifyContent: 'center'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaGlobe size={12} />
//                 <span>{i18n.language.toUpperCase()}</span>
//                 <FaChevronDown size={8} />
//               </button>

//               <AnimatePresence>
//                 {langDropdownOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                       minWidth: '140px',
//                       zIndex: 1000,
//                       padding: '8px 0',
//                       marginTop: '5px'
//                     }}
//                   >
//                     <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
//                       {languages.map((lang) => (
//                         <li key={lang.code}>
//                           <button
//                             onClick={() => handleLanguageChange(lang.code)}
//                             className="dropdown-link"
//                             style={{
//                               width: '100%',
//                               border: 'none',
//                               background: 'transparent',
//                               padding: '8px 16px',
//                               textAlign: 'left',
//                               cursor: 'pointer',
//                               fontSize: '14px',
//                               color: '#333',
//                               transition: 'all 0.3s ease',
//                               display: 'flex',
//                               alignItems: 'center',
//                               borderRadius: '0'
//                             }}
//                             onMouseEnter={(e) => { e.target.style.background = '#2D5D7B'; e.target.style.color = 'white'; }}
//                             onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#333'; }}
//                           >
//                             {lang.label}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Enhanced Reward Points Display with Animation */}
//           <motion.div
//             className="reward-points-display"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               background: 'linear-gradient(135deg, #FFD700, #FFA500)',
//               padding: '8px 16px',
//               borderRadius: '20px',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#744210',
//               border: '2px solid #FFC107',
//               cursor: 'default',
//               boxShadow: '0 2px 8px rgba(255, 193, 7, 0.3)',
//               minWidth: '80px',
//               justifyContent: 'center',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//             title="Your Reward Points"
//             whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(255, 193, 7, 0.5)' }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Animated background effect */}
//             <div style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
//               backgroundSize: '200% 100%',
//               animation: 'shimmer 2s infinite linear',
//               opacity: 0.5
//             }} />
           
//             <FaCoins size={16} color="#744210" style={{ position: 'relative', zIndex: 1 }} />
//             <span style={{
//               fontFamily: "'Poppins', sans-serif",
//               background: 'linear-gradient(45deg, #744210, #8B5A2B)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//               color: 'transparent',
//               position: 'relative',
//               zIndex: 1
//             }}>
//               {currentRewardPoints.toLocaleString()}
//             </span>
           
//             {/* Points Animation for Video/Mock Test Rewards */}
//             {showPointsAnimation && pointsChange > 0 && (
//               <motion.div
//                 className="points-animation"
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: -20 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 +{pointsChange}
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Avatar Dropdown */}
//           <div
//             className="navbar-avatar-container"
//             style={{
//               position: 'relative',
//               cursor: 'pointer',
//             }}
//             onMouseEnter={() => setAvatarOpen(true)}
//             onMouseLeave={() => setAvatarOpen(false)}
//           >
//             {/* Avatar with Name */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <div
//                 style={{
//                   width: '32px',
//                   height: '32px',
//                   borderRadius: '50%',
//                   overflow: 'hidden',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   background: '#f0f0f0',
//                   transition: 'transform 0.2s',
//                 }}
//               >
//                 {avatar ? (
//                   <img
//                     src={avatar}
//                     alt="User Avatar"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <FaUserCircle size={28} color="#4B5563" />
//                 )}
//               </div>
//               <span style={{ fontWeight: 500, color: '#111827', fontSize: '14px' }}>
//                 {name || 'User'}
//               </span>
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {avatarOpen && (
//                 <motion.div
//                   className="avatar-dropdown"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   style={{
//                     position: 'absolute',
//                     top: 'calc(100% + 8px)',
//                     right: 0,
//                     background: 'white',
//                     borderRadius: '8px',
//                     boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
//                     padding: '8px 0',
//                     minWidth: '160px',
//                     zIndex: 1000,
//                   }}
//                 >
//                   {/* Reward Points Summary in Dropdown */}
//                   <div style={{
//                     padding: '12px 16px',
//                     borderBottom: '1px solid #f0f0f0',
//                     background: 'linear-gradient(135deg, #fff9e6, #fff0cc)'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px',
//                       fontSize: '14px',
//                       color: '#744210',
//                       fontWeight: '600'
//                     }}>
//                       <FaCoins size={14} color="#FFA500" />
//                       <span>Reward Points: {currentRewardPoints.toLocaleString()}</span>
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#8B5A2B',
//                       marginTop: '4px'
//                     }}>
//                       Earn more by completing videos and tests!
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => navigate('/user-details')}
//                     className="profile-button"
//                     style={{
//                       width: '100%',
//                       border: 'none',
//                       background: 'transparent',
//                       padding: '10px 16px',
//                       cursor: 'pointer',
//                       textAlign: 'left',
//                       fontSize: '14px',
//                       color: '#1F2937',
//                       transition: 'background 0.2s, color 0.2s',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}
//                     onMouseEnter={(e) => { e.target.style.background = '#f0f0f0'; }}
//                     onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
//                   >
//                     <FaUserCircle size={14} />
//                     View Profile
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="logout-button"
//                     style={{
//                       width: '100%',
//                       border: 'none',
//                       background: 'transparent',
//                       padding: '10px 16px',
//                       cursor: 'pointer',
//                       textAlign: 'left',
//                       fontSize: '14px',
//                       color: '#dc2626',
//                       transition: 'background 0.2s, color 0.2s',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}
//                     onMouseEnter={(e) => { e.target.style.background = '#fef2f2'; }}
//                     onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
//                   >
//                     <FaSignOutAlt size={14} />
//                     Logout
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;










// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FaUserCircle,
//   FaChevronDown,
//   FaGlobe,
//   FaSignOutAlt,
//   FaSearch,
//   FaCoins,
//   FaCalendarAlt,
//   FaBell,
//   FaCheck,
//   FaBook,
//   FaClock,
//   FaTimes,
//   FaBars
// } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import './Navbarrr.css';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const Navbar = ({ isFullScreen, rewardPoints = 0 }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [avatarOpen, setAvatarOpen] = useState(false);
//   const [classDropdownOpen, setClassDropdownOpen] = useState(false);
//   const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [calendarOpen, setCalendarOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
//   // MARK: ADDED - Flying coins animation state
//   const [showFlyingCoins, setShowFlyingCoins] = useState(false);

//   const [avatar, setAvatar] = useState(null);
//   const [name, setName] = useState('');
//   const [currentRewardPoints, setCurrentRewardPoints] = useState(rewardPoints);
//   const [pointsChange, setPointsChange] = useState(0);
//   const [showPointsAnimation, setShowPointsAnimation] = useState(false);

//   // MARK: ADDED - Study plan and notifications state
//   const [studyPlans, setStudyPlans] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadNotifications, setUnreadNotifications] = useState(0);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const location = useLocation();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();

//   const languages = [
//     { code: 'en', label: 'English' },
//     { code: 'te', label: 'తెలుగు' },
//     { code: 'hi', label: 'हिन्दी' },
//     { code: 'kn', label: 'ಕನ್ನಡ' },
//     { code: 'ta', label: 'தமிழ்' },
//     { code: 'ml', label: 'മലയാളം' },
//   ];

//   // MARK: UPDATED - Load study plans and notifications from localStorage with real-time updates
//   useEffect(() => {
//     loadStudyPlans();
//     loadNotifications();
   
//     // Listen for new study plans from lesson pages
//     const handleStudyPlanAdded = (event) => {
//       if (event.detail && event.detail.studyPlan) {
//         // Force reload study plans to get latest data
//         loadStudyPlans();
//         // Also create notification for the new study plan
//         createNotification(event.detail.studyPlan);
//       }
//     };

//     // Listen for new notifications
//     const handleNotificationAdded = (event) => {
//       if (event.detail && event.detail.notification) {
//         // Force reload notifications to get latest data
//         loadNotifications();
//       }
//     };

//     // MARK: ADDED - Listen for study plan updates
//     const handleStudyPlanUpdated = () => {
//       loadStudyPlans();
//     };

//     // MARK: ADDED - Listen for storage changes (for cross-tab updates)
//     const handleStorageChange = (e) => {
//       if (e.key === 'studyPlans') {
//         loadStudyPlans();
//       }
//       if (e.key === 'studyNotifications') {
//         loadNotifications();
//       }
//     };

//     window.addEventListener('studyPlanAdded', handleStudyPlanAdded);
//     window.addEventListener('notificationAdded', handleNotificationAdded);
//     window.addEventListener('studyPlanUpdated', handleStudyPlanUpdated);
//     window.addEventListener('storage', handleStorageChange);
   
//     // MARK: ADDED - Set up interval to check for updates
//     const interval = setInterval(() => {
//       loadStudyPlans();
//       loadNotifications();
//     }, 2000); // Check every 2 seconds for updates
   
//     return () => {
//       window.removeEventListener('studyPlanAdded', handleStudyPlanAdded);
//       window.removeEventListener('notificationAdded', handleNotificationAdded);
//       window.removeEventListener('studyPlanUpdated', handleStudyPlanUpdated);
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, []);

//   // MARK: UPDATED - Study plan functions with improved real-time loading
//   const loadStudyPlans = () => {
//     try {
//       const savedPlans = localStorage.getItem('studyPlans');
//       if (savedPlans) {
//         const plans = JSON.parse(savedPlans);
//         // Remove duplicates based on ID
//         const uniquePlans = plans.filter((plan, index, self) =>
//           index === self.findIndex(p => p.id === plan.id)
//         );
//         setStudyPlans(uniquePlans);
//       } else {
//         setStudyPlans([]);
//       }
//     } catch (error) {
//       console.error('Error loading study plans:', error);
//       setStudyPlans([]);
//     }
//   };

//   const loadNotifications = () => {
//     try {
//       const savedNotifications = localStorage.getItem('studyNotifications');
//       if (savedNotifications) {
//         const notifs = JSON.parse(savedNotifications);
//         // Remove duplicates based on ID
//         const uniqueNotifs = notifs.filter((notif, index, self) =>
//           index === self.findIndex(n => n.id === notif.id)
//         );
//         setNotifications(uniqueNotifs);
//         const unread = uniqueNotifs.filter(notif => !notif.read).length;
//         setUnreadNotifications(unread);
//       } else {
//         setNotifications([]);
//         setUnreadNotifications(0);
//       }
//     } catch (error) {
//       console.error('Error loading notifications:', error);
//       setNotifications([]);
//       setUnreadNotifications(0);
//     }
//   };

//   const addStudyPlan = (studyPlan) => {
//     const existingPlans = JSON.parse(localStorage.getItem('studyPlans') || '[]');
   
//     // Check for duplicates before adding
//     const isDuplicate = existingPlans.some(plan => plan.id === studyPlan.id);
//     if (isDuplicate) {
//       console.log('Study plan already exists, skipping duplicate');
//       return;
//     }

//     const updatedPlans = [...existingPlans, studyPlan];
//     localStorage.setItem('studyPlans', JSON.stringify(updatedPlans));
//     setStudyPlans(updatedPlans);
   
//     // MARK: ADDED - Dispatch event to notify other components
//     window.dispatchEvent(new CustomEvent('studyPlanUpdated'));
//   };

//   const addNotification = (notification) => {
//     const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
   
//     // Check for duplicates before adding
//     const isDuplicate = existingNotifications.some(notif => notif.id === notification.id);
//     if (isDuplicate) {
//       console.log('Notification already exists, skipping duplicate');
//       return;
//     }

//     const updatedNotifications = [notification, ...existingNotifications];
//     localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//     setNotifications(updatedNotifications);
//     setUnreadNotifications(prev => prev + 1);
   
//     // MARK: ADDED - Dispatch storage event for cross-tab sync
//     window.dispatchEvent(new StorageEvent('storage', {
//       key: 'studyNotifications',
//       newValue: JSON.stringify(updatedNotifications)
//     }));
//   };

//   const createNotification = (studyPlan) => {
//     const notificationId = `notif_${studyPlan.id}`;
   
//     // Check if notification already exists
//     const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
//     const isDuplicateNotification = existingNotifications.some(notif => notif.id === notificationId);
   
//     if (isDuplicateNotification) {
//       console.log('Notification already exists, skipping duplicate');
//       return;
//     }

//     const notification = {
//       id: notificationId,
//       type: 'study_plan_created',
//       title: t('new_study_plan_created'),
//       message: t('study_plan_added_to_calendar', { title: studyPlan.title }),
//       date: new Date().toISOString(),
//       read: false,
//       planId: studyPlan.id
//     };
//     addNotification(notification);
//   };

//   const markNotificationAsRead = (notificationId) => {
//     try {
//       const updatedNotifications = notifications.map(notif =>
//         notif.id === notificationId ? { ...notif, read: true } : notif
//       );
//       localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//       setNotifications(updatedNotifications);
//       const unread = updatedNotifications.filter(notif => !notif.read).length;
//       setUnreadNotifications(unread);
     
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: JSON.stringify(updatedNotifications)
//       }));
//     } catch (error) {
//       console.error('Error marking notification as read:', error);
//     }
//   };

//   const markAllNotificationsAsRead = () => {
//     try {
//       const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }));
//       localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
//       setNotifications(updatedNotifications);
//       setUnreadNotifications(0);
     
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: JSON.stringify(updatedNotifications)
//       }));
//     } catch (error) {
//       console.error('Error marking all notifications as read:', error);
//     }
//   };

//   const clearAllNotifications = () => {
//     try {
//       localStorage.removeItem('studyNotifications');
//       setNotifications([]);
//       setUnreadNotifications(0);
     
//       // MARK: ADDED - Dispatch storage event for cross-tab sync
//       window.dispatchEvent(new StorageEvent('storage', {
//         key: 'studyNotifications',
//         newValue: null
//       }));
//     } catch (error) {
//       console.error('Error clearing notifications:', error);
//     }
//   };

//   // MARK: ADDED - Get today's study plans
//   const getTodaysStudyPlans = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const todaysPlans = [];
   
//     studyPlans.forEach(plan => {
//       plan.studySessions?.forEach(session => {
//         if (session.date === today && !session.completed) {
//           todaysPlans.push({
//             ...session,
//             planTitle: plan.title,
//             subject: plan.subject
//           });
//         }
//       });
//     });
   
//     return todaysPlans;
//   };

//   // MARK: ADDED - Calendar functions
//   const getDaysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const navigateMonth = (direction) => {
//     setCurrentMonth(prev => {
//       const newDate = new Date(prev);
//       newDate.setMonth(prev.getMonth() + direction);
//       return newDate;
//     });
//   };

//   const getStudyPlansForDate = (date) => {
//     const dateString = date.toISOString().split('T')[0];
//     const plansForDate = [];
   
//     studyPlans.forEach(plan => {
//       plan.studySessions?.forEach(session => {
//         if (session.date === dateString) {
//           plansForDate.push({
//             ...session,
//             planTitle: plan.title,
//             subject: plan.subject
//           });
//         }
//       });
//     });
   
//     return plansForDate;
//   };

//   const isToday = (date) => {
//     const today = new Date();
//     return date.getDate() === today.getDate() &&
//            date.getMonth() === today.getMonth() &&
//            date.getFullYear() === today.getFullYear();
//   };

//   const isSelectedDate = (date) => {
//     return date.getDate() === selectedDate.getDate() &&
//            date.getMonth() === selectedDate.getMonth() &&
//            date.getFullYear() === selectedDate.getFullYear();
//   };

//   const formatTime = (dateString) => {
//     return new Date(dateString).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // MARK: UPDATED - Flying coins animation trigger function with points
//   const triggerFlyingCoins = (pointsToAdd = 0) => {
//     setShowFlyingCoins(true);
//     if (pointsToAdd > 0) {
//       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//       const newPoints = currentPoints + pointsToAdd;
//       localStorage.setItem('rewardPoints', newPoints.toString());
//       setCurrentRewardPoints(newPoints);
     
//       // Dispatch event to update other components
//       window.dispatchEvent(new CustomEvent('rewardPointsUpdated', {
//         detail: { rewardPoints: newPoints }
//       }));
//     }
//     setTimeout(() => {
//       setShowFlyingCoins(false);
//     }, 2000);
//   };

//   // MARK: UPDATED - Welcome coins animation for login with points
//   const triggerWelcomeCoins = () => {
//     // Check if welcome points were already awarded
//     const welcomeAwarded = sessionStorage.getItem('welcomePointsAwarded');
//     if (!welcomeAwarded) {
//       setShowFlyingCoins(true);
//       const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
//       const newPoints = currentPoints + 50; // 50 welcome points
//       localStorage.setItem('rewardPoints', newPoints.toString());
//       setCurrentRewardPoints(newPoints);
//       sessionStorage.setItem('welcomePointsAwarded', 'true');
     
//       // Dispatch event to update other components
//       window.dispatchEvent(new CustomEvent('rewardPointsUpdated', {
//         detail: { rewardPoints: newPoints }
//       }));
     
//       setTimeout(() => {
//         setShowFlyingCoins(false);
//       }, 3000);
//     }
//   };

//   // MARK: UPDATED - Sync reward points from localStorage and props
//   useEffect(() => {
//     const userRole = localStorage.getItem('userRole');
//     let storedData = null;

//     if (userRole === 'student') {
//       storedData = localStorage.getItem('studentData');
//     } else if (userRole === 'parent') {
//       storedData = localStorage.getItem('parentData');
//     }

//     if (storedData) {
//       const parsed = JSON.parse(storedData);
//       setAvatar(parsed.avatar || null);
//       setName(`${parsed.firstName || ''} ${parsed.lastName || ''}`);
//     }

//     // Load reward points from localStorage
//     const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
//     setCurrentRewardPoints(points);

//     // MARK: UPDATED - Check for login animation with proper timing
//     const justLoggedIn = sessionStorage.getItem('justLoggedIn');
//     if (justLoggedIn) {
//       setTimeout(() => {
//         triggerWelcomeCoins();
//         sessionStorage.removeItem('justLoggedIn');
//       }, 1000);
//     }
//   }, [rewardPoints]);

//   // MARK: UPDATED - Improved reward points update listener
//   useEffect(() => {
//     const handleRewardPointsUpdate = (event) => {
//       if (event.detail && event.detail.rewardPoints !== undefined) {
//         const newPoints = event.detail.rewardPoints;
//         const oldPoints = currentRewardPoints;
//         const pointsDiff = newPoints - oldPoints;
       
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
       
//         setCurrentRewardPoints(newPoints);
//       }
//     };

//     const handleStorageChange = (e) => {
//       if (e.key === 'rewardPoints') {
//         const points = parseInt(e.newValue) || 0;
//         const oldPoints = currentRewardPoints;
//         const pointsDiff = points - oldPoints;
       
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
       
//         setCurrentRewardPoints(points);
//       }
//     };

//     // Listen for custom events (same tab - video, mock tests)
//     window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
   
//     // Listen for storage events (other tabs)
//     window.addEventListener('storage', handleStorageChange);
   
//     // Also check for changes periodically
//     const interval = setInterval(() => {
//       const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
//       if (points !== currentRewardPoints) {
//         const pointsDiff = points - currentRewardPoints;
//         if (pointsDiff > 0) {
//           setPointsChange(pointsDiff);
//           setShowPointsAnimation(true);
//           triggerFlyingCoins();
//           setTimeout(() => setShowPointsAnimation(false), 2000);
//         }
//         setCurrentRewardPoints(points);
//       }
//     }, 1000);

//     return () => {
//       window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, [currentRewardPoints]);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//     setAvatarOpen(false);
//     setClassDropdownOpen(false);
//     setPracticeDropdownOpen(false);
//     setLangDropdownOpen(false);
//     setMobileMenuOpen(false);

//     // Hide navbar in fullscreen mode during tests
//     if (isFullScreen) {
//       setShowNavbar(false);
//       return;
//     }

//     const hideNavbarRoutes = ['/mock-test', '/quick-practice'];
//     const shouldHideNavbar = hideNavbarRoutes.some(route =>
//       location.pathname.includes(route)
//     );

//     setShowNavbar(!shouldHideNavbar);
//   }, [location.pathname, isFullScreen]);

//   const handleLanguageChange = (code) => {
//     i18n.changeLanguage(code);
//     setLangDropdownOpen(false);
//     setMobileMenuOpen(false);
//   };

//   const handleLogout = () => {
//     // Clear all localStorage except rewardPoints to persist points after logout
//     const rewardPointsValue = localStorage.getItem('rewardPoints');
//     localStorage.clear();
//     if (rewardPointsValue) {
//       localStorage.setItem('rewardPoints', rewardPointsValue);
//     }
//     navigate('/');
//   };

//   const navLinks = [
//     { path: '/student/dashboard', name: t('home') },
//     {
//       path: '/learn',
//       name: t('class_room'),
//       hasDropdown: true,
//       dropdownItems: [
//         { path: '/learn', name: t('class_7') },
//         { path: '/learn/class8', name: t('class_8') },
//         { path: '/learn/class9', name: t('class_9') },
//         { path: '/learn/class10', name: t('class_10') },
//       ],
//     },
//     {
//       path: '/practice',
//       name: t('practice'),
//       hasDropdown: true,
//       dropdownItems: [
//         { path: '/quick-practice', name: t('quick_practice') },
//         { path: '/mock-test', name: t('mock_test') },
//       ],
//     },
//     { path: '/career', name: t('career') },
//     { path: '/study-room', name: t('studyRoom') },
//   ];

//   // MARK: ADDED - Mobile menu toggle
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // MARK: ADDED - Close all dropdowns
//   const closeAllDropdowns = () => {
//     setAvatarOpen(false);
//     setClassDropdownOpen(false);
//     setPracticeDropdownOpen(false);
//     setLangDropdownOpen(false);
//     setCalendarOpen(false);
//     setNotificationsOpen(false);
//     setMobileMenuOpen(false);
//   };

//   if (!showNavbar) return null;

//   return (
//     <motion.nav
//       className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         background: 'white',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         padding: '10px 0'
//       }}
//     >
//       {/* MARK: ADDED - Flying Coins Animation Container */}
//       {showFlyingCoins && (
//         <div className="flying-coins-container" style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           zIndex: 9998
//         }}>
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="flying-coin"
//               initial={{
//                 scale: 0,
//                 opacity: 1,
//                 x: Math.random() * window.innerWidth,
//                 y: window.innerHeight + 50
//               }}
//               animate={{
//                 scale: [0, 1, 0.8, 0],
//                 opacity: [1, 1, 1, 0],
//                 x: [
//                   Math.random() * window.innerWidth,
//                   Math.random() * window.innerWidth,
//                   Math.random() * window.innerWidth
//                 ],
//                 y: [
//                   window.innerHeight + 50,
//                   window.innerHeight * 0.3,
//                   -50
//                 ]
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeOut",
//                 delay: i * 0.15
//               }}
//               style={{
//                 position: 'absolute',
//                 fontSize: '20px',
//                 color: '#FFD700',
//                 zIndex: 9998,
//                 filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))'
//               }}
//             >
//               <FaCoins />
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <style>
//         {`
//           @keyframes shimmer {
//             0% { background-position: -200% 0; }
//             100% { background-position: 200% 0; }
//           }
         
//           @keyframes gradientText {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
         
//           @keyframes pointsPop {
//             0% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.2); opacity: 0.8; }
//             100% { transform: scale(1); opacity: 0; }
//           }
         
//           .reward-points-display:hover {
//             animation: pulse 1s infinite;
//           }
         
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//             100% { transform: scale(1); }
//           }
         
//           .points-animation {
//             animation: pointsPop 2s ease-out forwards;
//             position: absolute;
//             right: 0;
//             top: -20px;
//             background: linear-gradient(135deg, #10b981, #059669);
//             color: white;
//             padding: 4px 8px;
//             border-radius: 12px;
//             font-size: 12px;
//             font-weight: bold;
//             white-space: nowrap;
//             box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
//             z-index: 1001;
//           }

//           /* MARK: ADDED - Flying coins animation styles */
//           .flying-coins-container {
//             pointer-events: none;
//           }
         
//           .flying-coin {
//             pointer-events: none;
//           }

//           /* MARK: ADDED - Calendar and notification styles */
//           .calendar-grid {
//             display: grid;
//             grid-template-columns: repeat(7, 1fr);
//             gap: 4px;
//             margin-top: 12px;
//           }
         
//           .calendar-day {
//             width: 32px;
//             height: 32px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 50%;
//             font-size: 12px;
//             cursor: pointer;
//             transition: all 0.2s;
//           }
         
//           .calendar-day:hover {
//             background-color: #f3f4f6;
//           }
         
//           .calendar-day.today {
//             background-color: #3b82f6;
//             color: white;
//           }
         
//           .calendar-day.selected {
//             background-color: #10b981;
//             color: white;
//           }
         
//           .calendar-day.has-plans {
//             position: relative;
//           }
         
//           .calendar-day.has-plans::after {
//             content: '';
//             position: absolute;
//             bottom: 2px;
//             left: 50%;
//             transform: translateX(-50%);
//             width: 4px;
//             height: 4px;
//             background-color: #ef4444;
//             border-radius: 50%;
//           }
         
//           .study-plan-dot {
//             width: 6px;
//             height: 6px;
//             border-radius: 50%;
//             background-color: #ef4444;
//             margin-left: 2px;
//           }

//           /* MARK: ADDED - Mobile responsive styles */
//           @media (max-width: 768px) {
//             .navbar-desktop-links {
//               display: none !important;
//             }
           
//             .navbar-mobile-menu {
//               display: block !important;
//             }
           
//             .navbar-end {
//               gap: 8px !important;
//             }
           
//             .reward-points-display {
//               padding: 6px 12px !important;
//               font-size: 12px !important;
//               min-width: 60px !important;
//             }
           
//             .language-button span {
//               display: none;
//             }
           
//             .language-button {
//               min-width: 40px !important;
//               padding: 6px 8px !important;
//             }
           
//             .calendar-button,
//             .notification-button {
//               padding: 6px 8px !important;
//               min-width: auto !important;
//             }
           
//             .navbar-avatar-container span {
//               display: none;
//             }
           
//             .nav-dropdown {
//               width: 280px !important;
//               right: 0 !important;
//               left: auto !important;
//             }
           
//             .mobile-menu-dropdown {
//               width: 100% !important;
//               left: 0 !important;
//               right: 0 !important;
//             }
//           }

//           @media (min-width: 769px) {
//             .navbar-mobile-menu {
//               display: none !important;
//             }
           
//             .mobile-menu-content {
//               display: none !important;
//             }
//           }

//           @media (max-width: 480px) {
//             .navbar-brand span {
//               font-size: 1.2rem !important;
//             }
           
//             .navbar-brand img {
//               height: 25px !important;
//             }
           
//             .nav-dropdown {
//               width: 250px !important;
//             }
           
//             .calendar-grid {
//               gap: 2px;
//             }
           
//             .calendar-day {
//               width: 28px;
//               height: 28px;
//               font-size: 10px;
//             }
//           }
//         `}
//       </style>
     
//       <div className="navbar-container" style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 20px',
//         position: 'relative'
//       }}>
//         {/* Logo - Left Side */}
//         <div className="navbar-brand">
//           <Link
//             to="/student/dashboard"
//             className="navbar-logo-link"
//             style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
//             onClick={closeAllDropdowns}
//           >
//             <img src={novyaLogo} alt="NOVYA Logo" style={{ height: '35px' }} />
//             <motion.span
//               style={{
//                 background: 'linear-gradient(90deg, #2D5D7B 0%, #4a8db7 25%, #FF6B6B 50%, #FFD166 75%, #2D5D7B 100%)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//                 fontWeight: '800',
//                 fontSize: '1.6rem',
//                 marginLeft: '10px',
//                 letterSpacing: '1px',
//                 fontFamily: "'Poppins', sans-serif",
//                 backgroundSize: '200% auto',
//                 animation: 'gradientText 3s ease infinite',
//               }}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               whileHover={{ backgroundPosition: 'right center', transition: { duration: 1.5 } }}
//             >
//               NOVYA
//             </motion.span>
//           </Link>
//         </div>

//         {/* Desktop Links - Center */}
//         <div className="navbar-desktop-links" style={{
//           display: 'flex',
//           alignItems: 'center',
//           flex: 1,
//           justifyContent: 'center'
//         }}>
//           <ul style={{
//             display: 'flex',
//             alignItems: 'center',
//             margin: 0,
//             padding: 0,
//             listStyle: 'none',
//             gap: '20px'
//           }}>
//             {navLinks.map((link) => (
//               <li
//                 key={link.path}
//                 className={`nav-item ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''} ${link.hasDropdown ? 'has-dropdown' : ''}`}
//                 style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
//                 onMouseEnter={() => {
//                   if (link.path === '/learn') setClassDropdownOpen(true);
//                   if (link.path === '/practice') setPracticeDropdownOpen(true);
//                 }}
//                 onMouseLeave={() => {
//                   if (link.path === '/learn') setClassDropdownOpen(false);
//                   if (link.path === '/practice') setPracticeDropdownOpen(false);
//                 }}
//               >
//                 {link.hasDropdown ? (
//                   <div className="nav-link-wrapper" style={{ position: 'relative' }}>
//                     <Link
//                       to={link.path}
//                       className={`nav-link ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'nav-link-active' : ''}`}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '5px',
//                         textDecoration: 'none',
//                         color: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '#2D5D7B' : 'inherit',
//                         fontWeight: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '600' : '400',
//                         borderBottom: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '2px solid #2D5D7B' : 'none',
//                         padding: '8px 4px',
//                         fontSize: '14px',
//                         transition: 'all 0.3s ease'
//                       }}
//                     >
//                       {link.name}
//                       <FaChevronDown size={10} />
//                     </Link>
//                     <AnimatePresence>
//                       {(link.path === '/learn' ? classDropdownOpen : practiceDropdownOpen) && (
//                         <motion.div
//                           className="nav-dropdown"
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           style={{
//                             position: 'absolute',
//                             top: '100%',
//                             left: 0,
//                             background: 'white',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                             minWidth: '160px',
//                             zIndex: 1000,
//                             padding: '10px 0'
//                           }}
//                         >
//                           <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
//                             {link.dropdownItems.map((dropdownItem) => (
//                               <li key={dropdownItem.path}>
//                                 <Link
//                                   to={dropdownItem.path}
//                                   className={`dropdown-link ${activeLink === dropdownItem.path ? 'dropdown-link-active' : ''}`}
//                                   style={{
//                                     display: 'block',
//                                     padding: '8px 16px',
//                                     textDecoration: 'none',
//                                     color: activeLink === dropdownItem.path ? '#2D5D7B' : '#333',
//                                     fontWeight: activeLink === dropdownItem.path ? '600' : '400',
//                                     background: activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent',
//                                     transition: 'background 0.3s, color 0.3s',
//                                     fontSize: '14px'
//                                   }}
//                                   onMouseEnter={(e) => {
//                                     if (activeLink !== dropdownItem.path) {
//                                       e.target.style.background = '#f5f5f5';
//                                     }
//                                   }}
//                                   onMouseLeave={(e) => {
//                                     if (activeLink !== dropdownItem.path) {
//                                       e.target.style.background = activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent';
//                                     }
//                                   }}
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   {dropdownItem.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link
//                     to={link.path}
//                     className={`nav-link ${activeLink === link.path ? 'nav-link-active' : ''}`}
//                     style={{
//                       display: 'block',
//                       textDecoration: 'none',
//                       color: activeLink === link.path ? '#2D5D7B' : 'inherit',
//                       fontWeight: activeLink === link.path ? '600' : '400',
//                       borderBottom: activeLink === link.path ? '2px solid #2D5D7B' : 'none',
//                       padding: '8px 4px',
//                       transition: 'all 0.3s ease',
//                       fontSize: '14px'
//                     }}
//                     onClick={closeAllDropdowns}
//                   >
//                     {link.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* MARK: ADDED - Mobile Menu Button */}
//         <div className="navbar-mobile-menu" style={{ display: 'none' }}>
//           <button
//             onClick={toggleMobileMenu}
//             style={{
//               background: 'transparent',
//               border: 'none',
//               cursor: 'pointer',
//               padding: '8px',
//               borderRadius: '4px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//           >
//             <FaBars size={20} color="#2D5D7B" />
//           </button>
//         </div>

//         {/* Right Side - Calendar, Notifications, Language, Reward Points & Profile */}
//         <div className="navbar-end" style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '15px',
//           position: 'relative'
//         }}>

//           {/* MARK: ADDED - Calendar Icon */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => {
//                 loadStudyPlans();
//                 setCalendarOpen(true);
//               }}
//               onMouseLeave={() => setCalendarOpen(false)}
//             >
//               <button
//                 className="calendar-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: 'auto',
//                   justifyContent: 'center',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaCalendarAlt size={14} />
//                 {getTodaysStudyPlans().length > 0 && (
//                   <span style={{
//                     position: 'absolute',
//                     top: '-5px',
//                     right: '-5px',
//                     width: '8px',
//                     height: '8px',
//                     backgroundColor: '#ef4444',
//                     borderRadius: '50%'
//                   }}></span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {calendarOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '12px',
//                       boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
//                       width: '320px',
//                       zIndex: 1000,
//                       padding: '16px',
//                       marginTop: '8px'
//                     }}
//                   >
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
//                       <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
//                         {t('study_calendar')}
//                       </h3>
//                       <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
//                         <button
//                           onClick={() => navigateMonth(-1)}
//                           style={{
//                             background: 'none',
//                             border: 'none',
//                             cursor: 'pointer',
//                             padding: '4px',
//                             borderRadius: '4px',
//                             fontSize: '12px'
//                           }}
//                         >
//                           ‹
//                         </button>
//                         <span style={{ fontSize: '14px', fontWeight: '500', minWidth: '120px', textAlign: 'center' }}>
//                           {currentMonth.toLocaleDateString(i18n.language, { month: 'long', year: 'numeric' })}
//                         </span>
//                         <button
//                           onClick={() => navigateMonth(1)}
//                           style={{
//                             background: 'none',
//                             border: 'none',
//                             cursor: 'pointer',
//                             padding: '4px',
//                             borderRadius: '4px',
//                             fontSize: '12px'
//                           }}
//                         >
//                           ›
//                         </button>
//                       </div>
//                     </div>

//                     {/* Calendar Header */}
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
//                       {[t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')].map(day => (
//                         <div key={day} style={{ textAlign: 'center', fontSize: '11px', color: '#6b7280', fontWeight: '500' }}>
//                           {day}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Calendar Grid */}
//                     <div className="calendar-grid">
//                       {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, index) => (
//                         <div key={`empty-${index}`} style={{ width: '32px', height: '32px' }} />
//                       ))}
                     
//                       {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, index) => {
//                         const day = index + 1;
//                         const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
//                         const hasPlans = getStudyPlansForDate(date).length > 0;
                       
//                         return (
//                           <div
//                             key={day}
//                             className={`calendar-day ${isToday(date) ? 'today' : ''} ${isSelectedDate(date) ? 'selected' : ''} ${hasPlans ? 'has-plans' : ''}`}
//                             onClick={() => setSelectedDate(date)}
//                             style={{
//                               backgroundColor: isToday(date) ? '#3b82f6' : isSelectedDate(date) ? '#10b981' : 'transparent',
//                               color: isToday(date) || isSelectedDate(date) ? 'white' : '#1f2937',
//                               fontWeight: isToday(date) || isSelectedDate(date) ? '600' : '400'
//                             }}
//                           >
//                             {day}
//                           </div>
//                         );
//                       })}
//                     </div>

//                     {/* Selected Date Study Plans */}
//                     <div style={{ marginTop: '16px', borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
//                       <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
//                         {t('study_plans_for')} {selectedDate.toLocaleDateString(i18n.language)}
//                       </h4>
//                       {getStudyPlansForDate(selectedDate).length === 0 ? (
//                         <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center', margin: '12px 0' }}>
//                           {t('no_study_plans_scheduled')}
//                         </p>
//                       ) : (
//                         <div style={{ maxHeight: '120px', overflow: 'auto' }}>
//                           {getStudyPlansForDate(selectedDate).map((plan, index) => (
//                             <div key={index} style={{
//                               padding: '8px',
//                               backgroundColor: '#f8fafc',
//                               borderRadius: '6px',
//                               marginBottom: '6px',
//                               borderLeft: '3px solid #3b82f6'
//                             }}>
//                               <div style={{ fontSize: '12px', fontWeight: '500', color: '#1f2937' }}>
//                                 {plan.subject} - {plan.topic}
//                               </div>
//                               <div style={{ fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
//                                 <FaClock size={10} />
//                                 {plan.duration}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* MARK: ADDED - Notification Bell Icon */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => {
//                 loadNotifications();
//                 setNotificationsOpen(true);
//               }}
//               onMouseLeave={() => setNotificationsOpen(false)}
//             >
//               <button
//                 className="notification-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: 'auto',
//                   justifyContent: 'center',
//                   position: 'relative'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaBell size={14} />
//                 {unreadNotifications > 0 && (
//                   <span style={{
//                     position: 'absolute',
//                     top: '-5px',
//                     right: '-5px',
//                     backgroundColor: '#ef4444',
//                     color: 'white',
//                     borderRadius: '50%',
//                     width: '16px',
//                     height: '16px',
//                     fontSize: '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 'bold'
//                   }}>
//                     {unreadNotifications}
//                   </span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {notificationsOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '12px',
//                       boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
//                       width: '320px',
//                       maxHeight: '400px',
//                       zIndex: 1000,
//                       padding: '0',
//                       marginTop: '8px',
//                       overflow: 'hidden'
//                     }}
//                   >
//                     <div style={{
//                       padding: '16px',
//                       borderBottom: '1px solid #e5e7eb',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center'
//                     }}>
//                       <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
//                         {t('nav-notifications')}
//                       </h3>
//                       <div style={{ display: 'flex', gap: '8px' }}>
//                         {unreadNotifications > 0 && (
//                           <button
//                             onClick={markAllNotificationsAsRead}
//                             style={{
//                               background: 'none',
//                               border: 'none',
//                               color: '#3b82f6',
//                               fontSize: '12px',
//                               cursor: 'pointer',
//                               fontWeight: '500'
//                             }}
//                           >
//                             {t('mark_all_read')}
//                           </button>
//                         )}
//                         {notifications.length > 0 && (
//                           <button
//                             onClick={clearAllNotifications}
//                             style={{
//                               background: 'none',
//                               border: 'none',
//                               color: '#ef4444',
//                               fontSize: '12px',
//                               cursor: 'pointer',
//                               fontWeight: '500'
//                             }}
//                           >
//                             {t('clear_all')}
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                     <div style={{ maxHeight: '300px', overflow: 'auto' }}>
//                       {notifications.length === 0 ? (
//                         <div style={{ padding: '32px 16px', textAlign: 'center', color: '#6b7280' }}>
//                           <FaBell size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
//                           <p style={{ margin: 0, fontSize: '14px' }}>{t('no_notifications_yet')}</p>
//                           <p style={{ margin: '4px 0 0 0', fontSize: '12px' }}>{t('study_plans_will_appear_here')}</p>
//                         </div>
//                       ) : (
//                         notifications.map((notification) => (
//                           <div
//                             key={notification.id}
//                             style={{
//                               padding: '12px 16px',
//                               borderBottom: '1px solid #f3f4f6',
//                               backgroundColor: notification.read ? 'transparent' : '#f0f9ff',
//                               cursor: 'pointer',
//                               transition: 'background 0.2s'
//                             }}
//                             onClick={() => !notification.read && markNotificationAsRead(notification.id)}
//                             onMouseEnter={(e) => {
//                               e.target.style.backgroundColor = notification.read ? '#f9fafb' : '#e0f2fe';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.backgroundColor = notification.read ? 'transparent' : '#f0f9ff';
//                             }}
//                           >
//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
//                               <div style={{ fontSize: '13px', fontWeight: '600', color: '#1f2937' }}>
//                                 {notification.title}
//                               </div>
//                               {!notification.read && (
//                                 <div style={{
//                                   width: '8px',
//                                   height: '8px',
//                                   backgroundColor: '#3b82f6',
//                                   borderRadius: '50%',
//                                   flexShrink: 0,
//                                   marginLeft: '8px'
//                                 }} />
//                               )}
//                             </div>
//                             <div style={{ fontSize: '12px', color: '#4b5563', marginBottom: '4px' }}>
//                               {notification.message}
//                             </div>
//                             <div style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
//                               <FaClock size={10} />
//                               {new Date(notification.date).toLocaleDateString(i18n.language)} at {new Date(notification.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                             </div>
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Language Button */}
//           <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//             <div
//               className="nav-link-wrapper"
//               style={{ position: 'relative' }}
//               onMouseEnter={() => setLangDropdownOpen(true)}
//               onMouseLeave={() => setLangDropdownOpen(false)}
//             >
//               <button
//                 className="language-button"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   background: 'transparent',
//                   border: '1px solid #ddd',
//                   borderRadius: '6px',
//                   padding: '6px 12px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   color: '#333',
//                   transition: 'all 0.3s ease',
//                   minWidth: '90px',
//                   justifyContent: 'center'
//                 }}
//                 onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
//                 onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
//               >
//                 <FaGlobe size={12} />
//                 <span>{i18n.language.toUpperCase()}</span>
//                 <FaChevronDown size={8} />
//               </button>

//               <AnimatePresence>
//                 {langDropdownOpen && (
//                   <motion.div
//                     className="nav-dropdown"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     style={{
//                       position: 'absolute',
//                       top: '100%',
//                       right: 0,
//                       background: 'white',
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                       minWidth: '140px',
//                       zIndex: 1000,
//                       padding: '8px 0',
//                       marginTop: '5px'
//                     }}
//                   >
//                     <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
//                       {languages.map((lang) => (
//                         <li key={lang.code}>
//                           <button
//                             onClick={() => handleLanguageChange(lang.code)}
//                             className="dropdown-link"
//                             style={{
//                               width: '100%',
//                               border: 'none',
//                               background: 'transparent',
//                               padding: '8px 16px',
//                               textAlign: 'left',
//                               cursor: 'pointer',
//                               fontSize: '14px',
//                               color: '#333',
//                               transition: 'all 0.3s ease',
//                               display: 'flex',
//                               alignItems: 'center',
//                               borderRadius: '0'
//                             }}
//                             onMouseEnter={(e) => { e.target.style.background = '#2D5D7B'; e.target.style.color = 'white'; }}
//                             onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#333'; }}
//                           >
//                             {lang.label}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Enhanced Reward Points Display with Animation */}
//           <motion.div
//             className="reward-points-display"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               background: 'linear-gradient(135deg, #FFD700, #FFA500)',
//               padding: '8px 16px',
//               borderRadius: '20px',
//               fontSize: '14px',
//               fontWeight: '600',
//               color: '#744210',
//               border: '2px solid #FFC107',
//               cursor: 'default',
//               boxShadow: '0 2px 8px rgba(255, 193, 7, 0.3)',
//               minWidth: '80px',
//               justifyContent: 'center',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//             title={t('reward_points')}
//             whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(255, 193, 7, 0.5)' }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Animated background effect */}
//             <div style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
//               backgroundSize: '200% 100%',
//               animation: 'shimmer 2s infinite linear',
//               opacity: 0.5
//             }} />
           
//             <FaCoins size={16} color="#744210" style={{ position: 'relative', zIndex: 1 }} />
//             <span style={{
//               fontFamily: "'Poppins', sans-serif",
//               background: 'linear-gradient(45deg, #744210, #8B5A2B)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//               color: 'transparent',
//               position: 'relative',
//               zIndex: 1
//             }}>
//               {currentRewardPoints.toLocaleString()}
//             </span>
           
//             {/* Points Animation for Video/Mock Test Rewards */}
//             {showPointsAnimation && pointsChange > 0 && (
//               <motion.div
//                 className="points-animation"
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: -20 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 +{pointsChange}
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Avatar Dropdown */}
//           <div
//             className="navbar-avatar-container"
//             style={{
//               position: 'relative',
//               cursor: 'pointer',
//             }}
//             onMouseEnter={() => setAvatarOpen(true)}
//             onMouseLeave={() => setAvatarOpen(false)}
//           >
//             {/* Avatar with Name */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <div
//                 style={{
//                   width: '32px',
//                   height: '32px',
//                   borderRadius: '50%',
//                   overflow: 'hidden',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   background: '#f0f0f0',
//                   transition: 'transform 0.2s',
//                 }}
//               >
//                 {avatar ? (
//                   <img
//                     src={avatar}
//                     alt="User Avatar"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <FaUserCircle size={28} color="#4B5563" />
//                 )}
//               </div>
//               <span style={{ fontWeight: 500, color: '#111827', fontSize: '14px' }}>
//                 {name || 'User'}
//               </span>
//             </div>

//             {/* Dropdown */}
//             <AnimatePresence>
//               {avatarOpen && (
//                 <motion.div
//                   className="avatar-dropdown"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   style={{
//                     position: 'absolute',
//                     top: 'calc(100% + 8px)',
//                     right: 0,
//                     background: 'white',
//                     borderRadius: '8px',
//                     boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
//                     padding: '8px 0',
//                     minWidth: '160px',
//                     zIndex: 1000,
//                   }}
//                 >
//                   {/* Reward Points Summary in Dropdown */}
//                   <div style={{
//                     padding: '12px 16px',
//                     borderBottom: '1px solid #f0f0f0',
//                     background: 'linear-gradient(135deg, #fff9e6, #fff0cc)'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px',
//                       fontSize: '14px',
//                       color: '#744210',
//                       fontWeight: '600'
//                     }}>
//                       <FaCoins size={14} color="#FFA500" />
//                       <span>{t('reward_points')}: {currentRewardPoints.toLocaleString()}</span>
//                     </div>
//                     <div style={{
//                       fontSize: '12px',
//                       color: '#8B5A2B',
//                       marginTop: '4px'
//                     }}>
//                       {t('earn_more_points')}
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => navigate('/user-details')}
//                     className="profile-button"
//                     style={{
//                       width: '100%',
//                       border: 'none',
//                       background: 'transparent',
//                       padding: '10px 16px',
//                       cursor: 'pointer',
//                       textAlign: 'left',
//                       fontSize: '14px',
//                       color: '#1F2937',
//                       transition: 'background 0.2s, color 0.2s',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}
//                     onMouseEnter={(e) => { e.target.style.background = '#f0f0f0'; }}
//                     onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
//                   >
//                     <FaUserCircle size={14} />
//                     {t('view_profile')}
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="logout-button"
//                     style={{
//                       width: '100%',
//                       border: 'none',
//                       background: 'transparent',
//                       padding: '10px 16px',
//                       cursor: 'pointer',
//                       textAlign: 'left',
//                       fontSize: '14px',
//                       color: '#dc2626',
//                       transition: 'background 0.2s, color 0.2s',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}
//                     onMouseEnter={(e) => { e.target.style.background = '#fef2f2'; }}
//                     onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
//                   >
//                     <FaSignOutAlt size={14} />
//                     {t('logout')}
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* MARK: ADDED - Mobile Menu Content */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               className="mobile-menu-content"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 right: 0,
//                 background: 'white',
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                 zIndex: 999,
//                 overflow: 'hidden'
//               }}
//             >
//               <div style={{ padding: '20px' }}>
//                 <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
//                   {navLinks.map((link) => (
//                     <li key={link.path} style={{ marginBottom: '10px' }}>
//                       {link.hasDropdown ? (
//                         <div>
//                           <div style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             padding: '12px 0',
//                             borderBottom: '1px solid #f0f0f0',
//                             fontSize: '16px',
//                             fontWeight: '600',
//                             color: '#2D5D7B'
//                           }}>
//                             {link.name}
//                             <FaChevronDown size={12} />
//                           </div>
//                           <ul style={{ margin: 0, padding: '0 0 0 15px', listStyle: 'none' }}>
//                             {link.dropdownItems.map((dropdownItem) => (
//                               <li key={dropdownItem.path}>
//                                 <Link
//                                   to={dropdownItem.path}
//                                   style={{
//                                     display: 'block',
//                                     padding: '10px 0',
//                                     textDecoration: 'none',
//                                     color: activeLink === dropdownItem.path ? '#2D5D7B' : '#333',
//                                     fontWeight: activeLink === dropdownItem.path ? '600' : '400',
//                                     borderBottom: '1px solid #f5f5f5',
//                                     fontSize: '14px'
//                                   }}
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   {dropdownItem.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ) : (
//                         <Link
//                           to={link.path}
//                           style={{
//                             display: 'block',
//                             padding: '12px 0',
//                             textDecoration: 'none',
//                             color: activeLink === link.path ? '#2D5D7B' : '#333',
//                             fontWeight: activeLink === link.path ? '600' : '400',
//                             borderBottom: '1px solid #f0f0f0',
//                             fontSize: '16px'
//                           }}
//                           onClick={closeAllDropdowns}
//                         >
//                           {link.name}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Mobile Language Selector */}
//                 <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
//                   <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#2D5D7B' }}>
//                     {t('language')}
//                   </div>
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
//                     {languages.map((lang) => (
//                       <button
//                         key={lang.code}
//                         onClick={() => handleLanguageChange(lang.code)}
//                         style={{
//                           padding: '10px',
//                           border: '1px solid #ddd',
//                           borderRadius: '6px',
//                           background: i18n.language === lang.code ? '#2D5D7B' : 'transparent',
//                           color: i18n.language === lang.code ? 'white' : '#333',
//                           cursor: 'pointer',
//                           fontSize: '14px',
//                           transition: 'all 0.3s ease'
//                         }}
//                       >
//                         {lang.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserCircle,
  FaChevronDown,
  FaGlobe,
  FaSignOutAlt,
  FaSearch,
  FaCoins,
  FaCalendarAlt,
  FaBell,
  FaCheck,
  FaBook,
  FaClock,
  FaTimes,
  FaBars
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Navbarrr.css';
import novyaLogo from '../home/assets/NOVYA LOGO.png';

const Navbar = ({ isFullScreen, rewardPoints = 0 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  // MARK: ADDED - Flying coins animation state
  const [showFlyingCoins, setShowFlyingCoins] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [currentRewardPoints, setCurrentRewardPoints] = useState(rewardPoints);
  const [pointsChange, setPointsChange] = useState(0);
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);

  // MARK: ADDED - Study plan and notifications state
  const [studyPlans, setStudyPlans] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'ml', label: 'മലയാളം' },
  ];

  // MARK: UPDATED - Load study plans and notifications from localStorage with real-time updates
  useEffect(() => {
    loadStudyPlans();
    loadNotifications();
   
    // Listen for new study plans from lesson pages
    const handleStudyPlanAdded = (event) => {
      if (event.detail && event.detail.studyPlan) {
        // Force reload study plans to get latest data
        loadStudyPlans();
        // Also create notification for the new study plan
        createNotification(event.detail.studyPlan);
      }
    };

    // Listen for new notifications
    const handleNotificationAdded = (event) => {
      if (event.detail && event.detail.notification) {
        // Force reload notifications to get latest data
        loadNotifications();
      }
    };

    // MARK: ADDED - Listen for study plan updates
    const handleStudyPlanUpdated = () => {
      loadStudyPlans();
    };

    // MARK: ADDED - Listen for storage changes (for cross-tab updates)
    const handleStorageChange = (e) => {
      if (e.key === 'studyPlans') {
        loadStudyPlans();
      }
      if (e.key === 'studyNotifications') {
        loadNotifications();
      }
    };

    window.addEventListener('studyPlanAdded', handleStudyPlanAdded);
    window.addEventListener('notificationAdded', handleNotificationAdded);
    window.addEventListener('studyPlanUpdated', handleStudyPlanUpdated);
    window.addEventListener('storage', handleStorageChange);
   
    // MARK: ADDED - Set up interval to check for updates
    const interval = setInterval(() => {
      loadStudyPlans();
      loadNotifications();
    }, 2000); // Check every 2 seconds for updates
   
    return () => {
      window.removeEventListener('studyPlanAdded', handleStudyPlanAdded);
      window.removeEventListener('notificationAdded', handleNotificationAdded);
      window.removeEventListener('studyPlanUpdated', handleStudyPlanUpdated);
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // MARK: UPDATED - Study plan functions with improved real-time loading
  const loadStudyPlans = () => {
    try {
      const savedPlans = localStorage.getItem('studyPlans');
      if (savedPlans) {
        const plans = JSON.parse(savedPlans);
        // Remove duplicates based on ID
        const uniquePlans = plans.filter((plan, index, self) =>
          index === self.findIndex(p => p.id === plan.id)
        );
        setStudyPlans(uniquePlans);
      } else {
        setStudyPlans([]);
      }
    } catch (error) {
      console.error('Error loading study plans:', error);
      setStudyPlans([]);
    }
  };

  const loadNotifications = () => {
    try {
      const savedNotifications = localStorage.getItem('studyNotifications');
      if (savedNotifications) {
        const notifs = JSON.parse(savedNotifications);
        // Remove duplicates based on ID
        const uniqueNotifs = notifs.filter((notif, index, self) =>
          index === self.findIndex(n => n.id === notif.id)
        );
        setNotifications(uniqueNotifs);
        const unread = uniqueNotifs.filter(notif => !notif.read).length;
        setUnreadNotifications(unread);
      } else {
        setNotifications([]);
        setUnreadNotifications(0);
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
      setNotifications([]);
      setUnreadNotifications(0);
    }
  };

  const addStudyPlan = (studyPlan) => {
    const existingPlans = JSON.parse(localStorage.getItem('studyPlans') || '[]');
   
    // Check for duplicates before adding
    const isDuplicate = existingPlans.some(plan => plan.id === studyPlan.id);
    if (isDuplicate) {
      console.log('Study plan already exists, skipping duplicate');
      return;
    }

    const updatedPlans = [...existingPlans, studyPlan];
    localStorage.setItem('studyPlans', JSON.stringify(updatedPlans));
    setStudyPlans(updatedPlans);
   
    // MARK: ADDED - Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('studyPlanUpdated'));
  };

  const addNotification = (notification) => {
    const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
   
    // Check for duplicates before adding
    const isDuplicate = existingNotifications.some(notif => notif.id === notification.id);
    if (isDuplicate) {
      console.log('Notification already exists, skipping duplicate');
      return;
    }

    const updatedNotifications = [notification, ...existingNotifications];
    localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
    setNotifications(updatedNotifications);
    setUnreadNotifications(prev => prev + 1);
   
    // MARK: ADDED - Dispatch storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'studyNotifications',
      newValue: JSON.stringify(updatedNotifications)
    }));
  };

  const createNotification = (studyPlan) => {
    const notificationId = `notif_${studyPlan.id}`;
   
    // Check if notification already exists
    const existingNotifications = JSON.parse(localStorage.getItem('studyNotifications') || '[]');
    const isDuplicateNotification = existingNotifications.some(notif => notif.id === notificationId);
   
    if (isDuplicateNotification) {
      console.log('Notification already exists, skipping duplicate');
      return;
    }

    const notification = {
      id: notificationId,
      type: 'study_plan_created',
      title: t('new_study_plan_created'),
      message: t('study_plan_added_to_calendar', { title: studyPlan.title }),
      date: new Date().toISOString(),
      read: false,
      planId: studyPlan.id
    };
    addNotification(notification);
  };

  const markNotificationAsRead = (notificationId) => {
    try {
      const updatedNotifications = notifications.map(notif =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      );
      localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
      setNotifications(updatedNotifications);
      const unread = updatedNotifications.filter(notif => !notif.read).length;
      setUnreadNotifications(unread);
     
      // MARK: ADDED - Dispatch storage event for cross-tab sync
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'studyNotifications',
        newValue: JSON.stringify(updatedNotifications)
      }));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllNotificationsAsRead = () => {
    try {
      const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }));
      localStorage.setItem('studyNotifications', JSON.stringify(updatedNotifications));
      setNotifications(updatedNotifications);
      setUnreadNotifications(0);
     
      // MARK: ADDED - Dispatch storage event for cross-tab sync
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'studyNotifications',
        newValue: JSON.stringify(updatedNotifications)
      }));
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const clearAllNotifications = () => {
    try {
      localStorage.removeItem('studyNotifications');
      setNotifications([]);
      setUnreadNotifications(0);
     
      // MARK: ADDED - Dispatch storage event for cross-tab sync
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'studyNotifications',
        newValue: null
      }));
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  // MARK: ADDED - Get today's study plans
  const getTodaysStudyPlans = () => {
    const today = new Date().toISOString().split('T')[0];
    const todaysPlans = [];
   
    studyPlans.forEach(plan => {
      plan.studySessions?.forEach(session => {
        if (session.date === today && !session.completed) {
          todaysPlans.push({
            ...session,
            planTitle: plan.title,
            subject: plan.subject
          });
        }
      });
    });
   
    return todaysPlans;
  };

  // MARK: ADDED - Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getStudyPlansForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const plansForDate = [];
   
    studyPlans.forEach(plan => {
      plan.studySessions?.forEach(session => {
        if (session.date === dateString) {
          plansForDate.push({
            ...session,
            planTitle: plan.title,
            subject: plan.subject
          });
        }
      });
    });
   
    return plansForDate;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSelectedDate = (date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // MARK: UPDATED - Flying coins animation trigger function with points
  const triggerFlyingCoins = (pointsToAdd = 0) => {
    setShowFlyingCoins(true);
    if (pointsToAdd > 0) {
      const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
      const newPoints = currentPoints + pointsToAdd;
      localStorage.setItem('rewardPoints', newPoints.toString());
      setCurrentRewardPoints(newPoints);
     
      // Dispatch event to update other components
      window.dispatchEvent(new CustomEvent('rewardPointsUpdated', {
        detail: { rewardPoints: newPoints }
      }));
    }
    setTimeout(() => {
      setShowFlyingCoins(false);
    }, 2000);
  };

  // MARK: UPDATED - Welcome coins animation for login with points
  const triggerWelcomeCoins = () => {
    // Check if welcome points were already awarded
    const welcomeAwarded = sessionStorage.getItem('welcomePointsAwarded');
    if (!welcomeAwarded) {
      setShowFlyingCoins(true);
      const currentPoints = parseInt(localStorage.getItem('rewardPoints') || '0');
      const newPoints = currentPoints + 50; // 50 welcome points
      localStorage.setItem('rewardPoints', newPoints.toString());
      setCurrentRewardPoints(newPoints);
      sessionStorage.setItem('welcomePointsAwarded', 'true');
     
      // Dispatch event to update other components
      window.dispatchEvent(new CustomEvent('rewardPointsUpdated', {
        detail: { rewardPoints: newPoints }
      }));
     
      setTimeout(() => {
        setShowFlyingCoins(false);
      }, 3000);
    }
  };

  // MARK: UPDATED - Sync reward points from localStorage and props
  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    let storedData = null;

    if (userRole === 'student') {
      storedData = localStorage.getItem('studentData');
    } else if (userRole === 'parent') {
      storedData = localStorage.getItem('parentData');
    }

    if (storedData) {
      const parsed = JSON.parse(storedData);
      setAvatar(parsed.avatar || null);
      setName(`${parsed.firstName || ''} ${parsed.lastName || ''}`);
    }

    // Load reward points from localStorage
    const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
    setCurrentRewardPoints(points);

    // MARK: UPDATED - Check for login animation with proper timing
    const justLoggedIn = sessionStorage.getItem('justLoggedIn');
    if (justLoggedIn) {
      setTimeout(() => {
        triggerWelcomeCoins();
        sessionStorage.removeItem('justLoggedIn');
      }, 1000);
    }
  }, [rewardPoints]);

  // MARK: UPDATED - Improved reward points update listener
  useEffect(() => {
    const handleRewardPointsUpdate = (event) => {
      if (event.detail && event.detail.rewardPoints !== undefined) {
        const newPoints = event.detail.rewardPoints;
        const oldPoints = currentRewardPoints;
        const pointsDiff = newPoints - oldPoints;
       
        if (pointsDiff > 0) {
          setPointsChange(pointsDiff);
          setShowPointsAnimation(true);
          triggerFlyingCoins();
          setTimeout(() => setShowPointsAnimation(false), 2000);
        }
       
        setCurrentRewardPoints(newPoints);
      }
    };

    const handleStorageChange = (e) => {
      if (e.key === 'rewardPoints') {
        const points = parseInt(e.newValue) || 0;
        const oldPoints = currentRewardPoints;
        const pointsDiff = points - oldPoints;
       
        if (pointsDiff > 0) {
          setPointsChange(pointsDiff);
          setShowPointsAnimation(true);
          triggerFlyingCoins();
          setTimeout(() => setShowPointsAnimation(false), 2000);
        }
       
        setCurrentRewardPoints(points);
      }
    };

    // Listen for custom events (same tab - video, mock tests)
    window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
   
    // Listen for storage events (other tabs)
    window.addEventListener('storage', handleStorageChange);
   
    // Also check for changes periodically
    const interval = setInterval(() => {
      const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
      if (points !== currentRewardPoints) {
        const pointsDiff = points - currentRewardPoints;
        if (pointsDiff > 0) {
          setPointsChange(pointsDiff);
          setShowPointsAnimation(true);
          triggerFlyingCoins();
          setTimeout(() => setShowPointsAnimation(false), 2000);
        }
        setCurrentRewardPoints(points);
      }
    }, 1000);

    return () => {
      window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [currentRewardPoints]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
    setAvatarOpen(false);
    setClassDropdownOpen(false);
    setPracticeDropdownOpen(false);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);

    // Hide navbar in fullscreen mode during tests
    if (isFullScreen) {
      setShowNavbar(false);
      return;
    }

    const hideNavbarRoutes = ['/mock-test', '/quick-practice'];
    const shouldHideNavbar = hideNavbarRoutes.some(route =>
      location.pathname.includes(route)
    );

    setShowNavbar(!shouldHideNavbar);
  }, [location.pathname, isFullScreen]);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Clear all localStorage except rewardPoints to persist points after logout
    const rewardPointsValue = localStorage.getItem('rewardPoints');
    localStorage.clear();
    if (rewardPointsValue) {
      localStorage.setItem('rewardPoints', rewardPointsValue);
    }
    navigate('/');
  };

  const navLinks = [
    { path: '/student/dashboard', name: t('home') },
    {
      path: '/learn',
      name: t('class_room'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/learn', name: t('class_7') },
        { path: '/learn/class8', name: t('class_8') },
        { path: '/learn/class9', name: t('class_9') },
        { path: '/learn/class10', name: t('class_10') },
      ],
    },
    {
      path: '/practice',
      name: t('practice'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/quick-practice', name: t('quick_practice') },
        { path: '/mock-test', name: t('mock_test') },
      ],
    },
    { path: '/career', name: t('career') },
    { path: '/study-room', name: t('studyRoom') },
  ];

  // MARK: ADDED - Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // MARK: ADDED - Close all dropdowns
  const closeAllDropdowns = () => {
    setAvatarOpen(false);
    setClassDropdownOpen(false);
    setPracticeDropdownOpen(false);
    setLangDropdownOpen(false);
    setCalendarOpen(false);
    setNotificationsOpen(false);
    setMobileMenuOpen(false);
  };

  if (!showNavbar) return null;

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '10px 0'
      }}
    >
      {/* MARK: ADDED - Flying Coins Animation Container */}
      {showFlyingCoins && (
        <div className="flying-coins-container" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998
        }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="flying-coin"
              initial={{
                scale: 0,
                opacity: 1,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50
              }}
              animate={{
                scale: [0, 1, 0.8, 0],
                opacity: [1, 1, 1, 0],
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth
                ],
                y: [
                  window.innerHeight + 50,
                  window.innerHeight * 0.3,
                  -50
                ]
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: i * 0.15
              }}
              style={{
                position: 'absolute',
                fontSize: '20px',
                color: '#FFD700',
                zIndex: 9998,
                filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))'
              }}
            >
              <FaCoins />
            </motion.div>
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
         
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
         
          @keyframes pointsPop {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0; }
          }
         
          .reward-points-display:hover {
            animation: pulse 1s infinite;
          }
         
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
         
          .points-animation {
            animation: pointsPop 2s ease-out forwards;
            position: absolute;
            right: 0;
            top: -20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
            z-index: 1001;
          }

          /* MARK: ADDED - Flying coins animation styles */
          .flying-coins-container {
            pointer-events: none;
          }
         
          .flying-coin {
            pointer-events: none;
          }

          /* MARK: ADDED - Calendar and notification styles */
          .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
            margin-top: 12px;
          }
         
          .calendar-day {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
          }
         
          .calendar-day:hover {
            background-color: #f3f4f6;
          }
         
          .calendar-day.today {
            background-color: #3b82f6;
            color: white;
          }
         
          .calendar-day.selected {
            background-color: #10b981;
            color: white;
          }
         
          .calendar-day.has-plans {
            position: relative;
          }
         
          .calendar-day.has-plans::after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background-color: #ef4444;
            border-radius: 50%;
          }
         
          .study-plan-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #ef4444;
            margin-left: 2px;
          }

          /* MARK: UPDATED - Mobile responsive styles */
          @media (max-width: 768px) {
            .navbar-desktop-links {
              display: none !important;
            }
           
            .navbar-mobile-menu {
              display: block !important;
            }
           
            .navbar-end {
              gap: 8px !important;
            }
           
            .reward-points-display {
              padding: 6px 12px !important;
              font-size: 12px !important;
              min-width: 60px !important;
            }
           
            .language-button {
              display: none !important;
            }
           
            .navbar-avatar-container span {
              display: none;
            }
           
            .nav-dropdown {
              width: 280px !important;
              right: 0 !important;
              left: auto !important;
            }
           
            .mobile-menu-dropdown {
              width: 100% !important;
              left: 0 !important;
              right: 0 !important;
            }
            
            /* MARK: UPDATED - Mobile layout with hamburger before logo */
            .navbar-container {
              justify-content: flex-start !important;
            }
            
            .navbar-brand {
              margin-left: 10px;
              order: 2;
            }
            
            .navbar-mobile-menu {
              order: 1;
              margin-right: 10px;
            }
            
            .navbar-end {
              order: 3;
              margin-left: auto;
            }
          }

          @media (min-width: 769px) {
            .navbar-mobile-menu {
              display: none !important;
            }
           
            .mobile-menu-content {
              display: none !important;
            }
          }

          @media (max-width: 480px) {
            .navbar-brand span {
              font-size: 1.2rem !important;
            }
           
            .navbar-brand img {
              height: 25px !important;
            }
           
            .nav-dropdown {
              width: 250px !important;
            }
           
            .calendar-grid {
              gap: 2px;
            }
           
            .calendar-day {
              width: 28px;
              height: 28px;
              font-size: 10px;
            }
          }
        `}
      </style>
     
      <div className="navbar-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative'
      }}>
        {/* MARK: UPDATED - Mobile Menu Button - Now before logo */}
        <div className="navbar-mobile-menu" style={{ display: 'none' }}>
          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FaBars size={20} color="#2D5D7B" />
          </button>
        </div>

        {/* Logo - Left Side */}
        <div className="navbar-brand">
          <Link
            to="/student/dashboard"
            className="navbar-logo-link"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            onClick={closeAllDropdowns}
          >
            <img src={novyaLogo} alt="NOVYA Logo" style={{ height: '35px' }} />
            <motion.span
              style={{
                background: 'linear-gradient(90deg, #2D5D7B 0%, #4a8db7 25%, #FF6B6B 50%, #FFD166 75%, #2D5D7B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: '800',
                fontSize: '1.6rem',
                marginLeft: '10px',
                letterSpacing: '1px',
                fontFamily: "'Poppins', sans-serif",
                backgroundSize: '200% auto',
                animation: 'gradientText 3s ease infinite',
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ backgroundPosition: 'right center', transition: { duration: 1.5 } }}
            >
              NOVYA
            </motion.span>
          </Link>
        </div>

        {/* Desktop Links - Center */}
        <div className="navbar-desktop-links" style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            gap: '20px'
          }}>
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`nav-item ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'active' : ''} ${link.hasDropdown ? 'has-dropdown' : ''}`}
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                onMouseEnter={() => {
                  if (link.path === '/learn') setClassDropdownOpen(true);
                  if (link.path === '/practice') setPracticeDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.path === '/learn') setClassDropdownOpen(false);
                  if (link.path === '/practice') setPracticeDropdownOpen(false);
                }}
              >
                {link.hasDropdown ? (
                  <div className="nav-link-wrapper" style={{ position: 'relative' }}>
                    <Link
                      to={link.path}
                      className={`nav-link ${activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path)) ? 'nav-link-active' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        textDecoration: 'none',
                        color: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '#2D5D7B' : 'inherit',
                        fontWeight: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '600' : '400',
                        borderBottom: (activeLink === link.path || (link.hasDropdown && activeLink.startsWith(link.path))) ? '2px solid #2D5D7B' : 'none',
                        padding: '8px 4px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {link.name}
                      <FaChevronDown size={10} />
                    </Link>
                    <AnimatePresence>
                      {(link.path === '/learn' ? classDropdownOpen : practiceDropdownOpen) && (
                        <motion.div
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            background: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            minWidth: '160px',
                            zIndex: 1000,
                            padding: '10px 0'
                          }}
                        >
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                            {link.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.path}>
                                <Link
                                  to={dropdownItem.path}
                                  className={`dropdown-link ${activeLink === dropdownItem.path ? 'dropdown-link-active' : ''}`}
                                  style={{
                                    display: 'block',
                                    padding: '8px 16px',
                                    textDecoration: 'none',
                                    color: activeLink === dropdownItem.path ? '#2D5D7B' : '#333',
                                    fontWeight: activeLink === dropdownItem.path ? '600' : '400',
                                    background: activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent',
                                    transition: 'background 0.3s, color 0.3s',
                                    fontSize: '14px'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (activeLink !== dropdownItem.path) {
                                      e.target.style.background = '#f5f5f5';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (activeLink !== dropdownItem.path) {
                                      e.target.style.background = activeLink === dropdownItem.path ? '#f0f7ff' : 'transparent';
                                    }
                                  }}
                                  onClick={closeAllDropdowns}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${activeLink === link.path ? 'nav-link-active' : ''}`}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: activeLink === link.path ? '#2D5D7B' : 'inherit',
                      fontWeight: activeLink === link.path ? '600' : '400',
                      borderBottom: activeLink === link.path ? '2px solid #2D5D7B' : 'none',
                      padding: '8px 4px',
                      transition: 'all 0.3s ease',
                      fontSize: '14px'
                    }}
                    onClick={closeAllDropdowns}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Calendar, Notifications, Language, Reward Points & Profile */}
        <div className="navbar-end" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          position: 'relative'
        }}>

          {/* MARK: ADDED - Calendar Icon */}
          <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div
              className="nav-link-wrapper"
              style={{ position: 'relative' }}
              onMouseEnter={() => {
                loadStudyPlans();
                setCalendarOpen(true);
              }}
              onMouseLeave={() => setCalendarOpen(false)}
            >
              <button
                className="calendar-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  minWidth: 'auto',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
              >
                <FaCalendarAlt size={14} />
                {getTodaysStudyPlans().length > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%'
                  }}></span>
                )}
              </button>

              <AnimatePresence>
                {calendarOpen && (
                  <motion.div
                    className="nav-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      width: '320px',
                      zIndex: 1000,
                      padding: '16px',
                      marginTop: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                        {t('study_calendar')}
                      </h3>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <button
                          onClick={() => navigateMonth(-1)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}
                        >
                          ‹
                        </button>
                        <span style={{ fontSize: '14px', fontWeight: '500', minWidth: '120px', textAlign: 'center' }}>
                          {currentMonth.toLocaleDateString(i18n.language, { month: 'long', year: 'numeric' })}
                        </span>
                        <button
                          onClick={() => navigateMonth(1)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}
                        >
                          ›
                        </button>
                      </div>
                    </div>

                    {/* Calendar Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
                      {[t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')].map(day => (
                        <div key={day} style={{ textAlign: 'center', fontSize: '11px', color: '#6b7280', fontWeight: '500' }}>
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="calendar-grid">
                      {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, index) => (
                        <div key={`empty-${index}`} style={{ width: '32px', height: '32px' }} />
                      ))}
                     
                      {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, index) => {
                        const day = index + 1;
                        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                        const hasPlans = getStudyPlansForDate(date).length > 0;
                       
                        return (
                          <div
                            key={day}
                            className={`calendar-day ${isToday(date) ? 'today' : ''} ${isSelectedDate(date) ? 'selected' : ''} ${hasPlans ? 'has-plans' : ''}`}
                            onClick={() => setSelectedDate(date)}
                            style={{
                              backgroundColor: isToday(date) ? '#3b82f6' : isSelectedDate(date) ? '#10b981' : 'transparent',
                              color: isToday(date) || isSelectedDate(date) ? 'white' : '#1f2937',
                              fontWeight: isToday(date) || isSelectedDate(date) ? '600' : '400'
                            }}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>

                    {/* Selected Date Study Plans */}
                    <div style={{ marginTop: '16px', borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
                        {t('study_plans_for')} {selectedDate.toLocaleDateString(i18n.language)}
                      </h4>
                      {getStudyPlansForDate(selectedDate).length === 0 ? (
                        <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center', margin: '12px 0' }}>
                          {t('no_study_plans_scheduled')}
                        </p>
                      ) : (
                        <div style={{ maxHeight: '120px', overflow: 'auto' }}>
                          {getStudyPlansForDate(selectedDate).map((plan, index) => (
                            <div key={index} style={{
                              padding: '8px',
                              backgroundColor: '#f8fafc',
                              borderRadius: '6px',
                              marginBottom: '6px',
                              borderLeft: '3px solid #3b82f6'
                            }}>
                              <div style={{ fontSize: '12px', fontWeight: '500', color: '#1f2937' }}>
                                {plan.subject} - {plan.topic}
                              </div>
                              <div style={{ fontSize: '11px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <FaClock size={10} />
                                {plan.duration}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MARK: ADDED - Notification Bell Icon */}
          <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div
              className="nav-link-wrapper"
              style={{ position: 'relative' }}
              onMouseEnter={() => {
                loadNotifications();
                setNotificationsOpen(true);
              }}
              onMouseLeave={() => setNotificationsOpen(false)}
            >
              <button
                className="notification-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  minWidth: 'auto',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
              >
                <FaBell size={14} />
                {unreadNotifications > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {unreadNotifications}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    className="nav-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      width: '320px',
                      maxHeight: '400px',
                      zIndex: 1000,
                      padding: '0',
                      marginTop: '8px',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      padding: '16px',
                      borderBottom: '1px solid #e5e7eb',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                        {t('nav-notifications')}
                      </h3>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {unreadNotifications > 0 && (
                          <button
                            onClick={markAllNotificationsAsRead}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#3b82f6',
                              fontSize: '12px',
                              cursor: 'pointer',
                              fontWeight: '500'
                            }}
                          >
                            {t('mark_all_read')}
                          </button>
                        )}
                        {notifications.length > 0 && (
                          <button
                            onClick={clearAllNotifications}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ef4444',
                              fontSize: '12px',
                              cursor: 'pointer',
                              fontWeight: '500'
                            }}
                          >
                            {t('clear_all')}
                          </button>
                        )}
                      </div>
                    </div>

                    <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                      {notifications.length === 0 ? (
                        <div style={{ padding: '32px 16px', textAlign: 'center', color: '#6b7280' }}>
                          <FaBell size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
                          <p style={{ margin: 0, fontSize: '14px' }}>{t('no_notifications_yet')}</p>
                          <p style={{ margin: '4px 0 0 0', fontSize: '12px' }}>{t('study_plans_will_appear_here')}</p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            style={{
                              padding: '12px 16px',
                              borderBottom: '1px solid #f3f4f6',
                              backgroundColor: notification.read ? 'transparent' : '#f0f9ff',
                              cursor: 'pointer',
                              transition: 'background 0.2s'
                            }}
                            onClick={() => !notification.read && markNotificationAsRead(notification.id)}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = notification.read ? '#f9fafb' : '#e0f2fe';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = notification.read ? 'transparent' : '#f0f9ff';
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                              <div style={{ fontSize: '13px', fontWeight: '600', color: '#1f2937' }}>
                                {notification.title}
                              </div>
                              {!notification.read && (
                                <div style={{
                                  width: '8px',
                                  height: '8px',
                                  backgroundColor: '#3b82f6',
                                  borderRadius: '50%',
                                  flexShrink: 0,
                                  marginLeft: '8px'
                                }} />
                              )}
                            </div>
                            <div style={{ fontSize: '12px', color: '#4b5563', marginBottom: '4px' }}>
                              {notification.message}
                            </div>
                            <div style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <FaClock size={10} />
                              {new Date(notification.date).toLocaleDateString(i18n.language)} at {new Date(notification.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Language Button - Hidden in Mobile View */}
          <div className="nav-item language-selector-desktop" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div
              className="nav-link-wrapper"
              style={{ position: 'relative' }}
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                className="language-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  minWidth: '90px',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; e.target.style.borderColor = '#2D5D7B'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = '#ddd'; }}
              >
                <FaGlobe size={12} />
                <span>{i18n.language.toUpperCase()}</span>
                <FaChevronDown size={8} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    className="nav-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      background: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      minWidth: '140px',
                      zIndex: 1000,
                      padding: '8px 0',
                      marginTop: '5px'
                    }}
                  >
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            onClick={() => handleLanguageChange(lang.code)}
                            className="dropdown-link"
                            style={{
                              width: '100%',
                              border: 'none',
                              background: 'transparent',
                              padding: '8px 16px',
                              textAlign: 'left',
                              cursor: 'pointer',
                              fontSize: '14px',
                              color: '#333',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              alignItems: 'center',
                              borderRadius: '0'
                            }}
                            onMouseEnter={(e) => { e.target.style.background = '#2D5D7B'; e.target.style.color = 'white'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#333'; }}
                          >
                            {lang.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Enhanced Reward Points Display with Animation */}
          <motion.div
            className="reward-points-display"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#744210',
              border: '2px solid #FFC107',
              cursor: 'default',
              boxShadow: '0 2px 8px rgba(255, 193, 7, 0.3)',
              minWidth: '80px',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            title={t('reward_points')}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(255, 193, 7, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite linear',
              opacity: 0.5
            }} />
           
            <FaCoins size={16} color="#744210" style={{ position: 'relative', zIndex: 1 }} />
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              background: 'linear-gradient(45deg, #744210, #8B5A2B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              position: 'relative',
              zIndex: 1
            }}>
              {currentRewardPoints.toLocaleString()}
            </span>
           
            {/* Points Animation for Video/Mock Test Rewards */}
            {showPointsAnimation && pointsChange > 0 && (
              <motion.div
                className="points-animation"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                +{pointsChange}
              </motion.div>
            )}
          </motion.div>

          {/* Avatar Dropdown */}
          <div
            className="navbar-avatar-container"
            style={{
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setAvatarOpen(true)}
            onMouseLeave={() => setAvatarOpen(false)}
          >
            {/* Avatar with Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f0f0',
                  transition: 'transform 0.2s',
                }}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <FaUserCircle size={28} color="#4B5563" />
                )}
              </div>
              <span style={{ fontWeight: 500, color: '#111827', fontSize: '14px' }}>
                {name || 'User'}
              </span>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {avatarOpen && (
                <motion.div
                  className="avatar-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    padding: '8px 0',
                    minWidth: '160px',
                    zIndex: 1000,
                  }}
                >
                  {/* Reward Points Summary in Dropdown */}
                  <div style={{
                    padding: '12px 16px',
                    borderBottom: '1px solid #f0f0f0',
                    background: 'linear-gradient(135deg, #fff9e6, #fff0cc)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#744210',
                      fontWeight: '600'
                    }}>
                      <FaCoins size={14} color="#FFA500" />
                      <span>{t('reward_points')}: {currentRewardPoints.toLocaleString()}</span>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#8B5A2B',
                      marginTop: '4px'
                    }}>
                      {t('earn_more_points')}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/user-details')}
                    className="profile-button"
                    style={{
                      width: '100%',
                      border: 'none',
                      background: 'transparent',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#1F2937',
                      transition: 'background 0.2s, color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => { e.target.style.background = '#f0f0f0'; }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
                  >
                    <FaUserCircle size={14} />
                    {t('view_profile')}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="logout-button"
                    style={{
                      width: '100%',
                      border: 'none',
                      background: 'transparent',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#dc2626',
                      transition: 'background 0.2s, color 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => { e.target.style.background = '#fef2f2'; }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
                  >
                    <FaSignOutAlt size={14} />
                    {t('logout')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MARK: ADDED - Mobile Menu Content */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                zIndex: 999,
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '20px' }}>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {navLinks.map((link) => (
                    <li key={link.path} style={{ marginBottom: '10px' }}>
                      {link.hasDropdown ? (
                        <div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            borderBottom: '1px solid #f0f0f0',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2D5D7B'
                          }}>
                            {link.name}
                            <FaChevronDown size={12} />
                          </div>
                          <ul style={{ margin: 0, padding: '0 0 0 15px', listStyle: 'none' }}>
                            {link.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.path}>
                                <Link
                                  to={dropdownItem.path}
                                  style={{
                                    display: 'block',
                                    padding: '10px 0',
                                    textDecoration: 'none',
                                    color: activeLink === dropdownItem.path ? '#2D5D7B' : '#333',
                                    fontWeight: activeLink === dropdownItem.path ? '600' : '400',
                                    borderBottom: '1px solid #f5f5f5',
                                    fontSize: '14px'
                                  }}
                                  onClick={closeAllDropdowns}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            textDecoration: 'none',
                            color: activeLink === link.path ? '#2D5D7B' : '#333',
                            fontWeight: activeLink === link.path ? '600' : '400',
                            borderBottom: '1px solid #f0f0f0',
                            fontSize: '16px'
                          }}
                          onClick={closeAllDropdowns}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* MARK: UPDATED - Mobile Language Selector Removed */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;