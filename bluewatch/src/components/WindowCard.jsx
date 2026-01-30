const WindowCard = ({ today, tomorrow }) => {
  return (
    <div className="window">
      <div>
        <strong>Today</strong>
        <p>{today}</p>
      </div>
      <div>
        <strong>Tomorrow</strong>
        <p>{tomorrow}</p>
      </div>
    </div>
  );
};

export default WindowCard;
