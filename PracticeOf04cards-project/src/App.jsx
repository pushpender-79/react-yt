import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
const ar=[10,20,30,99,50]; 
  return (
<div className="parent">
      <Card />
{/* <User name="John Doe" age={30} />
<User name="Hari" age={35} /> */}
{ar.map(function(elem){
//return elem
// return <h1 style={{color:'white'}}>{elem}</h1> ;
return <h1 style={{color:'white'}}>{elem/2}</h1> ;

})}
    </div>
  )
}

export default App
