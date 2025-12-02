import { useState, useMemo } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import GameList from './components/GameList/GameList'
import GameStats from './components/GameStats/GameStats'
import { mockGames } from './data/mockData';

const App = () => {
  const [games] = useState(mockGames);
  const [activeTab, setActiveTab] = useState('tutti');
  
  //tabs
  const filteredGamesByTab = useMemo(() => {
    if (activeTab === 'tutti') {
      return games;
    }
    // Filtra in base allo stato
    return games.filter(game => game.status === activeTab);
  }, [games, activeTab]);

  return (
    <div className="app-container">
      <Header totalGames={games.length} />
      
      <main className="main-content">
        {}
        <GameStats games={games} /> 

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <GameList games={filteredGamesByTab} />
      </main>
    </div>
  );
};

export default App