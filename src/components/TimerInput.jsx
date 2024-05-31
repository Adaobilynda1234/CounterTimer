import React, { useState } from "react";

const TimerInput = ({ setTime }) => {
  //defining the state
  const [inputValue, setInputValue] = useState("");
  //defining the function
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const seconds = parseInt(inputValue, 10);
    if (!isNaN(seconds) && seconds > 0) {
      setTime(seconds);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter seconds"
      />
      <button type="submit">Set Timer</button>
    </form>
  );
};

export default TimerInput;
