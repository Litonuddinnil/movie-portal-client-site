import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import StarRatings from "react-star-ratings";

const AllMovies = () => {
  const allMovies = useLoaderData();
  const navigate = useNavigate();
  const handleMovieClick = (_id)=>{
  navigate(`/movies/${_id}`)
  }
//   console.log(allMovies);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          All Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {allMovies.map((movie) => (
            <div
              key={movie._id}
              className="card w-full bg-base-100 shadow-xl p-4 rounded-lg"
            >
              <figure>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  {movie?.title}
                </h3>
                <p className="text-sm text-gray-500">{movie?.genre}</p>
                <p className="text-sm text-gray-500">
                  Duration: {movie?.duration} mins
                </p>
                <p className="text-sm text-gray-500">
                  Release Year: {movie?.releaseYear}
                </p>
                <p className="text-black font-bold text-sm">
                  Rating:
                  <span className="text-sm">
                    <StarRatings
                      rating={movie?.movieRating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="20px"
                    />
                  </span>
                </p>
                <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={()=>handleMovieClick(movie._id)}
                >
                  See Details
                </button>
              </div>
                 
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default AllMovies;
