// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';
 
// const courseImages = [
//   'https://www.shutterstock.com/image-vector/math-background-260nw-628074927.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-social-science-background_23-2149323752.jpg',
//   'https://img.freepik.com/free-vector/hand-painted-watercolor-english-background_23-2149430414.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-hindi-background_23-2149430416.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-physics-background_23-2149323754.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2149323755.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-biology-background_23-2149323753.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-computer-science-background_23-2149323756.jpg',
//   'https://img.freepik.com/free-vector/hand-drawn-geography-background_23-2149323757.jpg'
// ];
 
// const temptingQuotes = [
//   "🚀 92% of students saw grade improvements within 3 months!",
//   "💡 Limited seats available - Don't miss your chance to excel!",
//   "🎓 Join 25,000+ students who transformed their academic journey",
//   "⭐ Our students average 1.5 grade points higher after 6 months",
//   "🔥 Last chance to enroll at this price - Offer ends soon!",
//   "📈 85% of our students report feeling more confident in exams",
//   "✨ Exclusive content you won't find anywhere else",
//   "🏆 Top-performing students in your school use our platform",
//   "⏳ Only 3 days left to enroll at this special price",
//   "📚 Get access to all subjects for less than ₹10/day"
// ];
 
// function Pricing() {
//   const navigate = useNavigate();
//   const isMobile = window.innerWidth <= 768;
//   const isTablet = window.innerWidth <= 992;
//   const [currentQuote, setCurrentQuote] = useState(0);
 
//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);
   
//     // Check if we need to scroll to courses section
//     const scrollToCourses = localStorage.getItem('scrollToCourses');
//     if (scrollToCourses === 'true') {
//       setTimeout(() => {
//         const coursesSection = document.getElementById('courses-section');
//         if (coursesSection) {
//           coursesSection.scrollIntoView({ behavior: 'smooth' });
//         }
//         localStorage.removeItem('scrollToCourses');
//       }, 500);
//     }
 
//     // Set up quote rotation every 5 seconds
//     const quoteInterval = setInterval(() => {
//       setCurrentQuote((prev) => (prev + 1) % temptingQuotes.length);
//     }, 5000);
 
//     return () => clearInterval(quoteInterval);
//   }, []);
 
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };
 
//   const handleBuyAll = async () => {
//     const res = await loadRazorpayScript();
//     if (!res) {
//       alert('Razorpay SDK failed to load. Check your internet.');
//       return;
//     }
 
//     const options = {
//       key: 'rzp_test_X0ttERlr0afucZ',
//       amount: 360000,
//       currency: 'INR',
//       name: 'School Learning Platform',
//       description: 'Yearly Super Saver Plan',
//       image: 'https://yourdomain.com/logo.png',
//       handler: function (response) {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#A62D69',
//       }
//     };
 
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };
 
//   const plans = [
//     {
//       name: 'YEARLY SUPER SAVER',
//       price: '₹3,600/year',
//       perDay: 'Only ₹10/day',
//       features: [
//         'Access to ALL subjects below',
//         'Certifications included',
//         '24/7 Mentor Support',
//         'Downloadable resources',
//         'Progress tracking',
//         'New materials added regularly'
//       ],
//       badge: 'LIMITED TIME OFFER!',
//       saving: 'Save 70%'
//     }
//   ];
 
//   const courses = [
//     {
//       title: "Mathematics (7th-12th Grade)",
//       instructor: "CBSE Curriculum",
//       rating: "4.8",
//       students: "15,345",
//       originalPrice: "₹12,000",
//       image: courseImages[0]
//     },
//     {
//       title: "Science (7th-10th Grade)",
//       instructor: "NCERT Syllabus",
//       rating: "4.7",
//       students: "12,901",
//       originalPrice: "₹15,000",
//       image: courseImages[1]
//     },
//     {
//       title: "Social Studies (7th-10th Grade)",
//       instructor: "State Board Syllabus",
//       rating: "4.6",
//       students: "10,678",
//       originalPrice: "₹10,000",
//       image: courseImages[2]
//     },
//     {
//       title: "English (7th-12th Grade)",
//       instructor: "CBSE Curriculum",
//       rating: "4.5",
//       students: "8,432",
//       originalPrice: "₹8,000",
//       image: courseImages[3]
//     },
//     {
//       title: "Hindi (7th-12th Grade)",
//       instructor: "NCERT Syllabus",
//       rating: "4.4",
//       students: "7,210",
//       originalPrice: "₹8,000",
//       image: courseImages[4]
//     },
//     {
//       title: "Physics (11th-12th Grade)",
//       instructor: "CBSE Curriculum",
//       rating: "4.8",
//       students: "9,654",
//       originalPrice: "₹12,000",
//       image: courseImages[5]
//     },
//     {
//       title: "Chemistry (11th-12th Grade)",
//       instructor: "NCERT Syllabus",
//       rating: "4.7",
//       students: "8,876",
//       originalPrice: "₹12,000",
//       image: courseImages[6]
//     },
//     {
//       title: "Biology (11th-12th Grade)",
//       instructor: "State Board Syllabus",
//       rating: "4.6",
//       students: "7,543",
//       originalPrice: "₹12,000",
//       image: courseImages[7]
//     },
//     {
//       title: "Computer Science (11th-12th Grade)",
//       instructor: "CBSE Curriculum",
//       rating: "4.9",
//       students: "6,987",
//       originalPrice: "₹15,000",
//       image: courseImages[8]
//     },
//     {
//       title: "Geography (11th-12th Grade)",
//       instructor: "NCERT Syllabus",
//       rating: "4.5",
//       students: "5,321",
//       originalPrice: "₹10,000",
//       image: courseImages[9]
//     }
//   ];
 
