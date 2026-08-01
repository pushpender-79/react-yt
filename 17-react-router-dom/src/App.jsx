// react-router-dom is a library used fot routing...use command npm install react-router-dom
//types of router are browserrouter,hashrouter,memoryrouter,staticrouter etc..
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/hero" element={<About/>} />   agr hero use karna hai to search baar me type karte time bhi /hero hi search karna hoga about page ko dekhne k liye.. */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
