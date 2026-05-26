import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
console.log(props.users)
  return (
    <div id='Right' className='h-full p-6 w-7/10 flex flex-nowrap gap-5 overflow-x-auto'>
    
{props.users.map(function(elem,idx){

return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>

})}
  

    </div>
  )
}

export default RightContent
