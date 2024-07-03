import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add event listener when component mounts
    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div>
      <h2>Scroll Component</h2>
      <p>Scroll position: {scrollPosition}px</p>
    </div>
  );
};

export default ScrollComponent;
