exports.id = "server";
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Page_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Page.jsx */ "./src/Page.jsx");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ "./server/template.js");
/* harmony import */ var _src_routes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/routes.js */ "./src/routes.js");
/* harmony import */ var _src_Store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Store.js */ "./src/Store.js");








async function render(req, res) {
  const activeRoute = _src_routes_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(route => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(req.path, route));
  let initialData;

  if (activeRoute && activeRoute.component.fetchData) {
    initialData = await activeRoute.component.fetchData();
  }

  const element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Page_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  const body = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(element);
  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body, initialData));
}

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
function template(body, data) {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--react terminologies api-->
    <title>React App with a server and seperate jsx file</title>
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
    <style>
      .panel-title a {
        display: block;
        width: 100%;
        cursor: pointer;
      }
      table.table-hover tr {
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <div id="contents">${body}</div>
    <script>window._INITIAL_DATA_ = ${JSON.stringify(data)}</script>
    <script src="/env.js"></script>
    <script src="/app.bundle.js"></script>
    <script src="/vendor.bundle.js"></script>
   
    
  </body>
</html>
`;
}

/***/ }),

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Store.js */ "./src/Store.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");



class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData() {
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__["default"])("query{about}");
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = _src_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialData ? _src_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialData.about : null;
    this.state = {
      apiAbout
    };
  }

  async componentDidMount() {
    const {
      apiAbout
    } = this.state;

    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({
        apiAbout: data.about
      });
    }
  }

  render() {
    const {
      apiAbout
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Issue Tracker Version 0.9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, apiAbout));
  }

}

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const notFound = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page not found");
};

function Contents() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    exact: true,
    from: "/",
    to: "/issues"
  }), _routes_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(attrs => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, attrs, {
    key: attrs.path
  }))));
}

/***/ }),

/***/ "./src/DateInput.jsx":
/*!***************************!*\
  !*** ./src/DateInput.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function displayFormat(date) {
  return date != null ? date.toDateString() : "";
}

function editFormat(date) {
  return date != null ? date.toISOString().substr(0, 10) : "";
}

function unformat(str) {
  const val = new Date(str);
  return Number.isNaN(val.getTime()) ? null : val;
}

class DateInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: editFormat(props.value),
      focused: false,
      valid: true
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur(e) {
    const {
      value,
      valid: oldValid
    } = this.state;
    const {
      onValidityChange,
      onChange
    } = this.props;
    const dateValue = unformat(value);
    const valid = value === "" || dateValue != null;

    if (valid !== oldValid && onValidityChange) {
      onValidityChange(e, valid);
    }

    this.setState({
      focused: false,
      valid
    });
    if (valid) onChange(e, dateValue);
  }

  onChange(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  }

  render() {
    const {
      valid,
      focused,
      value
    } = this.state;
    const {
      value: origValue,
      onValidityChange,
      ...props
    } = this.props;
    const displayValue = focused || !valid ? value : displayFormat(origValue);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, props, {
      value: displayValue,
      placeholder: focused ? "yyyy-mm-dd" : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  }

}

/***/ }),

/***/ "./src/IssueAddNavItem.jsx":
/*!*********************************!*\
  !*** ./src/IssueAddNavItem.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");






class IssueAddNavItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      toastVisible: false,
      toastMessage: "",
      toastType: "success"
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  showModal() {
    this.setState({
      showing: true
    });
  }

  hideModal() {
    this.setState({
      showing: false
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger"
    });
  }

  dismissToast() {
    this.setState({
      toastVisible: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
    };
    const query = `mutation issueAdd($issue:IssueInputs!){
                  issueAdd(issue:$issue){
                     id
                   }
                    }`;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
      issue
    }, this.showError);

    if (data) {
      const {
        history
      } = this.props;
      history.push(`/edit/${data.issueAdd.id}`);
    }
  }

  render() {
    const {
      showing
    } = this.state;
    const {
      toastVisible,
      toastMessage,
      toastType
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      onClick: this.showModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
      placement: "left",
      delayShow: 1000,
      overlay: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        id: "create-issue"
      }, "Create Issue")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Glyphicon"], {
      glyph: "plus"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      keyboard: true,
      show: showing,
      onHide: this.hideModal
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
      closeButton: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, null, "Create Issue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      name: "issueAdd"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      name: "title",
      autoFocus: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ControlLabel"], null, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      name: "owner",
      autoFocus: true
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "button",
      bsStyle: "primary",
      onClick: this.handleSubmit
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      bsStyle: "link",
      onClick: this.hideModal
    }, "Cancel")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(IssueAddNavItem));

/***/ }),

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");



class IssueDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      toastVisible: false,
      toastMessage: "",
      toastType: "info"
    };
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevId !== id) {
      this.loadData();
    }

    console.log(this.props.match);
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger"
    });
  }

  dismissToast() {
    this.setState({
      toastVisible: false
    });
  }

  async loadData() {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;
    const query = `query issue($id:Int!){
          issue(id:$id){
              id description
          }
      }`;
    const x = Number(id); //it finaly worked awesome

    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(query, {
      id: x
    }, this.showError);

    if (data) {
      this.setState({
        issue: data.issue
      });
    } else {
      this.setState({
        issue: {}
      });
    }
  }

  render() {
    const {
      issue: {
        description
      }
    } = this.state;
    const {
      toastVisible,
      toastType,
      toastMessage
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Descripton"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
  }

}

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphQLFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch */ "./src/graphQLFetch.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumInput.jsx */ "./src/NumInput.jsx");
/* harmony import */ var _DateInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateInput.jsx */ "./src/DateInput.jsx");
/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput.jsx */ "./src/TextInput.jsx");
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module './Store.jsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9__);










class IssueEdit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      invalidFields: {},
      showingValidation: false,
      toastVisible: false,
      toastMessage: "",
      toastType: "danger"
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.showValidation = this.showValidation.bind(this);
    this.dismissValidation = this.dismissValidation.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event, naturalValue) {
    const {
      name,
      value: textValue
    } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;
    this.setState(prevState => ({
      issue: { ...prevState.issue,
        [name]: value
      }
    }));
  }

  onValidityChange(event, valid) {
    const {
      name
    } = event.target;
    this.setState(prevState => {
      const invalidFields = { ...prevState.invalidFields,
        [name]: !valid
      };
      if (valid) delete invalidFields[name];
      return {
        invalidFields
      };
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.showValidation();
    const {
      issue,
      invalidFields
    } = this.state;
    if (Object.keys(invalidFields).length !== 0) return;
    const query = `mutation issueUpdate(
   $id:Int!
   $changes:IssueUpdateInputs!
    )
    {
      issueUpdate(
        id:$id
        changes:$changes
      ){
        id title status owner effort
        created due description
      }
    }`;
    const {
      id,
      created,
      ...changes
    } = issue;
    const data = await Object(_graphQLFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(query, {
      changes,
      id
    }, this.showError);

    if (data) {
      this.setState({
        issue: data.issueUpdate
      });
      this.showSuccess("Issue updated successfully");
    }
  }

  async loadData() {
    const query = `query issue($id:Int!){
   issue(id:$id){
     id title status owner effort created due description
   }
  }`;
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;
    const x = Number(id);
    const data = await Object(_graphQLFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(query, {
      id: x
    }, this.showError);
    this.setState({
      issue: data ? data.issue : {},
      invalidFields: {}
    });
  }

  showValidation() {
    this.setState({
      showingValidation: true
    });
  }

  dismissValidation() {
    this.setState({
      showingValidation: false
    });
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "success"
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger"
    });
  }

  dismissToast() {
    this.setState({
      toastVisible: false
    });
  }

  render() {
    const {
      issue: {
        id
      }
    } = this.state;
    const {
      match: {
        params: {
          id: propsId
        }
      }
    } = this.props;

    if (id == null) {
      if (propsId !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, `Issue with ID ${propsId} not found.`);
      }

      return null;
    }

    const {
      toastVisible,
      toastMessage,
      toastType
    } = this.state;
    const {
      invalidFields,
      showingValidation
    } = this.state;
    let validationMessage;
    console.log(invalidFields);

    if (Object.keys(invalidFields).length !== 0 && showingValidation) {
      validationMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
        bsStyle: "danger",
        onDismiss: this.dismissValidation
      }, "Please correct invalid fiels before submitting.");
    }

    const {
      issue: {
        title,
        status
      }
    } = this.state;
    const {
      issue: {
        owner,
        effort,
        description
      }
    } = this.state;
    const {
      issue: {
        created,
        due
      }
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Heading, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Title, null, `Editing issue: ${id}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
      horizontal: true,
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"].Static, null, created.toDateString()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: "select",
      name: "status",
      value: status,
      onChange: this.onChange
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "New"
    }, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Assigned"
    }, "Assigned"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Fixed"
    }, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Closed"
    }, "Closed")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
      name: "owner",
      value: owner,
      onChange: this.onChange,
      key: id
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__["default"],
      name: "effort",
      value: effort,
      onChange: this.onChange,
      key: id
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
      validationState: invalidFields.due ? "error" : null
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Due"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: _DateInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"],
      onValidityChange: this.onValidityChange,
      name: "due",
      value: due,
      onChange: this.onChange,
      key: id
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"].Feedback, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
      name: "title",
      value: title,
      onChange: this.onChange,
      key: id
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 3,
      lg: 2,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      sm: 9
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
      componentClass: _TextInput_jsx__WEBPACK_IMPORTED_MODULE_5__["default"],
      tag: "textarea",
      name: "description",
      rows: 8,
      cols: 50,
      value: description,
      onChange: this.onChange,
      key: id
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      smOffset: 2,
      sm: 6,
      componentClass: react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ControlLabel"]
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      bsStyle: "primary",
      type: "submit"
    }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9__["LinkContainer"], {
      to: "/issues"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      bsStyle: "link"
    }, "Back")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      smOffset: 2,
      sm: 9
    }, validationMessage)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: `/edit/${id - 1}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], null, " Previous ")), "  | ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: `/edit/${id + 1}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], null, " Next "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
    return null;
  }

}

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);






