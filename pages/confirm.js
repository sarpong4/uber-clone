import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropOff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (location) => {
    const pickUp = location;

    // fetch API
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FycG9uZzQiLCJhIjoiY2t2bHNzdWdtMG9xOTJvbzVjZjN3NzZmZSJ9.CrfCLAD4GF9yrSIZaK-5cw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (location) => {
    const dropOff = location;

    // fetch API
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic2FycG9uZzQiLCJhIjoiY2t2bHNzdWdtMG9xOTJvbzVjZjN3NzZmZSJ9.CrfCLAD4GF9yrSIZaK-5cw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);

  return (
    <Wrapper>
      <Link href="/search" passHref>
        <BackButton>
          <Back src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BackButton>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col h-screen bg-gray-200
`;

const BackButton = tw.div`
  bg-white rounded-full absolute top-4 left-4 z-10 shadow-10 cursor-pointer
`;

const Back = tw.img`
  h-full object-contain
`;

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
     border-t-2
`;

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

export default Confirm;
