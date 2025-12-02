import './Header.css';

const Header = ({ totalGames }) => {
  return (
    <header className="header">
      <h1 className="header-title">
        <span role="img" aria-label="joystick">🎮</span> GameHub
        <span className="gamertag"> | Il Tuo Archivio</span>
      </h1>
      <div className="game-counter">
        Totale Giochi: <span className="counter-number">{totalGames}</span>
      </div>
    </header>
  );
};

export default Header;