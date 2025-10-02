









// import React, { useState } from "react";
 
// function QuizSubject({
//   subjects,
//   subtopics,
//   selectedSubject,
//   selectedGrade,
//   onSubjectClick,
//   onSubtopicClick,
//   onBackToGrades,
// }) {
//   const subjectIcons = ["💻", "📜", "🏛️", "🧮", "🌍", "🔬", "⚙️", "🎨"];
//   const subjectColors = {
//     Computers: "#3498db",
//     History: "#e74c3c",
//     Civics: "#9b59b6",
//     Maths: "#f39c12",
//     Geography: "#27ae60",
//     Science: "#e67e22",
//     "Engine chapters and topics": "#f9fbfd",
//     "Explore chapters and topics": "#34495e",
//   };
 
//   if (!selectedSubject) {
//     return (
//       <section
//         style={{
//           padding: "3rem 1rem",
//           background: "#f9fbfd",
//           minHeight: "100vh",
//         }}
//       >
        
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <button
//             onClick={onBackToGrades}
//             style={{
//               background: "linear-gradient(135deg, #2c3e50, #34495e)",
//               color: "white",
//               border: "none",
//               borderRadius: "50px",
//               padding: "0.8rem 1.8rem",
//               cursor: "pointer",
//               fontWeight: "600",
//               fontSize: "1rem",
//               marginBottom: "2rem",
//               transition: "all 0.3s ease",
//               boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//             }}
//           >
//             ← Back to Grades
//           </button>
 
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "800",
//               color: "#2c3e50",
//               margin: 0,
//             }}
//           >
//             Select Your Subject
//           </h2>
//           <p
//             style={{
//               color: "#2c3e50",
//               fontSize: "1.2rem",
//               margin: "0.8rem 0 0",
//               fontWeight: "500",
//             }}
//           >
//             Choose a subject for Grade {selectedGrade}
//           </p>
//         </div>
 
//         {/* Subject Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "2rem",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           {subjects.map((sub, i) => (
//             <div
//               key={i}
//               onClick={() => onSubjectClick(sub)}
//               style={{
//                 background: "white",
//                 borderRadius: "20px",
//                 padding: "2rem",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//                 transition: "all 0.3s ease",
//                 border: "1px solid #eee",
//               }}
//             >
//               {/* Icon */}
//               <div
//                 style={{
//                   fontSize: "3rem",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 {subjectIcons[i % subjectIcons.length]}
//               </div>
 
//               {/* Subject Title */}
//               <h3
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "700",
//                   background: `linear-gradient(135deg, ${
//                     subjectColors[sub] || "#6c5ce7"
//                   }, #e84393)`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 {sub}
//               </h3>
 
//               {/* Details Section */}
//               <div
//                 style={{
//                   textAlign: "left",
//                   padding: "1rem",
//                   borderRadius: "12px",
//                   background: "#f8f9fa",
//                   boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <p
//                   style={{
//                     margin: "0.4rem 0",
//                     fontSize: "1rem",
//                     color: "#2c3e50",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.6rem",
//                   }}
//                 >
//                   📖 <span style={{ fontWeight: "600" }}>Chapters</span>
//                 </p>
//                 <p
//                   style={{
//                     margin: "0.4rem 0",
//                     fontSize: "1rem",
//                     color: "#2c3e50",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.6rem",
//                   }}
//                 >
//                   📑 <span style={{ fontWeight: "600" }}>Sub-Topics</span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
 
//   return (
//     <QuizSubtopics
//       subtopics={subtopics}
//       onSubtopicClick={onSubtopicClick}
//       selectedSubject={selectedSubject}
//       selectedGrade={selectedGrade}
//       onBackToSubjects={() => onSubjectClick(null)}
//     />
//   );
// }
 
// // --------------------
// // SUBTOPIC SELECTION
// // --------------------
// function QuizSubtopics({
//   subtopics,
//   onSubtopicClick,
//   selectedSubject,
//   selectedGrade,
//   onBackToSubjects,
// }) {
//   const [activeChapter, setActiveChapter] = useState(null);
//   const [hoveredSubtopic, setHoveredSubtopic] = useState(null);
 
//   const subjectColors = {
//     Computers: "#3498db",
//     History: "#e74c3c",
//     Civics: "#9b59b6",
//     Maths: "#f39c12",
//     Geography: "#27ae60",
//     Science: "#e67e22",
//   };
 
//   return (
//     <section style={{ display: "flex", minHeight: "100vh", background: "#f1f2f6" }}>
//       {/* Sidebar */}
//       <aside
//         style={{
//           width: "300px",
//           background: "white",
//           padding: "2rem",
//           borderRight: "1px solid #eee",
//         }}
//       >
//         <button
//           onClick={onBackToSubjects}
//           style={{
//             marginBottom: "1.5rem",
//             background: "#2c3e50",
//             color: "white",
//             border: "none",
//             borderRadius: "10px",
//             padding: "0.8rem 1.2rem",
//             cursor: "pointer",
//             fontWeight: "600",
//             width: "100%",
//           }}
//         >
//           ← Back to Subjects
//         </button>
 
