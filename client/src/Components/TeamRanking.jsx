import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleRank from './SingleRank';
import Navbar from "../Components/Navbar";

const teamList = ["Extraterrestres", "The spark", "Error 404", "SOPAPA", "Team Cheese", "Area_51", "واه نيشان", "Aliens", "Ganadores", "نادي مطوري غوغل", "Dingy Wingy", "GameOn"];

const TeamRanking = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const results = await Promise.all(
          teamList.map(async (team) => {
            const res = await axios.get(`https://arcade-backend-ckdw.vercel.app/api/scores/total/${team}`);
            return {
              name: team,
              points: res.data.totalPoints || 0
            };
          })
        );

        const sorted = results
          .sort((a, b) => b.points - a.points)
          .map((team, index) => ({
            ...team,
            rank: index + 1,
            change: '+0', // Optional: add logic for change if needed
            color: index === 0
              ? 'text-yellow-400 border-yellow-400'
              : index === 1
              ? 'text-gray-300'
              : index === 2
              ? 'text-orange-400 border-orange-400'
              : '',
          }));

        setTeams(sorted);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team points:', error);
      }
    };

    fetchPoints();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid"></div>
          <p className="mt-4 text-yellow-400 font-semibold text-lg">Loading...</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-center font-Ocr italic tracking-wide mt-4">
            Note that the Ranking is Done from adding the points without considering the coefficients
          </h2>
          <div className="w-full max-w-2xl mx-auto mt-10">
            {teams.map((team, index) => (
              <SingleRank
                key={index}
                rank={team.rank}
                name={team.name}
                points={team.points}
                change={team.change}
                isTop={index === 0 || index === 2}
                colorClass={team.color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
};

export default TeamRanking;