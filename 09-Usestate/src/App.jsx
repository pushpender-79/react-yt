// import React from 'react'

// const App = () => {

// let a=10;

// function changeValue(){
// console.log(a)
//   a++;
//   console.log(a);
// }

//   return (
//     <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={changeValue}>click here</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

// const [num, setNum] = useState(10)
// const [userName, setUserName] = useState("Pushpender Chouhan")
// // const changeUserName=()=>{
// // setUserName("Hari Chouhan")
// // }

// let changeValue=()=>{
// setNum(num+1);
// // setNum(30);
// setUserName("Hari Chouhan")
// }

//   return (
//     <div>
//       <h1>value of num is {num} <br/> value of user is {userName}</h1>
//       <button onClick={changeValue}>
//         click here
//       </button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(2);
//   return (
//     <div>
//       <h1>{num}</h1>

//       <button
//         onClick={function () {
//           setNum(num + 1);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={function () {
//           setNum(num - 2);
//         }}
//       >
//         Decrease
//       </button>

// <button onClick={function(){
// setNum(0)
// }}>Reset</button>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'

// const App = () => {
// //working with object in useState
// const [user, setUser] = useState({userName:'Sarthak',age:"28"})

// let changeUser=()=>{
// // console.log(user)
// // console.log(user.userName)
// // console.log(user.age)

// const newUser={...user}
// // console.log(newUser)
// newUser.userName='Aman'
// newUser.age=25
// // console.log(newUser)
// setUser(newUser)

// }

//   return (
//     <div>
//       <h1>{user.userName},{user.age}</h1>
// <button onClick={changeUser}>Click Me</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
// const [arr,setArr] = useState([10,20,30])

// const changeArr=()=>{
// setArr([30,40,50])
// }


//   return (
//     <div>
//       <h1>Hello Bros...this is an array:{arr}</h1>
// <button onClick={changeArr}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

// const [arr, setArr] = useState([10,20,30])

// const changeArr=()=>{
// const newArr=[...arr]
// newArr.push(99)
// setArr(newArr)
// }
//   return (
//     <div>
//       <h1>this is an array: {arr}</h1>
// <button onClick={changeArr}>click</button>
//     </div>
//   )
// }

// export default App



//Batch updates in react
import React, { useState } from 'react'

const App = () => {

const [num, setnum] = useState(10)

const updateValue=()=>{
// setnum(num+1)
// setnum(num+2)
// setnum(num+2)     //only last one function will make impact
setnum(prev=>(prev+1))
setnum(prev=>(prev-2))
setnum(prev=>(prev+6))
}

  return (
    <div>
      <h1>{num}</h1>
<button onClick={updateValue}>CLICK</button>
    </div>
  )
}

export default App

