import GameCard from '../GameCard/GameCard';
import './GameList.css';

const GameList = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;