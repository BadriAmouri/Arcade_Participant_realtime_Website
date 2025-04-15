// components/EventCard.jsx
import React from 'react';

const AgendaCard = ({ number, time, title }) => {
  return (
    <div className="flex items-center  max-w-4xl border-b border-gray-700 py-3 text-[#999999] font-Ocr w-[400px] sm:w-full ">
      {/* Number box */}
      <div className="bg-orange-500 w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-1 sm:mr-4">
        {number}
      </div>

      {/* Divider */}
      <div className="h-6 border-l border-gray-600 mx-1 sm:mx-4" />

      {/* Time */}
      <div className="text-sm md:text-base mr-6 whitespace-nowrap">
        {time}
      </div>

      {/* Divider */}
      <div className="h-6 border-l border-gray-600 mx-1 sm:mx-4" />

      {/* Title */}
      <div className="text-sm md:text-base truncate text-wrap">
        {title}
      </div>
    </div>
  );
};

export default AgendaCard;
