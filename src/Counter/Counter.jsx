import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 
  const intervalRef = useRef(null); 
  const countRef = useRef(count); 


  useEffect(() => {
    countRef.current = count;
  }, [count]);

 
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);


    return () => clearInterval(intervalRef.current);
  }, []);

  
  const handleReset = () => {
    clearInterval(intervalRef.current); 
    setCount(0);
    countRef.current = 0; 
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1); 
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "24px", marginBottom: "20px" }}>Count: {count}</p>
      <button
        onClick={handleReset}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
