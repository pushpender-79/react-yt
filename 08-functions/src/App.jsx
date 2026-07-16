// import React from "react";

// const App = () => {
//   function btnClicked() {
//     console.log("button is clicked");
//   }
//   function mouseEntered() {
//     console.log("mouse has been entered");
//   }
// function inputChanging(val){
// // console.log('user is typing')
// console.log(val)
// }
//   return (
//     <div>
//       <button onMouseEnter={mouseEntered} onClick={btnClicked}>
//         Hello Sarthak!
//       </button>
//       <button onClick={btnClicked}>Explore this</button>

//       <button
//         onDoubleClick={function () {
//           console.log("this is functin within button..");
//         }}
//       >
//         New button
//       </button>

//       <input
//         onClick={() => {
//           console.log("input par click hua hai....");
//         }}
//         type="text"
//         placeholder="Enter name"
//       />
      

// {/* <input onChange={inputChanging} type="text" placeholder="enter email" /> */}
// <input onChange={function(elem){
// inputChanging(elem.target.value)
// }} type="text" placeholder="enter email" />


// <input onChange={function (elem){
// // console.log(elem)
// // console.log(elem.target)
// console.log(elem.target.value)
// }} type="text" placeholder="enter dob" />
    

//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
const pageScrolling = (elem)=>{
console.log('pages are scrolling at speed',elem)
}
  return (
<div onWheel={(elem)=>{
pageScrolling(elem.deltaY)
}
}> 

 {/* <div onMouseMove={(elem)=>{
// console.log('Nachiiiioooo');
console.log(elem.clientX);
}} className="box"></div> */}



<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>



</div>
  )
}

export default App
