//imports
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page.jsx";
import { HashRouter as Router } from "react-router-dom";

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.render(element, document.getElementById("contents")); //renders the element passed to it as an argument on the web browser

if (module.hot) {
  module.hot.accept();
}
