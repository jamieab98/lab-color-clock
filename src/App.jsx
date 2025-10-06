import './App.css'
import {format, parseISO } from 'date-fns';

function App() {
  const today = new Date();
  const formattedDate = format(today, 'do MMMM yyyy');

  return (
    <>
      <p>Today is {formattedDate}</p>
      <p>Clock Set-Up</p>
    </>
  )
}

export default App
