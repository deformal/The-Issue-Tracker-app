"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contents;

var _react = _interopRequireDefault(require("react"));

var _IssueEdit = _interopRequireDefault(require("./IssueEdit.jsx"));

var _reactRouterDom = require("react-router-dom");

var _IssueList = _interopRequireDefault(require("./IssueList.jsx"));

var _IssueReport = _interopRequireDefault(require("./IssueReport.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notFound = function notFound() {
  return _react.default.createElement("h1", null, "Page not found");
};

function Contents() {
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/issues"
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/issues",
    component: _IssueList.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/report",
    component: _IssueReport.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/edit/:id",
    component: _IssueEdit.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: notFound
  }));
}