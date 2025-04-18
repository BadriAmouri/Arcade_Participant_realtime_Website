import React from 'react';
import Navbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';
const TeamAccount = () => {
  const location = useLocation();
  const teamNameFromState = location.state?.teamName;
  const teamName = teamNameFromState || localStorage.getItem('teamName');


  // Dynamic  mapping  "TeamName" : "TeamMembers" 
  const TeamMembers = {
    'Extraterrestres': ['Selma Mani','Medjri Yasmina ','Maifi abdenour ','Hattabi Hadil ','HOCINE Nihal','Bazouzi Maha','Farida Boubekeur','Aimene Boughenama '],
    'The spark': ['Zakaria saadouni','Ahsatal Imad Eddine','Chouali widjdane rokia','Bouazzouni Mohamed Amine ','Imane aissat','Bennacer Achraf baha eddine ','Rayen Mazrou','Kadi sami youcef'],
    'Error 404': ['Yasmine Kihal','Hacene serine nour el imane','Chiraz Kaddour','Benzine Amina','Takoua Hidoussi','Yasmine Dendani','Lydia Khalem','dhoha djeribia'],
    'SOPAPA': ['Amrouche Amine ','MESSACI Riwan Yacine','Hagani Abdessalam','KOUACHE aris ','Amdjed Takieddine Guellati','danil ouakli','Ghemabaza moncif ','Mohamed kecir'],
    'Team Cheese': ['Nour Tliba','BELHIMER Mohamed Ayoub','Kessoum abdellah elkhalil','Kharroubi Nasrellah ','Ines BENCHERIF','Sondes GASMI','Ferhat El Mouataz Bellah','Rabah Arslene Djellouli'],
    'Area_51': ['Oussama HAMDELLOU ','Amel FEDDAG','Salma Ouelaa','Anis Medjdoul ','Ahmed Ziti','Afnane KARAOUI','Yasmine Naima Senour ','Lamri Mohamed yassune'],
    'واه نيشان': ['sehil siham','Ahlem Toubrinet','ghofrane guenifi','Sanaa TOUTAH ','hanaa chahbar ','Ameziane Sarah ','Sad chemloul alaa','Ferrat Manel '],
    'Aliens': ['OUADFEL meriem ','Zyad Kherraf ','Yahiaoui Lina ','Badis Belkessam ','Ramy Mohamed Guettal','Amina Gadiri ','Maachou Mohammad Imad Eddine ','Elaidi maria'],
    'Ganadores': ['CHIRAZ BENAKMOUM','LYNA BOUDISSA','Cylia Makhlouf ','Benrabah Akram','Sekkat Mohamed Amin ','Sahraoui souhaib aimen','Ranahi mohamed islam ','Abdennacir Boufedjighen '],
    'نادي مطوري غوغل': ['Zineb berrekia','Amrouche Faycal','Mohanned Kadache','Chouit minet ellah','IMED EDDINE BEGHOU','Mouhoun cilia ','Bendi Mohamed abderraouf','Bouziane Haithem'],
    'Dingy Wingy': ['Faidkeddouri ','Maab Chaoui','Ishak Abassi','Houhou Sohaib ','bachir zoheir','Kada yakoub ','Abdelmeraim houcine ','Saadi Soufiane'],
    'GameOn': ['Rania litim','BENSIMESSAOUD Souha','TLIBA Alia','Amina nacef','Chaouchi Mohamed Amine ','Mezrouh iname ','BAATCHIA Abderrahmane','MAZA Islam'],
  };
  return (
    <div >
        <Navbar/>
        <div className="h-[90vh] flex  justify-center bg-home-bg bg-cover bg-center mt-[8rem] sm:mt-0  ">
            < div className='w-full  flex justify-center items-center gap-20 flex-col-reverse sm:flex-row  px-2'>
              <div className=' w-full flex-col p-2 gap-5'>
                <div className=' flex w-full justify-around items-center '>
                 <img  src='/images/CurrentRank.png' className='w-[40%] sm:w-auto' />
                <img  src='/images/number2.png' className='w-[30%] sm:w-auto' />
                </div>
                <div className=' flex w-full gap-4 mt-10  items-center justify-around flex-col sm:flex-row  '>
                  <img src='/images/Members.png' className='h-[60px] w-[40%] sm:w-auto ' />
                  <div className=' flex flex-col h-full  font-Ocr text-[20px] tracking-wider'>
                    {/* Map the team members here  */}
                    {TeamMembers[teamName]?.map((member, index) => (
  <p key={index}> . {member} </p>
))}


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
