

import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'react-bootstrap';
import { FaCheckCircle, FaRegCircle, FaPlay, FaGraduationCap, FaClock } from 'react-icons/fa';

const StudyPlanner = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [planner] = useState([
    {
      date: '2025-07-01',
      subject: 'Mathematics',
      topic: 'Fractions',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: true,
      duration: '45 mins'
    },
    {
      date: '2025-07-02',
      subject: 'Science',
      topic: 'Water Cycle',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: false,
      duration: '60 mins'
    },
    {
      date: '2025-07-03',
      subject: 'English',
      topic: 'Essay Writing',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: false,
      duration: '90 mins'
    },
    {
      date: '2025-07-04',
      subject: 'Social Studies',
      topic: 'Types of Government',
      videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      completed: true,
      duration: '30 mins'
    },
  ]);

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    setCurrentVideo('');
  };

  return (
    <>
      <Card style={{
        marginBottom: '1rem',
        borderRadius: '12px',
        border: 'none',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
        backgroundColor: '#F4F8FB'
      }}>
        <Card.Body style={{ padding: '0' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.5rem 1.5rem 0.75rem',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              backgroundColor: 'rgba(45, 93, 123, 0.1)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              color: '#2D5D7B'
            }}>
              <FaGraduationCap />
            </div>
            <div>
              <Card.Title style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                margin: '0',
                color: '#2D5D7B'
              }}>
                Study Planner
              </Card.Title>
              <p style={{
                color: '#6c757d',
                marginBottom: '0',
                fontSize: '0.85rem'
              }}>
                Daily study plan with video resources
              </p>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <Table style={{ marginBottom: '0', borderCollapse: 'collapse', width: '100%' }}>
              <thead style={{ backgroundColor: '#2D5D7B', color: 'white' }}>
                <tr>
                  {['Date', 'Subject', 'Topic', 'Video', 'Duration', 'Status'].map((heading, idx) => (
                    <th key={idx} style={{ padding: '12px 16px', fontWeight: '500', textAlign: 'left' }}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planner.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.05)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '14px 16px', fontWeight: '500' }}>{item.date}</td>
                    <td style={{ padding: '14px 16px', fontWeight: '600' }}>{item.subject}</td>
                    <td style={{ padding: '14px 16px' }}>{item.topic}</td>
                    <td style={{ padding: '14px 16px' }}>
                      {item.videoLink ? (
                        <Button
                          variant="link"
                          onClick={() => handleVideoClick(item.videoLink)}
                          style={{
                            padding: '0',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#2D5D7B',
                            textDecoration: 'none',
                            fontWeight: '500'
                          }}
                        >
                          <FaPlay style={{ marginRight: '4px' }} />
                          Play Video
                        </Button>
                      ) : null}
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: '500' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaClock style={{ marginRight: '8px', color: '#6c757d' }} />
                        {item.duration}
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{
                        backgroundColor: item.completed ? 'rgba(40, 167, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                        color: item.completed ? '#28a745' : '#ffc107',
                        border: `1px solid ${item.completed ? '#28a745' : '#ffc107'}`,
                        fontWeight: '600',
                        padding: '3px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        width: 'fit-content'
                      }}>
                        {item.completed ? (
                          <FaCheckCircle style={{ marginRight: '4px' }} />
                        ) : (
                          <FaRegCircle style={{ marginRight: '4px' }} />
                        )}
                        {item.completed ? 'Completed' : 'Pending'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      {/* Video Modal */}
      <Modal show={showVideoModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Study Video</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0' }}>
          {currentVideo && (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
              <iframe
                src={currentVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudyPlanner;