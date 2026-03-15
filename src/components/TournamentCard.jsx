import { useState } from "react";
import StatusBadge from "./StatusBadge";
import TabSystem from "./TabSystem";

function TournamentCard({ tournament, onRegister, onUnregister }) {
  const [activeTab, setActiveTab] = useState("Info");
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");

  function handleAction() {
    if (isRegistered === true) {
      onUnregister(tournament.id);
      setIsRegistered(false);
    } else {
      setShowForm(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(tournament.id, userName);
    setIsRegistered(true);
    setShowForm(false);
    setUserName("");
    setActiveTab("Participants");
  }

  return (
    <div className="tournament-card">
      <div className="card-header">
        <h3>{tournament.title}</h3>
        <StatusBadge status={tournament.status} />
      </div>

      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} tournament={tournament} />

      {showForm === true ? (
        <form className="mini-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name..." 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
          />
          <button type="submit" className="btn-valide">OK</button>
        </form>
      ) : (
        <button onClick={handleAction} className={isRegistered ? "btn-unreg" : "btn-reg"}>
          {isRegistered ? "Désinscrire" : "S'inscrire"}
        </button>
      )}
    </div>
  );
}

export default TournamentCard;