import React from 'react';
import Navbar from '../Navbar';
import { Typewriter } from 'react-simple-typewriter';

const GiftCards = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div>
             <h2 className=" text-3xl font-semibold mb-6 text-center">
                    <Typewriter words={['Gift Cards']}
                        loop={1} 
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}></Typewriter>
                  </h2>
           </div>
        </div>
    );
};

export default GiftCards;