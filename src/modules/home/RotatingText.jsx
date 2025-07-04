// src/components/RotatingText.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function RotatingText({
  texts = [],
  rotationInterval = 2000,
  initial,
  animate,
  exit,
  transition,
  staggerFrom = 'start',
  staggerDuration = 0.025,
  splitLevelClassName = '',
  mainClassName = '',
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [rotationInterval, texts.length]);

  const currentText = texts[index];

  return (
    <div className={`text-rotate ${mainClassName}`}>
      <span className="text-rotate-sr-only">{currentText}</span>
      <div className="text-rotate-lines">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className={`text-rotate-word ${splitLevelClassName}`}
          >
            {currentText.split('').map((char, i) => (
              <motion.span
                key={i}
                className="text-rotate-element"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  delay:
                    staggerFrom === 'last'
                      ? (texts[index].length - i) * staggerDuration
                      : i * staggerDuration,
                }}
              >
                {char === ' ' ? <span className="text-rotate-space"> </span> : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default RotatingText;
