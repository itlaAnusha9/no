
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Clock, BookOpen, Target, ChevronRight, Play, Users, Star, X, Check, ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import './practice.css';

// const Practice = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";
//   }, []);

//   const subjectSectionRef = useRef(null);
//   const [selectedGrade, setSelectedGrade] = useState('7');
//   const [selectedSubject, setSelectedSubject] = useState('mathematics');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [testStarted, setTestStarted] = useState(false);
//   const [currentTest, setCurrentTest] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [testSubmitted, setTestSubmitted] = useState(false);
//   const [score, setScore] = useState(0);
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   const [comingSoonGrade, setComingSoonGrade] = useState(null);
//   const [animatedStats, setAnimatedStats] = useState({
//     totalTests: 0,
//     studentsEnrolled: 0,
//     avgScore: 0
//   });

//   // Animate stats on component mount
//   useEffect(() => {
//     const animateValue = (start, end, duration, callback) => {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         const current = Math.floor(progress * (end - start) + start);
//         callback(current);
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     };

//     animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
//     animateValue(0, 85000, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));
//     animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({ ...prev, avgScore: val })));
//   }, []);

//   const grades = [
//     { value: '7', label: 'Grade 7', color: '#FF6B6B' },
//     { value: '8', label: 'Grade 8', color: '#4ECDC4' },
//     { value: '9', label: 'Grade 9', color: '#45B7D1' },
//     { value: '10', label: 'Grade 10', color: '#96CEB4' },
//     { value: '11', label: 'Grade 11', color: '#FFEAA7' },
//     { value: '12', label: 'Grade 12', color: '#DDA0DD' }
//   ];

//   const subjects = [
//     { id: 'mathematics', name: 'Mathematics', icon: '📊', tests: 45, difficulty: 'Medium', duration: '90 min' },
//     { id: 'physics', name: 'Physics', icon: '⚡', tests: 38, difficulty: 'Hard', duration: '120 min' },
//     { id: 'chemistry', name: 'Chemistry', icon: '🧪', tests: 42, difficulty: 'Medium', duration: '90 min' },
//     { id: 'biology', name: 'Biology', icon: '🧬', tests: 35, difficulty: 'Easy', duration: '75 min' },
//     { id: 'english', name: 'English', icon: '📚', tests: 40, difficulty: 'Easy', duration: '60 min' },
//     { id: 'history', name: 'History', icon: '🏛️', tests: 25, difficulty: 'Medium', duration: '75 min' }
//   ];

 
//   const mockTests = [
//   // -------- Grade 7 Mock Tests --------
//   {
//     "id": 1,
//     "title": "Algebra & Geometry Basics",
//     "subject": "mathematics",
//     "grade": "7",
//     "questions": 5,
//     "duration": 12,
//     "difficulty": "Medium",
//     "attempts": 980,
//     "rating": 4.6,
//     "topics": [
//       "Algebra",
//       "Geometry",
//       "Fractions"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Simplify: 3x + 2x - 5",
//         "options": [
//           "5x - 5",
//           "6x - 5",
//           "5x + 5",
//           "x - 5"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Combine like terms: 3x + 2x = 5x, so result is 5x - 5."
//       },
//       {
//         "id": 2,
//         "question": "The area of a rectangle is 36 cm² and its length is 9 cm. Find its breadth.",
//         "options": [
//           "4 cm",
//           "5 cm",
//           "6 cm",
//           "7 cm"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Area = length × breadth → 36 = 9 × breadth → breadth = 4 cm."
//       },
//       {
//         "id": 3,
//         "question": "Which of these is a prime number?",
//         "options": [
//           "21",
//           "29",
//           "33",
//           "49"
//         ],
//         "correctAnswer": 1,
//         "explanation": "29 has no divisors other than 1 and itself, so it is prime."
//       },
//       {
//         "id": 4,
//         "question": "What is the value of (2/5) ÷ (3/10)?",
//         "options": [
//           "4/3",
//           "2/3",
//           "3/4",
//           "5/3"
//         ],
//         "correctAnswer": 0,
//         "explanation": "(2/5) ÷ (3/10) = (2/5) × (10/3) = 20/15 = 4/3."
//       },
//       {
//         "id": 5,
//         "question": "Find the perimeter of a square of side 8 cm.",
//         "options": [
//           "24 cm",
//           "32 cm",
//           "16 cm",
//           "20 cm"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Perimeter = 4 × side = 4 × 8 = 32 cm."
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "title": "Force & Energy Fundamentals",
//     "subject": "physics",
//     "grade": "7",
//     "questions": 5,
//     "duration": 15,
//     "difficulty": "Medium",
//     "attempts": 860,
//     "rating": 4.5,
//     "topics": [
//       "Force",
//       "Work",
//       "Energy"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "What is the SI unit of force?",
//         "options": [
//           "Joule",
//           "Newton",
//           "Pascal",
//           "Watt"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The SI unit of force is Newton (N)."
//       },
//       {
//         "id": 2,
//         "question": "Work is done when:",
//         "options": [
//           "Force is applied without motion",
//           "Object moves without force",
//           "Force is applied and object moves",
//           "No motion occurs"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Work = Force × Displacement, so force and motion must both exist."
//       },
//       {
//         "id": 3,
//         "question": "Which energy is possessed by a stretched spring?",
//         "options": [
//           "Kinetic Energy",
//           "Potential Energy",
//           "Thermal Energy",
//           "Nuclear Energy"
//         ],
//         "correctAnswer": 1,
//         "explanation": "A stretched spring stores potential energy."
//       },
//       {
//         "id": 4,
//         "question": "Which of these is a renewable energy source?",
//         "options": [
//           "Coal",
//           "Natural Gas",
//           "Wind",
//           "Petroleum"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Wind energy is renewable and unlimited."
//       },
//       {
//         "id": 5,
//         "question": "Power is defined as:",
//         "options": [
//           "Work done × time",
//           "Work done ÷ time",
//           "Force × time",
//           "Energy × time"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Power = Work / Time."
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "title": "Atoms, Molecules & Reactions",
//     "subject": "chemistry",
//     "grade": "7",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Hard",
//     "attempts": 740,
//     "rating": 4.7,
//     "topics": [
//       "Atomic Structure",
//       "Chemical Reactions"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "What is the smallest unit of an element?",
//         "options": [
//           "Molecule",
//           "Compound",
//           "Atom",
//           "Ion"
//         ],
//         "correctAnswer": 2,
//         "explanation": "An atom is the smallest unit of an element that retains its chemical properties."
//       },
//       {
//         "id": 2,
//         "question": "What is the chemical formula of common salt?",
//         "options": [
//           "H₂O",
//           "NaCl",
//           "CO₂",
//           "O₂"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Common salt is Sodium Chloride, with the formula NaCl."
//       },
//       {
//         "id": 3,
//         "question": "Which of the following is a physical change?",
//         "options": [
//           "Burning of wood",
//           "Rusting of iron",
//           "Melting of ice",
//           "Cooking an egg"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Melting of ice is a physical change as it changes state but not chemical composition."
//       },
//       {
//         "id": 4,
//         "question": "What is the process of a liquid turning into a gas called?",
//         "options": [
//           "Melting",
//           "Condensation",
//           "Sublimation",
//           "Evaporation"
//         ],
//         "correctAnswer": 3,
//         "explanation": "Evaporation is the process of a substance in a liquid state changing to a gaseous state."
//       },
//       {
//         "id": 5,
//         "question": "Which gas is essential for burning?",
//         "options": [
//           "Nitrogen",
//           "Carbon Dioxide",
//           "Oxygen",
//           "Hydrogen"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Oxygen is necessary for combustion to occur."
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "title": "Life Processes & Classification",
//     "subject": "biology",
//     "grade": "7",
//     "questions": 5,
//     "duration": 15,
//     "difficulty": "Medium",
//     "attempts": 910,
//     "rating": 4.6,
//     "topics": [
//       "Human Body",
//       "Plants",
//       "Classification"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which organ is responsible for pumping blood?",
//         "options": [
//           "Lungs",
//           "Heart",
//           "Liver",
//           "Kidney"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The heart is a muscular organ that pumps blood throughout the body."
//       },
//       {
//         "id": 2,
//         "question": "What is the process by which plants make their own food?",
//         "options": [
//           "Respiration",
//           "Transpiration",
//           "Photosynthesis",
//           "Digestion"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Photosynthesis is the process used by plants to convert light energy into chemical energy."
//       },
//       {
//         "id": 3,
//         "question": "Which of these is a producer in a food chain?",
//         "options": [
//           "Lion",
//           "Rabbit",
//           "Mushroom",
//           "Grass"
//         ],
//         "correctAnswer": 3,
//         "explanation": "Grass is a producer because it creates its own food using sunlight."
//       },
//       {
//         "id": 4,
//         "question": "What are the building blocks of life?",
//         "options": [
//           "Tissues",
//           "Organs",
//           "Cells",
//           "Molecules"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Cells are the basic structural, functional, and biological units of all known organisms."
//       },
//       {
//         "id": 5,
//         "question": "The skeleton of the human body is made up of:",
//         "options": [
//           "Muscles",
//           "Nerves",
//           "Bones",
//           "Blood"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The human skeleton is an internal framework composed of bones."
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "title": "Ancient Civilizations & Empires",
//     "subject": "history",
//     "grade": "7",
//     "questions": 5,
//     "duration": 10,
//     "difficulty": "Easy",
//     "attempts": 1200,
//     "rating": 4.4,
//     "topics": [
//       "Indus Valley",
//       "Ancient Rome",
//       "Feudalism"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which river valley is associated with the Harappan Civilization?",
//         "options": [
//           "Nile",
//           "Tigris",
//           "Indus",
//           "Yellow"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The Harappan Civilization developed along the banks of the Indus River."
//       },
//       {
//         "id": 2,
//         "question": "The term 'Mughal' is derived from which word?",
//         "options": [
//           "Persian",
//           "Mongol",
//           "Turkish",
//           "Arabic"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The Mughals were descendants of the Mongols."
//       },
//       {
//         "id": 3,
//         "question": "Who was the first emperor of Rome?",
//         "options": [
//           "Julius Caesar",
//           "Augustus",
//           "Nero",
//           "Constantine"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Augustus (Octavian) was the first Roman Emperor."
//       },
//       {
//         "id": 4,
//         "question": "Feudalism was a system based on:",
//         "options": [
//           "Trade",
//           "Land ownership",
//           "Democracy",
//           "Slavery"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Feudalism was a system in which land was exchanged for service or labor."
//       },
//       {
//         "id": 5,
//         "question": "The Great Wall of China was built to protect against:",
//         "options": [
//           "Japanese invaders",
//           "Mongolian tribes",
//           "European traders",
//           "Internal rebellion"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The Great Wall was built to protect the Chinese empires from northern tribes, primarily the Mongols."
//       }
//     ]
//   },

