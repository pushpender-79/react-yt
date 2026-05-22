import React from 'react'

const User = (props) => {
  return (
    <div style={{color:'white'}}>
      {props.elem || props.name}
    </div>
  )
}

export default User
