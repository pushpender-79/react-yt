import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
  <Card user='Aman' age={25} img='https://images.unsplash.com/photo-1778192391493-7436d746b128?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D' />
  <Card user='Rahul' age={30} img='https://plus.unsplash.com/premium_photo-1777559749481-acdc0069c261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' />
  {/* <Card /> */}
  
    </div>
  );
};

export default App;
