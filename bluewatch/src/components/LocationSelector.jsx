const LocationSelector = ({ location, setLocation }) => {
  return (
    <select
      className="select"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    >
      <option value="Chennai">Chennai</option>
      <option value="Kochi">Kochi</option>
      <option value="Vizag">Vizag</option>
    </select>
  );
};

export default LocationSelector;
