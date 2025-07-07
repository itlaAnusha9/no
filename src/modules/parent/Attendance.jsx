
import React from 'react';
import { Card, ProgressBar, Badge } from 'react-bootstrap';

const Attendance = () => {
  const totalDays = 200;
  const presentDays = 170;
  const absentDays = totalDays - presentDays;
  const presentPercentage = Math.round((presentDays / totalDays) * 100);

  let status = '';
  let variant = '';
  let statusEmoji = '';
  if (presentPercentage >= 90) {
    status = 'Excellent';
    variant = 'success';
    statusEmoji = '🎯';
  } else if (presentPercentage >= 75) {
    status = 'Good';
    variant = 'warning';
    statusEmoji = '👍';
  } else {
    status = 'Needs Attention';
    variant = 'danger';
    statusEmoji = '⚠️';
  }

  const themeColors = {
    primary: '#2D5D7B',
    highlight: '#A62D69',
    success: '#28a745',
    warning: '#FFA500',
    danger: '#dc3545',
    text: '#222831',
    bg: '#F4F8FB',
    goodBg: 'linear-gradient(135deg, rgba(0, 150, 255, 0.15) 0%, rgba(100, 200, 255, 0.25) 100%)',
    goodBorder: '#0096FF'
  };

  return (
    <Card className="mb-4" style={{
      backgroundColor: themeColors.bg,
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <Card.Body style={{ padding: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <Card.Title style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: themeColors.primary,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '1.8rem',
              animation: 'float 3s ease-in-out infinite'
            }}>📊</span>
            Attendance Summary
          </Card.Title>
          <div style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: variant === 'success' ? themeColors.primary :
              variant === 'warning' ? themeColors.warning :
                themeColors.highlight,
            animation: 'pulse 2s infinite'
          }}>
            {presentPercentage}%
          </div>
        </div>

        <div className="row" style={{ marginBottom: '1.5rem', gap: '1rem' }}>
          <div className="col-md" style={{
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(45, 93, 123, 0.08)'
          }}>
            <div style={{ color: themeColors.text, opacity: 0.8, fontSize: '0.9rem' }}>Total Days</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: themeColors.primary }}>{totalDays}</div>
          </div>

          <div className="col-md" style={{
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(40, 167, 69, 0.08)'
          }}>
            <div style={{ color: themeColors.text, opacity: 0.8, fontSize: '0.9rem' }}>Present</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: themeColors.success }}>{presentDays}</div>
          </div>

          <div className="col-md" style={{
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(220, 53, 69, 0.08)'
          }}>
            <div style={{ color: themeColors.text, opacity: 0.8, fontSize: '0.9rem' }}>Absent</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: themeColors.highlight }}>{absentDays}</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            color: themeColors.text,
            opacity: 0.8,
            fontSize: '0.95rem'
          }}>
            <span>Attendance Progress</span>
            <span>{presentDays}/{totalDays} days</span>
          </div>
          <ProgressBar
            now={presentPercentage}
            label={`${presentPercentage}%`}
            variant={variant}
            striped
            animated
            style={{
              height: '1rem',
              borderRadius: '10px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          borderRadius: '10px',
          width: '100%',
          background: variant === 'success' ? 'rgba(45, 93, 123, 0.2)' :
            variant === 'warning' ? themeColors.goodBg :
              'rgba(166, 45, 105, 0.2)',
          borderLeft: `4px solid ${variant === 'success' ? themeColors.primary :
            variant === 'warning' ? themeColors.goodBorder :
              themeColors.highlight}`,
          transition: 'all 0.3s ease',
          boxShadow: variant === 'warning' ? '0 2px 8px rgba(0, 150, 255, 0.2)' : 'none'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            color: themeColors.text
          }}>
            <span style={{ fontSize: '1.2rem' }}>{statusEmoji}</span>
            <span>Status: <strong style={{
              color: variant === 'warning' ? themeColors.goodBorder : 'inherit'
            }}>{status}</strong></span>
          </div>
          <Badge pill style={{
            padding: '0.6rem 1.5rem',
            minWidth: '100px',
            fontSize: '1rem',
            fontWeight: '700',
            backgroundColor: variant === 'success' ? themeColors.primary :
              variant === 'warning' ? themeColors.goodBorder :
                themeColors.highlight,
            color: 'white',
            animation: 'bounce 1s infinite alternate',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: variant === 'warning' ? '1px solid rgba(255,255,255,0.3)' : 'none',
            textAlign: 'center'
          }}>
            {status.toUpperCase()}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Attendance;
