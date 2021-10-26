import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StatefullComponent } from "./containers/StatefullComponent";
import { HelloComponent } from "./components/HelloComponent";

ReactDOM.render(<HelloComponent />, document.getElementById("root"));
ReactDOM.render(<StatefullComponent />, document.getElementById("other"));

reportWebVitals();
