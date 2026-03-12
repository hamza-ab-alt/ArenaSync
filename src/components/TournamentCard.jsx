import React from "react";
import { StatusBadges } from "./StatusBadge";
function TournamentCard({ tournament }) {
  const statusClass =
    tournament.status === "On Going" ? "status-on-going" : "status-upcoming";

  return (
  <div className="tournament-card">
  <div className="card-header">
     <h3>{tournament.title}</h3>
    <StatusBadges status = {tournament.status}/>
  </div>
  <p className="description">{tournament.description}</p>
  <div className="location">
     📍 {tournament.location}
  </div>
</div>
  );
}

export default TournamentCard;
