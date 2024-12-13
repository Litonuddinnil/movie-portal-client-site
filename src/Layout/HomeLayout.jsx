import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FeaturedMovie from "../Components/FeaturedMovie";
import { useLoaderData } from "react-router-dom";

const HomeLayout = () => {
  const moviesAll = useLoaderData(); // Fetch movies from loader

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
          <h1 className="ml-2 text-4xl font-bold text-gray-800">
            Featured Movies
          </h1>
          <FeaturedMovie />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
