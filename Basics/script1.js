let h1 = document.createElement("h1");
h1.innerHTML = "Hello from js";
//console.log(h1);
document.body.appendChild(h1);

import { a } from "./app1.js"; //name should be same as exported because it is named export and in curly braces as well
console.log(a);

import WriteAnything from "./app1.js"; //name can be anything because it is default export
console.log(WriteAnything);
