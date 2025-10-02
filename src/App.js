// // import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// // // Home Modules
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

// // // Auth Modules
// // import Login from './modules/login/Login';
// // import Signup from './modules/login/Signup';
// // import ForgotPassword from './modules/login/ForgotPassword';

// // // Student Modules
// // import Navbarrr from './modules/student/Navbarrr';
// // import Home1 from './modules/student/Home1';
// // import Learn from './modules/student/Learn';
// // import LessonPage from './modules/student/LessonPage';
// // import Practice from './modules/student/Practice';
// // import Career from './modules/student/Career';
// // import Mentorship from './modules/student/Mentorship';
// // import Chatbox from './modules/student/Chatbox';
// // import Quizzes from './modules/student/Quizzes';
// // import Recordings from './modules/student/Recordings';
// // import EventRegistrationPage from './modules/student/EventRegistrationPage';
// // import QuickPractice from './modules/student/QuickPractice';
// // import MockTest from './modules/student/MockTest';

// // // Practice & Mock Test Modules
// // import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
// // import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
// // import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
// // import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
// // import MockTestSyllabus from './modules/student/MockTestSyllabus';

// // // Parent Modules
// // import ParentDashboard from './modules/parent/ParentDashboard';
// // import Attendance from './modules/parent/Attendance';
// // import ChildProfile from './modules/parent/ChildProfile';
// // import Fees from './modules/parent/Fees';
// // import HomeWork from './modules/parent/HomeWork';
// // import MockTestReports from './modules/parent/MockTestReports';
// // import Progress from './modules/parent/Progress';
// // import StudyPlanner from './modules/parent/StudyPlanner';
// // // import ContactUs from './modules/parent/ContactUs';

// // import './modules/parent/styles.css';

// // // Landing Page
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

// // // Protected route wrapper
// // const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = !!localStorage.getItem('userToken');
// //   return isAuthenticated ? children : <Navigate to="/login" replace />;
// // };

// // // Role-based route wrapper
// // const RoleRoute = ({ children, requiredRole }) => {
// //   const userRole = localStorage.getItem('userRole');
// //   if (!userRole) return <Navigate to="/login" replace />;
// //   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// // };

// // function App() {
// //   const location = useLocation();

// //   // Paths where Navbar/Footer should be hidden
// //   const hideNavbarFooter = [
// //     '/login',
// //     '/signup',
// //     '/forgot-password',
// //     '/unauthorized'
// //   ].includes(location.pathname);

// //   // Student routes detection
// //   const isStudentPage = [
// //     '/learn',
// //     '/practice',
// //     '/career',
// //     '/mentorship',
// //     '/student/dashboard',
// //     '/lesson',
// //     '/events',
// //     '/practice-subject',
// //     '/mock-test',
// //     '/practice-questions',
// //     '/mock-test-questions',
// //     '/learn/quizzes',
// //     '/learn/recordings',
// //     '/quick-practice'
// //   ].some(path => location.pathname.startsWith(path));

// //   const isParentPage = location.pathname.startsWith('/parent');

// //   return (
// //     <div className="app-container">
// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
// //       {isStudentPage && <Navbarrr />}

// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/courses" element={<Courses />} />
// //         <Route path="/course/:id" element={<CourseDetail />} />
// //         <Route path="/how-it-works" element={<HowItWorks />} />
// //         <Route path="/pricing" element={<Pricing />} />
// //         <Route path="/testimonials" element={<Testimonials />} />
// //         <Route path="/app-download" element={<AppDownload />} />
// //         <Route path="/faqs" element={<FAQs />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/free-demo" element={<FreeDemo />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //         <Route path="/ai-demo" element={<AIDemo />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route
// //           path="/unauthorized"
// //           element={
// //             <div className="unauthorized-page text-center mt-5">
// //               <h1>401 - Unauthorized Access</h1>
// //               <p>You don't have permission to access this page.</p>
// //               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
// //             </div>
// //           }
// //         />

