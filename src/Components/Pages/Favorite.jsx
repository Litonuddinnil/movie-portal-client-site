import React, { useContext, useEffect, useState } from "react"; 
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Navbar";

const Favorite = () => {
  const {user} = useContext(AuthContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
 
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/favorites?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setFavoriteMovies(data));
    }
  }, [user?.email]);

  // Handler for deleting a favorite movie
  const handleDeleteFavorite = (movieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/favorites/${movieId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your favorite movie has been deleted.", "success");
              setFavoriteMovies((prev) =>
                prev.filter((movie) => movie._id !== movieId)
              );
            }
          });
      }
    });
  };

  return (
   <div>
    <div>
        <Navbar></Navbar>
    </div>
    <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {favoriteMovies.map((movie) => (
          <div
            key={movie._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Duration: {movie.duration} minutes</p>
              <p className="text-gray-600">Release Year: {movie.releaseYear}</p>
              <p className="text-yellow-500">Rating: {movie.rating}/5</p>
              <button
                className="mt-4 btn btn-error text-white w-full"
                onClick={() => handleDeleteFavorite(movie._id)}
              >
                Delete Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Favorite;
