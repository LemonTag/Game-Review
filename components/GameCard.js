import React from 'react';

const GameCard = ({ game }) => (
  <div className="game-card">
    <img src={game.image} alt={game.title} />
    <h2>{game.title}</h2>
    <p>{game.description}</p>
    <a href={`/games/${game.id}`}>Read More</a>
  </div>
);

export default GameCard;
