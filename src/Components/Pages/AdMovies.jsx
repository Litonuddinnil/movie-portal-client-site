import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const AddMovie = () => {
  const [duration, setDuration] = useState('');
  const [error, setError] = useState({
    title: '',
    poster: '',
    duration: '',
    details: ''
  });
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState(''); // You can retrieve this from context or session

  const genres = ["Thriller", "Horror", "Action", "Sci-Fi"];
  const years = [2024, 2023, 2022, 2021, 2020];
  const navigate = useNavigate();

  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const releaseYear = form.releaseYear.value;
    const movieRating = rating;
    const details = form.summary.value;

    let errors = {
      title: '',
      poster: '',
      duration: '',
      details: ''
    };

    // Validate Title (cannot be empty)
    if (!title) {
      errors.title = 'Title cannot be empty';
    }

    // Validate Summary  
    if (!details) {
      errors.details = 'Summary cannot be empty';
    } else if (details.length < 10) {
      errors.details = 'Summary must be at least 10 characters long';
    }

    // Validate Poster Link (must be a valid URL)
    try {
      new URL(poster);  
    } catch (e) {
      errors.poster = 'Poster link must be a valid URL';
    }

    // Validate Duration
    if (!duration) {
      errors.duration = 'Duration cannot be empty';
    } else if (parseInt(duration) <= 60) {
      errors.duration = 'Duration must be greater than 60 minutes';
    } 
    if (errors.title || errors.poster || errors.duration || errors.details) {
      setError(errors);
      return;
    } 
    const newMovies = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      movieRating,
      details,
      email,  
    };
    console.log(newMovies);

    fetch('http://localhost:5000/movies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovies),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie Added Successfully!",
            icon: "success",
          });
          form.reset();
          setDuration('');
          setRating(0);  
          navigate('/');
        }
      })
      .catch(error => {
        console.log(error.message)
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the movie.",
          icon: "error",
        });
      });
  };

  const handleChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Add Movie</h2>
      <form onSubmit={handleAddMovies} className="space-y-6">
        {/* Movie Poster */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Movie Poster</span>
          </label>
          <input
            type="text"
            name="poster"
            className="input input-bordered w-full"
            placeholder="Enter image link"
          />
          {error.poster && <p className="text-red-400">{error.poster}</p>}
        </div>

        {/* Movie Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Movie Title</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter movie title"
          />
          {error.title && <p className="text-red-400">{error.title}</p>}
        </div>

        {/* Genre */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Genre</span>
          </label>
          <select name="genre" className="select select-bordered w-full">
            <option value="" disabled>
              Select genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Duration (in minutes)
            </span>
          </label>
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter duration"
          />
          {error.duration && <p className="text-red-400">{error.duration}</p>}
        </div>

        {/* Release Year */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Release Year</span>
          </label>
          <select name="releaseYear" className="select select-bordered w-full">
            <option value="" disabled>
              Select release year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Rating</span>
          </label>
          <div className="flex">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              name="movieRating"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Summary</span>
          </label>
          <textarea
            name="summary"
            className="textarea textarea-bordered w-full"
            placeholder="Enter movie summary"
          ></textarea>
          {error.details && <p className="text-red-400">{error.details}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Movie
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddMovie;