// //         {/* Student Routes */}
// //         <Route path="/student/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Home1 /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/lesson/:subject/:chapterNumber" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><LessonPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Practice /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-subject/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeSubjectPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeQuestionPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestSubjectPage syllabus={MockTestSyllabus} /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestQuestionsPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/quick-practice" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><QuickPractice /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTest /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/career" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Career /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mentorship" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Mentorship /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/events/:eventId/register" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/quizzes" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Quizzes /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/recordings" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Recordings /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Parent Routes */}
// //         <Route path="/parent/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/attendance" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Attendance /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/child-profile" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/fees" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Fees /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/homework" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><HomeWork /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/reports" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/progress" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Progress /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/study-planner" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Catch-All Route */}
// //         <Route path="*" element={<Navigate to="/" replace />} />
// //       </Routes>



// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

// //       {isStudentPage && (
// //         <div className="student-chatbox-container">
// //           <Chatbox />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;





















































































// // import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// // // Home Modules
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

// // // Auth Modules
// // import Login from './modules/login/Login';
// // import Signup from './modules/login/Signup';
// // import ForgotPassword from './modules/login/ForgotPassword';

// // // Student Modules
// // import Navbarrr from './modules/student/Navbarrr';
// // import Home1 from './modules/student/Home1';
// // import Learn from './modules/student/Learn';
// // import LessonPage from './modules/student/LessonPage';
// // import Practice from './modules/student/Practice';
// // import Career from './modules/student/Career';
// // import Mentorship from './modules/student/Mentorship';
// // import Chatbox from './modules/student/Chatbox';
// // import Quizzes from './modules/student/Quizzes';
// // import Recordings from './modules/student/Recordings';
// // import EventRegistrationPage from './modules/student/EventRegistrationPage';

// // // Practice & Mock Test Modules
// // import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
// // import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
// // import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
// // import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
// // import MockTestSyllabus from './modules/student/MockTestSyllabus';

// // // Parent Modules
// // import ParentDashboard from './modules/parent/ParentDashboard';
// // import Attendance from './modules/parent/Attendance';
// // import ChildProfile from './modules/parent/ChildProfile';
// // import Fees from './modules/parent/Fees';
// // import HomeWork from './modules/parent/HomeWork';
// // import MockTestReports from './modules/parent/MockTestReports';
// // import Progress from './modules/parent/Progress';
// // import StudyPlanner from './modules/parent/StudyPlanner';
// // import ContactUs from './modules/parent/ContactUs';

// // import './modules/parent/styles.css';

// // // Landing Page
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

// // // Protected route wrapper
// // const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = !!localStorage.getItem('userToken');
// //   return isAuthenticated ? children : <Navigate to="/login" replace />;
// // };

// // // Role-based route wrapper
// // const RoleRoute = ({ children, requiredRole }) => {
// //   const userRole = localStorage.getItem('userRole');
// //   if (!userRole) return <Navigate to="/login" replace />;
// //   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// // };

// // function App() {
// //   const location = useLocation();

// //   // Paths where Navbar/Footer should be hidden
// //   const hideNavbarFooter = [
// //     '/login',
// //     '/signup',
// //     '/forgot-password',
// //     '/unauthorized'
// //   ].includes(location.pathname);

// //   // Student routes detection
// //   const isStudentPage = [
// //     '/learn',
// //     '/practice',
// //     '/career',
// //     '/mentorship',
// //     '/student/dashboard',
// //     '/lesson',
// //     '/events',
// //     '/practice-subject',
// //     '/mock-test',
// //     '/practice-questions',
// //     '/mock-test-questions',
// //     '/learn/quizzes',
// //     '/learn/recordings',
    

// //   ].some(path => location.pathname.startsWith(path));

// //   const isParentPage = location.pathname.startsWith('/parent');

// //   return (
// //     <div className="app-container">
// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
// //       {isStudentPage && <Navbarrr />}

// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/courses" element={<Courses />} />
// //         <Route path="/course/:id" element={<CourseDetail />} />
// //         <Route path="/how-it-works" element={<HowItWorks />} />
// //         <Route path="/pricing" element={<Pricing />} />
// //         <Route path="/testimonials" element={<Testimonials />} />
// //         <Route path="/app-download" element={<AppDownload />} />
// //         <Route path="/faqs" element={<FAQs />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/free-demo" element={<FreeDemo />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //         <Route path="/ai-demo" element={<AIDemo />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route
// //           path="/unauthorized"
// //           element={
// //             <div className="unauthorized-page text-center mt-5">
// //               <h1>401 - Unauthorized Access</h1>
// //               <p>You don't have permission to access this page.</p>
// //               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
// //             </div>
// //           }
// //         />

