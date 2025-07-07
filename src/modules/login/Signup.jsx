
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [verificationStep, setVerificationStep] = useState('form');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendVerification = (type) => {
    const code = generateVerificationCode();
    setGeneratedCode(code);
    console.log(`Verification code for ${type}:`, code);
    setVerificationStep(type);
    alert(`Verification code sent to your ${type} (demo code: ${code})`);
  };

  const handleVerify = () => {
    if (verificationCode === generatedCode) {
      alert('Verification successful!');
      setVerificationStep('form');
    } else {
      alert('Invalid verification code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert('Account created successfully!');
      navigate('/login');
      setIsSubmitting(false);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{
      background: 'linear-gradient(135deg, #f9f9f9 0%, #f0e6f0 100%)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="position-absolute rounded-circle"
            style={{
              background: 'rgba(45, 93, 123, 0.05)',
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${Math.random() * 8 + 8}s infinite alternate`,
              filter: 'blur(6px)'
            }}
          />
        ))}
      </div>

      <motion.div 
        className="signup-box p-4 rounded-3 shadow-sm"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          width: '100%',
          maxWidth: '400px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 5px 15px rgba(45, 93, 123, 0.1)'
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-3"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="position-relative d-inline-block mb-2">
            <div className="position-absolute bottom-0 start-0 w-100" style={{
              height: '4px',
              background: 'rgba(45, 93, 123, 0.2)',
              borderRadius: '2px',
              zIndex: -1
            }} />
            <h3 className="fw-bold mb-0" style={{ 
              color: '#2d5d7b',
              position: 'relative',
              fontSize: '1.5rem'
            }}>Create Account</h3>
          </div>
          <p className="text-muted mt-1 small">Join our community</p>
        </motion.div>
        
        {verificationStep === 'form' ? (
          <motion.form 
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="row g-2">
              <motion.div className="mb-2 col-md-6" variants={itemVariants}>
                <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control form-control-sm py-2 px-2 rounded-2"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div className="mb-2 col-md-6" variants={itemVariants}>
                <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control form-control-sm py-2 px-2 rounded-2"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </motion.div>
            </div>
            
            <motion.div className="mb-2" variants={itemVariants}>
              <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Phone Number</label>
              <div className="input-group input-group-sm">
                <input
                  type="tel"
                  name="phone"
                  className="form-control form-control-sm py-2 px-2 rounded-start-2"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <motion.button 
                  type="button"
                  className="btn btn-sm rounded-end-2"
                  onClick={() => handleSendVerification('phone')}
                  disabled={!form.phone}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: form.phone ? '#2d5d7b' : '#ddd',
                    color: 'white',
                    border: 'none',
                    fontWeight: '500'
                  }}
                >
                  Verify
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div className="mb-2" variants={itemVariants}>
              <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Email</label>
              <div className="input-group input-group-sm">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-sm py-2 px-2 rounded-start-2"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <motion.button 
                  type="button"
                  className="btn btn-sm rounded-end-2"
                  onClick={() => handleSendVerification('email')}
                  disabled={!form.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: form.email ? '#2d5d7b' : '#ddd',
                    color: 'white',
                    border: 'none',
                    fontWeight: '500'
                  }}
                >
                  Verify
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div className="mb-2" variants={itemVariants}>
              <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Username</label>
              <input
                type="text"
                name="username"
                className="form-control form-control-sm py-2 px-2 rounded-2"
                value={form.username}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div className="mb-2" variants={itemVariants}>
              <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Password</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-sm py-2 px-2 rounded-2"
                value={form.password}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div className="mb-3" variants={itemVariants}>
              <label className="form-label small fw-medium" style={{ color: '#555', fontSize: '0.85rem' }}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control form-control-sm py-2 px-2 rounded-2"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="btn w-100 py-2 rounded-2"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#79b3d7'
                }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  backgroundColor: '#2d5d7b',
                  color: 'white',
                  fontWeight: '500',
                  border: 'none'
                }}
              >
                {isSubmitting ? 'Creating...' : 'Sign Up'}
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div 
            className="verification-box"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center mb-3">
              <div className="position-relative d-inline-block mb-2">
                <div className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '4px',
                  background: 'rgba(45, 93, 123, 0.2)',
                  borderRadius: '2px',
                  zIndex: -1
                }} />
                <h5 className="mb-0" style={{ 
                  color: '#2d5d7b',
                  position: 'relative',
                  fontSize: '1.1rem'
                }}>
                  Verify {verificationStep === 'email' ? 'Email' : 'Phone'}
                </h5>
              </div>
              <p className="text-muted small" style={{ fontSize: '0.8rem' }}>
                We've sent a 6-digit code to your {verificationStep}
              </p>
            </div>
            
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter code"
                className="form-control form-control-sm py-2 px-2 rounded-2 text-center"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                style={{
                  fontSize: '1rem',
                  letterSpacing: '2px'
                }}
              />
            </div>
            
            <div className="d-flex justify-content-between gap-2">
              <motion.button 
                className="btn btn-outline-secondary btn-sm rounded-2 flex-grow-1"
                onClick={() => setVerificationStep('form')}
                whileHover={{ scale: 1.02 }}
                style={{
                  borderColor: '#2d5d7b',
                  color: '#2d5d7b'
                }}
              >
                Back
              </motion.button>
              <motion.button 
                className="btn btn-sm rounded-2 flex-grow-1"
                onClick={handleVerify}
                disabled={verificationCode.length !== 6}
                whileHover={{ 
                  scale: verificationCode.length === 6 ? 1.02 : 1,
                  backgroundColor: verificationCode.length === 6 ? '#79b3d7' : '#ddd'
                }}
                style={{
                  backgroundColor: verificationCode.length === 6 ? '#2d5d7b' : '#ddd',
                  color: 'white'
                }}
              >
                Verify
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Signup;