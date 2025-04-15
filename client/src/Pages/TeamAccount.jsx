import React from 'react';
import Navbar from '../Components/Navbar';
const TeamAccount = () => {
  return (
    <div >
        <Navbar/>
        <div className="h-[90vh] flex  justify-center bg-home-bg bg-cover bg-center mt-20 sm:mt-0  ">
            < div className='w-full  flex justify-center items-center gap-20 flex-col-reverse sm:flex-row  px-2'>
              <div className=' w-full flex-col p-2 gap-5'>
                <div className=' flex w-full justify-around items-center '>
                 <img  src='/images/CurrentRank.png' className='w-[40%] sm:w-auto' />
                <img  src='/images/number2.png' className='w-[30%] sm:w-auto' />
                </div>
                <div className=' flex w-full gap-4 mt-10  items-center justify-around flex-col sm:flex-row  '>
                  <img src='/images/Members.png' className='h-[60px] w-[40%] sm:w-auto ' />
                  <div className=' flex flex-col h-full  font-Ocr text-[20px] tracking-wider'>
                    <p > . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>
                    <p> . Player 1 </p>

                  </div>
                </div>
                </div>
                <div className='w-full flex justify-center sm:justify-normal items-center'>
                  <img src='/images/Group 13.png'  className='w-[70%] sm:w-[60%]'/>
                </div>
            </div>
            


        </div>
    </div>
  );
};

export default TeamAccount;
