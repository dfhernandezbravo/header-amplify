import { useState, useEffect } from 'react';

const WIDTH_PERCENT = 0.7;
const HEIGHT_PERCENT = 0.9;

const UseWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const useResponsiveSize = () => {
  const { width, height } = UseWindowSize();

  const getWidthAndHeight = () => {
    if (width < 768) {
      return `width=${width}px,height=${height}px`;
    } else {
      const percentWidth = Math.floor(width * WIDTH_PERCENT);
      const percentHeight = Math.floor(height * HEIGHT_PERCENT);
      return `width=${percentWidth}px,height=${percentHeight}px`;
    }
  };

  return getWidthAndHeight();
};

export { UseWindowSize, useResponsiveSize };
