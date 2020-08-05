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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store.js */ "./src/Store.js");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");








 //the url search parameter are installed in here and are passed to other components


const SECTION_SIZE = 5;

function PageLink({
  params,
  page,
  activePage,
  children
}) {
  params.set("page", page);
  if (page === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    disabled: true
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_3__["LinkContainer"], {
    isActive: () => page === activePage,
    to: {
      search: `?${params.toString()}`
    }
  }, children);
}

class IssueList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData(match, search, showError) {
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_8___default.a(search);
    const vars = {
      hasSelection: false,
      selectedId: 0
    };
    if (params.get("status")) vars.status = params.get("status");
    const effortMin = parseInt(params.get("effortMin"), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get("effortMax"), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    let page = parseInt(params.get("page"), 10);
    if (Number.isNaN(page)) page = 1;
    vars.page = page;
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
      $page : Int!
    ){
      List(
        status : $status
        effortMin : $effortMin
        effortMax : $effortMax
        page: $page
      )
      { 
        issues
        {id title status owner created effort due}
        pages
      }    
         
            issue(id : $selectedId) @include (if : $hasSelection){id description }
    }`;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, vars, showError);
    return data;
  }

  constructor() {
    super();
    const initialData = _Store_js__WEBPACK_IMPORTED_MODULE_4__["default"].initialData || {
      List: {}
    };
    const {
      List: {
        issues,
        pages
      },
      issue: selectedIssue
    } = initialData;
    delete _Store_js__WEBPACK_IMPORTED_MODULE_4__["default"].initialData;
    this.state = {
      issues,
      selectedIssue,
      loading: true,
      pages
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    const {
      issues
    } = this.state;

    if (issues == null) {
      this.loadData();
      console.log("the componenet is loaded");
    } else {
      console.log("no issues");
    }
  }

  componentDidUpdate(prevProps) {
    try {
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
      }
    } catch (err) {
      console.log(err);
    }
  }

  async loadData() {
    try {
      const {
        location: {
          search
        },
        match,
        showError
      } = this.props;
      const data = await IssueList.fetchData(match, search, showError);

      if (data) {
        this.setState({
          issues: data.List.issues,
          selectedIssue: data.issue,
          pages: data.List.pages
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async closeIssue(index) {
    const {
      showSuccess,
      showError
    } = this.props;
    const query = `mutation issueClose($id:Int!){
    issueUpdate(id:$id,changes:{status:Closed}){
      id title status owner effort created due description
    }
  }`;
    const {
      issues
    } = this.state;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, {
      id: issues[index].id
    }, showError);

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
    const {
      showSuccess,
      showError
    } = this.props;
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
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, {
      id
    }, showError);

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
      const undoMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, `Deleted issue${id} successfully.`, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        bsStyle: "link",
        onClick: () => this.restoreIssue(id)
      }, "UNDO"));
      showSuccess(undoMessage);
    } else {
      this.loadData();
    }
  }

  async restoreIssue(id) {
    const query = `mutation issueRestore($id:Int!){
      issueRestore(id:$id)
    }`;
    const {
      showSuccess,
      showError
    } = this.props;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, {
      id
    }, showError);

    if (data) {
      showSuccess(`issue${id} restored  successfully`);
      this.loadData();
    }
  }

  render() {
    const {
      issues,
      pages,
      selectedIssue
    } = this.state;
    const {
      location: {
        search
      }
    } = this.props;
    if (issues == null) return null;
    const style = {
      margin: 30
    };
    const hasFilter = location.search !== "";
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_8___default.a(search);
    let page = parseInt(params.get("page"), 10);
    if (Number.isNaN(page)) page = 1;
    const startPage = Math.floor((page - 1) / SECTION_SIZE) * SECTION_SIZE + 1;
    const endPage = startPage + SECTION_SIZE - 1;
    const prevSection = startPage === 1 ? 0 : startPage - SECTION_SIZE;
    const nextSection = endPage >= pages ? 0 : startPage + SECTION_SIZE;
    const items = [];

    for (let i = startPage; i <= Math.min(endPage, pages); i++) {
      params.set("page", i);
      items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
        key: i,
        params: params,
        activePage: page,
        page: i
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, null, i)));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "all"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
      defaultExpanded: hasFilter
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Panel"].Heading, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Panel"].Title, {
      toggle: true
    }, "Filter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Panel"].Body, {
      collapsible: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      urlBase: "/issues"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      issues: this.state.issues,
      closeIssue: this.closeIssue,
      stat: this.state.Status,
      deleteIssue: this.deleteIssue
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      issue: selectedIssue
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
      params: params,
      page: prevSection
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, null, "<")), items, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
      params: params,
      page: nextSection
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"].Item, null, ">"))));
  }

}

const IssueListWithToast = Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;
/* harmony default export */ __webpack_exports__["default"] = (IssueListWithToast);

/***/ })

};
//# sourceMappingURL=server.8d0a3a9823b8e16abfe5.hot-update.js.map