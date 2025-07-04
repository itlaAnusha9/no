import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import './module/student/Navbarrr.css';
// import '../../module/student/Navbarrr.css';
import './Navbarrr.css';


 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  useEffect(() => {
    setActiveLink(location.pathname);
    setIsOpen(false);
  }, [location.pathname]);
 
  const navLinks = [
    { path: '/student/dashboard', name: 'Home' },
    { path: '/learn', name: 'Learn' },
    { path: '/classroom', name: 'Classroom' },
    { path: '/practice', name: 'Practice' },
    { path: '/career', name: 'Career' },
    { path: '/mentorship', name: 'Mentorship' },
  ];
 
  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-part-1">Edu</span>
          <span className="brand-part-2">Sphere</span>
        </div>
 
        <div className="navbar-desktop-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path} className={`nav-item ${activeLink === link.path ? 'active' : ''}`}>
                <Link to={link.path} className="nav-link">
                  {link.name}
                  <span className="nav-link-underline" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
 
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="toggler-line"></span>
          <span className="toggler-line"></span>
          <span className="toggler-line"></span>
        </button>
      </div>
 
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.path} className={`nav-item ${activeLink === link.path ? 'active' : ''}`}>
                  <Link to={link.path} className="nav-link" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
 
export default Navbar;
 
 