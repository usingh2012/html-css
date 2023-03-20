import add from "./add/add.js";
console.log("inside index.js");
// import print from "./print/print.js"; //example of static import

let result = add(2, 3);
let str = `The result of 2 + 3 is ${result}`;
let root = document.getElementById("root");

// // let print = exportedObj.default;
// let h3 = print(str);
// root.appendChild(h3);

import("./print/print.js").then((exportedObj) => {
  let print = exportedObj.default;
  let h3 = print(str);
  root.appendChild(h3);
}); //example of dynamic import.
