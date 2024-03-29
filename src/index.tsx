import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  
  html {
    overflow-y:scroll;
  }

  body {
    margin: 0;
    font-size: 1em;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${props => props.theme.colors.brightBackground};
  }

  p, li, td {
    font-size: 1.25em;
    color: ${props => props.theme.colors.textColor};
  }

  p + ul {
    margin-top: -1rem;
}
`;

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);
