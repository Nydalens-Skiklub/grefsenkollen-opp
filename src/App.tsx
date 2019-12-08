import React, { useEffect } from "react";
import { HashRouter, useLocation } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

const ScrollTopTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollTopTop />
      <Navbar />
      <Main />
      <Footer />
    </HashRouter>
  );
};

export default App;
