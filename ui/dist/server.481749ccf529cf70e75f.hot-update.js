exports.id = "server";
exports.modules = {

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
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Same-Site": "None"
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
      }
    }

    return result.data;
  } catch (e) {
    if (showError) showError(`Error in sending data to server:${e.message}`);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (graphQLFetch);

/***/ })

};
//# sourceMappingURL=server.481749ccf529cf70e75f.hot-update.js.map