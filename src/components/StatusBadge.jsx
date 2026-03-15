function StatusBadge({ status }) {
  let cssClass = "";
  if (status === "On Going") {
    cssClass = "status-on-going";
  } else if (status === "Upcoming") {
    cssClass = "status-upcoming";
  } else {
    cssClass = "status-pending";
  }

  return <span className={`status-badge ${cssClass}`}>{status}</span>;
}

export default StatusBadge;
