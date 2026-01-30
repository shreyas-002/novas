import MapView from "../components/MapView.jsx";

const Home = ({ location, setLocation }) => {
  return (
    <div className="page">
      <h2>Local Sea Safety Intelligence</h2>
      <p>
        BlueWatch helps fishermen and coastal communities understand real-time
        sea risk based on local conditions.
      </p>

      <MapView setLocation={setLocation} />

      <p style={{ marginTop: "12px" }}>
        Selected location: <strong>{location}</strong>
      </p>
    </div>
  );
};

export default Home;
