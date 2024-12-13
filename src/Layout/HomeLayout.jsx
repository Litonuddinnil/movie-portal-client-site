import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import FeaturedMovie from '../Components/FeaturedMovie';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
                {/* banner section */}
              <section className='w-full'>
              <Banner></Banner>
              </section>
            </header>
            <main>
                {/* Featured Movies */}
              <section>
                <h1 className=' ml-2 text-4xl font-bold  text-gray-800 '>Featured Movies</h1>
                
                <FeaturedMovie></FeaturedMovie>
                </section>  
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;