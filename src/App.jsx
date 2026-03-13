import React, { useState } from "react";
import { tournamentData as initialData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tournaments, setTournaments] = useState(initialData);


  const addParticipantToTournament = (tId, name) => {
    const updated = tournaments.map((t) => {
      if (t.id === tId) {
        const newP = {
          id: Date.now().toString(),
          name: name,
          status: "Confirmed",
          avatar: `https://i.pravatar.cc/150?u=${Date.now()}`
        };
        
        const [current, max] = t.participantsCount.split('/');
        const newCount = `${parseInt(current) + 1}/${max}`;
        
        return { ...t, participants: [...t.participants, newP], participantsCount: newCount };
      }
      return t;
    });
    setTournaments(updated);
  };

 
  const removeParticipantFromTournament = (tId) => {
    const updated = tournaments.map((t) => {
      if (t.id === tId) {
        const [current, max] = t.participantsCount.split('/');
        const newCount = `${parseInt(current) - 1}/${max}`;
     
        const newParticipants = [...t.participants];
        newParticipants.pop();
        return { ...t, participants: newParticipants, participantsCount: newCount };
      }
      return t;
    });
    setTournaments(updated);
  };

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="tournaments-grid">
        {filteredTournaments.map((t) => (
          <TournamentCard 
            key={t.id} 
            tournament={t} 
            onRegister={addParticipantToTournament}
            onUnregister={removeParticipantFromTournament}
          />
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