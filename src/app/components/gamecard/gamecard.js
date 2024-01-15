// Import the Next.js Image component
import Image from 'next/image';
import './globals.css'; 

const GameCard = ({rating,rank,ccu,revenue,favorites}) => {
    const roundedRating = Math.floor(rating);
    const roundedCCU = Math.floor(ccu);
    const roundedRevenue = Math.floor(revenue);
    const roundedFavorites = Math.floor(favorites);
    return (
    <div className="card">
        <div className='headingsect'>
      <div className="cardlogo">
        <Image src="/viewcard.png" alt="Game Logo" width={50} height={50} />
      </div>
      <div className='textcontent'>
        <h2 className="title">BlockBox Black Covering Samurai</h2>
        <p className="subTitle">GARENA INTERNATIONAL II PRIVATE</p>
        </div>
        </div>
        <div className="content">
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="ratingCount">{roundedRating}</span>
        </div>
        <div className="info">
          <div>
            <strong>Rank</strong>
            <span>{rank}</span>
          </div>
          <div> 
            <div className='gapset1'>
            <strong>Genres</strong>
            <span>entertainment</span>
            </div>
          </div>
          <div className='gapset4'>
            <strong>CCUs</strong>
            <span>{roundedCCU}</span>
          </div>
        </div>
        <div className="info">
          <div>
            <strong>Revenue</strong>
            <span>{roundedRevenue}</span>
          </div>
          <div className='gapset3'>
            <strong>Favorites</strong>
            <span>{roundedFavorites}</span>
          </div>
          <div className='gapset2'>
            <strong>Dislikes</strong>
            <span>{roundedFavorites}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
