"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IssueEdit;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IssueEdit(_ref) {
  var match = _ref.match;
  var id = match.params.id;
  return _react.default.createElement("h2", null, "this is a placeholder for editing issue ".concat(id));
}