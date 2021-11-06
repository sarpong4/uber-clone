import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FycG9uZzQiLCJhIjoiY2t2bHNzdWdtMG9xOTJvbzVjZjN3NzZmZSJ9.CrfCLAD4GF9yrSIZaK-5cw";

function Map(props) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [4.5, 7.5],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }

    if (props.pickupCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropOffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  useEffect(() => {}, [props.pickupCoordinates, props.dropOffCoordinates]);

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
  flex-1 h-1/2
`;

export default Map;
