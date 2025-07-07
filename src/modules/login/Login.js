import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [formData, setFormData] = useState({
    student: { username: '', password: '' },
    parent: { username: '', password: '' }
  });
  const [errors, setErrors] = useState({
    student: { username: '', password: '' },
    parent: { username: '', password: '' }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [name]: value,
      },
    }));
    if (errors[activeTab][name]) {
      setErrors((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          [name]: '',
        },
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const current = formData[activeTab];
    const newErrors = { username: '', password: '' };

    if (!current.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (current.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // ✅ Store role and token to simulate auth
      localStorage.setItem('userRole', activeTab);
      localStorage.setItem('userToken', 'dummy-token');

      alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login successful!`);

      setFormData((prev) => ({
        ...prev,
        [activeTab]: { username: '', password: '' },
      }));

      // ✅ Navigate accordingly
      if (activeTab === 'student') {
        navigate('/student/dashboard');
      } else {
        navigate('/parent/dashboard');
      }
    }
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh'
    }}>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5">
        <div className="card p-4" style={{
          width: '100%',
          maxWidth: '450px',
          borderRadius: '12px',
          border: 'none',
          boxShadow: '0 10px 30px rgba(79, 70, 229, 0.15)',
          background: 'rgba(255,255,255,0.98)'
        }}>
          <div className="text-center mb-4">
            <div className="btn-group" role="group" style={{ width: '100%' }}>
              <button
                type="button"
                className={`btn ${activeTab === 'student' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('student')}
                style={{
                  fontWeight: '500',
                  background: activeTab === 'student' ? 'linear-gradient(to right, #4f46e5, #7c3aed)' : 'transparent',
                  borderColor: '#4f46e5',
                  color: activeTab === 'student' ? 'white' : '#4f46e5'
                }}
              >
                Student Portal
              </button>
              <button
                type="button"
                className={`btn ${activeTab === 'parent' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('parent')}
                style={{
                  fontWeight: '500',
                  background: activeTab === 'parent' ? 'linear-gradient(to right, #4f46e5, #7c3aed)' : 'transparent',
                  borderColor: '#4f46e5',
                  color: activeTab === 'parent' ? 'white' : '#4f46e5'
                }}
              >
                Parent Portal
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-medium" style={{ color: '#4a4a4a' }}>
                Username
              </label>
              <input
                type="text"
                className={`form-control ${errors[activeTab].username ? 'is-invalid' : ''}`}
                id="username"
                name="username"
                value={formData[activeTab].username}
                onChange={handleChange}
                placeholder={`Enter ${activeTab} username`}
                style={{
                  borderRadius: '8px',
                  padding: '12px 15px',
                  border: '1px solid #e0e0e0'
                }}
              />
              {errors[activeTab].username && <div className="invalid-feedback">{errors[activeTab].username}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-medium" style={{ color: '#4a4a4a' }}>
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errors[activeTab].password ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                value={formData[activeTab].password}
                onChange={handleChange}
                placeholder="Enter password"
                style={{
                  borderRadius: '8px',
                  padding: '12px 15px',
                  border: '1px solid #e0e0e0'
                }}
              />
              {errors[activeTab].password && <div className="invalid-feedback">{errors[activeTab].password}</div>}
            </div>

            <button
              type="submit"
              className="btn w-100 mb-3 py-2 fw-medium"
              style={{
                background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                border: 'none',
                color: 'white',
                fontSize: '1.1rem',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Login
            </button>

            <div className="d-flex justify-content-between mt-3">
              <button
                type="button"
                className="btn btn-link text-decoration-none p-0"
                onClick={handleRegisterClick}
                style={{
                  color: '#4f46e5',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#7c3aed'}
                onMouseOut={(e) => e.target.style.color = '#4f46e5'}
              >
                New user? Register here
              </button>
              <button
                type="button"
                className="btn btn-link text-decoration-none p-0"
                onClick={() => navigate('/forgot-password')}
                style={{
                  color: '#9e9e9e',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#4f46e5'}
                onMouseOut={(e) => e.target.style.color = '#9e9e9e'}
              >
                Forgot password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




