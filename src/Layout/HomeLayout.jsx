import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FeaturedMovie from "../Components/FeaturedMovie";
import { useLoaderData } from "react-router-dom";
import UpComingMovies from "../Components/Pages/UpComingMovies";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  const moviesAll = useLoaderData();

  return (
    <div>
      <header className="w-11/12 mx-auto">
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
      <main className="w-11/12 mx-auto">
        {/* Featured Movies Section */}
        <section>
          <FeaturedMovie />
        </section>
        <section >
          <h2 className=" text-3xl font-semibold mb-6  ">
            <Typewriter
              words={["Upcoming Movies (2025)"]}
              loop={Infinity}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </h2>
          <UpComingMovies></UpComingMovies>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
