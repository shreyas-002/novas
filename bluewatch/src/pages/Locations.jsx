const Locations = ({ setLocation }) => {
  return (
    <div className="page">
      <h2>Select Location</h2>
      <select onChange={(e) => setLocation(e.target.value)}>
        <option value="">Choose location</option>
        <option value="Chennai">Chennai</option>
        <option value="Kochi">Kochi</option>
        <option value="Vizag">Vizag</option>
      </select>
    </div>
  );
};

export default Locations;
