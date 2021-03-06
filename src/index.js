import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const HelloWorld = () => {
  return <p>Hello World!</p>;
};

ReactDOM.render(
    <HelloWorld />,
  document.getElementById("root")
);

// atau bisa merender langsung tag HTML
ReactDOM.render(
  <p>From React DOM</p>,
document.getElementById("other")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
