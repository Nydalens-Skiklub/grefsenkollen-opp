import React from "react";
import { HashRouter } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Main />
      <Footer />
    </HashRouter>
  );
};

export default App;
