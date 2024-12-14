import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const FeaturedMovie = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch('http://localhost:5000/movies/moviesLimit')
      .then((res) => res.json())
      .then((data) => setFeaturedMovies(data))
      .catch((error) => console.error('Error fetching featured movies:', error));
  }, []);

  const handleMovieClick = (id) => { 
    navigate(`/movies/${id}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredMovies.map((movie) => (
          <div key={movie._id} className="card w-full bg-base-100 shadow-xl p-4 rounded-lg">
            <figure>
              <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">{movie?.title}</h3>
              <p className="text-sm text-gray-500">{movie?.genre}</p>
              <p className="text-sm text-gray-500">Duration: {movie?.duration} mins</p>
              <p className="text-sm text-gray-500">Release Year: {movie?.releaseYear}</p>
              <p className="text-black font-bold text-sm">Rating: 
                 <span className='text-sm'>
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
                  onClick={() => handleMovieClick(movie._id)}
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/movies')}
        >
          See All Movies
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