// //         {/* Student Routes */}
// //         <Route path="/student/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Home1 /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/lesson/:subject/:chapterNumber" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><LessonPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Practice /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-subject/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeSubjectPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeQuestionPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestSubjectPage syllabus={MockTestSyllabus} /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestQuestionsPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/career" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Career /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mentorship" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Mentorship /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/events/:eventId/register" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/quizzes" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Quizzes /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/recordings" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Recordings /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Parent Routes */}
// //         <Route path="/parent/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/attendance" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Attendance /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/child-profile" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/fees" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Fees /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/homework" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><HomeWork /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/reports" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/progress" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Progress /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/study-planner" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Catch-All Route */}
// //         <Route path="*" element={<Navigate to="/" replace />} />
// //       </Routes>

// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

// //       {isStudentPage && (
// //         <div className="student-chatbox-container">
// //           <Chatbox />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;






















// // import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';

// // // Home Modules
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

// // // Auth Modules
// // import Login from './modules/login/Login';
// // import Signup from './modules/login/Signup';
// // import ForgotPassword from './modules/login/ForgotPassword';

// // // Student Modules
// // import Navbarrr from './modules/student/Navbarrr';
// // import Home1 from './modules/student/Home1';
// // import Learn from './modules/student/Learn';
// // import LessonPage from './modules/student/LessonPage';
// // import Practice from './modules/student/Practice';
// // import Career from './modules/student/Career';
// // import Mentorship from './modules/student/Mentorship';
// // import Chatbox from './modules/student/Chatbox';
// // import Quizzes from './modules/student/Quizzes';
// // import Recordings from './modules/student/Recordings';
// // import EventRegistrationPage from './modules/student/EventRegistrationPage';

// // // Practice & Mock Test Modules
// // import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
// // import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
// // import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
// // import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
// // import MockTestSyllabus from './modules/student/MockTestSyllabus';

// // // Parent Modules
// // import ParentDashboard from './modules/parent/ParentDashboard';
// // import Attendance from './modules/parent/Attendance';
// // import ChildProfile from './modules/parent/ChildProfile';
// // import Fees from './modules/parent/Fees';
// // import HomeWork from './modules/parent/HomeWork';
// // import MockTestReports from './modules/parent/MockTestReports';
// // import Progress from './modules/parent/Progress';
// // import StudyPlanner from './modules/parent/StudyPlanner';
// // import ContactUs from './modules/parent/ContactUs';

// // import './modules/parent/styles.css';

// // // Landing Page
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

// // // Protected route wrapper
// // const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = !!localStorage.getItem('userToken');
// //   return isAuthenticated ? children : <Navigate to="/login" replace />;
// // };

// // // Role-based route wrapper
// // const RoleRoute = ({ children, requiredRole }) => {
// //   const userRole = localStorage.getItem('userRole');
// //   if (!userRole) return <Navigate to="/login" replace />;
// //   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// // };

// // function App() {
// //   const location = useLocation();

// //   // Paths where Navbar/Footer should be hidden
// //   const hideNavbarFooter = [
// //     '/login',
// //     '/signup',
// //     '/forgot-password',
// //     '/unauthorized'
// //   ].includes(location.pathname);

// //   // Student routes detection
// //   const isStudentPage = [
// //     '/learn',
// //     '/practice',
// //     '/career',
// //     '/mentorship',
// //     '/student/dashboard',
// //     '/lesson',
// //     '/events',
// //     '/practice-subject',
// //     '/mock-test',
// //     '/practice-questions',
// //     '/mock-test-questions',
// //     '/learn/quizzes',
// //     '/learn/recordings',
// //   ].some(path => location.pathname.startsWith(path));

// //   const isParentPage = location.pathname.startsWith('/parent');

