exports.id = "server";
exports.modules = {

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
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Issue Tracker Version 0.9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, _src_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialData ? _src_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialData.about : "unknown"));
  }

}

/***/ })

};
//# sourceMappingURL=server.bccce87c9c048ceb206e.hot-update.js.map