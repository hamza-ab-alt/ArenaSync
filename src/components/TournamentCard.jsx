import React from 'react';

function TournamentCard({ tournament }) {
  // US3: Status color mapping
  const statusClass = tournament.status === "On Going" ? "status-on-going" : "status-upcoming";

  return (
    <div className="tournament-card">
      <div className="header">
        <h3>{tournament.title}</h3>
        <span className={`status-badge ${statusClass}`}>
          {tournament.status}
        </span>
      </div>
      <p className="description">{tournament.description}</p>
      <div className="footer-info">
        <span>👤 {tournament.participants}</span>
        <span>📍 {tournament.location}</span>
      </div>
    </div>
  );
}

export default TournamentCard;