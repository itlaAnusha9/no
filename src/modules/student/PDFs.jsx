import React, { useState } from "react";
import { Download, Eye, ArrowLeft } from "lucide-react";
 
const NovyaPlatform = () => {
  const [viewingMaterial, setViewingMaterial] = useState(null);
 
  // Study materials with correct paths and thumbnail images
  const studyMaterials = [
    { id: 1, title: "Changes around us: Physical and Chemical", subject: "Science", file: "pdfs/science/7-Science-chpt-1.pdf", image: "https://images.piclumen.com/normal/20250828/18/32cac09729e24e4aa50fe788aff5cc01.webp" },
    { id: 2, title: "The World of Metals and Non-metals", subject: "Science", file: "pdfs/Science/7-Science-chpt-4.pdf", image: "https://images.piclumen.com/normal/20250828/18/4381bc9abac4468bb3842e178d8ebb3b.webp" },
    { id: 3, title: "Electricity: Circuits and Their Components", subject: "Science", file: "pdfs/Science/7-Science-chpt-3.pdf", image: "https://images.piclumen.com/normal/20250828/18/e6bcce18f92f48fc9bb5ea35631b8ec9.webp" },
    { id: 4, title: "The Delhi Sultans", subject: "Social", file: "pdfs/social/History (3)The Delhi Sultans.pdf", image: "https://images.piclumen.com/normal/20250828/18/6059729376ff47a28ee2fcc195334a9a.webp" },
    { id: 5, title: "Tracing Changes Through a Thousand Years", subject: "Social", file: "pdfs/social/History (1)Tracing Changes Through A Thousand Years.pdf", image: "https://images.piclumen.com/normal/20250828/18/720fcc1df1ba47a8bc01d0ace5df0638.webp" },
    { id: 6, title: "The Mughal Empire", subject: "Social", file: "pdfs/social/History (4)The Mughal Empire.pdf", image: "https://images.piclumen.com/normal/20250828/17/863a9ca17cc44801a8e60cf83a4f80a6.webp" },
    { id: 7, title: "Large Numbers Around Us", subject: "Maths", file: "pdfs/maths/maths ch-1.pdf", image: "https://images.piclumen.com/normal/20250828/18/534136f7ec114abb8f25c7369270df5e.webp" },
    { id: 8, title: "A Peek Beyond The Point", subject: "Maths", file: "pdfs/maths/maths ch-3.pdf", image: "https://images.piclumen.com/normal/20250828/19/86a4100bf3ac4f74a03dfa59d33c1052.webp" },
    { id: 9, title: "Lines", subject: "Maths", file: "pdfs/maths/maths ch-5.pdf", image: "https://images.piclumen.com/normal/20250828/19/b4d67ad4763b4aa6836a95cf3ed6ccd7.webp" },
    { id: 10, title: "BRAVEHEARTS", subject: "English", file: "pdfs/english/7th english unit -5 BRAVEHEARTS.pdf", image: "https://images.piclumen.com/normal/20250828/21/3576476b78ec4641b2effb164deed034.webp" },
    { id: 11, title: "WIT AND HUMOUR", subject: "English", file: "pdfs/english/7th english unit -2 WIT AND HUMOUR.pdf", image: "https://images.piclumen.com/normal/20250828/21/72d0822652ff405592906aa3c9b77892.webp" },
    { id: 12, title: "LEARNING TOGETHER", subject: "English", file: "pdfs/english/7th english  unit -1 LEARNING TOGETHER.pdf", image: "https://images.piclumen.com/normal/20250828/21/693b53274a9d46ab93bc7c8582f9cc29.webp" },
  ];
 
  // Download PDF
  const handleDownload = (material) => {
    const link = document.createElement("a");
    link.href = encodeURI(`${process.env.PUBLIC_URL}/${material.file}`);
    link.download = material.file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  // View PDF fullscreen
  const handleView = (material) => {
    setViewingMaterial(material);
    document.body.style.overflow = "hidden";
  };
 
  // Back button handler
  const handleBack = () => {
    setViewingMaterial(null);
    document.body.style.overflow = "auto";
  };
 
  return (
    <>
      <style>
        {`
          .responsive-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            max-width: 1400px;
            margin: 0 auto;
          }
          
          @media (max-width: 768px) {
            .responsive-grid {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 0 10px;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-grid {
              gap: 15px;
            }
          }
        `}
      </style>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      {!viewingMaterial && (
        <>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Downloadable Resources</h1>
          <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
            Browse and download study notes and materials for offline access.
          </p>
 
          <div className="responsive-grid">
            {studyMaterials.map((material) => (
              <div
                key={material.id}
                style={{
                  background: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #ddd",
                }}
              >
                {/* Image */}
                <div
                  onClick={() => handleView(material)}
                  style={{ cursor: "pointer", height: "200px", width: "100%", overflow: "hidden" }}
                >
                  <img
                    src={material.image}
                    alt={material.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
 
                <div
                  style={{
                    padding: "15px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111", lineHeight: "1.3" }}>{material.title}</h3>
                    <p style={{ margin: "0 0 12px 0", color: "#777", fontSize: "14px" }}>{material.subject}</p>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => handleDownload(material)}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                        padding: "8px 12px",
                        backgroundColor: "#2D5D7B",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Download size={16} /> Download PDF
                    </button>
                    <button
                      onClick={() => handleView(material)}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                        padding: "8px 12px",
                        backgroundColor: "#2D5D7B",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Eye size={16} /> View PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
 
      {/* Fullscreen PDF Viewer */}
      {viewingMaterial && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1000 }}>
          {/* Back button with animation */}
          <button
            onClick={handleBack}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#2D5D7B",
              color: "white",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              borderRadius: "5px",
              zIndex: 1001,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.background = "#1E3A8A";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "#2D5D7B";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
          >
            <ArrowLeft size={14} /> Back
          </button>
 
          <iframe
            src={`${process.env.PUBLIC_URL}/${viewingMaterial.file}#toolbar=0&navpanes=0&scrollbar=0`}
            title={viewingMaterial.title}
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
    </>
  );
};
 
export default NovyaPlatform;