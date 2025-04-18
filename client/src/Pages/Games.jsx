

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
        { number: '09', time: '12:30 AM - 13:30 AM', title: 'Lunch Break' },
        { number: '10', time: '13:30 AM - 14:30 AM', title: 'Escape room' },
        { number: '11', time: '14:30 AM - 15:30 AM', title: 'Meme it' },
        { number: '12', time: '15:30 AM - 16:30 AM', title: 'Balance game' },
        { number: '13', time: '16:30 AM - 17:15 AM', title: 'Team Feud game' },
        { number: '14', time: '17:15 AM - 17:30 AM', title: 'Coffee break' },
        { number: '15', time: '17:30 AM - 18:30 AM', title: 'Treasure Announcement (Closing ceremony)' }
      ];
      

      const swiperRef = useRef(null);
      // what needs to be added : location , bigDescription , points system , number of members required
      const games_Details = [
        {
          title: "The Floor is Lava",
          description: "The floor isn’t lava — it’s an unstable plasma field from a dying star",
          GameDescription : "Colored papers are scattered on the floor, and the host shouts a color at random. Players have 5 seconds to step on a paper of that color or they’re out. Each round, papers are removed to make it more challenging!",
          time: "11:30 - 12:30 (Main courtyard)",
          Image : "/images/lava.png",
          TeamNumber : "1 member",
        },
        {
          title: "Gaming (FIFA)",
          description: "Across the galaxy, ancient civilizations left behind their own versions of entertainment — and now, it’s your turn to face them",
          time: "11:30 - 12:30 (Lab room)",
          GameDescription : "FIFA is a football simulation video game series developed by EA Sports, offering a realistic and immersive experience of the sport. It allows players to control real-life teams and players from leagues around the world, participating in matches, tournaments, and full seasons. The game features various modes, including Career Mode, where players manage a team or a single player's career, and Ultimate Team, where players build their own dream squad by collecting player cards. Known for its high-quality graphics, licensed teams, and dynamic gameplay, FIFA captures the excitement and intensity of real-world football, making it one of the most popular sports video games globally.",
          Image : "/images/fifa.png",
          TeamNumber : "1 member",


        },
        {
          title: "Chess: Battle for the Cosmic Throne",
          description: "In a distant corner of the universe, where ancient civilizations wage wars of strategy and intellect, Galactic Chess stands as the ultimate test of mental mastery",
          time: "16:30 - 17:15 (Amphitheatre)",
          GameDescription : "Our chess tournament is going to be a 4-round Swiss tournament with 10+2 time control (10 minutes plus 2 seconds per move). You'll play exactly 4 games. All participants play all rounds regardless of results, with final rankings determined by total points.",
          Image : "/images/chess.png",
          TeamNumber : "1 member",

        },
        
        {
          title: "Family Feud: Battle of Minds",
          description: "Across galaxies, civilizations settle their rivalries not with lasers or fleets — but through the legendary contest known as Team Feud.",
          time: "10:30 - 11:30 (Tuto room)",
          GameDescription : "Family Feud is a popular game based on the classic television quiz show, where two teams compete to guess the most common answers to survey questions. Each question is based on a survey of 100 people, and players must think like the general public to score points. The goal is to come up with the top answers while avoiding strikes for incorrect guesses. The team that earns the most points moves on to the final round, where they have a chance to win the game by answering a series of quick-fire questions. Family Feud is known for its fast-paced, fun, and often hilarious gameplay, making it a favorite for group gatherings and family game nights.",
          Image : "/images/teamFued.png",
          TeamNumber : "3 or 4 members",


        },
        {
          title: "The Nebula Maze",
          description: "Deep within the misty expanse of the Nebula Zone lies an ancient alien maze known to trap travelers for eternity.",
          time: "11:30 - 12:00 (Tuto room)",
          GameDescription : "Each player representing it’s team will have to solve the maze if he can do it in less than a precise amount of time the team will get 100 then the more they take time to solve it the less they get points",
          Image : "/images/maze.png",
          TeamNumber : " 2 members",


        },
        {
          title: "Face Blocks",
          description: "Before Earth’s pyramids marked the sands, star-faring civilizations left behind colossal monuments scattered across galaxies.",
          time: "11:00 - 11:30 (Tuto room)",
          GameDescription : "",
          Image : "/images/pyramid.png",
          TeamNumber : "1 member",


        },
        {
          title: "Meme it ",
          description: "Even the galaxy’s most serious warlords need a laugh.",
          time: "14:30 - 15:30 (Amphitheatre)",
          GameDescription : "Meme It is a humorous and creative party game where players compete to come up with the funniest or most fitting caption for a given image. Each round, a random or absurd picture is presented, and players must think quickly to write a caption that matches the image in a clever or hilarious way. Once all captions are submitted anonymously, everyone votes on their favorite. The game continues with new images and captions, and the player who consistently delivers the most entertaining captions emerges as the winner. Meme It is a lighthearted, social game perfect for casual gatherings, where laughter and imagination take center stage.",
          Image : "/images/memeIt.png",
          TeamNumber : "3 members",


        },
        {
          title: "Balance Game",
          description: "In the Zero-Gravity Balance Trials, your team must maintain perfect control across floating platforms, unstable alien structures, and unpredictable gravity fields.",
          time: "15:30 - 16:30 (Amphitheatre)",
          GameDescription : " player representing his team. We will announce a target weight, and each team has to find an object inside the amphitheater that’s as close as possible to that weight. Points are given based on how fast you bring the object and how close its weight is to the target.",
          Image : "/images/balance.png",
          TeamNumber : "1 or 2  members",


        },
        {
          title: "Escape Room",
          description: "You awaken trapped aboard an abandoned alien vessel hurtling through hyperspace. ",
          time: "13:30 - 14:30 (Tuto room)",
          GameDescription : "aliens have the ability to disguise themselves as humans. 2 platers witness one of them committing a crime, but they can’t tell their teammate about them directly, or they'll be killed. they must use their own unique features to describe the alien and deliver hints to their teammate so they can identify and arrest the alien.",
          Image : "/images/escape_room.png",
          TeamNumber : "3 members ",


        },
        {
          title: " Math ",
          description: "In the void of deep space, numbers aren’t just numbers — they’re ancient codes that hold the secrets of the galaxy. ",
          time: "10:30 - 11:30 (Tuto room)",
          GameDescription : "You will have 1 hour to solve three exercises covering sequences of primes, sets and functions, and combinatorics. Participant should solve and prove his answers clearly. The challenges will test creativity, logical reasoning, and problem-solving skills",
          Image : "/images/math.png",
          TeamNumber : "1 member",


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
    GameDescription={game.GameDescription}
    TeamNumber={game.TeamNumber}
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
