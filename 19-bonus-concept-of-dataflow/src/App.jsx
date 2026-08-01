// import React from "react";
// import Navbar from "./components/Navbar";
// import { useState } from "react";

// const App = () => {
//   const [theme, setTheme] = useState("Dark");

//   return (
//     <div>
//       <h1>Theme is {theme}</h1>
//       <Navbar Theme={theme} />
//     </div>
//   );
// };

// export default App;


//this is how we can pass data through props from parent to child component and also we can pass function as props to child component and call it from there to change the state of parent component.

import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("Dark");

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar Theme={theme} SetTheme={setTheme} />
    </div>
  );
};

export default App;
