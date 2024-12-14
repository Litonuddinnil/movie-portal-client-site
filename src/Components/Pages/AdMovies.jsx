import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import Navbar from "../Navbar";

const AddMovie = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const genres = ["Thriller", "Horror", "Action", "Sci-Fi"];
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  const duration = watch("duration");  

  const handleAddMovies = (data) => {
    const { poster, title, genre, releaseYear, duration, summary } = data;

    const newMovies = {
      poster,
      title,
      genre,
      duration,
      releaseYear,
      movieRating: rating,
      details: summary,
      email: "user@example.com", 
    };

    fetch("https://movie-portal-server-site-three.vercel.app/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovies),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie Added Successfully!",
            icon: "success",
          });
          reset(); 
          setRating(0);  
          navigate("/");  
        }
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the movie.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          <Typewriter
            words={["Add Movies"]}
            loop={1}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <form onSubmit={handleSubmit(handleAddMovies)} className="space-y-6">
          {/* Movie Poster */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Movie Poster</span>
            </label>
            <input
              type="text"
              {...register("poster", {
                required: "Poster link is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Enter a valid URL",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Enter image link"
            />
            {errors.poster && (
              <p className="text-red-400">{errors.poster.message}</p>
            )}
          </div>

          {/* Movie Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Movie Title</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
              })}
              className="input input-bordered w-full"
              placeholder="Enter movie title"
            />
            {errors.title && (
              <p className="text-red-400">{errors.title.message}</p>
            )}
          </div>

          {/* Genre */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Genre</span>
            </label>
            <select
              {...register("genre", { required: "Please select a genre" })}
              className="select select-bordered w-full"
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
            {errors.genre && (
              <p className="text-red-400">{errors.genre.message}</p>
            )}
          </div>

          {/* Duration */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Duration (in minutes)</span>
            </label>
            <input
              type="number"
              {...register("duration", {
                required: "Duration is required",
                validate: (value) =>
                  value > 60 || "Duration must be greater than 60 minutes",
              })}
              className="input input-bordered w-full"
              placeholder="Enter duration"
            />
            {errors.duration && (
              <p className="text-red-400">{errors.duration.message}</p>
            )}
          </div>

          {/* Release Year */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Release Year</span>
            </label>
            <select
              {...register("releaseYear", { required: "Please select a year" })}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select release year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.releaseYear && (
              <p className="text-red-400">{errors.releaseYear.message}</p>
            )}
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
              {...register("summary", {
                required: "Summary is required",
                minLength: {
                  value: 10,
                  message: "Summary must be at least 10 characters long",
                },
              })}
              className="textarea textarea-bordered w-full"
              placeholder="Enter movie summary"
            ></textarea>
            {errors.summary && (
              <p className="text-red-400">{errors.summary.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Movie
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default AddMovie;
