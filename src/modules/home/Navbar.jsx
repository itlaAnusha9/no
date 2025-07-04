
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(loggedIn);
    setUser(userData);
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
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-md shadow-sm sticky-top"
      style={{
        background: 'linear-gradient(90deg, rgba(244,248,251,0.95), rgba(255,255,255,0.75))',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        zIndex: 10,
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 14 }}
    >
      <div className="container">
        {/* Logo */}
        <motion.div
          className="navbar-brand fw-bold fs-3"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#2D5D7B' }}>
            LMS AI
          </Link>
        </motion.div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Links */}
        <motion.div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto me-3 text-center">
            {navItems.map(({ name, path }) => (
              <motion.li
                className="nav-item mx-2 position-relative"
                key={name}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={path}
                  className="nav-link fw-medium position-relative"
                  style={{
                    color: '#222831',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}
                >
                  <motion.span
                    className="d-inline-block"
                    whileHover={{ color: '#2D5D7B' }}
                    transition={{ duration: 0.3 }}
                  >
                    {name}
                    <motion.span
                      className="position-absolute bottom-0 start-0 w-100 bg-primary"
                      style={{
                        height: '2px',
                        transformOrigin: 'left center',
                        transform: 'scaleX(0)',
                      }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            {/* Profile Section */}
            {isLoggedIn && user && (
              <motion.div 
                className="position-relative"
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                <motion.div
                  className="d-flex align-items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  <img 
                    src={user.profileImage || "https://randomuser.me/api/portraits/men/32.jpg"} 
                    alt="Profile" 
                    className="rounded-circle me-2"
                    style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                  />
                  <span className="fw-medium d-none d-md-inline">{user.name || 'User'}</span>
                </motion.div>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <motion.div
                    className="dropdown-menu show p-0 shadow-lg"
                    style={{
                      position: 'absolute',
                      right: 0,
                      minWidth: '200px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'white',
                      display: 'block'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/profile"
                      className="dropdown-item px-3 py-2 d-flex align-items-center"
                      style={{
                        color: '#222831',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.color = '#2D5D7B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#222831';
                      }}
                    >
                      <FaUser className="me-2" /> My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="dropdown-item px-3 py-2 d-flex align-items-center"
                      style={{
                        color: '#222831',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.color = '#2D5D7B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#222831';
                      }}
                    >
                      <FaCog className="me-2" /> Settings
                    </Link>
                    <div
                      className="dropdown-item px-3 py-2 d-flex align-items-center"
                      style={{
                        color: '#dc3545',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onClick={handleLogout}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <FaSignOutAlt className="me-2" /> Logout
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Login Button */}
            {!isLoggedIn && (
              <motion.button
                onClick={() => navigate('/login')}
                className="btn"
                whileHover={{ scale: 1.05, backgroundColor: '#1C3A59' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: '#2D5D7B',
                  color: '#fff',
                  borderRadius: '12px',
                  fontWeight: '600',
                  padding: '10px 24px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                Login / Register
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

