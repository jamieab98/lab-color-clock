import './App.css'
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';

//this function checks the time every 1000 ms and saves the time
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //these are the constants being displayed
  const formattedTime = format(currentTime, 'hh:mm:ss a');
  const today = new Date();
  const dayOfWeek = format(today, 'EEEE');
  const date = format(today, 'd')
  const month = format(today, 'MMMM');

  //this is the information being shown on the page
  return (
    <>
      <div className = "timePortion">
        <div className = "heading">Current Time:</div>
        <div className = "clock">{formattedTime}</div>
      </div>
      <div className = "calendar">
        <div className = "day">{dayOfWeek}</div>
        <div className = "date">{date}</div>
        <div className = "month">{month}</div>
      </div>    
    </>
  )
}


export default App;