//   return (
//     <section style={{ backgroundColor: '#f5f7fa' }} className="py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold display-5 mb-3" style={{ color: '#2D5D7B' }}>
//             School Subjects You'll Get Access To (7th-12th Grade)
//           </h2>
//           <p className="lead" style={{ color: '#5A6A7D' }}>
//             All included in one affordable yearly membership
//           </p>
//         </div>
 
//         {/* Pricing Plan Section */}
//         <div className="row justify-content-center mb-5">
//           <div className="col-lg-8">
//             <div className="p-4 rounded-4 text-center position-relative border border-3 border-warning"
//               style={{
//                 backgroundColor: '#fff',
//                 boxShadow: '0 10px 30px rgba(166, 45, 105, 0.15)',
//                 background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
//               }}>
//               <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark px-3 py-2 fw-bold">
//                 {plans[0].badge}
//               </span>
 
//               <h3 className="fw-bold mb-3 mt-3" style={{ color: '#2D5D7B' }}>{plans[0].name}</h3>
 
//               <div className="d-flex justify-content-center align-items-baseline mb-2">
//                 <h2 className="fw-bold me-2" style={{ color: '#A62D69', fontSize: '2.5rem' }}>{plans[0].price}</h2>
//                 <span className="text-success fw-bold">{plans[0].saving}</span>
//               </div>
 
//               <p className="text-muted mb-4 fw-bold">{plans[0].perDay}</p>
 
//               <div className="row justify-content-center mb-4">
//                 <div className="col-md-8">
//                   <ul className="list-unstyled text-start">
//                     {plans[0].features.map((feature, idx) => (
//                       <li key={idx} className="mb-2 d-flex align-items-start">
//                         <span className="me-2" style={{ color: '#28a745' }}>✓</span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
 
//               <button
//                 className="btn btn-lg w-100 py-3 fw-bold"
//                 style={{
//                   background: 'linear-gradient(135deg, #A62D69, #D43D8B)',
//                   color: '#fff',
//                   borderRadius: '8px',
//                   fontSize: '1.2rem',
//                   boxShadow: '0 4px 15px rgba(166, 45, 105, 0.4)'
//                 }}
//                 onClick={handleBuyAll}
//               >
//                 GET ALL SUBJECTS NOW - ₹3,600/YEAR
//               </button>
 
//               <div className="mt-3 small text-muted">
//                 <span className="d-inline-block me-2">✅ 7-day money-back guarantee</span>
//                 <span className="d-inline-block">✅ One-time payment</span>
//               </div>
//             </div>
//           </div>
//         </div>
 
//         {/* Courses Section with ID for scrolling */}
//         <div id="courses-section">
//           {/* Desktop Course Grid */}
//           {!isMobile && !isTablet && (
//             <div className="row g-4 mb-5">
//               {courses.map((course, index) => (
//                 <div className="col-lg-3 col-md-4 col-sm-6" key={index} style={{ cursor: 'pointer' }}
//                   onClick={() => navigate(`/course/${index}`, { state: course })}>
//                   <div className="h-100 rounded-3 overflow-hidden"
//                     style={{
//                       backgroundColor: '#fff',
//                       boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
//                       transition: 'transform 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
//                     onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}>
//                     <img src={course.image} className="img-fluid w-100"
//                       style={{ height: '135px', objectFit: 'cover' }} alt={course.title} />
//                     <div className="p-3">
//                       <h5 className="fw-bold mb-1" style={{ color: '#2D5D7B', fontSize: '1rem' }}>{course.title}</h5>
//                       <p className="small text-muted mb-2">By {course.instructor}</p>
//                       <div className="d-flex align-items-center mb-2">
//                         <span className="text-warning fw-bold me-2">{course.rating}</span>
//                         <div className="text-warning small">{[...Array(5)].map((_, i) => (<span key={i}>★</span>))}</div>
//                         <span className="ms-2 small text-muted">({course.students})</span>
//                       </div>
//                       <div className="d-flex justify-content-between">
//                         <span className="text-decoration-line-through text-muted small">{course.originalPrice}</span>
//                         <span className="badge bg-success">Included</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
 
