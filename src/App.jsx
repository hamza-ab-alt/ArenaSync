import React, { useState } from "react";
import { tournamentData as initialData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tournaments, setTournaments] = useState(initialData);

  // US5: Live Search Logic
  const filteredTournaments = tournaments.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-app">
      <header className="header-section">
        <h1>Good Morning, Samuel Walker!</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search tournaments..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="tournaments-grid">
        {filteredTournaments.length > 0 ? (
          filteredTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>No tournaments found.</p>
        )}
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