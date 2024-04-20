import React, { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const sampleText = `
  <div>
  About page
    <div>
      <div className=" bg-red-400 w-[80%] p-10">
      <pre className=" whitespace-pre-wrap"  >{text}</pre>
    </div>
    <button onClick={startGenerating} disabled={isGenerating}>
      Start Generating
    </button>
    <button onClick={reset}>Reset</button>
    </div>
  </div>
`;

  const startGenerating = () => {
    setText("");
    setIsGenerating(true);
  };

  const reset = () => {
    setText("");
    setIsGenerating(false);
  };

  useEffect(() => {
    let index = 0;
    let intervalId: NodeJS.Timeout;

    const generateText = () => {
      if (index < sampleText.length) {
        setText((prevText) => prevText + sampleText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
        setIsGenerating(false);
      }
    };

    if (isGenerating) {
      intervalId = setInterval(generateText, 20);
    }

    return () => clearInterval(intervalId);
  }, [isGenerating, sampleText]);

  return (
    <div>
      About page
      <div>
        <div className=" bg-red-400 w-[80%] h-[300px] p-10 overflow-scroll">
          <pre className="whitespace-pre-wrap">{text}</pre>
        </div>
        <button onClick={startGenerating} disabled={isGenerating}>
          Start Generating
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default About;