//   // -------- Grade 8 Mock Tests --------
//   {
//     "id": 6,
//     "title": "Ratio & Proportions",
//     "subject": "mathematics",
//     "grade": "8",
//     "questions": 5,
//     "duration": 15,
//     "difficulty": "Medium",
//     "attempts": 1100,
//     "rating": 4.5,
//     "topics": [
//       "Ratios",
//       "Proportions",
//       "Percentage"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "If a car travels 150 km in 3 hours, what is its speed in km/h?",
//         "options": [
//           "45 km/h",
//           "50 km/h",
//           "55 km/h",
//           "60 km/h"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Speed = Distance / Time = 150 km / 3 h = 50 km/h."
//       },
//       {
//         "id": 2,
//         "question": "A sum of money is divided between A and B in the ratio 4:5. If B gets ₹2500, what is the total sum?",
//         "options": [
//           "₹4000",
//           "₹4500",
//           "₹5000",
//           "₹5500"
//         ],
//         "correctAnswer": 0,
//         "explanation": "If 5 parts = ₹2500, then 1 part = ₹500. Total = 9 parts = 9 × ₹500 = ₹4500."
//       },
//       {
//         "id": 3,
//         "question": "What is 20% of 400?",
//         "options": [
//           "80",
//           "60",
//           "100",
//           "200"
//         ],
//         "correctAnswer": 0,
//         "explanation": "20% of 400 = (20/100) * 400 = 80."
//       },
//       {
//         "id": 4,
//         "question": "If 5 workers can build a wall in 12 days, how many days will 4 workers take to build the same wall?",
//         "options": [
//           "10 days",
//           "15 days",
//           "18 days",
//           "20 days"
//         ],
//         "correctAnswer": 1,
//         "explanation": "This is an inverse proportion. 5 × 12 = 4 × days → days = 60/4 = 15 days."
//       },
//       {
//         "id": 5,
//         "question": "A bag contains 5 red balls and 3 blue balls. What is the ratio of red balls to blue balls?",
//         "options": [
//           "3:5",
//           "5:3",
//           "5:8",
//           "3:8"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The ratio is simply the number of red balls to the number of blue balls, which is 5:3."
//       }
//     ]
//   },
//   {
//     "id": 7,
//     "title": "Light, Sound & Heat",
//     "subject": "physics",
//     "grade": "8",
//     "questions": 5,
//     "duration": 18,
//     "difficulty": "Medium",
//     "attempts": 950,
//     "rating": 4.7,
//     "topics": [
//       "Light",
//       "Sound",
//       "Heat"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "What is the phenomenon of light bouncing back from a surface called?",
//         "options": [
//           "Refraction",
//           "Reflection",
//           "Dispersion",
//           "Scattering"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Reflection is the change in direction of a wavefront at an interface between two different media so that the wavefront returns into the medium from which it originated."
//       },
//       {
//         "id": 2,
//         "question": "Sound travels fastest in which medium?",
//         "options": [
//           "Air",
//           "Water",
//           "Vacuum",
//           "Steel"
//         ],
//         "correctAnswer": 3,
//         "explanation": "Sound travels fastest in solids (like steel) because the particles are closely packed."
//       },
//       {
//         "id": 3,
//         "question": "What is the SI unit of temperature?",
//         "options": [
//           "Celsius",
//           "Fahrenheit",
//           "Kelvin",
//           "Joule"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The SI unit for temperature is Kelvin (K)."
//       },
//       {
//         "id": 4,
//         "question": "The transfer of heat through direct contact is called:",
//         "options": [
//           "Conduction",
//           "Convection",
//           "Radiation",
//           "Insulation"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Conduction is the transfer of thermal energy through direct contact."
//       },
//       {
//         "id": 5,
//         "question": "Which type of mirror forms a virtual and erect image?",
//         "options": [
//           "Concave mirror",
//           "Convex mirror",
//           "Both",
//           "None of these"
//         ],
//         "correctAnswer": 1,
//         "explanation": "A convex mirror always forms a virtual, erect, and diminished image."
//       }
//     ]
//   },
//   {
//     "id": 8,
//     "title": "Elements, Compounds & Mixtures",
//     "subject": "chemistry",
//     "grade": "8",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Medium",
//     "attempts": 880,
//     "rating": 4.5,
//     "topics": [
//       "Elements",
//       "Compounds",
//       "Mixtures"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which of these is a compound?",
//         "options": [
//           "Gold (Au)",
//           "Oxygen (O₂)",
//           "Water (H₂O)",
//           "Nitrogen (N₂)"
//         ],
//         "correctAnswer": 2,
//         "explanation": "A compound is a substance formed when two or more elements are chemically bonded."
//       },
//       {
//         "id": 2,
//         "question": "The process of separating a solid from a liquid using a filter is called:",
//         "options": [
//           "Distillation",
//           "Filtration",
//           "Evaporation",
//           "Sublimation"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Filtration is used to separate insoluble solids from liquids."
//       },
//       {
//         "id": 3,
//         "question": "What is the chemical symbol for sodium?",
//         "options": [
//           "S",
//           "Na",
//           "So",
//           "Nm"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The symbol for Sodium is Na, derived from the Latin 'natrium'."
//       },
//       {
//         "id": 4,
//         "question": "An example of a homogeneous mixture is:",
//         "options": [
//           "Sand and water",
//           "Oil and water",
//           "Salt dissolved in water",
//           "Iron filings and sulfur"
//         ],
//         "correctAnswer": 2,
//         "explanation": "A homogeneous mixture has a uniform composition, like saltwater."
//       },
//       {
//         "id": 5,
//         "question": "Which of the following is a noble gas?",
//         "options": [
//           "Hydrogen",
//           "Oxygen",
//           "Helium",
//           "Carbon"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Helium is a noble gas, known for its low reactivity."
//       }
//     ]
//   },
//   {
//     "id": 9,
//     "title": "Cell Biology & Reproduction",
//     "subject": "biology",
//     "grade": "8",
//     "questions": 5,
//     "duration": 15,
//     "difficulty": "Medium",
//     "attempts": 1050,
//     "rating": 4.6,
//     "topics": [
//       "Cells",
//       "Reproduction",
//       "Microorganisms"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which part of the cell is the 'powerhouse'?",
//         "options": [
//           "Nucleus",
//           "Mitochondria",
//           "Cytoplasm",
//           "Cell wall"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Mitochondria are the organelles responsible for generating energy (ATP)."
//       },
//       {
//         "id": 2,
//         "question": "Asexual reproduction involves:",
//         "options": [
//           "Two parents",
//           "Gametes",
//           "A single parent",
//           "Fertilization"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Asexual reproduction is a mode of reproduction that involves a single parent."
//       },
//       {
//         "id": 3,
//         "question": "Which of these is a microorganism?",
//         "options": [
//           "Earthworm",
//           "Bacteria",
//           "Sparrow",
//           "Whale"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Bacteria are microscopic single-celled organisms."
//       },
//       {
//         "id": 4,
//         "question": "What is the function of red blood cells?",
//         "options": [
//           "Fighting infections",
//           "Clotting blood",
//           "Transporting oxygen",
//           "Producing antibodies"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Red blood cells contain hemoglobin, which transports oxygen from the lungs to the rest of the body."
//       },
//       {
//         "id": 5,
//         "question": "Pollination is the transfer of pollen from:",
//         "options": [
//           "Stigma to anther",
//           "Ovary to petal",
//           "Anther to stigma",
//           "Stem to root"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Pollination is the process by which pollen is transferred from the anther to the stigma."
//       }
//     ]
//   },
//   {
//     "id": 10,
//     "title": "Medieval India & British Rule",
//     "subject": "history",
//     "grade": "8",
//     "questions": 5,
//     "duration": 12,
//     "difficulty": "Medium",
//     "attempts": 890,
//     "rating": 4.5,
//     "topics": [
//       "Delhi Sultanate",
//       "Mughal Empire",
//       "British Raj"
//     ],
//     "premium": false,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Who was the founder of the Mughal Empire in India?",
//         "options": [
//           "Akbar",
//           "Humayun",
//           "Babur",
//           "Shah Jahan"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Babur founded the Mughal Empire in 1526 after defeating Ibrahim Lodi."
//       },
//       {
//         "id": 2,
//         "question": "The 'Battle of Plassey' was fought in which year?",
//         "options": [
//           "1757",
//           "1764",
//           "1857",
//           "1947"
//         ],
//         "correctAnswer": 0,
//         "explanation": "The Battle of Plassey was a decisive victory for the British East India Company in 1757."
//       },
//       {
//         "id": 3,
//         "question": "Who introduced the 'Doctrine of Lapse'?",
//         "options": [
//           "Lord Dalhousie",
//           "Lord Canning",
//           "Lord Curzon",
//           "Lord Macaulay"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Lord Dalhousie was the Governor-General who implemented the Doctrine of Lapse."
//       },
//       {
//         "id": 4,
//         "question": "The 'Quit India' movement was launched by:",
//         "options": [
//           "Subhas Chandra Bose",
//           "Jawaharlal Nehru",
//           "Mahatma Gandhi",
//           "Sardar Vallabhbhai Patel"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Mahatma Gandhi launched the Quit India Movement in 1942."
//       },
//       {
//         "id": 5,
//         "question": "Who built the Red Fort in Delhi?",
//         "options": [
//           "Humayun",
//           "Akbar",
//           "Shah Jahan",
//           "Aurangzeb"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Shah Jahan commissioned the construction of the Red Fort."
//       }
//     ]
//   },

