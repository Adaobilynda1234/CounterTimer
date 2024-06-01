import React from "react";

const TimerControls = ({
  timerRunning,
  startTimer,
  pauseTimer,
  resetTimer,
}) => {
  return (
    <div className="timerControls">
      <button
        className="startButton"
        onClick={startTimer}
        disabled={timerRunning}
      >
        Start
      </button>
      <button
        className="pauseButton"
        onClick={pauseTimer}
        disabled={!timerRunning}
      >
        Pause
      </button>
      <button className="resetButton" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
