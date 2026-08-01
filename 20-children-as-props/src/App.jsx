//this is concept of context api i.e children as props

import React from "react";
import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      {/* <Navbar  theme={theme}/> */}

{/* concept of children as props... */}
      <Navbar theme={theme}>
        <h3>This is Navbar</h3>
        <h3>A good Navbar</h3>
      </Navbar>

    </div>
  );
};

export default App;
