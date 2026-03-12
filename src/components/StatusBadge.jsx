  export function StatusBadges({status}){
    const statusClass =
    status === "On Going" ? "status-on-going" : "status-upcoming";
    return(
           <span className={`status-badge status-${status.toLowerCase().replace(' ', '-')}`}>
        {status}
     </span>
    )
 }