class IssueFilter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor({
    location: {
      search
    }
  }) {
    super();
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_2___default.a(search);
    this.state = {
      status: params.get("status") || "",
      effortMin: params.get("effortMin") || "",
      effortMax: params.get("effortMax") || "",
      changed: false
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOtiginalFilter = this.showOriginalFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      }
    } = prevProps;
    const {
      location: {
        search
      }
    } = this.props;

    if (prevSearch !== search) {
      this.showOtiginalFilter();
    }
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
      changed: true
    });
  }

  onChangeEffortMin(e) {
    const effortString = e.target.value;

    if (effortString.match(/^\d*$/)) {
      this.setState({
        effortMin: e.trget.value,
        changed: true
      });
    }
  }

  onChangeEffortMax(e) {
    const effortString = e.target.value;

    if (effortString.match(/^\d*$/)) {
      this.setState({
        effortMax: e.target.value,
        changed: true
      });
    }
  }

  showOriginalFilter() {
    const {
      location: {
        search
      }
    } = this.props;
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_2___default.a(search);
    this.setState({
      status: params.get("status") || "",
      effortMin: params.get("effortMin") || "",
      effortMax: params.get("effrotMax") || "",
      changed: false
    });
  }

  applyFilter() {
    const {
      status,
      effortMax,
      effortMin
    } = this.state;
    const {
      history
    } = this.props;
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_2___default.a();
    if (status) params.set("status", status);
    if (effortMin) params.set("effortMin", effortMin);
    if (effortMax) params.set("effortMax", effortMax);
    const search = params.toString() ? `?${params.toString()}` : "";
    history.push({
      pathname: "/issues",
      search
    });
  }

  render() {
    const {
      location: {
        search
      }
    } = this.props; //the value of the location parameter i.e search will be accessed here in search.

    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_2___default.a(search); //now search is passed here.

    const {
      status,
      changed
    } = this.state;
    const {
      effortMin,
      effortMax
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "selection"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"], null, "Status:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      componentClass: "select",
      value: status,
      onChange: this.onChangeStatus
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: ""
    }, "All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "New"
    }, "New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Fixed"
    }, "Fixed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Closed"
    }, "Closed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Assigned"
    }, "Assigned")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"], null, "Effort Between"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      value: effortMin,
      onChange: this.onChangeEffortMin
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Addon, null, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      value: effortMax,
      onChange: this.onChangeEffortMax
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ControlLabel"], null, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonToolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      bsStyle: "primary",
      type: "button",
      onClick: this.applyFilter
    }, "Apply"), "    ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      bsStyle: "primary",
      type: "button",
      onClick: this.showOtiginalFilter,
      disabled: !changed
    }, "Reset")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(IssueFilter));

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");






 //the url search parameter are installed in here and are passed to other components




