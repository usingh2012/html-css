console.log("inside print.js");

export default (msg) => {
  let h3 = document.createElement("h3");
  root.appendChild(h3);
  let textNode = document.createTextNode(msg);
  h3.appendChild(textNode);
  return h3;
};
