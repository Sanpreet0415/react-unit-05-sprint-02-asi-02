import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div>
      <h2>Timer Component</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default TimerComponent;
