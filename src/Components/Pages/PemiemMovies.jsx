import React from "react";
import { FaCrown } from "react-icons/fa";

const PremiumMovies = () => {
  const movies = [
    {
      title: "Eclipse of Shadows",
      price: "$9.99",
      description:
        "Step into a world where celestial forces collide with human emotions. Witness a gripping story of cosmic chaos.",
    },
    {
      title: "Chronicles of Eternity",
      price: "$12.99",
      description:
        "Uncover hidden truths in a timeless adventure that defies the boundaries of space and time.",
    },
    {
      title: "Secrets of the Cosmos",
      price: "$8.99",
      description:
        "A breathtaking journey into the mysteries of the universe. Unlock the secrets that connect us all.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Premium Movies
      </h1>
      <div className="grid h-96 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="card h-72 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
          > 
            <div className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              <FaCrown />
              <span>Premium</span>
            </div> 
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {movie.title}
            </h2> 
            <p className="text-lg text-gray-600 font-semibold mb-4">
              Price: {movie.price}
            </p> 
            <p className="text-sm text-gray-600 mb-6">{movie.description}</p> 
            <button className="btn btn-primary w-full text-sm">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumMovies;
