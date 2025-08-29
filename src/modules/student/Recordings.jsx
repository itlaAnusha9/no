import React, { useState } from "react";
 
const LessonRecordings = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playing, setPlaying] = useState(null); // track play/pause overlay
 
  // Lesson videos list
  const videos = [
    {
      id: 1,
      title: "Video: The Ever Evolving World of Science",
      subject: "Science",
      src: "/videos/science/chapter-1.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/17/102bf976635c41bcbebf7829229ecca9.webp",
    },
    {
      id: 2,
      title: "Video: Exploring substances:Acidic, Basic, Neutral",
      subject: "Science",
      src: "/videos/science/chapter-2.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/17/e51532b3f16946ef9a7e12c9d2498c57.webp",
    },
    {
      id: 3,
      title: "Video: A Quiet village morning",
      subject: "English",
      src: "/videos/english/7th english unit -1 LEARNING TOGETHER (2).mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/aa06488aa8154dfab8e1691bbb226f0b.webp",
    },
    {
      id: 4,
      title: "Video: The power of perseverance",
      subject: "English",
      src: "/videos/english/7th english unit -1 LEARNING TOGETHER.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/17/7fce42770e7c458dbd8c14aa77cfec96.webp",
    },
    {
      id: 5,
      title: "Video: Setting the stage",
      subject: "English",
      src: "/videos/english/english_3.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/17/aa222a6a28a7417ebbe7a24f7448cfc4.webp",
 
    },
    {
      id: 6,
      title: "Video: Introduction to Electricity",
      subject: "Science",
      src: "/videos/science/chapter-3.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/32561f2b70e949f5ae31df7c6abd5ca7.webp",
    },
    {
      id: 7,
      title: "Video: The world of Metals and Non-metals",
      subject: "Science",
      src: "/videos/science/chapter-4.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/53c66f3becb94e7bb71cd923d5a1ebf2.webp",
    },
    {
      id: 8,
      title: "Video: Large Numbers Around Us",
      subject: "Maths",
      src: "/videos/maths/chapter-1.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/65d0125149934d9d9f45ef5f9717a1a1.webp",
    },
    {
      id: 9,
      title: "Video: What are Arthmetic Expressions?",
      subject: "Maths",
      src: "/videos/maths/chapter-2.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/3d226d6847db47ea9d0f137ef2c231e2.webp",
    },
    {
      id: 10,
      title: "Video: Introduction to Algebraic Expressions ",
      subject: "Maths",
      src: "/videos/maths/chapter-4.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/057d63e090744bea82b73d4f616eb1e7.webp",
    },
    {
      id: 11,
      title: "Video: Tracing changes to Maps",
      subject: "Social",
      src: "/videos/social/chapter1 (online-video-cutter.com).mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/18/418ae05d8bdc41449159891f7c392e7d.webp",
    },
    {
      id: 12,
      title: "Video: New kings and kingdoms",
      subject: "Social",
      src: "/videos/social/chpter2social.mp4",
      thumbnail: "https://images.piclumen.com/normal/20250828/17/bb4525b043d74cb3bf940be7c94bba0b.webp",
    },
  ];
 
  return (
    <>
      <style>
        {`
          .video-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }
          
          @media (max-width: 768px) {
            .video-grid {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 0 10px;
            }
          }
          
          @media (max-width: 480px) {
            .video-grid {
              gap: 15px;
            }
          }
        `}
      </style>
      <div
        style={{
          paddingTop: "120px",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f5f7fa",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#111" }}>Lesson Recordings</h1>
        <p style={{ textAlign: "center", color: "#555" }}>
          Catch up on lectures or review complex topics with our recorded lessons.
        </p>
 
        {/* Video Grid */}
        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                background: "#fff",
              }}
            >
              {/* Thumbnail with overlay button */}
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  background: "#ccc",
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedVideo(video.src)}
                />
 
                {/* Overlay Play/Pause button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlaying(playing === video.id ? null : video.id);
                    setSelectedVideo(video.src); // open fullscreen video
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  {playing === video.id ? "❚❚" : "▶"}
                </button>
              </div>
 
              {/* Card Content */}
              <div style={{ padding: "15px" }}>
                <h4 style={{ margin: "0 0 8px 0", color: "#111" }}>
                  {video.title}
                </h4>
                <p style={{ margin: "0 0 12px 0", color: "#777" }}>
                  {video.subject}
                </p>
                <button
                  onClick={() => setSelectedVideo(video.src)}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    background: "#0d253f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#00a896")}
                  onMouseOut={(e) => (e.target.style.background = "#0d253f")}
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
 
        {/* Fullscreen Modal */}
        {selectedVideo && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              flexDirection: "column",
            }}
          >
            {/* Back Button */}
            <button
              onClick={() => {
                setSelectedVideo(null);
                setPlaying(null); // reset play/pause when going back
              }}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "rgba(255,255,255,0.8)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⟵
            </button>
 
            {/* Video Player */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              style={{
                width: "90%",
                height: "90%",
                background: "#000",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
 
export default LessonRecordings;