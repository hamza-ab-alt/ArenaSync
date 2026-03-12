import { useState } from "react";

function TournamentCard({ tournament }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState("Info"); // US6: Tab State

  return (
    <div className="tournament-card">
      <div className="card-header">
        <h3>{tournament.title}</h3>
        <span className={`status-badge status-${tournament.status.toLowerCase().replace(" ", "-")}`}>
          {tournament.status}
        </span>
      </div>

      {/* US6: Navigation interne (Tabs) */}
      <div className="tabs-menu">
        {["Info", "Participants"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab-link active" : "tab-link"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "Info" ? (
          <div className="info-section">
            <p className="description">{tournament.description}</p>
            <div className="meta-info">
              <span>📅 {tournament.date}</span>
              <span>📍 {tournament.location}</span>
              <span>🏆 {tournament.format}</span>
            </div>
          </div>
        ) : (
          <div className="participants-section">
            <p className="count-label">
              👥 {isRegistered ? 25 : 24}/32 Participants
            </p>
            <ul className="participants-list">
              {tournament.participants.map((p) => (
                <li key={p.id} className="participant-item">
                  <img src={p.avatar} alt={p.name} className="p-avatar" />
                  <span>{p.name}</span>
                  <span className={`p-status ${p.status.toLowerCase()}`}>{p.status}</span>
                </li>
              ))}
              {isRegistered && (
                <li className="participant-item">
                  <div className="p-avatar user-avatar">SW</div>
                  <span>Samuel Walker (Vous)</span>
                  <span className="p-status confirmed">Confirmed</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsRegistered(!isRegistered)}
        className={isRegistered ? "btn-unreg" : "btn-reg"}
      >
        {isRegistered ? "Se désinscrire" : "S'inscrire"}
      </button>
    </div>
  );
}

export default TournamentCard;