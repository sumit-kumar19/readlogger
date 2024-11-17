import React, { useState, useEffect } from "react";

const RandomTextComponent = () => {
  const targetText = "Correct Text";
  const textArray = ["Loading", "Fetching Data", "Please Wait", "Almost Done"];
  const [displayText, setDisplayText] = useState(textArray[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (textArray[index] === targetText) {
        setDisplayText(targetText);  // Stop when correct text is reached
        clearInterval(interval);
      } else {
        setDisplayText(textArray[index]);
        index = (index + 1) % textArray.length;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div id="randomText">{displayText}</div>;
};

export default RandomTextComponent;
