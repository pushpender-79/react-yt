// //there are two ways to call api... fetch and axios

// import React from 'react'
// import axios from 'axios'

// const App = () => {

// // async function getData(){
// // // console.log("data aa gya")  
// // const response=await fetch('https://jsonplaceholder.typicode.com/todos')   //this is an api link of json placeholder
// // console.log(response)
// // }
// // const getData=async()=>{
// // const response=await fetch('https://jsonplaceholder.typicode.com/users')
// // console.log(response)
// // const data=await response.json()   //to get the data in json format
// // console.log(data)
// // }

// const getData=async()=>{
// const response=await axios.get('https://jsonplaceholder.typicode.com/photos')
// console.log(response)
// console.log(response.data)
// }

//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App


//there are two ways to call api... fetch and axios

import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

const [data, setData] = useState([])

const getData=async()=>{
const response=await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(response)
console.log(response.data)
setData(response.data)
}

  return (
    <div>
      <button onClick={getData}>Get Data</button>
<div>
{data.map(function(elem,idx){
return <h3>{idx+1} Hello...{elem.name}</h3>
})}
</div>
    </div>
  )
}

export default App