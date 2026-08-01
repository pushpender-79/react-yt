import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-cyan-900">
      <h3 className="text-xl font-bold">Sheryians</h3>
      <div className="flex gap-10">
        {/* <a className='text-medium font-bold' href="/">Home</a>
<a className='text-medium font-bold' href="/about">About</a>
<a className='text-medium font-bold' href="/product">Product</a> */}

        <Link className='text-medium font-bold' to="/">Home</Link>
        <Link className='text-medium font-bold' to="/about">About</Link>
        <Link className='text-medium font-bold' to="/courses">Courses</Link>
        <Link className='text-medium font-bold' to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
