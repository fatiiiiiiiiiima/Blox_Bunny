"use client"
import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'
import Gamecard from '../components/gamecard/gamecard';
import Image from 'next/image';
import Analytics from '../components/analytics/analytics'
import RankTable from '../components/ranktable/ranktable'
import DateRange from '../components/datarange/datarange';
import CustomSelect from '../components/dropdown/dropdown'
import Layout from '../components/layout/layout';

export default function gamedetail(){
  const router = useRouter();
  const [gamesid, setgamesid] = useState([]);

useEffect(() => {
  async function fetchData(gameId) {
      try {
          const url = `https://us-central1-bloxbunny.cloudfunctions.net/bloxbunny/get-game-data?game_id=${encodeURIComponent(gameId)}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error('Data could not be fetched');
          const data = await response.json();
          setGameData(data);
      } catch (error) {
          console.error("Fetching error: ", error.message);
      }
  }

  if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const gameId = params.get('id');
      if (gameId) {
          setgamesid(gameId);
          console.log("Fetching data for gameId:", gameId);
          fetchData(gameId);
      } else {
          console.error("No gameId found in URL");
      }
  }
}, []);

    const [gameData, setGameData] = useState([]);
    console.log('checking id',gamesid)
    
  
    const handleSelectChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
      };
    // console.log('checking game id',gameId)

      const [activeFilter, setActiveFilter] = useState('Visits');

  const handleFilterClick = (filterName) => {
    setActiveFilter
(filterName);
};
    
    
    return(
        <Layout>
              <section className='heading'>
      <div className='textcontent'>
        <div className='headingdisplay'>
        <h1>Game Details</h1>
        <p> Game &gt; <span>Game Details</span> </p>
        </div>
        <p>List of all the games</p>
        </div>
        <div className='headicons'>
      <Image src="/search.png" alt="Search" width={20} height={20} />
      <Image src="/bell.png" alt="Bell" width={20} height={20} />
      <Image src="/profile.png" alt="profile" width={20} height={20} />
      <h2>Marci Fumons</h2>
      <Image src="/downarrow.png" alt="profile" width={10} height={8} />
      </div>
      </section>

      <section>
      <Gamecard
   //   key={index}
    //  logoUrl={game.url}
    //  title={game.Title}
    //  company={game.Genre}
      rating='4456'
      rank='5'
    //  genre={game.Genre}
      ccu='556845'
      revenue='55558474'
      favorites='4582'
      // Add other props as needed
    />
      </section>

      <section className='graphs'>
        <div className='headingsect'>
      <h1>   Game Rank</h1>
      <div className='filter'>
      <CustomSelect onChange={handleSelectChange} />
      
      </div>
      </div>
      <div className='graph'> 
      <RankTable  gamedata = {gameData}/>
      </div>
      </section>

      <section className='graphs'>
        <div className='headingsect'>
      <h1>   Game Analytics</h1>
      <div className="filter-container">
      {['Visits', 'Users', 'Revenue', 'Favorites'].map((filterName) => (
     <button
     key={filterName}
    className={`filter-option ${activeFilter ===

  filterName ? 'selected' : ''}`}
  onClick={() => handleFilterClick(filterName)}
        >
     {filterName}
     </button>
     ))}
        </div>

      <div className='filter'>
      <DateRange onChange={handleSelectChange} />
      </div>
      </div>
      <div className='graph'> 
      <Analytics/>
      </div>
      </section>
        </Layout>
    )
}