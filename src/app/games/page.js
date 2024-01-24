"use client"
import Layout from '../components/layout/layout';
import React from 'react';
import Link from 'next/link';
import DateRange from '../components/datarange/datarange';
import RangeSlider from '../components/rangeslider/rangeslider'
import Gamecard from '../components/gamecard/gamecard';
import Image from 'next/image';
import CCUSlider from '../components/ccuslider/ccuslider';
import './globals.css'
import { useState,useEffect } from 'react';

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedGenres, setCheckedGenres] = useState({});

  const genres = ['All Genres', 'Comedy', 'Sports', 'Town and City', 'RPG', 'Fighting', 'FPS', 'Adventure', 'Military', 'Horror', 'Building', 'Sci-Fi', 'Western', 'Naval']; 

  const handleSliderChange = (values) => {
    console.log('Slider values:', values);
  };
  const handleCheckboxChange = (genre) => {
    setCheckedGenres((prevGenres) => ({
      ...prevGenres,
      [genre]: !prevGenres[genre],
    }));
  };

  const [games, setGames] = useState({ data: [], page: 1, page_size: 20, total: 0 });
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-bloxbunny.cloudfunctions.net/bloxbunny/get-games-dashboard', {
          method: 'GET',
          // headers: {
          //   'Content-Type': 'application/json',
          // }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const responseData = await response.json();
        setGames(responseData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();

    
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log('checking data',games);
  //console.log('checking individual data', games[0]?.Title)\
 


const toggleMenu = () => {
  setIsOpen(!isOpen);
  console.log('checking state', isOpen)
};
 
  return (
    <Layout>
       <div className="filter-toggle" onClick={toggleMenu}>
    <Image src="/filter.png" alt="filter" width={20} height={20} />
    </div>
      <section className='heading'>
      <div className='textcontent'>
        <h1>Games</h1>
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
      
<div className='gamesview'>
      <div className='screen'>
<div className='display'>
      <section className='filters'>
        <div className='filterheading'>
        <h1>Filters</h1>
        <Image src="/filter.png" alt="filter" width={20} height={20} />
        </div>
        <div className='daterange'>
          <h1>Date Range Picker</h1>
        <DateRange/>
        </div>
        <div>
        <div className="genreFilter">
      <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>Genre</h3>
        <Image src="/downarrow.png" alt="toggle" width={10} height={10} />
      </div>

      {isExpanded && (
        <div className="genreList">
          {genres.map((genre, index) => (
            <label key={index} className="genre">
              <input
                type="checkbox"
                checked={!!checkedGenres[genre]}
                onChange={() => handleCheckboxChange(genre)}
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>
      )}
    </div>
        </div>

        <div className='revenue'>
          <h1>Revenue</h1>
        <RangeSlider
         MIN={50}
         MAX={500}
         STEP={1}
      />
        </div>

        <div className='ccu'>
          <h1>CCUs</h1>
        <CCUSlider
         MIN={50}
         MAX={500}
         STEP={1}
      />
        </div>
        
      </section>
      </div>
      </div> 
      <div>
      <section className='carddisplay'>
      {games.data.map((game, index) => (
  <Link legacyBehavior href={`/gamedetails?id=${game.Id}`} key={game.Id}>
            <a className="gamecard-link"> {/* This makes the entire Gamecard clickable and navigable */}
            <Gamecard 
            logoUrl={game.url}
            title={game.Title}
            dislikes={game.DisLikes}
            rating={game.Likes}
            rank={game.Rank}
            genre={game.Genre}
            ccu={game.CCU}
            revenue={`${game.MaxRevenue}`-`${game.MinRevenue}`}
            favorites={game.Favorites}
            // Pass the ID to the Gamecard for use in onClick handler if needed
            id={game.Id}
            />
            </a>

  </Link>
))}
</section>
</div>
</div>
{isOpen && <div className="overlay" onClick={toggleMenu}></div>}
<div className={`displayside ${isOpen ? 'open' : ''}`}>
<button className="close-button" onClick={toggleMenu}>&times;</button>
  <section className='filters'>
    <div className='filterdispheading'>
      <h1>Filters</h1>
    </div>
        <div className='daterangedisp'>
          <h1>Date Range Picker</h1>
        <DateRange/>
        </div>
        <div>
        <div className="genreFilterdisp">
      <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>Genre</h3>
        <Image src="/downarrow.png" alt="toggle" width={10} height={10} />
      </div>

      {isExpanded && (
        <div className="genreList">
          {genres.map((genre, index) => (
            <label key={index} className="genre">
              <input
                type="checkbox"
                checked={!!checkedGenres[genre]}
                onChange={() => handleCheckboxChange(genre)}
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>
      )}
    </div>
        </div>

        <div className='revenuedisp'>
          <h1>Revenue</h1>
        <RangeSlider
         MIN={50}
         MAX={500}
         STEP={1}
      />
        </div>

        <div className='ccudisp'>
          <h1>CCUs</h1>
        <CCUSlider
         MIN={50}
         MAX={500}
         STEP={1}
      />
        </div>
        </section>
        </div>
      </Layout>  
      
  );
}