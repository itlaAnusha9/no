
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
//   // FaChevronRight,
//   // FaTrophy,
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
// // import './modules/parent/styles.css';
// import './styles.css';


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

//   const getBarColor = (value) => {
//     if (value >= 80) return '#4CAF50';
//     if (value >= 50) return '#FFC107';
//     return '#F44336';
//   };

//   return (
//     <Card className="p-4 fade-in shadow-sm" style={{ 
//       borderRadius: '12px', 
//       border: 'none',
//       backgroundColor: '#fff'
//     }}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h5 className="mb-0" style={{ 
//           color: '#2D5D7B', 
//           fontWeight: '600'
//         }}>
//           Student Performance
//         </h5>
//         <div className="d-flex align-items-center" style={{ color: '#2D5D7B' }}>
//           <FaChartLine className="me-2" />
//           <small>Weekly Overview</small>
//         </div>
//       </div>

//       <div className="d-flex flex-column flex-md-row gap-4 mb-4">
//         <div className="text-center">
//           <div className="mb-2">
//             <div
//               style={{
//                 width: '80px',
//                 height: '80px',
//                 borderRadius: '50%',
//                 border: '8px solid #e6f0f7',
//                 borderTopColor: '#2D5D7B',
//                 margin: '0 auto',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <span style={{ 
//                 color: '#2D5D7B', 
//                 fontWeight: 'bold',
//                 fontSize: '1.2rem'
//               }}>75%</span>
//             </div>
//           </div>
//           <small className="text-muted">Completion</small>
//         </div>

//         <div style={{ flex: 1 }}>
//           <ResponsiveContainer width="100%" height={120}>
//             <BarChart data={weeklyData} barSize={8}>
//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//               <XAxis 
//                 dataKey="day" 
//                 axisLine={false} 
//                 tickLine={false} 
//                 tick={{ fill: '#6c757d', fontSize: 12 }}
//               />
//               <YAxis hide />
//               <Tooltip 
//                 contentStyle={{
//                   background: '#fff',
//                   color: '#2D5D7B',
//                   border: '1px solid #eee',
//                   borderRadius: '6px',
//                   fontSize: '12px',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                 }}
//               />
//               <Bar 
//                 dataKey="activity" 
//                 radius={[2, 2, 0, 0]} 
//                 animationDuration={1200}
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

//       <div className="mb-4">
//         <h6 style={{ 
//           fontWeight: '600', 
//           color: '#2D5D7B',
//           marginBottom: '1rem',
//           fontSize: '0.9rem'
//         }}>
//           Subject Performance
//         </h6>
//         {subjects.map((subject, idx) => (
//           <div 
//             key={idx} 
//             className="d-flex justify-content-between align-items-center py-2 mb-2"
//           >
//             <div className="d-flex align-items-center gap-2">
//               <div
//                 style={{
//                   backgroundColor: '#e6f0f7',
//                   padding: '8px',
//                   borderRadius: '50%',
//                   fontSize: '0.9rem',
//                   color: '#2D5D7B',
//                   width: '32px',
//                   height: '32px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 {subject.icon}
//               </div>
//               <div>
//                 <small style={{ color: '#222831', fontWeight: '500' }}>{subject.name}</small>
//               </div>
//             </div>
//             <div>
//               <small style={{ 
//                 color: subject.score >= 80 ? '#4CAF50' : subject.score >= 60 ? '#FFC107' : '#F44336',
//                 fontWeight: '500'
//               }}>
//                 {subject.score}%
//               </small>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div 
//         className="d-flex align-items-center p-3 rounded"
//         style={{ 
//           backgroundColor: 'rgba(255, 235, 238, 0.5)',
//           borderRadius: '8px',
//           borderLeft: '3px solid #F44336'
//         }}
//       >
//         <FaExclamationTriangle className="me-2" style={{ color: '#F44336', fontSize: '1rem' }} />
//         <div>
//           <small style={{ color: '#F44336', fontWeight: '500' }}>Test Alert</small>
//           <p className="mb-0" style={{ color: '#6c757d', fontSize: '0.8rem' }}>
//             Low score in Social Studies
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
  FaChartLine,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
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
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .progress-title {
              font-size: 1.1rem !important;
            }
            .completion-circle {
              width: 60px !important;
              height: 60px !important;
              border-width: 6px !important;
              font-size: 1rem !important;
            }
            .bar-container {
              height: 100px !important;
            }
          }
          @media (max-width: 480px) {
            .progress-title {
              font-size: 1rem !important;
            }
            .completion-circle {
              width: 55px !important;
              height: 55px !important;
              font-size: 0.9rem !important;
            }
            .subject-icon {
              width: 28px !important;
              height: 28px !important;
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>

      <Card className="p-4 fade-in shadow-sm" style={{
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#fff',
        marginBottom: '1rem'
      }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h5 className="mb-0 progress-title" style={{
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

        {/* Completion + Chart */}
        <div className="d-flex flex-column flex-md-row gap-4 mb-4">
          {/* Completion Circle */}
          <div className="text-center">
            <div className="mb-2">
              <div
                className="completion-circle"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '8px solid #e6f0f7',
                  borderTopColor: '#2D5D7B',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#2D5D7B'
                }}
              >
                75%
              </div>
            </div>
            <small className="text-muted">Completion</small>
          </div>

          {/* Bar Chart */}
          <div className="flex-grow-1" style={{ minWidth: '0' }}>
            <div className="bar-container" style={{ height: 120 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barSize={8}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6c757d', fontSize: 12 }} />
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
                  <Bar dataKey="activity" radius={[2, 2, 0, 0]} animationDuration={1200}>
                    {weeklyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(entry.activity)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Subject Performance */}
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
                  className="subject-icon"
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

        {/* Alert Section */}
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
    </>
  );
};

export default Progress;
