

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home1.css';

const Home1 = () => {
  const [currentCourse, setCurrentCourse] = useState('Mathematics Class 10');
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, title: 'Science Workshop', date: 'Oct 15, 2023', time: '3:00 PM', type: 'workshop', image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, title: 'Career Guidance Session', date: 'Oct 18, 2023', time: '4:30 PM', type: 'seminar', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, title: 'Math Olympiad', date: 'Oct 22, 2023', time: '10:00 AM', type: 'competition', image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { id: 4, title: 'Literature Seminar', date: 'Oct 25, 2023', time: '2:00 PM', type: 'workshop', image: 'https://images.unsplash.com/photo-1677442135136-760c813a743c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }
  ]);

  const [allCourses, setAllCourses] = useState([
    { id: 1, title: 'Mathematics Grade 9', progress: 65, category: 'Mathematics', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' },
    { id: 2, title: 'Physics Grade 11', progress: 45, category: 'Science', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, title: 'English Literature Grade 10', progress: 70, category: 'Languages', image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 4, title: 'History Grade 8', progress: 30, category: 'Social Studies', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 5, title: 'Chemistry Grade 12', progress: 25, category: 'Science', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
    { id: 6, title: 'Computer Science Grade 11', progress: 80, category: 'Technology', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [featuredCourses, setFeaturedCourses] = useState(allCourses);
  const [isHovered, setIsHovered] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (activeTab === 'all') {
      setFeaturedCourses(allCourses);
    } else {
      setFeaturedCourses(allCourses.filter(course => course.category.toLowerCase().includes(activeTab.toLowerCase())));
    }
  }, [activeTab]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 15px 30px -10px rgba(45, 93, 123, 0.4)",
    transition: { duration: 0.3 }
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 20px 40px -10px rgba(45, 93, 123, 0.3)",
    transition: { duration: 0.3 }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 0 0 rgba(166, 45, 105, 0.4)",
      "0 0 20px 10px rgba(166, 45, 105, 0)",
      "0 0 0 0 rgba(166, 45, 105, 0.4)"
    ],
    transition: { duration: 3, repeat: Infinity }
  };

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.5 }
  };

  return (
    <div className="home-container">
      <motion.div 
        className="floating-shape shape-1"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="floating-shape shape-2"
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="floating-shape shape-3"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={textVariants}
              transition={{ duration: 0.8 }}
            >
              Welcome to Your <span className="highlight-text">Student Dashboard</span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-subtitle"
            >
              Track your progress, access your courses, and stay updated with upcoming events
            </motion.p>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-buttons"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                animate={controls}
              >
                <Link to="/courses" className="btn btn-primary">
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Continue Learning
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { value: "8", label: 'Active Courses' },
                { value: "92%", label: 'Average Grade' },
                { value: "15", label: 'Upcoming Tasks' }
              ].map((stat, index) => (
                <motion.div 
                  className="stat-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={pulseAnimation}
          >
            <motion.img 
              src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
              alt="Student illustration"
              animate={floatAnimation}
            />
            <motion.div 
              className="hero-image-glow"
              animate={glowAnimation}
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.main 
        className="main-content container py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={ref}
      >
        <motion.section 
          className="current-learning-section mb-5"
          variants={itemVariants}
        >
          <div className="section-header">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your Current Course
            </motion.h2>
            <Link to="/courses" className="view-all">View All</Link>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-8">
              <motion.div 
                className="current-course-card p-4"
                whileHover={cardHover}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                <div className="course-header">
                  <h3>{currentCourse}</h3>
                  <motion.span 
                    className="badge"
                    animate={pulseAnimation}
                  >
                    Active
                  </motion.span>
                </div>
                <div className="course-meta">
                  <span><i className="fas fa-chalkboard-teacher"></i> Instructor: Mrs. Smith</span>
                  <span><i className="fas fa-calendar-alt"></i> Started: Sep 5, 2023</span>
                </div>
                <div className="progress-container mt-3">
                  <div className="progress" style={{ height: '10px' }}>
                    <motion.div 
                      className="progress-bar" 
                      role="progressbar" 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
                      style={{ backgroundColor: '#A62D69' }}
                      aria-valuenow="65" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></motion.div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>65% Complete</span>
                    <span>13/20 Lessons</span>
                  </div>
                </div>
                <div className="course-actions mt-4">
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(166, 45, 105, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Learning
                  </motion.button>
                  <motion.button 
                    className="btn btn-outline"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Syllabus
                  </motion.button>
                </div>
                <div className="course-highlights mt-4">
                  <h5>Current Topics</h5>
                  <ul>
                    {[
                      "Algebraic expressions and equations",
                      "Geometry and trigonometry",
                      "Quadratic functions",
                      "Probability and statistics"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <i className="fas fa-check-circle"></i> {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="col-lg-4">
              <motion.div 
                className="stats-card p-4"
                whileHover={cardHover}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                <h4>Your Learning Stats</h4>
                <div className="stats-grid">
                  {[
                    { value: 8, label: 'Active Courses', icon: 'book' },
                    { value: 24, label: 'Hours This Week', icon: 'clock' },
                    { value: 92, label: 'Average Grade', icon: 'chart-line' },
                    { value: 15, label: 'Assignments Due', icon: 'tasks' }
                  ].map((stat, index) => (
                    <motion.div 
                      className="stat-item"
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="stat-icon">
                        <motion.i 
                          className={`fas fa-${stat.icon}`}
                          whileHover={{ scale: 1.2 }}
                        ></motion.i>
                      </div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="achievement-badge mt-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                  whileHover={rotateAnimation}
                >
                  <i className="fas fa-trophy"></i>
                  <span>Math Star Student</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="featured-courses mb-5"
          variants={itemVariants}
        >
          <div className="section-header">
            <h2>Your Courses</h2>
            <div className="tabs">
              {['all', 'Mathematics', 'Science', 'Languages', 'Social Studies'].map((tab) => (
                <motion.button 
                  key={tab}
                  className={activeTab === tab.toLowerCase() ? 'active' : ''}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  whileHover={{ scale: 1.05, backgroundColor: activeTab === tab.toLowerCase() ? '#1a3a4f' : '#e9ecef' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="row g-4">
            {featuredCourses.map((course, index) => (
              <div className="col-md-4" key={course.id}>
                <motion.div 
                  className="featured-course-card"
                  whileHover={cardHover}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  onHoverStart={() => setIsHovered(course.id)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-category">{course.category}</div>
                    {isHovered === course.id && (
                      <motion.div 
                        className="course-hover-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.button 
                          className="btn btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Continue Learning
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                  <div className="course-content p-4">
                    <h3>{course.title}</h3>
                    <div className="progress-container mt-3">
                      <div className="progress" style={{ height: '6px' }}>
                        <motion.div 
                          className="progress-bar" 
                          role="progressbar" 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          style={{ backgroundColor: '#2D5D7B' }}
                        ></motion.div>
                      </div>
                      <span className="mt-2 d-block">{course.progress}% Complete</span>
                    </div>
                    <div className="course-meta mt-3">
                      <span><i className="fas fa-book-open"></i> 20 Lessons</span>
                      <span><i className="fas fa-clock"></i> 10 Hours</span>
                    </div>
                    <motion.button 
                      className="btn btn-primary w-100 mt-3"
                      whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(45, 93, 123, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="events-section mb-5"
          variants={itemVariants}
        >
          <div className="section-header">
            <h2>Upcoming School Events</h2>
            <Link to="/events" className="view-all">View Calendar</Link>
          </div>
          
          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div className="col-lg-3 col-md-6" key={event.id}>
                <motion.div 
                  className="event-card"
                  whileHover="hover"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  variants={{
                    hover: {
                      y: -10,
                      boxShadow: "0 25px 50px -10px rgba(45, 93, 123, 0.3)",
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className={`event-type ${event.type}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                  </div>
                  <div className="event-content p-4">
                    <div className="event-date">
                      <span className="day">{event.date.split(' ')[1].replace(',', '')}</span>
                      <span className="month">{event.date.split(' ')[0]}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <span><i className="far fa-clock"></i> {event.time}</span>
                      <span><i className="fas fa-map-marker-alt"></i> School Campus</span>
                    </div>
                    <p className="event-description">
                      Join us for an exciting {event.type} on {event.date} at {event.time}
                    </p>
                    <div className="event-footer">
                      <motion.button 
                        className="btn btn-primary"
                        whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(45, 93, 123, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register Now
                      </motion.button>
                      <div className="event-reminder">
                        <i className="far fa-bell"></i> Set Reminder
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Home1;