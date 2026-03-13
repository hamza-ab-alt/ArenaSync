import { useState } from "react";

function TournamentCard({ tournament, onRegister, onUnregister }) {
  const [activeTab, setActiveTab] = useState("Info");
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");

  const handleAction = (e) => {
    if (isRegistered) {
      onUnregister(tournament.id);
      setIsRegistered(false);
    } else {
      setShowForm(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      onRegister(tournament.id, userName);
      setIsRegistered(true);
      setShowForm(false);
      setUserName("");
      setActiveTab("Participants"); 
    }
  };

  return (
    <div className="tournament-card">
      <div className="card-header">
        <h3>{tournament.title}</h3>
        <span
          className={`status-badge status-${tournament.status.toLowerCase().replace(" ", "-")}`}
        >
          {tournament.status}
        </span>
      </div>

      <div className="tabs-menu">
        <button
          className={activeTab === "Info" ? "tab-link active" : "tab-link"}
          onClick={() => setActiveTab("Info")}
        >
          Info
        </button>
        <button
          className={
            activeTab === "Participants" ? "tab-link active" : "tab-link"
          }
          onClick={() => setActiveTab("Participants")}
        >
          Participants
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Info" ? (
          <div className="info-section">
            <p className="description">{tournament.description}</p>
            <div className="meta-info">
              <span>📍 {tournament.location}</span>
              <span>👥 {tournament.participantsCount}</span>
            </div>
          </div>
        ) : (
          <div className="participants-section">
            <ul className="participants-list">
              {tournament.participants.map((p) => (
                <li key={p.id} className="participant-item">
                  <img src={p.avatar} alt={p.name} className="p-avatar" />
                  <span>{p.name}</span>
                  <span className={`p-status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {showForm && !isRegistered ? (
        <form className="mini-form" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Full name ..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            autoFocus
          />
          <button type="submit" className="btn-valide">
            Valider
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setShowForm(false)}
          >
            Annuler
          </button>
        </form>
      ) : (
        <button
          onClick={handleAction}
          className={isRegistered ? "btn-unreg" : "btn-reg"}
        >
          {isRegistered ? "Se désinscrire" : "S'inscrire"}
        </button>
      )}
    </div>
  );
}

export default TournamentCard;
