import React, { useState, useEffect } from "react";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
      setTimeout(() => {
        setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
        setAnimation(false);
      }, 500);  
    }, 3000);  

    return () => clearInterval(interval);
  }, [activeSlide]);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/3y66Kz7/tiger-in-water-stockcake.webp",
      alt: "Tiger in Water",
    },
    {
      id: 2,
      image: "https://i.ibb.co/H2hgs4m/sundarban-mangroves-2.jpg",
      alt: "Sundarban Mangroves",
    },
    {
      id: 3,
      image: "https://i.ibb.co/PtyZkkF/sunbarbans-river.jpg",
      alt: "Sundarbans River",
    },
    {
      id: 4,
      image: "https://i.ibb.co/1v14R6H/slide-4.jpg",
      alt: "Mangrove",
    },
  ];

  const currentSlide = slides.find((slide) => slide.id === activeSlide);

  return (
    <div className="carousel w-full">
      <div
        className={`carousel-item relative w-full ${
          animation ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <div
          className={`w-full h-[600px] p-4 transition-all duration-1000 ${
            animation ? "scale-90" : "scale-100"
          }`}
        >
          <img
            src={currentSlide.image}
            className="w-full h-full object-cover rounded-lg transition-transform duration-700"
            alt={currentSlide.alt}
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() =>
              setActiveSlide(activeSlide === 1 ? 4 : activeSlide - 1)
            }
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() =>
              setActiveSlide(activeSlide === 4 ? 1 : activeSlide + 1)
            }
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;