import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';


const App = () => {
const [title, setTitle]= useState("")
const [details,setDetails]= useState('')
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(details);
const copyTask=[...task]
copyTask.push({title,details})
setTask(copyTask)
// console.log(copyTask)
setTitle('')
setDetails('')
  };

const deleteNote=(idx)=>{
// console.log("note deleted")
const copyTask=[...task]
// console.log(idx)
copyTask.splice(idx,1)
setTask(copyTask)
}



  return (
    <div className="h-screen bg-black text-white lg:flex">

      <form
        className="flex flex-col items-start lg:w-1/2 gap-4  w-1/2 p-10"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

{/* Pahla Input for Heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 rounded outline-none font-medium"
value={title}
onChange={(e)=>{
// console.log(e.target.value)
setTitle(e.target.value)
}}
        />

{/* Detailed vala Input */}
        <textarea
          type="text"
          placeholder="Write Details Here"
          className="px-5 py-2 w-full border-2 rounded h-32 outline-none font-medium"
value={details}
onChange={(e)=>{
// console.log(e.target.value)
setDetails(e.target.value)
}}
        />

        <button className="active:scale-95 bg-white text-black px-5 py-2 w-full border-2 rounded outline-none font-medium">
          Add Note
        </button>

      </form>
      <div className=" p-10 bg-gray-900 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Note</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {/* <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div> */}
{task.map(function(elem,idx){
return(
 <div
 key={idx}
 className="flex flex-col justify-between items-start relative h-52 w-40 rounded-2xl text-black py-9 px-4 pb-4 bg-cover bg-center bg-no-repeat bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]"
>
{/* <h3 className="absolute top-7 right-4 p-1 rounded-full text-xs bg-red-500"><X size={16} strokeWidth={2.75} /></h3> */}
<div>
<h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
<p className="mt-2 leading-tight text-xs font-medium text-gray-600">{elem.details}</p>
</div>
<button className="w-full bg-red-600 text-white rounded py-1 text-xs font-bold cursor-pointer active:scale-95"
onClick={()=>{
deleteNote(idx)
}}
>Delete</button>
</div>
)
})}
        </div>
      </div>
    </div>
  );
};

export default App;
