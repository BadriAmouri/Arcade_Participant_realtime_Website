import React from "react";
import Navbar from "../Components/Navbar";

const GameDetails = () => {
  return (
    <div>
        <Navbar/>
    <div className="flex flex-col lg:flex-row items-center   min-h-screen p-6 lg:p-12 gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src='/images/Intersect.png'
          alt="Treasure Hunt Map"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold italic font-cyber tracking-wider text-black">
          description :
        </h2>
        <p className="text-gray-400 text-sm md:text-base">• Ground + 1st floors – labs</p>
        <p className="text-orange-400 font-mono text-sm md:text-base">10:30 – 17:30</p>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          A strange signal has been detected. Ancient relics, encrypted messages, and otherworldly
          puzzles await those brave enough to answer the call. Arcade’s Alien Treasure Hunt isn’t
          your average quest – it’s a race against time to uncover a hidden artifact left behind by
          an unknown extraterrestrial civilization.
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Teams must decipher alien transmissions, decode cryptic symbols, and navigate a series of
          mind-bending tasks scattered across secret locations. This year’s hunt merges the thrill
          of adventure with electronics-based challenges – assembling circuits, activating devices,
          and unlocking alien tech powered by Arduino and human ingenuity.
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Only the sharpest minds and boldest explorers will piece together the final coordinates
          and claim the artifact before it vanishes into the void once more. <br />
          <span className="font-semibold">Are you ready to answer the signal?</span>
        </p>
        <p className="text-gray-400 text-sm md:text-base">• All team members</p>
      </div>
    </div>
    </div>
  );
};

export default GameDetails;
