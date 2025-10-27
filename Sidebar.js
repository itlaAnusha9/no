import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import novyaLogo from '../home/assets/NOVYA LOGO.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { id: 1, name: t('Dashboard'), path: '/teacher/dashboard' },
    { id: 2, name: t('Userlist'), path: '/teacher/userlist' },
    { id: 3, name: t('Attendance'), path: '/teacher/attendance' },
    { id: 4, name: t('Progress'), path: '/teacher/results' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const isActive = (path) => {
    const currentPath = location.pathname.replace(/\/$/, '');
    const targetPath = path.replace(/\/$/, '');
    return currentPath === targetPath || currentPath.startsWith(targetPath + '/');
  };

  return (
    <div
      style={{
        width: '260px',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        color: '#2D5D7B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        left: 0,
        top: 0,
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Reduced top header section */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px',
          cursor: 'pointer',
          backgroundColor: '#F4F8FB',
          minHeight: '80px',
        }}
        onClick={() => navigate('/teacher/dashboard')}
      >
        <img
          src={novyaLogo}
          alt="Novya Logo"
          style={{
            width: '56px',
            height: '46px',
          
          
            
          }}
        />
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2D5D7B',
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          {t('NOVYA')}
        </h1>
      </div>

      {/* Navigation menu remains the same */}
      <nav style={{ flexGrow: 1, overflowY: 'auto', backgroundColor: '#FFFFFF' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.id} style={{ marginBottom: '5px' }}>
                <button
                  onClick={() => navigate(item.path)}
                  style={{
                    width: '100%',
                    background: active ? '#2D5D7B' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    padding: '14px 20px',
                    color: active ? '#FFFFFF' : '#222831',
                    fontWeight: active ? '600' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: active ? '0 8px 8px 0' : '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.target.style.backgroundColor = 'rgba(45, 93, 123, 0.1)';
                      e.target.style.color = '#2D5D7B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#222831';
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {active && (
                    <div
                      style={{
                        height: '2px',
                        marginTop: '6px',
                        borderRadius: '2px',
                        width: '40%',
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer remains the same */}
      <div
        style={{
          padding: '15px 20px',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '8px',
          backgroundColor: '#F4F8FB',
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#DC3545',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#b52b40')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#DC3545')}
        >
          <span style={{ marginRight: '10px', fontSize: '18px' }}>←</span>
          {t('logout')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;