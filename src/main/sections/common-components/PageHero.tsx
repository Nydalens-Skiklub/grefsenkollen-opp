import React from "react";
import styled from "styled-components";

import { HeaderTitle } from "./HeaderTitle";

const PageHeroContainer = styled.section`
  background-color: ${props => props.theme.colors.darkBackground};
  color: #fff;
  padding-top: 4rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;

  > div {
    padding-top: 2.5rem;
    flex-grow: 1;
    flex-shrink: 0;

    > div {
      flex-grow: 1;
      margin: 0 auto;
      position: relative;
      width: auto;
      text-align: center;
    }
  }
`;

export const PageHero: React.FC = props => {
  return (
    <PageHeroContainer>
      <div>
        <div>
          <HeaderTitle>{props.children}</HeaderTitle>
        </div>
      </div>
    </PageHeroContainer>
  );
};
