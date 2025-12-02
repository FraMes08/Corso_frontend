import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import GameList from './components/GameList/GameList'
import { mockGames } from './data/mockData';

const App = () => {
  
  const [games] = useState(mockGames);
  
  // Lo stato del tab/filtri verrà aggiunto nella Fase 2/3

  return (
    <div className="app-container">
      <Header totalGames={games.length} />
      
      <main className="main-content">
        {/* Navigation e Filters andranno qui */}

        <GameList games={games} />
      </main>
    </div>
  );
};

export default App