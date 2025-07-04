// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './index.css';

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [verificationStep, setVerificationStep] = useState('form'); // 'form', 'email', 'phone'
//   const [verificationCode, setVerificationCode] = useState('');
//   const [generatedCode, setGeneratedCode] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSendVerification = (type) => {
//     const code = generateVerificationCode();
//     setGeneratedCode(code);
    
//     // In a real app, you would send this code to the user's email/phone
//     console.log(`Verification code for ${type}:`, code);
    
//     setVerificationStep(type);
//     alert(`Verification code sent to your ${type} (demo code: ${code})`);
//   };

//   const handleVerify = () => {
//     if (verificationCode === generatedCode) {
//       alert('Verification successful!');
//       setVerificationStep('form');
//     } else {
//       alert('Invalid verification code');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     alert('Account created successfully!');
//     navigate('/login');
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center bg-primary-bg">
//       <div className="signup-box p-4 rounded shadow">
//         <h3 className="text-center text-dark mb-3">Create Account</h3>
        
//         {verificationStep === 'form' ? (
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="mb-2 col-6">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="form-control"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-2 col-6">
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="form-control"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   className="form-control"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleSendVerification('phone')}
//                   disabled={!form.phone}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <div className="input-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="form-control"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleSendVerification('email')}
//                   disabled={!form.email}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="form-control"
//                 value={form.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="mb-2">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="form-control"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="mb-3">
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="form-control"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <button className="btn btn-accent w-100 mb-2" type="submit">
//               Sign Up
//             </button>
            
//             <p className="text-center small">
//               Already have an account? <a href="/login" className="text-highlight">Login</a>
//             </p>
//           </form>
//         ) : (
//           <div className="verification-box">
//             <h5 className="text-center mb-3">
//               Verify your {verificationStep === 'email' ? 'Email' : 'Phone'}
//             </h5>
//             <p className="text-center small mb-3">
//               We've sent a 6-digit code to your {verificationStep}
//             </p>
            
//             <div className="mb-3">
//               <input
//                 type="text"
//                 placeholder="Enter verification code"
//                 className="form-control text-center"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//               />
//             </div>
            
