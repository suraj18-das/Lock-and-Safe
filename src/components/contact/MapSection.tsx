import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'D:\\React\\LandS\\project\\node_modules\\leaflet\\dist\\leaflet.css';
import "../../../node_modules/leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapSection() {
  const position: [number, number] = [22.564955 ,88.346346]; // New York coordinates

  return (
    <div className="w-full z-0 h-[400px] mt-16">
      <MapContainer 
        center={position} 
        zoom={13} 
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Lock & Safe Facility Services<br />
            British India Street, Kolkata-700069,<br />
            West Bengal, India<br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}