//   // -------- Grade 9 Mock Tests --------
//   {
//     "id": 11,
//     "title": "Number Systems & Functions",
//     "subject": "mathematics",
//     "grade": "9",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Hard",
//     "attempts": 800,
//     "rating": 4.7,
//     "topics": [
//       "Number Systems",
//       "Polynomials",
//       "Functions"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which of these is an irrational number?",
//         "options": [
//           "√4",
//           "0.333...",
//           "π",
//           "2/3"
//         ],
//         "correctAnswer": 2,
//         "explanation": "An irrational number cannot be expressed as a simple fraction, like π."
//       },
//       {
//         "id": 2,
//         "question": "The zero of the polynomial p(x) = 2x - 3 is:",
//         "options": [
//           "3/2",
//           "2/3",
//           "-3/2",
//           "-2/3"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Set p(x) = 0 → 2x - 3 = 0 → 2x = 3 → x = 3/2."
//       },
//       {
//         "id": 3,
//         "question": "A point (0, y) lies on which axis?",
//         "options": [
//           "X-axis",
//           "Y-axis",
//           "Both",
//           "None"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Any point with an x-coordinate of 0 lies on the Y-axis."
//       },
//       {
//         "id": 4,
//         "question": "Find the value of 'a' if (x-1) is a factor of x² + ax - 2.",
//         "options": [
//           "1",
//           "2",
//           "-1",
//           "-2"
//         ],
//         "correctAnswer": 1,
//         "explanation": "By Factor Theorem, p(1) must be 0. So, 1² + a(1) - 2 = 0 → 1 + a - 2 = 0 → a = 1."
//       },
//       {
//         "id": 5,
//         "question": "What is the degree of the polynomial 5x⁴ - 3x + 7?",
//         "options": [
//           "1",
//           "3",
//           "4",
//           "5"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The degree is the highest power of the variable in the polynomial, which is 4."
//       }
//     ]
//   },
//   {
//     "id": 12,
//     "title": "Motion, Gravitation & Sound",
//     "subject": "physics",
//     "grade": "9",
//     "questions": 5,
//     "duration": 22,
//     "difficulty": "Hard",
//     "attempts": 850,
//     "rating": 4.8,
//     "topics": [
//       "Motion",
//       "Newton's Laws",
//       "Sound"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "An object's velocity is constant. Its acceleration is:",
//         "options": [
//           "Positive",
//           "Negative",
//           "Zero",
//           "Infinite"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Acceleration is the rate of change of velocity. If velocity is constant, acceleration is zero."
//       },
//       {
//         "id": 2,
//         "question": "What is Newton's third law of motion?",
//         "options": [
//           "Law of Inertia",
//           "F = ma",
//           "Action-Reaction",
//           "Law of Conservation of Momentum"
//         ],
//         "correctAnswer": 2,
//         "explanation": "For every action, there is an equal and opposite reaction."
//       },
//       {
//         "id": 3,
//         "question": "The universal law of gravitation was given by:",
//         "options": [
//           "Albert Einstein",
//           "Isaac Newton",
//           "Galileo Galilei",
//           "Johannes Kepler"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Sir Isaac Newton formulated the Law of Universal Gravitation."
//       },
//       {
//         "id": 4,
//         "question": "The pitch of a sound is determined by its:",
//         "options": [
//           "Amplitude",
//           "Wavelength",
//           "Frequency",
//           "Speed"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Pitch is a perceptual property of sounds that allows their ordering on a frequency-related scale."
//       },
//       {
//         "id": 5,
//         "question": "What is the unit of momentum?",
//         "options": [
//           "kg·m/s",
//           "N·m",
//           "Joule",
//           "Watt"
//         ],
//         "correctAnswer": 0,
//         "explanation": "Momentum (p) = mass (m) × velocity (v), so its unit is kg·m/s."
//       }
//     ]
//   },
//   {
//     "id": 13,
//     "title": "Chemical Bonding & Periodic Table",
//     "subject": "chemistry",
//     "grade": "9",
//     "questions": 5,
//     "duration": 25,
//     "difficulty": "Hard",
//     "attempts": 780,
//     "rating": 4.8,
//     "topics": [
//       "Periodic Table",
//       "Chemical Bonds",
//       "Atomic Structure"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which of these elements is a halogen?",
//         "options": [
//           "Sodium",
//           "Calcium",
//           "Chlorine",
//           "Helium"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Chlorine is in Group 17 of the periodic table, which are the halogens."
//       },
//       {
//         "id": 2,
//         "question": "A covalent bond is formed by:",
//         "options": [
//           "Transfer of electrons",
//           "Sharing of electrons",
//           "Electrostatic attraction",
//           "Hydrogen bonding"
//         ],
//         "correctAnswer": 1,
//         "explanation": "A covalent bond is formed when atoms share electron pairs."
//       },
//       {
//         "id": 3,
//         "question": "Who developed the modern periodic table?",
//         "options": [
//           "John Dalton",
//           "Dmitri Mendeleev",
//           "Henry Moseley",
//           "Niels Bohr"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The modern periodic table is based on atomic number, arranged by Henry Moseley."
//       },
//       {
//         "id": 4,
//         "question": "What is the maximum number of electrons in the first shell (K shell)?",
//         "options": [
//           "1",
//           "2",
//           "8",
//           "18"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The maximum number of electrons in a shell is given by the formula 2n², where n=1 for the K shell, so 2(1)² = 2."
//       },
//       {
//         "id": 5,
//         "question": "A reaction that releases heat is called:",
//         "options": [
//           "Endothermic",
//           "Exothermic",
//           "Combination",
//           "Decomposition"
//         ],
//         "correctAnswer": 1,
//         "explanation": "An exothermic reaction is a chemical reaction that releases energy in the form of light or heat."
//       }
//     ]
//   },
//   {
//     "id": 14,
//     "title": "Tissues, Diversity & Health",
//     "subject": "biology",
//     "grade": "9",
//     "questions": 5,
//     "duration": 18,
//     "difficulty": "Medium",
//     "attempts": 920,
//     "rating": 4.6,
//     "topics": [
//       "Tissues",
//       "Biodiversity",
//       "Health & Disease"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "Which tissue connects bone to muscle?",
//         "options": [
//           "Ligament",
//           "Tendon",
//           "Cartilage",
//           "Epithelial"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Tendons are fibrous tissues that connect muscle to bone."
//       },
//       {
//         "id": 2,
//         "question": "The scientific study of classification is called:",
//         "options": [
//           "Anatomy",
//           "Physiology",
//           "Taxonomy",
//           "Genetics"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Taxonomy is the science of naming, describing and classifying organisms."
//       },
//       {
//         "id": 3,
//         "question": "Which of these is a water-borne disease?",
//         "options": [
//           "Tuberculosis",
//           "Malaria",
//           "Cholera",
//           "Dengue"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Cholera is an acute diarrheal illness caused by ingesting contaminated food or water."
//       },
//       {
//         "id": 4,
//         "question": "The 'Kingdom' in biological classification includes:",
//         "options": [
//           "Phylum",
//           "Class",
//           "Order",
//           "All of these"
//         ],
//         "correctAnswer": 0,
//         "explanation": "The hierarchy is Kingdom, Phylum, Class, Order, Family, Genus, Species."
//       },
//       {
//         "id": 5,
//         "question": "What is the function of xylem tissue in plants?",
//         "options": [
//           "Transporting food",
//           "Transporting water",
//           "Providing support",
//           "Photosynthesis"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Xylem is a vascular tissue that transports water from the roots to the leaves."
//       }
//     ]
//   },
//   {
//     "id": 15,
//     "title": "French Revolution & World Wars",
//     "subject": "history",
//     "grade": "9",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Hard",
//     "attempts": 820,
//     "rating": 4.7,
//     "topics": [
//       "French Revolution",
//       "Russian Revolution",
//       "World War I & II"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "The French Revolution began in which year?",
//         "options": [
//           "1776",
//           "1789",
//           "1815",
//           "1848"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The French Revolution began with the storming of the Bastille in 1789."
//       },
//       {
//         "id": 2,
//         "question": "The 'Treaty of Versailles' officially ended which war?",
//         "options": [
//           "American Civil War",
//           "World War I",
//           "World War II",
//           "Korean War"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The Treaty of Versailles was the peace treaty that ended World War I."
//       },
//       {
//         "id": 3,
//         "question": "Who was the leader of the Bolshevik party during the Russian Revolution?",
//         "options": [
//           "Joseph Stalin",
//           "Vladimir Lenin",
//           "Leon Trotsky",
//           "Nikita Khrushchev"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Vladimir Lenin led the Bolsheviks to power in the 1917 Russian Revolution."
//       },
//       {
//         "id": 4,
//         "question": "The Great Depression started in which country?",
//         "options": [
//           "United Kingdom",
//           "Germany",
//           "United States",
//           "Soviet Union"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The Great Depression began with the stock market crash in the United States in 1929."
//       },
//       {
//         "id": 5,
//         "question": "The attack on Pearl Harbor led to which country entering World War II?",
//         "options": [
//           "Soviet Union",
//           "United States",
//           "Japan",
//           "China"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The Japanese attack on Pearl Harbor on December 7, 1941, led to the US entering World War II."
//       }
//     ]
//   },

