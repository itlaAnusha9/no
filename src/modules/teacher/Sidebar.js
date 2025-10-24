import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Userlist', path: '/userlist' },
    { id: 3, name: 'Attendance', path: '/attendance' },
    { id: 4, name: 'Progress', path: '/progress' },
    { id: 5, name: 'Grades', path: '/grades' },
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#2D5D7B',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        left: 0,
        top: 0,
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          padding: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <img
            src="/home/assets/logo.png"
            alt="Novya Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              color: '#2D5D7B',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            <span>N</span>
          </div>
        </div>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: 0,
            color: '#fff',
          }}
        >
          Novya
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav style={{ flexGrow: 1, overflowY: 'auto' }}>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {menuItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '5px' }}>
              <button
                onClick={() => navigate(item.path)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '12px 20px',
                  color: isActive(item.path) ? '#2D5D7B' : '#fff',
                  backgroundColor: isActive(item.path)
                    ? '#fff'
                    : 'transparent',
                  fontWeight: isActive(item.path) ? '600' : 'normal',
                  borderLeft: isActive(item.path)
                    ? '5px solid #A62D69'
                    : '5px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path))
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path))
                    e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <div
                    style={{
                      height: '2px',
                      backgroundColor: '#A62D69',
                      marginTop: '5px',
                      borderRadius: '2px',
                      width: '40%',
                    }}
                  ></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer with Logout */}
      <div
        style={{
          padding: '15px 20px',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '8px',
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#A62D69',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#912358')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#A62D69')}
        >
          <span style={{ marginRight: '10px', fontSize: '18px' }}>🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
