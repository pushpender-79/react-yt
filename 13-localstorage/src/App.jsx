import React from 'react'


const App = () => {
//4 methods setItem(),getItem(),removeItem(),clear()...used with localStorage and sessionStorage...

  localStorage.clear()   // Clear the local storage when the app is loaded
  sessionStorage.clear() // Clear the session storage when the app is loaded  

localStorage.setItem('name','Pushpender Chauhan') // Set a value in local storage
localStorage.setItem('age', 22) // Set a value in local storage
localStorage.setItem("income",'$100k')

sessionStorage.setItem('profile','Web Developer') // Set a value in session storage

const user = localStorage.getItem('name') // Get a value from local storage
console.log(user);

localStorage.removeItem('income')

// localStorage.clear()


const developer={
name:'Ankit',
age:23,
city:'Varanasi'
}
// console.log(developer)
// localStorage.setItem('Intern',developer)
localStorage.setItem('Intern',JSON.stringify(developer))

const intern1=localStorage.getItem('Intern')
console.log(intern1)
console.log(typeof(intern1))    //it will print string

const intern2=JSON.parse(localStorage.getItem('Intern'))
console.log(intern2)
console.log(typeof(intern2))

  return (
    <div>
      Hello
    </div>
  )
}

export default App
