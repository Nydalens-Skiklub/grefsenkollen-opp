import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";

const App: React.FC = () => {
  return (
    <div id="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
