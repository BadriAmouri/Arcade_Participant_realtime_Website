import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from 'react-router-dom';

const GameDetails = () => {
  const { state: { title, time, description } } = useLocation();


  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl md:text-7xl font-bold font-cyber text-center text-gray-800 mt-20">{title} </h1>
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
        <p className="text-gray-400 text-sm md:text-base font-Ocr">• Ground + 1st floors – labs</p>
        <p className="text-orange-400  text-sm md:text-base font-Ocr">{time}</p>

        <p className="text-[#707070] text-sm md:text-base leading-relaxed font-Ocr ">
         {description}
        </p>
        <p className=" font-Ocr text-sm md:text-base leading-relaxed text-[#707070]">
          Teams must decipher alien transmissions, decode cryptic symbols, and navigate a series of
          mind-bending tasks scattered across secret locations. This year’s hunt merges the thrill
          of adventure with electronics-based challenges – assembling circuits, activating devices,
          and unlocking alien tech powered by Arduino and human ingenuity.
        </p>
        <p className="font-Ocr text-sm md:text-base leading-relaxed text-[#707070]">
          Only the sharpest minds and boldest explorers will piece together the final coordinates
          and claim the artifact before it vanishes into the void once more. <br />
          <span className="font-semibold">Are you ready to answer the signal?</span>
        </p>
        <p className="text-black text-sm md:text-base font-Ocr">• All team members</p>
      </div>
    </div>
     {/* ADD THE TEAMS DETAILS  */}
    </div>
  );
};

export default GameDetails;
