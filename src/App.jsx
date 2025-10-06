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

  return (
    <>
      <p>The current time is: {formattedTime}</p>
    </>
  )
}


export default App;