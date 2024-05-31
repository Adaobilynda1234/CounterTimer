import React from "react";

const TimerControls = ({
  timerRunning,
  startTimer,
  pauseTimer,
  resetTimer,
}) => {
  return (
    <div className="timerControls">
      {timerRunning ? (
        <button onClick={pauseTimer} className="pauseButton">
          Pause
        </button>
      ) : (
        <button onClick={startTimer} className="startButton">
          start
        </button>
      )}
      <button onClick={resetTimer} className="resetButton">
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
