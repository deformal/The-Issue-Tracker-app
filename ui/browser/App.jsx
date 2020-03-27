//imports
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Page from "../src/Page.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const element = (
  <Router>
    <Page />
  </Router>
);

ReactDOM.render(element, document.getElementById("contents"));

if (module.hot) {
  module.hot.accept();
}
