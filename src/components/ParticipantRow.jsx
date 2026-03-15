function ParticipantRow({ participant }) {
  return (
    <li className="participant-item">
      <img src={participant.avatar} className="p-avatar" alt="avatar" />
      <span>{participant.name}</span>
      <span className="p-status confirmed">{participant.status}</span>
    </li>
  );
}

export default ParticipantRow;