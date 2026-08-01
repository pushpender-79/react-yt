//Navigation concept in react-router-dom v6

import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
// const btnClick = () => {
  //   // console.log("button is clicked..");
  //   navigate("/");
  // };
  return (
    <div className='py-2 px-5 bg-cyan-700'>
       <button
        className="font-medium bg-fuchsia-700 px-5 py-2 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home page
      </button>
      <button
        className="font-medium bg-fuchsia-700 px-5 py-2 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="font-medium bg-fuchsia-700 px-5 py-2 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2
