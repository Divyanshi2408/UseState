import React, { useState } from "react";

const ThemeToggler = () => {
  const themes = ["light", "dark", "solarized"]; 
  const [currentTheme, setCurrentTheme] = useState(themes[0]); 


  const toggleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  return (
    <div
      style={{
        backgroundColor: currentTheme === "light" ? "#ffffff" : currentTheme === "dark" ? "#333333" : "#fdf6e3",
        color: currentTheme === "light" ? "#000000" : currentTheme === "dark" ? "#ffffff" : "#657b83",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Current Theme: {currentTheme}</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            background: "#007BFF",
            color: "#fff",
            transition: "background 0.3s ease",
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