//             <div className="d-flex justify-content-between">
//               <button 
//                 className="btn btn-outline-secondary"
//                 onClick={() => setVerificationStep('form')}
//               >
//                 Back
//               </button>
//               <button 
//                 className="btn btn-accent"
//                 onClick={handleVerify}
//                 disabled={verificationCode.length !== 6}
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './index.css';

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [verificationStep, setVerificationStep] = useState('form');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validatePassword = (password) => {
//     const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
//     const requirements = {
//       length: password.length >= 8,
//       specialChar: specialChars.test(password),
//       number: /\d/.test(password),
//       upperCase: /[A-Z]/.test(password),
//       lowerCase: /[a-z]/.test(password)
//     };

//     if (!requirements.length) return "Password must be at least 8 characters";
//     if (!requirements.specialChar) return "Password must contain a special character";
//     if (!requirements.number) return "Password must contain a number";
//     if (!requirements.upperCase || !requirements.lowerCase) {
//       return "Password must contain both uppercase and lowercase letters";
//     }
//     return null;
//   };

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSendVerification = (type) => {
//     const passwordError = validatePassword(form.password);
//     if (passwordError) {
//       setPopupMessage(passwordError);
//       setShowPopup(true);
//       return;
//     }

//     const code = generateVerificationCode();
//     setGeneratedCode(code);
//     console.log(`Verification code for ${type}:`, code);
//     setVerificationStep(type);
//     setPopupMessage(`Verification code sent to your ${type} (demo code: ${code})`);
//     setShowPopup(true);
//   };

//   const handleVerify = () => {
//     if (verificationCode === generatedCode) {
//       setPopupMessage('Verification successful!');
//       setShowPopup(true);
//       setVerificationStep('form');
//     } else {
//       setPopupMessage('Invalid verification code');
//       setShowPopup(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (form.password !== form.confirmPassword) {
//       setPopupMessage('Passwords do not match');
//       setShowPopup(true);
//       return;
//     }

//     const passwordError = validatePassword(form.password);
//     if (passwordError) {
//       setPopupMessage(passwordError);
//       setShowPopup(true);
//       return;
//     }

//     setPopupMessage('Account created successfully!');
//     setShowPopup(true);
//     navigate('/login');
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center bg-primary-bg">
//       <div className="signup-box p-4 rounded shadow">
//         <h3 className="text-center text-dark mb-3">Create Account</h3>
        
//         {verificationStep === 'form' ? (
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="mb-2 col-6">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="form-control"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-2 col-6">
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="form-control"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   className="form-control"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleSendVerification('phone')}
//                   disabled={!form.phone}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <div className="input-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="form-control"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleSendVerification('email')}
//                   disabled={!form.email}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </div>
            
//             <div className="mb-2">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="form-control"
//                 value={form.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="mb-2">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="form-control"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//               <div className="password-requirements">
//                 <small>Password must contain:</small>
//                 <ul>
//                   <li className={form.password.length >= 8 ? 'valid' : 'invalid'}>8+ characters</li>
//                   <li className={/[!@#$%^&*(),.?":{}|<>]/.test(form.password) ? 'valid' : 'invalid'}>Special character</li>
//                   <li className={/\d/.test(form.password) ? 'valid' : 'invalid'}>Number</li>
//                   <li className={/[A-Z]/.test(form.password) && /[a-z]/.test(form.password) ? 'valid' : 'invalid'}>Uppercase & lowercase</li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="mb-3">
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="form-control"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <button className="btn btn-accent w-100 mb-2" type="submit">
//               Sign Up
//             </button>
            
//             <p className="text-center small">
//               Already have an account? <a href="/login" className="text-highlight">Login</a>
//             </p>
//           </form>
//         ) : (
//           <div className="verification-box">
//             <h5 className="text-center mb-3">
//               Verify your {verificationStep === 'email' ? 'Email' : 'Phone'}
//             </h5>
//             <p className="text-center small mb-3">
//               We've sent a 6-digit code to your {verificationStep}
//             </p>
            
//             <div className="mb-3">
//               <input
//                 type="text"
//                 placeholder="Enter verification code"
//                 className="form-control text-center"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//                 maxLength="6"
//               />
//             </div>
            
//             <div className="d-flex justify-content-between">
//               <button 
//                 className="btn btn-outline-secondary"
//                 onClick={() => setVerificationStep('form')}
//               >
//                 Back
//               </button>
//               <button 
//                 className="btn btn-accent"
//                 onClick={handleVerify}
//                 disabled={verificationCode.length !== 6}
//               >
//                 Verify
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <p>{popupMessage}</p>
//             <button 
//               className="btn btn-accent"
//               onClick={() => setShowPopup(false)}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [verificationStep, setVerificationStep] = useState('form');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSendVerification = (type) => {
//     const code = generateVerificationCode();
//     setGeneratedCode(code);
    
//     console.log(`Verification code for ${type}:`, code);
    
//     setVerificationStep(type);
//     alert(`Verification code sent to your ${type} (demo code: ${code})`);
//   };

//   const handleVerify = () => {
//     if (verificationCode === generatedCode) {
//       alert('Verification successful!');
//       setVerificationStep('form');
//     } else {
//       alert('Invalid verification code');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     setIsSubmitting(true);
//     setTimeout(() => {
//       alert('Account created successfully!');
//       navigate('/login');
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center" style={{
//       backgroundColor: '#F4F8FB',
//       overflow: 'hidden',
//       position: 'relative'
//     }}>
//       {/* Decorative elements */}
//       <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
//         {[...Array(12)].map((_, i) => (
//           <div 
//             key={i}
//             className="position-absolute rounded-circle"
//             style={{
//               background: 'rgba(166, 45, 105, 0.05)',
//               width: `${Math.random() * 300 + 100}px`,
//               height: `${Math.random() * 300 + 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               transform: 'translate(-50%, -50%)',
//               animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`
//             }}
//           />
//         ))}
//       </div>

//       <motion.div 
//         className="signup-box p-4 p-md-5 rounded-4 shadow-lg"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         style={{
//           backgroundColor: 'white',
//           width: '100%',
//           maxWidth: '500px',
//           position: 'relative',
//           zIndex: 1,
//           border: '1px solid rgba(0,0,0,0.1)'
//         }}
//       >
//         <motion.div
//           className="text-center mb-4"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h2 className="fw-bold mb-2" style={{ color: '#2d5d7b' }}>Create Account</h2>
//           <p className="text-muted">Join our community today</p>
//         </motion.div>
        
//         {verificationStep === 'form' ? (
//           <motion.form 
//             onSubmit={handleSubmit}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="row">
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small text-muted">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small text-muted">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//             </div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small text-muted">Phone Number</label>
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="form-control py-2 px-3 rounded-start-3"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//                 <button 
//                   type="button"
//                   className="btn rounded-end-3"
//                   onClick={() => handleSendVerification('phone')}
//                   disabled={!form.phone}
//                   style={{
//                     backgroundColor: form.phone ? '#2d5d7b' : '#ddd',
//                     color: 'white',
//                     border: 'none',
//                     transition: 'all 0.3s'
//                   }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = form.phone ? '#79b3d7' : '#ddd'}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = form.phone ? '#2d5d7b' : '#ddd'}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small text-muted">Email</label>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control py-2 px-3 rounded-start-3"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//                 <button 
//                   type="button"
//                   className="btn rounded-end-3"
//                   onClick={() => handleSendVerification('email')}
//                   disabled={!form.email}
//                   style={{
//                     backgroundColor: form.email ? '#2d5d7b' : '#ddd',
//                     color: 'white',
//                     border: 'none',
//                     transition: 'all 0.3s'
//                   }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = form.email ? '#79b3d7' : '#ddd'}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = form.email ? '#2d5d7b' : '#ddd'}
//                 >
//                   Verify
//                 </button>
//               </div>
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small text-muted">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.username}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small text-muted">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div className="mb-4" variants={itemVariants}>
//               <label className="form-label small text-muted">Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div variants={itemVariants}>
//               <button
//                 type="submit"
//                 className="btn w-100 py-2 rounded-3"
//                 disabled={isSubmitting}
//                 style={{ 
//                   backgroundColor: '#2d5d7b',
//                   color: 'white',
//                   fontWeight: '600',
//                   transition: 'all 0.3s',
//                   transform: 'translateY(0)',
//                   boxShadow: '0 4px 6px rgba(45, 93, 123, 0.2)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#79b3d7';
//                   e.target.style.transform = 'translateY(-2px)';
//                   e.target.style.boxShadow = '0 6px 8px rgba(45, 93, 123, 0.3)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = '#2d5d7b';
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 4px 6px rgba(45, 93, 123, 0.2)';
//                 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Creating Account...
//                   </>
//                 ) : 'Sign Up'}
//               </button>
//             </motion.div>
            
//             <motion.p 
//               className="text-center mt-3 mb-0 small"
//               variants={itemVariants}
//             >
//               Already have an account?{' '}
//               <a 
//                 href="/login" 
//                 className="text-decoration-none fw-medium"
//                 style={{ 
//                   color: '#A62D69',
//                   transition: 'all 0.3s',
//                   textUnderlineOffset: '2px'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.textDecoration = 'underline';
//                   e.target.style.color = '#e596bd';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.textDecoration = 'none';
//                   e.target.style.color = '#A62D69';
//                 }}
//               >
//                 Login
//               </a>
//             </motion.p>
//           </motion.form>
//         ) : (
//           <motion.div 
//             className="verification-box"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="text-center mb-4">
//               <h4 style={{ color: '#2d5d7b' }}>
//                 Verify your {verificationStep === 'email' ? 'Email' : 'Phone'}
//               </h4>
//               <p className="text-muted small">
//                 We've sent a 6-digit code to your {verificationStep}
//               </p>
//             </div>
            
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter verification code"
//                 className="form-control py-2 px-3 rounded-3 text-center"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s',
//                   fontSize: '1.2rem',
//                   letterSpacing: '2px'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#2d5d7b'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </div>
            
//             <div className="d-flex justify-content-between">
//               <button 
//                 className="btn btn-outline-secondary rounded-3"
//                 onClick={() => setVerificationStep('form')}
//                 style={{
//                   width: '48%',
//                   transition: 'all 0.3s'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.borderColor = '#2d5d7b';
//                   e.target.style.color = '#2d5d7b';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.borderColor = '#ddd';
//                   e.target.style.color = '#6c757d';
//                 }}
//               >
//                 Back
//               </button>
//               <button 
//                 className="btn rounded-3"
//                 onClick={handleVerify}
//                 disabled={verificationCode.length !== 6}
//                 style={{
//                   width: '48%',
//                   backgroundColor: verificationCode.length === 6 ? '#2d5d7b' : '#ddd',
//                   color: 'white',
//                   transition: 'all 0.3s'
//                 }}
//                 onMouseEnter={(e) => {
//                   if (verificationCode.length === 6) {
//                     e.target.style.backgroundColor = '#79b3d7';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (verificationCode.length === 6) {
//                     e.target.style.backgroundColor = '#2d5d7b';
//                   }
//                 }}
//               >
//                 Verify
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Global CSS for animations */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
//             100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
//           }
//           body {
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           }
//           .signup-box {
//             animation: fadeIn 0.5s ease forwards;
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Signup;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [verificationStep, setVerificationStep] = useState('form');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSendVerification = (type) => {
//     const code = generateVerificationCode();
//     setGeneratedCode(code);
    
//     console.log(`Verification code for ${type}:`, code);
    
//     setVerificationStep(type);
//     alert(`Verification code sent to your ${type} (demo code: ${code})`);
//   };

//   const handleVerify = () => {
//     if (verificationCode === generatedCode) {
//       alert('Verification successful!');
//       setVerificationStep('form');
//     } else {
//       alert('Invalid verification code');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     setIsSubmitting(true);
//     setTimeout(() => {
//       alert('Account created successfully!');
//       navigate('/login');
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10 }
//     }
//   };

