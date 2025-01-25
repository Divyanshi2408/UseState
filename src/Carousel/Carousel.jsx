import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, content: "Slide 1: Welcome to the Carousel" },
  { id: 2, content: "Slide 2: Enjoy Smooth Transitions" },
  { id: 3, content: "Slide 3: Fully Controlled Experience" },
  { id: 4, content: "Slide 4: React is Awesome!" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide logic
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // 3 seconds per slide
      return () => clearInterval(timer); // Cleanup on pause or unmount
    }
  }, [isPlaying]);

  // Navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false); // Pause autoplay when manually navigating
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  // Play or pause the carousel
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
      <h1>Carousel Component</h1>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          border: "2px solid #ccc",
          borderRadius: "10px",
          height: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                minWidth: "100%",
                background: "#f4f4f4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                padding: "20px",
              }}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevSlide}>&lt; Prev</button>
        <button onClick={togglePlay} style={{ margin: "0 10px" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={nextSlide}>Next &gt;</button>
      </div>

      {/* Dots for navigation */}
      <div style={{ marginTop: "10px" }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              padding: "5px",
              margin: "0 5px",
              borderRadius: "50%",
              background: currentSlide === index ? "#007bff" : "#ccc",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
