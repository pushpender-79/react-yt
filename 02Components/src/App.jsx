import React from "react";

import Card from "./components/Card";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const user = "Pushpender";
  var age = 22;
  return (
    <div>

<Navbar />
      <div className="cards">
        <h1>Hello guys I am {user}</h1>
        <h2>and I am {age} years old</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          veniam!
        </p>
      </div>
      {/* same name as imported name...i.e. card  (for variables use curly braces or like self closing tag)*/}
      {/* {Card()}          */}
      {/* or */}
      <Card /> 
<br />
      <Card />
<br />
      <Card />
<br />
      <Card />



    
    </div>
  );
};

export default App;
