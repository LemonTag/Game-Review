import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/api/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="home-page">
      <h1>Game Reviews</h1>
      <div className="game-list">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
