exports.id = "server";
exports.modules = {

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);

function template(body, data) {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--react terminologies api-->
    <title>React App with a server and seperate jsx file</title>
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
    <script src="https://apis.google.com/js/api:client.js"></script>
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
    <script>window._INITIAL_DATA_ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(data)}</script>
    <script src="/env.js"></script>
    <script src="/app.bundle.js"></script>
    <script src="/vendor.bundle.js"></script>
    
  </body>
</html>
`;
}

/***/ })

};
//# sourceMappingURL=server.3a453c6eb0bcdaf961eb.hot-update.js.map