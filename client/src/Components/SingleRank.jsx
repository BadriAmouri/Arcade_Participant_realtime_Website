import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SingleRank = ({ rank, name, points, change, isTop, colorClass }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border mt-2 font-Ocr ${
        isTop ? `${colorClass} border-t border-b` : 'border-gray-700 border-t'
      }`}
    >
      {/* Rank + Team */}
      <div className="flex items-center gap-3">
        <span
          className={`text-lg font-bold w-8 text-right ${
            isTop ? colorClass : 'text-black'
          }`}
        >
          {rank < 10 ? `0${rank}` : rank}
        </span>
        <div className="w-6 h-6 rounded-full bg-gray-400" />
        <span className="text-gray-400 font-medium">{name}</span>
      </div>

      {/* Points */}
      <div className="text-gray-500 font-mono text-sm">{points}</div>

      {/* Change */}
      <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
        {change} <ArrowUpRight size={16} />
      </div>
    </div>
  );
};

export default SingleRank;