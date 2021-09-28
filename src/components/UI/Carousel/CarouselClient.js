import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import FullWidth from "./FullWidth";

const Photo = styled.img`
  width: ${(props) => props.scale * 300}px;
  height: ${(props) => props.scale * 150}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
  '/Images/Clients/ford.webp',
  '/Images/Clients/honda.webp',
  '/Images/Clients/hyundai.webp',
  '/Images/Clients/kia.webp',
  '/Images/Clients/mahindra.webp',
  '/Images/Clients/maruti.webp',
  '/Images/Clients/mg.webp',
  '/Images/Clients/nissan.webp',
  '/Images/Clients/renault.webp',
  '/Images/Clients/skoda.webp',
  '/Images/Clients/tata.webp',
  '/Images/Clients/toyota.webp'
];

const People = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(12, Number).map((id) => (
            <Photo src={photos[id]} alt="" key={`marquee-example-people-${id}`} scale={scale} />
          ))}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />
    </FullWidth>
  );
};

export default withSize()(People);