//   // -------- Grade 10 Mock Tests --------
//   {
//     "id": 16,
//     "title": "Trigonometry & Statistics",
//     "subject": "mathematics",
//     "grade": "10",
//     "questions": 5,
//     "duration": 25,
//     "difficulty": "Hard",
//     "attempts": 950,
//     "rating": 4.8,
//     "topics": [
//       "Trigonometry",
//       "Statistics",
//       "Probability"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "What is the value of sin(30°)?",
//         "options": [
//           "1",
//           "0",
//           "1/2",
//           "√3/2"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The standard trigonometric value for sin(30°) is 1/2."
//       },
//       {
//         "id": 2,
//         "question": "The mean of the numbers 2, 4, 6, 8, 10 is:",
//         "options": [
//           "5",
//           "6",
//           "7",
//           "8"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Mean = (2+4+6+8+10) / 5 = 30 / 5 = 6."
//       },
//       {
//         "id": 3,
//         "question": "What is the probability of getting a 'head' when a coin is tossed?",
//         "options": [
//           "1/4",
//           "1/2",
//           "3/4",
//           "1"
//         ],
//         "correctAnswer": 1,
//         "explanation": "There are two possible outcomes (head or tail), and one of them is favorable, so the probability is 1/2."
//       },
//       {
//         "id": 4,
//         "question": "The distance of the point (3, 4) from the origin is:",
//         "options": [
//           "3",
//           "4",
//           "5",
//           "7"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Using the distance formula from the origin, d = √(3² + 4²) = √(9+16) = √25 = 5."
//       },
//       {
//         "id": 5,
//         "question": "In a right-angled triangle, if one angle is 60°, what is the value of the third angle?",
//         "options": [
//           "30°",
//           "60°",
//           "90°",
//           "180°"
//         ],
//         "correctAnswer": 0,
//         "explanation": "The sum of angles in a triangle is 180°. So, 180° - 90° - 60° = 30°."
//       }
//     ]
//   },
//   {
//     "id": 17,
//     "title": "Electricity & Magnetism",
//     "subject": "physics",
//     "grade": "10",
//     "questions": 5,
//     "duration": 25,
//     "difficulty": "Hard",
//     "attempts": 980,
//     "rating": 4.9,
//     "topics": [
//       "Electricity",
//       "Magnetism",
//       "Circuits"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "What is the unit of electric current?",
//         "options": [
//           "Volt",
//           "Ohm",
//           "Ampere",
//           "Watt"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The SI unit of electric current is the Ampere (A)."
//       },
//       {
//         "id": 2,
//         "question": "Ohm's Law states the relationship between:",
//         "options": [
//           "Current, Power, and Resistance",
//           "Voltage, Current, and Resistance",
//           "Voltage, Charge, and Time",
//           "Power, Energy, and Time"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Ohm's Law is V = IR, which relates Voltage (V), Current (I), and Resistance (R)."
//       },
//       {
//         "id": 3,
//         "question": "A device that converts electrical energy into mechanical energy is a:",
//         "options": [
//           "Generator",
//           "Transformer",
//           "Motor",
//           "Resistor"
//         ],
//         "correctAnswer": 2,
//         "explanation": "An electric motor uses electricity to produce motion."
//       },
//       {
//         "id": 4,
//         "question": "Which of these materials is a good conductor of electricity?",
//         "options": [
//           "Glass",
//           "Rubber",
//           "Copper",
//           "Plastic"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Copper is a metal with free electrons, making it an excellent conductor."
//       },
//       {
//         "id": 5,
//         "question": "A fuse wire is made of an alloy with a:",
//         "options": [
//           "High melting point",
//           "Low melting point",
//           "High resistance",
//           "Low resistance"
//         ],
//         "correctAnswer": 1,
//         "explanation": "A fuse is designed to melt and break the circuit when a high current flows through it, so it needs a low melting point."
//       }
//     ]
//   },
//   {
//     "id": 18,
//     "title": "Acids, Bases & Salts",
//     "subject": "chemistry",
//     "grade": "10",
//     "questions": 5,
//     "duration": 25,
//     "difficulty": "Hard",
//     "attempts": 870,
//     "rating": 4.8,
//     "topics": [
//       "Acids",
//       "Bases",
//       "Salts",
//       "pH"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "A solution with a pH of 7 is:",
//         "options": [
//           "Acidic",
//           "Basic",
//           "Neutral",
//           "Corrosive"
//         ],
//         "correctAnswer": 2,
//         "explanation": "A pH of 7 indicates a neutral solution, such as pure water."
//       },
//       {
//         "id": 2,
//         "question": "What is the chemical name for baking soda?",
//         "options": [
//           "Sodium Chloride",
//           "Sodium Bicarbonate",
//           "Calcium Carbonate",
//           "Sodium Hydroxide"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Baking soda is chemically known as Sodium Bicarbonate (NaHCO₃)."
//       },
//       {
//         "id": 3,
//         "question": "Which gas is released when an acid reacts with a metal?",
//         "options": [
//           "Oxygen",
//           "Carbon Dioxide",
//           "Hydrogen",
//           "Nitrogen"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Acids react with active metals to produce a salt and hydrogen gas."
//       },
//       {
//         "id": 4,
//         "question": "The 'Litmus Test' is used to identify:",
//         "options": [
//           "Density of a substance",
//           "Color of a substance",
//           "Acidity or alkalinity",
//           "Temperature"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Litmus paper changes color in the presence of an acid (red) or a base (blue)."
//       },
//       {
//         "id": 5,
//         "question": "A neutralization reaction is a reaction between:",
//         "options": [
//           "Acid and Salt",
//           "Base and Salt",
//           "Acid and Base",
//           "Salt and Water"
//         ],
//         "correctAnswer": 2,
//         "explanation": "A neutralization reaction is a chemical reaction in which an acid and a base react to form a salt and water."
//       }
//     ]
//   },
//   {
//     "id": 19,
//     "title": "Ecosystem & Environmental Issues",
//     "subject": "biology",
//     "grade": "10",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Medium",
//     "attempts": 1020,
//     "rating": 4.7,
//     "topics": [
//       "Ecosystems",
//       "Environment",
//       "Pollution"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "The main gas responsible for the greenhouse effect is:",
//         "options": [
//           "Oxygen",
//           "Nitrogen",
//           "Carbon Dioxide",
//           "Helium"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Carbon dioxide (CO₂) is the primary greenhouse gas released by human activities."
//       },
//       {
//         "id": 2,
//         "question": "What is the term for a group of organisms of the same species living in a specific area?",
//         "options": [
//           "Community",
//           "Ecosystem",
//           "Population",
//           "Biome"
//         ],
//         "correctAnswer": 2,
//         "explanation": "A population is a group of individuals of the same species living in the same geographic area."
//       },
//       {
//         "id": 3,
//         "question": "Ozone layer depletion is caused by:",
//         "options": [
//           "Sulphur dioxide",
//           "Carbon monoxide",
//           "Chlorofluorocarbons (CFCs)",
//           "Methane"
//         ],
//         "correctAnswer": 2,
//         "explanation": "CFCs are the primary chemicals responsible for the destruction of the ozone layer."
//       },
//       {
//         "id": 4,
//         "question": "The process of nitrogen fixation is carried out by:",
//         "options": [
//           "Fungi",
//           "Algae",
//           "Bacteria",
//           "Viruses"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Nitrogen-fixing bacteria convert atmospheric nitrogen into compounds usable by plants."
//       },
//       {
//         "id": 5,
//         "question": "Which of these is a biodegradable waste?",
//         "options": [
//           "Plastic bottle",
//           "Glass",
//           "Vegetable peels",
//           "Aluminum can"
//         ],
//         "correctAnswer": 2,
//         "explanation": "Biodegradable waste can be broken down by microorganisms, unlike plastic, glass, or metal."
//       }
//     ]
//   },
//   {
//     "id": 20,
//     "title": "Indian Freedom Struggle & Post-Independence",
//     "subject": "history",
//     "grade": "10",
//     "questions": 5,
//     "duration": 20,
//     "difficulty": "Hard",
//     "attempts": 900,
//     "rating": 4.9,
//     "topics": [
//       "Freedom Struggle",
//       "Constitution",
//       "Post-1947"
//     ],
//     "premium": true,
//     "questionsData": [
//       {
//         "id": 1,
//         "question": "The 'Swaraj' Party was formed by:",
//         "options": [
//           "Mahatma Gandhi",
//           "Jawaharlal Nehru",
//           "Motilal Nehru and C.R. Das",
//           "Subhas Chandra Bose"
//         ],
//         "correctAnswer": 2,
//         "explanation": "The Swaraj Party was formed by Motilal Nehru and C.R. Das in 1923."
//       },
//       {
//         "id": 2,
//         "question": "Who was the first Prime Minister of India?",
//         "options": [
//           "Sardar Vallabhbhai Patel",
//           "Jawaharlal Nehru",
//           "B.R. Ambedkar",
//           "Rajendra Prasad"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Jawaharlal Nehru became the first Prime Minister of independent India."
//       },
//       {
//         "id": 3,
//         "question": "The 'Simon Commission' was boycotted because:",
//         "options": [
//           "It had no Indian members",
//           "It recommended partition",
//           "It was against the Congress",
//           "It was pro-British"
//         ],
//         "correctAnswer": 0,
//         "explanation": "The commission was an all-white body and had no Indian members, leading to widespread boycotts."
//       },
//       {
//         "id": 4,
//         "question": "Who is known as the 'Father of the Indian Constitution'?",
//         "options": [
//           "Mahatma Gandhi",
//           "B.R. Ambedkar",
//           "Jawaharlal Nehru",
//           "Rajendra Prasad"
//         ],
//         "correctAnswer": 1,
//         "explanation": "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constitution."
//       },
//       {
//         "id": 5,
//         "question": "The 'Dandi March' was a protest against:",
//         "options": [
//           "Indigo cultivation",
//           "Salt Law",
//           "Land revenue",
//           "Famine"
//         ],
//         "correctAnswer": 1,
//         "explanation": "The Dandi March, led by Mahatma Gandhi, was a nonviolent protest against the British salt monopoly."
//       }
//     ]
//   }
// ]