//   return (
//     <div className="vh-100 d-flex justify-content-center align-items-center" style={{
//       background: 'linear-gradient(135deg, #f9f9f9 0%, #f0e6f0 100%)',
//       overflow: 'hidden',
//       position: 'relative'
//     }}>
//       {/* Decorative elements */}
//       <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
//         {[...Array(15)].map((_, i) => (
//           <div 
//             key={i}
//             className="position-absolute rounded-circle"
//             style={{
//               background: 'rgba(166, 45, 105, 0.05)',
//               width: `${Math.random() * 400 + 100}px`,
//               height: `${Math.random() * 400 + 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               transform: 'translate(-50%, -50%)',
//               animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`,
//               filter: 'blur(10px)'
//             }}
//           />
//         ))}
//       </div>

//       <motion.div 
//         className="signup-box p-4 p-md-5 rounded-4 shadow-lg"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5, type: 'spring' }}
//         style={{
//           background: 'rgba(255, 255, 255, 0.9)',
//           backdropFilter: 'blur(10px)',
//           width: '100%',
//           maxWidth: '500px',
//           position: 'relative',
//           zIndex: 1,
//           border: '1px solid rgba(255, 255, 255, 0.3)',
//           boxShadow: '0 10px 30px rgba(166, 45, 105, 0.1)'
//         }}
//       >
//         {/* Header with accent color */}
//         <motion.div
//           className="text-center mb-4"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, type: 'spring' }}
//         >
//           <div className="position-relative d-inline-block mb-3">
//             <div className="position-absolute bottom-0 start-0 w-100" style={{
//               height: '8px',
//               background: 'rgba(166, 45, 105, 0.2)',
//               borderRadius: '4px',
//               zIndex: -1
//             }} />
//             <h2 className="fw-bold mb-0" style={{ 
//               color: '#A62D69',
//               position: 'relative'
//             }}>Create Account</h2>
//           </div>
//           <p className="text-muted mt-2">Join our vibrant community</p>
//         </motion.div>
        
