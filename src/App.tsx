import React from "react";
import { HashRouter } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Main />
    </HashRouter>
  );
};

export default App;
