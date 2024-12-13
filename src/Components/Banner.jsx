import React, { useState, useEffect } from "react";

const Banner = ({ movies }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animation, setAnimation] = useState(false);

  // Ensure we have movies to display
  const slides = movies.map((movie, index) => ({
    id: index + 1,
    image: movie.poster || "Not Available",  
    alt: movie.title || "Untitled Movie",  
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
      setTimeout(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop to the next slide
        setAnimation(false);
      }, 500); // Animation duration
    }, 3000); // Interval duration

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <div className="carousel w-full relative">
      <div
        className={`carousel-item relative w-full ${
          animation ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <div
          className={`w-full h-[600px] p-4 transition-transform duration-1000 ${
            animation ? "scale-90" : "scale-100"
          }`}
        >
          <img
            src={currentSlide.image}
            className="w-full h-full object-cover rounded-lg"
            alt={currentSlide.alt}
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() =>
              setActiveSlide(
                activeSlide === 0 ? slides.length - 1 : activeSlide - 1
              )
            }
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() =>
              setActiveSlide((activeSlide + 1) % slides.length)
            }
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
