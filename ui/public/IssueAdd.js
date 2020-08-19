"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IssueAdd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var formData = document.forms.issueAdd;
      var issue = {
        owner: formData.owner.value,
        title: formData.title.value,
        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
        description: formData.description.value // effort: parseInt(formData.effort.value)

      };
      this.props.createIssue(issue);
      formData.owner.value = "";
      formData.title.value = "";
      formData.description.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "formarea"
      }, _react.default.createElement("h1", null, "Add a new issue"), _react.default.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, _react.default.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), _react.default.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("textarea", {
        name: "description",
        id: "",
        cols: "44",
        rows: "12",
        placeholder: "description"
      }), _react.default.createElement("button", null, "Add")));
    }
  }]);

  return IssueAdd;
}(_react.default.Component);

exports.default = IssueAdd;