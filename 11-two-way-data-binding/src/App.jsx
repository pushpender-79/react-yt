//in two way binding...khud task directly karne ki vajaye hum react se bolte hain kuchh bhi change karne ke liye with the help of useState

import React from "react";
import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by",title);
settitle('');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
console.log(e.target.value)
settitle(e.target.value)
}}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
