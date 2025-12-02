import { useState } from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const { title, genre, rating, status, coverUrl, platform, year, price, hoursPlayed, difficulty } = game;

  //colore voto
  const getRatingColor = (score) => {
    if (score >= 8) return 'rating-high'; 
    if (score >= 6) return 'rating-medium'; 
    return 'rating-low'; 
  };

  //colore stato
  const getStatusClass = (status) => {
    switch (status) {
      case 'completato': return 'badge-completed';
      case 'in-corso': return 'badge-in-progress';
      case 'wishlist': return 'badge-wishlist';
      case 'abbandonato': return 'badge-abandoned';
      default: return '';
    }
  };

  return (
    //handler per il click
    <div className="game-card" onClick={handleCardClick}>
      <img src={coverUrl} alt={`Cover di ${title}`} className="card-cover" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-genre">Genere: {genre}</p>
        
        {/* dettagli base */}
        <div className={`card-rating ${getRatingColor(rating)}`}>
          Voto: {rating}
        </div>
        <div className={`card-status-badge ${getStatusClass(status)}`}>
          {status.toUpperCase()}
        </div>

        {/* dettagli extra */}
        {isExpanded && (
          <div className="card-details-extra">
            <p><strong>Piattaforma:</strong> {platform}</p>
            <p><strong>Uscita:</strong> {year}</p>
            <p><strong>Prezzo:</strong> €{price.toFixed(2)}</p>
            {/* ore giocate */}
            {status !== 'wishlist' && <p><strong>Ore Giocate:</strong> {hoursPlayed}h</p>}
            <p><strong>Difficoltà:</strong> {difficulty}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;