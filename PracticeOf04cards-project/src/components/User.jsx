import React from 'react'

const User = (props) => {
  return (
    <div style={{color:'white',backgroundColor:'black'}}>
        {props.name || props.elem}
    </div>
  )
}

export default User