//         <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem" }}>
//           📖 Chapters ({selectedSubject}, {selectedGrade}) Grade
//         </h3>
 
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {Object.keys(subtopics).map((chapter, i) => (
//             <li key={i} style={{ marginBottom: "1rem" }}>
//               <button
//                 onClick={() =>
//                   setActiveChapter(activeChapter === chapter ? null : chapter)
//                 }
//                 style={{
//                   width: "100%",
//                   textAlign: "left",
//                   padding: "0.8rem 1rem",
//                   borderRadius: "8px",
//                   border:
//                     activeChapter === chapter
//                       ? `2px solid ${subjectColors[selectedSubject] || "#6c5ce7"}`
//                       : "1px solid #ddd",
//                   background: activeChapter === chapter ? "#ecf0f1" : "#fff",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                 }}
//               >
//                 {chapter}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>
 
//       {/* Main */}
//       <main style={{ flex: 1, padding: "2rem" }}>
//         {!activeChapter ? (
//           <p style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.2rem" }}>
//             Select a chapter to view subtopics
//           </p>
//         ) : (
//           <div>
//             <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
//               {activeChapter}
//             </h2>
//             <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//               {subtopics[activeChapter].map((topic, j) => (
//                 <button
//                   key={j}
//                   onClick={() => onSubtopicClick(topic)}
//                   onMouseEnter={() => setHoveredSubtopic(j)}
//                   onMouseLeave={() => setHoveredSubtopic(null)}
//                   style={{
//                     padding: "1rem 1.5rem",
//                     borderRadius: "10px",
//                     border: "1px solid #ddd",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     cursor: "pointer",
//                     background: hoveredSubtopic === j ? "#ecf0f1" : "white",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   <span style={{ fontWeight: "600" }}>{topic}</span>
//                   <span
//                     style={{
//                       background: "#0984e3",
//                       color: "white",
//                       padding: "0.4rem 0.8rem",
//                       borderRadius: "8px",
//                       fontSize: "0.85rem",
//                       fontWeight: "600",
//                     }}
//                   >
//                     ⏱️ Start Quiz →
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>
//     </section>
//   );
// }
 
// export default QuizSubject;
 










import React, { useState } from "react";
import { useQuiz } from "./QuizContext";
 
function QuizSubject({
  subjects,
  subtopics,
  selectedSubject,
  selectedClass,
  onClassClick,
  onSubjectClick,
  onSubtopicClick,
}) {
  const { startQuiz } = useQuiz();
  const [activeChapter, setActiveChapter] = useState(null);
  const [hoveredSubtopic, setHoveredSubtopic] = useState(null);
 
  const subjectIcons = ["💻", "📜", "🏛️", "🧮", "🌍", "🔬", "⚙️", "🎨"];
  const subjectColors = {
    Computers: "#3498db",
    History: "#e74c3c",
    Civics: "#9b59b6",
    Maths: "#f39c12",
    Geography: "#27ae60",
    Science: "#e67e22",
  };
 
  const handleSubtopicClick = (topic) => {
    startQuiz();
    onSubtopicClick(topic);
  };
 
  const backToGrades = () => {
    if (onClassClick) onClassClick(null); // Go back to Grade selection
  };
 
  const backToSubjects = () => {
    if (onSubjectClick) onSubjectClick(null); // Go back to Subject selection
  };
 
  // Subject selection page
  if (!selectedSubject) {
    return (
      <section style={{ padding: "3rem 1rem", background: "#f9fbfd", minHeight: "100vh" }}>
        <button
          onClick={backToGrades}
          style={{
            marginBottom: "1.5rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back to Grades
        </button>
 
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2c3e50", margin: 0 }}>
            Select Your Subject
          </h2>
          <p style={{ color: "#2c3e50", fontSize: "1.2rem", margin: "0.8rem 0 0", fontWeight: "500" }}>
            Choose a subject for Grade {selectedClass}
          </p>
        </div>
 
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {(subjects || []).map((sub, i) => (
            <div
              key={i}
              onClick={() => onSubjectClick(sub)}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2rem",
                cursor: "pointer",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                border: "1px solid #eee",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {subjectIcons[i % subjectIcons.length]}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  background: `linear-gradient(135deg, ${subjectColors[sub] || "#6c5ce7"}, #e84393)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "1rem",
                }}
              >
                {sub}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
 
  // Subtopic selection page
  return (
    <section style={{ display: "flex", minHeight: "100vh", background: "#f1f2f6" }}>
      <aside style={{ width: "300px", background: "white", padding: "2rem", borderRight: "1px solid #eee" }}>
        <button
          onClick={backToSubjects}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Back to Subjects
        </button>
 
        <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem" }}>
          📖 Chapters ({selectedSubject})
        </h3>
 
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(subtopics || {}).map((chapter, i) => (
            <li key={i} style={{ marginBottom: "1rem" }}>
              <button
                onClick={() => setActiveChapter(activeChapter === chapter ? null : chapter)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.8rem 1rem",
                  borderRadius: "8px",
                  border:
                    activeChapter === chapter
                      ? `2px solid ${subjectColors[selectedSubject] || "#6c5ce7"}`
                      : "1px solid #ddd",
                  background: activeChapter === chapter ? "#ecf0f1" : "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {chapter}
              </button>
            </li>
          ))}
        </ul>
      </aside>
 
      <main style={{ flex: 1, padding: "2rem" }}>
        {!activeChapter ? (
          <p style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.2rem" }}>
            Select a chapter to view subtopics
          </p>
        ) : (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>{activeChapter}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {(subtopics[activeChapter] || []).map((topic, j) => (
                <button
                  key={j}
                  onClick={() => handleSubtopicClick(topic)}
                  onMouseEnter={() => setHoveredSubtopic(j)}
                  onMouseLeave={() => setHoveredSubtopic(null)}
                  style={{
                    padding: "1rem 1.5rem",
                    borderRadius: "10px",
                    border: "1px solid #ddd",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    background: hoveredSubtopic === j ? "#ecf0f1" : "white",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>{topic}</span>
                  <span
                    style={{
                      background: "#0984e3",
                      color: "white",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    ⏱️ Start Quiz →
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
 
export default QuizSubject;