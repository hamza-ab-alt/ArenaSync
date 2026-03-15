import ParticipantRow from "./ParticipantRow";

function TabSystem({ activeTab, setActiveTab, tournament }) {
  return (
    <div>
      <div className="tabs-menu">
        <button
          onClick={() => setActiveTab("Info")}
          className={activeTab === "Info" ? "tab-link active" : "tab-link"}
        >
          Info
        </button>
        <button
          onClick={() => setActiveTab("Participants")}
          className={
            activeTab === "Participants" ? "tab-link active" : "tab-link"
          }
        >
          Participants
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Info" ? (
          <div className="info-section">
            <p>{tournament.description}</p>
            <p>📍 {tournament.location}</p>
            <p>👥 {tournament.participantsCount}</p>
          </div>
        ) : (
          <ul className="participants-list">
            {tournament.participants.map(function (p) {
              return <ParticipantRow key={p.id} participant={p} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TabSystem;
