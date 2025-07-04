import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
 
const CourseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;
 
  const handleEnroll = () => {
    // Redirect to the pricing page instead of Razorpay
    navigate('/pricing');
  };
 
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f4f8fb', color: '#222831' }}>
      <div className="container">
        <div className="row align-items-start">
          {/* Course Image */}
          <div className="col-md-6 mb-4">
            <img
              src={course?.image || 'https://via.placeholder.com/400'}
              alt={course.title}
              className="img-fluid rounded shadow"
              style={{ border: '4px solid #e596bd' }}
            />
          </div>
 
          {/* Course Info */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#2d5d7b' }}>{course.title}</h2>
            <h5 className="text-muted mb-2">By {course.instructor}</h5>
            <h4 className="mb-3" style={{ color: '#e596bd' }}>{course.originalPrice}</h4>
            <p className="mb-3">⭐ {course.rating} | 👥 {course.students} students</p>
            <p className="mb-4">
              Learn <span className="fw-bold text-decoration-underline">{course.title}</span> from scratch and master the skill with hands-on projects and real-world examples.
            </p>
            <ul className="mb-4">
              <li>✓ Lifetime access</li>
              <li>✓ Certificate of Completion</li>
              <li>✓ Full-time mentor support</li>
            </ul>
            <button
              className="btn btn-lg mt-2 px-5"
              onClick={handleEnroll}
              style={{
                backgroundColor: '#2d5d7b',
                color: '#fff',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#79b3d7'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2d5d7b'}
            >
              <i className="bi bi-lightning-fill me-2"></i>Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default CourseDetail;
 