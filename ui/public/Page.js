"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _Contents = _interopRequireDefault(require("./Contents.jsx"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  return _react.default.createElement("nav", null, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "navlinks",
    exact: true,
    to: "/"
  }, "Home"), " | ", _react.default.createElement(_reactRouterDom.NavLink, {
    className: "navlinks",
    to: "/issues"
  }, "Issue List"), " | ", _react.default.createElement(_reactRouterDom.NavLink, {
    className: "navlinks",
    to: "/report"
  }, "Report"));
}

function _default() {
  return _react.default.createElement("div", {
    className: "navbar"
  }, _react.default.createElement(Navbar, null), _react.default.createElement(_Contents.default, null));
}