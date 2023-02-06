import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import CenterWrapper from "../generic/CenterWrapper";
import marker from "../images/marker.svg";
import marker2 from "../images/marker2.svg";
import marker3 from "../images/marker3.svg";
import marker4 from "../images/marker4.svg";
import marker5 from "../images/marker5.svg";
import marker6 from "../images/marker6.svg";

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

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        zoom={3}
        center={{ lat: 0, lng: 0 }}
        mapContainerStyle={{
          width: "100vw",
          height: "100vh",
        }}
        mapContainerClassName="map-container"
        options={{
          styles,
          disableDefaultUI: true,
        }}
      >
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker}
          position={{ lat: 0, lng: 0 }}
        />
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker2}
          position={{ lat: 20, lng: 20 }}
        />
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker3}
          position={{ lat: 22, lng: 22 }}
        />
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker4}
          position={{ lat: 40, lng: 40 }}
        />
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker5}
          position={{ lat: 50, lng: 50 }}
        />
        <Marker
          animation={google.maps.Animation.DROP}
          icon={marker6}
          position={{ lat: 60, lng: 60 }}
        />
      </GoogleMap>
    </>
  );
}
