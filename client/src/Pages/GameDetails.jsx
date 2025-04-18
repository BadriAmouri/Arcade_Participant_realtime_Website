import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from 'react-router-dom';

const GameDetails = () => { 
  const { state: { title, time, description ,image ,GameDescription , TeamNumber} } = useLocation();


  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl md:text-7xl font-bold font-cyber text-center text-gray-800 mt-20">{title} </h1>
    <div className="flex flex-col lg:flex-row items-center   min-h-screen p-6 lg:p-12 gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={image}
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
         {GameDescription}
        </p>
       
        
        <p className="text-black text-sm md:text-base font-Ocr">Required :  {TeamNumber}</p>
      </div>
    </div>
     {/* ADD THE TEAMS DETAILS  */}
    </div>
  );
};

export default GameDetails;
