import React, { useState } from "react";
// importation of different component from  their files
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";
import "./App.css";

function App() {
  // defining the states
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [counterInterval, setCounterInterval] = useState(null);

  //defining the functions

  const startTimer = () => {
    setTimerRunning(true);
    const counterInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setCounterInterval(counterInterval);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
    clearInterval(counterInterval);
  };
  const resetTimer = () => {
    setTime(0);
    setTimerRunning(false);
    clearInterval(counterInterval);
  };

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <TimerInput setTime={setTime} />
      <TimerDisplay time={time} />
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