// //   return (
// //     <div className="app-container">
// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
// //       {isStudentPage && <Navbarrr />}

// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/courses" element={<Courses />} />
// //         <Route path="/course/:id" element={<CourseDetail />} />
// //         <Route path="/how-it-works" element={<HowItWorks />} />
// //         <Route path="/pricing" element={<Pricing />} />
// //         <Route path="/testimonials" element={<Testimonials />} />
// //         <Route path="/app-download" element={<AppDownload />} />
// //         <Route path="/faqs" element={<FAQs />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/free-demo" element={<FreeDemo />} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //         <Route path="/ai-demo" element={<AIDemo />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         <Route
// //           path="/unauthorized"
// //           element={
// //             <div className="unauthorized-page text-center mt-5">
// //               <h1>401 - Unauthorized Access</h1>
// //               <p>You don't have permission to access this page.</p>
// //               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
// //             </div>
// //           }
// //         />

// //         {/* Student Routes */}
// //         <Route path="/student/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Home1 /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Learn / Lesson Routes */}
// //         <Route path="/learn" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Learn /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Lesson Page with optional subtopic */}
// //         <Route path="/lesson/:subject/:chapterNumber/:subtopicId?" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><LessonPage /></RoleRoute></ProtectedRoute>
// //         } />

// //         <Route path="/practice" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Practice /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-subject/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeSubjectPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/practice-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><PracticeQuestionPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test/:subjectId" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestSubjectPage syllabus={MockTestSyllabus} /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mock-test-questions" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><MockTestQuestionsPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/career" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Career /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/mentorship" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Mentorship /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/events/:eventId/register" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/quizzes" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Quizzes /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/learn/recordings" element={
// //           <ProtectedRoute><RoleRoute requiredRole="student"><Recordings /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Parent Routes */}
// //         <Route path="/parent/dashboard" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/attendance" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Attendance /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/child-profile" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/fees" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Fees /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/homework" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><HomeWork /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/reports" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/progress" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><Progress /></RoleRoute></ProtectedRoute>
// //         } />
// //         <Route path="/parent/study-planner" element={
// //           <ProtectedRoute><RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute></ProtectedRoute>
// //         } />

// //         {/* Catch-All Route */}
// //         <Route path="*" element={<Navigate to="/" replace />} />
// //       </Routes>

// //       {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}

// //       {isStudentPage && (
// //         <div className="student-chatbox-container">
// //           <Chatbox />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;



// // import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
// // import React from 'react';
// // import { QuizProvider, useQuiz } from './modules/student/QuizContext';
 
// // // Home Modules
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
 
// // // Auth Modules
// // import Login from './modules/login/Login';
// // import Signup from './modules/login/Signup';
// // import ForgotPassword from './modules/login/ForgotPassword';
 
// // // Student Modules
// // import Navbarrr from './modules/student/Navbarrr';
// // import Home1 from './modules/student/Home1';
// // import Learn from './modules/student/Learn';
// // import LessonPage from './modules/student/LessonPage';
// // import Practice from './modules/student/Practice';
// // import Career from './modules/student/Career';
// // import Mentorship from './modules/student/Mentorship';
// // import Chatbox from './modules/student/Chatbox';
// // import Quizzes from './modules/student/Quizzes';
// // import Recordings from './modules/student/Recordings';
// // import EventRegistrationPage from './modules/student/EventRegistrationPage';
// // import QuickPractice from './modules/student/QuickPractice';
// // import MockTest from './modules/student/MockTest';
 
// // // Practice & Mock Test Modules
// // import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
// // import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
// // import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
// // import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
// // import MockTestSyllabus from './modules/student/MockTestSyllabus';
 
// // // // Quiz Test Page
// // // import QuizTestPage from './modules/student/QuizTestPage';
 
// // // Parent Modules
// // import ParentDashboard from './modules/parent/ParentDashboard';
// // import Attendance from './modules/parent/Attendance';
// // import ChildProfile from './modules/parent/ChildProfile';
// // import Fees from './modules/parent/Fees';
// // import HomeWork from './modules/parent/HomeWork';
// // import MockTestReports from './modules/parent/MockTestReports';
// // import Progress from './modules/parent/Progress';
// // import StudyPlanner from './modules/parent/StudyPlanner';
 