//   const recentResults = [
//     { name: 'Lokesh', score: 98, subject: 'Mathematics', avatar: '👨‍🎓' },
//     { name: 'Priya Patel', score: 95, subject: 'Physics', avatar: '👩‍🎓' },
//     { name: 'Rohit Kumar', score: 92, subject: 'Chemistry', avatar: '👨‍🎓' },
//     { name: 'Sneha Singh', score: 88, subject: 'Biology', avatar: '👩‍🎓' }
//   ];

//   // Filter tests by selected grade and filter tab
//   const filteredTests = mockTests.filter(test => {
//     if (test.grade !== selectedGrade) return false;
//     if (activeFilter === 'all') return true;
//     if (activeFilter === 'free') return !test.premium;
//     if (activeFilter === 'premium') return test.premium;
//     return true;
//   });

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Easy': return '#4CAF50';
//       case 'Medium': return '#FF9800';
//       case 'Hard': return '#F44336';
//       default: return '#666';
//     }
//   };

//   const startTest = (test) => {
//     setCurrentTest(test);
//     setTimeLeft(test.duration * 60); // Convert minutes to seconds
//     setTestStarted(true);
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setTestSubmitted(false);
//     setScore(0);
//   };

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < currentTest.questionsData.length - 1) {
//       setCurrentQuestionIndex(prev => prev + 1);
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(prev => prev - 1);
//     }
//   };

//   const submitTest = useCallback(() => {
//     let correctAnswers = 0;
//     currentTest.questionsData.forEach(question => {
//       if (selectedAnswers[question.id] === question.correctAnswer) {
//         correctAnswers++;
//       }
//     });
//     const calculatedScore = Math.round((correctAnswers / currentTest.questionsData.length) * 100);
//     setScore(calculatedScore);
//     setTestSubmitted(true);
//   }, [currentTest, selectedAnswers]);

//   useEffect(() => {
//     if (!testStarted || testSubmitted) return;
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           submitTest();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [testStarted, testSubmitted, submitTest]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const exitTest = () => {
//     setTestStarted(false);
//     setCurrentTest(null);
//   };

//   const handleGradeSelect = (gradeValue) => {
//     setSelectedGrade(gradeValue);

//     // Scroll to subject section for grades 7-10
//     if (['7', '8', '9', '10'].includes(gradeValue)) {
//       setTimeout(() => {
//         subjectSectionRef.current?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }, 200);
//     }
//     // Show coming soon message for grades 11-12
//     else if (['11', '12'].includes(gradeValue)) {
//       setComingSoonGrade(gradeValue);
//       setShowComingSoon(true);
//       setTimeout(() => setShowComingSoon(false), 2000);
//     }
//   };

//   const currentQuestion = currentTest?.questionsData?.[currentQuestionIndex];

//   return (
//     <div className="practice-container">
//       {/* Animated Background Elements */}
//       <div className="bg-elements">
//         <div className="floating-shape shape-1"></div>
//         <div className="floating-shape shape-2"></div>
//         <div className="floating-shape shape-3"></div>
//         <div className="floating-shape shape-4"></div>
//       </div>
//       {!testStarted ? (
//         <>
//           {/* Hero Section */}
//           <section className="hero-section">
//             <div className="hero-content">
//               <div className="hero-text">
//                 <h1 className="hero-title">
//                   Master Your Skills with 
//                   <span className="gradient-text"> Mock Tests</span>
//                 </h1>
//                 <p className="hero-subtitle">
//                   Practice makes perfect! Take comprehensive mock tests designed for grades 7-12 
//                   and boost your confidence before the real exam.
//                 </p>
//                 {/* Animated Stats */}
//                 <div className="stats-container">
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
//                     <div className="stat-label">Mock Tests</div>
//                   </div>
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
//                     <div className="stat-label">Students</div>
//                   </div>
//                   <div className="stat-item">
//                     <div className="stat-number">{animatedStats.avgScore}%</div>
//                     <div className="stat-label">Avg Score</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="hero-visual">
//                 <div className="test-preview">
//                   <div className="test-header">
//                     <div className="test-dots"><span></span><span></span><span></span></div>
//                     <div className="test-title">Practice Test</div>
//                   </div>
//                   <div className="test-content">
//                     <div className="question-preview">
//                       <div className="question-number">Q1.</div>
//                       <div className="question-text">What is the derivative of x²?</div>
//                     </div>
//                     <div className="options-preview">
//                       <div className="option-line active"></div>
//                       <div className="option-line"></div>
//                       <div className="option-line"></div>
//                       <div className="option-line"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* Grade Selection */}
//           <section className="grade-selection-section">
//             <h2 className="section-title">Choose Your Grade</h2>
//             <div className="grade-cards" style={{ position: "relative" }}>
//               {grades.map((grade) => (
//                 <div
//                   key={grade.value}
//                   className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
//                   onClick={() => handleGradeSelect(grade.value)}
//                   style={{ '--grade-color': grade.color, position: "relative" }}
//                 >
//                   {/* Toast message above the selected card */}
//                   {showComingSoon && comingSoonGrade === grade.value && ['11', '12'].includes(grade.value) && (
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "-48px",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         background: "#2D5D7B",
//                         color: "#fff",
//                         padding: "0.7rem 1.5rem",
//                         borderRadius: "8px",
//                         boxShadow: "0 4px 16px rgba(45,93,123,0.12)",
//                         zIndex: 10,
//                         fontSize: "1rem",
//                         fontWeight: 600,
//                         textAlign: "center",
//                         whiteSpace: "nowrap",
//                         animation: "fadeInOut 2s"
//                       }}
//                     >
//                       Coming Soon!
//                     </div>
//                   )}
//                   <div className="grade-number">{grade.value}</div>
//                   <div className="grade-label">{grade.label}</div>
//                   <div className="grade-glow"></div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Subject Selection */}
//           <section className="subject-selection-section" ref={subjectSectionRef}>
//             <h2 className="section-title">Select Subject</h2>
//             <div className="subjects-grid">
//               {subjects.map((subject) => (
//                 <div
//                   key={subject.id}
//                   className={`subject-card ${selectedSubject === subject.id ? 'active' : ''}`}
//                   onClick={() => {
//                     setSelectedSubject(subject.id);
//                     const firstTest = mockTests.find(
//                       (test) =>
//                         test.subject.toLowerCase() === subject.name.toLowerCase() &&
//                         test.grade === selectedGrade
//                     );
//                     if (firstTest) startTest(firstTest);
//                     else alert('No mock test available for this subject and grade!');
//                   }}
//                 >
//                   <div className="subject-icon">{subject.icon}</div>
//                   <h3 className="subject-name">{subject.name}</h3>
//                   <div className="subject-stats">
//                     <div className="stat">
//                       <BookOpen size={16} />
//                       <span>{subject.tests} Tests</span>
//                     </div>
//                     <div className="stat">
//                       <Target size={16} />
//                       <span>{subject.difficulty}</span>
//                     </div>
//                     <div className="stat">
//                       <Clock size={16} />
//                       <span>{subject.duration}</span>
//                     </div>
//                   </div>
//                   <div className="card-hover-effect"></div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Mock Tests Grid */}
//           <section className="mock-tests-section">
//             <div className="section-header">
//               <h2 className="section-title">Available Mock Tests</h2>
//               <div className="filter-tabs">
//                 <button
//                   className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('all')}
//                 >
//                   All Tests
//                 </button>
//                 <button
//                   className={`filter-tab ${activeFilter === 'free' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('free')}
//                 >
//                   Medium
//                 </button>
//                 <button
//                   className={`filter-tab ${activeFilter === 'premium' ? 'active' : ''}`}
//                   onClick={() => setActiveFilter('premium')}
//                 >
//                   Advanced
//                 </button>
//               </div>
//             </div>
//             <div className="mock-tests-grid">
//               {filteredTests.map((test) => (
//                 <div key={test.id} className="mock-test-card">
//                   {test.premium && <div className="premium-badge">Advanced</div>}

//                   <div className="test-header">
//                     <h3 className="test-title">{test.title}</h3>
//                     <div className="test-rating">
//                       <Star size={14} fill="currentColor" />
//                       <span>{test.rating}</span>
//                     </div>
//                   </div>

//                   <div className="test-subject">{test.subject}</div>

//                   <div className="test-meta">
//                     <div className="meta-item">
//                       <BookOpen size={16} />
//                       <span>{test.questions} Questions</span>
//                     </div>
//                     <div className="meta-item">
//                       <Clock size={16} />
//                       <span>{test.duration} min</span>
//                     </div>
//                     <div className="meta-item">
//                       <Target size={16} />
//                       <span className="difficulty-badge" style={{ color: getDifficultyColor(test.difficulty) }}>
//                         {test.difficulty}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="test-topics">
//                     {test.topics.map((topic, index) => (
//                       <span key={index} className="topic-tag">{topic}</span>
//                     ))}
//                   </div>

//                   <div className="test-stats">
//                     <div className="stat-item">
//                       <Users size={16} />
//                       <span>{test.attempts} attempts</span>
//                     </div>
//                   </div>

//                   <button className="start-test-btn" onClick={() => startTest(test)}>
//                     <Play size={18} />
//                     Start Test
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {/* Recent Results */}
//           <section className="recent-results-section">
//             <h2 className="section-title">Top Performers</h2>
//             <div className="results-grid">
//               {recentResults.map((result, index) => (
//                 <div key={index} className="result-card">
//                   <div className="result-avatar">{result.avatar}</div>
//                   <div className="result-info">
//                     <div className="result-name">{result.name}</div>
//                     <div className="result-subject">{result.subject}</div>
//                   </div>
//                   <div className="result-score">{result.score}%</div>
//                   <div className="score-bar">
//                     <div className="score-fill" style={{ width: `${result.score}%` }}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       ) : (
//         <div className="test-taking-container">
//           {!testSubmitted ? (
//             <>
//               <div className="test-header-bar">
//                 <div className="test-info">
//                   <h2>{currentTest.title}</h2>
//                   <div className="test-meta">
//                     <span className="test-subject">{currentTest.subject}</span>
//                     <span className="test-difficulty" style={{ color: getDifficultyColor(currentTest.difficulty) }}>
//                       {currentTest.difficulty}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="test-timer">
//                   <Clock size={20} />
//                   <span>{formatTime(timeLeft)}</span>
//                 </div>
//                 <button className="exit-test-btn" onClick={exitTest}>
//                   <X size={20} />
//                 </button>
//               </div>

//               <div className="test-progress-bar">
//                 <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / currentTest.questionsData.length) * 100}%` }}></div>
//               </div>

//               <div className="question-container">
//                 <div className="question-header">
//                   <span className="question-number">Question {currentQuestionIndex + 1} of {currentTest.questionsData.length}</span>
//                 </div>
//                 <div className="question-text">{currentQuestion.question}</div>

//                 <div className="answer-options">
//                   {currentQuestion.options.map((option, index) => (
//                     <div
//                       key={index}
//                       className={`option ${selectedAnswers[currentQuestion.id] === index ? 'selected' : ''}`}
//                       onClick={() => handleAnswerSelect(currentQuestion.id, index)}
//                     >
//                       <div className="option-selector">
//                         {selectedAnswers[currentQuestion.id] === index ? (
//                           <div className="option-selected-indicator"></div>
//                         ) : null}
//                       </div>
//                       <div className="option-text">{option}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="test-navigation">
//                 <button className="nav-btn prev-btn" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
//                   <ArrowLeft size={18} />
//                   Previous
//                 </button>

//                 <div className="question-indicators">
//                   {currentTest.questionsData.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`indicator ${currentQuestionIndex === index ? 'active' : ''} ${selectedAnswers[currentTest.questionsData[index].id] !== undefined ? 'answered' : ''}`}
//                       onClick={() => setCurrentQuestionIndex(index)}
//                     ></div>
//                   ))}
//                 </div>

//                 {currentQuestionIndex < currentTest.questionsData.length - 1 ? (
//                   <button className="nav-btn next-btn" onClick={goToNextQuestion}>
//                     Next
//                     <ChevronRight size={18} />
//                   </button>
//                 ) : (
//                   <button className="submit-test-btn" onClick={submitTest}>
//                     Submit Test
//                   </button>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div className="test-results-container">
//               <div className="results-header">
//                 <h2>Test Results</h2>
//                 <div className="test-title">{currentTest.title}</div>
//               </div>

//               <div className="results-summary">
//                 <div className="score-display">
//                   <div className="score-value">{score}%</div>
//                   <div className="score-label">Your Score</div>
//                 </div>

//                 <div className="results-details">
//                   <div className="detail-item">
//                     <div className="detail-label">Correct Answers</div>
//                     <div className="detail-value">
//                       {Object.values(selectedAnswers).filter((answer, index) =>
//                         answer === currentTest.questionsData[index].correctAnswer).length} / {currentTest.questionsData.length}
//                     </div>
//                   </div>
//                   <div className="detail-item">
//                     <div className="detail-label">Time Taken</div>
//                     <div className="detail-value">{formatTime((currentTest.duration * 60) - timeLeft)}</div>
//                   </div>
//                   <div className="detail-item">
//                     <div className="detail-label">Difficulty</div>
//                     <div className="detail-value" style={{ color: getDifficultyColor(currentTest.difficulty) }}>{currentTest.difficulty}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="answers-review">
//                 <h3>Answers Review</h3>
//                 {currentTest.questionsData.map((question, index) => (
//                   <div key={question.id} className={`question-review ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
//                     <div className="question-header">
//                       <span className="question-number">Question {index + 1}</span>
//                       {selectedAnswers[question.id] === question.correctAnswer ? (
//                         <span className="correct-indicator">
//                           <Check size={16} /> Correct
//                         </span>
//                       ) : (
//                         <span className="incorrect-indicator">
//                           <X size={16} /> Incorrect
//                         </span>
//                       )}
//                     </div>
//                     <div className="question-text">{question.question}</div>
//                     <div className="correct-answer">Correct Answer: {question.options[question.correctAnswer]}</div>
//                     {selectedAnswers[question.id] !== question.correctAnswer && (
//                       <div className="your-answer">Your Answer: {question.options[selectedAnswers[question.id]]}</div>
//                     )}
//                     <div className="explanation"><strong>Explanation:</strong> {question.explanation}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="results-actions">
//                 <button className="retake-test-btn" onClick={() => startTest(currentTest)}>
//                   <Play size={18} />
//                   Retake Test
//                 </button>
//                 <button className="back-to-tests-btn" onClick={exitTest}>Back to All Tests</button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//       {showComingSoon && (
//         <div className="toast-coming-soon"
//           style={{
//             position: "fixed",
//             bottom: "32px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             background: "#2D5D7B",
//             color: "#fff",
//             padding: "0.9rem 2rem",
//             borderRadius: "8px",
//             boxShadow: "0 4px 16px rgba(45,93,123,0.15)",
//             zIndex: 9999,
//             fontSize: "1.1rem",
//             fontWeight: 600,
//             textAlign: "center",
//             whiteSpace: "nowrap",
//             animation: "fadeInOut 2s"
//           }}
//         >
//           Coming Soon!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;









import React, { useState, useEffect, useRef } from 'react';
import { Check, Clock, Users, Target, BookOpen, FileText, Star, Award, Zap, TrendingUp, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './practice.css';
import mockTestSyllabus from './MockTestSyllabus';

const grades = [
  { value: '7', label: 'Grade 7', color: '#4F46E5' },
  { value: '8', label: 'Grade 8', color: '#059669' },
  { value: '9', label: 'Grade 9', color: '#DC2626' },
  { value: '10', label: 'Grade 10', color: '#7C3AED' },
  { value: '11', label: 'Grade 11', color: '#EA580C' },
  { value: '12', label: 'Grade 12', color: '#0891B2' }
];

const subjects = [
  { id: 'english', name: 'English', icon: '📖', color: '#EC4899' },
  { id: 'mathematics', name: 'Maths', icon: '🧮', color: '#3B82F6' },
  { id: 'science', name: 'Science', icon: '🔬', color: '#10B981' },
  { id: 'social_science', name: 'Social Science', icon: '🌍', color: '#F59E0B' },
  { id: 'computer', name: 'Computer', icon: '💻', color: '#8B5CF6' }
];

const Practice = () => {
  const navigate = useNavigate();
  const subjectSectionRef = useRef(null);
  const mockSectionRef = useRef(null);

  // Hero and Grade Section state
  const [selectedGrade, setSelectedGrade] = useState('7');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonGrade, setComingSoonGrade] = useState(null);

  // Animated stats
  const [animatedStats, setAnimatedStats] = useState({
    totalTests: 0,
    studentsEnrolled: 0,
    avgScore: 0
  });

  useEffect(() => {
    document.title = "Mock-Tests | NOVYA - Your Smart Learning Platform";

    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        callback(current);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 2500, 2000, (val) => setAnimatedStats(prev => ({ ...prev, totalTests: val })));
    animateValue(0, 850, 2500, (val) => setAnimatedStats(prev => ({ ...prev, studentsEnrolled: val })));
    animateValue(0, 87, 1800, (val) => setAnimatedStats(prev => ({ ...prev, avgScore: val })));
  }, []);

  const handleGradeSelect = (gradeValue) => {
    setSelectedGrade(gradeValue);

    if (['7', '8', '9', '10'].includes(gradeValue)) {
      setTimeout(() => {
        subjectSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 200);
    } else if (['11', '12'].includes(gradeValue)) {
      setComingSoonGrade(gradeValue);
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
    }
  };

  // Navigate to PracticeSubjectPage
  const goToPracticeSubject = (subject) => {
    navigate(`/practice-subject/${subject.id}`, {
      state: { subjectName: subject.name, grade: selectedGrade }
    });
  };

  // Navigate to MockTestPage with chapters only
  const goToMockTest = (subject) => {
    const chapters = mockTestSyllabus[subject.id]?.classes[selectedGrade] || [];
    navigate(`/mock-test/${subject.id}`, {
      state: { subjectName: subject.name, grade: selectedGrade, chapters }
    });
  };

  return (
    <div className="practice-container">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px' // Added padding to prevent overlap with navbar
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />

        <div className="container">
          <div className="hero-content" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="hero-text" style={{ flex: '1 1 350px', minWidth: 260 }}>
              <h1 className="hero-title" style={{animation: 'slideInLeft 1s ease-out'}}>
                Master Every Subject with 
                <span className="highlight-text"> Smart Practice</span>
              </h1>
              <p className="hero-description" style={{animation: 'slideInLeft 1s ease-out 0.2s both'}}>
                Practice with targeted quizzes or challenge yourself with comprehensive mock tests. 
                Built for students from Grade 7-12 with instant feedback and detailed analytics.
              </p>
              
              <div className="stats-grid" style={{animation: 'slideInUp 1s ease-out 0.4s both'}}>
                <div className="stat-card" style={{animation: 'statCard 0.6s ease-out 0s both'}}>
                  <div className="stat-icon">
                    <FileText size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedStats.totalTests.toLocaleString()}+</div>
                    <div className="stat-label">Practice Tests</div>
                  </div>
                </div>
                <div className="stat-card" style={{animation: 'statCard 0.6s ease-out 0.1s both'}}>
                  <div className="stat-icon">
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{animatedStats.studentsEnrolled.toLocaleString()}+</div>
                    <div className="stat-label">Students Learning</div>
                  </div>
                </div>
              
              </div>
            </div>
            
            <div className="hero-visual" style={{
              flex: '1 1 320px',
              maxWidth: 420,
              minWidth: 220,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
              animation: 'slideInRight 1s ease-out 0.3s both'
            }}>
              {/* Student Studying Illustration */}
              <div style={{
                width: '100%',
                maxWidth: '320px',
                height: '240px',
                background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -12px rgba(79, 70, 229, 0.25)',
                animation: 'pulse 4s ease-in-out infinite',
                marginBottom: '18px'
              }}>
                {/* Student Icon */}
                <div style={{
                  fontSize: '80px',
                  color: '#FFFFFF',
                  opacity: '0.9',
                  animation: 'bounce 2s infinite'
                }}>
                  👨‍🎓
                </div>
                
                {/* Floating Elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '8px',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <BookOpen size={24} color="#FFFFFF" />
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '8px',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}>
                  <Star size={20} color="#FFFFFF" />
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '15px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  padding: '6px',
                  animation: 'float 3s ease-in-out infinite 2s'
                }}>
                  <Award size={18} color="#FFFFFF" />
                </div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                background: '#10B981',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                boxShadow: '0 8px 16px -4px rgba(16, 185, 129, 0.4)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                A+
              </div>
              
              {/* Interactive Demo Card */}
              <div className="demo-card" style={{
                transform: 'rotate(-2deg)',
                animation: 'cardFloat 6s ease-in-out infinite'
              }}>
                <div className="demo-header">
                  <div className="demo-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="demo-title">Practice Test</div>
                </div>
                <div className="demo-content">
                  <div className="question-preview">
                    <div className="question-number">Question 1 of 10</div>
                    <div className="question-text">What is the derivative of x²?</div>
                  </div>
                  <div className="options-preview">
                    <div className="option-bar"></div>
                    <div className="option-bar active"></div>
                    <div className="option-bar"></div>
                    <div className="option-bar"></div>
                  </div>
                  <div className="demo-timer">
                    <Clock size={16} />
                    <span>15:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selection Section */}
      <section className="grade-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Select Your Grade</h2>
            <p className="section-subtitle">Choose your class to get personalized practice content</p>
          </div>
          
          <div className="grade-grid">
            {grades.map((grade) => (
              <div
                key={grade.value}
                className={`grade-card ${selectedGrade === grade.value ? 'active' : ''}`}
                onClick={() => handleGradeSelect(grade.value)}
                style={{ '--grade-color': grade.color }}
              >
                {showComingSoon && comingSoonGrade === grade.value && ['11','12'].includes(grade.value) && (
                  <div className="coming-soon-badge">Coming Soon!</div>
                )}
                <div className="grade-content">
                  <div className="grade-number">{grade.value}</div>
                  <div className="grade-label">{grade.label}</div>
                </div>
                <div className="grade-check">
                  <Check size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section ref={subjectSectionRef} className="practice-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quick Practice</h2>
            <p className="section-subtitle">Focus on specific topics with bite-sized quizzes and instant feedback</p>
          </div>
          
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="simple-practice-card"
                onClick={() => goToPracticeSubject(subject)}
                style={{ 
                  '--subject-color': subject.color,
                  '--subject-color-rgb': subject.color.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')
                }}
              >
                <div className="quick-practice-tag">Quick Practice</div>
                <div className="simple-card-icon">{subject.icon}</div>
                <h3 className="simple-card-subject">{subject.name}</h3>
                <div className="simple-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Test Section */}
      <section ref={mockSectionRef} className="mock-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Full-Length Mock Tests</h2>
            <p className="section-subtitle">Exam-style tests with strict timing and comprehensive coverage</p>
          </div>
          
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="mock-card"
                onClick={() => goToMockTest(subject)}
                style={{ '--subject-color': subject.color }}
              >
                <div className="card-header">
                  <div className="subject-icon">{subject.icon}</div>
                  <div className="mock-badge">Mock Test</div>
                </div>
                <div className="card-content">
                  <h3 className="subject-name">{subject.name}</h3>
                  <p className="subject-description">Full chapter coverage test</p>
                  <div className="card-features">
                    <span className="feature">
                      <Clock size={14} />
                      Timed test
                    </span>
                    <span className="feature">
                      <FileText size={14} />
                      Complete chapters
                    </span>
                  </div>
                </div>
                <div className="card-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

<style jsx>{`
  /* Simple Practice Cards */
  .simple-practice-card {
    position: relative;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.95) 0%, 
      rgba(248, 250, 252, 0.9) 50%,
      rgba(255, 255, 255, 0.95) 100%
    );
    border: 2px solid rgba(226, 232, 240, 0.8);
    border-radius: 20px;
    padding: 32px 24px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(10px);
  }

  .simple-practice-card::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, 
      var(--subject-color), 
      rgba(255, 255, 255, 0.3), 
      var(--subject-color), 
      rgba(255, 255, 255, 0.3), 
      var(--subject-color)
    );
    border-radius: 24px;
    opacity: 0;
    transition: all 0.4s ease;
    z-index: -1;
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
  }

  .simple-practice-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, 
      rgba(var(--subject-color-rgb), 0.08) 0%, 
      transparent 70%
    );
    border-radius: 18px;
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 1;
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .simple-practice-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--subject-color);
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(var(--subject-color-rgb), 0.03) 50%,
      rgba(255, 255, 255, 0.98) 100%
    );
  }

  .simple-practice-card:hover::before {
    opacity: 0.3; /* Reduced opacity to make it less bright */
  }

  .simple-practice-card:hover::after {
    opacity: 0.6; /* Reduced opacity */
  }

  .quick-practice-tag {
    position: absolute;
    top: 16px;
    left: 16px;
    background: linear-gradient(135deg, var(--subject-color) 0%, rgba(var(--subject-color-rgb), 0.8) 100%);
    color: white;
    padding: 8px 16px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
    opacity: 0;
    transform: translateY(-15px) scale(0.8);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 6px 20px rgba(var(--subject-color-rgb), 0.3);
    backdrop-filter: blur(10px);
    z-index: 4;
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .simple-practice-card:hover .quick-practice-tag {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .simple-card-icon {
    font-size: 56px;
    margin-bottom: 16px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
    position: relative;
    z-index: 2;
    background: linear-gradient(135deg, 
      rgba(var(--subject-color-rgb), 0.1) 0%, 
      rgba(255, 255, 255, 0.9) 100%
    );
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(var(--subject-color-rgb), 0.2);
  }

  .simple-practice-card:hover .simple-card-icon {
    animation: iconPulse 0.8s ease-in-out;
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 8px 16px rgba(var(--subject-color-rgb), 0.2));
    background: linear-gradient(135deg, 
      rgba(var(--subject-color-rgb), 0.2) 0%, 
      rgba(255, 255, 255, 0.9) 100%
    );
    border-color: rgba(var(--subject-color-rgb), 0.4);
  }

  .simple-card-subject {
    font-size: 22px;
    font-weight: 800;
    color: #38393bff;
    margin: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .simple-practice-card:hover .simple-card-subject {
    color: var(--subject-color); /* Changed from white to subject color */
    transform: translateY(-2px);
    text-shadow: 0 2px 4px rgba(var(--subject-color-rgb), 0.2);
    font-weight: 900;
  }

  .simple-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 20%,
      rgba(var(--subject-color-rgb), 0.05) 40%,
      rgba(var(--subject-color-rgb), 0.1) 60%,
      transparent 80%
    );
    opacity: 0;
    transition: all 0.6s ease;
    border-radius: 18px;
    background-size: 200% 200%;
    animation: overlayShift 4s ease-in-out infinite;
  }

  @keyframes overlayShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .simple-practice-card:hover .simple-card-overlay {
    opacity: 0.8;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .simple-practice-card {
      min-height: 150px;
      padding: 24px 20px;
    }

    .simple-card-icon {
      font-size: 40px;
      margin-bottom: 12px;
    }

    .simple-card-subject {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .simple-practice-card {
      min-height: 130px;
      padding: 20px 16px;
    }

    .simple-card-icon {
      font-size: 36px;
      margin-bottom: 10px;
    }

    .simple-card-subject {
      font-size: 16px;
    }
  }
`}</style>
    </div>
  );
};

export default Practice;


