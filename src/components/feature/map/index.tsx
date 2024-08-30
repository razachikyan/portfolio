import { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

import styles from "./styles.module.css";

const CustomMap = () => {
  // shows marker on London by default
  const [markerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <div className={styles.mapContainer}>
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
};

export default CustomMap;
