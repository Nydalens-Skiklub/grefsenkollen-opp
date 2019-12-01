import React from "react";
import styled from "styled-components";

const PageBodyContainer = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;

  h2 {
    margin-bottom: -1rem;
  }

  a {
    text-decoration: none;
    color: #006bb3;

    &:hover {
      text-decoration: underline;
    }
  }

  > div {
    padding: 1.5rem 0;
    flex-grow: 1;
    flex-shrink: 0;

    > div {
      flex-grow: 1;
      margin: 0 auto;
      padding: 0.25rem 1.5rem;
      position: relative;
      width: auto;
      line-height: 1.4;
      background-color: #fff;

      max-width: 800px;
      @media screen and (min-width: 1024px) {
        max-width: 960px;
      }
    }
  }
`;

export const PageBody: React.FC = props => {
  return (
    <PageBodyContainer>
      <div>
        <div>{props.children}</div>
      </div>
    </PageBodyContainer>
  );
};
