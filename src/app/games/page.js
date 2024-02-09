"use client"
import Layout from '../components/layout/layout';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import DateRange from '../components/datarange/datarange';
import RangeSlider from '../components/rangeslider/rangeslider'
import Gamecard from '../components/gamecard/gamecard';
import Image from 'next/image';
import CCUSlider from '../components/ccuslider/ccuslider';
import './globals.css'
import Lottie from 'react-lottie';
import animationData from '../../../public/animation/loadinganimation.json'
import { useState,useEffect } from 'react';
const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [checkedGenres, setCheckedGenres] = useState({ 'All Genres': true });
  const [games, setGames] = useState({ data: [],total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const genres = ['All Genres', 'Comedy', 'Sports', 'Town and City', 'RPG', 'Fighting', 'FPS', 'Adventure', 'Military', 'Horror', 'Building', 'Sci-Fi', 'Western', 'Naval']; 

  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  // Function to update the date range
  const handleDateChange = (newStartDate, newEndDate) => {
    setDateRange({ startDate: newStartDate, endDate: newEndDate });
  };

  useEffect(() => {
    debouncedFetchData(); 
  }, [dateRange, checkedGenres, currentPage]);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

// Function to filter games by date range
const filterByDate = (game) => {
  if (!dateRange.startDate || !dateRange.endDate) {
    return true; // If no date range is selected, return all games
  }

  const gameDate = new Date(game.Created);
  return gameDate >= new Date(dateRange.startDate) && gameDate <= new Date(dateRange.endDate);
};

// Apply both filters to the games data
// const filteredGames = games.data.filter(game => filterByGenre(game) && filterByDate(game));

const handleCheckboxChange = (genre) => {
  if (genre === 'All Genres') {
    // If 'All Genres' is clicked, either check it and uncheck all others, or uncheck it
    const newGenres = { 'All Genres': !checkedGenres['All Genres'] };
    if (newGenres['All Genres']) {
      genres.forEach(g => { if (g !== 'All Genres') newGenres[g] = false; });
    }
    setCheckedGenres(newGenres);
  } else {
    // If any other genre is clicked, uncheck 'All Genres' and toggle the clicked genre
    setCheckedGenres(prevGenres => ({
      ...prevGenres,
      'All Genres': false,
      [genre]: !prevGenres[genre],
    }));
  }
};

const fetchData = async () => {
  try {
    const queryParams = new URLSearchParams();
    // Add date filters if they are set
    if (dateRange.startDate) queryParams.append('start_date', dateRange.startDate);
    if (dateRange.endDate) queryParams.append('end_date', dateRange.endDate);

    const requestBody = {
      page: currentPage,
      page_size: pageSize,
      // Add other parameters here (genres, etc.)
    };

    const response = await fetch(`https://us-central1-bloxbunny.cloudfunctions.net/bloxbunny/get-games-dashboard?${queryParams}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setGames(data);
  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
};


  
const debouncedFetchData = debounce(fetchData, 500);




if (loading) return <div className="loading-container">
<Lottie options={defaultOptions} height={400} width={400} />
</div>
  if (error) return <p>Error: {error}</p>;

  console.log('checking data',games);
  //console.log('checking individual data', games[0]?.Title)\
 


const toggleMenu = () => {
  setIsOpen(!isOpen);
  console.log('checking state', isOpen)
};

const handleNext = async () => {
  setLoading(true); // Set loading to true before fetching new data
  setCurrentPage((prevPage) => prevPage + 1);
  console.log(currentPage);
  await fetchData(); // Fetch new data
  setLoading(false); // Set loading back to false after fetching new data
};

const handlePrevious = async () => {
  setLoading(true); // Set loading to true before fetching new data
  setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  await fetchData(); // Fetch new data
  setLoading(false); // Set loading back to false after fetching new data
};



  return (
    <Layout>
       <div className="filter-toggle" onClick={toggleMenu}>
    <Image src="/filter.png" alt="filter" width={20} height={20} />
    </div>
      <section className='heading'>
      <div className='textcontents'>
        <h1>Games</h1>
        <p>List of all the games</p>
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
        <DateRange onDateChange={handleDateChange}/>
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
        
      </section>
      </div>
      </div> 
      <div>
      <section className='carddisplay'>
      {games.data.map((game, index) => (
  <Link legacyBehavior href={`/gamedetails?id=${game.Id}`} key={game.Id}>
            <a className="gamecard-link"> {/* This makes the entire Gamecard clickable and navigable */}
            <LazyLoad height={200} offset={100} once>
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
          </LazyLoad>
            </a>

  </Link>
))}
</section>
{/* disabled={currentPage <= 1} */}
{/* disabled={currentPage * pageSize >= games.total} */}
<div className="pagination">
        <button onClick={handlePrevious} >Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNext} >Next</button>
      </div> 
    

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

       
        </section>
        </div>
      </Layout>  
      
  );
}