//           {/* Carousel for Mobile/Tablet */}
//           {(isMobile || isTablet) && (
//             <div className="mb-5">
//               <Carousel indicators={false} interval={3000} variant="dark">
//                 {[0, 3, 6].map(startIdx => (
//                   <Carousel.Item key={startIdx}>
//                     <div className="row g-4">
//                       {courses.slice(startIdx, startIdx + (isMobile ? 2 : 3)).map((course, idx) => (
//                         <div className={isMobile ? "col-6" : "col-md-4"} key={idx} style={{ cursor: 'pointer' }}
//                           onClick={() => navigate(`/course/${startIdx + idx}`, { state: courses[startIdx + idx] })}>
//                           <div className="h-100 rounded-3 overflow-hidden"
//                             style={{ backgroundColor: '#fff', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
//                             <img src={course.image} className="img-fluid w-100"
//                               style={{ height: '135px', objectFit: 'cover' }} alt={course.title} />
//                             <div className="p-3">
//                               <h5 className="fw-bold mb-1" style={{ color: '#2D5D7B', fontSize: '0.9rem' }}>{course.title}</h5>
//                               <p className="small text-muted mb-2">By {course.instructor}</p>
//                               <div className="d-flex align-items-center mb-2">
//                                 <span className="text-warning fw-bold me-1" style={{ fontSize: '0.8rem' }}>{course.rating}</span>
//                                 <div className="text-warning small">{[...Array(5)].map((_, i) => (<span key={i}>★</span>))}</div>
//                                 <span className="ms-1 small text-muted" style={{ fontSize: '0.7rem' }}>({course.students})</span>
//                               </div>
//                               <div className="d-flex justify-content-between align-items-center">
//                                 <span className="text-decoration-line-through text-muted small">{course.originalPrice}</span>
//                                 <span className="badge bg-success small">Included</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             </div>
//           )}
//         </div>
 
//         {/* Rotating Tempting Quotes */}
//         <div className="text-center mt-5 pt-4">
//           <div className="p-4 rounded-4 d-inline-block"
//             style={{
//               backgroundColor: 'rgba(45, 93, 123, 0.1)',
//               border: '2px dashed #2D5D7B',
//               maxWidth: '600px',
//               minHeight: '150px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//             <motion.div
//               key={currentQuote}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 fontSize: '1.2rem',
//                 fontWeight: '600',
//                 color: '#2D5D7B'
//               }}
//             >
//               {temptingQuotes[currentQuote]}
//             </motion.div>
//           </div>
//           <div className="d-flex justify-content-center gap-3 mt-4">
//             <button
//               className="btn fw-bold py-3 px-4"
//               style={{
//                 background: 'linear-gradient(135deg, #2D5D7B, #3a7ca5)',
//                 color: '#fff',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 15px rgba(45, 93, 123, 0.4)'
//               }}
//               onClick={handleBuyAll}
//             >
//               YES, I WANT ACCESS!
//             </button>
//           </div>
//           <p className="small mt-3 text-muted">Secure payment via UPI/Cards/NetBanking</p>
//         </div>
//       </div>
//     </section>
//   );
// }
 
// export default Pricing;
 


// Pricing.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const NAVBAR_HEIGHT = 60; // Adjust to your fixed navbar height

const courseImages = [
  'https://www.shutterstock.com/image-vector/math-background-260nw-628074927.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-social-science-background_23-2149323752.jpg',
  'https://img.freepik.com/free-vector/hand-painted-watercolor-english-background_23-2149430414.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-hindi-background_23-2149430416.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-physics-background_23-2149323754.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2149323755.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-biology-background_23-2149323753.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-computer-science-background_23-2149323756.jpg',
  'https://img.freepik.com/free-vector/hand-drawn-geography-background_23-2149323757.jpg'
];

