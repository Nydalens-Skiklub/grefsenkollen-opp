import styled from "styled-components";

interface HeaderTitleProps {
  readonly isFrontPage?: boolean;
}

export const HeaderTitle = styled.h1<HeaderTitleProps>`
  @import url("https://fonts.googleapis.com/css?family=Quicksand:500&display=swap");
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 900;
  line-height: 1.125;
  word-break: break-word;

  padding: 1rem 0;
  font-size: ${props => (props.isFrontPage ? "2.5rem" : "1.75rem")};
  @media screen and (min-width: 768px) {
    padding: 1rem;
    font-size: ${props => (props.isFrontPage ? "5rem" : "2.5rem")};
  }
`;
