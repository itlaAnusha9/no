


// import React from 'react';
// import { Card } from 'react-bootstrap';
// import {
//   FaCalculator,
//   FaAtom,
//   FaBookOpen,
//   FaExclamationTriangle,
//   FaGlobeAsia,
//   FaLanguage,
//   FaLaptopCode,
//   // FaChalkboardTeacher,
// } from 'react-icons/fa';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';
// import '../App.css';

// const Progress = () => {
//   const weeklyData = [
//     { day: 'Su', activity: 20 },
//     { day: 'Mo', activity: 30 },
//     { day: 'Tu', activity: 40 },
//     { day: 'We', activity: 60 },
//     { day: 'Th', activity: 80 },
//     { day: 'Fr', activity: 70 },
//     { day: 'Sa', activity: 90 },
//   ];

//   const subjects = [
//     { name: 'Math', icon: <FaCalculator />, score: 82 },
//     { name: 'Science', icon: <FaAtom />, score: 90 },
//     { name: 'English', icon: <FaBookOpen />, score: 86 },
//     { name: 'Social Studies', icon: <FaGlobeAsia />, score: 72 },
//     { name: 'Hindi', icon: <FaLanguage />, score: 91 },
//     { name: 'Telugu', icon: <FaLanguage />, score: 85 },
//     { name: 'Computer Science', icon: <FaLaptopCode />, score: 96 },
//   ];

//   return (
//     <Card className="p-4 fade-in shadow" style={{ borderRadius: '15px', background: '#f4f8fb' }}>
//       <h4 className="mb-4" style={{ color: '#2D5D7B', fontWeight: '600' }}>Parent Dashboard</h4>

//       {/* Top Section */}
//       <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
//         <div className="text-center" style={{ width: '150px' }}>
//           <div
//             style={{
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               border: '10px solid #e6f0f7',
//               borderTopColor: '#2D5D7B',
//               transform: 'rotate(45deg)',
//               margin: 'auto',
//             }}
//           ></div>
//           <div style={{ marginTop: '-80px' }}>
//             <h3 style={{ color: '#2D5D7B', fontWeight: 'bold' }}>75%</h3>
//             <p style={{ fontSize: '0.9rem', color: '#555' }}>Completed</p>
//           </div>
//         </div>

//         <div style={{ flexGrow: 1, minWidth: '250px' }}>
//           <h6 style={{ fontWeight: '600', color: '#2D5D7B' }}>Weekly Learning Activity</h6>
//           <ResponsiveContainer width="100%" height={120}>
//             <BarChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} />
//               <XAxis dataKey="day" />
//               <YAxis hide />
//               <Tooltip />
//               <Bar dataKey="activity" fill="#2D5D7B" radius={[5, 5, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Subject Performance */}
//       {subjects.map((subject, idx) => (
//         <div key={idx} className="d-flex justify-content-between align-items-center py-2 border-bottom">
//           <div className="d-flex align-items-center gap-3">
//             <div
//               style={{
//                 backgroundColor: '#e6f0f7',
//                 padding: '10px',
//                 borderRadius: '50%',
//                 fontSize: '1.2rem',
//                 color: '#2D5D7B'
//               }}
//             >
//               {subject.icon}
//             </div>
//             <div>
//               <h6 className="mb-0" style={{ color: '#222831' }}>{subject.name}</h6>
//               <small style={{ color: '#2D5D7B' }}>Improved</small>
//             </div>
//           </div>
//           <div className="text-end">
//             <h6 className="mb-0" style={{ color: '#222831' }}>{subject.score}</h6>
//             <small style={{ color: '#2D5D7B' }}>{subject.score}%</small>
//           </div>
//         </div>
//       ))}

//       {/* Alert Message */}
//       <div className="d-flex align-items-center mt-4 p-3" style={{ backgroundColor: '#e6f7ff', borderRadius: '10px' }}>
//         <FaExclamationTriangle className="me-3 text-danger" />
//         <div>
//           <strong style={{ color: '#dc3545' }}>Test Alert</strong>
//           <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>Low score in recent test</p>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default Progress;


