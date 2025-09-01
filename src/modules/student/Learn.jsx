import { useState, useEffect } from 'react';

import { ChevronRight, Calculator, Atom, FileText, Users, Code } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
 
const ClassSevenInterface = () => {

  const [selectedSubject, setSelectedSubject] = useState('Maths');

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
 
  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);
 
  const isMobile = windowWidth < 768;

  const isTablet = windowWidth >= 768 && windowWidth < 1024;
 
  const subjects = [

    { name: 'Maths', icon: Calculator },

    { name: 'Science', icon: Atom },

    { name: 'English', icon: FileText },

    { name: 'Social', icon: Users },

    { name: 'Computer', icon: Code },

  ];
 
  const allChapters = {

    Maths: [

      { number: 1, title: 'LARGE NUMBERS' },

      { number: 2, title: 'ARTHMETIC EXPRESSIONS' },

      { number: 3, title: 'PEEK POINT' },

      { number: 4, title: 'NUMBER EXPRESSIONS' },

      { number: 5, title: 'LINES' },

    ],

    Science: [

      { number: 1, title: 'AGE OF SCIENCE' },

      { number: 2, title: 'SUBSTANCES' },

      { number: 3, title: 'ELECTRICITY' },

      { number: 4, title: 'METALS' },

      { number: 5, title: 'PHYSICAL AND CHEMICAL CHANGES' },

    ],

    English: [

      { number: 1, title: 'LEARNING TOGETHER' },

      { number: 2, title: 'WIT AND HUMOUR' },

      { number: 3, title: 'DREAMS AND DISCOVERIES' },

      { number: 4, title: 'TRAVEL AND ADVENTURE' },

      { number: 5, title: 'BRAVE HEARTS' },

    ],

    Social: [

      { number: 1, title: 'TRACE CHANGES' },

      { number: 2, title: 'KINGDOMS' },

      { number: 3, title: 'SULTANS' },

      { number: 4, title: 'MUGHALS' },

      { number: 5, title: 'RULERS' },

    ],

    Computer: [

      { number: 1, title: 'MICROSOFT WORD' },

      { number: 2, title: 'TEXT EDITING' },

      { number: 3, title: 'MS WORD PICTURES' },

      { number: 4, title: 'MS WORD SMART ART' },

      { number: 5, title: 'SMART ART EDITING' },

    ],

  };
 
  const handleSubjectClick = (subjectName) => {

    setSelectedSubject(subjectName);

  };
 
  const handleChapterClick = (chapterNumber) => {

    navigate(`/lesson/${selectedSubject}/${chapterNumber}`);

  };
 
  const currentChapters = allChapters[selectedSubject] || [];
 
  const getSubjectDescription = (subject) => {

    const descriptions = {

      Maths: 'Explore mathematical concepts, algebra, geometry and problem-solving skills.',

      Science: 'Discover the wonders of physics, chemistry, and biology through experiments.',

      English: 'Develop language skills through literature, grammar, and creative writing.',

      Social: 'Understand society, history, geography, and civic responsibilities.',

      Computer: 'Learn computer basics, software applications, and digital literacy.',

    };

    return descriptions[subject] || 'Explore the chapters and lessons.';

  };
 
  return (
<div

      style={{

        fontFamily: 'Arial, sans-serif',

        margin: 0,

        padding: 0,

        backgroundColor: '#f8f9fa',

        paddingTop: '80px',

      }}
>
<div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: 'calc(100vh - 80px)' }}>

        {/* Sidebar */}
<div

          style={{

            width: isMobile ? '100%' : isTablet ? '200px' : '280px',

            backgroundColor: 'white',

            borderRight: isMobile ? 'none' : '1px solid #e5e7eb',

            borderBottom: isMobile ? '1px solid #e5e7eb' : 'none',

            padding: '16px',

            display: 'flex',

            overflowX: isMobile ? 'auto' : 'visible',

          }}
>
<div

            style={{

              display: 'flex',

              flexDirection: isMobile ? 'row' : 'column',

              gap: '8px',

              width: '100%',

            }}
