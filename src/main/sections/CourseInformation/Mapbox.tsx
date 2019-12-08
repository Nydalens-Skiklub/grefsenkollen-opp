import React from "react";
import styled from "styled-components";
import ReactMapboxGl, { GeoJSONLayer, Layer, Feature } from "react-mapbox-gl";

import geojson from "../../../data/tracks.json";
import StartIcon from "../images/course-start.svg";
import FinishIcon from "../images/course-finish.svg";

const coordinates = geojson.features[0].geometry.coordinates[0];

const startIcon = new Image(17.5, 17.5);
startIcon.src = StartIcon;
const finishIcon = new Image(17.5, 17.5);
finishIcon.src = FinishIcon;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia29uZ3NnYXJkIiwiYSI6ImNrM3hoZDIzYzB5ZjgzcmxicTF2dGp6aDgifQ.xwyhXjgtR04sJwPzpcC1Qw"
});

const StyledMapHeader = styled.h2`
  margin-bottom: 1rem !important;
`;

export const Mapbox: React.FC = () => {
  return (
    <>
      <StyledMapHeader>Løypekart</StyledMapHeader>
      <Map
        style="mapbox://styles/kongsgard/ck3xhudyq25vf1bqpj4sik6ml" // eslint-disable-line
        containerStyle={{
          height: "40rem",
          width: "100%"
        }}
        center={[10.795, 59.951]}
        zoom={[13]}
      >
        <GeoJSONLayer
          data={geojson}
          symbolLayout={{
            "text-field": "{place}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          }}
          layout={{
            "line-join": "round",
            "line-cap": "round"
          }}
          linePaint={{
            "line-color": "#FF0000",
            "line-width": 3
          }}
        />

        <Layer
          type="symbol"
          id="start"
          images={["start", startIcon]}
          layout={{ "icon-image": "start" }}
        >
          <Feature coordinates={coordinates[0]} />
        </Layer>
        <Layer
          type="symbol"
          id="finish"
          images={["finish", finishIcon]}
          layout={{ "icon-image": "finish" }}
        >
          <Feature coordinates={coordinates[coordinates.length - 1]} />
        </Layer>
      </Map>
    </>
  );
};
