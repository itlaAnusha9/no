// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Contact() 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     reason: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, reason, message } = formData;

//     if (!name || !email || !reason || !message) {
//       toast.error('Please fill in all fields!');
//       return;
//     }

//     toast.success('🎉 Your message was saved locally!');
//     setFormData({ name: '', email: '', reason: '', message: '' });
//   };

//   const gradientAnimation = {
//     background: 'linear-gradient(-45deg, #F4F8FB, #e0f7fa, #ffffff, #fce4ec)',
//     backgroundSize: '400% 400%',
//     animation: 'gradientMove 10s ease infinite',
//     minHeight: '100vh',
//   };

//   const glassCardStyle = {
//     backdropFilter: 'blur(12px)',
//     backgroundColor: 'rgba(255, 255, 255, 0.85)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
//   };

//   return (
//     <section className="py-5" style={gradientAnimation}>
//       {/* Gradient animation keyframes */}
//       <style>
//         {`
//           @keyframes gradientMove {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//         `}
//       </style>

//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold" style={{ color: '#2D5D7B' }}>📬 Let's Connect</h2>
//           <p className="text-muted">Tell us what you're looking for — we're here to help.</p>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-lg-7">
//             <form
//               className="p-4 rounded shadow-lg"
//               onSubmit={handleSubmit}
//               style={glassCardStyle}
//             >
//               <div className="mb-3">
//                 <label className="form-label fw-semibold">👤 Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control rounded-pill px-4"
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">📧 Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control rounded-pill px-4"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">📌 What do you need help with?</label>
//                 <select
//                   name="reason"
//                   className="form-select rounded-pill px-4"
//                   value={formData.reason}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select one...</option>
//                   <option value="student-support">I'm a Student needing support</option>
//                   <option value="parent-info">I'm a Parent with questions</option>
//                   <option value="partnership">Interested in partnership</option>
//                   <option value="career">Looking to work with you</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">💬 Message</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   className="form-control rounded px-4 py-2"
//                   placeholder="Tell us more..."
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn w-100"
//                 style={{
//                   backgroundColor: '#2D5D7B',
//                   color: '#fff',
//                   fontWeight: '600',
//                   borderRadius: '50px'
//                 }}
//               >
//                 🚀 Submit Request
//               </button>
//             </form>

//             <div className="text-center mt-4">
//               <a
//                 href="https://wa.me/919999999999?text=Hi%20I%20have%20a%20question%20about%20LMS%20AI"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
//               >
//                 💬 Chat on WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="bottom-center" autoClose={3000} />
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, reason, message } = formData;

    if (!name || !email || !reason || !message) {
      toast.error('Please fill in all fields!');
      return;
    }

    toast.success('🎉 Your message was saved locally!');
    setFormData({ name: '', email: '', reason: '', message: '' });
  };

  const gradientAnimation = {
    background: 'linear-gradient(-45deg, #F4F8FB, #e0f7fa, #ffffff, #fce4ec)',
    backgroundSize: '400% 400%',
    animation: 'gradientMove 10s ease infinite',
    minHeight: '100vh',
  };

  const glassCardStyle = {
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
  };

  return (
    <section className="py-5" style={gradientAnimation}>
      <style>
        {`
          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>

      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#2D5D7B' }}>📬 Let's Connect</h2>
          <p className="text-muted">Tell us what you're looking for — we're here to help.</p>
        </div>

        <div className="row align-items-center">
          {/* Form Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <form
              className="p-4 rounded shadow-lg"
              onSubmit={handleSubmit}
              style={glassCardStyle}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">👤 Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-pill px-4"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">📧 Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-pill px-4"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">📌 What do you need help with?</label>
                <select
                  name="reason"
                  className="form-select rounded-pill px-4"
                  value={formData.reason}
                  onChange={handleChange}
                >
                  <option value="">Select one...</option>
                  <option value="student-support">I'm a Student needing support</option>
                  <option value="parent-info">I'm a Parent with questions</option>
                  <option value="partnership">Interested in partnership</option>
                  <option value="career">Looking to work with you</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">💬 Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control rounded px-4 py-2"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#2D5D7B',
                  color: '#fff',
                  fontWeight: '600',
                  borderRadius: '50px'
                }}
              >
                🚀 Submit Request
              </button>

              <div className="text-center mt-4">
                <a
                  href="https://wa.me/919999999999?text=Hi%20I%20have%20a%20question%20about%20LMS%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 text-center">
            <img
              src="/images/ai-removebg.png"
              alt="AI Illustration"
              className="img-fluid"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={3000} />
    </section>
  );
}

export default Contact;
