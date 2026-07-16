// import React from "react";

// const App = () => {
//   const submitHandler = () => {
//     console.log("form submitted");
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text" placeholder="Enter your name" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;


import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();     // iski vajah se form submit hoga but page reload nhi hoga...
    console.log("form submitted");
settitle('')
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