// import React from 'react';
// import { Card } from 'react-bootstrap';
// import {
//   FaCalculator,
//   FaAtom,
//   FaBookOpen,
//   FaExclamationTriangle,
//   FaGlobeAsia,
//   FaLanguage,
//   FaLaptopCode,
//   FaChevronRight,
//   FaTrophy,
//   FaChartLine
// } from 'react-icons/fa';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell
// } from 'recharts';
// import '../App.css';

// const Progress = () => {
//   const weeklyData = [
//     { day: 'Su', activity: 20 },
//     { day: 'Mo', activity: 30 },
//     { day: 'Tu', activity: 40 },
//     { day: 'We', activity: 60 },
//     { day: 'Th', activity: 80 },
//     { day: 'Fr', activity: 70 },
//     { day: 'Sa', activity: 90 },
//   ];

//   const subjects = [
//     { name: 'Math', icon: <FaCalculator />, score: 82, trend: 'up' },
//     { name: 'Science', icon: <FaAtom />, score: 90, trend: 'up' },
//     { name: 'English', icon: <FaBookOpen />, score: 86, trend: 'up' },
//     { name: 'Social Studies', icon: <FaGlobeAsia />, score: 72, trend: 'down' },
//     { name: 'Hindi', icon: <FaLanguage />, score: 91, trend: 'up' },
//     { name: 'Telugu', icon: <FaLanguage />, score: 85, trend: 'up' },
//     { name: 'Computer Science', icon: <FaLaptopCode />, score: 96, trend: 'up' },
//   ];

//   // Color scale for bars based on activity level
//   const getBarColor = (value) => {
//     if (value >= 80) return '#4CAF50'; // Green
//     if (value >= 50) return '#FFC107'; // Amber
//     return '#F44336'; // Red
//   };

//   return (
//     <Card className="p-4 fade-in shadow-lg" style={{ 
//       borderRadius: '15px', 
//       background: 'linear-gradient(135deg, #f4f8fb 0%, #e6f0f7 100%)',
//       border: 'none',
//       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//       overflow: 'hidden'
//     }}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h4 className="mb-0" style={{ 
//           color: '#2D5D7B', 
//           fontWeight: '600',
//           position: 'relative',
//           paddingLeft: '15px'
//         }}>
//           <span style={{
//             position: 'absolute',
//             left: 0,
//             top: '50%',
//             transform: 'translateY(-50%)',
//             width: '5px',
//             height: '25px',
//             backgroundColor: '#2D5D7B',
//             borderRadius: '5px'
//           }}></span>
//           Parent Dashboard
//         </h4>
//         <div className="d-flex align-items-center" style={{ color: '#2D5D7B' }}>
//           <FaChartLine className="me-2" />
//           <span>Performance Overview</span>
//         </div>
//       </div>

//       {/* Top Section */}
//       <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-3">
//         {/* Circular Progress */}
//         <div className="text-center position-relative" style={{ width: '150px' }}>
//           <div
//             className="progress-ring"
//             style={{
//               width: '120px',
//               height: '120px',
//               borderRadius: '50%',
//               border: '10px solid rgba(45, 93, 123, 0.1)',
//               position: 'relative',
//               margin: 'auto',
//             }}
//           >
//             <div
//               className="progress-ring-circle"
//               style={{
//                 position: 'absolute',
//                 top: '-10px',
//                 left: '-10px',
//                 width: '120px',
//                 height: '120px',
//                 borderRadius: '50%',
//                 border: '10px solid transparent',
//                 borderTopColor: '#2D5D7B',
//                 borderRightColor: '#2D5D7B',
//                 transform: 'rotate(45deg)',
//                 animation: 'rotateProgress 2s ease-out forwards'
//               }}
//             ></div>
//             <div style={{ 
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               textAlign: 'center'
//             }}>
//               <h3 style={{ 
//                 color: '#2D5D7B', 
//                 fontWeight: 'bold',
//                 fontSize: '2rem',
//                 marginBottom: '0'
//               }}>75%</h3>
//               <p style={{ 
//                 fontSize: '0.9rem', 
//                 color: '#555',
//                 marginBottom: '0'
//               }}>Course Completion</p>
//             </div>
//           </div>
//         </div>

