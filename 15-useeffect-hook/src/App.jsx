// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);

//   // useEffect(function () {
//   //   console.log("useeffect is running...!!");
//   // });    //as usual chalega kuchh bhi change hoga to useeffect chal

//   // useEffect(function () {
//   //   console.log("useeffect is running...!!");
//   // }, []); //empty dependency array so useeffect runs only once on mount...here useeffect is independent

//   useEffect(
//     function () {
//       console.log("useeffect is running...!!");
//     },
//     [num],
//   ); //here useeffect is dependent on num..and will run whenever the num changes

//   return (
//     <div>
//       App111
//       <h1>num is : {num}</h1>
//       <h2>num2 is : {num2}</h2>
//       <button
//         onClick={function () {
//           setNum(num + 1);
//         }}
//         onDoubleClick={() => {
//           setNum2(num2 + 10);
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("a is changing");
  }
  function bChanging() {
    console.log("b is changing");
  }

useEffect(function(){
bChanging()
console.log("use effect is running...for b")
},[b])
useEffect(function(){
aChanging()
console.log("use effect is running...for a")
},[a])
  return (
    <div>
      <h1>A is: {a}</h1>
      <h2>B is: {b}</h2>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b + 10);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