// // import './modules/parent/styles.css';
 
// // // Protected route wrapper
// // const ProtectedRoute = ({ children }) => {
// //   const isAuthenticated = !!localStorage.getItem('userToken');
// //   return isAuthenticated ? children : <Navigate to="/login" replace />;
// // };
 
// // // Role-based route wrapper
// // const RoleRoute = ({ children, requiredRole }) => {
// //   const userRole = localStorage.getItem('userRole');
// //   if (!userRole) return <Navigate to="/login" replace />;
// //   return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
// // };
 
// // function App() {
// //   const location = useLocation();
// //   const { isQuizActive } = useQuiz();
 
// //   // Paths where Navbar/Footer should be hidden
// //   const hideNavbarFooter = [
// //     '/login',
// //     '/signup',
// //     '/forgot-password',
// //     '/unauthorized'
// //   ].includes(location.pathname);
 
// //   // Student routes detection
// //   const isStudentPage = [
// //     '/learn',
// //     '/practice',
// //     '/career',
// //     '/mentorship',
// //     '/student/dashboard',
// //     '/lesson',
// //     '/events',
// //     '/practice-subject',
// //     '/mock-test',
// //     '/practice-questions',
// //     '/mock-test-questions',
// //     '/learn/quizzes',
// //     '/learn/recordings',
// //     '/quick-practice',
// //     '/quiz-test'
// //   ].some(path => location.pathname.startsWith(path));
 
// //   // Parent routes detection
// //   const isParentPage = location.pathname.startsWith('/parent');
 
// //   // Hide student navbar only on Quick Practice
// //   const hideStudentNavbar = location.pathname.startsWith('/quick-practice');
 
// //   return (
// //     <QuizProvider>
// //       <div className="app-container">
// //         {/* Home Navbar */}
// //         {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
 
// //         {/* Student Navbar */}
// //         {isStudentPage && !hideStudentNavbar && <Navbarrr />}
 
// //         <Routes>
// //           {/* Public Routes */}
// //           <Route path="/" element={<>
// //             <HeroSection />
// //             <Features />
// //             <Courses />
// //             <HowItWorks />
// //             <Pricing />
// //             <FloatingChatBot />
// //             <Testimonials />
// //             <AppDownload />
// //           </>} />
// //           <Route path="/courses" element={<Courses />} />
// //           <Route path="/course/:id" element={<CourseDetail />} />
// //           <Route path="/how-it-works" element={<HowItWorks />} />
// //           <Route path="/pricing" element={<Pricing />} />
// //           <Route path="/testimonials" element={<Testimonials />} />
// //           <Route path="/app-download" element={<AppDownload />} />
// //           <Route path="/faqs" element={<FAQs />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/free-demo" element={<FreeDemo />} />
// //           <Route path="/profile" element={<ProfilePage />} />
// //           <Route path="/ai-demo" element={<AIDemo />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/forgot-password" element={<ForgotPassword />} />
// //           <Route path="/unauthorized" element={
// //             <div className="unauthorized-page text-center mt-5">
// //               <h1>401 - Unauthorized Access</h1>
// //               <p>You don't have permission to access this page.</p>
// //               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
// //             </div>
// //           } />
















//  import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { QuizProvider, useQuiz } from './modules/student/QuizContext';

// // Home Modules
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

// // Auth Modules
// import Login from './modules/login/Login';
// import Signup from './modules/login/Signup';
// import ForgotPassword from './modules/login/ForgotPassword';

// // Student Modules
// import Navbarrr from './modules/student/Navbarrr';
// import Home1 from './modules/student/Home1';
// import Learn from './modules/student/Learn';
// import LessonPage from './modules/student/LessonPage';
// import Practice from './modules/student/Practice';
// import Career from './modules/student/Career';
// import Mentorship from './modules/student/Mentorship';
// import Chatbox from './modules/student/Chatbox';
// import Quizzes from './modules/student/Quizzes';
// import Recordings from './modules/student/Recordings';
// import EventRegistrationPage from './modules/student/EventRegistrationPage';
// import QuickPractice from './modules/student/QuickPractice';
// import MockTest from './modules/student/MockTest';
// import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
// import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
// import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
// import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
// import MockTestSyllabus from './modules/student/MockTestSyllabus';

