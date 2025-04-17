import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameCard = ({title, description , time,image}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/gameDetails', { 
      state: {
        title: title,
        time: time,
        description: description,
        image: image,

      }
     }); // sending the whole object
  };
  return (
    <div className="relative w-[400px] h-[480px] rounded-lg overflow-hidden shadow-lg text-white font-Ocr">
      {/* Background Image */}
      <img
        src={image} // Replace with actual path
        alt="Game Background"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end gap-4">
        {/* Title */}
        <h2 className="text-xl font-bold italic tracking-wide">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed">
          {description}
        </p>

        {/* Bottom Row: Time & Button */}
        <div className="flex justify-between items-center">
          <p className="text-sm">{time}</p>
          <button  onClick={() => handleClick()}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
