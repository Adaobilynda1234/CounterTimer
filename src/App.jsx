import React, { useState, useRef } from "react";
// importation of different component from  their files
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";
import "./App.css";

function App() {
  // defining the states
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [counterInterval, setCounterInterval] = useState(0);
  const timerRef = useRef(null);

  //defining the functions
  const handleTimer = (seconds) => {
    setTime(seconds);
    setCounterInterval(seconds);
  };

  const startTimer = () => {
    if (counterInterval > 0 && !timerRunning) {
      setTimerRunning(true);
      timerRef.current = setInterval(() => {
        setCounterInterval((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (setTimerRunning) {
      clearInterval(timerRef.current);
      setTimerRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    setCounterInterval(time);
  };

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <TimerInput handleTimer={handleTimer} />
      <TimerDisplay counterInterval={counterInterval} />
      <TimerControls
        timerRunning={timerRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
