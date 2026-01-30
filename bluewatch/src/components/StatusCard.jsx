const StatusCard = ({ status }) => {
  const statusClass =
    status === "SAFE"
      ? "safe"
      : status === "UNSAFE"
      ? "unsafe"
      : "caution";

  return (
    <div className={`status-card ${statusClass}`}>
      <span className="status-badge">{status}</span>
    </div>
  );
};

export default StatusCard;
