import React, { useMemo } from 'react';
import './GameStats.css'; 

//calcolo delle stats
const calculateStats = (games) => {
  if (games.length === 0) {
    return {
      totalHours: 0,
      statusCount: {},
      avgRating: 0,
      mostFrequentPlatform: 'N/D',
    };
  }
  
  let totalHours = 0;
  const statusCount = {};
  let totalRating = 0;
  const platformCount = {};
  
  games.forEach(game => {
    //somma ore
    if (game.status === 'completato' || game.status === 'in-corso') {
      totalHours += game.hoursPlayed;
    }
    
    //status
    statusCount[game.status] = (statusCount[game.status] || 0) + 1;
    
    //media voti
    totalRating += game.rating;
    
    //platform
    platformCount[game.platform] = (platformCount[game.platform] || 0) + 1;
  });
  
  const avgRating = (totalRating / games.length).toFixed(1);
  
  //piattaforma più frequente
  let maxCount = 0;
  let mostFrequentPlatform = 'N/D';
  for (const platform in platformCount) {
    if (platformCount[platform] > maxCount) {
      maxCount = platformCount[platform];
      mostFrequentPlatform = platform;
    }
  }

  return { totalHours, statusCount, avgRating, mostFrequentPlatform };
};

const GameStats = ({ games }) => {
  // useMemo ottimizza il calcolo, ricalcolando solo se 'games' cambia
  const stats = useMemo(() => calculateStats(games), [games]);
  
  const statusOrder = ['completato', 'in-corso', 'wishlist', 'abbandonato'];

  return (
    <div className="game-stats-container">
      <h3>Statistiche Live</h3>
      <div className="stats-grid">
        <div className="stat-box">
          <p className="stat-value">{stats.totalHours}</p>
          <p className="stat-label">Ore Totali Giocate</p>
        </div>
        <div className="stat-box">
          <p className="stat-value">{stats.avgRating}</p>
          <p className="stat-label">Voto Medio</p>
        </div>
        <div className="stat-box">
          <p className="stat-value">{stats.mostFrequentPlatform}</p>
          <p className="stat-label">Piattaforma Preferita</p>
        </div>
      </div>
      
      <h4>Giochi per Stato</h4>
      <ul className="stats-list-status">
        {statusOrder.map(statusKey => (
          <li key={statusKey}>
            {statusKey.charAt(0).toUpperCase() + statusKey.slice(1)}: 
            <strong> {stats.statusCount[statusKey] || 0}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameStats;