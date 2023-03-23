import React, { useState, useEffect } from 'react';

const AutoSlider = ({ slides, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === slides.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length, interval]);

  return (
    <div>
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            style={{ display: isActive ? 'block' : 'none' }}
          >
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        );
      })}
    </div>
  );
};

export default AutoSlider;
