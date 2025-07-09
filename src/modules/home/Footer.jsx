import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  useEffect(() => {
    document.title = "Home | NOVYA - Your Smart Learning Platform";
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#222831', color: '#F4F8FB' }} className="pt-5 pb-4 border-top">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Branding */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold" style={{ color: '#F4F8FB' }}>NOVYA</h5>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
              Empowering learners with personalized AI education, anytime, anywhere.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold mb-3" style={{ color: '#A62D69' }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-decoration-none text-light d-block mb-1">About</a></li>
              <li><a href="/terms" className="text-decoration-none text-light d-block mb-1">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-decoration-none text-light d-block mb-1">Privacy Policy</a></li>
              <li><a href="/careers" className="text-decoration-none text-light d-block">Careers</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold mb-3" style={{ color: '#A62D69' }}>Contact</h6>
            <p className="mb-2">
              📧 Email:{' '}
              <a href="mailto:support@lmsai.com" className="text-decoration-none" style={{ color: '#2D5D7B' }}>
                support@novya.com
              </a>
            </p>
            <p>
              🌐 Follow us:
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none ms-2 me-2" style={{ color: '#2D5D7B' }}>YouTube</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-2" style={{ color: '#2D5D7B' }}>LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#2D5D7B' }}>Instagram</a>
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-4" style={{ fontSize: '0.85rem', color: '#aaa' }}>
          Designed with ❤️ by Team Vunathi | All rights reserved
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-light"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#2D5D7B',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;
