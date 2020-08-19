"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IssueTable(props) {
  //local variables
  var issueRows = props.issues.map(function (issue) {
    return _react.default.createElement(IssueRow, {
      key: issue.id,
      ix: issue
    });
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, " ID"), _react.default.createElement("th", null, "Status"), _react.default.createElement("th", null, " Owner"), _react.default.createElement("th", null, "Created"), _react.default.createElement("th", null, " Effort"), _react.default.createElement("th", null, "Due Date"), _react.default.createElement("th", null, " Title"), _react.default.createElement("th", null, "Action"))), _react.default.createElement("tbody", null, issueRows)));
}

var IssueRow = (0, _reactRouterDom.withRouter)(function (_ref) {
  var ix = _ref.ix,
      search = _ref.location.search;
  var selectLocation = {
    pathname: "/issues/".concat(ix.id),
    search: search
  };
  return _react.default.createElement("tr", null, _react.default.createElement("td", null, ix.id), _react.default.createElement("td", null, ix.status), _react.default.createElement("td", null, ix.owner), _react.default.createElement("td", null, ix.created.toDateString()), _react.default.createElement("td", null, ix.effort), _react.default.createElement("td", null, ix.due ? ix.due.toDateString() : ""), _react.default.createElement("td", null, ix.title), _react.default.createElement("td", null, _react.default.createElement(_reactRouterDom.Link, {
    to: "/edit/".concat(ix.id)
  }, "Edit"), "|", _react.default.createElement(_reactRouterDom.NavLink, {
    to: selectLocation
  }, "Select")));
});
var _default = IssueTable;
exports.default = _default;