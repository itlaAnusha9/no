


// // import React from 'react';
// // import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // import Navbar from './modules/home/Navbar';
// // import HeroSection from './modules/home/HeroSection';
// // import Features from './modules/home/Features';
// // import Courses from './modules/home/Courses';
// // import CourseDetail from './modules/home/CourseDetails';
// // import HowItWorks from './modules/home/HowItWorks';
// // import Pricing from './modules/home/Pricing';
// // import Testimonials from './modules/home/Testimonials';
// // import AppDownload from './modules/home/AppDownload';
// // import Footer from './modules/home/Footer';
// // import FAQs from './modules/home/FAQs';
// // import Contact from './modules/home/Contact';
// // import FreeDemo from './modules/home/FreeDemo';
// // import ProfilePage from './modules/home/ProfilePage';
// // import FloatingChatBot from './modules/home/FloatingChatBot';
// // import AIDemo from './modules/home/AIDemo';
// // import Login from './modules/login/Login';
// // import Signup from './modules/login/Signup';
// // import ForgotPassword from './modules/login/ForgotPassword';

// // import Navbarrr from './modules/student/Navbarrr';
// // import Home1 from './modules/student/Home1';
// // import Learn from './modules/student/Learn';
// // import Classroom from './modules/student/Classroom';
// // import Practice from './modules/student/Practice';
// // import Career from './modules/student/Career';
// // import Mentorship from './modules/student/Mentorship';
// // import Chatbox from './modules/student/Chatbox';

// // // Parent Components
// // import ParentDashboard from './modules/parent/ParentDashboard';
// // import Attendance from './modules/parent/Attendance';
// // import ChildProfile from './modules/parent/ChildProfile';
// // import Fees from './modules/parent/Fees';
// // import HomeWork from './modules/parent/Homework'; 
// // import MockTestReports from './modules/parent/MockTestReports';
// // import Progress from './modules/parent/Progress';
// // import StudyPlanner from './modules/parent/StudyPlanner';

// // // import './App.css';
// // // import '../../App.css';  // Goes up two levels to src/
// // import './modules/parent/styles.css';
// // function LandingPage() {
// //   return (
// //     <>
// //       <HeroSection />
// //       <Features />
// //       <Courses />
// //       <HowItWorks />
// //       <Pricing />
// //       <FloatingChatBot />
// //       <Testimonials />
// //       <AppDownload />
// //     </>
// //   );
// // }

// // // Protected route component
// // const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = true; // Replace with your actual authentication check
// //   return isAuthenticated ? children : <Navigate to="/login" replace />;
// // };

// // // Role-based route component
// // const RoleRoute = ({ children, requiredRole }) => {
// //   const userRole = 'parent'; // Replace with actual role from your auth context
// //   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// // };

// // function App() {
// //   const location = useLocation();

// //   const hideNavbarFooter = ['/login', '/signup', '/forgot-password'].includes(location.pathname);
// //   const isStudentPage = ['/learn', '/classroom', '/practice', '/career', '/mentorship', '/home1'].some(path =>
// //     location.pathname.startsWith(path)
// //   );
// //   const isParentPage = location.pathname.startsWith('/parent');

// //   return (
// //     <div className="bg-white text-black">
// //       {/* Main Navbar (not for auth, student, or parent routes) */}
// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
// //       {/* Student Navbar */}
// //       {isStudentPage && <Navbarrr />}
// //       {/* Parent Navbar would go here if you have one */}

// //       <Routes>
// //         {/* Public/Main Routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/courses" element={<Courses />} />
// //         <Route path="/course/:id" element={<CourseDetail />} />
// //         <Route path="/free-demo" element={<FreeDemo />} />
// //         <Route path="/pricing" element={<Pricing />} />
// //         <Route path="/faqs" element={<FAQs />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/ai-demo" element={<AIDemo />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />

// //         {/* Protected Student Routes */}
// //         <Route 
// //           path="/home1" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Home1 />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/learn" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Learn />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/classroom" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Classroom />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/practice" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Practice />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/career" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Career />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/mentorship" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="student">
// //                 <Mentorship />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />

// //         {/* Protected Parent Routes */}
// //         <Route 
// //           path="/parent/dashboard" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <ParentDashboard />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/attendance" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <Attendance />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/child-profile" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <ChildProfile />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/fees" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <Fees />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/homework" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <HomeWork />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/reports" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <MockTestReports />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/progress" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <Progress />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />
// //         <Route 
// //           path="/parent/study-planner" 
// //           element={
// //             <ProtectedRoute>
// //               <RoleRoute requiredRole="parent">
// //                 <StudyPlanner />
// //               </RoleRoute>
// //             </ProtectedRoute>
// //           } 
// //         />