//         {verificationStep === 'form' ? (
//           <motion.form 
//             onSubmit={handleSubmit}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="row">
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small fw-medium" style={{ color: '#555' }}>First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small fw-medium" style={{ color: '#555' }}>Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//             </div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small fw-medium" style={{ color: '#555' }}>Phone Number</label>
//               <div className="input-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="form-control py-2 px-3 rounded-start-3"
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//                 <motion.button 
//                   type="button"
//                   className="btn rounded-end-3"
//                   onClick={() => handleSendVerification('phone')}
//                   disabled={!form.phone}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   style={{
//                     backgroundColor: form.phone ? '#A62D69' : '#ddd',
//                     color: 'white',
//                     border: 'none',
//                     transition: 'all 0.3s',
//                     fontWeight: '500'
//                   }}
//                 >
//                   Verify
//                 </motion.button>
//               </div>
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small fw-medium" style={{ color: '#555' }}>Email</label>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control py-2 px-3 rounded-start-3"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//                 <motion.button 
//                   type="button"
//                   className="btn rounded-end-3"
//                   onClick={() => handleSendVerification('email')}
//                   disabled={!form.email}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   style={{
//                     backgroundColor: form.email ? '#A62D69' : '#ddd',
//                     color: 'white',
//                     border: 'none',
//                     transition: 'all 0.3s',
//                     fontWeight: '500'
//                   }}
//                 >
//                   Verify
//                 </motion.button>
//               </div>
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small fw-medium" style={{ color: '#555' }}>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.username}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s',
//                   boxShadow: 'none'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div className="mb-3" variants={itemVariants}>
//               <label className="form-label small fw-medium" style={{ color: '#555' }}>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s',
//                   boxShadow: 'none'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div className="mb-4" variants={itemVariants}>
//               <label className="form-label small fw-medium" style={{ color: '#555' }}>Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 className="form-control py-2 px-3 rounded-3"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s',
//                   boxShadow: 'none'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </motion.div>
            