// // Parent Modules
// import ParentDashboard from './modules/parent/ParentDashboard';
// import Attendance from './modules/parent/Attendance';
// import ChildProfile from './modules/parent/ChildProfile';
// import Fees from './modules/parent/Fees';
// import HomeWork from './modules/parent/HomeWork';
// import MockTestReports from './modules/parent/MockTestReports';
// import Progress from './modules/parent/Progress';
// import StudyPlanner from './modules/parent/StudyPlanner';

// import './modules/parent/styles.css';

// // ------------------- LANGUAGE SWITCHER & AUTOMATIC TRANSLATION -------------------

// const LanguageSwitcher = () => {
//   const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

//   // Automatically translate all DOM text
//   useEffect(() => {
//     if (lang === "en") return;

//     const translateText = async (text) => {
//       if (!text || text.trim() === "") return text;
//       try {
//         const res = await fetch("https://libretranslate.de/translate", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             q: text,
//             source: "en",
//             target: lang,
//             format: "text",
//           }),
//         });
//         const data = await res.json();
//         return data.translatedText;
//       } catch (err) {
//         console.error("Translation error:", err);
//         return text;
//       }
//     };

//     const walkDOM = async (node) => {
//       if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
//         const originalText = node.nodeValue.trim();
//         const translatedText = await translateText(originalText);
//         node.nodeValue = translatedText;
//       } else {
//         node.childNodes.forEach(walkDOM);
//       }
//     };

//     walkDOM(document.body);
//   }, [lang]);

//   const handleChange = (e) => {
//     const selected = e.target.value;
//     localStorage.setItem("lang", selected);
//     setLang(selected);
//     window.location.reload(); // optional: force re-render
//   };

//   return (
//     <select value={lang} onChange={handleChange} className="language-switcher">
//       <option value="en">English</option>
//       <option value="es">Spanish</option>
//       <option value="fr">French</option>
//       <option value="hi">Hindi</option>
//       <option value="de">German</option>
//       {/* Add more languages as needed */}
//     </select>
//   );
// };

// // ------------------- APP -------------------

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
//   const { isQuizActive } = useQuiz();

//   const hideNavbarFooter = [
//     '/login',
//     '/signup',
//     '/forgot-password',
//     '/unauthorized'
//   ].includes(location.pathname);

//   const isStudentPage = [
//     '/learn',
//     '/practice',
//     '/career',
//     '/mentorship',
//     '/student/dashboard',
//     '/lesson',
//     '/events',
//     '/practice-subject',
//     '/mock-test',
//     '/practice-questions',
//     '/mock-test-questions',
//     '/learn/quizzes',
//     '/learn/recordings',
//     '/quick-practice',
//     '/quiz-test'
//   ].some(path => location.pathname.startsWith(path));

//   const isParentPage = location.pathname.startsWith('/parent');
//   const hideStudentNavbar = location.pathname.startsWith('/quick-practice');

//   return (
//     <QuizProvider>
//       <div className="app-container">
//         {/* Language Switcher always visible at top */}
//         <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
//           <LanguageSwitcher />
//         </div>

//         {/* Home Navbar */}
//         {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}

//         {/* Student Navbar */}
//         {isStudentPage && !hideStudentNavbar && <Navbarrr />}

//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<>
//             <HeroSection />
//             <Features />
//             <Courses />
//             <HowItWorks />
//             <Pricing />
//             <FloatingChatBot />
//             <Testimonials />
//             <AppDownload />
//           </>} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/course/:id" element={<CourseDetail />} />
//           <Route path="/how-it-works" element={<HowItWorks />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/app-download" element={<AppDownload />} />
//           <Route path="/faqs" element={<FAQs />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/free-demo" element={<FreeDemo />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/ai-demo" element={<AIDemo />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/unauthorized" element={
//             <div className="unauthorized-page text-center mt-5">
//               <h1>401 - Unauthorized Access</h1>
//               <p>You don't have permission to access this page.</p>
//               <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
//             </div>
//           } />
//           {/* Student Routes */}
//           <Route path="/student/dashboard" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Home1 /></RoleRoute>
//             </ProtectedRoute>
//           } />
 
