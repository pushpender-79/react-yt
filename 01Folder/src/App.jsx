// function App(){
// //return "Hello Guys"
// // or
// return <h1>How are You!!</h1>
// }

// export default App

import React from 'react'

const App = () => {
  return (
<>
    <div id='Dad'>
      <h1 id='Child1'>Hello Guys</h1>
      <h2 id='Child2'>How are You!!</h2>
    </div>
<div id="Chacha"></div>
</>  //known as Fragment, it is used to wrap multiple elements without adding extra nodes to the DOM
  )
}

export default App
