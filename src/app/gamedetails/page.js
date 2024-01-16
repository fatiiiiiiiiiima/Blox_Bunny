"use client"
import React, { useEffect,useState } from 'react';
import './globals.css'
import Gamecard from '../components/gamecard/gamecard';
import Image from 'next/image';
import Analytics from '../components/analytics/analytics'
import RankTable from '../components/ranktable/ranktable'
import DateRange from '../components/datarange/datarange';
import CustomSelect from '../components/dropdown/dropdown'
import Layout from '../components/layout/layout';
export default function gamedetail(){

    const handleSelectChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
      };

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
      <RankTable/>
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