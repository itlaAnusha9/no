
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import novyaLogo from './assets/NOVYA LOGO.png';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = "Navbar|Prime Minds - Your Smart Learning Platform";
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(loggedIn);
    setUser(userData);
    setActiveLink(window.location.pathname);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Free Demo', path: '/free-demo' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ paddingTop: windowWidth > 992 ? '90px' : '80px' }}>
      <motion.nav
        className="shadow-sm fixed-top"
        style={{
          margin: windowWidth > 992 ? '20px auto' : '0',
          width: windowWidth > 992 ? '90%' : '100%',
          borderRadius: windowWidth > 992 ? '50px' : '0',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgb(255, 255, 255))',
          backdropFilter: 'blur(12px)',
          border: windowWidth > 992 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
          zIndex: 1030,
          padding: windowWidth > 992 ? '1rem 2rem' : '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 14 }}
      >
        {/* Logo and Hamburger Menu */}
        <div className="d-flex align-items-center">
          {windowWidth <= 992 && (
            <motion.button
              onClick={toggleMobileMenu}
              className="btn p-0 me-3"
              whileTap={{ scale: 0.9 }}
              style={{ background: 'transparent', border: 'none' }}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} color="#2D5D7B" />
              ) : (
                <FaBars size={24} color="#2D5D7B" />
              )}
            </motion.button>
          )}
          
          <motion.div
            className="fw-bold fs-3"
            whileHover={{ scale: window.innerWidth > 992 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                src={novyaLogo}
                alt="LMS AI Logo"
                style={{ height: '60px', width: 'auto', maxWidth: '180px', objectFit: 'contain', display: 'block' }}
              />
            </Link>
          </motion.div>

        </div>

        {/* Desktop Nav Links */}
        {windowWidth > 992 && (
          <motion.ul 
            className="d-flex align-items-center m-0 p-0 list-unstyled"
            style={{
              background: '#f7f9fb',
              borderRadius: '50px',
              padding: '0.5rem 1rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {navItems.map(({ name, path }) => (
              <motion.li
                key={name}
                style={{ listStyle: 'none' }}
                onMouseEnter={() => setActiveLink(path)}
                onMouseLeave={() => setActiveLink(window.location.pathname)}
              >
                <Link
                  to={path}
                  className="fw-medium position-relative"
                  style={{
                    color: activeLink === path ? '#2D5D7B' : '#222831',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    padding: '0.5rem 1.5rem',
                    display: 'inline-block',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {name}
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: '0%',
                      height: '2px',
                      background: '#ff3d3d',
                      transform: 'translateX(-50%)',
                    }}
                    animate={{
                      width: activeLink === path ? '80%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Right Side Buttons */}
        <div className="d-flex align-items-center">
          {/* Profile */}
          {isLoggedIn && user && (
            <motion.div
              className="position-relative"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <motion.div
                className="d-flex align-items-center cursor-pointer"
                whileHover={{ scale: windowWidth > 992 ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#f7f9fb',
                  borderRadius: '50px',
                  padding: windowWidth > 576 ? '0.5rem 1rem' : '0.5rem',
                  position: 'relative'
                }}
              >
                <img
                  src={user.profileImage || "https://randomuser.me/api/portraits/men/32.jpg"}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                />
                {windowWidth > 768 && (
                  <span className="fw-medium">{user.name || 'User'}</span>
                )}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    width: '0%',
                    height: '2px',
                    background: '#ff3d3d',
                    transform: 'translateX(-50%)',
                  }}
                  animate={{
                    width: showProfileDropdown ? '80%' : '0%',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {showProfileDropdown && (
                <motion.div
                  className="dropdown-menu show p-0 shadow-lg"
                  style={{
                    position: 'absolute',
                    right: 0,
                    minWidth: '200px',
                    borderRadius: '15px',
                    border: 'none',
                    backgroundColor: 'white',
                    display: 'block',
                    overflow: 'hidden'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    to="/profile"
                    className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                    style={{ color: '#222831', fontSize: '0.9rem' }}
                  >
                    <FaUser className="me-2" /> My Profile
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '0%',
                        height: '2px',
                        background: '#ff3d3d',
                      }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  <Link
                    to="/settings"
                    className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                    style={{ color: '#222831', fontSize: '0.9rem' }}
                  >
                    <FaCog className="me-2" /> Settings
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '0%',
                        height: '2px',
                        background: '#ff3d3d',
                      }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  <div
                    className="dropdown-item px-3 py-2 d-flex align-items-center position-relative"
                    style={{ color: '#dc3545', fontSize: '0.9rem', cursor: 'pointer' }}
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="me-2" /> Logout
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '0%',
                        height: '2px',
                        background: '#ff3d3d',
                      }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Login/Register */}
          {!isLoggedIn && (
            <motion.button
              onClick={() => navigate('/login')}
              className="btn position-relative"
              whileHover={{ 
                scale: windowWidth > 992 ? 1.05 : 1,
                boxShadow: '0 6px 16px rgba(255, 61, 61, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#2D5D7B',
                color: '#fff',
                borderRadius: '50px',
                fontWeight: '600',
                padding: windowWidth > 576 ? '10px 24px' : '8px 16px',
                fontSize: windowWidth > 576 ? '1rem' : '0.9rem',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                marginLeft: '1rem',
                border: 'none',
                overflow: 'hidden'
              }}
            >
              {windowWidth > 576 ? 'Login / Register' : 'Login'}
              <motion.span
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '0%',
                  height: '3px',
                  background: '#ff3d3d',
                }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && windowWidth <= 992 && (
            <motion.div
              className="mobile-menu-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: '80px',
                left: 0,
                right: 0,
                background: 'white',
                padding: '1rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                zIndex: 1029
              }}
            >
              <ul className="list-unstyled">
                {navItems.map(({ name, path }) => (
                  <motion.li
                    key={name}
                    className="mb-2"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={path}
                      className="d-block p-3 fw-medium"
                      style={{
                        color: activeLink === path ? '#2D5D7B' : '#222831',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        backgroundColor: activeLink === path ? '#f7f9fb' : 'transparent',
                      }}
                      onClick={() => {
                        setActiveLink(path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navbar;