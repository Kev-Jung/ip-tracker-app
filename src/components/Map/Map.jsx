import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const mapStyles = {
    height: "75vh",
    width: "100%",
  };

  // centerpoint for map location and marker icon
  const center = {
    lat,
    lng,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={center}
        options={{ disableDefaultUI: true }}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
