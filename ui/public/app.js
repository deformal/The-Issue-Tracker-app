"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Page = _interopRequireDefault(require("./Page.jsx"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//imports
var element = _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_Page.default, null));

_reactDom.default.render(element, document.getElementById("contents")); //renders the element passed to it as an argument on the web browser


if (module.hot) {
  module.hot.accept();
}