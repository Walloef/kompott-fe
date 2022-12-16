import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { sendServer } from "../../../connections/ptm/invoker";
import { useStore } from "@nanostores/react";
import { game } from "../../../store/ptnStore";

const styles = [
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off",
      },
      {
        gamma: "1.19",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCRXvEwPNT-qbn3-rrLSnD-ti7jhchbXUI",
  });

  const gameObj = useStore(game);

  const center = useMemo(() => ({ lat: 0, lng: 0 }), []);
  const [guessMade, setGuessMade] = useState(false);
  const [latLang, setLatLang] = useState({
    latitude: 0,
    longitude: 0,
  });
  const setPin = (latLng: google.maps.LatLng | null): void => {
    if (latLng) {
      setLatLang({ latitude: latLng.lat(), longitude: latLng.lng() });
    }
  };

  const guess = () => {
    setGuessMade(true);
    if (gameObj.gameId) {
      sendServer(gameObj.gameId, "Guess", JSON.stringify(latLang));
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        zoom={3}
        center={center}
        mapContainerStyle={{
          width: "100vw",
          height: "100vh",
        }}
        onClick={(e) => setPin(e.latLng)}
        mapContainerClassName="map-container"
        options={{
          styles,
          disableDefaultUI: true,
        }}
      >
        <Marker position={latLang} />
      </GoogleMap>
      <button
        style={{
          position: "absolute",
          bottom: 0,
          background: "tomato",
          zIndex: 999,
        }}
        onClick={guess}
        id="guess"
        disabled={guessMade}
      >
        Guess
      </button>
    </>
  );
}

// import {
//   GoogleMap,
//   useJsApiLoader,
//   useLoadScript,
// } from "@react-google-maps/api";
// import { useCallback, useState } from "react";

// const containerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };
// const Guessing = () => {
//   const { isLoaded } = useLoadScript({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyCRXvEwPNT-qbn3-rrLSnD-ti7jhchbXUI",
//   });

//   const [map, setMap] = useState<google.maps.Map | null>(null);

//   const onLoad = useCallback(function callback(map: google.maps.Map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(function callback(map: google.maps.Map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <>
//       <p>map</p>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         options={{
//           disableDefaultUI: true,
//           styles,
//         }}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </>
//   ) : (
//     <>Loading</>
//   );
// };

// export default Guessing;