// //         {/* Fallback */}
// //         <Route path="*" element={<Navigate to="/" />} />
// //       </Routes>

// //       {/* Main footer (exclude auth, student, and parent routes) */}
// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

// //       {/* Student Chatbox shown only on student pages */}
// //       {isStudentPage && (
// //         <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
// //           <Chatbox />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;

// App.js
// import React from 'react';
// import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
// import Navbar from './modules/home/Navbar';
// import HeroSection from './modules/home/HeroSection';
// import Features from './modules/home/Features';
// import Courses from './modules/home/Courses';
// import CourseDetail from './modules/home/CourseDetails';
// import HowItWorks from './modules/home/HowItWorks';
// import Pricing from './modules/home/Pricing';
// import Testimonials from './modules/home/Testimonials';
// import AppDownload from './modules/home/AppDownload';
// import Footer from './modules/home/Footer';
// import FAQs from './modules/home/FAQs';
// import Contact from './modules/home/Contact';
// import FreeDemo from './modules/home/FreeDemo';
// import ProfilePage from './modules/home/ProfilePage';
// import FloatingChatBot from './modules/home/FloatingChatBot';
// import AIDemo from './modules/home/AIDemo';
// import Login from './modules/login/Login';
// import Signup from './modules/login/Signup';
// import ForgotPassword from './modules/login/ForgotPassword';

// import Navbarrr from './modules/student/Navbarrr';
// import Home1 from './modules/student/Home1';
// import Learn from './modules/student/Learn';
// import Classroom from './modules/student/Classroom';
// import Practice from './modules/student/Practice';
// import Career from './modules/student/Career';
// import Mentorship from './modules/student/Mentorship';
// import Chatbox from './modules/student/Chatbox';

// // Parent Components - all imports with consistent case
// import ParentDashboard from './modules/parent/ParentDashboard';
// import Attendance from './modules/parent/Attendance';
// import ChildProfile from './modules/parent/ChildProfile';
// import Fees from './modules/parent/Fees';
// // import Homework from './modules/parent/Homework'; // Fixed case to match filename
// // import Homework from './modules/parent/Homework';
//  import Homework from './modules/parent/Homework'; 
// import MockTestReports from './modules/parent/MockTestReports';
// import Progress from './modules/parent/Progress';
// import StudyPlanner from './modules/parent/StudyPlanner';

// import './modules/parent/styles.css';


// function LandingPage() {
//   return (
//     <>
//       <HeroSection />
//       <Features />
//       <Courses />
//       <HowItWorks />
//       <Pricing />
//       <FloatingChatBot />
//       <Testimonials />
//       <AppDownload />
//     </>
//   );
// }

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('userToken');
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// const RoleRoute = ({ children, requiredRole }) => {
//   const userRole = localStorage.getItem('userRole');
//   if (!userRole) return <Navigate to="/login" replace />;
//   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// };

// function App() {
//   const location = useLocation();

//   const hideNavbarFooter = ['/login', '/signup', '/forgot-password', '/unauthorized'].includes(location.pathname);
//   const isStudentPage = ['/learn', '/classroom', '/practice', '/career', '/mentorship', '/student/dashboard'].some(path =>
//     location.pathname.startsWith(path)
//   );
//   const isParentPage = location.pathname.startsWith('/parent');

//   return (
//     <div className="app-container">
//       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
//       {isStudentPage && <Navbarrr />}

//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/course/:id" element={<CourseDetail />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/app-download" element={<AppDownload />} />
//         <Route path="/faqs" element={<FAQs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/free-demo" element={<FreeDemo />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/ai-demo" element={<AIDemo />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/unauthorized" element={
//           <div className="unauthorized-page">
//             <h1>401 - Unauthorized Access</h1>
//             <p>You don't have permission to access this page.</p>
//             <Link to="/" className="btn btn-primary">Return Home</Link>
//           </div>
//         } />

//         {/* Student Routes */}
//         <Route path="/student/dashboard" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Home1 />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/learn" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Learn />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/classroom" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Classroom />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/practice" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Practice />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/career" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Career />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/mentorship" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="student">
//               <Mentorship />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />

//         {/* Parent Routes */}
//         <Route path="/parent/dashboard" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <ParentDashboard />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/attendance" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <Attendance />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/child-profile" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <ChildProfile />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/fees" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <Fees />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/homework" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <Homework /> {/* Now using correct case */}
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/reports" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <MockTestReports />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/progress" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <Progress />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />
//         <Route path="/parent/study-planner" element={
//           <ProtectedRoute>
//             <RoleRoute requiredRole="parent">
//               <StudyPlanner />
//             </RoleRoute>
//           </ProtectedRoute>
//         } />

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

//       {isStudentPage && (
//         <div className="student-chatbox-container">
//           <Chatbox />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// Home Modules
import Navbar from './modules/home/Navbar';
import HeroSection from './modules/home/HeroSection';
import Features from './modules/home/Features';
import Courses from './modules/home/Courses';
import CourseDetail from './modules/home/CourseDetails';
import HowItWorks from './modules/home/HowItWorks';
import Pricing from './modules/home/Pricing';
import Testimonials from './modules/home/Testimonials';
import AppDownload from './modules/home/AppDownload';
import Footer from './modules/home/Footer';
import FAQs from './modules/home/FAQs';
import Contact from './modules/home/Contact';
import FreeDemo from './modules/home/FreeDemo';
import ProfilePage from './modules/home/ProfilePage';
import FloatingChatBot from './modules/home/FloatingChatBot';
import AIDemo from './modules/home/AIDemo';

// Auth Modules
import Login from './modules/login/Login';
import Signup from './modules/login/Signup';
import ForgotPassword from './modules/login/ForgotPassword';

// Student Modules
import Navbarrr from './modules/student/Navbarrr';
import Home1 from './modules/student/Home1';
import Learn from './modules/student/Learn';
import Classroom from './modules/student/Classroom';
import Practice from './modules/student/Practice';
import Career from './modules/student/Career';
import Mentorship from './modules/student/Mentorship';
import Chatbox from './modules/student/Chatbox';

// Parent Modules
import ParentDashboard from './modules/parent/ParentDashboard';
import Attendance from './modules/parent/Attendance';
import ChildProfile from './modules/parent/ChildProfile';
import Fees from './modules/parent/Fees';
// import Homework from './modules/parent/Homework'; // ✅ Correct import
import HomeWork from './modules/parent/HomeWork';
import MockTestReports from './modules/parent/MockTestReports';
import Progress from './modules/parent/Progress';
import StudyPlanner from './modules/parent/StudyPlanner';

import './modules/parent/styles.css';


function LandingPage() {
  return (
    <>
      <HeroSection />
      <Features />
      <Courses />
      <HowItWorks />
      <Pricing />
      <FloatingChatBot />
      <Testimonials />
      <AppDownload />
    </>
  );
}

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('userToken');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const RoleRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem('userRole');
  if (!userRole) return <Navigate to="/login" replace />;
  return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
};

function App() {
  const location = useLocation();

  const hideNavbarFooter = ['/login', '/signup', '/forgot-password', '/unauthorized'].includes(location.pathname);
  const isStudentPage = ['/learn', '/classroom', '/practice', '/career', '/mentorship', '/student/dashboard'].some(path =>
    location.pathname.startsWith(path)
  );
  const isParentPage = location.pathname.startsWith('/parent');

  return (
    <div className="app-container">
      {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
      {isStudentPage && <Navbarrr />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/app-download" element={<AppDownload />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-demo" element={<FreeDemo />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ai-demo" element={<AIDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/unauthorized"
          element={
            <div className="unauthorized-page text-center mt-5">
              <h1>401 - Unauthorized Access</h1>
              <p>You don't have permission to access this page.</p>
              <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
            </div>
          }
        />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Home1 /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/learn" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/classroom" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Classroom /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/practice" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Practice /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/career" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Career /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/mentorship" element={
          <ProtectedRoute><RoleRoute requiredRole="student"><Mentorship /></RoleRoute></ProtectedRoute>
        } />

        {/* Parent Routes */}
        <Route path="/parent/dashboard" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/attendance" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><Attendance /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/child-profile" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/fees" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><Fees /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/homework" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><HomeWork /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/reports" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/progress" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><Progress /></RoleRoute></ProtectedRoute>
        } />
        <Route path="/parent/study-planner" element={
          <ProtectedRoute><RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute></ProtectedRoute>
        } />

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

      {isStudentPage && (
        <div className="student-chatbox-container">
          <Chatbox />
        </div>
      )}
    </div>
  );
}

export default App;