//             <motion.div variants={itemVariants}>
//               <motion.button
//                 type="submit"
//                 className="btn w-100 py-3 rounded-3"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{ 
//                   background: 'linear-gradient(to right, #A62D69, #D176B8)',
//                   color: 'white',
//                   fontWeight: '600',
//                   letterSpacing: '0.5px',
//                   border: 'none',
//                   boxShadow: '0 4px 15px rgba(166, 45, 105, 0.3)'
//                 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Creating Account...
//                   </>
//                 ) : (
//                   <>
//                     <i className="fas fa-user-plus me-2"></i>
//                     Sign Up Now
//                   </>
//                 )}
//               </motion.button>
//             </motion.div>
            
//             <motion.div className="position-relative my-4" variants={itemVariants}>
//               <div style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: 0,
//                 right: 0,
//                 height: "1px",
//                 backgroundColor: "#eee",
//                 zIndex: -1
//               }} />
//               <div className="text-center" style={{ 
//                 backgroundColor: "white",
//                 display: "inline-block",
//                 padding: "0 10px",
//                 color: "#777",
//                 fontSize: '0.9rem'
//               }}>
//                 or continue with
//               </div>
//             </motion.div>
            
//             <motion.div className="d-flex justify-content-center gap-3 mb-4" variants={itemVariants}>
//               <motion.button 
//                 className="btn p-2 rounded-3"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   border: "1px solid #ddd",
//                   transition: "all 0.3s",
//                   width: '50px',
//                   height: '50px'
//                 }}
//               >
//                 <i className="fab fa-google" style={{ color: '#DB4437', fontSize: '1.2rem' }}></i>
//               </motion.button>
//               <motion.button 
//                 className="btn p-2 rounded-3"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   border: "1px solid #ddd",
//                   transition: "all 0.3s",
//                   width: '50px',
//                   height: '50px'
//                 }}
//               >
//                 <i className="fab fa-facebook-f" style={{ color: '#4267B2', fontSize: '1.2rem' }}></i>
//               </motion.button>
//               <motion.button 
//                 className="btn p-2 rounded-3"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 style={{
//                   border: "1px solid #ddd",
//                   transition: "all 0.3s",
//                   width: '50px',
//                   height: '50px'
//                 }}
//               >
//                 <i className="fab fa-apple" style={{ fontSize: '1.2rem' }}></i>
//               </motion.button>
//             </motion.div>
            
