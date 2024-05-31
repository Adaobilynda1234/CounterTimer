import React from "react";

const TimerDisplay = ({ time }) => {
  //defining the variable
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="display">
      <p>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default TimerDisplay;
