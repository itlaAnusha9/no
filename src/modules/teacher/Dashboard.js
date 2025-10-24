import React, { useState, useEffect, useRef } from 'react';
import { studentService } from './Studentdetails';
import { useTranslation } from 'react-i18next';
import {
  FiBell,          
  FiSettings,
  FiGlobe,        
  FiMenu,
  FiX
} from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi2';

// HeaderBar Component
const HeaderBar = ({ 
  selectedSection, 
  onMobileMenuToggle, 
  sections,
  darkMode,
  onThemeToggle,
  parentName,
  onProfileClick,
  currentTime,
  searchTerm,
  onSearchChange
}) => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  
  const { t, i18n } = useTranslation();
  const headerRef = useRef();

  useEffect(() => {
    const initialNotifications = [
      { id: 1, title: t('notifications.newAssignment'), message: t('notifications.assignmentMessage'), time: t('notifications.hoursAgo', { count: 2 }), read: false },
      { id: 2, title: t('notifications.progressReport'), message: t('notifications.progressMessage'), time: t('notifications.daysAgo', { count: 1 }), read: false },
      { id: 3, title: t('notifications.parentMeeting'), message: t('notifications.meetingMessage'), time: t('notifications.daysAgo', { count: 2 }), read: false },
      { id: 4, title: t('notifications.attendance'), message: t('notifications.attendanceMessage'), time: t('notifications.daysAgo', { count: 2 }), read: false },
    ];
    setNotifications(initialNotifications);
    setUnreadNotificationsCount(initialNotifications.filter(n => !n.read).length);
  }, [t, i18n.language]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowNotifications(false);
        setShowSettings(false);
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(i18n.language, {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return t('parentdashboard.greeting.morning');
    if (hour < 17) return t('parentdashboard.greeting.afternoon');
    return t('parentdashboard.greeting.evening');
  };

  const markNotificationAsRead = (id) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
    setUnreadNotificationsCount(updatedNotifications.filter(n => !n.read).length);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
    setUnreadNotificationsCount(0);
  };

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
    localStorage.setItem('preferredLanguage', lng);
  };

  const handleDropdownToggle = (dropdownType) => {
    // Close all other dropdowns
    setShowNotifications(dropdownType === 'notifications' ? !showNotifications : false);
    setShowSettings(dropdownType === 'settings' ? !showSettings : false);
    setShowLanguageDropdown(dropdownType === 'language' ? !showLanguageDropdown : false);
  };

  const currentSection = sections?.find(s => s.key === selectedSection);
  const sectionLabel = currentSection?.label || t('dashboard.title');

  return (
    <header className="top-header" ref={headerRef}>
      <div className="header-left">
        <button
          className="mobile-menu-btn"
          onClick={onMobileMenuToggle}
        >
          <FiMenu />
        </button>
        <div className="header-title">
          <h1>{sectionLabel}</h1>
          <p>{getGreeting()}! {t('parentdashboard.welcome')}</p>
        </div>
      </div>
     
      <div className="header-right">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder={t('common.searchPlaceholder')}
            value={searchTerm}
            onChange={onSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="time-display">
          <div className="current-time">{formatTime(currentTime)}</div>
          <div className="current-date">
            {currentTime.toLocaleDateString(i18n.language, { 
              weekday: 'long', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div className="header-actions">
          {/* Language Selector */}
          <div className="language-container">
            <button
              className="action-btn"
              onClick={() => handleDropdownToggle('language')}
              aria-label={t('common.language')}
            >
              <FiGlobe />
            </button>

            {showLanguageDropdown && (
              <div className="language-dropdown">
                <div className="dropdown-header">
                  <h3>{t('common.language')}</h3>
                  <button
                    className="close-dropdown-btn"
                    onClick={() => setShowLanguageDropdown(false)}
                    aria-label={t('common.close')}
                  >
                    <FiX />
                  </button>
                </div>
                <div className="language-options">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="language-native">{lang.nativeName}</span>
                      <span className="language-name">({lang.name})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="notification-container">
            <button
              className="action-btn"
              onClick={() => handleDropdownToggle('notifications')}
              aria-label={t('common.notifications')}
            >
              <FiBell />
              {unreadNotificationsCount > 0 && (
                <span className="notification-badge">{unreadNotificationsCount}</span>
              )}
            </button>

            {showNotifications && (
              <div className="notification-dropdown">
                <div className="dropdown-header">
                  <h3>{t('common.notifications')}</h3>
                  <div className="header-actions-right">
                    <button
                      className="clear-all-btn"
                      onClick={clearAllNotifications}
                    >
                      {t('common.clearAll')}
                    </button>
                    <button
                      className="close-dropdown-btn"
                      onClick={() => setShowNotifications(false)}
                      aria-label={t('common.close')}
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
                <div className="notification-list">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                        onClick={() => markNotificationAsRead(notification.id)}
                      >
                        <div className="notification-content">
                          <h4>{notification.title}</h4>
                          <p>{notification.message}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                        {!notification.read && <div className="unread-dot"></div>}
                      </div>
                    ))
                  ) : (
                    <p className="no-notifications">{t('common.noNotifications')}</p>
                  )}
                </div>
              </div>
            )}
          </div>
         
          {/* Settings */}
          <div className="settings-container">
            <button
              className="action-btn"
              onClick={() => handleDropdownToggle('settings')}
              aria-label={t('common.settings')}
            >
              <FiSettings />
            </button>
           
            {showSettings && (
              <div className="settings-dropdown">
                <div className="dropdown-header">
                  <h3>{t('common.settings')}</h3>
                  <button
                    className="close-dropdown-btn"
                    onClick={() => setShowSettings(false)}
                    aria-label={t('common.close')}
                  >
                    <FiX />
                  </button>
                </div>
               
                <div className="settings-option">
                  <div className="settings-label">
                    <span>{t('common.theme')}</span>
                  </div>
                  <div className="theme-toggle">
                    <span>{darkMode ? t('common.darkMode') : t('common.lightMode')}</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={onThemeToggle}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
         
          {/* User Profile */}
          <div
            className="user-profile"
            onClick={onProfileClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onProfileClick();
              }
            }}
          >
            <HiOutlineUserCircle className="profile-avatar" />
            <div className="profile-info">
              <span className="profile-name">{parentName}</span>
              <span className="profile-role">{t('common.role')}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-header {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .dark-mode .top-header {
          background: #1e293b;
          border-bottom: 1px solid #334155;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-title h1 {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-title p {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0.25rem 0 0 0;
        }

        .dark-mode .header-title p {
          color: #94a3b8;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 280px;
        }

        .search-input {
          padding: 12px 40px 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
          background-color: #ffffff;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .search-input:focus {
          border-color: #2D5D7B;
          box-shadow: 0 0 0 3px rgba(45, 93, 123, 0.1);
          outline: none;
        }

        .dark-mode .search-input {
          background-color: #334155;
          border-color: #475569;
          color: #e2e8f0;
        }

        .search-icon {
          position: absolute;
          right: 12px;
          color: #B0BEC5;
          font-size: 16px;
        }

        .time-display {
          text-align: right;
          padding: 0.75rem 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .dark-mode .time-display {
          background: #334155;
          border: 1px solid #475569;
        }

        .current-time {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
        }

        .dark-mode .current-time {
          color: #e2e8f0;
        }

        .current-date {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 2px;
        }

        .dark-mode .current-date {
          color: #94a3b8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .action-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dark-mode .action-btn {
          background: #334155;
          border: 1px solid #475569;
          color: #e2e8f0;
        }

        .action-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .dark-mode .action-btn:hover {
          background: #475569;
        }

        .notification-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #ef4444;
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 600;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          cursor: pointer;
        }

        .dark-mode .user-profile {
          background: #334155;
          border: 1px solid #475569;
        }

        .profile-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .profile-name {
          font-weight: 600;
          font-size: 0.9rem;
          display: block;
          color: #1e293b;
        }

        .dark-mode .profile-name {
          color: #e2e8f0;
        }

        .profile-role {
          font-size: 0.75rem;
          color: #64748b;
        }

        .dark-mode .profile-role {
          color: #94a3b8;
        }

        /* Dropdown Styles */
        .notification-container, .settings-container, .language-container {
          position: relative;
        }

        .notification-dropdown, .settings-dropdown, .language-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          margin-top: 10px;
        }

        .notification-dropdown {
          width: 320px;
          padding: 1rem;
        }

        .settings-dropdown {
          width: 280px;
          padding: 1rem;
        }

        .language-dropdown {
          width: 200px;
          padding: 1rem;
        }

        .dark-mode .notification-dropdown,
        .dark-mode .settings-dropdown,
        .dark-mode .language-dropdown {
          background: #1e293b;
          border: 1px solid #334155;
        }

        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-mode .dropdown-header {
          border-bottom: 1px solid #334155;
        }

        .header-actions-right {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .clear-all-btn {
          background: transparent;
          border: none;
          color: #64748b;
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .clear-all-btn:hover {
          color: #1e293b;
        }

        .dark-mode .clear-all-btn:hover {
          color: #e2e8f0;
        }

        .close-dropdown-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #64748b;
          font-size: 1.2rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: color 0.2s ease;
        }

        .close-dropdown-btn:hover {
          color: #1e293b;
        }

        .dark-mode .close-dropdown-btn:hover {
          color: #e2e8f0;
        }

        .notification-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .notification-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .dark-mode .notification-item {
          border-bottom: 1px solid #334155;
        }

        .notification-item:hover {
          background: #f1f5f9;
        }

        .dark-mode .notification-item:hover {
          background: #334155;
        }

        .notification-item.unread {
          font-weight: 600;
        }

        .notification-content h4 {
          margin: 0 0 0.2rem 0;
          font-size: 0.9rem;
        }

        .notification-content p {
          margin: 0 0 0.3rem 0;
          font-size: 0.8rem;
          color: #64748b;
        }

        .dark-mode .notification-content p {
          color: #94a3b8;
        }

        .notification-time {
          font-size: 0.7rem;
          color: #94a3b8;
        }

        .dark-mode .notification-time {
          color: #cbd5e1;
        }

        .unread-dot {
          width: 10px;
          height: 10px;
          background: #ef4444;
          border-radius: 50%;
          align-self: center;
          margin-left: 0.5rem;
        }

        .no-notifications {
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          padding: 1rem 0;
        }

        .dark-mode .no-notifications {
          color: #94a3b8;
        }

        .settings-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .settings-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #1e293b;
        }

        .dark-mode .settings-label {
          color: #e2e8f0;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #64748b;
        }

        .dark-mode .theme-toggle {
          color: #94a3b8;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 22px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 22px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #667eea;
        }

        input:checked + .slider:before {
          transform: translateX(18px);
        }

        .language-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .language-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .language-option:hover {
          background: #f1f5f9;
        }

        .dark-mode .language-option:hover {
          background: #334155;
        }

        .language-option.active {
          background: #667eea;
          color: white;
        }

        .language-native {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .language-name {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .mobile-menu-btn {
          background: #f1f5f9;
          border: none;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #1e293b;
          font-size: 1.2rem;
        }

        .dark-mode .mobile-menu-btn {
          background: #334155;
          color: #e2e8f0;
        }

        .mobile-menu-btn:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        .dark-mode .mobile-menu-btn:hover {
          background: #475569;
        }

        @media (max-width: 768px) {
          .top-header {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
          }

          .header-left, .header-right {
            width: 100%;
          }

          .header-right {
            justify-content: space-between;
          }

          .search-container {
            width: 200px;
          }

          .time-display {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .user-profile .profile-info {
            display: none;
          }

          .notification-dropdown, .settings-dropdown, .language-dropdown {
            width: 280px;
            right: -1rem;
          }
        }
      `}</style>
    </header>
  );
};

// Color variables
const colors = {
  primary: '#2D5D7B',
  primaryLight: 'rgba(45, 93, 123, 0.1)',
  secondary: '#79B3D7',
  accent: '#A62D69',
  accentLight: 'rgba(166, 45, 105, 0.1)',
  light: '#F4F8FB',
  dark: '#222831',
  success: '#3CB371',
  warning: '#FFC107',
  danger: '#DC3545',
  info: '#4DD0E1',
  muted: '#B0BEC5',
  white: '#FFFFFF',
  borderColor: 'rgba(0, 0, 0, 0.1)'
};

// Chart Components
const BarChart = ({ data, title, color = colors.primary }) => {
  // Fix: Add null check for data
  const safeData = data || [];
  const maxValue = safeData.length > 0 ? Math.max(...safeData.map(item => item.value)) : 0;
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: colors.white,
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      height: '100%',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h4 style={{ 
        margin: '0 0 20px 0', 
        color: colors.dark,
        fontSize: '16px',
        fontWeight: '600'
      }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {safeData.length > 0 ? (
          safeData.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                minWidth: '100px', 
                fontSize: '12px',
                color: colors.dark,
                fontWeight: '500'
              }}>{item.label}</div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div 
                  style={{
                    height: '24px',
                    width: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%`,
                    backgroundColor: color,
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 8px',
                    minWidth: '40px',
                    transition: 'width 0.3s ease'
                  }}
                >
                  <span style={{ 
                    color: colors.white,
                    fontSize: '11px',
                    fontWeight: '600'
                  }}>{item.value}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            color: colors.muted,
            padding: '20px',
            fontSize: '14px'
          }}>
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

const PieChart = ({ data, title }) => {
  const { t } = useTranslation();
  // Fix: Add null check for data
  const safeData = data || [];
  const total = safeData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div style={{
      padding: '20px',
      backgroundColor: colors.white,
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      height: '100%',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h4 style={{ 
        margin: '0 0 20px 0', 
        color: colors.dark,
        fontSize: '16px',
        fontWeight: '600'
      }}>{title}</h4>
      <div style={{ 
        position: 'relative', 
        width: '200px', 
        height: '200px', 
        margin: '0 auto 20px auto' 
      }}>
        {safeData.length > 0 ? (
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            {safeData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const angle = (percentage / 100) * 360;
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const startAngle = currentAngle;
              const endAngle = currentAngle + angle;
              
              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
              
              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `Z`
              ].join(' ');
              
              currentAngle = endAngle;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={item.color}
                  stroke={colors.white}
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            color: colors.muted,
            fontSize: '14px'
          }}>
            No data
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '18px',
            fontWeight: '700',
            color: colors.dark
          }}>{total}</div>
          <div style={{ 
            fontSize: '12px',
            color: colors.muted
          }}>{t('performance.total')}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {safeData.length > 0 ? (
          safeData.map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '4px 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span 
                  style={{ 
                    width: '12px',
                    height: '12px',
                    backgroundColor: item.color,
                    borderRadius: '2px',
                    display: 'inline-block'
                  }}
                ></span>
                <span style={{ 
                  fontSize: '12px',
                  color: colors.dark
                }}>{item.label}</span>
              </div>
              <span style={{ 
                fontSize: '12px',
                color: colors.muted,
                fontWeight: '500'
              }}>{item.value} ({Math.round((item.value / total) * 100)}%)</span>
            </div>
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            color: colors.muted,
            padding: '10px',
            fontSize: '14px'
          }}>
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard = ({ onNavigateToAttendance }) => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    totalParents: 0,
    averagePerformance: 0,
    attendanceRate: 0,
    pendingCommunications: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [quickStats, setQuickStats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [chartData, setChartData] = useState({
    performanceDistribution: [],
    subjectPerformance: [],
    assessmentTypes: [],
    studentProgress: []
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Initialize i18n for translation
  const { t, i18n } = useTranslation();

  useEffect(() => {
    loadDashboardData();
    checkViewport();
    updateTime();
    
    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener('resize', checkViewport);
    
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  const checkViewport = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
    setIsTablet(width > 768 && width <= 1024);
  };

  const loadDashboardData = () => {
    const students = studentService.getStudents();
    const activeStudents = students.filter(s => s.status === 'Active').length;
    
    let totalPerformance = 0;
    let studentsWithPerformance = 0;
    
    students.forEach(student => {
      const performance = studentService.getStudentPerformance(student.id);
      if (performance.overallPercentage > 0) {
        totalPerformance += performance.overallPercentage;
        studentsWithPerformance++;
      }
    });

    const averagePerformance = studentsWithPerformance > 0 
      ? Math.round(totalPerformance / studentsWithPerformance) 
      : 0;

    const attendanceRate = 87;
    const pendingCommunications = 12;

    setStats({
      totalStudents: students.length,
      activeStudents,
      totalParents: students.length,
      averagePerformance,
      attendanceRate,
      pendingCommunications
    });

    setQuickStats([
      { label: t('dashboard.quizCompleted'), value: '45', change: '+12%', trend: 'up' },
      { label: t('dashboard.mockTests'), value: '23', change: '+5%', trend: 'up' },
      { label: t('dashboard.assignments'), value: '67', change: '+8%', trend: 'up' },
      { label: t('dashboard.pendingReviews'), value: '8', change: '-2%', trend: 'down' }
    ]);

    // Fix: Initialize subjectPerformance with actual data
    setChartData({
      performanceDistribution: [
        { label: t('performance.excellent'), value: 8, color: colors.primary },
        { label: t('performance.good'), value: 12, color: colors.secondary },
        { label: t('performance.average'), value: 18, color: colors.info },
        { label: t('performance.needsImprovement'), value: 7, color: colors.accent }
      ],
      subjectPerformance: [ // Added missing subjectPerformance data
        { label: t('subjects.mathematics'), value: 85 },
        { label: t('subjects.physics'), value: 78 },
        { label: t('subjects.chemistry'), value: 82 },
        { label: t('subjects.biology'), value: 75 },
        { label: t('subjects.english'), value: 88 }
      ],
      assessmentTypes: [
        { label: t('assessmentTypes.quizzes'), value: 45, color: colors.primary },
        { label: t('assessmentTypes.mockTests'), value: 23, color: colors.secondary },
        { label: t('assessmentTypes.assignments'), value: 67, color: colors.info },
        { label: t('assessmentTypes.projects'), value: 12, color: colors.accent }
      ],
      studentProgress: [
        { label: 'Week 1', value: 65 },
        { label: 'Week 2', value: 72 },
        { label: 'Week 3', value: 78 },
        { label: 'Week 4', value: 82 },
        { label: 'Week 5', value: 85 },
        { label: 'Week 6', value: 87 }
      ]
    });

    setRecentActivities([
      { 
        id: 1, 
        type: 'quiz', 
        message: `${t('subjects.mathematics')} ${t('activityTypes.quiz')} ${t('dashboard.completed')} by John Smith`, 
        time: t('time.minutesAgo', { count: 10 }),
        score: '85%'
      },
      { 
        id: 2, 
        type: 'communication', 
        message: `New message from Sarah Johnson's parent`, 
        time: t('time.minutesAgo', { count: 25 }),
        priority: 'high'
      },
      { 
        id: 3, 
        type: 'attendance', 
        message: 'Michael Brown marked absent today', 
        time: t('time.hoursAgo', { count: 1 }),
        action: 'notify'
      },
      { 
        id: 4, 
        type: 'performance', 
        message: `Emily Davis improved in ${t('subjects.physics')} mock test`, 
        time: t('time.hoursAgo', { count: 2 }),
        improvement: '+15%' 
      },
      { 
        id: 5, 
        type: 'system', 
        message: 'Weekly performance report generated', 
        time: t('time.hoursAgo', { count: 3 }),
        action: 'view'
      }
    ]);
  };

  const filteredActivities = searchTerm
    ? recentActivities.filter(activity =>
        activity.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recentActivities;

  const getPerformanceColor = (percentage) => {
    if (percentage >= 90) return colors.primary;
    if (percentage >= 80) return colors.secondary;
    if (percentage >= 70) return colors.info;
    return colors.accent;
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '↑' : '↓';
  };

  const getActivityIcon = (type) => {
    const icons = {
      quiz: '📝',
      communication: '💬',
      attendance: '👥',
      performance: '📊',
      system: '⚙️'
    };
    return icons[type] || '🔔';
  };

  // Handle attendance rate card click
  const handleAttendanceRateClick = () => {
    if (onNavigateToAttendance) {
      onNavigateToAttendance();
    }
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle theme toggle
  const handleThemeToggle = (e) => {
    setDarkMode(e.target.checked);
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle profile click
  const handleProfileClick = () => {
    setShowProfile(true);
  };

  // Responsive grid layouts with improved alignment
  const getMainStatsGrid = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  const getChartsGrid = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(2, 1fr)';
  };

  const getMainLayoutGrid = () => {
    if (isMobile) return '1fr';
    if (isTablet) return '1fr';
    return 'minmax(0, 2fr) minmax(300px, 1fr)';
  };

  const getQuickStatsGrid = () => {
    if (isMobile) return '1fr';
    return 'repeat(2, 1fr)';
  };

  const sections = [
    { key: 'dashboard', label: t('dashboard.title') }
  ];

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`} style={{
      minHeight: '100vh',
      backgroundColor: darkMode ? '#0f172a' : colors.light,
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header Bar */}
      <HeaderBar
        selectedSection="dashboard"
        onMobileMenuToggle={handleMobileMenuToggle}
        sections={sections}
        darkMode={darkMode}
        onThemeToggle={handleThemeToggle}
        parentName="Teacher"
        onProfileClick={handleProfileClick}
        currentTime={currentTime}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Main Dashboard Content */}
      <div style={{
        padding: isMobile ? '16px' : '24px',
        backgroundColor: darkMode ? '#0f172a' : colors.light,
        minHeight: 'calc(100vh - 80px)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Main Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: getMainStatsGrid(),
          gap: '16px',
          marginBottom: '32px',
          width: '100%'
        }}>
          {[
            { label: t('dashboard.totalStudents'), value: stats.totalStudents, subtitle: `${stats.activeStudents} ${t('dashboard.activeStudents')}`, icon: '👨‍🎓', color: colors.primary },
            { label: t('dashboard.parentsConnected'), value: stats.totalParents, subtitle: t('dashboard.allParentsLinked'), icon: '👨‍👩‍👧‍👦', color: colors.secondary },
            { label: t('dashboard.avgPerformance'), value: `${stats.averagePerformance}%`, subtitle: t('dashboard.classAverage'), icon: '📊', color: getPerformanceColor(stats.averagePerformance) },
            { 
              label: t('dashboard.attendanceRate'), 
              value: `${stats.attendanceRate}%`, 
              subtitle: t('dashboard.thisMonth'), 
              icon: '✅', 
              color: colors.accent,
              clickable: true,
              onClick: handleAttendanceRateClick
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: darkMode ? '#1e293b' : colors.white,
                padding: isMobile ? '20px' : '24px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: `1px solid ${darkMode ? '#334155' : colors.borderColor}`,
                width: '100%',
                boxSizing: 'border-box',
                cursor: stat.clickable ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '120px'
              }}
              onClick={stat.onClick}
              onMouseOver={(e) => {
                if (stat.clickable) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (stat.clickable) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }
              }}
            >
              <div style={{
                width: isMobile ? '52px' : '60px',
                height: isMobile ? '52px' : '60px',
                borderRadius: '12px',
                backgroundColor: `${stat.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '22px' : '24px',
                flexShrink: 0
              }}>{stat.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: isMobile ? '13px' : '14px',
                  color: darkMode ? '#94a3b8' : colors.muted,
                  fontWeight: '500',
                  lineHeight: '1.3'
                }}>{stat.label}</h3>
                <div style={{
                  fontSize: isMobile ? '24px' : '28px',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: darkMode ? '#94a3b8' : colors.muted,
                  lineHeight: '1.3'
                }}>{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: getMainLayoutGrid(),
          gap: '24px',
          width: '100%',
          alignItems: 'flex-start'
        }}>
          {/* Left Column - Main Content */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            minWidth: 0
          }}>
            {/* Assessment Charts Section */}
            <div style={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h2 style={{
                margin: 0,
                color: darkMode ? '#e2e8f0' : colors.dark,
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: '600'
              }}>{t('dashboard.assessmentAnalytics')}</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: getChartsGrid(),
                gap: '20px',
                width: '100%'
              }}>
                <PieChart 
                  data={chartData.performanceDistribution}
                  title={t('dashboard.performanceDistribution')}
                />
                <BarChart 
                  data={chartData.subjectPerformance}
                  title={t('dashboard.subjectWisePerformance')}
                />
                <PieChart 
                  data={chartData.assessmentTypes}
                  title={t('dashboard.assessmentTypes')}
                />
                <BarChart 
                  data={chartData.studentProgress}
                  title={t('dashboard.studentProgressTrend')}
                  color={colors.secondary}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{
              backgroundColor: darkMode ? '#1e293b' : colors.white,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: isMobile ? '20px' : '24px',
              border: `1px solid ${darkMode ? '#334155' : colors.borderColor}`,
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                marginBottom: '20px',
                gap: isMobile ? '12px' : '0'
              }}>
                <h3 style={{
                  margin: 0,
                  color: darkMode ? '#e2e8f0' : colors.dark,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600'
                }}>{t('dashboard.quickStatistics')}</h3>
                <span style={{
                  padding: '6px 12px',
                  backgroundColor: colors.primaryLight,
                  color: colors.primary,
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>{t('dashboard.thisWeek')}</span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: getQuickStatsGrid(),
                gap: '16px',
                width: '100%'
              }}>
                {quickStats.map((stat, index) => (
                  <div key={index} style={{
                    textAlign: 'center',
                    padding: '20px 16px',
                    backgroundColor: darkMode ? '#334155' : colors.light,
                    borderRadius: '8px',
                    border: `1px solid ${darkMode ? '#475569' : colors.borderColor}`,
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      fontSize: isMobile ? '22px' : '24px',
                      fontWeight: '700',
                      color: colors.primary,
                      marginBottom: '8px',
                      lineHeight: '1.2'
                    }}>{stat.value}</div>
                    <div style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: darkMode ? '#e2e8f0' : colors.dark,
                      marginBottom: '6px',
                      fontWeight: '500',
                      lineHeight: '1.3'
                    }}>{stat.label}</div>
                    <div style={{
                      fontSize: '12px',
                      color: stat.trend === 'up' ? colors.success : colors.danger,
                      fontWeight: '600'
                    }}>
                      {getTrendIcon(stat.trend)} {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Assessments */}
            <div style={{
              backgroundColor: darkMode ? '#1e293b' : colors.white,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: isMobile ? '20px' : '24px',
              border: `1px solid ${darkMode ? '#334155' : colors.borderColor}`,
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                marginBottom: '20px',
                gap: isMobile ? '12px' : '0'
              }}>
                <h3 style={{
                  margin: 0,
                  color: darkMode ? '#e2e8f0' : colors.dark,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600'
                }}>{t('dashboard.latestAssessments')}</h3>
                <span style={{
                  padding: '6px 12px',
                  backgroundColor: colors.primaryLight,
                  color: colors.primary,
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>{t('dashboard.recent')}</span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '20px',
                width: '100%'
              }}>
                {[
                  { type: `${t('subjects.mathematics')} ${t('assessmentTypes.quizzes')}`, avg: '78%', completion: `45/50 ${t('dashboard.completed')}`, color: colors.primary },
                  { type: `${t('subjects.physics')} ${t('assessmentTypes.mockTests')}`, avg: '82%', completion: `38/50 ${t('dashboard.completed')}`, color: colors.secondary },
                  { type: `${t('subjects.chemistry')} ${t('assessmentTypes.assignments')}`, avg: '85%', completion: `42/50 ${t('dashboard.completed')}`, color: colors.info }
                ].map((assessment, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    backgroundColor: darkMode ? '#334155' : colors.light,
                    borderRadius: '8px',
                    border: `1px solid ${darkMode ? '#475569' : colors.borderColor}`,
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.borderLeftColor = assessment.color;
                    e.currentTarget.style.borderLeftWidth = '4px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderLeftColor = darkMode ? '#475569' : colors.borderColor;
                    e.currentTarget.style.borderLeftWidth = '1px';
                  }}
                  >
                    <div style={{
                      fontSize: isMobile ? '14px' : '15px',
                      fontWeight: '600',
                      color: darkMode ? '#e2e8f0' : colors.dark,
                      marginBottom: '6px',
                      lineHeight: '1.3'
                    }}>{assessment.type}</div>
                    <div style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      justifyContent: 'space-between',
                      alignItems: isMobile ? 'flex-start' : 'center',
                      gap: isMobile ? '6px' : '0'
                    }}>
                      <span style={{
                        fontSize: '13px',
                        color: assessment.color,
                        fontWeight: '600'
                      }}>{t('dashboard.average')}: {assessment.avg}</span>
                      <span style={{
                        fontSize: '13px',
                        color: darkMode ? '#94a3b8' : colors.muted
                      }}>{assessment.completion}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colors.primaryLight;
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
              >{t('common.viewDetailedResults')}</button>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px',
            width: '100%',
            minWidth: 0
          }}>
            {/* Recent Activities */}
            <div style={{
              backgroundColor: darkMode ? '#1e293b' : colors.white,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: isMobile ? '20px' : '24px',
              border: `1px solid ${darkMode ? '#334155' : colors.borderColor}`,
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                marginBottom: '20px',
                gap: isMobile ? '12px' : '0'
              }}>
                <h3 style={{
                  margin: 0,
                  color: darkMode ? '#e2e8f0' : colors.dark,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600'
                }}>{t('dashboard.recentActivities')}</h3>
                <span style={{
                  padding: '6px 12px',
                  backgroundColor: colors.primaryLight,
                  color: colors.primary,
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {searchTerm ? t('dashboard.filtered', { count: filteredActivities.length }) : t('dashboard.live')}
                </span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '20px',
                maxHeight: isMobile ? '300px' : '500px',
                overflowY: 'auto',
                width: '100%'
              }}>
                {filteredActivities.map(activity => (
                  <div key={activity.id} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '16px',
                    backgroundColor: darkMode ? '#334155' : colors.light,
                    borderRadius: '8px',
                    border: `1px solid ${darkMode ? '#475569' : colors.borderColor}`,
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      width: isMobile ? '32px' : '36px',
                      height: isMobile ? '32px' : '36px',
                      borderRadius: '8px',
                      backgroundColor: colors.primaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '14px' : '16px',
                      flexShrink: 0
                    }}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: isMobile ? '14px' : '15px',
                        color: darkMode ? '#e2e8f0' : colors.dark,
                        marginBottom: '6px',
                        lineHeight: '1.4',
                        wordWrap: 'break-word'
                      }}>{activity.message}</div>
                      <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? '4px' : '12px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{
                          fontSize: '13px',
                          color: darkMode ? '#94a3b8' : colors.muted
                        }}>{activity.time}</span>
                        {activity.score && (
                          <span style={{
                            fontSize: '13px',
                            color: colors.primary,
                            fontWeight: '600'
                          }}>{t('common.score')}: {activity.score}</span>
                        )}
                        {activity.improvement && (
                          <span style={{
                            fontSize: '13px',
                            color: colors.success,
                            fontWeight: '600'
                          }}>{activity.improvement}</span>
                        )}
                        {activity.priority === 'high' && (
                          <span style={{
                            padding: '3px 10px',
                            backgroundColor: colors.accentLight,
                            color: colors.accent,
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600'
                          }}>{t('common.highPriority')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {filteredActivities.length === 0 && searchTerm && (
                  <div style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: darkMode ? '#94a3b8' : colors.muted,
                    width: '100%'
                  }}>
                    <p style={{ margin: 0, fontSize: '14px' }}>{t('common.noResults', { term: searchTerm })}</p>
                  </div>
                )}
              </div>
              <button style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colors.primaryLight;
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
              >{t('common.viewAllActivities')}</button>
            </div>

            {/* Communication Overview */}
            <div style={{
              backgroundColor: darkMode ? '#1e293b' : colors.white,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: isMobile ? '20px' : '24px',
              border: `1px solid ${darkMode ? '#334155' : colors.borderColor}`,
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                marginBottom: '20px',
                gap: isMobile ? '12px' : '0'
              }}>
                <h3 style={{
                  margin: 0,
                  color: darkMode ? '#e2e8f0' : colors.dark,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600'
                }}>{t('dashboard.communicationOverview')}</h3>
                <span style={{
                  padding: '6px 12px',
                  backgroundColor: colors.accentLight,
                  color: colors.accent,
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>{stats.pendingCommunications} {t('common.new')}</span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '20px',
                width: '100%'
              }}>
                {[
                  { icon: '💬', count: '24', label: t('dashboard.studentMessages'), color: colors.primary },
                  { icon: '👨‍👩‍👧‍👦', count: '18', label: t('dashboard.parentMessages'), color: colors.secondary },
                  { icon: '📋', count: '7', label: t('dashboard.meetingRequests'), color: colors.accent }
                ].map((comm, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    backgroundColor: darkMode ? '#334155' : colors.light,
                    borderRadius: '8px',
                    border: `1px solid ${darkMode ? '#475569' : colors.borderColor}`,
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      width: isMobile ? '44px' : '48px',
                      height: isMobile ? '44px' : '48px',
                      borderRadius: '10px',
                      backgroundColor: `${comm.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '18px' : '20px',
                      flexShrink: 0
                    }}>{comm.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: isMobile ? '18px' : '20px',
                        fontWeight: '700',
                        color: comm.color,
                        marginBottom: '4px',
                        lineHeight: '1.2'
                      }}>{comm.count}</div>
                      <div style={{
                        fontSize: isMobile ? '12px' : '13px',
                        color: darkMode ? '#94a3b8' : colors.muted,
                        lineHeight: '1.3'
                      }}>{comm.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colors.primaryLight;
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
              >{t('common.viewAllMessages')}</button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ 
          marginTop: '32px', 
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: darkMode ? '#e2e8f0' : colors.dark,
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600'
          }}>{t('dashboard.quickActions')}</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            width: '100%'
          }}>
            {[
              { icon: '📝', label: t('dashboard.createQuiz'), color: colors.primary },
              { icon: '📊', label: t('dashboard.viewReports'), color: colors.secondary },
              { icon: '💬', label: t('dashboard.sendAnnouncement'), color: colors.info },
              { icon: '👥', label: t('dashboard.markAttendance'), color: colors.accent }
            ].map((action, index) => (
              <button key={index} style={{
                padding: isMobile ? '20px 16px' : '24px 20px',
                backgroundColor: darkMode ? '#1e293b' : colors.white,
                border: `2px solid ${action.color}`,
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                width: '100%',
                boxSizing: 'border-box',
                minHeight: '120px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${action.color}30`;
                e.currentTarget.style.backgroundColor = `${action.color}08`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = darkMode ? '#1e293b' : colors.white;
              }}
              >
                <div style={{
                  width: isMobile ? '44px' : '52px',
                  height: isMobile ? '44px' : '52px',
                  borderRadius: '10px',
                  backgroundColor: `${action.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '20px' : '22px',
                  transition: 'all 0.3s ease'
                }}>{action.icon}</div>
                <span style={{
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: '600',
                  color: darkMode ? '#e2e8f0' : colors.dark,
                  textAlign: 'center',
                  lineHeight: '1.3'
                }}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setShowProfile(false)}
        >
          <div
            style={{
              background: darkMode ? "#1e293b" : "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              padding: "2rem",
              minWidth: "320px",
              maxWidth: "90vw",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
              color: darkMode ? "#e2e8f0" : colors.dark
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: darkMode ? "#e2e8f0" : colors.dark
              }}
              onClick={() => setShowProfile(false)}
              aria-label={t('common.close')}
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <HiOutlineUserCircle style={{
                width: 80,
                height: 80,
                marginBottom: "0.5rem",
                color: colors.primary
              }} />
              <div>
                <h3 style={{ margin: "0.5rem 0" }}>Teacher</h3>
                <p style={{ margin: 0, color: darkMode ? "#94a3b8" : "#666" }}>{t('common.role')}</p>
              </div>
            </div>

            <div style={{ marginTop: "1rem", lineHeight: "1.6" }}>
              <p>
                <strong>{t('profile.email')}:</strong> teacher@novya.com
              </p>
              <p>
                <strong>{t('profile.contact')}:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>{t('profile.department')}:</strong> Science & Mathematics
              </p>
              <p>
                <strong>{t('profile.students')}:</strong> {stats.totalStudents} {t('dashboard.activeStudents')}
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1.5rem" }}>
              <button
                onClick={() => setShowProfile(false)}
                style={{
                  padding: "0.5rem 1rem",
                  background: darkMode ? "#334155" : "#f1f5f9",
                  color: darkMode ? "#e2e8f0" : colors.dark,
                  border: `1px solid ${darkMode ? "#475569" : "#ddd"}`,
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                {t('profile.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;