//             <motion.p 
//               className="text-center mt-3 mb-0 small"
//               variants={itemVariants}
//             >
//               Already have an account?{' '}
//               <motion.a
//                 href="/login" 
//                 className="text-decoration-none fw-medium"
//                 style={{ 
//                   color: '#A62D69',
//                   transition: 'all 0.3s',
//                   textUnderlineOffset: '2px'
//                 }}
//                 whileHover={{ 
//                   textDecoration: 'underline',
//                   color: '#D176B8'
//                 }}
//               >
//                 Login here
//               </motion.a>
//             </motion.p>
//           </motion.form>
//         ) : (
//           <motion.div 
//             className="verification-box"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="text-center mb-4">
//               <div className="position-relative d-inline-block mb-3">
//                 <div className="position-absolute bottom-0 start-0 w-100" style={{
//                   height: '6px',
//                   background: 'rgba(166, 45, 105, 0.2)',
//                   borderRadius: '4px',
//                   zIndex: -1
//                 }} />
//                 <h4 className="mb-0" style={{ 
//                   color: '#A62D69',
//                   position: 'relative'
//                 }}>
//                   Verify your {verificationStep === 'email' ? 'Email' : 'Phone'}
//                 </h4>
//               </div>
//               <p className="text-muted small">
//                 We've sent a 6-digit code to your {verificationStep}
//               </p>
//             </div>
            
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter verification code"
//                 className="form-control py-3 px-3 rounded-3 text-center"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//                 style={{
//                   border: '1px solid #ddd',
//                   transition: 'all 0.3s',
//                   fontSize: '1.2rem',
//                   letterSpacing: '2px',
//                   boxShadow: 'none'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                 onBlur={(e) => e.target.style.borderColor = '#ddd'}
//               />
//             </div>
            
//             <div className="d-flex justify-content-between gap-3">
//               <motion.button 
//                 className="btn btn-outline-secondary rounded-3 flex-grow-1"
//                 onClick={() => setVerificationStep('form')}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{
//                   transition: 'all 0.3s',
//                   borderColor: '#A62D69',
//                   color: '#A62D69'
//                 }}
//               >
//                 Back
//               </motion.button>
//               <motion.button 
//                 className="btn rounded-3 flex-grow-1"
//                 onClick={handleVerify}
//                 disabled={verificationCode.length !== 6}
//                 whileHover={{ scale: verificationCode.length === 6 ? 1.02 : 1 }}
//                 whileTap={{ scale: verificationCode.length === 6 ? 0.98 : 1 }}
//                 style={{
//                   background: verificationCode.length === 6 ? 'linear-gradient(to right, #A62D69, #D176B8)' : '#ddd',
//                   color: 'white',
//                   border: 'none',
//                   transition: 'all 0.3s'
//                 }}
//               >
//                 Verify
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Global CSS for animations */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
//             100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
//           }
//           body {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           }
//           .signup-box {
//             animation: fadeIn 0.5s ease forwards;
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Signup;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [verificationStep, setVerificationStep] = useState('form');
//   const [verificationCode, setVerificationCode] = useState('');
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Add smooth scrolling effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const bubbles = document.querySelectorAll('.bubble');
      
//       bubbles.forEach((bubble, index) => {
//         const speed = 0.2 + (index * 0.02);
//         const yPos = -scrollPosition * speed;
//         bubble.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSendVerification = (type) => {
//     const code = generateVerificationCode();
//     setGeneratedCode(code);
    
//     console.log(`Verification code for ${type}:`, code);
    
//     setVerificationStep(type);
//     alert(`Verification code sent to your ${type} (demo code: ${code})`);
//   };

//   const handleVerify = () => {
//     if (verificationCode === generatedCode) {
//       alert('Verification successful!');
//       setVerificationStep('form');
//     } else {
//       alert('Invalid verification code');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     setIsSubmitting(true);
//     setTimeout(() => {
//       alert('Account created successfully!');
//       navigate('/login');
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10 }
//     }
//   };

