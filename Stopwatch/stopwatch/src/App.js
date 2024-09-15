import './index.css';
import { useState, useRef } from 'react';

function App() {
  const [time, setTime] = useState(0); // Time in seconds
  const timerRef = useRef(null); // Ref to hold the interval ID

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleStart = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(timerRef.current); // Clear the interval
    timerRef.current = null; // Reset the interval ref
  };

  const handleReset = () => {
    clearInterval(timerRef.current); // Clear the interval
    timerRef.current = null; // Reset the interval ref
    setTime(0); // Reset time to 0
  };

  return (
    <div className="stopwatch_container">
      <h1>Stopwatch</h1>
      <input 
        type="text" 
        className="time-display" 
        value={formatTime(time)} 
        readOnly 
      />
      <div className="button-container">
        <button className="btn" onClick={handleStart}>Start</button>
        <button className="btn" onClick={handleStop}>Stop</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
