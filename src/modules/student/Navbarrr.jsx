import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import './Navbarrr.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    setAvatarOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    navigate('/');
  };

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
          <Link to="/student/dashboard" className="navbar-logo-link" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="brand-part-1">Edu</span>
            <span className="brand-part-2">Sphere</span>
          </Link>
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

        {/* Avatar and Toggle aligned fully to right */}
        <div className="navbar-end">
          <div className="navbar-avatar-container" onClick={() => setAvatarOpen(!avatarOpen)}>
            <FaUserCircle size={30} className="navbar-avatar-icon" />
            {avatarOpen && (
              <div className="avatar-dropdown">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </div>
            )}
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
              <li>
                <button onClick={handleLogout} className="logout-button-mobile">Logout</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
