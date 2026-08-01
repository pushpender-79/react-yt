import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Sheryians</h3>
      <div>
        {/* <a href="/">Hero</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
        {/* we use Link rather than anchor tag i.e a  so that routing change karte time pura page refresh na ho btw Link is predefind in react-router-dom */}

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
