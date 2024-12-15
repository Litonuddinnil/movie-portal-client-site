import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
 

const MovieDetails = () => {
  const movieData = useLoaderData();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [movies, setMovies] = useState([movieData]);  
  const { _id, poster, title, duration, genre, movieRating, releaseYear, details } = movieData;
  

  // Handle Movie Deletion
  const handlerDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The movie has been successfully deleted.",
                icon: "success",
              });
              const remaining = movies.filter((movie) => movie._id !== _id); // Corrected filtering logic
              setMovies(remaining);
              navigate("/movies");
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error",
            });
            console.error("Error deleting movie:", error);
          });
      }
    });
  };

  // Handle Adding to Favorites
  const handlerFavorite = (_id) => {
    if (!user?.email) {
      Swal.fire({
        title: "Error!",
        text: "You must be logged in to add favorites.",
        icon: "error",
      });
      return;
    }

    // Prepare favorite movie data
    const favoriteMovie = {
      userEmail: user.email,  
      movieId: _id,
      poster,
      title,
      genre,
      duration,
      releaseYear,
      rating: movieRating,
    };

    // Send the data to the backend
    fetch("https://movie-portal-f2acb.web.app/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "The movie has been added to your favorites.",
            icon: "success",
          });
          navigate("/favorites");  
        } 
       else if (res.status === 409) {
            Swal.fire({
              title: "Duplicate Favorite",
              text: "This movie is already in your favorite list.",
              icon: "info",
            })
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add the movie to your favorites. Please try again.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the movie to favorites.",
          icon: "error",
        });
        console.error("Error adding to favorites:", error);
        navigate("/favorites");
      });
  }; 
  return (
    <div> 
      <Navbar />
  {/* Movie Details Section */}
      <div className="p-6 grid grid-flow-row md:grid-cols-12 gap-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Movie Poster */}
        <div className="col-span-7">
          <img src={poster} alt={title} className="mb-4 rounded-lg w-full h-[634px]" />
        </div>

        {/* Movie Details */}
        <div className="col-span-5">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className=" text-black mb-2">
            <strong>Genre:</strong> {genre}
          </p>
          <p className=" text-black mb-2">
            <strong>Release Year:</strong> {releaseYear}
          </p>
          <p className=" text-black mb-2">
            <strong>Duration:</strong> {duration} minutes
          </p>
          <p className=" text-black mb-4">{details}</p>

          {/* Movie Rating */}
          <div className="mb-4">
            <p className="text-yellow-500 font-bold text-sm">Rating:</p>
            <StarRatings
              rating={movieRating}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => handlerDelete(_id)}
              className="btn btn-error text-white"
            >
              Delete Movie
            </button>
            <button
              onClick={() => handlerFavorite(_id)}
              className="btn btn-primary text-white"
            >
              Add to Favorite
            </button>
            <Link
              to={`/updateMovie/${_id}`}
              className="btn btn-primary text-white"
            >
              Update Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
