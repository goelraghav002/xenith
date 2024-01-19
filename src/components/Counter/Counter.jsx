import React, { useState, useEffect } from 'react';
import './Counter.css';

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
    <div className="counter">
      {Object.keys(timeLeft).map((unit, index) => (
        <div key={index} className="counter-item">
          <div className={`ring ring-${unit}`}>
            <div className="ring-inner">
              {addLeadingZero(timeLeft[unit])}
            </div>
          </div>
          <div className="unit-label">{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;


// import React, { useState, useEffect } from 'react';
// import './Counter.css'

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

//   // return (
//   //   <div className="counter" style={{color:"white"}}>
//   //     {timeLeft.days > 0 && <div className="counter-item">{addLeadingZero(timeLeft.days)} days</div>}
      
//   //     <div className="counter-item">{addLeadingZero(timeLeft.hours)}:{addLeadingZero(timeLeft.minutes)}:{addLeadingZero(timeLeft.seconds)}</div>
//   //   </div>
//   // );


//   return (
//     <div className="counter" style={{ color: "white" }}>
//       {timeLeft.days > 0 && 
      
//       <div className="counter-item days">{timeLeft.days} days</div>}

//       <div className="counter-item hours">
//         {timeLeft.hours} hours</div>

//       <div className="counter-item min"> 
//          {timeLeft.minutes} minutes</div>
        
//       <div className="counter-item sec">
//          {timeLeft.seconds} seconds
//       </div>
//     </div>
//   );
  
// };

// export default Counter;