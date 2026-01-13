import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

// Fix marker icon không hiển thị
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const position: LatLngTuple = [16.4637, 107.5909]; // Huế

const Map: React.FC = () => {
  return (
    <div className="footer__map-inner">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        style={{ width: "100%", height: "220px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Thôn 1, Xã Phú Vinh
            <br />
            Thành phố Huế
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
