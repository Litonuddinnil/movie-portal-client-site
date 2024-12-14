import React from "react";
import { FaCrown } from "react-icons/fa";

const PremiumMovies = () => {
    const movies = [
        {
          title: "Eclipse of Shadows",
          star: "Gold",
          price: "$9.99",
          description:
            "Step into a world where celestial forces collide with human emotions. Witness a gripping story of cosmic chaos.",
          releaseYear: 2023,   
        },
        {
          title: "Chronicles of Eternity",
          price: "$12.99",
          star: "Platinum",
          description:
            "Uncover hidden truths in a timeless adventure that defies the boundaries of space and time.",
          releaseYear: 2022,  
        },
        {
          title: "Secrets of the Cosmos",
          price: "$8.99",
          star: "Silver",
          description:
            "A breathtaking journey into the mysteries of the universe. Unlock the secrets that connect us all.",
          releaseYear: 2021,  
        },
        {
          title: "Whispers in the Void",
          star: "Diamond",  
          price: "$14.99",  
          description:
            "Venture into the unknown as the universe speaks through the silence. A journey that transcends reality.",
          releaseYear: 2024,  
        },
      ];
      

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Premium Movies
      </h1>
      <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="card  bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
          > 
            <div className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              <FaCrown />
              <span>{movie.star}</span>
            </div> 
           
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {movie.title}
            </h2> 
            <p className="text-lg text-gray-600 font-semibold mb-4">
              Price: {movie.price}
            </p> 
            <p className="text-lg text-gray-600 font-semibold mb-4">
              ReleaseYear: {movie.releaseYear}
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
