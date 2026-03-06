import React from 'react';
import { tournamentsData } from './data/tournamentDB'; // L-path s7i7 3la hsab l-image
import TournamentCard from './components/TournamentCard'; // L-path s7i7
import './App.css'; // Import dial l-styles
function App() {
  return (
    <div className="main-container">
      {/* Header */}
      <header className="header-section">
        <h1>Good Morning, Samuel Walker!</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </header>

      {/* Main Grid (US1) */}
      <main className="tournaments-grid">
        {tournamentsData.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </main>

      {/* Navigation */}
      <nav className="bottom-nav">
        <button className="nav-btn active">Home</button>
        <button className="nav-btn">Tournament</button>
        <button className="nav-btn">Profile</button>
      </nav>
    </div>
  );
}

export default App;