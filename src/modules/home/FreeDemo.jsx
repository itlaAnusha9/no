import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FreeDemo() {
   useEffect(() => {
      document.title = "Free demo|NOVYA - Your Smart Learning Platform";
    }, []);
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
              height: '400px',           // for small screen
              minHeight: '100%',         // for lg+
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
    </div>
  );
}

export default FreeDemo;
