import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { sendServer } from "../../../connections/ptm/invoker";
import { useStore } from "@nanostores/react";
import { game, guessPlaced } from "../../../store/ptnStore";
import marker from "../images/marker.svg";
import Button from "../generic/Button";
import CenterWrapper from "../generic/CenterWrapper";
import { PLAYER_VIEWS, WAITING_VIEWS } from "../../../helpers/constants/ptm";

const styles = [
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
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f0e4cd",
      },
      {
        visibility: "on",
      },
      {
        weight: 2.5,
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
    featureType: "administrative.land_parcel",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    stylers: [
      {
        color: "#f78686",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "labels.icon",
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
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fbf0da",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API,
  });

  const gameObj = useStore(game);

  const center = useMemo(() => ({ lat: 0, lng: 0 }), []);
  const [guessMade, setGuessMade] = useState(false);
  const [latLang, setLatLang] = useState({
    latitude: 0,
    longitude: 0,
  });

  const setPin = (latLng: google.maps.LatLng | null) => {
    if (latLng) {
      setLatLang({ latitude: latLng.lat(), longitude: latLng.lng() });
      setGuessMade(true);
    }
  };

  const guess = () => {
    if (gameObj.gameId) {
      sendServer(gameObj.gameId, "Guess", JSON.stringify(latLang));
      guessPlaced({
        playerView: PLAYER_VIEWS.WAITING,
        waitingView: WAITING_VIEWS.PLAYERS_STILL_GUESSING,
      });
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
        <Marker
          icon={marker}
          position={{ lat: latLang.latitude, lng: latLang.longitude }}
        />
      </GoogleMap>
      {guessMade && (
        <CenterWrapper
          style={{
            position: "fixed",
            bottom: 0,
            width: "100vw",
            zIndex: 1,
          }}
        >
          <Button onClick={guess} id="guess" text="Make Guess" />
        </CenterWrapper>
      )}
    </>
  );
}