//   return (
//     <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{
//       background: 'linear-gradient(135deg, #f9f9f9 0%, #f0e6f0 100%)',
//       overflow: 'hidden',
//       position: 'relative',
//       padding: '2rem 0'
//     }}>
//       {/* Decorative elements with bubble class for parallax */}
//       <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
//         {[...Array(15)].map((_, i) => (
//           <div 
//             key={i}
//             className="position-absolute rounded-circle bubble"
//             style={{
//               background: 'rgba(166, 45, 105, 0.05)',
//               width: `${Math.random() * 400 + 100}px`,
//               height: `${Math.random() * 400 + 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               transform: 'translate(-50%, -50%)',
//               animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`,
//               filter: 'blur(10px)',
//               transition: 'transform 0.1s ease-out'
//             }}
//           />
//         ))}
//       </div>

//       <motion.div 
//         className="signup-box p-4 p-md-5 rounded-4 shadow-lg my-5"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5, type: 'spring' }}
//         style={{
//           background: 'rgba(255, 255, 255, 0.9)',
//           backdropFilter: 'blur(10px)',
//           width: '100%',
//           maxWidth: '500px',
//           position: 'relative',
//           zIndex: 1,
//           border: '1px solid rgba(255, 255, 255, 0.3)',
//           boxShadow: '0 10px 30px rgba(166, 45, 105, 0.1)',
//           margin: '2rem 0'
//         }}
//       >
//         {/* Header with accent color */}
//         <motion.div
//           className="text-center mb-4"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, type: 'spring' }}
//         >
//           <div className="position-relative d-inline-block mb-3">
//             <div className="position-absolute bottom-0 start-0 w-100" style={{
//               height: '8px',
//               background: 'rgba(166, 45, 105, 0.2)',
//               borderRadius: '4px',
//               zIndex: -1
//             }} />
//             <h2 className="fw-bold mb-0" style={{ 
//               color: '#A62D69',
//               position: 'relative'
//             }}>Create Account</h2>
//           </div>
//           <p className="text-muted mt-2">Join our vibrant community</p>
//         </motion.div>
        
//         {verificationStep === 'form' ? (
//           <motion.form 
//             onSubmit={handleSubmit}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <div className="row">
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small fw-medium" style={{ color: '#555' }}>First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//               <motion.div className="mb-3 col-md-6" variants={itemVariants}>
//                 <label className="form-label small fw-medium" style={{ color: '#555' }}>Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control py-2 px-3 rounded-3"
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                   style={{
//                     border: '1px solid #ddd',
//                     transition: 'all 0.3s',
//                     boxShadow: 'none'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#A62D69'}
//                   onBlur={(e) => e.target.style.borderColor = '#ddd'}
//                 />
//               </motion.div>
//             </div>
            
//             {/* ... rest of your form fields ... */}
            
//             <motion.div variants={itemVariants}>
//               <motion.button
//                 type="submit"
//                 className="btn w-100 py-3 rounded-3"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{ 
//                   background: 'linear-gradient(to right, #A62D69, #D176B8)',
//                   color: 'white',
//                   fontWeight: '600',
//                   letterSpacing: '0.5px',
//                   border: 'none',
//                   boxShadow: '0 4px 15px rgba(166, 45, 105, 0.3)'
//                 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Creating Account...
//                   </>
//                 ) : (
//                   <>
//                     <i className="fas fa-user-plus me-2"></i>
//                     Sign Up Now
//                   </>
//                 )}
//               </motion.button>
//             </motion.div>
            
//             {/* ... rest of your form ... */}
//           </motion.form>
//         ) : (
//           <motion.div 
//             className="verification-box"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Verification UI */}
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Global CSS for animations */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
//             100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
//           }
//           body {
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//             overflow-x: hidden;
//           }
//           .signup-box {
//             animation: fadeIn 0.5s ease forwards;
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           html {
//             scroll-behavior: smooth;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Signup;








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