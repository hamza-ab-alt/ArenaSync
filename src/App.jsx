import React, { useState } from "react";
import { tournamentData as initialData } from "./data/tournamentDB";
import TournamentCard from "./components/TournamentCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tournaments, setTournaments] = useState(initialData);

  function addParticipant(tId, name) {
    const updated = tournaments.map(function (t) {
      if (t.id === tId) {
        const newP = {
          id: Date.now().toString(),
          name: name,
          status: "Confirmed",
          avatar: "https://i.pravatar.cc/150",
        };

        const parts = t.participantsCount.split("/");
        const newCount = parseInt(parts[0]) + 1 + "/" + parts[1];

        return {
          ...t,
          participants: [...t.participants, newP],
          participantsCount: newCount,
        };
      }
      return t;
    });
    setTournaments(updated);
  }

  function removeParticipant(tId) {
    const updated = tournaments.map(function (t) {
      if (t.id === tId) {
        const parts = t.participantsCount.split("/");
        const newCount = parseInt(parts[0]) - 1 + "/" + parts[1];
        const newParticipants = [...t.participants];
        newParticipants.pop();
        return {
          ...t,
          participants: newParticipants,
          participantsCount: newCount,
        };
      }
      return t;
    });
    setTournaments(updated);
  }

  const filtered = tournaments.filter(function (t) {
    return t.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="main-app">
      <header className="header-section">
        <h1>Good Morning, Samuel Walker!</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="tournaments-grid">
        {filtered.map(function (t) {
          return (
            <TournamentCard
              key={t.id}
              tournament={t}
              onRegister={addParticipant}
              onUnregister={removeParticipant}
            />
          );
        })}
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
