import { useState } from "react";

const LOCATIONS = ["Chennai", "Kochi", "Vizag"];

const Navbar = ({
  page,
  setPage,
  location,
  setLocation,
  theme,
  setTheme,
}) => {
  const [query, setQuery] = useState("");

  const filteredLocations = LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-logo">BlueWatch</div>

      {/* CENTER */}
      <div className="nav-center">
        <input
          className="nav-search"
          type="text"
          placeholder="Search location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {filteredLocations.length === 0 ? (
            <option value={location} disabled>
              No locations found
            </option>
          ) : (
            filteredLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))
          )}
        </select>
      </div>

      {/* RIGHT */}
      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("live")}>Live</button>
        <button onClick={() => setPage("about")}>About</button>

        <button
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
