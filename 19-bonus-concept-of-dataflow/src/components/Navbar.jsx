// import React from 'react'

// const Navbar = (props) => {
//   return (
//     <div>
//       <p>theme is : {props.Theme}</p>
//       <button>Change Theme</button>
//     </div>
//   )
// }

// export default Navbar

import React from "react";

const Navbar = (props) => {
  function changeTheme() {
    // console.log('theme changed...');
    props.SetTheme("Light");
  }
  // console.log(props);
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
      <p>theme is : {props.Theme}</p>
    </div>
  );
};

export default Navbar;
