exports.id = "server";
exports.modules = {

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
/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store.js */ "./src/Store.js");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueReport_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueReport.jsx */ "./src/IssueReport.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Toast.jsx */ "./src/Toast.jsx");







 //the url search parameter are installed in here and are passed to other components



class IssueList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData(match, search, showError) {
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_7___default.a(search);
    const vars = {
      hasSelection: false,
      selectedId: 0
    };
    if (params.get('status')) vars.status = params.get('status');
    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    const {
      params: {
        id
      }
    } = match;
    const idInt = parseInt(id, 10);

    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    const query = `query List(
      $status : StatusType
      $effortMin: Int
      $effortMax : Int
      $hasSelection : Boolean!
      $selectedId : Int!
    ){
      List(
        status : $status
        effortMin : $effortMin
        effortMax : $effortMax
      )
      }
      issue(id : $selectedId) @include (if : $hasSelection){
        id description
      }
    }`;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_5__["default"])(query, vars, showError);
    return data;
  }

  constructor() {
    super();
    const issues = _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialData ? _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialData.List : null;
    const selectedIssue = _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialData ? _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialData.issues : null;
    delete _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialData;
    this.state = {
      issues,
      selectedIssue,
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
    const {
      issues
    } = this.state;
    if (issues == null) this.loadData();
    this.loadData();
    console.log("the componenet is loaded");
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      },
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      location: {
        search
      },
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevSearch !== search || prevId !== id) {
      this.loadData();
      console.log(`component did update is working fine `);
    } else console.log("Component not updated");
  }

  async loadData() {
    try {
      const {
        location: {
          search
        },
        match
      } = this.props;
      const data = await IssueList.fetchData(match, search, this.showError);

      if (data) {
        this.setState({
          issues: data.issueList,
          selectedIssue: data.issue
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
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_5__["default"])(query, {
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
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_5__["default"])(query, {
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
      issues
    } = this.state;
    if (issues == null) return null;
    const {
      selectedIssue
    } = this.state;
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      issues: this.state.issues,
      closeIssue: this.closeIssue,
      stat: this.state.Status,
      deleteIssue: this.deleteIssue
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      issue: selectedIssue
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueReport_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      bsStyle: toastType
    }, toastMessage));
  }

}

/***/ })

};
//# sourceMappingURL=server.ed22b6a4740d451f9a7a.hot-update.js.map