//           {/* Learn Routes for all classes */}
//           <Route path="/learn" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Learn /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/class7" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Learn /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/class8" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Learn /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/class9" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Learn /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/class10" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Learn /></RoleRoute>
//             </ProtectedRoute>
//           } />
 
//           {/* Lesson page route (includes classId for navigation) */}
//           <Route path="/lesson/:classId/:subject/:chapterNumber" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><LessonPage /></RoleRoute>
//             </ProtectedRoute>
//           } />
 
//           {/* Other Student Routes */}
//           <Route path="/practice" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Practice /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/practice-subject/:subjectId" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><PracticeSubjectPage /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/practice-questions" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><PracticeQuestionPage /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/mock-test/:subjectId" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><MockTestSubjectPage syllabus={MockTestSyllabus} /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/mock-test-questions" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><MockTestQuestionsPage /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/quick-practice" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><QuickPractice /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/mock-test" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><MockTest /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/career" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Career /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/mentorship" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Mentorship /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/events/:eventId/register" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/quizzes" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Quizzes /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/learn/recordings" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><Recordings /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           {/* <Route path="/quiz-test" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="student"><QuizTestPage /></RoleRoute>
//             </ProtectedRoute>
//           } /> */}
 
//           {/* Parent Routes */}
//           <Route path="/parent/dashboard" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/attendance" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><Attendance /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/child-profile" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/fees" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><Fees /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/homework" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><HomeWork /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/reports" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/progress" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><Progress /></RoleRoute>
//             </ProtectedRoute>
//           } />
//           <Route path="/parent/study-planner" element={
//             <ProtectedRoute>
//               <RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute>
//             </ProtectedRoute>
//           } />
 
//           {/* Catch-All Route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
 
//         {/* Footer */}
//         {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}
 
//         {/* Student Chatbox */}
//         {isStudentPage && !hideStudentNavbar && <div className="student-chatbox-container"><Chatbox /></div>}
//       </div>
//     </QuizProvider>
//   );
// }
 
// export default App;
 
 import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import React from 'react';
import { QuizProvider, useQuiz } from './modules/student/QuizContext';
 
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
import LessonPage from './modules/student/LessonPage';
import Practice from './modules/student/Practice';
import Career from './modules/student/Career';
import Mentorship from './modules/student/Mentorship';
import Chatbox from './modules/student/Chatbox';
import Quizzes from './modules/student/Quizzes';
import Recordings from './modules/student/Recordings';
import EventRegistrationPage from './modules/student/EventRegistrationPage';
import QuickPractice from './modules/student/QuickPractice';
import MockTest from './modules/student/MockTest';
 
// Practice & Mock Test Modules
import PracticeSubjectPage from './modules/student/PracticeSubjectPage';
import PracticeQuestionPage from './modules/student/PracticeQuestionPage';
import MockTestSubjectPage from './modules/student/MockTestSubjectPage';
import MockTestQuestionsPage from './modules/student/MockTestQuestionsPage';
import MockTestSyllabus from './modules/student/MockTestSyllabus';
 
// Quiz Test Page
import QuizTestPage from './modules/student/QuizTestPage';
 
// Parent Modules
import ParentDashboard from './modules/parent/ParentDashboard';
import Attendance from './modules/parent/Attendance';
import ChildProfile from './modules/parent/ChildProfile';
import Fees from './modules/parent/Fees';
import HomeWork from './modules/parent/HomeWork';
import MockTestReports from './modules/parent/MockTestReports';
import Progress from './modules/parent/Progress';
import StudyPlanner from './modules/parent/StudyPlanner';
 
import './modules/parent/styles.css';
 
// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('userToken');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
 
// Role-based route wrapper
const RoleRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem('userRole');
  if (!userRole) return <Navigate to="/login" replace />;
  return userRole === requiredRole ? children : <Navigate to="/unauthorized" replace />;
};
 
