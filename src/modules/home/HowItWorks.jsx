
// import React from 'react';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaBookOpen,
//   FaRobot,
//   FaLaptopCode,
//   FaCertificate
// } from 'react-icons/fa';
 
// const steps = [
//   {
//     title: 'Discovery',
//     desc: 'Explore courses and set goals',
//     icon: <FaBookOpen />,
//     color: '#4E7CFF',
//   },
//   {
//     title: 'AI Onboarding',
//     desc: 'Personalized learning plan',
//     icon: <FaRobot />,
//     color: '#FF6B6B',
//   },
//   {
//     title: 'Core Learning',
//     desc: 'Interactive lessons & projects',
//     icon: <FaLaptopCode />,
//     color: '#6BCB77',
//   },
//   {
//     title: 'Graduation',
//     desc: 'Earn your certification',
//     icon: <FaCertificate />,
//     color: '#FF9F45',
//   },
// ];
 
// export default function MiniRoadmap() {
//    useEffect(() => {
//         document.title = "Roadmap|NOVYA - Your Smart Learning Platform";
//       }, []);
//   return (
//     <section
//       style={{
//         background: 'linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)',
//         padding: '2rem 0',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         overflow: 'hidden'
//       }}
//     >
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-4"
//         >
//           <h2 className="fw-bold mb-3" style={{ color: '#2D5D7B', fontSize: '2rem' }}>
//             Your Learning Journey
//           </h2>
//           <p className="lead" style={{ color: '#5A6A7D', fontSize: '1rem' }}>
//             Explore a simplified roadmap to success
//           </p>
//         </motion.div>
 
//         <div className="row justify-content-center">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="col-6 col-md-3 mb-4 d-flex justify-content-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div
//                 className="text-center p-3 rounded shadow-sm"
//                 style={{
//                   backgroundColor: '#fff',
//                   borderTop: `4px solid ${step.color}`,
//                   width: '100%',
//                   maxWidth: '220px',
//                   height: '220px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: '1.8rem',
//                     color: step.color,
//                     marginBottom: '10px'
//                   }}
//                 >
//                   {step.icon}
//                 </div>
//                 <h5 className="fw-bold mb-2" style={{ color: '#2D5D7B', fontSize: '1rem' }}>{step.title}</h5>
//                 <p style={{ fontSize: '0.85rem', color: '#5A6A7D' }}>{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
 
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-center mt-3"
//         >
//           {/* <button
//             className="btn btn-lg px-4 py-2 fw-bold"
//             style={{
//               background: 'linear-gradient(135deg, #2D5D7B 0%, #3a7ca5 100%)',
//               color: 'white',
//               borderRadius: '8px',
//               boxShadow: '0 4px 12px rgba(45, 93, 123, 0.25)'
//             }}
//           >
//             Start Now
//           </button> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// ////without translator
// import React from 'react';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FaBookOpen,
//   FaRobot,
//   FaLaptopCode,
//   FaCertificate
// } from 'react-icons/fa';
 
// const steps = [
//   {
//     title: 'Discovery',
//     desc: 'Explore courses and set goals',
//     icon: <FaBookOpen />,
//     color: '#4E7CFF',
//   },
//   {
//     title: 'AI Onboarding',
//     desc: 'Personalized learning plan',
//     icon: <FaRobot />,
//     color: '#FF6B6B',
//   },
//   {
//     title: 'Core Learning',
//     desc: 'Interactive lessons & projects',
//     icon: <FaLaptopCode />,
//     color: '#6BCB77',
//   },
//   {
//     title: 'Graduation',
//     desc: 'Earn your certification',
//     icon: <FaCertificate />,
//     color: '#FF9F45',
//   },
// ];
 
// export default function MiniRoadmap() {
//    useEffect(() => {
//         document.title = "Roadmap|NOVYA - Your Smart Learning Platform";
//       }, []);
//   return (
//     <section
//       style={{
//         background: 'linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)',
//         padding: '2rem 0',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         overflow: 'hidden'
//       }}
//     >
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-4"
//         >
//           <h2 className="fw-bold mb-3" style={{ color: '#2D5D7B', fontSize: '2rem' }}>
//             Your Learning Journey
//           </h2>
//           <p className="lead" style={{ color: '#5A6A7D', fontSize: '1rem' }}>
//             Explore a simplified roadmap to success
//           </p>
//         </motion.div>
 
//         <div className="row justify-content-center">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="col-6 col-md-3 mb-4 d-flex justify-content-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div
//                 className="text-center p-3 rounded shadow-sm"
//                 style={{
//                   backgroundColor: '#fff',
//                   borderTop: `4px solid ${step.color}`,
//                   width: '100%',
//                   maxWidth: '220px',
//                   height: '220px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: '1.8rem',
//                     color: step.color,
//                     marginBottom: '10px'
//                   }}
//                 >
//                   {step.icon}
//                 </div>
//                 <h5 className="fw-bold mb-2" style={{ color: '#2D5D7B', fontSize: '1rem' }}>{step.title}</h5>
//                 <p style={{ fontSize: '0.85rem', color: '#5A6A7D' }}>{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
 
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-center mt-3"
//         >
//           {/* <button
//             className="btn btn-lg px-4 py-2 fw-bold"
//             style={{
//               background: 'linear-gradient(135deg, #2D5D7B 0%, #3a7ca5 100%)',
//               color: 'white',
//               borderRadius: '8px',
//               boxShadow: '0 4px 12px rgba(45, 93, 123, 0.25)'
//             }}
//           >
//             Start Now
//           </button> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }







import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaRobot,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // ✅ assuming you're using react-i18next

export default function MiniRoadmap() {
  const { t, i18n } = useTranslation(); // automatically reacts to Navbar changes
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    // Dynamically import the current language file
    import(`../../i18n/${i18n.language}.json`)
      .then((res) => setTranslations(res.default))
      .catch(() => import(`../../i18n/en.json`).then((r) => setTranslations(r.default)));
  }, [i18n.language]);

  // Update page title when translations are ready
  useEffect(() => {
    if (translations) {
      document.title = `${translations.pageTitle} | NOVYA - ${translations.platformName}`;
    }
  }, [translations]);

  const icons = [<FaBookOpen />, <FaRobot />, <FaLaptopCode />, <FaCertificate />];

  if (!translations)
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)",
        padding: "2rem 0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2
            className="fw-bold mb-3"
            style={{ color: "#2D5D7B", fontSize: "2rem" }}
          >
            {translations.heading}
          </h2>
          <p className="lead" style={{ color: "#5A6A7D", fontSize: "1rem" }}>
            {translations.subheading}
          </p>
        </motion.div>

        <div className="row justify-content-center">
          {Array.isArray(translations.steps) &&
            translations.steps.map((step, index) => (
              <motion.div
                key={index}
                className="col-6 col-md-3 mb-4 d-flex justify-content-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="text-center p-3 rounded shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    borderTop: `4px solid ${step.color}`,
                    width: "100%",
                    maxWidth: "220px",
                    height: "220px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      color: step.color,
                      marginBottom: "10px",
                    }}
                  >
                    {icons[index]}
                  </div>
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#2D5D7B", fontSize: "1rem" }}
                  >
                    {step.title}
                  </h5>
                  <p style={{ fontSize: "0.85rem", color: "#5A6A7D" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
