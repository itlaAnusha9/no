import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUserTie, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdSchool } from 'react-icons/io';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    student: { studentid: '', password: '' },
    parent: { parentid: '', password: '' }
  });
  const [errors, setErrors] = useState({
    student: { studentid: '', password: '' },
    parent: { parentid: '', password: '' }
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastBg, setToastBg] = useState('success');
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  // Define your dynamic credentials here
  const VALID_CREDENTIALS = {
    student: {
      studentid: 'student123',
      password: 'studentpass'
    },
    parent: {
      parentid: 'parent456',
      password: 'parentpass'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [name]: value,
      },
    }));
    // Safely clear the specific error for the changed field
    setErrors((prevErrors) => {
      const tabErrors = prevErrors[activeTab] ? { ...prevErrors[activeTab] } : {};
      if (tabErrors.hasOwnProperty(name)) {
        tabErrors[name] = '';
      }
      return {
        ...prevErrors,
        [activeTab]: tabErrors,
      };
    });
  };

  const validateForm = () => {
    let valid = true;
    const current = formData[activeTab];
    let newErrors = {};

    const idField = activeTab === 'student' ? 'studentid' : 'parentid';
    const idName = activeTab === 'student' ? 'Student ID' : 'Parent ID';

    if (activeTab === 'student') {
      newErrors = { studentid: '', password: '' };
    } else {
      newErrors = { parentid: '', password: '' };
    }

    if (!current[idField] || !current[idField].trim()) {
      newErrors[idField] = `${idName} is required`;
      valid = false;
    } else if (current[idField].length < 4) {
      newErrors[idField] = `${idName} must be at least 4 characters`;
      valid = false;
    }

    if (!current.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (current.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors((prev) => ({
      ...prev,
      [activeTab]: newErrors,
    }));

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const idField = activeTab === 'student' ? 'studentid' : 'parentid';
      const enteredId = formData[activeTab][idField];
      const enteredPassword = formData[activeTab].password;

      // Check against predefined valid credentials
      if (enteredId === VALID_CREDENTIALS[activeTab][idField] && 
          enteredPassword === VALID_CREDENTIALS[activeTab].password) {
        // Successful login
        localStorage.setItem('userRole', activeTab);
        localStorage.setItem('userToken', 'dummy-token'); // Replace with actual token from API

        setToastMessage(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login successful!`);
        setToastBg('success');
        setShowToast(true);

        setTimeout(() => {
          if (activeTab === 'student') {
            navigate('/student/dashboard');
          } else {
            navigate('/parent/dashboard');
          }
        }, 2000);
      } else {
        // Failed login
        setToastMessage('Invalid credentials. Please try again.');
        setToastBg('danger');
        setShowToast(true);
      }
      
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{
      background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Floating education icons */}
      <motion.div 
        initial={{ x: -100, y: -100, rotate: -15 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: '3rem',
          color: 'rgba(255,255,255,0.2)'
        }}
      >
        <FaBookOpen />
      </motion.div>
      
      <motion.div 
        initial={{ x: 100, y: -100, rotate: 15 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          fontSize: '4rem',
          color: 'rgba(255,255,255,0.2)'
        }}
      >
        <IoMdSchool />
      </motion.div>
      
      <motion.div 
        initial={{ x: -100, y: 100, rotate: -15 }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', delay: 0.4 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          fontSize: '3.5rem',
          color: 'rgba(255,255,255,0.2)'
        }}
      >
        <FaChalkboardTeacher />
      </motion.div>

      {/* Toast Message */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          bg={toastBg} // Dynamic background based on success/failure
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">{toastBg === 'success' ? 'Login Success' : 'Login Failed'}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Main Login Card */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container"
      >
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <motion.div 
              variants={itemVariants}
              className="card shadow-lg border-0 overflow-hidden"
              style={{ borderRadius: '20px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.9)' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  {/* Left Side - Visual */}
                  <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center" style={{
                    background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        zIndex: 1, 
                        textAlign: 'center', 
                        color: 'white'
                      }}
                    >
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                        {activeTab === 'student' ? <FaUserGraduate /> : <FaUserTie />}
                      </div>
                      <h4 className="fw-bold mb-0">
                        {activeTab === 'student' ? 'Student Portal' : 'Parent Portal'}
                      </h4>
                      <p className="mb-0" style={{ color: 'white' }}>Your gateway to knowledge</p>
                    </motion.div>
                    
                    {/* Animated circles */}
                    <motion.div 
                      animate={{ 
                        x: [0, 100, 100, 0, 0],
                        y: [0, 0, 100, 100, 0],
                        transition: { duration: 15, repeat: Infinity }
                      }}
                      style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '2px dashed rgba(255,255,255,0.3)',
                        top: '-50px',
                        left: '-50px'
                      }}
                    />
                    
                    <motion.div 
                      animate={{ 
                        x: [0, -100, -100, 0, 0],
                        y: [0, 0, -100, -100, 0],
                        transition: { duration: 20, repeat: Infinity, delay: 2 }
                      }}
                      style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        border: '2px dashed rgba(255,255,255,0.2)',
                        bottom: '-100px',
                        right: '-100px'
                      }}
                    />
                  </div>
                  
                  {/* Right Side - Form */}
                  <div className="col-md-7">
                    <div className="p-4 p-md-5">
                      {/* Enhanced Title Section */}
                      <motion.div 
                        variants={itemVariants} 
                        className="text-center mb-4"
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                      >
                        <motion.h1 
                          className="fw-bold mb-2"
                          style={{ 
                            background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '2.8rem',
                            letterSpacing: '1px'
                          }}
                          animate={{
                            scale: isHovered ? 1.05 : 1,
                            transition: { duration: 0.3 }
                          }}
                          whileHover={{ 
                            background: 'linear-gradient(to right, #A62D69, #2D5D7B)',
                            WebkitBackgroundClip: 'text',
                          }}
                        >
                          NOVYA
                        </motion.h1>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: isHovered ? 100 : 60 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            height: '3px',
                            background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}
                        />
                        <motion.p 
                          className="text-muted mt-2"
                          animate={{
                            opacity: isHovered ? 1 : 0.8,
                            transition: { duration: 0.3 }
                          }}
                        >
                          Education Management Platform
                        </motion.p>
                      </motion.div>

                      {/* Tab Navigation */}
                      <motion.div variants={itemVariants} className="mb-4">
                        <div className="btn-group w-100 shadow-sm" role="group">
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className={`btn ${activeTab === 'student' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setActiveTab('student')}
                            style={{
                              fontWeight: '500',
                              background: activeTab === 'student' ? 'linear-gradient(to right, #2D5D7B, #A62D69)' : 'transparent',
                              borderColor: '#2D5D7B',
                              color: activeTab === 'student' ? 'white' : '#2D5D7B',
                              zIndex: activeTab === 'student' ? 1 : 0
                            }}
                          >
                            <FaUserGraduate className="me-2" />
                            Student
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className={`btn ${activeTab === 'parent' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setActiveTab('parent')}
                            style={{
                              fontWeight: '500',
                              background: activeTab === 'parent' ? 'linear-gradient(to right, #2D5D7B, #A62D69)' : 'transparent',
                              borderColor: '#2D5D7B',
                              color: activeTab === 'parent' ? 'white' : '#2D5D7B',
                              zIndex: activeTab === 'parent' ? 1 : 0
                            }}
                          >
                            <FaUserTie className="me-2" />
                            Parent
                          </motion.button>
                        </div>
                      </motion.div>

                      <motion.form variants={containerVariants} onSubmit={handleSubmit}>
                        <motion.div variants={itemVariants} className="mb-3">
                          <label htmlFor={activeTab === 'student' ? 'studentid' : 'parentid'} className="form-label fw-medium" style={{ color: '#374151' }}>
                            {activeTab === 'student' ? 'Student ID' : 'Parent ID'} {/* Dynamic label */}
                          </label>
                          <div className="input-group">
                            <span className="input-group-text" style={{ background: '#f3f4f6' }}>
                              {activeTab === 'student' ? <FaUserGraduate /> : <FaUserTie />} {/* Dynamic icon */}
                            </span>
                            <input
                              type="text"
                              className={`form-control ${errors[activeTab][activeTab === 'student' ? 'studentid' : 'parentid'] ? 'is-invalid' : ''}`}
                              id={activeTab === 'student' ? 'studentid' : 'parentid'}
                              name={activeTab === 'student' ? 'studentid' : 'parentid'} 
                              value={formData[activeTab][activeTab === 'student' ? 'studentid' : 'parentid']} 
                              onChange={handleChange}
                              placeholder={`Enter ${activeTab === 'student' ? 'Student ID' : 'Parent ID'}`} 
                              style={{ 
                                borderRadius: '0 8px 8px 0', 
                                padding: '12px 15px',
                                border: '1px solid #e5e7eb',
                                backgroundColor: '#f9fafb'
                              }}
                            />
                          </div>
                          {errors[activeTab][activeTab === 'student' ? 'studentid' : 'parentid'] && <div className="invalid-feedback d-block">{errors[activeTab][activeTab === 'student' ? 'studentid' : 'parentid']}</div>} {/* Dynamic error message */}
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-4">
                          <label htmlFor="password" className="form-label fw-medium" style={{ color: '#374151' }}>
                            Password
                          </label>
                          <div className="input-group">
                            <span className="input-group-text" style={{ background: '#f3f4f6' }}>
                              <RiLockPasswordFill />
                            </span>
                            <input
                              type="password"
                              className={`form-control ${errors[activeTab].password ? 'is-invalid' : ''}`}
                              id="password"
                              name="password"
                              value={formData[activeTab].password}
                              onChange={handleChange}
                              placeholder="Enter password"
                              style={{ 
                                borderRadius: '0 8px 8px 0', 
                                padding: '12px 15px',
                                border: '1px solid #e5e7eb',
                                backgroundColor: '#f9fafb'
                              }}
                            />
                          </div>
                          {errors[activeTab].password && <div className="invalid-feedback d-block">{errors[activeTab].password}</div>}
                        </motion.div>

                        <motion.div variants={itemVariants} className="d-flex justify-content-end mb-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className="btn btn-link p-0 text-decoration-none"
                            onClick={() => navigate('/forgot-password')}
                            style={{ color: '#6b7280', fontSize: '0.875rem' }}
                          >
                            Forgot password?
                          </motion.button>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <motion.button
                            type="submit"
                            className="btn w-100 mb-3 py-2 fw-medium d-flex align-items-center justify-content-center"
                            disabled={isLoading}
                            style={{
                              background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                              border: 'none',
                              color: 'white',
                              fontSize: '1rem',
                              borderRadius: '10px',
                              boxShadow: '0 4px 15px rgba(45, 93, 123, 0.3)',
                              height: '44px'
                            }}
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: '0 6px 20px rgba(45, 93, 123, 0.4)'
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Signing in...
                              </>
                            ) : (
                              'Sign In'
                            )}
                          </motion.button>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center mt-3">
                          <p className="text-muted mb-0" style={{ fontSize: '0.875rem' }}>
                            New to Novya?{' '}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              className="btn btn-link p-0 text-decoration-none"
                              onClick={handleRegisterClick}
                              style={{ 
                                color: '#2D5D7B', 
                                fontWeight: '500',
                                background: 'linear-gradient(to right, #2D5D7B, #A62D69)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                              }}
                            >
                              Create account
                            </motion.button>
                          </p>
                        </motion.div>
                      </motion.form>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default LoginPage;