const temptingQuotes = [
  "🚀 92% of students saw grade improvements within 3 months!",
  "💡 Limited seats available - Don't miss your chance to excel!",
  "🎓 Join 25,000+ students who transformed their academic journey",
  "⭐ Our students average 1.5 grade points higher after 6 months",
  "🔥 Last chance to enroll at this price - Offer ends soon!",
  "📈 85% of our students report feeling more confident in exams",
  "✨ Exclusive content you won't find anywhere else",
  "🏆 Top-performing students in your school use our platform",
  "⏳ Only 3 days left to enroll at this special price",
  "📚 Get access to all subjects for less than ₹10/day"
];

function Pricing() {
  useEffect(() => {
    document.title = "Pricing|Prime Minds - Your Smart Learning Platform";
  }, []);
  
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 992;

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollToCourses = localStorage.getItem('scrollToCourses');
    if (scrollToCourses === 'true') {
      setTimeout(() => {
        document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
        localStorage.removeItem('scrollToCourses');
      }, 500);
    }
    const id = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % temptingQuotes.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBuyAll = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      return;
    }

    // In a real app, you would get these details from your backend
    const options = {
      key: 'rzp_test_X0ttERlr0afucZ', // Replace with your actual Razorpay key
      amount: 360000, // 3600 INR in paise
      currency: 'INR',
      name: 'Prime Minds Learning Platform',
      description: 'Yearly Super Saver Plan',
      image: 'https://example.com/your_logo.png', // Add your logo URL
      order_id: '', // You would get this from your backend
      handler: function(response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Here you would typically verify the payment on your backend
        // and then provide access to the user
      },
      prefill: {
        name: 'Customer Name', // You can get this from user input
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Customer address' // Optional
      },
      theme: {
        color: '#A62D69'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    
    rzp.on('payment.failed', function(response) {
      alert(`Payment failed! Error: ${response.error.description}`);
      console.error(response.error);
    });
  };

  const plans = [{
    name: 'YEARLY SUPER SAVER',
    price: '₹3,600/year',
    perDay: 'Only ₹10/day',
    features: [
      'Access to ALL subjects below',
      'Certifications included',
      '24/7 Mentor Support',
      'Downloadable resources',
      'Progress tracking',
      'New materials added regularly'
    ],
    badge: 'LIMITED TIME OFFER!',
    saving: 'Save 70%'
  }];

  // Build courses array from images
  const courses = courseImages.map((img, i) => ({
    title: ['Mathematics','Science','Social Studies','English','Hindi','Physics','Chemistry','Biology','Computer Science','Geography'][i],
    instructor: ['CBSE','NCERT','State Board','CBSE','NCERT','CBSE','NCERT','State Board','CBSE','NCERT'][i] + ' Curriculum',
    rating: (4.5 + (i % 5) * 0.1).toFixed(1),
    students: `${10000 + i * 1000}`,
    originalPrice: `₹${10000 + i * 2000}`,
    image: img
  }));

  return (
    <div style={{ paddingTop: NAVBAR_HEIGHT }}>
      <section className="py-5" style={{ backgroundColor: '#f5f7fa' }}>
        <div className="container">
          <div className="text-center mb-5" style={{ position: 'relative', top: -NAVBAR_HEIGHT / 2 }}>
            <h2 style={{
              color: '#2D5D7B',
              paddingTop: NAVBAR_HEIGHT / 2,
              marginTop: -NAVBAR_HEIGHT / 2
            }} className="fw-bold display-5 mb-3">
              You'll Get Access To (7th–12th Grade)
            </h2>
            <p className="lead" style={{ color: '#5A6A7D' }}>
              All included in one affordable yearly membership
            </p>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="p-4 rounded-4 position-relative border border-3 border-warning text-center"
                   style={{ background: 'linear-gradient(135deg,#fff,#f8f9fa)', boxShadow: '0 10px 30px rgba(166,45,105,0.15)' }}>
                <span className="position-absolute top-0 start-50 translate-middle badge bg-warning">
                  {plans[0].badge}
                </span>
                <h3 className="fw-bold mt-3 mb-3" style={{ color: '#2D5D7B' }}>{plans[0].name}</h3>
                <div className="d-flex justify-content-center align-items-baseline mb-2">
                  <h2 className="fw-bold me-2" style={{ color: '#A62D69', fontSize: '2.5rem' }}>{plans[0].price}</h2>
                  <span className="text-success fw-bold">{plans[0].saving}</span>
                </div>
                <p className="text-muted mb-4 fw-bold">{plans[0].perDay}</p>
                <ul className="list-unstyled text-start mb-4">
                  {plans[0].features.map((f, idx) => <li key={idx}>✓ {f}</li>)}
                </ul>
                <button onClick={handleBuyAll} className="btn btn-lg w-100 py-3 fw-bold"
                        style={{ 
                          background: 'linear-gradient(135deg, #2D5D7B, #A62D69)', 
                          color: '#fff', 
                          borderRadius: '8px', 
                          boxShadow: '0 4px 15px rgba(166,45,105,0.4)'
                        }}>
                  GET ALL SUBJECTS NOW – ₹3,600/YEAR
                </button>
                <div className="mt-3 small text-muted"> · ✅ One‑time payment</div>
              </div>
            </div>
          </div>

          <div id="courses-section">
            {!(isMobile || isTablet) ? (
              <div className="row g-4 mb-5">
                {courses.map((c, idx) => (
                  <div key={idx} className="col-lg-3 col-md-4 col-sm-6" style={{ cursor: 'pointer' }}
                       onClick={() => navigate(`/course/${idx}`, { state: c })}>
                    <div className="h-100 rounded-3 overflow-visible"
                         style={{ overflow: 'visible', backgroundColor: '#fff', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}
                         onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                         onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                      <img src={c.image} alt={c.title} className="img-fluid w-100" style={{ height: '135px', objectFit: 'cover' }} />
                      <div className="p-3">
                        <h5 className="fw-bold mb-1" style={{ color: '#2D5D7B' }}>{c.title}</h5>
                        <p className="small text-muted mb-2">By {c.instructor}</p>
                        <div className="d-flex align-items-center mb-2">
                          <span className="text-warning me-2">{c.rating}</span>
                          <div className="text-warning small">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
                          <span className="ms-2 small text-muted">({c.students})</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-decoration-line-through text-muted small">{c.originalPrice}</span>
                          <span className="badge bg-success"
                                style={{ width: 'auto', minWidth: '57px', padding: '0.25em 0.5em', display: 'inline-block', textAlign: 'center' }}>
                            Included
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Carousel indicators={false} interval={3000} className="mb-5">
                {[0, 3, 6].map(start => (
                  <Carousel.Item key={start}>
                    <div className="row g-4">
                      {courses.slice(start, start + (isMobile ? 2 : 3)).map((c, i) => (
                        <div key={i} className={isMobile ? 'col-6' : 'col-md-4'} style={{ cursor: 'pointer' }}
                             onClick={() => navigate(`/course/${start + i}`, { state: c })}>
                          <div className="h-100 rounded-3 overflow-visible"
                               style={{ overflow: 'visible', backgroundColor: '#fff', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                            <img src={c.image} alt={c.title} className="img-fluid w-100" style={{ height: '135px', objectFit: 'cover' }} />
                            <div className="p-3">
                              <h5 className="fw-bold mb-1" style={{ color: '#2D5D7B', fontSize: '0.9rem' }}>{c.title}</h5>
                              <p className="small text-muted mb-2">By {c.instructor}</p>
                              <div className="d-flex align-items-center mb-2">
                                <span className="text-warning me-1" style={{ fontSize: '0.8rem' }}>{c.rating}</span>
                                <div className="text-warning small">{[...Array(5)].map((_, k) => <span key={k}>★</span>)}</div>
                                <span className="ms-1 small text-muted" style={{ fontSize: '0.7rem' }}>({c.students})</span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="text-decoration-line-through text-muted small">{c.originalPrice}</span>
                                <span className="badge bg-success small"
                                      style={{ width: 'auto', minWidth: '57px', padding: '0.25em 0.5em', display: 'inline-block', textAlign: 'center' }}>
                                  Included
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>

          <div className="text-center mt-5 pt-4">
            <div className="p-4 rounded-4 d-inline-block" style={{ backgroundColor: 'rgba(45,93,123,0.1)', border: '2px dashed #2D5D7B', minHeight: '150px', maxWidth: '600px' }}>
              <motion.div key={currentQuote} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} style={{ color: '#2D5D7B', fontSize: '1.2rem', fontWeight: 600 }}>
                {temptingQuotes[currentQuote]}
              </motion.div>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn fw-bold py-3 px-4"
                      style={{ background: 'linear-gradient(135deg,#2D5D7B,#3a7ca5)', color: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(45,93,123,0.4)' }}
                      onClick={handleBuyAll}>
                YES, I WANT ACCESS!
              </button>
            </div>
            <p className="small text-muted mt-3">Secure payment via UPI/Cards/NetBanking</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;