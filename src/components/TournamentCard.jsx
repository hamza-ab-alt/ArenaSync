import {useState} from "react";


function TournamentCard({ tournament }) {
  const [isRegistered, setIsRegistered] = useState(false)
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
  <button
onClick={()=>setIsRegistered(!isRegistered)}
className={isRegistered ? "bg-red-500 text-white p-2   rounded-[18px]"  : "bg-green-500 text-white p-2 rounded-[18px]"}
>
    {isRegistered ? "Se désinscrire" : "S'inscrire"}

</button>
  <div className="location">
     📍 {tournament.location}
  </div>
</div>
  );
}

export default TournamentCard;
