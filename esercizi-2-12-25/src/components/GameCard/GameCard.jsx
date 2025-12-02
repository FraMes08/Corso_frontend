import './GameCard.css';

const GameCard = ({ game }) => {
  const { title, genre, rating, status, coverUrl } = game;

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
    <div className="game-card">
      <img src={coverUrl} alt={`Cover di ${title}`} className="card-cover" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-genre">Genere: {genre}</p>
        <div className={`card-rating ${getRatingColor(rating)}`}>
          Voto: {rating}
        </div>
        <div className={`card-status-badge ${getStatusClass(status)}`}>
          {status.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default GameCard;