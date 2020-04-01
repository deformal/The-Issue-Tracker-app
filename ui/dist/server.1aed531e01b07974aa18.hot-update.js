exports.id = "server";
exports.modules = {

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
/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store.js */ "./src/Store.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_9__);










class IssueEdit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData(match, showError) {
    const query = `query issue($id:Int!){
      issue(id:$id){
        id title status owner
        effort created due description
      }
    }`;
    const {
      params: {
        id
      }
    } = match;
    const result = await Object(_graphQLFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(query, {
      id
    }, showError);
    return result;
  }

  constructor() {
    super();
    const issue = _Store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData ? _Store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData.issue : null;
    delete _Store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData;
    this.state = {
      issue,
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
    const {
      issue
    } = this.state;
    if (issue == null) this.loadData();
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
      match
    } = this.props;
    const x = Number(id);
    const data = await IssueEdit.fetchData(match, this.showError);
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
      issue
    } = this.state;
    if (issue == null) return null;
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

/***/ })

};
//# sourceMappingURL=server.1aed531e01b07974aa18.hot-update.js.map