import React from 'react';

function TournamentCard({ tournament }) {
  const statusClass = tournament.status === "On Going" ? "status-on-going" : "status-upcoming";

  return (
    <div className="tournament-card">
      <div className="card-header">
        <h3>{tournament.title}</h3>
        <span className={`status-badge ${statusClass}`}>
          {tournament.status}
        </span>
      </div>
      
      <p>{tournament.description}</p>
      
      <div className="card-footer">
        {/* <span>👤 {tournament.participants}</span> */}
        <span>📍 {tournament.location}</span>
      </div>
    </div>
  );
}

export default TournamentCard;