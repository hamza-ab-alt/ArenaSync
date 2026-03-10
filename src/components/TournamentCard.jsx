import React from "react";

function TournamentCard({ tournament }) {
  const statusClass =
    tournament.status === "On Going" ? "status-on-going" : "status-upcoming";

  return (
  <div className="tournament-card">
  <div className="card-header">
     <h3>{tournament.title}</h3>
     <span className={`status-badge status-${tournament.status.toLowerCase().replace(' ', '-')}`}>
        {tournament.status}
     </span>
  </div>
  <p className="description">{tournament.description}</p>
  <div className="location">
     📍 {tournament.location}
  </div>
</div>
  );
}

export default TournamentCard;
