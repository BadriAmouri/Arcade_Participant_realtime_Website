

import React from 'react';
import Navbar from '../Components/Navbar';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import GameCard from '../Components/GameCard';
import AgendaCard from '../Components/AgendaCard';
import { useRef } from 'react';


const Games= () => {
    const agendaItems1 = [
        { number: '01', time: '09:30 AM - 10:30 AM', title: 'Treasure Hunt Announcement ( Opening ceremony )' },
        { number: '02', time: '10:30 AM - 17:30 AM', title: 'Treasure Hunting' },
        { number: '03', time: '10:30 AM - 11:30 AM', title: 'Chess' },
        { number: '04', time: '10:30 AM - 11:30 AM', title: 'Math Olympics' },
        { number: '05', time: '11:00 AM - 11:30 AM', title: 'Build a pyramid' },
        { number: '06', time: '11:30 AM - 12:00 AM', title: 'The maze' },
        { number: '07', time: '11:30 AM - 12:30 AM', title: 'Floor is Lava' },
        { number: '08', time: '11:30 AM - 12:30 AM', title: 'Gaming' },
      ];

      const agendaItems2 = [
        { number: '01', time: '09:30 AM - 10:30 AM', title: 'Treasure Hunt Announcement ( Opening ceremony )' },
        { number: '02', time: '10:30 AM - 17:30 AM', title: 'Treasure Hunting' },
        { number: '03', time: '10:30 AM - 11:30 AM', title: 'Chess' },
        { number: '04', time: '10:30 AM - 11:30 AM', title: 'Math Olympics' },
        { number: '05', time: '11:00 AM - 11:30 AM', title: 'Build a pyramid' },
        { number: '06', time: '11:30 AM - 12:00 AM', title: 'The maze' },
        { number: '07', time: '11:30 AM - 12:30 AM', title: 'Floor is Lava' },
        { number: '08', time: '11:30 AM - 12:30 AM', title: 'Gaming' },
      ];

      const swiperRef = useRef(null);
      // what needs to be added : location , bigDescription , points system , number of members required
      const games_Details = [
        {
          title: "Void Floor Protocol",
          description: "The floor isn’t lava — it’s an unstable plasma field from a dying star",
          time: "11:30 - 12:30 (Main courtyard)",
          Image : "/images/lava.png",
        },
        {
          title: "WarpZone Arcade Clash (FIFA)",
          description: "Across the galaxy, ancient civilizations left behind their own versions of entertainment — and now, it’s your turn to face them",
          time: "11:30 - 12:30 (Lab room)",
          Image : "/images/fifa.png",

        },
        {
          title: "Chess: Battle for the Cosmic Throne",
          description: "In a distant corner of the universe, where ancient civilizations wage wars of strategy and intellect, Galactic Chess stands as the ultimate test of mental mastery",
          time: "16:30 - 17:15 (Amphitheatre)",
          Image : "/images/chess.png",
        },
        {
          title: "Family Feud: Battle of Minds",
          description: "Across galaxies, civilizations settle their rivalries not with lasers or fleets — but through the legendary contest known as Team Feud.",
          time: "10:30 - 11:30 (Tuto room)",
          Image : "/images/teamFued.png",

        },
        {
          title: "The Nebula Maze",
          description: "Deep within the misty expanse of the Nebula Zone lies an ancient alien maze known to trap travelers for eternity.",
          time: "11:30 - 12:00 (Tuto room)",
          Image : "/images/maze.png",

        },
        {
          title: "Pyramid Protocol",
          description: "Before Earth’s pyramids marked the sands, star-faring civilizations left behind colossal monuments scattered across galaxies.",
          time: "11:00 - 11:30 (Tuto room)",
          Image : "/images/pyramid.png",

        },
        {
          title: "Beam It: The Meme Transmission",
          description: "Even the galaxy’s most serious warlords need a laugh.",
          time: "14:30 - 15:30 (Amphitheatre)",
          Image : "/images/memeIt.png",

        },
        {
          title: "/images/balance.png",
          description: "In the Zero-Gravity Balance Trials, your team must maintain perfect control across floating platforms, unstable alien structures, and unpredictable gravity fields.",
          time: "15:30 - 16:30 (Amphitheatre)",
          Image : "/images/lava.png",

        },
        {
          title: "Starship Escape Nexus (Escape Room)",
          description: "You awaken trapped aboard an abandoned alien vessel hurtling through hyperspace. ",
          time: "13:30 - 14:30 (Tuto room)",
          Image : "/images/escape_room.png",

        },
        {
          title: "Quantum Math Trials",
          description: "In the void of deep space, numbers aren’t just numbers — they’re ancient codes that hold the secrets of the galaxy. ",
          time: "10:30 - 11:30 (Tuto room)",
          Image : "/images/math.png",

        }
      ];
      
  return (
    <div>
        <Navbar/>
        <div className='mt-20 '>
        <h1 className="text-4xl md:text-5xl font-bold font-cyber text-center text-gray-800 mb-2">ARCADE GAMES </h1>
        <div className='mt-10 sm:pl-10  px-2 '>
        <Swiper
      spaceBetween={50}
      slidesPerView={1} // default
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {games_Details.map((game, index) => (
        <SwiperSlide>
  <GameCard
    key={index}
    title={game.title}
    description={game.description}
    time={game.time}
    image={game.Image}
  />
  </SwiperSlide>
))}
      
    </Swiper>
        </div>
        <div className='mt-20'>
        <h1 className="text-4xl md:text-5xl font-bold font-cyber text-center text-gray-800 ">AGENDA VIEW </h1>
        <div>
        <div className=" min-h-screen py-10 px-4 flex flex-col  items-center">
      <h1 className="text-4xl font-bold text-white mb-10">AGENDA</h1>

     <div className='sm:mt-20 overflow-hidden w-full'>
     

     <div className="w-full   flex justify-center items-center gap-4"> 
      {/* Custom Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="  -translate-y-1/2 z-10 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-600 "
      >
        ←
      </button>

      
      <div className=' max-w-2xl'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            {agendaItems1.map((item, index) => (
              <AgendaCard
                key={index}
                number={item.number}
                time={item.time}
                title={item.title}
              />
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-4">
            {agendaItems2.map((item, index) => (
              <AgendaCard
                key={index}
                number={item.number}
                time={item.time}
                title={item.title}
              />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      </div>


      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="-translate-y-1/2 z-10 bg-orange-500 text-white rounded-full w-10 h-10  items-center justify-center shadow hover:bg-orange-600 hidden sm:flex"
      >
        →
      </button>
    </div>

     </div>
      
    </div>
        </div>
        </div>
        </div>
        
    </div>
  );
};

export default Games;
