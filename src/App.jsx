import React from "react";
import { tournamentData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import "./App.css";

function App() {
  return (
    <div className="main-app">
      <header className="header-section">
        <h1>Good Morning, Samuel Walker!</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search tournaments..."
            className="search-input"
          />
        </div>
      </header>

      <main className="tournaments-grid">
        {tournamentData &&
          tournamentData.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
      </main>

      <nav className="bottom-nav">
        <button className="nav-btn active">Home</button>
        <button className="nav-btn">Tournament</button>
        <button className="nav-btn">Profile</button>
      </nav>
    </div>
  );
}

export default App;