>

            {subjects.map((subject, index) => {

              const IconComponent = subject.icon;

              const isSelected = selectedSubject === subject.name;

              return (
<div

                  key={index}

                  style={{

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: isMobile ? 'center' : 'flex-start',

                    padding: isMobile ? '8px 12px' : '12px 16px',

                    borderRadius: '8px',

                    cursor: 'pointer',

                    backgroundColor: isSelected ? '#0f766e' : 'transparent',

                    color: isSelected ? 'white' : '#374151',

                    transition: 'all 0.2s ease',

                    flex: isMobile ? '0 0 auto' : 'unset',

                  }}

                  onClick={() => handleSubjectClick(subject.name)}
>
<IconComponent size={20} style={{ marginRight: isMobile ? '0' : '12px' }} />

                  {!isMobile && (
<span style={{ fontWeight: '500', fontSize: '15px' }}>{subject.name}</span>

                  )}
</div>

              );

            })}
</div>
</div>
 
        {/* Main Content */}
<div style={{ flex: 1, padding: isMobile ? '16px' : '32px' }}>

          {/* Subject Title */}
<div style={{ marginBottom: '32px' }}>
<h1

              style={{

                fontSize: isMobile ? '28px' : '48px',

                fontWeight: 'bold',

                color: '#4299e1',

                margin: '0 0 8px 0',

              }}
>

              {selectedSubject}
</h1>
<p

              style={{

                color: '#6b7280',

                fontSize: '16px',

                margin: 0,

              }}
>

              {getSubjectDescription(selectedSubject)}
</p>
</div>
 
          {/* Chapters Section */}
<div>
<div

              style={{

                display: 'flex',

                alignItems: 'center',

                marginBottom: '24px',

                paddingBottom: '12px',

                borderBottom: '3px solid #ec4899',

              }}
>
<h2

                style={{

                  fontSize: isMobile ? '22px' : '32px',

                  fontWeight: 'bold',

                  color: '#1f2937',

                  margin: 0,

                }}
>

                Chapters
</h2>
<span

                style={{

                  marginLeft: '8px',

                  color: '#6b7280',

                  fontSize: '16px',

                }}
>

                ({currentChapters.length} chapters)
</span>
</div>
 
            {/* Chapters Grid */}
<div

              style={{

                display: 'grid',

                gridTemplateColumns: isMobile

                  ? '1fr'

                  : isTablet

                  ? 'repeat(2, 1fr)'

                  : 'repeat(auto-fit, minmax(400px, 1fr))',

                gap: '16px',

              }}
>

              {currentChapters.map((chapter, index) => (
<div

                  key={index}

                  style={{

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'space-between',

                    padding: '16px',

                    backgroundColor: 'white',

                    borderRadius: '8px',

                    border: '1px solid #e5e7eb',

                    cursor: 'pointer',

                    transition: 'all 0.2s ease',

                  }}

                  onClick={() => handleChapterClick(chapter.number)}
>
<div style={{ display: 'flex', alignItems: 'center' }}>
<div

                      style={{

                        width: '40px',

                        height: '40px',

                        backgroundColor: '#ddd6fe',

                        color: '#7c3aed',

                        borderRadius: '8px',

                        display: 'flex',

                        alignItems: 'center',

                        justifyContent: 'center',

                        fontWeight: 'bold',

                        marginRight: '16px',

                      }}
>

                      {chapter.number}
</div>
<span

                      style={{

                        color: '#1f2937',

                        fontWeight: '500',

                        fontSize: '15px',

                      }}
>

                      {chapter.title}
</span>
</div>
<ChevronRight size={18} style={{ color: '#9ca3af' }} />
</div>

              ))}
</div>
</div>
</div>
</div>
 
      {/* Floating Chat Button */}
<div

        style={{

          position: 'fixed',

          bottom: '24px',

          right: '24px',

          width: '56px',

          height: '56px',

          backgroundColor: '#4299e1',

          borderRadius: '50%',

          display: 'flex',

          alignItems: 'center',

          justifyContent: 'center',

          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',

          cursor: 'pointer',

          color: 'white',

        }}
>

        💬
</div>
</div>

  );

};
 
export default ClassSevenInterface;

 