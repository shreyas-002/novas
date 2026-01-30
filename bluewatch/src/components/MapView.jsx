import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = {
  Chennai: [13.0827, 80.2707],
  Kochi: [9.9312, 76.2673],
  Vizag: [17.6868, 83.2185],
};

const MapView = ({ setLocation }) => {
  return (
    <MapContainer
      center={[13, 80]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {Object.entries(locations).map(([name, coords]) => (
        <Marker
          key={name}
          position={coords}
          eventHandlers={{
            click: () => setLocation(name),
          }}
        >
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
