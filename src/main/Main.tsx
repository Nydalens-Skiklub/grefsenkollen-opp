import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router";

import { EntryInformation } from "./sections/EntryInformation";
import { CourseInformation } from "./sections/CourseInformation/CourseInformation";
import { PracticalInformation } from "./sections/PracticalInformation";
import { ResultsInformation } from "./sections/ResultsInformation";
import { SponsorsInformation } from "./sections/SponsorsInformation";
import { Header } from "./sections/Header";
import { MainInformation } from "./sections/MainInformation";

const Content = styled.main``;

export const Main: React.FC = () => {
  return (
    <Content>
      <Switch>
        <Route path="/entry">
          <EntryInformation />
        </Route>
        <Route path="/course">
          <CourseInformation />
        </Route>
        <Route path="/info">
          <PracticalInformation />
        </Route>
        <Route path="/results">
          <ResultsInformation />
        </Route>
        <Route path="/sponsors">
          <SponsorsInformation />
        </Route>
        <Route path="/">
          <Header />
          <MainInformation />
        </Route>
      </Switch>
    </Content>
  );
};
