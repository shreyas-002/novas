import StatusCard from "../components/StatusCard.jsx";
import ConfidenceBar from "../components/ConfidenceBar.jsx";
import WindowCard from "../components/WindowCard.jsx";
import SeaDetails from "../components/SeaDetails.jsx";

const LiveStatus = ({ data }) => {
  if (!data) return null;

  return (
    <div className="live-wrapper">
      <StatusCard status={data.status} />
      <ConfidenceBar value={data.confidence} />
      <WindowCard today={data.today} tomorrow={data.tomorrow} />
      <SeaDetails data={data} />
    </div>
  );
};

export default LiveStatus;
