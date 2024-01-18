import React, { useState, useEffect } from 'react';

const Counter = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="counter" style={{color:"white"}}>
      {timeLeft.days > 0 && <div className="counter-item">{addLeadingZero(timeLeft.days)} days</div>}
      <div className="counter-item">{addLeadingZero(timeLeft.hours)}:{addLeadingZero(timeLeft.minutes)}:{addLeadingZero(timeLeft.seconds)}</div>
    </div>
  );
};

export default Counter;