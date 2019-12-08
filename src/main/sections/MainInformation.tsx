import React from "react";
import styled from "styled-components";

import { PageBody } from "./common-components/PageBody";

import DistanceImage from "./images/distance.svg";
import AscentImage from "./images/ascent.svg";
import LocationImage from "./images/location.svg";

const StyledIcons = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;

  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  width: 15rem;

  margin: 1rem 0;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin: 0;
    justify-content: center;
  }
`;

interface StyledSvgContainerProps {
  readonly src: string;
}

const StyledSvgContainer = styled.div<StyledSvgContainerProps>`
  margin-right: 0.5rem;
  width: 5rem;
  height: 5rem;
  background: ${props => `url(${props.src})`} no-repeat center center;
  background-size: contain;
`;

export const MainInformation: React.FC = () => {
  return (
    <PageBody>
      <StyledIcons>
        <IconWithDescription src={DistanceImage} description="4,5 km" />
        <IconWithDescription src={AscentImage} description="270 m" />
        <IconWithDescription src={LocationImage} description="Muselunden" />
      </StyledIcons>
      <p>
        Grefsenkollen ligger lengst sør i Lillomarka som en kile mellom
        Maridalen og Groruddalen. Bakkeløpet Grefsenkollen Opp starter på
        Muselunden rett ved Sinsenkrysset (110 moh.). Løypa følger Kjelsåsveien
        og Grefsenkollveien opp til målet på toppen (380 moh.). Totalt er løpet
        4,5 km med en høydeforskjell på 270 meter, noe som gir en
        stigningsprosent på ca 6 %. Underlaget er asfalt hele veien.
      </p>
    </PageBody>
  );
};

interface IconWithDescriptionProps {
  src: string;
  description: string;
}

const IconWithDescription: React.FC<IconWithDescriptionProps> = ({
  src,
  description
}) => {
  return (
    <StyledListItem>
      <StyledSvgContainer src={src} />
      <p>{description}</p>
    </StyledListItem>
  );
};
