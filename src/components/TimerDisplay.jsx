import React from "react";

const TimerDisplay = ({ counterInterval }) => {
  return (
    <div className="display">
      <p>{counterInterval} seconds remaining</p>
    </div>
  );
};

export default TimerDisplay;
