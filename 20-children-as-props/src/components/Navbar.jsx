import React from "react";
import Nav2 from "./Nav2";
import { Children } from "react";

const Navbar = (props) => {
// const Navbar = ({children,theme}) => {     //and after this rather than writing {props.children} and {props.theme} directly write {children} and {theme}
  console.log(props);
  console.log(props.theme);
  console.log(props.children);
  console.log(props.children[0]);
  console.log(props.children[1]);

  return (
    <div className="nav">
      <h2>Sheryians</h2>

    {/* children as props... */}
      {props.children}
      {/* {props.children[0]} */}
      {/* {props.children[1]} */}

      <Nav2 Theme={props.theme} />
    </div>
  );
};

export default Navbar;
