import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const mapStyles = {
    height: "65vh",
    width: "100%",
  };

  const center = {
    lat,
    lng,
  };

  const options = {
    disableDefaultUI: true,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center}
        options={options}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
