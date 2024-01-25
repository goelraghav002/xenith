import React, { useState, useEffect } from 'react';
import './Counter.css'

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
    <div className="counter" style={{ color: "white" }}>
      <div className="counter-item">
        <div className="label">Days</div>
        <div className="value">{addLeadingZero(timeLeft.days)}&emsp;:&nbsp;</div>
      </div>

      <div className="counter-item">
        <div className="label">Hours</div>
        <div className="value">{addLeadingZero(timeLeft.hours)}&emsp;:&nbsp;</div>
      </div>

      <div className="counter-item">
        <div className="label">&nbsp;Minutes</div>
        <div className="value">{addLeadingZero(timeLeft.minutes)}&emsp;:</div>
      </div>

      <div className="counter-item">
        <div className="label">&emsp;Seconds</div>
        <div className="value">{addLeadingZero(timeLeft.seconds)}</div>
      </div>
    </div>
  );
  
};

export default Counter;



// import React, { useState, useEffect } from 'react';
// import './Counter.css';

// const Counter = ({ eventDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(eventDate) - new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000)
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const addLeadingZero = (value) => {
//     return value < 10 ? `0${value}` : value;
//   };

//   return (
//     <div className="counter">
//       {Object.keys(timeLeft).map((unit, index) => (
//         <div key={index} className="counter-item">
//           <div className={`ring ring-${unit}`}>
//             <div className="ring-inner">
//               {addLeadingZero(timeLeft[unit])}
//             </div>
//           </div>
//           <div className="unit-label">{unit.toUpperCase()}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Counter;
