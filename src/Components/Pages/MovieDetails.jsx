 import React from 'react';
 import { useLoaderData } from 'react-router-dom';
 import StarRatings from 'react-star-ratings';
 import Navbar from '../Navbar';
  
 
 const  MovieDetails = () => {
     const movieData = useLoaderData();
     console.log(movieData)
     const {poster,title,duration,genre,movieRating,releaseYear,details} = movieData;
     return (
         <div>
             <div>
                 <Navbar></Navbar>
             </div>
             <div className="p-6 min-h-screen grid grid-cols-12 gap-6 max-w-6xl  mx-auto bg-white shadow-lg rounded-lg">
        <div className='col-span-7'>
        <img src={ poster} alt={ title} className="mb-4 rounded-lg w-full h-auto " />
        </div>
        <div className='col-span-5'>
         <h1 className="text-4xl font-bold mb-4">{ title}</h1>
        <p className="text-gray-600 mb-2">Genre: { genre}</p>
         <p className="text-gray-600 mb-2">Release Year: { releaseYear}</p>
         <p className="text-gray-600 mb-2">Duration: { duration} minutes</p>
         <p className="text-gray-600 mb-4">{ details}</p>
         <div className="mb-4">
           <p className="text-yellow-500 font-bold text-sm">Rating:</p>
           <StarRatings
             rating={ movieRating}
             starRatedColor="gold"
             numberOfStars={5}
             starDimension="20px"
           />
         </div>
         <div className="flex space-x-4">
           <button
             
             className="btn btn-error text-white"
           >
             Delete Movie
           </button>
           <button
             
             className="btn btn-primary text-white"
           >
             Add to Favorite
           </button>
         </div>
        </div>
       </div>
         </div>
     );
 };
 
 export default MovieDetails;