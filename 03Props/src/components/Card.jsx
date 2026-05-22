import React from "react";
//props are used to pass data from parent component to child component...props means properties...iska name props ho jaruri nhi kuchh bhi rakh lo
const Card = (props) => {
    console.log(props);
  console.log(props.user,props.age);
  return (
    <div className="card">
      <img src={props.img} alt="profile" />
      <h4>{props.user} Sharma, {props.age}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, veniam!
      </p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