function App() {
  const location = useLocation();
  const { isQuizActive } = useQuiz();
 
  // Paths where Navbar/Footer should be hidden
  const hideNavbarFooter = [
    '/login',
    '/signup',
    '/forgot-password',
    '/unauthorized'
  ].includes(location.pathname);
 
  // Student routes detection
  const isStudentPage = [
    '/learn',
    '/practice',
    '/career',
    '/mentorship',
    '/student/dashboard',
    '/lesson',
    '/events',
    '/practice-subject',
    '/mock-test',
    '/practice-questions',
    '/mock-test-questions',
    '/learn/quizzes',
    '/learn/recordings',
    '/quick-practice',
    '/quiz-test'
  ].some(path => location.pathname.startsWith(path));
 
  // Parent routes detection
  const isParentPage = location.pathname.startsWith('/parent');
 
  // Hide student navbar only on Quick Practice
  const hideStudentNavbar = location.pathname.startsWith('/quick-practice');
 
  return (
    <QuizProvider>
      <div className="app-container">
        {/* Home Navbar */}
        {!hideNavbarFooter && !isStudentPage && !isParentPage && <Navbar />}
 
        {/* Student Navbar */}
        {isStudentPage && !hideStudentNavbar && <Navbarrr />}
 
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<>
            <HeroSection />
            <Features />
            <Courses />
            <HowItWorks />
            <Pricing />
            <FloatingChatBot />
            <Testimonials />
            <AppDownload />
          </>} />
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
          <Route path="/unauthorized" element={
            <div className="unauthorized-page text-center mt-5">
              <h1>401 - Unauthorized Access</h1>
              <p>You don't have permission to access this page.</p>
              <Link to="/" className="btn btn-primary mt-3">Return Home</Link>
            </div>
          } />
 
          {/* Student Routes */}
          <Route path="/student/dashboard" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Home1 /></RoleRoute>
            </ProtectedRoute>
          } />
 
          {/* Learn Routes for all classes */}
          <Route path="/learn" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Learn /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/class7" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Learn /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/class8" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Learn /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/class9" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Learn /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/class10" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Learn /></RoleRoute>
            </ProtectedRoute>
          } />
 
          {/* Lesson page route (includes classId for navigation) */}
          <Route path="/lesson/:classId/:subject/:chapterNumber" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><LessonPage /></RoleRoute>
            </ProtectedRoute>
          } />
 
          {/* Other Student Routes */}
          <Route path="/practice" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Practice /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/practice-subject/:subjectId" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><PracticeSubjectPage /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/practice-questions" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><PracticeQuestionPage /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/mock-test/:subjectId" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><MockTestSubjectPage syllabus={MockTestSyllabus} /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/mock-test-questions" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><MockTestQuestionsPage /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/quick-practice" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><QuickPractice /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/mock-test" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><MockTest /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/career" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Career /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/mentorship" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Mentorship /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/events/:eventId/register" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><EventRegistrationPage /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/quizzes" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Quizzes /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/learn/recordings" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><Recordings /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/quiz-test" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="student"><QuizTestPage /></RoleRoute>
            </ProtectedRoute>
          } />
 
          {/* Parent Routes */}
          <Route path="/parent/dashboard" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><ParentDashboard /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/attendance" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><Attendance /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/child-profile" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><ChildProfile /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/fees" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><Fees /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/homework" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><HomeWork /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/reports" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><MockTestReports /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/progress" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><Progress /></RoleRoute>
            </ProtectedRoute>
          } />
          <Route path="/parent/study-planner" element={
            <ProtectedRoute>
              <RoleRoute requiredRole="parent"><StudyPlanner /></RoleRoute>
            </ProtectedRoute>
          } />
 
          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
 
        {/* Footer */}
        {!hideNavbarFooter && !isStudentPage && !isParentPage && <Footer />}
 
        {/* Student Chatbox */}
        {isStudentPage && !hideStudentNavbar && <div className="student-chatbox-container"><Chatbox /></div>}
      </div>
    </QuizProvider>
  );
}
 
export default App;