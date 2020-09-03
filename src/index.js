import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
  return <h2>Hello World</h2>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("app"));