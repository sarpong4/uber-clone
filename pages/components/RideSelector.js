import tw from "tailwind-styled-components";
import { carList } from "../../carList";
import { useState, useEffect } from "react";

const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDurations, setRideDurations] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox..com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]}:${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1Ijoic2FycG9uZzQiLCJhIjoiY2t2bHNzdWdtMG9xOTJvbzVjZjN3NzZmZSJ9.CrfCLAD4GF9yrSIZaK-5cw`
    )
      .then((response) => response.json())
      .then((data) => {
        setRideDurations(data.routes[0].duration / 100);
        console.log(data);
      });
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more.</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{"$" + (rideDurations * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-black
`;

const CarList = tw.div`
    overflow-y-scroll
`;

const Car = tw.div`
     flex p-4 items-center outline-solid
`;

const CarImage = tw.img`
    h-14 mr-2
`;

const CarDetails = tw.div`
    flex-1
`;

const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    font-xs text-blue-500
`;

const Price = tw.div`
    text-sm
`;
