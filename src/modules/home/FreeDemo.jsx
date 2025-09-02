

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FreeDemo() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    preferredTime: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Free demo | NOVYA - Your Smart Learning Platform";
  }, []);

  const handleBookDemo = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Show success message instead of alert
    setShowSuccess(true);
    
    // Auto close after 5 seconds
    setTimeout(() => {
      handleCloseForm();
    }, 5000);
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero Section */}
      <div className="row g-0 align-items-center position-relative flex-column flex-lg-row" style={{ minHeight: 'calc(100vh - 80px)' }}>

        {/* Magic Sparkles */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            zIndex: 1,
          }}
        />

        {/* Left Section */}
        <div className="col-12 col-lg-6 p-5 position-relative" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#2D5D7B' }}>
              Book your{' '}
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.1, 1],
                  color: ['#A62D69', '#2D5D7B', '#3a7ca5'],
                  textShadow: ['0 0 5px #fff', '0 0 15px #3a7ca5', '0 0 10px #fff'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
                style={{
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  display: 'inline-block',
                }}
              >
                Free Demo
              </motion.span>{' '}
              session
            </h1>

            <p className="lead mb-4" style={{ color: '#5A6A7D' }}>
              Get a free academic counselling session with our expert educators
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookDemo}
              className="btn btn-lg px-5 py-3 fw-bold"
              style={{
                background: 'linear-gradient(135deg, #2D5D7B, #3a7ca5)',
                color: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(45, 93, 123, 0.4)',
              }}
            >
              Book a free demo
            </motion.button>
          </motion.div>
        </div>

        {/* Right Section with Full Background Image */}
        <div className="col-12 col-lg-6 position-relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-100"
            style={{
              backgroundImage: 'url(/images/bestimg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '400px',
              minHeight: '100%',
            }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container py-5">
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-3 h-100"
                style={{
                  backgroundColor: '#f8f9fa',
                  borderLeft: '4px solid #2D5D7B',
                }}
              >
                <div className="d-flex align-items-start">
                  <img
                    src="/images/bestimg.png"
                    alt="Guidance Icon"
                    style={{ width: '60px', height: '60px', marginRight: '15px' }}
                  />
                  <div>
                    <h4 className="fw-bold mb-2" style={{ color: '#2D5D7B' }}>
                      Personalized Guidance
                    </h4>
                    <p className="mb-0">
                      Get tailored advice based on your academic goals and learning style.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-3 h-100"
                style={{
                  backgroundColor: '#f8f9fa',
                  borderLeft: '4px solid #A62D69',
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: '#A62D69' }}>
                  Course Selection
                </h4>
                <p className="mb-0">Understand which courses best fit your career aspirations.</p>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-3 h-100"
                style={{
                  backgroundColor: '#f8f9fa',
                  borderLeft: '4px solid #28a745',
                }}
              >
                <h4 className="fw-bold mb-3" style={{ color: '#28a745' }}>
                  Learning Strategy
                </h4>
                <p className="mb-0">Develop an effective study plan with our experienced educators.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-4 p-4 mx-3"
              style={{
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              {!showSuccess ? (
                // Form Content
                <>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-0" style={{ color: '#2D5D7B' }}>
                      Book Your Free Demo
                    </h3>
                    <button
                      onClick={handleCloseForm}
                      className="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Course of Interest
                        </label>
                        <select
                          className="form-select"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        >
                          <option value="">Select a course</option>
                          <option value="mathematics">Mathematics</option>
                          <option value="science">Science</option>
                          <option value="english">English</option>
                          <option value="computer-science">Computer Science</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-12">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Preferred Time
                        </label>
                        <select
                          className="form-select"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                          <option value="evening">Evening (6 PM - 9 PM)</option>
                        </select>
                      </div>
                      
                      <div className="col-12">
                        <label className="form-label fw-semibold" style={{ color: '#2D5D7B' }}>
                          Additional Message
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Tell us about your learning goals or any specific requirements..."
                          style={{ borderRadius: '8px', border: '2px solid #e9ecef' }}
                        />
                      </div>
                    </div>

                    <div className="d-flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={handleCloseForm}
                        className="btn btn-outline-secondary flex-fill"
                        style={{ borderRadius: '8px' }}
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        className="btn flex-fill fw-bold"
                        style={{
                          background: 'linear-gradient(135deg, #2D5D7B, #3a7ca5)',
                          color: '#fff',
                          borderRadius: '8px',
                          border: 'none',
                        }}
                      >
                        Book Demo
                      </motion.button>
                    </div>
                  </div>
                </>
              ) : (
                // Success Message
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-4"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="mb-4"
                  >
                    <div 
                      className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #28a745, #20c997)',
                        color: 'white'
                      }}
                    >
                      <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Thank You Message */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="fw-bold mb-3"
                    style={{ color: '#2D5D7B' }}
                  >
                    Thank You!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-4"
                    style={{ color: '#5A6A7D', fontSize: '1.1rem' }}
                  >
                    Your demo session has been successfully booked.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 rounded-3 mb-4"
                    style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}
                  >
                    <p className="mb-2" style={{ color: '#2D5D7B' }}>
                      <strong>What's Next?</strong>
                    </p>
                    <p className="mb-0" style={{ color: '#5A6A7D' }}>
                      Detailed information and demo session link will be sent to your email shortly. 
                      Our team will contact you within 24 hours to confirm your preferred time slot.
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCloseForm}
                    className="btn btn-lg px-4 fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #2D5D7B, #3a7ca5)',
                      color: '#fff',
                      borderRadius: '8px',
                      border: 'none',
                    }}
                  >
                    Continue Exploring
                  </motion.button>

                  {/* Auto-close indicator */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3}}
                    className="mt-3 small text-muted"
                  >
                    This window will close automatically in 5 seconds
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FreeDemo;