class IssueList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      toastVisible: false,
      toastMessage: "",
      toastType: "info"
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
    console.log("the componenet is loaded");
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      }
    } = prevProps;
    const {
      location: {
        search
      }
    } = this.props;

    if (prevSearch !== search) {
      this.loadData();
      console.log(`component did update is working fine `);
    } else console.log("Component not updated");
  }

  async loadData() {
    try {
      const {
        location: {
          search
        }
      } = this.props;
      const params = new url_search_params__WEBPACK_IMPORTED_MODULE_6___default.a(search);
      const vars = {};
      if (params.get("status")) vars.status = params.get("status");
      const effortMin = parseInt(params.get("effortMin", 10));
      if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
      const effortMax = parseInt(params.get("effortMax"), 10);
      if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
      const query = `query List(
        $status:StatusType
        $effortMin:Int
        $effortMax:Int
        ){
      List(
        status:$status
        effortMin:$effortMin
        effortMax:$effortMax
        ){
        id title status owner created effort due
      }
    }`;
      const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query, vars, this.showError);

      if (data) {
        this.setState({
          issues: data.List
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async closeIssue(index) {
    const query = `mutation issueClose($id:Int!){
    issueUpdate(id:$id,changes:{status:Closed}){
      id title status owner effort created due description
    }
  }`;
    const {
      issues
    } = this.state;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query, {
      id: issues[index].id
    }, this.showError);

    if (data) {
      this.setState(prevState => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return {
          issues: newList
        };
      });
    } else {
      this.loadData();
    }
  }

  async deleteIssue(index) {
    const query = `mutation issueDelete($id:Int!){
    issueDelete(id:$id)
  }`;
    const {
      issues
    } = this.state;
    const {
      location: {
        pathname,
        search
      },
      history
    } = this.props;
    const {
      id
    } = issues[index];
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query, {
      id
    }, this.showError);

    if (data && data.issueDelete) {
      this.setState(prevState => {
        const newList = [...prevState.issues];

        if (pathname === `/issues/${id}`) {
          history.push({
            pathname: "/issues",
            search
          });
        }

        newList.splice(index, 1);
        return {
          issues: newList
        };
      });
      this.showSuccess(`Deleted issue ${id} successfully`);
    } else {
      this.loadData();
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "success"
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger"
    });
  }

  dismissToast() {
    this.setState({
      toastVisible: false
    });
  }

  render() {
    const {
      match
    } = this.props;
    const style = {
      margin: 30
    };
    const {
      toastVisible,
      toastType,
      toastMessage
    } = this.state;
    const hasFilter = location.search !== "";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "all"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"], {
      defaultExpanded: hasFilter
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Heading, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Title, {
      toggle: true
    }, "Filter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Panel"].Body, {
      collapsible: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      issues: this.state.issues,
      closeIssue: this.closeIssue,
      stat: this.state.Status,
      deleteIssue: this.deleteIssue
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: `${match.path}/:id`,
      component: _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueReport_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
  }

}

