




// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaUserCircle, FaChevronDown, FaGlobe, FaSignOutAlt, FaSearch } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import './Navbarrr.css';
// import novyaLogo from '../home/assets/NOVYA LOGO.png';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [avatarOpen, setAvatarOpen] = useState(false);
//   const [classDropdownOpen, setClassDropdownOpen] = useState(false);
//   const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);

//   const [avatar, setAvatar] = useState(null);
//   const [name, setName] = useState('');
//   const [rewardPoints, setRewardPoints] = useState(0);

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

//   // Fetch avatar, name, and reward points from localStorage
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

//     const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
//     setRewardPoints(points);
//   }, []);

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

//     const hideNavbarRoutes = ['/mock-test', '/quick-practice'];
//     const shouldHideNavbar = hideNavbarRoutes.some(route =>
//       location.pathname.includes(route)
//     );

//     setShowNavbar(!shouldHideNavbar);
//   }, [location.pathname]);

//   const handleLanguageChange = (code) => {
//     i18n.changeLanguage(code);
//     setLangDropdownOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
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

//         {/* Right Side - Language, Reward Points & Profile */}
//         <div className="navbar-end" style={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           gap: '20px'
//         }}>
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

//           {/* Reward Points */}
//           <div
//             className="reward-points"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               background: '#FFFBEC',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: 500,
//               color: '#92400E',
//               border: '1px solid #FCD34D',
//               cursor: 'default'
//             }}
//             title="Your Reward Points"
//           >
//             <span>⭐</span>
//             <span>{rewardPoints}</span>
//           </div>

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


import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaChevronDown, FaGlobe, FaSignOutAlt, FaSearch, FaCoins } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Navbarrr.css';
import novyaLogo from '../home/assets/NOVYA LOGO.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);

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

  // Fetch avatar, name, and reward points from localStorage
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
    setRewardPoints(points);
  }, []);

  // Listen for reward points updates from other components
  useEffect(() => {
    const handleStorageChange = () => {
      const points = parseInt(localStorage.getItem('rewardPoints')) || 0;
      setRewardPoints(points);
    };

    // Listen for storage events (when other tabs/components update points)
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes periodically (for same-tab updates)
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Custom event listener for reward points updates within the same tab
  useEffect(() => {
    const handleRewardPointsUpdate = (event) => {
      if (event.detail && event.detail.rewardPoints !== undefined) {
        setRewardPoints(event.detail.rewardPoints);
      }
    };

    window.addEventListener('rewardPointsUpdated', handleRewardPointsUpdate);

    return () => {
      window.removeEventListener('rewardPointsUpdated', handleRewardPointsUpdate);
    };
  }, []);

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

    const hideNavbarRoutes = ['/mock-test', '/quick-practice'];
    const shouldHideNavbar = hideNavbarRoutes.some(route =>
      location.pathname.includes(route)
    );

    setShowNavbar(!shouldHideNavbar);
  }, [location.pathname]);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const navLinks = [
    { path: '/student/dashboard', name: t('home', 'Home') },
    {
      path: '/learn',
      name: t('class_room', 'Class Room'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/learn', name: t('class_7', 'Class 7') },
        { path: '/learn/class8', name: t('class_8', 'Class 8') },
        { path: '/learn/class9', name: t('class_9', 'Class 9') },
        { path: '/learn/class10', name: t('class_10', 'Class 10') },
      ],
    },
    {
      path: '/practice',
      name: t('practice', 'Practice'),
      hasDropdown: true,
      dropdownItems: [
        { path: '/quick-practice', name: t('quick_practice', 'Quick Practice') },
        { path: '/mock-test', name: t('mock_test', 'Mock Test') },
      ],
    },
    { path: '/career', name: t('career', 'Career') },
    { path: '/study-room', name: t('studyRoom', 'Study Room') },
  ];

  if (!showNavbar) return null;

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Logo - Left Side */}
        <div className="navbar-brand">
          <Link 
            to="/student/dashboard" 
            className="navbar-logo-link"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
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
        <div className="navbar-desktop-links">
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
                        padding: '8px 4px'
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
                                    transition: 'background 0.3s, color 0.3s'
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
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Language, Reward Points & Profile */}
        <div className="navbar-end" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px'
        }}>
          {/* Language Button */}
          <div className="nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
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

          {/* Enhanced Reward Points Display */}
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
              justifyContent: 'center'
            }}
            title="Your Reward Points"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCoins size={16} color="#744210" />
            <span style={{ 
              fontFamily: "'Poppins', sans-serif",
              background: 'linear-gradient(45deg, #744210, #8B5A2B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              {rewardPoints}
            </span>
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
                    View Profile
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
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;