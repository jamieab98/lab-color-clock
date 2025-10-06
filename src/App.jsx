import './App.css'
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = format(currentTime, 'hh:mm:ss a');

  const today = new Date();
  const dayOfWeek = format(today, 'EEEE');
  const date = format(today, 'd')

  return (
    <>
      <div className = "heading">
        <p>Current Time:</p>
      </div>
      <div className = "clock">
        <p>{formattedTime}</p>
      </div>
      <div className = "calendar">
        <div className = "day">{dayOfWeek}</div>
        <div className = "date">{date}</div>
      </div>    
    </>
  )
}


export default App;