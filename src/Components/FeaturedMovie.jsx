import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

const FeaturedMovie = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]); 
  const genres = ["Thriller", "Horror", "Action", "Sci-Fi"];
  const navigate = useNavigate();
 
  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await fetch(`http://localhost:5000/movies/genre/${genre}`); // Call backend with the genre
      const data = await response.json();
      setFeaturedMovies(data); // Update state with movies fetched by genre
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    // Fetch default featured movies
    fetch("http://localhost:5000/movies/moviesLimit")
      .then((res) => res.json())
      .then((data) => setFeaturedMovies(data))
      .catch((error) => console.error("Error fetching featured movies:", error));
  }, []); 
  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="ml-2 text-4xl font-bold ">Featured Movies</h1>
        <div className="form-control w-80 mr-4">
          <label className="flex items-center gap-2">
            <span className="label-text font-medium">Genre</span>
            <select
              onChange={(e) => fetchMoviesByGenre(e.target.value)} // Update movies on genre change
              name="genre"
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select genre
              </option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {featuredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMovies.map((movie) => (
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
                  <p className="text-sm  ">{movie?.genre}</p>
                  <p className="text-sm  ">
                    Duration: {movie?.duration} mins
                  </p>
                  <p className="text-sm  ">
                    Release Year: {movie?.releaseYear}
                  </p>
                  <p className=" font-bold text-sm">
                    Rating:
                    <span className="text-sm">
                      <StarRatings
                        rating={movie?.movieRating || 0} // Fallback for missing ratings
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
        ) : (
          <p className="text-center text-gray-600">No movies available.</p> // Fallback when no movies are found
        )}

        <div className="flex justify-center">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/movies")}
          >
            See All Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
