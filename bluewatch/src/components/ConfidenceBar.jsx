const ConfidenceBar = ({ value }) => {
  if (typeof value !== "number") return null;

  const percent = value > 1 ? value : value * 100;

  return (
    <div className="confidence-wrapper">
      <span className="confidence-text">
        Confidence {Math.round(percent)}%
      </span>

      <div className="confidence-bar">
        <div
          className="confidence-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ConfidenceBar;
