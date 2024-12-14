import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FeaturedMovie from "../Components/FeaturedMovie";
import { useLoaderData } from "react-router-dom";
import UpComingMovies from "../Components/Pages/UpComingMovies";

const HomeLayout = () => {
  const moviesAll = useLoaderData();  

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <nav>
          <Navbar />
        </nav>
        {/* Banner Section */}
        <section className="w-full">
          {moviesAll.length > 0 ? (
            <Banner movies={moviesAll} />
          ) : (
            <p>No movies available</p>
          )}
        </section>
      </header>
      <main>
        {/* Featured Movies Section */}
        <section>
          
          <FeaturedMovie />
        </section>
        <section>
          <h1 className="ml-2 text-4xl font-bold text-gray-800">
            UpComing  Movies
          </h1>
          <UpComingMovies></UpComingMovies>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