/***/ }),

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueReport; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueReport() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "This is an area for report ");
}

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__);





function IssueTable(props) {
  //local variables
  const issueRows = props.issues.map((issue, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {
    key: issue.id,
    ix: issue,
    closeIssue: props.closeIssue,
    deleteIssue: props.deleteIssue,
    index: index
  }));
  const Tablecollapse = {
    textAlign: "center"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: true,
    striped: true,
    bordered: true,
    condensed: true,
    hover: true,
    style: Tablecollapse
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Owner"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Effort"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Due Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, " Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows)));
}

const IssueRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(({
  ix,
  location: {
    search
  },
  closeIssue,
  index,
  deleteIssue
}) => {
  const selectLocation = {
    pathname: `/issues/${ix.id}`,
    search
  };
  const editTooltip = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    id: "close-tooltip",
    placement: "top"
  }, "Edit");
  const closeTooltip = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    id: "close-tooltip",
    placement: "top"
  }, "Close Issue");
  const deleteTooltip = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    id: "delete-tooltip",
    placement: "top"
  }, "Delete Issue");

  function onClose(e) {
    e.preventDefault();
    closeIssue(index);
  }

  function onDelete(e) {
    e.preventDefault();
    deleteIssue(index);
  }

  const tableRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.owner), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.effort), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.due ? ix.due.toDateString() : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ix.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__["LinkContainer"], {
    to: `/edit/${ix.id}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
    delayShow: 1000,
    overlay: editTooltip
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bsSize: "xsmall"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Glyphicon"], {
    glyph: "edit"
  })))), "  |  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
    delayShow: 200,
    overlay: closeTooltip
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bsSize: "xsmall",
    type: "button",
    onClick: onClose
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Glyphicon"], {
    glyph: "remove"
  }))), "  |  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["OverlayTrigger"], {
    delayShow: 200,
    overlay: deleteTooltip
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bsSize: "xsmall",
    type: "button",
    onClick: onDelete
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Glyphicon"], {
    glyph: "trash"
  })))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__["LinkContainer"], {
    to: selectLocation
  }, tableRow);
});
/* harmony default export */ __webpack_exports__["default"] = (IssueTable);

/***/ }),

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page Not Found");
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function format(num) {
  return num != null ? num.toString() : "";
}

function unformat(str) {
  const val = parseInt(str, 10);
  return Number.isNaN(val) ? null : val;
}

class NumInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: format(props.value)
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({
        value: e.target.value
      });
    }
  }

  onBlur(e) {
    const {
      onChange
    } = this.props;
    const {
      value
    } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const {
      value
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
      type: "text"
    }, this.props, {
      value: value,
      onBlur: this.onBlur,
      onChange: this.onChange
    }));
  }

}

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.jsx */ "./src/Contents.jsx");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueAddNavItem.jsx */ "./src/IssueAddNavItem.jsx");
/* harmony import */ var react_bootstrap_lib_NavbarHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/lib/NavbarHeader */ "react-bootstrap/lib/NavbarHeader");
/* harmony import */ var react_bootstrap_lib_NavbarHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_lib_NavbarHeader__WEBPACK_IMPORTED_MODULE_5__);







function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    inverse: true,
    collapseOnSelect: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_lib_NavbarHeader__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, null, "Issue Tracker"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    exact: true,
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: "/issues"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, "Issue List")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: "/report"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, "Report"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    pullRight: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueAddNavItem_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
    id: "user-dropdown",
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Glyphicon"], {
      glyph: "option-vertical"
    }),
    noCaret: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], null, "About"))))));
}

function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, "Full source code availabe at", "   ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/deformal/The-Issue-Tracker-app"
  }, "Saurabh Jainwal"), " ", "Github Repository"));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null));
});

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Store = {};
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);



function format(text) {
  return text != null ? text : "";
}

function unformat(text) {
  return text.trim().length === 0 ? null : text;
}

class TextInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: format(props.value)
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onBlur(e) {
    const {
      onChange
    } = this.props;
    const {
      value
    } = this.state;
    onChange(e, unformat(value));
  }

  render() {
    const {
      value
    } = this.state;
    const {
      tag = "input",
      ...props
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tag, { ...props,
      value,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }

}

/***/ }),

/***/ "./src/Toast.jsx":
/*!***********************!*\
  !*** ./src/Toast.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


class Toast extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidUpdate() {
    const {
      showing,
      onDismiss
    } = this.props;

    if (showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing,
      bsStyle,
      onDismiss,
      children
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      in: showing
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "fixed",
        bottom: 20,
        left: 20
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      bsStyle: bsStyle,
      onDismiss: onDismiss
    }, children)));
  }

}

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

async function graphQLFetch(query, variables = {}, showError = null) {
  const apiEndpoint =  false ? undefined : process.env.UI_SERVER_API_ENDPOINT;

  try {
    const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8000/",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];

      if (error.extensions.code == "BAD_USER_INPUT") {
        const details = error.extensions.exception.errors.join("\n");
        if (showError) showError(`${error.message}:\n${details}`);
      } else if (showError) {
        showError(`${error.extensions.code}:${error.message}`);
      } else {
        alert(`this is the error ${error.message}`);
      }
    }

    return result.data;
  } catch (e) {
    if (showError) showError(`Error in sending data to server:${e.message}`);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (graphQLFetch);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.jsx */ "./src/About.jsx");
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/NotFound.jsx");





const routes = [{
  path: "/issues",
  component: _IssueList_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: "/edit/:id",
  component: _IssueEdit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: "/report",
  component: _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: "/about",
  component: _About_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "*",
  component: _NotFound_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/lib/NavbarHeader":
/*!***************************************************!*\
  !*** external "react-bootstrap/lib/NavbarHeader" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/NavbarHeader");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "url-search-params":
/*!************************************!*\
  !*** external "url-search-params" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-search-params");

/***/ })

};
//# sourceMappingURL=server.7d5bf1e5a0e1242c385c.hot-update.js.map