import React from "react";
import styled from "styled-components";

import { EntryInformation } from "./sections/EntryInformation";
import { CourseInformation } from "./sections/CourseInformation";
import { PracticalInformation } from "./sections/PracticalInformation";
import { ResultsInformation } from "./sections/ResultsInformation";
import { SponsorsInformation } from "./sections/SponsorsInformation";
import { Header } from "./sections/Header";

const Content = styled.main`
  margin-bottom: 1000rem; /* TODO: Remove */
`;

export const Main: React.FC = () => {
  return (
    <Content>
      <Header />
      <EntryInformation />
      <CourseInformation />
      <PracticalInformation />
      <ResultsInformation />
      <SponsorsInformation />
    </Content>
  );
};
