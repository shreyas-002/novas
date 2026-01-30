const SeaDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="details">
      <p>
        <strong>Wave height:</strong> {data.waveHeight}
      </p>
      <p>
        <strong>Swell:</strong> {data.swell}
      </p>
      <p>
        <strong>Advisory:</strong> {data.advice}
      </p>
      <p>
        <strong>IMD status:</strong> {data.imd}
      </p>
    </div>
  );
};

export default SeaDetails;