//         {/* Weekly Activity Chart */}
//         <div style={{ flexGrow: 1, minWidth: '250px' }}>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h6 style={{ fontWeight: '600', color: '#2D5D7B', marginBottom: '0' }}>
//               <FaTrophy className="me-2" />
//               Weekly Learning Activity
//             </h6>
//             <small style={{ color: '#A62D69' }}>This Week</small>
//           </div>
//           <ResponsiveContainer width="100%" height={120}>
//             <BarChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
//               <XAxis 
//                 dataKey="day" 
//                 axisLine={false} 
//                 tickLine={false} 
//                 tick={{ fill: '#2D5D7B' }}
//               />
//               <YAxis hide />
//               <Tooltip 
//                 contentStyle={{
//                   background: '#2D5D7B',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '8px'
//                 }}
//               />
//               <Bar 
//                 dataKey="activity" 
//                 radius={[5, 5, 0, 0]} 
//                 animationDuration={1500}
//               >
//                 {weeklyData.map((entry, index) => (
//                   <Cell 
//                     key={`cell-${index}`} 
//                     fill={getBarColor(entry.activity)} 
//                   />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Subject Performance */}
//       <div className="mb-4">
//         <h6 style={{ 
//           fontWeight: '600', 
//           color: '#2D5D7B',
//           marginBottom: '1rem',
//           paddingBottom: '0.5rem',
//           borderBottom: '1px solid rgba(45, 93, 123, 0.2)'
//         }}>
//           Subject Performance
//         </h6>
//         {subjects.map((subject, idx) => (
//           <div 
//             key={idx} 
//             className="d-flex justify-content-between align-items-center py-3 px-3 mb-2 rounded"
//             style={{
//               transition: 'all 0.3s ease',
//               backgroundColor: 'rgba(255, 255, 255, 0.7)',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//             }}
//           >
//             <div className="d-flex align-items-center gap-3">
//               <div
//                 style={{
//                   backgroundColor: '#e6f0f7',
//                   padding: '12px',
//                   borderRadius: '50%',
//                   fontSize: '1.2rem',
//                   color: '#2D5D7B',
//                   transition: 'all 0.3s ease',
//                   minWidth: '44px',
//                   textAlign: 'center'
//                 }}
//               >
//                 {subject.icon}
//               </div>
//               <div>
//                 <h6 className="mb-0" style={{ color: '#222831', fontWeight: '600' }}>{subject.name}</h6>
//                 <small style={{ 
//                   color: subject.trend === 'up' ? '#4CAF50' : '#F44336',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '4px'
//                 }}>
//                   {subject.trend === 'up' ? '↑ Improved' : '↓ Needs attention'}
//                 </small>
//               </div>
//             </div>
//             <div className="d-flex align-items-center gap-3">
//               <div className="text-end">
//                 <h6 className="mb-0" style={{ 
//                   color: subject.score >= 80 ? '#4CAF50' : subject.score >= 60 ? '#FFC107' : '#F44336',
//                   fontWeight: '600'
//                 }}>
//                   {subject.score}%
//                 </h6>
//                 <small style={{ color: '#7a7a7a' }}>Score</small>
//               </div>
//               <FaChevronRight style={{ color: '#2D5D7B', opacity: '0.6' }} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Alert Message */}
//       <div 
//         className="d-flex align-items-center p-3 rounded"
//         style={{ 
//           backgroundColor: 'rgba(255, 235, 238, 0.7)',
//           borderRadius: '10px',
//           borderLeft: '4px solid #F44336',
//           animation: 'pulseAlert 2s infinite',
//           transition: 'all 0.3s ease'
//         }}
//       >
//         <FaExclamationTriangle className="me-3" style={{ color: '#F44336', fontSize: '1.2rem' }} />
//         <div>
//           <strong style={{ color: '#F44336' }}>Test Alert</strong>
//           <p className="mb-0" style={{ color: '#555', fontSize: '0.9rem' }}>
//             Low score in recent Social Studies test - <a href="#" style={{ color: '#2D5D7B', textDecoration: 'underline' }}>View details</a>
//           </p>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default Progress;




