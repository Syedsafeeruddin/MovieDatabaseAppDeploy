import React, { useState, useEffect } from "react";

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Reset displayText whenever the text changes
    setDisplayText("");
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);
  return <span className="tracking-wide">{displayText}</span>;
};

export default Typewriter;