import React from 'react';
import { Card } from 'react-bootstrap';
import {
  FaCalculator,
  FaAtom,
  FaBookOpen,
  FaExclamationTriangle,
  FaGlobeAsia,
  FaLanguage,
  FaLaptopCode,
  // FaChevronRight,
  // FaTrophy,
  FaChartLine
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
// import './modules/parent/styles.css';
import './styles.css';


const Progress = () => {
  const weeklyData = [
    { day: 'Su', activity: 20 },
    { day: 'Mo', activity: 30 },
    { day: 'Tu', activity: 40 },
    { day: 'We', activity: 60 },
    { day: 'Th', activity: 80 },
    { day: 'Fr', activity: 70 },
    { day: 'Sa', activity: 90 },
  ];

  const subjects = [
    { name: 'Math', icon: <FaCalculator />, score: 82, trend: 'up' },
    { name: 'Science', icon: <FaAtom />, score: 90, trend: 'up' },
    { name: 'English', icon: <FaBookOpen />, score: 86, trend: 'up' },
    { name: 'Social Studies', icon: <FaGlobeAsia />, score: 72, trend: 'down' },
    { name: 'Hindi', icon: <FaLanguage />, score: 91, trend: 'up' },
    { name: 'Telugu', icon: <FaLanguage />, score: 85, trend: 'up' },
    { name: 'Computer Science', icon: <FaLaptopCode />, score: 96, trend: 'up' },
  ];

  const getBarColor = (value) => {
    if (value >= 80) return '#4CAF50';
    if (value >= 50) return '#FFC107';
    return '#F44336';
  };

  return (
    <Card className="p-4 fade-in shadow-sm" style={{ 
      borderRadius: '12px', 
      border: 'none',
      backgroundColor: '#fff'
    }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0" style={{ 
          color: '#2D5D7B', 
          fontWeight: '600'
        }}>
          Student Performance
        </h5>
        <div className="d-flex align-items-center" style={{ color: '#2D5D7B' }}>
          <FaChartLine className="me-2" />
          <small>Weekly Overview</small>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row gap-4 mb-4">
        <div className="text-center">
          <div className="mb-2">
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '8px solid #e6f0f7',
                borderTopColor: '#2D5D7B',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{ 
                color: '#2D5D7B', 
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>75%</span>
            </div>
          </div>
          <small className="text-muted">Completion</small>
        </div>

        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={weeklyData} barSize={8}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6c757d', fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{
                  background: '#fff',
                  color: '#2D5D7B',
                  border: '1px solid #eee',
                  borderRadius: '6px',
                  fontSize: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="activity" 
                radius={[2, 2, 0, 0]} 
                animationDuration={1200}
              >
                {weeklyData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getBarColor(entry.activity)} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mb-4">
        <h6 style={{ 
          fontWeight: '600', 
          color: '#2D5D7B',
          marginBottom: '1rem',
          fontSize: '0.9rem'
        }}>
          Subject Performance
        </h6>
        {subjects.map((subject, idx) => (
          <div 
            key={idx} 
            className="d-flex justify-content-between align-items-center py-2 mb-2"
          >
            <div className="d-flex align-items-center gap-2">
              <div
                style={{
                  backgroundColor: '#e6f0f7',
                  padding: '8px',
                  borderRadius: '50%',
                  fontSize: '0.9rem',
                  color: '#2D5D7B',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {subject.icon}
              </div>
              <div>
                <small style={{ color: '#222831', fontWeight: '500' }}>{subject.name}</small>
              </div>
            </div>
            <div>
              <small style={{ 
                color: subject.score >= 80 ? '#4CAF50' : subject.score >= 60 ? '#FFC107' : '#F44336',
                fontWeight: '500'
              }}>
                {subject.score}%
              </small>
            </div>
          </div>
        ))}
      </div>

      <div 
        className="d-flex align-items-center p-3 rounded"
        style={{ 
          backgroundColor: 'rgba(255, 235, 238, 0.5)',
          borderRadius: '8px',
          borderLeft: '3px solid #F44336'
        }}
      >
        <FaExclamationTriangle className="me-2" style={{ color: '#F44336', fontSize: '1rem' }} />
        <div>
          <small style={{ color: '#F44336', fontWeight: '500' }}>Test Alert</small>
          <p className="mb-0" style={{ color: '#6c757d', fontSize: '0.8rem' }}>
            Low score in Social Studies
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Progress;